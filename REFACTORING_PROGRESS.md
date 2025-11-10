# Trades.vue Refactoring Progress

## Current Status: Phase 1 - Creating Composables

### ✅ Completed
1. **useToast.ts** (30 lines) - Toast notification system
2. **useUrlSync.ts** (120 lines) - URL parameter synchronization

### 🔄 In Progress
3. **useTradesColumns.ts** - Will extract:
   - Column definitions Map (~600 lines)
   - Column visibility logic
   - Column rename logic
   - Drag & drop reorder functions

### ⏳ Todo
4. **useTradesFilters.ts** - Will extract:
   - Filter state (accountFilter, assetFilter, etc.)
   - handleCellFilterClick()
   - updateFilters()
   - clearFilter(), clearAllFilters()
   - External event handlers

5. **useTabulatorSetup.ts** - Will extract:
   - initializeTabulator()
   - Tabulator configuration
   - Data watching logic

## Components to Create
- ToastNotification.vue
- TradesHeader.vue
- FiltersBar.vue
- ColumnsDropdown.vue
- RenameDialog.vue

## Target
Reduce Trades.vue from **2011 lines** to **400-500 lines**
