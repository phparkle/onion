function n(n,i){Object.entries(i).filter(function(n){return n[0].length}).forEach(function(i){return n.classList.toggle(i[0],i[1])})}function i(n,i){n.addEventListener("transitionend",i),n.addEventListener("animationend",i)}function o(n,i){n.removeEventListener("transitionend",i),n.removeEventListener("animationend",i)}function e(e,t){var s,a;if(void 0===t&&(t=""),e instanceof HTMLElement&&!e.classList.contains("is-opening")){null==(s=e.onion)||s.abort(),"is-opening"===t&&(t="");var c=function(){var i,o;n(e,((i={"is-open":!0,"is-opening":!0,"is-closing":!1})[t]=!1,i)),null==(o=e.onion)||o.abort()},r=setTimeout(c,2e3);e.onion={abort:function(){var i;o(e,c),clearTimeout(r),n(e,((i={})[t]=!1,i))}},i(e,c),n(e,((a={"is-open":!0,"is-opening":!1,"is-closing":!1})[t]=!1,a)),setTimeout(function(){var i;return n(e,((i={"is-open":!0,"is-opening":!0,"is-closing":!1})[t]=!0,i))})}}function t(e,t){var s,a;if(void 0===t&&(t=""),e instanceof HTMLElement&&!e.classList.contains("is-closing")&&e.classList.contains("is-open")){null==(s=e.onion)||s.abort(),"is-closing"===t&&(t="");var c=function(){var i,o;n(e,((i={"is-open":!1,"is-opening":!1,"is-closing":!1})[t]=!1,i)),null==(o=e.onion)||o.abort()},r=setTimeout(c,2e3);e.onion={abort:function(){var i;o(e,c),clearTimeout(r),n(e,((i={})[t]=!1,i))}},i(e,c),n(e,((a={"is-open":!0,"is-opening":!1,"is-closing":!0})[t]=!0,a))}}var s={show:e,hide:t,toggle:function(n,i,o,s){void 0===o&&(o=""),void 0===s&&(s=""),n instanceof HTMLElement&&(void 0===i?n.classList.contains("is-opening")?t(n,s):e(n,o):i?e(n,o):t(n,s))}};export{s as default};
//# sourceMappingURL=onion.module.js.map
