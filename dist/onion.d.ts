interface OnionElement extends HTMLElement {
    onion?: {
        abort?: () => void;
    };
}
declare function show(el: OnionElement, token?: string): void;
declare function hide(el: OnionElement, token?: string): void;
declare function toggle(el: OnionElement, force?: boolean, openingToken?: string, closingToken?: string): void;
declare const _default: {
    show: typeof show;
    hide: typeof hide;
    toggle: typeof toggle;
};
export default _default;
