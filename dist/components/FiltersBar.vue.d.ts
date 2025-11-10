import { ActiveFilter, FilterField } from '../composables/useTradesFilters';
type __VLS_Props = {
    activeFilters: ActiveFilter[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "clear-filter": (field: FilterField) => any;
    "clear-all": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onClear-filter"?: ((field: FilterField) => any) | undefined;
    "onClear-all"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
