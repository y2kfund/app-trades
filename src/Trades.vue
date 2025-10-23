<!-- filepath: /Users/sb/gt/y2kfund/app-trades/src/Trades.vue -->
<script setup lang="ts">
import { onBeforeUnmount, onMounted, computed, ref, watch, nextTick } from 'vue'
import { DateTime } from 'luxon'                // <- added
;(window as any).luxon = { DateTime }          // <- expose for Tabulator
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import { useTradesQuery, type Trade } from '@y2kfund/core/trades'
import type { TradesProps } from './index'

const props = withDefaults(defineProps<TradesProps>(), {
  accountId: '1',
  highlightPnL: false,
  showHeaderLink: false,
  userId: null
})

const emit = defineEmits<{ 
  'row-click': [row: Trade]
  'minimize': []
}>()

// Query trades data with realtime updates
const q = useTradesQuery(props.accountId, props.userId)

// Tabulator instance
const tableDiv = ref<HTMLDivElement | null>(null)
let tabulator: Tabulator | null = null
const isTabulatorReady = ref(false)
const isTableInitialized = ref(false)

// Toast system
type ToastType = 'success' | 'error' | 'warning' | 'info'
interface Toast {
  id: number
  type: ToastType
  title: string
  message?: string
}

const toasts = ref<Toast[]>([])
let toastIdCounter = 0

function showToast(type: ToastType, title: string, message?: string) {
  const id = toastIdCounter++
  toasts.value.push({ id, type, title, message })
  setTimeout(() => removeToast(id), 5000)
}

function removeToast(id: number) {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index !== -1) toasts.value.splice(index, 1)
}

// Generic timezone formatting function
function formatTimestampWithTimezone(timestamp: string | null | undefined): string {
  if (!timestamp) {
    return '⏱️ Last Updated: Not available'
  }
  
  try {
    const date = new Date(timestamp)
    
    // Detect user's timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    
    // Map common timezones to their abbreviations with DST support
    const timezoneMap: { [key: string]: string } = {
      'Asia/Kolkata': 'IST',
      'Asia/Calcutta': 'IST',
      'America/New_York': date.getMonth() >= 2 && date.getMonth() < 10 ? 'EDT' : 'EST',
      'America/Los_Angeles': date.getMonth() >= 2 && date.getMonth() < 10 ? 'PDT' : 'PST',
      'America/Chicago': date.getMonth() >= 2 && date.getMonth() < 10 ? 'CDT' : 'CST',
      'America/Denver': date.getMonth() >= 2 && date.getMonth() < 10 ? 'MDT' : 'MST',
      'Europe/London': date.getMonth() >= 2 && date.getMonth() < 9 ? 'BST' : 'GMT',
      'Europe/Paris': date.getMonth() >= 2 && date.getMonth() < 9 ? 'CEST' : 'CET',
      'Australia/Sydney': date.getMonth() >= 9 || date.getMonth() < 3 ? 'AEDT' : 'AEST',
    }
    
    // Get the timezone abbreviation
    const timezoneName = timezoneMap[userTimeZone] || userTimeZone
    
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: userTimeZone
    })
    
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: userTimeZone
    })
    
    return `⏱️ Last Updated: ${formattedDate} at ${formattedTime} ${timezoneName}`
  } catch (error) {
    return `⏱️ Last Updated: ${timestamp}`
  }
}

// Generic context menu for columns showing fetched_at timestamp
function createFetchedAtContextMenu() {
  return [
    {
      label: (component: any) => {
        const rowData = component.getData()
        return formatTimestampWithTimezone(rowData.fetched_at)
      },
      action: () => {},
      disabled: true
    },
    {
      separator: true
    },
    {
      label: '📋 Copy timestamp to clipboard',
      action: (e: any, component: any) => {
        const rowData = component.getData()
        const fetchedAt = rowData.fetched_at
        
        if (fetchedAt) {
          navigator.clipboard.writeText(fetchedAt)
            .then(() => {
              showToast('success', 'Copied!', 'Timestamp copied to clipboard')
            })
            .catch((err) => {
              console.error('Failed to copy:', err)
              showToast('error', 'Copy Failed', 'Could not copy timestamp')
            })
        } else {
          showToast('warning', 'No Data', 'No timestamp available to copy')
        }
      }
    }
  ]
}

