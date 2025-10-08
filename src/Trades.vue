<!-- filepath: /Users/raj/vk-project/y2kfund/app-trades/src/Trades.vue -->
<script setup lang="ts">
import { onBeforeUnmount, computed, ref, watch } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import { AllCommunityModule } from 'ag-grid-community'
import type { ColDef } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
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

// Cleanup realtime subscription
onBeforeUnmount(() => {
  q._cleanup?.()
})

// Grid configuration
const gridApi = ref<any>(null)
const columnApiRef = ref<any>(null)
const pinnedBottomRowDataRef = ref<any[]>([])

const columnDefs = computed<ColDef[]>(() => [
  { 
    field: 'symbol', 
    headerName: 'Symbol',
    width: 120,
    pinned: 'left' as const,
    cellStyle: { fontWeight: '600', color: '#007bff' }
  },
  { 
    field: 'buySell', 
    headerName: 'Side',
    width: 80,
    cellStyle: (params) => {
      if (params.value === 'BUY') return { color: '#28a745', fontWeight: 'bold' }
      if (params.value === 'SELL') return { color: '#dc3545', fontWeight: 'bold' }
      return {}
    }
  },
  { 
    field: 'quantity', 
    headerName: 'Quantity',
    width: 120,
    type: 'rightAligned',
    valueFormatter: (params) => formatNumber(parseFloat(params.value) || 0)
  },
  { 
    field: 'tradePrice', 
    headerName: 'Price',
    width: 120,
    type: 'rightAligned',
    valueFormatter: (params) => formatCurrency(parseFloat(params.value) || 0)
  },
  { 
    field: 'assetCategory', 
    headerName: 'Asset Class',
    width: 120
  },
  { 
    field: 'tradeDate', 
    headerName: 'Trade Date',
    width: 120,
    valueFormatter: (params) => {
      if (!params.value) return ''
      return new Date(params.value).toLocaleDateString()
    }
  },
  { 
    field: 'settleDateTarget', 
    headerName: 'Settlement Date',
    width: 140,
    valueFormatter: (params) => {
      if (!params.value) return ''
      return new Date(params.value).toLocaleDateString()
    }
  },
  { 
    field: 'ibCommission', 
    headerName: 'Commission',
    width: 120,
    type: 'rightAligned',
    valueFormatter: (params) => formatCurrency(parseFloat(params.value) || 0),
    cellStyle: { color: '#dc3545', fontWeight: '600' }
  }
])

const defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  resizable: true,
  flex: 1,
  minWidth: 100
}

const gridOptions = {
  animateRows: true,
  domLayout: 'autoHeight',
  pinnedBottomRowData: pinnedBottomRowDataRef.value,
  suppressRowClickSelection: true,
  rowSelection: 'single'
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

// Format helpers
function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value)
}

function onGridReady(params: any) {
  gridApi.value = params.api
  columnApiRef.value = params.columnApi
  recalcPinnedTotals()
}

function recalcPinnedTotals() {
  const api = gridApi.value
  if (!api || !q.data.value) return
  
  // Get all displayed (filtered/sorted) rows
  const displayedRows: any[] = []
  api.forEachNodeAfterFilterAndSort((node: any) => {
    if (node.data) {
      displayedRows.push(node.data)
    }
  })
  
  // Calculate totals
  const totalCommissionSum = displayedRows.reduce((acc, row) => {
    const value = parseFloat(row.ibCommission) || 0
    return acc + value
  }, 0)
  
  const totalQuantitySum = displayedRows.reduce((acc, row) => {
    const value = parseFloat(row.quantity) || 0
    return acc + value
  }, 0)
  
  // Update pinned bottom row
  const totals = {
    symbol: 'TOTAL',
    buySell: '',
    quantity: totalQuantitySum.toString(),
    tradePrice: null,
    assetCategory: '',
    tradeDate: '',
    settleDateTarget: '',
    ibCommission: totalCommissionSum.toString()
  }
  
  pinnedBottomRowDataRef.value = [totals]
}

function onRowClicked(event: any) {
  if (event.data) {
    emit('row-click', event.data)
    if (props.onRowClick) {
      props.onRowClick(event.data)
    }
  }
}

function onMinimize() {
  emit('minimize')
}

// Recalculate when data changes
watch(() => q.data.value, () => {
  recalcPinnedTotals()
})
</script>

<template>
  <div class="trades-card">
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
    
    <!-- Success state with ag-grid -->
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

      <div class="ag-theme-alpine trades-grid">
        <AgGridVue
          :columnDefs="columnDefs"
          :rowData="q.data.value || []"
          :modules="[AllCommunityModule]"
          :defaultColDef="defaultColDef"
          :gridOptions="gridOptions"
          @grid-ready="onGridReady"
          @filter-changed="recalcPinnedTotals"
          @sort-changed="recalcPinnedTotals"
          @row-data-updated="recalcPinnedTotals"
          @row-clicked="onRowClicked"
          style="width: 100%;"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.trades-card {
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
  background: white;
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
  height: 100%;
  min-height: 200px;
}

/* ag-Grid styling */
::deep(.ag-theme-alpine) {
  --ag-header-background-color: #f8f9fa;
  --ag-header-foreground-color: #495057;
  --ag-border-color: #dee2e6;
  --ag-row-hover-color: #f8f9fa;
  --ag-selected-row-background-color: #e3f2fd;
}

::deep(.ag-theme-alpine .ag-header-cell) {
  font-weight: 600;
  font-size: 0.875rem;
  border-right: 1px solid #dee2e6;
}

::deep(.ag-theme-alpine .ag-cell) {
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  border-right: 1px solid #dee2e6;
}

/* Highlight pinned bottom total row */
::deep(.ag-theme-alpine .ag-row-pinned-bottom) {
  background-color: #f1f3f5 !important;
  font-weight: 600;
}

::deep(.ag-theme-alpine .ag-row-pinned-bottom .ag-cell) {
  border-top: 2px solid #dee2e6;
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
    height: 300px;
  }
}
</style>