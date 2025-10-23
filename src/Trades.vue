<!-- filepath: /Users/sb/gt/y2kfund/app-trades/src/Trades.vue -->
<script setup lang="ts">
import { onBeforeUnmount, onMounted, computed, ref, watch, nextTick, inject } from 'vue'
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

const eventBus = inject<any>('eventBus')

// Active filters
type ActiveFilter = { field: 'symbol' | 'legal_entity'; value: string }
const activeFilters = ref<ActiveFilter[]>([])

// Symbol filters
const symbolTagFilters = ref<string[]>([])

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

// Filter handlers
function handleCellFilterClick(field: 'legal_entity' | 'symbol', value: string) {
  if (field === 'legal_entity') {
    // Toggle account filter
    if (accountFilter.value === value) {
      accountFilter.value = null
      const url = new URL(window.location.href)
      url.searchParams.delete('all_cts_clientId')
      window.history.replaceState({}, '', url.toString())
      // Emit event to other components
      if (eventBus) {
        eventBus.emit('account-filter-changed', {
          accountId: null,
          source: 'trades'
        })
      }
    } else {
      accountFilter.value = value
      const url = new URL(window.location.href)
      url.searchParams.set('all_cts_clientId', value)
      window.history.replaceState({}, '', url.toString())
      // Emit event to other components
      if (eventBus) {
        eventBus.emit('account-filter-changed', {
          accountId: value,
          source: 'trades'
        })
      }
    }
    updateFilters()
  } else if (field === 'symbol') {
    // Toggle symbol tag filter
    const index = symbolTagFilters.value.indexOf(value)
    if (index > -1) {
      symbolTagFilters.value.splice(index, 1)
    } else {
      symbolTagFilters.value.push(value)
    }
    // Update URL
    const url = new URL(window.location.href)
    if (symbolTagFilters.value.length > 0) {
      url.searchParams.set('all_cts_fi', symbolTagFilters.value.join(','))
    } else {
      url.searchParams.delete('all_cts_fi')
    }
    window.history.replaceState({}, '', url.toString())
    
    // Emit event to other components
    if (eventBus) {
      eventBus.emit('symbol-filter-changed', {
        symbolTags: symbolTagFilters.value,
        source: 'trades'
      })
    }
    
    updateFilters()
  }
}

// Extract tags from symbol
function extractTagsFromSymbol(symbolText: string): string[] {
  if (!symbolText) return []
  const text = String(symbolText).trim()
  
  // Match base symbol (one or more uppercase letters at start)
  const symMatch = text.match(/^([A-Z]+)\s*/)
  const base = symMatch?.[1] ?? ''
  
  // Remove base symbol from text for further processing
  const remaining = text.slice(symMatch?.[0]?.length || 0)
  
  // Match expiry code (6 digits) followed by option type (C/P)
  const expiryMatch = remaining.match(/(\d{6})([CP])/)
  let expiry = ''
  let right = ''
  let strike = ''
  
  if (expiryMatch) {
    expiry = formatExpiryFromYyMmDd(expiryMatch[1])
    right = expiryMatch[2]
    
    // Extract strike price (remaining digits after expiry and option type)
    const afterExpiry = remaining.slice(expiryMatch[0].length)
    const strikeMatch = afterExpiry.match(/(\d+)/)
    if (strikeMatch) {
      // Parse as number, divide by 1000 to handle decimal places, then format
      const strikeValue = parseInt(strikeMatch[1], 10) / 1000
      strike = strikeValue.toString()
    }
  }
  
  return [base, expiry, strike, right].filter(Boolean)
}

function formatExpiryFromYyMmDd(code: string): string {
  if (!code || code.length !== 6) return ''
  const yy = code.substring(0, 2)
  const mm = code.substring(2, 4)
  const dd = code.substring(4, 6)
  return `20${yy}-${mm}-${dd}`
}

const accountFilter = ref<string | null>(null)

// Update filters to work with table
function updateFilters() {
  if (!tabulator || !isTabulatorReady.value) return

  try {
    tabulator.clearFilter(true)

    tabulator.setFilter((data: any) => {
      if (!data) return false

      // Account filter
      if (accountFilter.value) {
        // Support both string and object for legal_entity
        const accountVal = typeof data.legal_entity === 'object' && data.legal_entity !== null
          ? (data.legal_entity.name || data.legal_entity.id)
          : data.legal_entity
        if (accountVal !== accountFilter.value) return false
      }

      // Symbol tag filter
      if (symbolTagFilters.value.length > 0) {
        const symbolTags = extractTagsFromSymbol(data.symbol || '')
        const hasAllTags = symbolTagFilters.value.every(tag => symbolTags.includes(tag))
        if (!hasAllTags) return false
      }

      return true
    })

    syncActiveFiltersFromTable()
    nextTick(() => {
      if (tabulator) tabulator.redraw()
    })
  } catch (error) {
    console.warn('Error in updateFilters:', error)
  }
}

