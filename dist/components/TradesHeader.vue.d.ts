type __VLS_Props = {
    appName: string;
    totalTrades: number;
    showHeaderLink: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'columns-dropdown'?(_: {}): any;
    };
    refs: {
        columnsBtnRef: HTMLButtonElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    columnsBtnRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "rename-app": () => any;
    "toggle-columns": () => any;
    maximize: () => any;
    minimize: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onRename-app"?: (() => any) | undefined;
    "onToggle-columns"?: (() => any) | undefined;
    onMaximize?: (() => any) | undefined;
    onMinimize?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    columnsBtnRef: HTMLButtonElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
