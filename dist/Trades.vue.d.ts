import { Trade } from '@y2kfund/core/trades';
import { TradesProps } from './index';
declare const _default: import('vue').DefineComponent<TradesProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "row-click": (row: Trade) => any;
    maximize: () => any;
    minimize: () => any;
}, string, import('vue').PublicProps, Readonly<TradesProps> & Readonly<{
    "onRow-click"?: ((row: Trade) => any) | undefined;
    onMaximize?: (() => any) | undefined;
    onMinimize?: (() => any) | undefined;
}>, {
    showHeaderLink: boolean;
    accountId: string;
    highlightPnL: boolean;
    userId: string | null;
    window: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tradesColumnsBtnRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly appName: string;
            readonly totalTrades: number;
            readonly showHeaderLink: boolean;
            readonly "onRename-app"?: (() => any) | undefined;
            readonly "onToggle-columns"?: (() => any) | undefined;
            readonly onMaximize?: (() => any) | undefined;
            readonly onMinimize?: (() => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            columnsBtnRef: HTMLButtonElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "rename-app") => void) & ((event: "toggle-columns") => void) & ((event: "maximize") => void) & ((event: "minimize") => void);
        $el: HTMLDivElement;
        $options: import('vue').ComponentOptionsBase<Readonly<{
            appName: string;
            totalTrades: number;
            showHeaderLink: boolean;
        }> & Readonly<{
            "onRename-app"?: (() => any) | undefined;
            "onToggle-columns"?: (() => any) | undefined;
            onMaximize?: (() => any) | undefined;
            onMinimize?: (() => any) | undefined;
        }>, {
            columnsBtnRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "rename-app": () => any;
            "toggle-columns": () => any;
            maximize: () => any;
            minimize: () => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{}> & Omit<Readonly<{
        appName: string;
        totalTrades: number;
        showHeaderLink: boolean;
    }> & Readonly<{
        "onRename-app"?: (() => any) | undefined;
        "onToggle-columns"?: (() => any) | undefined;
        onMaximize?: (() => any) | undefined;
        onMinimize?: (() => any) | undefined;
    }>, "columnsBtnRef"> & import('vue').ShallowUnwrapRef<{
        columnsBtnRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            'columns-dropdown'?(_: {}): any;
        };
    }) | null;
    tradesColumnsPopupRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        show: boolean;
        visibleCols: any[];
        allOptions: import('./components/ColumnsDropdown.vue').ColumnOption[];
        columnRenames: Record<string, string>;
    }> & Readonly<{
        onClose?: (() => any) | undefined;
        "onUpdate:visibleCols"?: ((cols: any[]) => any) | undefined;
        "onMove-up"?: ((index: number) => any) | undefined;
        "onMove-down"?: ((index: number) => any) | undefined;
        "onOpen-rename"?: ((field: string, currentName: string) => any) | undefined;
        "onShow-all"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        close: () => any;
        "update:visibleCols": (cols: any[]) => any;
        "move-up": (index: number) => any;
        "move-down": (index: number) => any;
        "open-rename": (field: string, currentName: string) => any;
        "show-all": () => any;
    }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        dropdownRef: HTMLDivElement;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        show: boolean;
        visibleCols: any[];
        allOptions: import('./components/ColumnsDropdown.vue').ColumnOption[];
        columnRenames: Record<string, string>;
    }> & Readonly<{
        onClose?: (() => any) | undefined;
        "onUpdate:visibleCols"?: ((cols: any[]) => any) | undefined;
        "onMove-up"?: ((index: number) => any) | undefined;
        "onMove-down"?: ((index: number) => any) | undefined;
        "onOpen-rename"?: ((field: string, currentName: string) => any) | undefined;
        "onShow-all"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {}> | null;
    tableDiv: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
