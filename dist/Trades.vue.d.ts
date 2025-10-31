import { Trade } from '@y2kfund/core/trades';
import { TradesProps } from './index';
declare const _default: import('vue').DefineComponent<TradesProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "row-click": (row: Trade) => any;
    minimize: () => any;
    maximize: () => any;
}, string, import('vue').PublicProps, Readonly<TradesProps> & Readonly<{
    "onRow-click"?: ((row: Trade) => any) | undefined;
    onMinimize?: (() => any) | undefined;
    onMaximize?: (() => any) | undefined;
}>, {
    accountId: string;
    highlightPnL: boolean;
    showHeaderLink: boolean;
    userId: string | null;
    window: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tradesColumnsBtnRef: HTMLButtonElement;
    tradesColumnsPopupRef: HTMLDivElement;
    tableDiv: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
