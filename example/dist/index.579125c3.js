(()=>{
    const boxes = document.querySelectorAll(".box");
    const show = ()=>{
        boxes.forEach((box)=>onion.show(box));
    };
    const hide = ()=>{
        boxes.forEach((box)=>onion.hide(box));
    };
    const toggle = ()=>{
        boxes.forEach((box)=>onion.toggle(box));
    };
    document.querySelector(".button--show").addEventListener("click", show);
    document.querySelector(".button--hide").addEventListener("click", hide);
    document.querySelector(".button--toggle").addEventListener("click", toggle);
})();

//# sourceMappingURL=index.579125c3.js.map