function syncActiveFiltersFromTable() {
  const next: ActiveFilter[] = []
  if (accountFilter.value) {
    next.push({ field: 'legal_entity', value: accountFilter.value })
  }
  if (symbolTagFilters.value.length > 0) {
    symbolTagFilters.value.forEach(tag => {
      next.push({ field: 'symbol', value: tag })
    })
  }
  activeFilters.value = next
  
  // Update total trades count
  if (tabulator && isTabulatorReady.value) {
    totalTrades.value = tabulator.getDataCount('active') || 0
  } else {
    totalTrades.value = q.data.value?.length || 0
  }
}

function clearFilter(field: 'legal_entity' | 'symbol') {
  if (field === 'legal_entity') {
    accountFilter.value = null
    const url = new URL(window.location.href)
    url.searchParams.delete('all_cts_clientId')
    window.history.replaceState({}, '', url.toString())
    // Emit event to other components
    if (eventBus) {
      eventBus.emit('account-filter-changed', {
        accountId: null,
        source: 'trades'
      })
    }
  } else if (field === 'symbol') {
    symbolTagFilters.value = []
    const url = new URL(window.location.href)
    url.searchParams.delete('all_cts_fi')
    window.history.replaceState({}, '', url.toString())
  }
  updateFilters()
}

function clearAllFilters() {
  accountFilter.value = null
  symbolTagFilters.value = []
  const url = new URL(window.location.href)
  url.searchParams.delete('all_cts_clientId')
  url.searchParams.delete('all_cts_fi')
  window.history.replaceState({}, '', url.toString())
  // Emit event to other components
  if (eventBus) {
    eventBus.emit('account-filter-changed', {
      accountId: null,
      source: 'trades'
    })
  }
  updateFilters()
}

// URL synchronization for filters
function parseFiltersFromUrl(): { legal_entity?: string; symbol?: string[] } {
  const url = new URL(window.location.href)
  const account = url.searchParams.get('all_cts_clientId') || undefined
  const symbolParam = url.searchParams.get('all_cts_fi') || undefined
  const symbol = symbolParam ? symbolParam.split(',').filter(Boolean) : undefined
  return { legal_entity: account, symbol }
}

function handleExternalAccountFilter(payload: { accountId: string | null, source: string }) {
  console.log('📍 [Trades] Received account filter:', payload)
  if (payload.source === 'trades') return

  // Apply or clear the filter
  accountFilter.value = payload.accountId
  const url = new URL(window.location.href)
  if (payload.accountId) {
    url.searchParams.set('all_cts_clientId', payload.accountId)
  } else {
    url.searchParams.delete('all_cts_clientId')
  }
  window.history.replaceState({}, '', url.toString())
  updateFilters()
}

function handleExternalSymbolFilter(payload: { symbolTags: string[], source: string }) {
  console.log('📍 [Trades] Received symbol filter:', payload)
  if (payload.source === 'trades') return

  // Apply the symbol filter
  symbolTagFilters.value = payload.symbolTags
  const url = new URL(window.location.href)
  if (payload.symbolTags.length > 0) {
    url.searchParams.set('all_cts_fi', payload.symbolTags.join(','))
  } else {
    url.searchParams.delete('all_cts_fi')
  }
  window.history.replaceState({}, '', url.toString())
  updateFilters()
}

onMounted(async () => {
  // Initialize filters from URL
  const filters = parseFiltersFromUrl()
  if (filters.legal_entity) accountFilter.value = filters.legal_entity
  if (filters.symbol) symbolTagFilters.value = filters.symbol

  // Try to initialize if data is already loaded
  if (q.isSuccess.value && tableDiv.value && !isTableInitialized.value) {
    await nextTick()
    initializeTabulator()
    isTableInitialized.value = true
  }

  updateFilters()

  if (eventBus) {
    eventBus.on('account-filter-changed', handleExternalAccountFilter)
    eventBus.on('symbol-filter-changed', handleExternalSymbolFilter)
  }
})

