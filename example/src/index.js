import onion from "onion";

(() => {
  const boxes = document.querySelectorAll(".box--transition, .box--animation");
  const cssboxes = document.querySelectorAll(".box.animate__animated");

  const show = () => {
    boxes.forEach(box => onion.show(box));
    cssboxes.forEach(box => onion.show(box, "animate__bounceIn"));
  }
  
  const hide = () => {
    boxes.forEach(box => onion.hide(box));
    cssboxes.forEach(box => onion.hide(box, "animate__bounceOut"));
  }
  
  const toggle = () => {
    boxes.forEach(box => onion.toggle(box));
    cssboxes.forEach(box => onion.toggle(box, undefined, "animate__bounceIn", "animate__bounceOut"));
  }

  document.querySelector(".button--show").addEventListener("click", show);
  document.querySelector(".button--hide").addEventListener("click", hide);
  document.querySelector(".button--toggle").addEventListener("click", toggle);
})();
