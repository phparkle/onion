!function(n, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], i) : i((n || self).onion = {});
}(this, function(n) {
    function i(n, i) {
        Object.entries(i).forEach(function(i) {
            return n.classList.toggle(i[0], i[1]);
        });
    }
    function o(n, i) {
        n.addEventListener("transitionend", i), n.addEventListener("animationend", i);
    }
    function e(n, i) {
        n.removeEventListener("transitionend", i), n.removeEventListener("animationend", i);
    }
    function s(n) {
        var s;
        if (n instanceof HTMLElement && (!n.classList.contains("is-open") || n.classList.contains("is-closing"))) {
            null == (s = n.onion) || s.abort();
            var t = function() {
                var o;
                i(n, {
                    "is-open": !0,
                    "is-closed": !1,
                    "is-opening": !1,
                    "is-closing": !1
                }), null == (o = n.onion) || o.abort();
            }, c = setTimeout(t, 2e3);
            n.onion = {
                abort: function() {
                    e(n, t), clearTimeout(c);
                }
            }, o(n, t), i(n, {
                "is-open": !1,
                "is-closed": !1,
                "is-opening": !1,
                "is-closing": !1
            }), setTimeout(function() {
                i(n, {
                    "is-open": !0,
                    "is-closed": !1,
                    "is-opening": !0,
                    "is-closing": !1
                });
            });
        }
    }
    function t(n) {
        var s;
        if (n instanceof HTMLElement && !n.classList.contains("is-closed")) {
            null == (s = n.onion) || s.abort();
            var t = function() {
                var o;
                i(n, {
                    "is-open": !1,
                    "is-closed": !0,
                    "is-opening": !1,
                    "is-closing": !1
                }), null == (o = n.onion) || o.abort();
            }, c = setTimeout(t, 2e3);
            n.onion = {
                abort: function() {
                    e(n, t), clearTimeout(c);
                }
            }, o(n, t), i(n, {
                "is-open": !0,
                "is-closed": !1,
                "is-opening": !1,
                "is-closing": !0
            });
        }
    }
    n.hide = t, n.show = s, n.toggle = function(n, i) {
        var o;
        n instanceof HTMLElement && (null == (o = n.onion) || o.abort(), void 0 === i ? n.classList.contains("is-open") && !n.classList.contains("is-closing") ? t(n) : s(n) : i ? s(n) : t(n));
    };
});

//# sourceMappingURL=index.3fe9b601.js.map