// Cleanup
onBeforeUnmount(() => {
  if (tabulator) {
    try {
      tabulator.destroy()
    } catch (error) {
      console.warn('Error destroying tabulator:', error)
    }
  }
  if (eventBus) {
    eventBus.off('account-filter-changed', handleExternalAccountFilter)
    eventBus.off('symbol-filter-changed', handleExternalSymbolFilter)
  }
  q._cleanup?.()
})

window.addEventListener('popstate', () => {
  const filters = parseFiltersFromUrl()
  accountFilter.value = filters.legal_entity || null
  symbolTagFilters.value = filters.symbol || []
  updateFilters()
})

// Watch for account filter changes
watch(accountFilter, () => {
  if (tabulator && isTabulatorReady.value) {
    updateFilters()
  }
})

// Watch for symbol tag filter changes
watch(symbolTagFilters, () => {
  if (tabulator && isTabulatorReady.value) {
    updateFilters()
  }
})

// Computed values for summary
const totalTrades = ref(0)

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
      if (typeof value === 'object' && value !== null) {
        return value.name || value.id || ''
      }
      return value ? `<span style="font-weight: 500;">${value}</span>` : '<span style="color: #6c757d; font-style: italic;">N/A</span>'
    },
    cellClick: (e: any, cell: any) => {
      const value = cell.getValue()
      const accountName = typeof value === 'object' && value !== null ? (value.name || value.id) : value
      handleCellFilterClick('legal_entity', accountName)
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
      const symbol = cell.getValue()
      if (!symbol) return '<span style="color: #6c757d; font-style: italic;">N/A</span>'
      
      const tags = extractTagsFromSymbol(symbol)
      const selectedTags = symbolTagFilters.value
      
      return tags.map(tag => {
        const isSelected = selectedTags.includes(tag)
        return `<span class="fi-tag ${isSelected ? 'fi-tag-selected' : ''}" data-tag="${tag}">${tag}</span>`
      }).join(' ')
    },
    cellClick: (e: any, cell: any) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('fi-tag')) {
        const clickedTag = target.getAttribute('data-tag')
        if (clickedTag) {
          handleCellFilterClick('symbol', clickedTag)
        }
      }
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
  // fixed height so Tabulator will keep header frozen and make the body scrollable
  height: '60vh',
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
      // Apply any filters that were set before the table was ready
      updateFilters()
      // Update total trades count
      if (tabulator) {
        totalTrades.value = tabulator.getDataCount('active') || 0
      }
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
    // Update total trades count
    totalTrades.value = q.data.value?.length || 0
  }
}, { immediate: true })

// Update data when it changes
watch(() => q.data.value, async (newData) => {
  if (!tabulator || !newData) return
  try {
    tabulator.replaceData(newData)
    // Re-apply filters after data update
    nextTick(() => {
      updateFilters()
      // Update total trades count
      if (tabulator) {
        totalTrades.value = tabulator.getDataCount('active') || 0
      }
    })
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

            <div v-if="activeFilters.length" class="filters-bar">
        <span class="filters-label">Filtered by:</span>
        <div class="filters-tags">
          <span v-for="f in activeFilters" :key="`${f.field}-${f.value}`" class="filter-tag">
            <strong>{{ f.field === 'legal_entity' ? 'Account' : f.field === 'symbol' ? 'Symbol' : 'Unknown' }}:</strong> {{ f.value }}
            <button class="tag-clear" @click="clearFilter(f.field)">✕</button>
          </span>
          <button class="btn-clear-all" @click="clearAllFilters">Clear all</button>
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

.filters-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.filters-label {
  font-size: 0.875rem;
  color: #495057;
  font-weight: 600;
}
.filters-tags {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.filter-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: #f1f3f5;
  color: #495057;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid #e9ecef;
  font-size: 0.8125rem;
}
.filter-tag .tag-clear {
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #6c757d;
}
.btn-clear-all {
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid #dee2e6;
  background: #fff;
  color: #6c757d;
  cursor: pointer;
  font-size: 0.8125rem;
}
/* Financial Instrument tags */
:deep(.fi-tag) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border: 1px solid #dbe2ea;
  border-radius: 999px;
  background: #f5f7fa;
  color: #425466;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 4px;
}

:deep(.fi-tag:hover) {
  background: #e8eef6;
  border-color: #b8c5d1;
}

:deep(.fi-tag-selected) {
  background: #007bff !important;
  color: white !important;
  border-color: #0056b3 !important;
}
.fi-tag-selected {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.fi-tag-selected:hover {
  background: #0056b3;
  border-color: #0056b3;
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
  height: 60vh; /* match Tabulator height so header stays fixed */
  overflow: hidden;
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