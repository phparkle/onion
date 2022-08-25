interface OnionElement extends HTMLElement {
    onion?: {
        abort: () => void;
    };
}
export declare function show(el: OnionElement): void;
export declare function hide(el: OnionElement): void;
export declare function toggle(el: OnionElement, force?: boolean): void;
export {};
