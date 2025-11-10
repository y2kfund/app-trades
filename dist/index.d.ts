import { default as Trades } from './Trades.vue';
export { Trades };
export default Trades;
export interface TradesProps {
    accountId: string;
    highlightPnL?: boolean;
    onRowClick?: (row: any) => void;
    onMaximize?: () => void;
    onMinimize?: () => void;
    showHeaderLink?: boolean;
    userId?: string | null;
    window?: string | null;
}
