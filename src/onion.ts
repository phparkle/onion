interface OnionElement extends HTMLElement {
  onion?: {
    abort: () => void;
  }
}

interface ClassList {
  [key: string]: boolean;
}

function setClasses(el: Element, classes: ClassList) {
  Object.entries(classes)
    .filter(([key]) => key.length)
    .forEach(([key, value]) => el.classList.toggle(key, value));
}

function addEndListener(el: Element, listener: () => void) {
  el.addEventListener("transitionend", listener);
  el.addEventListener("animationend", listener);
}

function removeEndListener(el: Element, listener: () => void) {
  el.removeEventListener("transitionend", listener);
  el.removeEventListener("animationend", listener);
}

function show(el: OnionElement, token: string = "") {
  if (!(el instanceof HTMLElement)) return;

  if (el.classList.contains("is-opening"))
    return;

  el.onion?.abort();

  if (token === "is-opening")
    token = "";

  const handleEnd = (event?: Event) => {
    if (event?.target !== el) return;

    setClasses(el, {
      "is-open": true,
      "is-opening": true,
      "is-closing": false,
      [token]: false,
    });
    el.onion?.abort();
  }

  const timeoutID = setTimeout(handleEnd, 2000);

  el.onion = {
    abort: () => {
      removeEndListener(el, handleEnd);
      clearTimeout(timeoutID);
      setClasses(el, { [token]: false });
    }
  }

  addEndListener(el, handleEnd);

  setClasses(el, {
    "is-open": true,
    "is-opening": false,
    "is-closing": false,
    [token]: false,
  });

  setTimeout(() => setClasses(el, {
    "is-open": true,
    "is-opening": true,
    "is-closing": false,
    [token]: true,
  }));
}

function hide(el: OnionElement, token: string = "") {
  if (!(el instanceof HTMLElement)) return;

  if (el.classList.contains("is-closing") || !el.classList.contains("is-open"))
    return;

  el.onion?.abort();

  if (token === "is-closing")
    token = "";

  const handleEnd = (event?: Event) => {
    if (event?.target !== el) return;

    setClasses(el, {
      "is-open": false,
      "is-opening": false,
      "is-closing": false,
      [token]: false,
    });
    el.onion?.abort();
  }

  const timeoutID = setTimeout(handleEnd, 2000);

  el.onion = {
    abort: () => {
      removeEndListener(el, handleEnd);
      clearTimeout(timeoutID);
      setClasses(el, { [token]: false });
    }
  }

  addEndListener(el, handleEnd);

  setClasses(el, {
    "is-open": true,
    "is-opening": false,
    "is-closing": true,
    [token]: true,
  });
}

function toggle(el: OnionElement, force?: boolean, openingToken: string = "", closingToken: string = "") {
  if (!(el instanceof HTMLElement)) return;

  if (typeof force === 'undefined') {
    if (el.classList.contains('is-opening')) {
      hide(el, closingToken);
    } else {
      show(el, openingToken);
    }
  } else {
    if (force) show(el, openingToken);
    else hide(el, closingToken);
  }
}

export default {
  show,
  hide,
  toggle
};
