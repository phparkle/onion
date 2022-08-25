interface OnionElement extends HTMLElement {
  onion?: {
    abort: () => void;
  }
}

interface ClassList {
  [key: string]: boolean;
}

function setClasses(el: Element, classes: ClassList) {
  Object.entries(classes).forEach(([key, value]) => el.classList.toggle(key, value));
}

function addEndListener(el: Element, listener: () => void) {
  el.addEventListener("transitionend", listener);
  el.addEventListener("animationend", listener);
}

function removeEndListener(el: Element, listener: () => void) {
  el.removeEventListener("transitionend", listener);
  el.removeEventListener("animationend", listener);
}

export function show(el: OnionElement) {
  if (!(el instanceof HTMLElement)) return;

  if (el.classList.contains("is-open") && !el.classList.contains("is-closing"))
    return;

  el.onion?.abort();

  const handleEnd = () => {
    setClasses(el, {
      'is-open': true,
      'is-closed': false,
      'is-opening': false,
      'is-closing': false,
    });
    el.onion?.abort();
  }

  const timeoutID = setTimeout(handleEnd, 2000);

  el.onion = {
    abort: () => {
      removeEndListener(el, handleEnd);
      clearTimeout(timeoutID);
    }
  }

  addEndListener(el, handleEnd);

  setClasses(el, {
    'is-open': false,
    'is-closed': false,
    'is-opening': false,
    'is-closing': false,
  });

  setTimeout(() => {
    setClasses(el, {
      'is-open': true,
      'is-closed': false,
      'is-opening': true,
      'is-closing': false,
    });
  });
}

export function hide(el: OnionElement) {
  if (!(el instanceof HTMLElement)) return;

  if (el.classList.contains("is-closed"))
    return;

  el.onion?.abort();

  const handleEnd = () => {
    setClasses(el, {
      'is-open': false,
      'is-closed': true,
      'is-opening': false,
      'is-closing': false,
    });
    el.onion?.abort();
  }

  const timeoutID = setTimeout(handleEnd, 2000);

  el.onion = {
    abort: () => {
      removeEndListener(el, handleEnd);
      clearTimeout(timeoutID);
    }
  }

  addEndListener(el, handleEnd);

  setClasses(el, {
    'is-open': true,
    'is-closed': false,
    'is-opening': false,
    'is-closing': true,
  });
}

export function toggle(el: OnionElement, force?: boolean) {
  if (!(el instanceof HTMLElement)) return;

  el.onion?.abort();

  if (typeof force === 'undefined') {
    if (el.classList.contains('is-open') && !el.classList.contains("is-closing")) {
      hide(el);
    } else {
      show(el);
    }
  } else {
    if (force) show(el);
    else hide(el);
  }
}
