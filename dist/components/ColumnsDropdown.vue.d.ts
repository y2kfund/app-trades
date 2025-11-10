export interface ColumnOption {
    field: string;
    label: string;
}
type __VLS_Props = {
    show: boolean;
    visibleCols: any[];
    allOptions: ColumnOption[];
    columnRenames: Record<string, string>;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
    "update:visibleCols": (cols: any[]) => any;
    "move-up": (index: number) => any;
    "move-down": (index: number) => any;
    "open-rename": (field: string, currentName: string) => any;
    "show-all": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:visibleCols"?: ((cols: any[]) => any) | undefined;
    "onMove-up"?: ((index: number) => any) | undefined;
    "onMove-down"?: ((index: number) => any) | undefined;
    "onOpen-rename"?: ((field: string, currentName: string) => any) | undefined;
    "onShow-all"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdownRef: HTMLDivElement;
}, any>;
export default _default;