// Format helpers
function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

// helper: parse dd/mm/yyyy or ISO-like date to timestamp (ms)
function parseTradeDate(val: any): number | null {
  if (!val) return null
  const s = String(val).trim()
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/.exec(s)
  if (m) {
    let day = Number(m[1])
    let month = Number(m[2]) - 1
    let year = Number(m[3])
    if (year < 100) year += 2000
    const dt = new Date(year, month, day)
    return isNaN(dt.getTime()) ? null : dt.getTime()
  }
  const dt = new Date(s)
  return isNaN(dt.getTime()) ? null : dt.getTime()
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value)
}

// Computed values for summary
const totalTrades = computed(() => q.data.value?.length || 0)
const totalCommission = computed(() => {
  if (!q.data.value) return 0
  return q.data.value.reduce((sum, trade) => sum + (parseFloat(trade.ibCommission) || 0), 0)
})

const netQuantity = computed(() => {
  if (!q.data.value) return 0
  return q.data.value.reduce((sum, trade) => {
    const qty = parseFloat(trade.quantity) || 0
    return sum + (trade.buySell === 'BUY' ? qty : -qty)
  }, 0)
})

// Column definitions
const columns = computed(() => [
  /* {
    title: 'Trade ID',
    field: 'tradeID',
    minWidth: 100,
    frozen: true,
    sorter: 'string',
    formatter: (cell: any) => {
      const value = cell.getValue()
      return value ? `<span style="font-weight: 500;">${value}</span>` : '<span style="color: #6c757d; font-style: italic;">N/A</span>'
    },
    contextMenu: createFetchedAtContextMenu()
  }, */
  {
    title: 'Account',
    field: 'legal_entity',
    minWidth: 120,
    frozen: true,
    sorter: 'string',
    formatter: (cell: any) => {
      const value = cell.getValue()
      return value ? `<span style="font-weight: 500;">${value}</span>` : '<span style="color: #6c757d; font-style: italic;">N/A</span>'
    },
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Financial Instrument',
    field: 'symbol',
    minWidth: 120,
    frozen: true,
    sorter: 'string',
    formatter: (cell: any) => {
      return `<span style="font-weight: 600; color: #007bff;">${cell.getValue()}</span>`
    },
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Side',
    field: 'buySell',
    minWidth: 80,
    sorter: 'string',
    formatter: (cell: any) => {
      const value = cell.getValue()
      if (value === 'BUY') {
        return `<span style="color: #28a745; font-weight: bold;">BUY</span>`
      }
      if (value === 'SELL') {
        return `<span style="color: #dc3545; font-weight: bold;">SELL</span>`
      }
      return value
    },
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Open / Close',
    field: 'openCloseIndicator',
    minWidth: 100,
    sorter: 'string',
    formatter: (cell: any) => {
      const value = cell.getValue()
      if (value === 'O') {
        return `<span style="color: #17a2b8; font-weight: bold;">OPEN</span>`
      }
      if (value === 'C') {
        return `<span style="color: #6f42c1; font-weight: bold;">CLOSE</span>`
      }
      return value
    },
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Asset Class',
    field: 'assetCategory',
    minWidth: 120,
    sorter: 'string',
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Trade Date',
    field: 'tradeDate',
    minWidth: 120,
    sorter: 'date',
    // custom sorter that compares parsed timestamps so dd/mm/yyyy sorts correctly
    sorterFunc: (a: any, b: any, dir: any, rowA: any, rowB: any) => {
      const ta = parseTradeDate(rowA.getData().tradeDate) || 0
      const tb = parseTradeDate(rowB.getData().tradeDate) || 0
      return ta - tb
    },
    formatter: (cell: any) => {
      const val = cell.getValue()
      if (!val) return ''
      // parse dd/mm/yyyy or d/m/yyyy -> format "Mon DD, YYYY" (e.g. "Jul 21, 2025")
      const m = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/.exec(String(val).trim())
      let dt: Date
      if (m) {
        const day = Number(m[1])
        const month = Number(m[2]) - 1
        let year = Number(m[3])
        if (year < 100) year += 2000
        dt = new Date(year, month, day)
      } else {
        dt = new Date(val)
        if (isNaN(dt.getTime())) return String(val)
      }
      return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Settlement Date Target',
    field: 'settleDateTarget',
    minWidth: 140,
    sorter: 'date',
    // custom sorter that compares parsed timestamps so dd/mm/yyyy sorts correctly
    sorterFunc: (a: any, b: any, dir: any, rowA: any, rowB: any) => {
      const ta = parseTradeDate(rowA.getData().tradeDate) || 0
      const tb = parseTradeDate(rowB.getData().tradeDate) || 0
      return ta - tb
    },
    formatter: (cell: any) => {
      const val = cell.getValue()
      if (!val) return ''
      // parse dd/mm/yyyy or d/m/yyyy -> format "Mon DD, YYYY" (e.g. "Jul 21, 2025")
      const m = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/.exec(String(val).trim())
      let dt: Date
      if (m) {
        const day = Number(m[1])
        const month = Number(m[2]) - 1
        let year = Number(m[3])
        if (year < 100) year += 2000
        dt = new Date(year, month, day)
      } else {
        dt = new Date(val)
        if (isNaN(dt.getTime())) return String(val)
      }
      return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Quantity',
    field: 'quantity',
    minWidth: 140,
    hozAlign: 'right',
    sorter: 'number',
    // remove mutator (was hiding raw values) and compute in formatter
    formatter: (cell: any) => {
      const row = cell.getRow().getData()
      const rawQ = row?.quantity ?? ''
      const rawM = row?.multiplier ?? ''
      const q = parseFloat(rawQ) || 0
      const m = parseFloat(rawM) || 1
      const effective = q * m
      // show raw quantity, multiplier and effective value
      return formatNumber(effective)
    },
    // custom bottomCalc: sum of quantity * multiplier across visible rows
    /* bottomCalc: (values: any[], data: any[]) => {
      return (data || []).reduce((sum: number, r: any) => {
        const q = parseFloat(r.quantity) || 0
        const m = parseFloat(r.multiplier) || 1
        return sum + q * m
      }, 0)
    },
    bottomCalcFormatter: (cell: any) => formatNumber(cell.getValue() || 0), */
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Price',
    field: 'tradePrice',
    minWidth: 120,
    hozAlign: 'right',
    sorter: 'number',
    formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Total Premium',
    field: 'tradeMoney',
    minWidth: 120,
    hozAlign: 'right',
    sorter: 'number',
    formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
    contextMenu: createFetchedAtContextMenu()
  },  
  {
    title: 'Net Cash',
    field: 'netCash',
    minWidth: 120,
    hozAlign: 'right',
    sorter: 'number',
    formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'MTM PnL',
    field: 'mtmPnl',
    minWidth: 80,
    hozAlign: 'right',
    sorter: 'number',
    formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'FIFO Realized',
    field: 'fifoPnlRealized',
    minWidth: 80,
    hozAlign: 'right',
    sorter: 'number',
    // ensure Tabulator sees a numeric value (DB stores text)
    mutator: (value: any) => {
      const n = parseFloat(value)
      return isNaN(n) ? 0 : n
    },
    formatter: (cell: any) => {
      // cell.getValue() will now be a number thanks to mutator
      return `<span style="font-weight: 600;">${formatCurrency(parseFloat(cell.getValue()) || 0)}</span>`
    },
    bottomCalc: 'sum',
    bottomCalcFormatter: (cell: any) => formatCurrency(cell.getValue() || 0),
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Commission',
    field: 'ibCommission',
    minWidth: 120,
    hozAlign: 'right',
    sorter: 'number',
    formatter: (cell: any) => {
      return `<span style="color: #dc3545; font-weight: 600;">${formatCurrency(parseFloat(cell.getValue()) || 0)}</span>`
    },
    bottomCalc: 'sum',
    bottomCalcFormatter: (cell: any) => formatCurrency(cell.getValue()),
    contextMenu: createFetchedAtContextMenu()
  },
  {
    title: 'Close Price',
    field: 'closePrice',
    minWidth: 120,
    hozAlign: 'right',
    sorter: 'number',
    formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
    contextMenu: createFetchedAtContextMenu()
  }
])

// Initialize Tabulator
function initializeTabulator() {
  if (!tableDiv.value) return

  // Destroy existing table
  if (tabulator) {
    try { tabulator.destroy() } catch (error) {}
    tabulator = null
  }

  isTabulatorReady.value = false

  const tabulatorConfig: any = {
    data: q.data.value || [],
    columns: columns.value,
    layout: 'fitColumns',
    height: 'auto',
    placeholder: 'No trades available',
    virtualDom: false,
    rowClick: (e: any, row: any) => {
      const data = row.getData()
      emit('row-click', data)
      if (props.onRowClick) {
        props.onRowClick(data)
      }
    }
  }

  try {
    tabulator = new Tabulator(tableDiv.value, tabulatorConfig)
    
    tabulator.on('tableBuilt', function() {
      isTabulatorReady.value = true
    })
  } catch (error) {
    console.error('Error creating Tabulator:', error)
  }
}

// Initialize when data is ready
watch([() => q.isSuccess.value, tableDiv], async ([isSuccess, divRef]) => {
  if (isSuccess && divRef && !isTableInitialized.value) {
    await nextTick()
    initializeTabulator()
    isTableInitialized.value = true
  }
}, { immediate: true })

// Update data when it changes
watch(() => q.data.value, async (newData) => {
  if (!tabulator || !newData) return
  try {
    tabulator.replaceData(newData)
  } catch (error) {
    console.warn('Error updating table data:', error)
  }
}, { deep: true })

function onMinimize() {
  emit('minimize')
}

// Cleanup
onBeforeUnmount(() => {
  if (tabulator) {
    try {
      tabulator.destroy()
    } catch (error) {
      console.warn('Error destroying tabulator:', error)
    }
  }
  q._cleanup?.()
})
</script>

<template>
  <div class="trades-card">
    <!-- Toast notifications -->
    <div class="toast-container">
      <div 
        v-for="toast in toasts" 
        :key="toast.id" 
        :class="['toast', `toast-${toast.type}`]"
      >
        <strong>{{ toast.title }}</strong>
        <span v-if="toast.message">{{ toast.message }}</span>
        <button @click="removeToast(toast.id)" class="toast-close">×</button>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="q.isLoading.value" class="loading">
      <div class="loading-spinner"></div>
      Loading trades...
    </div>
    
    <!-- Error state -->
    <div v-else-if="q.isError.value" class="error">
      <h3>Error loading trades</h3>
      <p>{{ q.error.value }}</p>
    </div>
    
    <!-- Success state with Tabulator -->
    <div v-else-if="q.isSuccess.value" class="trades-container">
      <div class="trades-header">
        <h2>
          <router-link v-if="showHeaderLink" to="/trades">Trades:</router-link>
          <span v-else>Trades:</span>
        </h2>
        <div class="trades-tools">
          <div class="trades-count">{{ totalTrades }} trades</div>
          <div class="commission-total">Commission: {{ formatCurrency(totalCommission) }}</div>
          <div class="net-quantity">Net Qty: {{ formatNumber(netQuantity) }}</div>
          
          <button 
            v-if="showHeaderLink"
            @click="onMinimize"
            class="minimize-button"
            title="Minimize Trades"
          >
            −
          </button>
        </div>
      </div>

      <!-- Tabulator table -->
      <div ref="tableDiv" class="trades-grid"></div>
    </div>
  </div>
</template>

<style>
/* Import Tabulator CSS globally */
@import 'tabulator-tables/dist/css/tabulator_modern.min.css';
</style>

<style scoped>
.trades-card {
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
  background: white;
  position: relative;
}

.toast-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toast {
  min-width: 250px;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background: white;
  border-left: 4px solid;
  animation: slideIn 0.3s ease-out;
  position: relative;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-success {
  border-left-color: #28a745;
  background: #d4edda;
}

.toast-error {
  border-left-color: #dc3545;
  background: #f8d7da;
}

.toast-warning {
  border-left-color: #ffc107;
  background: #fff3cd;
}

.toast-info {
  border-left-color: #17a2b8;
  background: #d1ecf1;
}

.toast strong {
  font-size: 0.875rem;
  font-weight: 600;
}

.toast span {
  font-size: 0.8125rem;
}

.toast-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
  line-height: 1;
  padding: 0;
  width: 20px;
  height: 20px;
}

.toast-close:hover {
  opacity: 1;
}

.trades-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.trades-header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #495057;
}

.trades-tools {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.trades-count,
.commission-total,
.net-quantity {
  font-size: 0.875rem;
  color: #6c757d;
  background: #f8f9fa;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-weight: 500;
}

.commission-total {
  color: #dc3545;
  background: #f8d7da;
}

.minimize-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #dee2e6;
  background: #fff;
  color: #495057;
  cursor: pointer;
  font-size: 1.125rem;
  transition: all 0.2s;
}

.minimize-button:hover {
  background: #f9f9fa;
  border-color: #adb5bd;
  transform: scale(1.05);
}

.minimize-button:active {
  transform: scale(0.95);
}

.loading, .error {
  padding: 2rem;
  text-align: center;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

.loading {
  background-color: #f8f9fa;
  color: #6c757d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid #e9ecef;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.error h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
}

.error p {
  margin: 0;
  font-family: monospace;
  font-size: 0.875rem;
}

.trades-grid {
  margin-top: 0.5rem;
  min-height: 200px;
  height: auto;
  overflow: visible;
}

/* Tabulator theme overrides */
:deep(.tabulator) {
  font-size: 0.875rem;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  overflow: hidden;
}

:deep(.tabulator-header) {
  background-color: #f8f9fa !important;
  border-bottom: 2px solid #dee2e6 !important;
}

:deep(.tabulator-col) {
  border-right: 1px solid #dee2e6 !important;
  font-weight: 600;
}

:deep(.tabulator-col-title) {
  color: #495057;
}

:deep(.tabulator-row) {
  border-bottom: 1px solid #f1f3f5;
}

:deep(.tabulator-row:hover) {
  background-color: #f8f9fa !important;
}

:deep(.tabulator-row.tabulator-selected) {
  background-color: #e3f2fd !important;
}

:deep(.tabulator-cell) {
  border-right: 1px solid #dee2e6 !important;
  padding: 4px 8px;
}

/* Bottom calc row (totals) */
:deep(.tabulator-row.tabulator-calcs) {
  background-color: #f1f3f5 !important;
  font-weight: 600;
  border-top: 2px solid #dee2e6 !important;
}

:deep(.tabulator-row.tabulator-calcs .tabulator-cell) {
  background-color: #f1f3f5 !important;
}

/* Pagination */
:deep(.tabulator-footer) {
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
}

:deep(.tabulator-page) {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  background: white;
  margin: 0 0.125rem;
}

:deep(.tabulator-page.active) {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

:deep(.tabulator-page:hover:not(.disabled)) {
  background: #e9ecef;
}

@media (max-width: 768px) {
  .trades-card {
    padding: 1rem;
  }
  
  .trades-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .trades-grid {
    height: auto;
  }
}
</style>