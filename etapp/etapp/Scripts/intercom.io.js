﻿! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "https://js.intercomcdn.com/", t(0)
}([function(e, t, n) {
    "use strict";

    function i() {
        if (!window.Intercom || !window.Intercom.booted) {
            var e = n(1);
            e.start(), n(2), e.stop(), window.Intercom.booted = !0
        }
    }
    var o = {
            x9vv38av: !0
        },
        r = !1,
        a = window.intercomSettings;
    a && (r = a.boot_in_frame || o[a.app_id]), r ? n(287) : i(), n(290)
}, function(e, t) {
    "use strict";

    function n(e) {
        return e && !("prototype" in e)
    }
    var i = Function.prototype.bind;
    e.exports.start = function() {
        n(i) || delete Function.prototype.bind
    }, e.exports.stop = function() {
        i && (Function.prototype.bind = i)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(4),
        r = n(5),
        a = n(8),
        s = n(50),
        c = n(51),
        l = n(273),
        u = n(274),
        m = n(275),
        d = n(49),
        p = n(150),
        h = n(276),
        f = n(283),
        g = n(65),
        v = n(227),
        b = i("meta[name=intercom-js-api-base]").attr("content") || v.api_base,
        y = i("meta[name=intercom-js-api-base]").attr("content") || v.ping_api_base,
        w = new a(window.intercomSettings);
    d.initialize(w);
    var x = new f(w),
        _ = new h(b, y, w),
        k = new g(o.bind(_.matchMessage, _)),
        C = new s(_, x, k, w),
        A = window.Intercom && window.Intercom.q ? window.Intercom.q : [],
        T = o.any(A, function(e) {
            return "boot" === e[0] || "shutdown" === e[0]
        });
    r.sync = c(_, x), p.initialize(w), u(C), m(C), l(C), !T && w.isValid() && C.initialize()
}, function(e, t, n) {
    var i, o;
    ! function(t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, r) {
        function a(e) {
            var t = e.length,
                n = le.type(e);
            return "function" === n || le.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function s(e, t, n) {
            if (le.isFunction(t)) return le.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return le.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ve.test(t)) return le.filter(t, e, n);
                t = le.filter(t, e)
            }
            return le.grep(e, function(e) {
                return le.inArray(e, t) >= 0 !== n
            })
        }

        function c(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function l(e) {
            var t = Ae[e] = {};
            return le.each(e.match(Ce) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function u() {
            ye.addEventListener ? (ye.removeEventListener("DOMContentLoaded", m, !1), n.removeEventListener("load", m, !1)) : (ye.detachEvent("onreadystatechange", m), n.detachEvent("onload", m))
        }

        function m() {
            (ye.addEventListener || "load" === event.type || "complete" === ye.readyState) && (u(), le.ready())
        }

        function d(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(ze, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : je.test(n) ? le.parseJSON(n) : n
                    } catch (o) {}
                    le.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function p(e) {
            var t;
            for (t in e)
                if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function h(e, t, n, i) {
            if (le.acceptData(e)) {
                var o, r, a = le.expando,
                    s = e.nodeType,
                    c = s ? le.cache : e,
                    l = s ? e[a] : e[a] && a;
                if (l && c[l] && (i || c[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = Q.pop() || le.guid++ : a), c[l] || (c[l] = s ? {} : {
                    toJSON: le.noop
                }), "object" != typeof t && "function" != typeof t || (i ? c[l] = le.extend(c[l], t) : c[l].data = le.extend(c[l].data, t)), r = c[l], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[le.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[le.camelCase(t)])) : o = r, o
            }
        }

        function f(e, t, n) {
            if (le.acceptData(e)) {
                var i, o, r = e.nodeType,
                    a = r ? le.cache : e,
                    s = r ? e[le.expando] : le.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in i ? t = [t] : (t = le.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;) delete i[t[o]];
                        if (n ? !p(i) : !le.isEmptyObject(i)) return
                    }(n || (delete a[s].data, p(a[s]))) && (r ? le.cleanData([e], !0) : se.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function g() {
            return !0
        }

        function v() {
            return !1
        }

        function b() {
            try {
                return ye.activeElement
            } catch (e) {}
        }

        function y(e) {
            var t = Oe.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function w(e, t) {
            var n, i, o = 0,
                r = typeof e.getElementsByTagName !== Ee ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ee ? e.querySelectorAll(t || "*") : void 0;
            if (!r)
                for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || le.nodeName(i, t) ? r.push(i) : le.merge(r, w(i, t));
            return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], r) : r
        }

        function x(e) {
            Le.test(e.type) && (e.defaultChecked = e.checked)
        }

        function _(e, t) {
            return le.nodeName(e, "table") && le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function k(e) {
            return e.type = (null !== le.find.attr(e, "type")) + "/" + e.type, e
        }

        function C(e) {
            var t = Qe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function A(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) le._data(n, "globalEval", !t || le._data(t[i], "globalEval"))
        }

        function T(e, t) {
            if (1 === t.nodeType && le.hasData(e)) {
                var n, i, o, r = le._data(e),
                    a = le._data(t, r),
                    s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, o = s[n].length; o > i; i++) le.event.add(t, n, s[n][i])
                }
                a.data && (a.data = le.extend({}, a.data))
            }
        }

        function S(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !se.noCloneEvent && t[le.expando]) {
                    o = le._data(t);
                    for (i in o.events) le.removeEvent(t, i, o.handle);
                    t.removeAttribute(le.expando)
                }
                "script" === n && t.text !== e.text ? (k(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), se.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Le.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function E(e, t) {
            var i = le(t.createElement(e)).appendTo(t.body),
                o = n.getDefaultComputedStyle ? n.getDefaultComputedStyle(i[0]).display : le.css(i[0], "display");
            return i.detach(), o
        }

        function j(e) {
            var t = ye,
                n = ot[e];
            return n || (n = E(e, t), "none" !== n && n || (it = (it || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (it[0].contentWindow || it[0].contentDocument).document, t.write(), t.close(), n = E(e, t), it.detach()), ot[e] = n), n
        }

        function z(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function N(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = vt.length; o--;)
                if (t = vt[o] + n, t in e) return t;
            return i
        }

        function I(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = le._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Me(i) && (r[a] = le._data(i, "olddisplay", j(i.nodeName)))) : r[a] || (o = Me(i), (n && "none" !== n || !o) && le._data(i, "olddisplay", o ? n : le.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function M(e, t, n) {
            var i = pt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function P(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += le.css(e, n + Ie[r], !0, o)), i ? ("content" === n && (a -= le.css(e, "padding" + Ie[r], !0, o)), "margin" !== n && (a -= le.css(e, "border" + Ie[r] + "Width", !0, o))) : (a += le.css(e, "padding" + Ie[r], !0, o), "padding" !== n && (a += le.css(e, "border" + Ie[r] + "Width", !0, o)));
            return a
        }

        function L(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = rt(e),
                a = se.boxSizing() && "border-box" === le.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = at(e, t, r), (0 > o || null == o) && (o = e.style[t]), ct.test(o)) return o;
                i = a && (se.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + P(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function R(e, t, n, i, o) {
            return new R.prototype.init(e, t, n, i, o)
        }

        function U() {
            return setTimeout(function() {
                bt = void 0
            }), bt = le.now()
        }

        function H(e, t) {
            var n, i = {
                    height: e
                },
                o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Ie[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function V(e, t, n) {
            for (var i, o = (Ct[t] || []).concat(Ct["*"]), r = 0, a = o.length; a > r; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function $(e, t, n) {
            var i, o, r, a, s, c, l, u, m = this,
                d = {},
                p = e.style,
                h = e.nodeType && Me(e),
                f = le._data(e, "fxshow");
            n.queue || (s = le._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
                s.unqueued || c()
            }), s.unqueued++, m.always(function() {
                m.always(function() {
                    s.unqueued--, le.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = le.css(e, "display"), u = j(e.nodeName), "none" === l && (l = u), "inline" === l && "none" === le.css(e, "float") && (se.inlineBlockNeedsLayout && "inline" !== u ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", se.shrinkWrapBlocks() || m.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], wt.exec(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !f || void 0 === f[i]) continue;
                        h = !0
                    }
                    d[i] = f && f[i] || le.style(e, i)
                }
            if (!le.isEmptyObject(d)) {
                f ? "hidden" in f && (h = f.hidden) : f = le._data(e, "fxshow", {}), r && (f.hidden = !h), h ? le(e).show() : m.done(function() {
                    le(e).hide()
                }), m.done(function() {
                    var t;
                    le._removeData(e, "fxshow");
                    for (t in d) le.style(e, t, d[t])
                });
                for (i in d) a = V(h ? f[i] : 0, i, m), i in f || (f[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function O(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = le.camelCase(n), o = t[i], r = e[n], le.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = le.cssHooks[i], a && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function q(e, t, n) {
            var i, o, r = 0,
                a = kt.length,
                s = le.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (o) return !1;
                    for (var t = bt || U(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, a = 0, c = l.tweens.length; c > a; a++) l.tweens[a].run(r);
                    return s.notifyWith(e, [l, r, n]), 1 > r && c ? n : (s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: le.extend({}, t),
                    opts: le.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: bt || U(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = le.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? l.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) l.tweens[n].run(1);
                        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                    }
                }),
                u = l.props;
            for (O(u, l.opts.specialEasing); a > r; r++)
                if (i = kt[r].call(l, e, u, l.opts)) return i;
            return le.map(u, V, l), le.isFunction(l.opts.start) && l.opts.start.call(e, l), le.fx.timer(le.extend(c, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function B(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(Ce) || [];
                if (le.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function D(e, t, n, i) {
            function o(s) {
                var c;
                return r[s] = !0, le.each(e[s] || [], function(e, s) {
                    var l = s(t, n, i);
                    return "string" != typeof l || a || r[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
                }), c
            }
            var r = {},
                a = e === Kt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function F(e, t) {
            var n, i, o = le.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && le.extend(!0, e, n), e
        }

        function X(e, t, n) {
            for (var i, o, r, a, s = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)
                for (a in s)
                    if (s[a] && s[a].test(o)) {
                        c.unshift(a);
                        break
                    }
            if (c[0] in n) r = c[0];
            else {
                for (a in n) {
                    if (!c[0] || e.converters[a + " " + c[0]]) {
                        r = a;
                        break
                    }
                    i || (i = a)
                }
                r = r || i
            }
            return r ? (r !== c[0] && c.unshift(r), n[r]) : void 0
        }

        function W(e, t, n, i) {
            var o, r, a, s, c, l = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = u.shift())
                    if ("*" === r) r = c;
                    else if ("*" !== c && c !== r) {
                if (a = l[c + " " + r] || l["* " + r], !a)
                    for (o in l)
                        if (s = o.split(" "), s[1] === r && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                            a === !0 ? a = l[o] : l[o] !== !0 && (r = s[0], u.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (m) {
                        return {
                            state: "parsererror",
                            error: a ? m : "No conversion from " + c + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function K(e, t, n, i) {
            var o;
            if (le.isArray(t)) le.each(t, function(t, o) {
                n || Qt.test(e) ? i(e, o) : K(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== le.type(t)) i(e, t);
            else
                for (o in t) K(e + "[" + o + "]", t[o], n, i)
        }

        function J() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }

        function G() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function Z(e) {
            return le.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var Q = [],
            Y = Q.slice,
            ee = Q.concat,
            te = Q.push,
            ne = Q.indexOf,
            ie = {},
            oe = ie.toString,
            re = ie.hasOwnProperty,
            ae = "".trim,
            se = {},
            ce = "1.11.0",
            le = function(e, t) {
                return new le.fn.init(e, t)
            },
            ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            de = /-([\da-z])/gi,
            pe = function(e, t) {
                return t.toUpperCase()
            };
        le.fn = le.prototype = {
            jquery: ce,
            constructor: le,
            selector: "",
            length: 0,
            toArray: function() {
                return Y.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
            },
            pushStack: function(e) {
                var t = le.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return le.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(le.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(Y.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: te,
            sort: Q.sort,
            splice: Q.splice
        }, le.extend = le.fn.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || le.isFunction(a) || (a = {}), s === c && (a = this, s--); c > s; s++)
                if (null != (o = arguments[s]))
                    for (i in o) e = a[i], n = o[i], a !== n && (l && n && (le.isPlainObject(n) || (t = le.isArray(n))) ? (t ? (t = !1, r = e && le.isArray(e) ? e : []) : r = e && le.isPlainObject(e) ? e : {}, a[i] = le.extend(l, r, n)) : void 0 !== n && (a[i] = n));
            return a
        }, le.extend({
            expando: "jQuery" + (ce + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === le.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === le.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return e - parseFloat(e) >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
                try {
                    if (e.constructor && !re.call(e, "constructor") && !re.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (se.ownLast)
                    for (t in e) return re.call(e, t);
                for (t in e);
                return void 0 === t || re.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[oe.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                e && le.trim(e) && (n.execScript || function(e) {
                    n.eval.call(n, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(me, "ms-").replace(de, pe)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var i, o = 0,
                    r = e.length,
                    s = a(e);
                if (n) {
                    if (s)
                        for (; r > o && (i = t.apply(e[o], n), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.apply(e[o], n), i === !1) break
                } else if (s)
                    for (; r > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]), i === !1) break; return e
            },
            trim: ae && !ae.call("\ufeffÂ ") ? function(e) {
                return null == e ? "" : ae.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(ue, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (ne) return ne.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[o++] = t[i++];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
                return o
            },
            map: function(e, t, n) {
                var i, o = 0,
                    r = e.length,
                    s = a(e),
                    c = [];
                if (s)
                    for (; r > o; o++) i = t(e[o], o, n), null != i && c.push(i);
                else
                    for (o in e) i = t(e[o], o, n), null != i && c.push(i);
                return ee.apply([], c)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                return "string" == typeof t && (o = e[t], t = e, e = o), le.isFunction(e) ? (n = Y.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(Y.call(arguments)))
                }, i.guid = e.guid = e.guid || le.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: se
        }), le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            ie["[object " + t + "]"] = t.toLowerCase()
        });
        var he = function(e) {
            function t(e, t, n, i) {
                var o, r, a, s, c, l, m, h, f, g;
                if ((t ? t.ownerDocument || t : $) !== I && N(t), t = t || I, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (P && !i) {
                    if (o = be.exec(e))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (r = t.getElementById(a), !r || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && H(t, r) && r.id === a) return n.push(r), n
                        } else {
                            if (o[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && k.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (k.qsa && (!L || !L.test(e))) {
                        if (h = m = V, f = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = d(e), (m = t.getAttribute("id")) ? h = m.replace(we, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", c = l.length; c--;) l[c] = h + p(l[c]);
                            f = ye.test(e) && u(t.parentNode) || t, g = l.join(",")
                        }
                        if (g) try {
                            return Y.apply(n, f.querySelectorAll(g)), n
                        } catch (v) {} finally {
                            m || t.removeAttribute("id")
                        }
                    }
                }
                return x(e.replace(ce, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[V] = !0, e
            }

            function o(e) {
                var t = I.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function c(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(e) {
                return e && typeof e.getElementsByTagName !== W && e
            }

            function m() {}

            function d(e, n) {
                var i, o, r, a, s, c, l, u = D[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, c = [], l = C.preFilter; s;) {
                    i && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), c.push(r = [])), i = !1, (o = ue.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(ce, " ")
                    }), s = s.slice(i.length));
                    for (a in C.filter) !(o = he[a].exec(s)) || l[a] && !(o = l[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : D(e, c).slice(0)
            }

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function h(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = q++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, a) {
                    var s, c, l = [O, r];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if (c = t[V] || (t[V] = {}), (s = c[i]) && s[0] === O && s[1] === r) return l[2] = s[2];
                                if (c[i] = l, l[2] = e(t, n, a)) return !0
                            }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, t, n, i, o) {
                for (var r, a = [], s = 0, c = e.length, l = null != t; c > s; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), l && t.push(s)));
                return a
            }

            function v(e, t, n, o, r, a) {
                return o && !o[V] && (o = v(o)), r && !r[V] && (r = v(r, a)), i(function(i, a, s, c) {
                    var l, u, m, d = [],
                        p = [],
                        h = a.length,
                        f = i || w(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !i && t ? f : g(f, d, e, s, c),
                        b = n ? r || (i ? e : h || o) ? [] : a : v;
                    if (n && n(v, b, s, c), o)
                        for (l = g(b, p), o(l, [], s, c), u = l.length; u--;)(m = l[u]) && (b[p[u]] = !(v[p[u]] = m));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (l = [], u = b.length; u--;)(m = b[u]) && l.push(v[u] = m);
                                r(null, b = [], l, c)
                            }
                            for (u = b.length; u--;)(m = b[u]) && (l = r ? te.call(i, m) : d[u]) > -1 && (i[l] = !(a[l] = m))
                        }
                    } else b = g(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, c) : Y.apply(a, b)
                })
            }

            function b(e) {
                for (var t, n, i, o = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, c = h(function(e) {
                        return e === t
                    }, a, !0), l = h(function(e) {
                        return te.call(t, e) > -1
                    }, a, !0), u = [function(e, n, i) {
                        return !r && (i || n !== E) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i))
                    }]; o > s; s++)
                    if (n = C.relative[e[s].type]) u = [h(f(u), n)];
                    else {
                        if (n = C.filter[e[s].type].apply(null, e[s].matches), n[V]) {
                            for (i = ++s; o > i && !C.relative[e[i].type]; i++);
                            return v(s > 1 && f(u), s > 1 && p(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ce, "$1"), n, i > s && b(e.slice(s, i)), o > i && b(e = e.slice(i)), o > i && p(e))
                        }
                        u.push(n)
                    }
                return f(u)
            }

            function y(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    a = function(i, a, s, c, l) {
                        var u, m, d, p = 0,
                            h = "0",
                            f = i && [],
                            v = [],
                            b = E,
                            y = i || r && C.find.TAG("*", l),
                            w = O += null == b ? 1 : Math.random() || .1,
                            x = y.length;
                        for (l && (E = a !== I && a); h !== x && null != (u = y[h]); h++) {
                            if (r && u) {
                                for (m = 0; d = e[m++];)
                                    if (d(u, a, s)) {
                                        c.push(u);
                                        break
                                    }
                                l && (O = w)
                            }
                            o && ((u = !d && u) && p--, i && f.push(u))
                        }
                        if (p += h, o && h !== p) {
                            for (m = 0; d = n[m++];) d(f, v, a, s);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) f[h] || v[h] || (v[h] = Z.call(c));
                                v = g(v)
                            }
                            Y.apply(c, v), l && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                        }
                        return l && (O = w, E = b), f
                    };
                return o ? i(a) : a
            }

            function w(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
                return i
            }

            function x(e, t, n, i) {
                var o, r, a, s, c, l = d(e);
                if (!i && 1 === l.length) {
                    if (r = l[0] = l[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && k.getById && 9 === t.nodeType && P && C.relative[r[1].type]) {
                        if (t = (C.find.ID(a.matches[0].replace(xe, _e), t) || [])[0], !t) return n;
                        e = e.slice(r.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)
                        if ((c = C.find[s]) && (i = c(a.matches[0].replace(xe, _e), ye.test(r[0].type) && u(t.parentNode) || t))) {
                            if (r.splice(o, 1), e = i.length && p(r), !e) return Y.apply(n, i), n;
                            break
                        }
                }
                return S(e, l)(i, t, !P, n, ye.test(e) && u(t.parentNode) || t), n
            }
            var _, k, C, A, T, S, E, j, z, N, I, M, P, L, R, U, H, V = "sizzle" + -new Date,
                $ = e.document,
                O = 0,
                q = 0,
                B = n(),
                D = n(),
                F = n(),
                X = function(e, t) {
                    return e === t && (z = !0), 0
                },
                W = "undefined",
                K = 1 << 31,
                J = {}.hasOwnProperty,
                G = [],
                Z = G.pop,
                Q = G.push,
                Y = G.push,
                ee = G.slice,
                te = G.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ie = "[\\x20\\t\\r\\n\\f]",
                oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = oe.replace("w", "w#"),
                ae = "\\[" + ie + "*(" + oe + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ie + "*\\]",
                se = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
                ce = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                le = new RegExp("^" + ie + "*," + ie + "*"),
                ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                me = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                de = new RegExp(se),
                pe = new RegExp("^" + re + "$"),
                he = {
                    ID: new RegExp("^#(" + oe + ")"),
                    CLASS: new RegExp("^\\.(" + oe + ")"),
                    TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                },
                fe = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                we = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                _e = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                Y.apply(G = ee.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
            } catch (ke) {
                Y = {
                    apply: G.length ? function(e, t) {
                        Q.apply(e, ee.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            k = t.support = {}, T = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, N = t.setDocument = function(e) {
                var t, n = e ? e.ownerDocument || e : $,
                    i = n.defaultView;
                return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, M = n.documentElement, P = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    N()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    N()
                })), k.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), k.getElementsByTagName = o(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), k.getElementsByClassName = ve.test(n.getElementsByClassName) && o(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), k.getById = o(function(e) {
                    return M.appendChild(e).id = V, !n.getElementsByName || !n.getElementsByName(V).length
                }), k.getById ? (C.find.ID = function(e, t) {
                    if (typeof t.getElementById !== W && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function(e) {
                    var t = e.replace(xe, _e);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function(e) {
                    var t = e.replace(xe, _e);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== W && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = k.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== W ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, C.find.CLASS = k.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== W && P ? t.getElementsByClassName(e) : void 0
                }, R = [], L = [], (k.qsa = ve.test(n.querySelectorAll)) && (o(function(e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && L.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || L.push(":checked")
                }), o(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                })), (k.matchesSelector = ve.test(U = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(e) {
                    k.disconnectedMatch = U.call(e, "div"), U.call(e, "[s!='']:x"), R.push("!=", se)
                }), L = L.length && new RegExp(L.join("|")), R = R.length && new RegExp(R.join("|")), t = ve.test(M.compareDocumentPosition), H = t || ve.test(M.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, X = t ? function(e, t) {
                    if (e === t) return z = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !k.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === $ && H($, e) ? -1 : t === n || t.ownerDocument === $ && H($, t) ? 1 : j ? te.call(j, e) - te.call(j, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return z = !0, 0;
                    var i, o = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        c = [e],
                        l = [t];
                    if (!r || !s) return e === n ? -1 : t === n ? 1 : r ? -1 : s ? 1 : j ? te.call(j, e) - te.call(j, t) : 0;
                    if (r === s) return a(e, t);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (; c[o] === l[o];) o++;
                    return o ? a(c[o], l[o]) : c[o] === $ ? -1 : l[o] === $ ? 1 : 0
                }, n) : I
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== I && N(e), n = n.replace(me, "='$1']"), k.matchesSelector && P && (!R || !R.test(n)) && (!L || !L.test(n))) try {
                    var i = U.call(e, n);
                    if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (o) {}
                return t(n, I, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && N(e), H(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && N(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && J.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : k.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (z = !k.detectDuplicates, j = !k.sortStable && e.slice(0), e.sort(X), z) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return j = null, e
            }, A = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += A(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += A(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, _e), e[3] = (e[4] || e[5] || "").replace(xe, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && de.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, _e).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== W && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, c) {
                            var l, u, m, d, p, h, f = r !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                b = !c && !s;
                            if (g) {
                                if (r) {
                                    for (; f;) {
                                        for (m = t; m = m[f];)
                                            if (s ? m.nodeName.toLowerCase() === v : 1 === m.nodeType) return !1;
                                        h = f = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && b) {
                                    for (u = g[V] || (g[V] = {}), l = u[e] || [], p = l[0] === O && l[1], d = l[0] === O && l[2], m = p && g.childNodes[p]; m = ++p && m && m[f] || (d = p = 0) || h.pop();)
                                        if (1 === m.nodeType && ++d && m === t) {
                                            u[e] = [O, p, d];
                                            break
                                        }
                                } else if (b && (l = (t[V] || (t[V] = {}))[e]) && l[0] === O) d = l[1];
                                else
                                    for (;
                                        (m = ++p && m && m[f] || (d = p = 0) || h.pop()) && ((s ? m.nodeName.toLowerCase() !== v : 1 !== m.nodeType) || !++d || (b && ((m[V] || (m[V] = {}))[e] = [O, d]), m !== t)););
                                return d -= o, d === i || d % i === 0 && d / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[V] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = te.call(e, o[a]), e[i] = !(t[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = S(e.replace(ce, "$1"));
                        return o[V] ? i(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || A(t)).indexOf(e) > -1;
                        }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, _e).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === M
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (_ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[_] = s(_);
            for (_ in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[_] = c(_);
            return m.prototype = C.filters = C.pseudos, C.setFilters = new m, S = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = F[e + " "];
                if (!r) {
                    for (t || (t = d(e)), n = t.length; n--;) r = b(t[n]), r[V] ? i.push(r) : o.push(r);
                    r = F(e, y(o, i))
                }
                return r
            }, k.sortStable = V.split("").sort(X).join("") === V, k.detectDuplicates = !!z, N(), k.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), k.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(ne, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(n);
        le.find = he, le.expr = he.selectors, le.expr[":"] = le.expr.pseudos, le.unique = he.uniqueSort, le.text = he.getText, le.isXMLDoc = he.isXML, le.contains = he.contains;
        var fe = le.expr.match.needsContext,
            ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ve = /^.[^:#\[\.,]*$/;
        le.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? le.find.matchesSelector(i, e) ? [i] : [] : le.find.matches(e, le.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, le.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof e) return this.pushStack(le(e).filter(function() {
                    for (t = 0; o > t; t++)
                        if (le.contains(i[t], this)) return !0
                }));
                for (t = 0; o > t; t++) le.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? le.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(s(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(s(this, e || [], !0))
            },
            is: function(e) {
                return !!s(this, "string" == typeof e && fe.test(e) ? le(e) : e || [], !1).length
            }
        });
        var be, ye = n.document,
            we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            xe = le.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : we.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || be).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof le ? t[0] : t, le.merge(this, le.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ye, !0)), ge.test(n[1]) && le.isPlainObject(t))
                            for (n in t) le.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (i = ye.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return be.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = ye, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? "undefined" != typeof be.ready ? be.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
            };
        xe.prototype = le.fn, be = le(ye);
        var _e = /^(?:parents|prev(?:Until|All))/,
            ke = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        le.extend({
            dir: function(e, t, n) {
                for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !le(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), le.fn.extend({
            has: function(e) {
                var t, n = le(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (le.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], a = fe.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? le.unique(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(le.unique(le.merge(this.get(), le(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), le.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return le.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return le.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return le.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return le.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return le.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return le.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return le.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return le.sibling(e.firstChild)
            },
            contents: function(e) {
                return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes)
            }
        }, function(e, t) {
            le.fn[e] = function(n, i) {
                var o = le.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = le.filter(i, o)), this.length > 1 && (ke[e] || (o = le.unique(o)), _e.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var Ce = /\S+/g,
            Ae = {};
        le.Callbacks = function(e) {
            e = "string" == typeof e ? Ae[e] || l(e) : le.extend({}, e);
            var t, n, i, o, r, a, s = [],
                c = !e.once && [],
                u = function(l) {
                    for (n = e.memory && l, i = !0, r = a || 0, a = 0, o = s.length, t = !0; s && o > r; r++)
                        if (s[r].apply(l[0], l[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, s && (c ? c.length && u(c.shift()) : n ? s = [] : m.disable())
                },
                m = {
                    add: function() {
                        if (s) {
                            var i = s.length;
                            ! function r(t) {
                                le.each(t, function(t, n) {
                                    var i = le.type(n);
                                    "function" === i ? e.unique && m.has(n) || s.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            }(arguments), t ? o = s.length : n && (a = i, u(n))
                        }
                        return this
                    },
                    remove: function() {
                        return s && le.each(arguments, function(e, n) {
                            for (var i;
                                (i = le.inArray(n, s, i)) > -1;) s.splice(i, 1), t && (o >= i && o--, r >= i && r--)
                        }), this
                    },
                    has: function(e) {
                        return e ? le.inArray(e, s) > -1 : !(!s || !s.length)
                    },
                    empty: function() {
                        return s = [], o = 0, this
                    },
                    disable: function() {
                        return s = c = n = void 0, this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return c = void 0, n || m.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, n) {
                        return !s || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
                    },
                    fire: function() {
                        return m.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return m
        }, le.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", le.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", le.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", le.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return le.Deferred(function(n) {
                                le.each(t, function(t, r) {
                                    var a = le.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? le.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, le.each(t, function(e, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, o = 0,
                    r = Y.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && le.isFunction(e.promise) ? a : 0,
                    c = 1 === s ? e : le.Deferred(),
                    l = function(e, n, i) {
                        return function(o) {
                            n[e] = this, i[e] = arguments.length > 1 ? Y.call(arguments) : o, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && le.isFunction(r[o].promise) ? r[o].promise().done(l(o, i, r)).fail(c.reject).progress(l(o, n, t)) : --s;
                return s || c.resolveWith(i, r), c.promise()
            }
        });
        var Te;
        le.fn.ready = function(e) {
            return le.ready.promise().done(e), this
        }, le.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? le.readyWait++ : le.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--le.readyWait : !le.isReady) {
                    if (!ye.body) return setTimeout(le.ready);
                    le.isReady = !0, e !== !0 && --le.readyWait > 0 || (Te.resolveWith(ye, [le]), le.fn.trigger && le(ye).trigger("ready").off("ready"))
                }
            }
        }), le.ready.promise = function(e) {
            if (!Te)
                if (Te = le.Deferred(), "complete" === ye.readyState) setTimeout(le.ready);
                else if (ye.addEventListener) ye.addEventListener("DOMContentLoaded", m, !1), n.addEventListener("load", m, !1);
            else {
                ye.attachEvent("onreadystatechange", m), n.attachEvent("onload", m);
                var t = !1;
                try {
                    t = null == n.frameElement && ye.documentElement
                } catch (i) {}
                t && t.doScroll && ! function o() {
                    if (!le.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        u(), le.ready()
                    }
                }()
            }
            return Te.promise(e)
        };
        var Se, Ee = "undefined";
        for (Se in le(se)) break;
        se.ownLast = "0" !== Se, se.inlineBlockNeedsLayout = !1, le(function() {
                var e, t, n = ye.getElementsByTagName("body")[0];
                n && (e = ye.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = ye.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== Ee && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (se.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
            }),
            function() {
                var e = ye.createElement("div");
                if (null == se.deleteExpando) {
                    se.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        se.deleteExpando = !1
                    }
                }
                e = null
            }(), le.acceptData = function(e) {
                var t = le.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            };
        var je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ze = /([A-Z])/g;
        le.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando], !!e && !p(e)
            },
            data: function(e, t, n) {
                return h(e, t, n)
            },
            removeData: function(e, t) {
                return f(e, t)
            },
            _data: function(e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return f(e, t, !0)
            }
        }), le.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = le.data(r), 1 === r.nodeType && !le._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) i = a[n].name, 0 === i.indexOf("data-") && (i = le.camelCase(i.slice(5)), d(r, i, o[i]));
                        le._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    le.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    le.data(this, e, t)
                }) : r ? d(r, e, le.data(r, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    le.removeData(this, e)
                })
            }
        }), le.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = le._data(e, t), n && (!i || le.isArray(n) ? i = le._data(e, t, le.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = le.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = le._queueHooks(e, t),
                    a = function() {
                        le.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return le._data(e, n) || le._data(e, n, {
                    empty: le.Callbacks("once memory").add(function() {
                        le._removeData(e, t + "queue"), le._removeData(e, n)
                    })
                })
            }
        }), le.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? le.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = le.queue(this, e, t);
                    le._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && le.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    le.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = le.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = le._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ie = ["Top", "Right", "Bottom", "Left"],
            Me = function(e, t) {
                return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
            },
            Pe = le.access = function(e, t, n, i, o, r, a) {
                var s = 0,
                    c = e.length,
                    l = null == n;
                if ("object" === le.type(n)) {
                    o = !0;
                    for (s in n) le.access(e, t, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, le.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(le(e), n)
                    })), t))
                    for (; c > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : l ? t.call(e) : c ? t(e[0], n) : r
            },
            Le = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = ye.createDocumentFragment(),
                t = ye.createElement("div"),
                n = ye.createElement("input");
            if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", se.leadingWhitespace = 3 === t.firstChild.nodeType, se.tbody = !t.getElementsByTagName("tbody").length, se.htmlSerialize = !!t.getElementsByTagName("link").length, se.html5Clone = "<:nav></:nav>" !== ye.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), se.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", se.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", se.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, se.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    se.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == se.deleteExpando) {
                se.deleteExpando = !0;
                try {
                    delete t.test
                } catch (i) {
                    se.deleteExpando = !1
                }
            }
            e = t = n = null
        }(),
        function() {
            var e, t, i = ye.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (se[e + "Bubbles"] = t in n) || (i.setAttribute(t, "t"), se[e + "Bubbles"] = i.attributes[t].expando === !1);
            i = null
        }();
        var Re = /^(?:input|select|textarea)$/i,
            Ue = /^key/,
            He = /^(?:mouse|contextmenu)|click/,
            Ve = /^(?:focusinfocus|focusoutblur)$/,
            $e = /^([^.]*)(?:\.(.+)|)$/;
        le.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, a, s, c, l, u, m, d, p, h, f, g = le._data(e);
                if (g) {
                    for (n.handler && (c = n, n = c.handler, o = c.selector), n.guid || (n.guid = le.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                            return typeof le === Ee || e && le.event.triggered === e.type ? void 0 : le.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = e), t = (t || "").match(Ce) || [""], s = t.length; s--;) r = $e.exec(t[s]) || [], p = f = r[1], h = (r[2] || "").split(".").sort(), p && (l = le.event.special[p] || {}, p = (o ? l.delegateType : l.bindType) || p, l = le.event.special[p] || {}, m = le.extend({
                        type: p,
                        origType: f,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && le.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, c), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && l.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), l.add && (l.add.call(e, m), m.handler.guid || (m.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, m) : d.push(m), le.event.global[p] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, c, l, u, m, d, p, h, f, g = le.hasData(e) && le._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(Ce) || [""], l = t.length; l--;)
                        if (s = $e.exec(t[l]) || [], p = f = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (m = le.event.special[p] || {}, p = (i ? m.delegateType : m.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = r = d.length; r--;) a = d[r], !o && f !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(r, 1), a.selector && d.delegateCount--, m.remove && m.remove.call(e, a));
                            c && !d.length && (m.teardown && m.teardown.call(e, h, g.handle) !== !1 || le.removeEvent(e, p, g.handle), delete u[p])
                        } else
                            for (p in u) le.event.remove(e, p + t[l], n, i, !0);
                    le.isEmptyObject(u) && (delete g.handle, le._removeData(e, "events"))
                }
            },
            trigger: function(e, t, i, o) {
                var r, a, s, c, l, u, m, d = [i || ye],
                    p = re.call(e, "type") ? e.type : e,
                    h = re.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = u = i = i || ye, 3 !== i.nodeType && 8 !== i.nodeType && !Ve.test(p + le.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[le.expando] ? e : new le.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : le.makeArray(t, [e]), l = le.event.special[p] || {}, o || !l.trigger || l.trigger.apply(i, t) !== !1)) {
                    if (!o && !l.noBubble && !le.isWindow(i)) {
                        for (c = l.delegateType || p, Ve.test(c + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), u = s;
                        u === (i.ownerDocument || ye) && d.push(u.defaultView || u.parentWindow || n)
                    }
                    for (m = 0;
                        (s = d[m++]) && !e.isPropagationStopped();) e.type = m > 1 ? c : l.bindType || p, r = (le._data(s, "events") || {})[e.type] && le._data(s, "handle"), r && r.apply(s, t), r = a && s[a], r && r.apply && le.acceptData(s) && (e.result = r.apply(s, t), e.result === !1 && e.preventDefault());
                    if (e.type = p, !o && !e.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), t) === !1) && le.acceptData(i) && a && i[p] && !le.isWindow(i)) {
                        u = i[a], u && (i[a] = null), le.event.triggered = p;
                        try {
                            i[p]()
                        } catch (f) {}
                        le.event.triggered = void 0, u && (i[a] = u)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = le.event.fix(e);
                var t, n, i, o, r, a = [],
                    s = Y.call(arguments),
                    c = (le._data(this, "events") || {})[e.type] || [],
                    l = le.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (a = le.event.handlers.call(this, e, c), t = 0;
                        (o = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, r = 0;
                            (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, n = ((le.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a = [],
                    s = t.delegateCount,
                    c = e.target;
                if (s && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], r = 0; s > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? le(n, this).index(c) >= 0 : le.find(n, this, null, [c]).length), o[n] && o.push(i);
                            o.length && a.push({
                                elem: c,
                                handlers: o
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[le.expando]) return e;
                var t, n, i, o = e.type,
                    r = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = He.test(o) ? this.mouseHooks : Ue.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || ye), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, o, r = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ye, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== b() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === b() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return le.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var o = le.extend(new le.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? le.event.trigger(o, null, t) : le.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, le.removeEvent = ye.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Ee && (e[i] = null), e.detachEvent(i, n))
        }, le.Event = function(e, t) {
            return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? g : v) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), void(this[le.expando] = !0)) : new le.Event(e, t)
        }, le.Event.prototype = {
            isDefaultPrevented: v,
            isPropagationStopped: v,
            isImmediatePropagationStopped: v,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = g, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = g, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = g, this.stopPropagation()
            }
        }, le.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            le.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return o && (o === i || le.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), se.submitBubbles || (le.event.special.submit = {
            setup: function() {
                return le.nodeName(this, "form") ? !1 : void le.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = le.nodeName(t, "input") || le.nodeName(t, "button") ? t.form : void 0;
                    n && !le._data(n, "submitBubbles") && (le.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), le._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return le.nodeName(this, "form") ? !1 : void le.event.remove(this, "._submit")
            }
        }), se.changeBubbles || (le.event.special.change = {
            setup: function() {
                return Re.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (le.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), le.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0)
                })), !1) : void le.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Re.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
                    }), le._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return le.event.remove(this, "._change"), !Re.test(this.nodeName)
            }
        }), se.focusinBubbles || le.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                le.event.simulate(t, e.target, le.event.fix(e), !0)
            };
            le.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = le._data(i, t);
                    o || i.addEventListener(e, n, !0), le._data(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = le._data(i, t) - 1;
                    o ? le._data(i, t, o) : (i.removeEventListener(e, n, !0), le._removeData(i, t))
                }
            }
        }), le.fn.extend({
            on: function(e, t, n, i, o) {
                var r, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (r in e) this.on(r, t, n, e[r], o);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = v;
                else if (!i) return this;
                return 1 === o && (a = i, i = function(e) {
                    return le().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = le.guid++)), this.each(function() {
                    le.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, le(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = v), this.each(function() {
                    le.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    le.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? le.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            qe = / jQuery\d+="(?:null|\d+)"/g,
            Be = new RegExp("<(?:" + Oe + ")[\\s/>]", "i"),
            De = /^\s+/,
            Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Xe = /<([\w:]+)/,
            We = /<tbody/i,
            Ke = /<|&#?\w+;/,
            Je = /<(?:script|style|link)/i,
            Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ze = /^$|\/(?:java|ecma)script/i,
            Qe = /^true\/(.*)/,
            Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            et = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: se.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            tt = y(ye),
            nt = tt.appendChild(ye.createElement("div"));
        et.optgroup = et.option, et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, et.th = et.td, le.extend({
            clone: function(e, t, n) {
                var i, o, r, a, s, c = le.contains(e.ownerDocument, e);
                if (se.html5Clone || le.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (nt.innerHTML = e.outerHTML, nt.removeChild(r = nt.firstChild)), !(se.noCloneEvent && se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                    for (i = w(r), s = w(e), a = 0; null != (o = s[a]); ++a) i[a] && S(o, i[a]);
                if (t)
                    if (n)
                        for (s = s || w(e), i = i || w(r), a = 0; null != (o = s[a]); a++) T(o, i[a]);
                    else T(e, r);
                return i = w(r, "script"), i.length > 0 && A(i, !c && w(e, "script")), i = s = o = null, r
            },
            buildFragment: function(e, t, n, i) {
                for (var o, r, a, s, c, l, u, m = e.length, d = y(t), p = [], h = 0; m > h; h++)
                    if (r = e[h], r || 0 === r)
                        if ("object" === le.type(r)) le.merge(p, r.nodeType ? [r] : r);
                        else if (Ke.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")), c = (Xe.exec(r) || ["", ""])[1].toLowerCase(), u = et[c] || et._default, s.innerHTML = u[1] + r.replace(Fe, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                    if (!se.leadingWhitespace && De.test(r) && p.push(t.createTextNode(De.exec(r)[0])), !se.tbody)
                        for (r = "table" !== c || We.test(r) ? "<table>" !== u[1] || We.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) le.nodeName(l = r.childNodes[o], "tbody") && !l.childNodes.length && r.removeChild(l);
                    for (le.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = d.lastChild
                } else p.push(t.createTextNode(r));
                for (s && d.removeChild(s), se.appendChecked || le.grep(w(p, "input"), x), h = 0; r = p[h++];)
                    if ((!i || -1 === le.inArray(r, i)) && (a = le.contains(r.ownerDocument, r), s = w(d.appendChild(r), "script"), a && A(s), n))
                        for (o = 0; r = s[o++];) Ze.test(r.type || "") && n.push(r);
                return s = null, d
            },
            cleanData: function(e, t) {
                for (var n, i, o, r, a = 0, s = le.expando, c = le.cache, l = se.deleteExpando, u = le.event.special; null != (n = e[a]); a++)
                    if ((t || le.acceptData(n)) && (o = n[s], r = o && c[o])) {
                        if (r.events)
                            for (i in r.events) u[i] ? le.event.remove(n, i) : le.removeEvent(n, i, r.handle);
                        c[o] && (delete c[o], l ? delete n[s] : typeof n.removeAttribute !== Ee ? n.removeAttribute(s) : n[s] = null, Q.push(o))
                    }
            }
        }), le.fn.extend({
            text: function(e) {
                return Pe(this, function(e) {
                    return void 0 === e ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ye).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = _(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = _(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? le.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || le.cleanData(w(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && A(w(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && le.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && le.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return le.clone(this, e, t)
                })
            },
            html: function(e) {
                return Pe(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(qe, "") : void 0;
                    if ("string" == typeof e && !Je.test(e) && (se.htmlSerialize || !Be.test(e)) && (se.leadingWhitespace || !De.test(e)) && !et[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Fe, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (le.cleanData(w(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, le.cleanData(w(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = ee.apply([], e);
                var n, i, o, r, a, s, c = 0,
                    l = this.length,
                    u = this,
                    m = l - 1,
                    d = e[0],
                    p = le.isFunction(d);
                if (p || l > 1 && "string" == typeof d && !se.checkClone && Ge.test(d)) return this.each(function(n) {
                    var i = u.eq(n);
                    p && (e[0] = d.call(this, n, i.html())), i.domManip(e, t)
                });
                if (l && (s = le.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (r = le.map(w(s, "script"), k), o = r.length; l > c; c++) i = s, c !== m && (i = le.clone(i, !0, !0), o && le.merge(r, w(i, "script"))), t.call(this[c], i, c);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, le.map(r, C), c = 0; o > c; c++) i = r[c], Ze.test(i.type || "") && !le._data(i, "globalEval") && le.contains(a, i) && (i.src ? le._evalUrl && le._evalUrl(i.src) : le.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ye, "")));
                    s = n = null
                }
                return this
            }
        }), le.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            le.fn[e] = function(e) {
                for (var n, i = 0, o = [], r = le(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), le(r[i])[t](n), te.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var it, ot = {};
        ! function() {
            var e, t, n = ye.createElement("div"),
                i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", se.opacity = /^0.5/.test(e.style.opacity), se.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", se.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, se.shrinkWrapBlocks = function() {
                var e, n, o, r;
                if (null == t) {
                    if (e = ye.getElementsByTagName("body")[0], !e) return;
                    r = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = ye.createElement("div"), o = ye.createElement("div"), e.appendChild(n).appendChild(o), t = !1, typeof o.style.zoom !== Ee && (o.style.cssText = i + ";width:1px;padding:1px;zoom:1", o.innerHTML = "<div></div>", o.firstChild.style.width = "5px", t = 3 !== o.offsetWidth), e.removeChild(n), e = n = o = null
                }
                return t
            }
        }();
        var rt, at, st = /^margin/,
            ct = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
            lt = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (rt = function(e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            }, at = function(e, t, n) {
                var i, o, r, a, s = e.style;
                return n = n || rt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || le.contains(e.ownerDocument, e) || (a = le.style(e, t)), ct.test(a) && st.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
            }) : ye.documentElement.currentStyle && (rt = function(e) {
                return e.currentStyle
            }, at = function(e, t, n) {
                var i, o, r, a, s = e.style;
                return n = n || rt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), ct.test(a) && !lt.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
            }),
            function() {
                function e() {
                    var e, t, i = ye.getElementsByTagName("body")[0];
                    i && (e = ye.createElement("div"), t = ye.createElement("div"), e.style.cssText = l, i.appendChild(e).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", le.swap(i, null != i.style.zoom ? {
                        zoom: 1
                    } : {}, function() {
                        o = 4 === t.offsetWidth
                    }), r = !0, a = !1, s = !0, n.getComputedStyle && (a = "1%" !== (n.getComputedStyle(t, null) || {}).top, r = "4px" === (n.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width), i.removeChild(e), t = i = null)
                }
                var t, i, o, r, a, s, c = ye.createElement("div"),
                    l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                    u = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
                c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = c.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", se.opacity = /^0.5/.test(t.style.opacity), se.cssFloat = !!t.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", se.clearCloneStyle = "content-box" === c.style.backgroundClip, t = c = null, le.extend(se, {
                    reliableHiddenOffsets: function() {
                        if (null != i) return i;
                        var e, t, n, o = ye.createElement("div"),
                            r = ye.getElementsByTagName("body")[0];
                        if (r) return o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = ye.createElement("div"), e.style.cssText = l, r.appendChild(e).appendChild(o), o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = o.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", i = n && 0 === t[0].offsetHeight, r.removeChild(e), o = r = null, i
                    },
                    boxSizing: function() {
                        return null == o && e(), o
                    },
                    boxSizingReliable: function() {
                        return null == r && e(), r
                    },
                    pixelPosition: function() {
                        return null == a && e(), a
                    },
                    reliableMarginRight: function() {
                        var e, t, i, o;
                        if (null == s && n.getComputedStyle) {
                            if (e = ye.getElementsByTagName("body")[0], !e) return;
                            t = ye.createElement("div"), i = ye.createElement("div"), t.style.cssText = l, e.appendChild(t).appendChild(i), o = i.appendChild(ye.createElement("div")), o.style.cssText = i.style.cssText = u, o.style.marginRight = o.style.width = "0", i.style.width = "1px", s = !parseFloat((n.getComputedStyle(o, null) || {}).marginRight), e.removeChild(t)
                        }
                        return s
                    }
                })
            }(), le.swap = function(e, t, n, i) {
                var o, r, a = {};
                for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t) e.style[r] = a[r];
                return o
            };
        var ut = /alpha\([^)]*\)/i,
            mt = /opacity\s*=\s*([^)]*)/,
            dt = /^(none|table(?!-c[ea]).+)/,
            pt = new RegExp("^(" + Ne + ")(.*)$", "i"),
            ht = new RegExp("^([+-])=(" + Ne + ")", "i"),
            ft = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            gt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            vt = ["Webkit", "O", "Moz", "ms"];
        le.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = at(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": se.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = le.camelCase(t),
                        c = e.style;
                    if (t = le.cssProps[s] || (le.cssProps[s] = N(c, s)), a = le.cssHooks[t] || le.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
                    if (r = typeof n, "string" === r && (o = ht.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(le.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || le.cssNumber[s] || (n += "px"), se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        c[t] = "", c[t] = n
                    } catch (l) {}
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, s = le.camelCase(t);
                return t = le.cssProps[s] || (le.cssProps[s] = N(e.style, s)), a = le.cssHooks[t] || le.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = at(e, t, i)), "normal" === r && t in gt && (r = gt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || le.isNumeric(o) ? o || 0 : r) : r
            }
        }), le.each(["height", "width"], function(e, t) {
            le.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? 0 === e.offsetWidth && dt.test(le.css(e, "display")) ? le.swap(e, ft, function() {
                        return L(e, t, i)
                    }) : L(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var o = i && rt(e);
                    return M(e, n, i ? P(e, t, i, se.boxSizing() && "border-box" === le.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), se.opacity || (le.cssHooks.opacity = {
            get: function(e, t) {
                return mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    o = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(r.replace(ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ut.test(r) ? r.replace(ut, o) : r + " " + o)
            }
        }), le.cssHooks.marginRight = z(se.reliableMarginRight, function(e, t) {
            return t ? le.swap(e, {
                display: "inline-block"
            }, at, [e, "marginRight"]) : void 0
        }), le.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            le.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Ie[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, st.test(e) || (le.cssHooks[e + t].set = M)
        }), le.fn.extend({
            css: function(e, t) {
                return Pe(this, function(e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (le.isArray(t)) {
                        for (i = rt(e), o = t.length; o > a; a++) r[t[a]] = le.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? le.style(e, t, n) : le.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return I(this, !0)
            },
            hide: function() {
                return I(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Me(this) ? le(this).show() : le(this).hide()
                })
            }
        }), le.Tween = R, R.prototype = {
            constructor: R,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (le.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = R.propHooks[this.prop];
                return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, le.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, le.fx = R.prototype.init, le.fx.step = {};
        var bt, yt, wt = /^(?:toggle|show|hide)$/,
            xt = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
            _t = /queueHooks$/,
            kt = [$],
            Ct = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        o = xt.exec(t),
                        r = o && o[3] || (le.cssNumber[e] ? "" : "px"),
                        a = (le.cssNumber[e] || "px" !== r && +i) && xt.exec(le.css(n.elem, e)),
                        s = 1,
                        c = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], o = o || [], a = +i || 1;
                        do s = s || ".5", a /= s, le.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --c)
                    }
                    return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        le.Animation = le.extend(q, {
                tweener: function(e, t) {
                    le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, o = e.length; o > i; i++) n = e[i], Ct[n] = Ct[n] || [], Ct[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? kt.unshift(e) : kt.push(e)
                }
            }), le.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? le.extend({}, e) : {
                    complete: n || !n && t || le.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !le.isFunction(t) && t
                };
                return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    le.isFunction(i.old) && i.old.call(this), i.queue && le.dequeue(this, i.queue)
                }, i
            }, le.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Me).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = le.isEmptyObject(e),
                        r = le.speed(t, n, i),
                        a = function() {
                            var t = q(this, le.extend({}, e), r);
                            (o || le._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = le.timers,
                            a = le._data(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && _t.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        !t && n || le.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = le._data(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = le.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, le.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), le.each(["toggle", "show", "hide"], function(e, t) {
                var n = le.fn[t];
                le.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, o)
                }
            }), le.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                le.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), le.timers = [], le.fx.tick = function() {
                var e, t = le.timers,
                    n = 0;
                for (bt = le.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || le.fx.stop(), bt = void 0
            }, le.fx.timer = function(e) {
                le.timers.push(e), e() ? le.fx.start() : le.timers.pop()
            }, le.fx.interval = 13, le.fx.start = function() {
                yt || (yt = setInterval(le.fx.tick, le.fx.interval))
            }, le.fx.stop = function() {
                clearInterval(yt), yt = null
            }, le.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, le.fn.delay = function(e, t) {
                return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t, n, i, o = ye.createElement("div");
                o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = o.getElementsByTagName("a")[0], n = ye.createElement("select"), i = n.appendChild(ye.createElement("option")), t = o.getElementsByTagName("input")[0], e.style.cssText = "top:1px", se.getSetAttribute = "t" !== o.className, se.style = /top/.test(e.getAttribute("style")), se.hrefNormalized = "/a" === e.getAttribute("href"), se.checkOn = !!t.value, se.optSelected = i.selected, se.enctype = !!ye.createElement("form").enctype, n.disabled = !0, se.optDisabled = !i.disabled, t = ye.createElement("input"), t.setAttribute("value", ""), se.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), se.radioValue = "t" === t.value, e = t = n = i = o = null
            }();
        var At = /\r/g;
        le.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0]; {
                    if (arguments.length) return i = le.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, le(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : le.isArray(o) && (o = le.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return t = le.valHooks[o.type] || le.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)
                }
            }
        }), le.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = le.find.attr(e, "value");
                        return null != t ? t : le.text(e)
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, c = 0 > o ? s : r ? o : 0; s > c; c++)
                            if (n = i[c], (n.selected || c === o) && (se.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                                if (t = le(n).val(), r) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = le.makeArray(t), a = o.length; a--;)
                            if (i = o[a], le.inArray(le.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), le.each(["radio", "checkbox"], function() {
            le.valHooks[this] = {
                set: function(e, t) {
                    return le.isArray(t) ? e.checked = le.inArray(le(e).val(), t) >= 0 : void 0
                }
            }, se.checkOn || (le.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Tt, St, Et = le.expr.attrHandle,
            jt = /^(?:checked|selected)$/i,
            zt = se.getSetAttribute,
            Nt = se.input;
        le.fn.extend({
            attr: function(e, t) {
                return Pe(this, le.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    le.removeAttr(this, e)
                })
            }
        }), le.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Ee ? le.prop(e, t, n) : (1 === r && le.isXMLDoc(e) || (t = t.toLowerCase(), i = le.attrHooks[t] || (le.expr.match.bool.test(t) ? St : Tt)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = le.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void le.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match(Ce);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = le.propFix[n] || n, le.expr.match.bool.test(n) ? Nt && zt || !jt.test(n) ? e[i] = !1 : e[le.camelCase("default-" + n)] = e[i] = !1 : le.attr(e, n, ""), e.removeAttribute(zt ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!se.radioValue && "radio" === t && le.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), St = {
            set: function(e, t, n) {
                return t === !1 ? le.removeAttr(e, n) : Nt && zt || !jt.test(n) ? e.setAttribute(!zt && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, le.each(le.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Et[t] || le.find.attr;
            Et[t] = Nt && zt || !jt.test(t) ? function(e, t, i) {
                var o, r;
                return i || (r = Et[t], Et[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Et[t] = r), o
            } : function(e, t, n) {
                return n ? void 0 : e[le.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Nt && zt || (le.attrHooks.value = {
            set: function(e, t, n) {
                return le.nodeName(e, "input") ? void(e.defaultValue = t) : Tt && Tt.set(e, t, n)
            }
        }), zt || (Tt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, Et.id = Et.name = Et.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, le.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: Tt.set
        }, le.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Tt.set(e, "" === t ? !1 : t, n)
            }
        }, le.each(["width", "height"], function(e, t) {
            le.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), se.style || (le.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var It = /^(?:input|select|textarea|button|object)$/i,
            Mt = /^(?:a|area)$/i;
        le.fn.extend({
            prop: function(e, t) {
                return Pe(this, le.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = le.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), le.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, o, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !le.isXMLDoc(e), r && (t = le.propFix[t] || t, o = le.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = le.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : It.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), se.hrefNormalized || le.each(["href", "src"], function(e, t) {
            le.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), se.optSelected || (le.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            le.propFix[this.toLowerCase()] = this
        }), se.enctype || (le.propFix.enctype = "encoding");
        var Pt = /[\t\r\n\f]/g;
        le.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, a, s = 0,
                    c = this.length,
                    l = "string" == typeof e && e;
                if (le.isFunction(e)) return this.each(function(t) {
                    le(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(Ce) || []; c > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pt, " ") : " ")) {
                            for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = le.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a, s = 0,
                    c = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (le.isFunction(e)) return this.each(function(t) {
                    le(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(Ce) || []; c > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pt, " ") : "")) {
                            for (r = 0; o = t[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            a = e ? le.trim(i) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function(n) {
                    le(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, o = le(this), r = e.match(Ce) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else n !== Ee && "boolean" !== n || (this.className && le._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : le._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pt, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            le.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), le.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Lt = le.now(),
            Rt = /\?/,
            Ut = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        le.parseJSON = function(e) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
            var t, i = null,
                o = le.trim(e + "");
            return o && !le.trim(o.replace(Ut, function(e, n, o, r) {
                return t && n && (i = 0), 0 === i ? e : (t = o || n, i += !r - !o, "")
            })) ? Function("return " + o)() : le.error("Invalid JSON: " + e)
        }, le.parseXML = function(e) {
            var t, i;
            if (!e || "string" != typeof e) return null;
            try {
                n.DOMParser ? (i = new DOMParser, t = i.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (o) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e), t
        };
        var Ht, Vt, $t = /#.*$/,
            Ot = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Dt = /^(?:GET|HEAD)$/,
            Ft = /^\/\//,
            Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Wt = {},
            Kt = {},
            Jt = "*/".concat("*");
        try {
            Vt = location.href
        } catch (Gt) {
            Vt = ye.createElement("a"), Vt.href = "", Vt = Vt.href
        }
        Ht = Xt.exec(Vt.toLowerCase()) || [], le.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Vt,
                type: "GET",
                isLocal: Bt.test(Ht[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Jt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": le.parseJSON,
                    "text xml": le.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? F(F(e, le.ajaxSettings), t) : F(le.ajaxSettings, e)
            },
            ajaxPrefilter: B(Wt),
            ajaxTransport: B(Kt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var o, u, v, b, w, _ = t;
                    2 !== y && (y = 2, s && clearTimeout(s), l = void 0, a = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (b = X(m, x, n)), b = W(m, b, x, o), o ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (le.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (le.etag[r] = w)), 204 === e || "HEAD" === m.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = b.state, u = b.data, v = b.error, o = !v)) : (v = _, !e && _ || (_ = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || _) + "", o ? h.resolveWith(d, [u, _, x]) : h.rejectWith(d, [x, _, v]), x.statusCode(g), g = void 0, c && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, m, o ? u : v]), f.fireWith(d, [x, _]), c && (p.trigger("ajaxComplete", [x, m]), --le.active || le.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, r, a, s, c, l, u, m = le.ajaxSetup({}, t),
                    d = m.context || m,
                    p = m.context && (d.nodeType || d.jquery) ? le(d) : le.event,
                    h = le.Deferred(),
                    f = le.Callbacks("once memory"),
                    g = m.statusCode || {},
                    v = {},
                    b = {},
                    y = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === y) {
                                if (!u)
                                    for (u = {}; t = qt.exec(a);) u[t[1].toLowerCase()] = t[2];
                                t = u[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === y ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return y || (e = b[n] = b[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return y || (m.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > y)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else x.always(e[x.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return l && l.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(x).complete = f.add, x.success = x.done, x.error = x.fail, m.url = ((e || m.url || Vt) + "").replace($t, "").replace(Ft, Ht[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = le.trim(m.dataType || "*").toLowerCase().match(Ce) || [""], null == m.crossDomain && (i = Xt.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === Ht[1] && i[2] === Ht[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ht[3] || ("http:" === Ht[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = le.param(m.data, m.traditional)), D(Wt, m, t, x), 2 === y) return x;
                c = m.global, c && 0 === le.active++ && le.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Dt.test(m.type), r = m.url, m.hasContent || (m.data && (r = m.url += (Rt.test(r) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Ot.test(r) ? r.replace(Ot, "$1_=" + Lt++) : r + (Rt.test(r) ? "&" : "?") + "_=" + Lt++)), m.ifModified && (le.lastModified[r] && x.setRequestHeader("If-Modified-Since", le.lastModified[r]), le.etag[r] && x.setRequestHeader("If-None-Match", le.etag[r])), (m.data && m.hasContent && m.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Jt + "; q=0.01" : "") : m.accepts["*"]);
                for (o in m.headers) x.setRequestHeader(o, m.headers[o]);
                if (m.beforeSend && (m.beforeSend.call(d, x, m) === !1 || 2 === y)) return x.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[o](m[o]);
                if (l = D(Kt, m, t, x)) {
                    x.readyState = 1, c && p.trigger("ajaxSend", [x, m]), m.async && m.timeout > 0 && (s = setTimeout(function() {
                        x.abort("timeout")
                    }, m.timeout));
                    try {
                        y = 1, l.send(v, n)
                    } catch (_) {
                        if (!(2 > y)) throw _;
                        n(-1, _)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(e, t, n) {
                return le.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return le.get(e, void 0, t, "script")
            }
        }), le.each(["get", "post"], function(e, t) {
            le[t] = function(e, n, i, o) {
                return le.isFunction(n) && (o = o || i, i = n, n = void 0), le.ajax({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            le.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), le._evalUrl = function(e) {
            return le.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, le.fn.extend({
            wrapAll: function(e) {
                if (le.isFunction(e)) return this.each(function(t) {
                    le(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return le.isFunction(e) ? this.each(function(t) {
                    le(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = le(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = le.isFunction(e);
                return this.each(function(n) {
                    le(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
                }).end()
            }
        }), le.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !se.reliableHiddenOffsets() && "none" === (e.style && e.style.display || le.css(e, "display"))
        }, le.expr.filters.visible = function(e) {
            return !le.expr.filters.hidden(e)
        };
        var Zt = /%20/g,
            Qt = /\[\]$/,
            Yt = /\r?\n/g,
            en = /^(?:submit|button|image|reset|file)$/i,
            tn = /^(?:input|select|textarea|keygen)/i;
        le.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    t = le.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) K(n, e[n], t, o);
            return i.join("&").replace(Zt, "+")
        }, le.fn.extend({
            serialize: function() {
                return le.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = le.prop(this, "elements");
                    return e ? le.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !le(this).is(":disabled") && tn.test(this.nodeName) && !en.test(e) && (this.checked || !Le.test(e))
                }).map(function(e, t) {
                    var n = le(this).val();
                    return null == n ? null : le.isArray(n) ? le.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Yt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Yt, "\r\n")
                    }
                }).get()
            }
        }), le.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || G()
        } : J;
        var nn = 0,
            on = {},
            rn = le.ajaxSettings.xhr();
        n.ActiveXObject && le(n).on("unload", function() {
            for (var e in on) on[e](void 0, !0)
        }), se.cors = !!rn && "withCredentials" in rn, rn = se.ajax = !!rn, rn && le.ajaxTransport(function(e) {
            if (!e.crossDomain || se.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var o, r = e.xhr(),
                            a = ++nn;
                        if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) r[o] = e.xhrFields[o];
                        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(e.hasContent && e.data || null), t = function(n, o) {
                            var s, c, l;
                            if (t && (o || 4 === r.readyState))
                                if (delete on[a], t = void 0, r.onreadystatechange = le.noop, o) 4 !== r.readyState && r.abort();
                                else {
                                    l = {}, s = r.status, "string" == typeof r.responseText && (l.text = r.responseText);
                                    try {
                                        c = r.statusText
                                    } catch (u) {
                                        c = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                                }
                            l && i(s, c, l, r.getAllResponseHeaders())
                        }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = on[a] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), le.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return le.globalEval(e), e
                }
            }
        }), le.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), le.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ye.head || le("head")[0] || ye.documentElement;
                return {
                    send: function(i, o) {
                        t = ye.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var an = [],
            sn = /(=)\?(?=&|$)|\?\?/;
        le.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = an.pop() || le.expando + "_" + Lt++;
                return this[e] = !0, e
            }
        }), le.ajaxPrefilter("json jsonp", function(e, t, i) {
            var o, r, a, s = e.jsonp !== !1 && (sn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && sn.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(sn, "$1" + o) : e.jsonp !== !1 && (e.url += (Rt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return a || le.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", r = n[o], n[o] = function() {
                a = arguments
            }, i.always(function() {
                n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, an.push(o)), a && le.isFunction(r) && r(a[0]), a = r = void 0
            }), "script") : void 0
        }), le.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ye;
            var i = ge.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : (i = le.buildFragment([e], t, o), o && o.length && le(o).remove(), le.merge([], i.childNodes))
        };
        var cn = le.fn.load;
        le.fn.load = function(e, t, n) {
            if ("string" != typeof e && cn) return cn.apply(this, arguments);
            var i, o, r, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = e.slice(s, e.length), e = e.slice(0, s)), le.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && le.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, o || [e.responseText, t, e])
            }), this
        }, le.expr.filters.animated = function(e) {
            return le.grep(le.timers, function(t) {
                return e === t.elem
            }).length
        };
        var ln = n.document.documentElement;
        le.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, a, s, c, l, u = le.css(e, "position"),
                    m = le(e),
                    d = {};
                "static" === u && (e.style.position = "relative"), s = m.offset(), r = le.css(e, "top"), c = le.css(e, "left"), l = ("absolute" === u || "fixed" === u) && le.inArray("auto", [r, c]) > -1, l ? (i = m.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(c) || 0), le.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : m.css(d);
            }
        }, le.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    le.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                if (r) return t = r.documentElement, le.contains(t, o) ? (typeof o.getBoundingClientRect !== Ee && (i = o.getBoundingClientRect()), n = Z(r), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === le.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - le.css(i, "marginTop", !0),
                        left: t.left - n.left - le.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || ln; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent;
                    return e || ln
                })
            }
        }), le.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            le.fn[e] = function(i) {
                return Pe(this, function(e, i, o) {
                    var r = Z(e);
                    return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? le(r).scrollLeft() : o, n ? o : le(r).scrollTop()) : e[i] = o)
                }, e, i, arguments.length, null)
            }
        }), le.each(["top", "left"], function(e, t) {
            le.cssHooks[t] = z(se.pixelPosition, function(e, n) {
                return n ? (n = at(e, t), ct.test(n) ? le(e).position()[t] + "px" : n) : void 0
            })
        }), le.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            le.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                le.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Pe(this, function(t, n, i) {
                        var o;
                        return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? le.css(t, n, a) : le.style(t, n, i, a)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), le.fn.size = function() {
            return this.length
        }, le.fn.andSelf = le.fn.addBack, i = [], o = function() {
            return le
        }.apply(t, i), !(void 0 !== o && (e.exports = o));
        var un = n.jQuery,
            mn = n.$;
        return le.noConflict = function(e) {
            return n.$ === le && (n.$ = mn), e && n.jQuery === le && (n.jQuery = un), le
        }, typeof r === Ee && (n.jQuery = n.$ = le), le
    })
}, function(e, t, n) {
    var i, o;
    (function() {
        var n = this,
            r = n._,
            a = Array.prototype,
            s = Object.prototype,
            c = Function.prototype,
            l = a.push,
            u = a.slice,
            m = a.concat,
            d = s.toString,
            p = s.hasOwnProperty,
            h = Array.isArray,
            f = Object.keys,
            g = c.bind,
            v = function(e) {
                return e instanceof v ? e : this instanceof v ? void(this._wrapped = e) : new v(e)
            };
        "undefined" != typeof e && e.exports && (t = e.exports = v), t._ = v, v.VERSION = "1.7.0";
        var b = function(e, t, n) {
            if (void 0 === t) return e;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function(n, i, o) {
                        return e.call(t, n, i, o)
                    };
                case 4:
                    return function(n, i, o, r) {
                        return e.call(t, n, i, o, r)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        };
        v.iteratee = function(e, t, n) {
            return null == e ? v.identity : v.isFunction(e) ? b(e, t, n) : v.isObject(e) ? v.matches(e) : v.property(e)
        }, v.each = v.forEach = function(e, t, n) {
            if (null == e) return e;
            t = b(t, n);
            var i, o = e.length;
            if (o === +o)
                for (i = 0; o > i; i++) t(e[i], i, e);
            else {
                var r = v.keys(e);
                for (i = 0, o = r.length; o > i; i++) t(e[r[i]], r[i], e)
            }
            return e
        }, v.map = v.collect = function(e, t, n) {
            if (null == e) return [];
            t = v.iteratee(t, n);
            for (var i, o = e.length !== +e.length && v.keys(e), r = (o || e).length, a = Array(r), s = 0; r > s; s++) i = o ? o[s] : s, a[s] = t(e[i], i, e);
            return a
        };
        var y = "Reduce of empty array with no initial value";
        v.reduce = v.foldl = v.inject = function(e, t, n, i) {
            null == e && (e = []), t = b(t, i, 4);
            var o, r = e.length !== +e.length && v.keys(e),
                a = (r || e).length,
                s = 0;
            if (arguments.length < 3) {
                if (!a) throw new TypeError(y);
                n = e[r ? r[s++] : s++]
            }
            for (; a > s; s++) o = r ? r[s] : s, n = t(n, e[o], o, e);
            return n
        }, v.reduceRight = v.foldr = function(e, t, n, i) {
            null == e && (e = []), t = b(t, i, 4);
            var o, r = e.length !== +e.length && v.keys(e),
                a = (r || e).length;
            if (arguments.length < 3) {
                if (!a) throw new TypeError(y);
                n = e[r ? r[--a] : --a]
            }
            for (; a--;) o = r ? r[a] : a, n = t(n, e[o], o, e);
            return n
        }, v.find = v.detect = function(e, t, n) {
            var i;
            return t = v.iteratee(t, n), v.some(e, function(e, n, o) {
                return t(e, n, o) ? (i = e, !0) : void 0
            }), i
        }, v.filter = v.select = function(e, t, n) {
            var i = [];
            return null == e ? i : (t = v.iteratee(t, n), v.each(e, function(e, n, o) {
                t(e, n, o) && i.push(e)
            }), i)
        }, v.reject = function(e, t, n) {
            return v.filter(e, v.negate(v.iteratee(t)), n)
        }, v.every = v.all = function(e, t, n) {
            if (null == e) return !0;
            t = v.iteratee(t, n);
            var i, o, r = e.length !== +e.length && v.keys(e),
                a = (r || e).length;
            for (i = 0; a > i; i++)
                if (o = r ? r[i] : i, !t(e[o], o, e)) return !1;
            return !0
        }, v.some = v.any = function(e, t, n) {
            if (null == e) return !1;
            t = v.iteratee(t, n);
            var i, o, r = e.length !== +e.length && v.keys(e),
                a = (r || e).length;
            for (i = 0; a > i; i++)
                if (o = r ? r[i] : i, t(e[o], o, e)) return !0;
            return !1
        }, v.contains = v.include = function(e, t) {
            return null == e ? !1 : (e.length !== +e.length && (e = v.values(e)), v.indexOf(e, t) >= 0)
        }, v.invoke = function(e, t) {
            var n = u.call(arguments, 2),
                i = v.isFunction(t);
            return v.map(e, function(e) {
                return (i ? t : e[t]).apply(e, n)
            })
        }, v.pluck = function(e, t) {
            return v.map(e, v.property(t))
        }, v.where = function(e, t) {
            return v.filter(e, v.matches(t))
        }, v.findWhere = function(e, t) {
            return v.find(e, v.matches(t))
        }, v.max = function(e, t, n) {
            var i, o, r = -(1 / 0),
                a = -(1 / 0);
            if (null == t && null != e) {
                e = e.length === +e.length ? e : v.values(e);
                for (var s = 0, c = e.length; c > s; s++) i = e[s], i > r && (r = i)
            } else t = v.iteratee(t, n), v.each(e, function(e, n, i) {
                o = t(e, n, i), (o > a || o === -(1 / 0) && r === -(1 / 0)) && (r = e, a = o)
            });
            return r
        }, v.min = function(e, t, n) {
            var i, o, r = 1 / 0,
                a = 1 / 0;
            if (null == t && null != e) {
                e = e.length === +e.length ? e : v.values(e);
                for (var s = 0, c = e.length; c > s; s++) i = e[s], r > i && (r = i)
            } else t = v.iteratee(t, n), v.each(e, function(e, n, i) {
                o = t(e, n, i), (a > o || o === 1 / 0 && r === 1 / 0) && (r = e, a = o)
            });
            return r
        }, v.shuffle = function(e) {
            for (var t, n = e && e.length === +e.length ? e : v.values(e), i = n.length, o = Array(i), r = 0; i > r; r++) t = v.random(0, r), t !== r && (o[r] = o[t]), o[t] = n[r];
            return o
        }, v.sample = function(e, t, n) {
            return null == t || n ? (e.length !== +e.length && (e = v.values(e)), e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
        }, v.sortBy = function(e, t, n) {
            return t = v.iteratee(t, n), v.pluck(v.map(e, function(e, n, i) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, i)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var w = function(e) {
            return function(t, n, i) {
                var o = {};
                return n = v.iteratee(n, i), v.each(t, function(i, r) {
                    var a = n(i, r, t);
                    e(o, i, a)
                }), o
            }
        };
        v.groupBy = w(function(e, t, n) {
            v.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), v.indexBy = w(function(e, t, n) {
            e[n] = t
        }), v.countBy = w(function(e, t, n) {
            v.has(e, n) ? e[n]++ : e[n] = 1
        }), v.sortedIndex = function(e, t, n, i) {
            n = v.iteratee(n, i, 1);
            for (var o = n(t), r = 0, a = e.length; a > r;) {
                var s = r + a >>> 1;
                n(e[s]) < o ? r = s + 1 : a = s
            }
            return r
        }, v.toArray = function(e) {
            return e ? v.isArray(e) ? u.call(e) : e.length === +e.length ? v.map(e, v.identity) : v.values(e) : []
        }, v.size = function(e) {
            return null == e ? 0 : e.length === +e.length ? e.length : v.keys(e).length
        }, v.partition = function(e, t, n) {
            t = v.iteratee(t, n);
            var i = [],
                o = [];
            return v.each(e, function(e, n, r) {
                (t(e, n, r) ? i : o).push(e)
            }), [i, o]
        }, v.first = v.head = v.take = function(e, t, n) {
            return null != e ? null == t || n ? e[0] : 0 > t ? [] : u.call(e, 0, t) : void 0
        }, v.initial = function(e, t, n) {
            return u.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, v.last = function(e, t, n) {
            return null != e ? null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0)) : void 0
        }, v.rest = v.tail = v.drop = function(e, t, n) {
            return u.call(e, null == t || n ? 1 : t)
        }, v.compact = function(e) {
            return v.filter(e, v.identity)
        };
        var x = function(e, t, n, i) {
            if (t && v.every(e, v.isArray)) return m.apply(i, e);
            for (var o = 0, r = e.length; r > o; o++) {
                var a = e[o];
                v.isArray(a) || v.isArguments(a) ? t ? l.apply(i, a) : x(a, t, n, i) : n || i.push(a)
            }
            return i
        };
        v.flatten = function(e, t) {
            return x(e, t, !1, [])
        }, v.without = function(e) {
            return v.difference(e, u.call(arguments, 1))
        }, v.uniq = v.unique = function(e, t, n, i) {
            if (null == e) return [];
            v.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = v.iteratee(n, i));
            for (var o = [], r = [], a = 0, s = e.length; s > a; a++) {
                var c = e[a];
                if (t) a && r === c || o.push(c), r = c;
                else if (n) {
                    var l = n(c, a, e);
                    v.indexOf(r, l) < 0 && (r.push(l), o.push(c))
                } else v.indexOf(o, c) < 0 && o.push(c)
            }
            return o
        }, v.union = function() {
            return v.uniq(x(arguments, !0, !0, []))
        }, v.intersection = function(e) {
            if (null == e) return [];
            for (var t = [], n = arguments.length, i = 0, o = e.length; o > i; i++) {
                var r = e[i];
                if (!v.contains(t, r)) {
                    for (var a = 1; n > a && v.contains(arguments[a], r); a++);
                    a === n && t.push(r)
                }
            }
            return t
        }, v.difference = function(e) {
            var t = x(u.call(arguments, 1), !0, !0, []);
            return v.filter(e, function(e) {
                return !v.contains(t, e)
            })
        }, v.zip = function(e) {
            if (null == e) return [];
            for (var t = v.max(arguments, "length").length, n = Array(t), i = 0; t > i; i++) n[i] = v.pluck(arguments, i);
            return n
        }, v.object = function(e, t) {
            if (null == e) return {};
            for (var n = {}, i = 0, o = e.length; o > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, v.indexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = 0,
                o = e.length;
            if (n) {
                if ("number" != typeof n) return i = v.sortedIndex(e, t), e[i] === t ? i : -1;
                i = 0 > n ? Math.max(0, o + n) : n
            }
            for (; o > i; i++)
                if (e[i] === t) return i;
            return -1
        }, v.lastIndexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = e.length;
            for ("number" == typeof n && (i = 0 > n ? i + n + 1 : Math.min(i, n + 1)); --i >= 0;)
                if (e[i] === t) return i;
            return -1
        }, v.range = function(e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), o = Array(i), r = 0; i > r; r++, e += n) o[r] = e;
            return o
        };
        var _ = function() {};
        v.bind = function(e, t) {
            var n, i;
            if (g && e.bind === g) return g.apply(e, u.call(arguments, 1));
            if (!v.isFunction(e)) throw new TypeError("Bind must be called on a function");
            return n = u.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return e.apply(t, n.concat(u.call(arguments)));
                _.prototype = e.prototype;
                var o = new _;
                _.prototype = null;
                var r = e.apply(o, n.concat(u.call(arguments)));
                return v.isObject(r) ? r : o
            }
        }, v.partial = function(e) {
            var t = u.call(arguments, 1);
            return function() {
                for (var n = 0, i = t.slice(), o = 0, r = i.length; r > o; o++) i[o] === v && (i[o] = arguments[n++]);
                for (; n < arguments.length;) i.push(arguments[n++]);
                return e.apply(this, i)
            }
        }, v.bindAll = function(e) {
            var t, n, i = arguments.length;
            if (1 >= i) throw new Error("bindAll must be passed function names");
            for (t = 1; i > t; t++) n = arguments[t], e[n] = v.bind(e[n], e);
            return e
        }, v.memoize = function(e, t) {
            var n = function(i) {
                var o = n.cache,
                    r = t ? t.apply(this, arguments) : i;
                return v.has(o, r) || (o[r] = e.apply(this, arguments)), o[r]
            };
            return n.cache = {}, n
        }, v.delay = function(e, t) {
            var n = u.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, v.defer = function(e) {
            return v.delay.apply(v, [e, 1].concat(u.call(arguments, 1)))
        }, v.throttle = function(e, t, n) {
            var i, o, r, a = null,
                s = 0;
            n || (n = {});
            var c = function() {
                s = n.leading === !1 ? 0 : v.now(), a = null, r = e.apply(i, o), a || (i = o = null)
            };
            return function() {
                var l = v.now();
                s || n.leading !== !1 || (s = l);
                var u = t - (l - s);
                return i = this, o = arguments, 0 >= u || u > t ? (clearTimeout(a), a = null, s = l, r = e.apply(i, o), a || (i = o = null)) : a || n.trailing === !1 || (a = setTimeout(c, u)), r
            }
        }, v.debounce = function(e, t, n) {
            var i, o, r, a, s, c = function() {
                var l = v.now() - a;
                t > l && l > 0 ? i = setTimeout(c, t - l) : (i = null, n || (s = e.apply(r, o), i || (r = o = null)))
            };
            return function() {
                r = this, o = arguments, a = v.now();
                var l = n && !i;
                return i || (i = setTimeout(c, t)), l && (s = e.apply(r, o), r = o = null), s
            }
        }, v.wrap = function(e, t) {
            return v.partial(t, e)
        }, v.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, v.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
                return i
            }
        }, v.after = function(e, t) {
            return function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, v.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 ? n = t.apply(this, arguments) : t = null, n
            }
        }, v.once = v.partial(v.before, 2), v.keys = function(e) {
            if (!v.isObject(e)) return [];
            if (f) return f(e);
            var t = [];
            for (var n in e) v.has(e, n) && t.push(n);
            return t
        }, v.values = function(e) {
            for (var t = v.keys(e), n = t.length, i = Array(n), o = 0; n > o; o++) i[o] = e[t[o]];
            return i
        }, v.pairs = function(e) {
            for (var t = v.keys(e), n = t.length, i = Array(n), o = 0; n > o; o++) i[o] = [t[o], e[t[o]]];
            return i
        }, v.invert = function(e) {
            for (var t = {}, n = v.keys(e), i = 0, o = n.length; o > i; i++) t[e[n[i]]] = n[i];
            return t
        }, v.functions = v.methods = function(e) {
            var t = [];
            for (var n in e) v.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, v.extend = function(e) {
            if (!v.isObject(e)) return e;
            for (var t, n, i = 1, o = arguments.length; o > i; i++) {
                t = arguments[i];
                for (n in t) p.call(t, n) && (e[n] = t[n])
            }
            return e
        }, v.pick = function(e, t, n) {
            var i, o = {};
            if (null == e) return o;
            if (v.isFunction(t)) {
                t = b(t, n);
                for (i in e) {
                    var r = e[i];
                    t(r, i, e) && (o[i] = r)
                }
            } else {
                var a = m.apply([], u.call(arguments, 1));
                e = new Object(e);
                for (var s = 0, c = a.length; c > s; s++) i = a[s], i in e && (o[i] = e[i])
            }
            return o
        }, v.omit = function(e, t, n) {
            if (v.isFunction(t)) t = v.negate(t);
            else {
                var i = v.map(m.apply([], u.call(arguments, 1)), String);
                t = function(e, t) {
                    return !v.contains(i, t)
                }
            }
            return v.pick(e, t, n)
        }, v.defaults = function(e) {
            if (!v.isObject(e)) return e;
            for (var t = 1, n = arguments.length; n > t; t++) {
                var i = arguments[t];
                for (var o in i) void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }, v.clone = function(e) {
            return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
        }, v.tap = function(e, t) {
            return t(e), e
        };
        var k = function(e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
            var o = d.call(e);
            if (o !== d.call(t)) return !1;
            switch (o) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            if ("object" != typeof e || "object" != typeof t) return !1;
            for (var r = n.length; r--;)
                if (n[r] === e) return i[r] === t;
            var a = e.constructor,
                s = t.constructor;
            if (a !== s && "constructor" in e && "constructor" in t && !(v.isFunction(a) && a instanceof a && v.isFunction(s) && s instanceof s)) return !1;
            n.push(e), i.push(t);
            var c, l;
            if ("[object Array]" === o) {
                if (c = e.length, l = c === t.length)
                    for (; c-- && (l = k(e[c], t[c], n, i)););
            } else {
                var u, m = v.keys(e);
                if (c = m.length, l = v.keys(t).length === c)
                    for (; c-- && (u = m[c], l = v.has(t, u) && k(e[u], t[u], n, i)););
            }
            return n.pop(), i.pop(), l
        };
        v.isEqual = function(e, t) {
            return k(e, t, [], [])
        }, v.isEmpty = function(e) {
            if (null == e) return !0;
            if (v.isArray(e) || v.isString(e) || v.isArguments(e)) return 0 === e.length;
            for (var t in e)
                if (v.has(e, t)) return !1;
            return !0
        }, v.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, v.isArray = h || function(e) {
            return "[object Array]" === d.call(e)
        }, v.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            v["is" + e] = function(t) {
                return d.call(t) === "[object " + e + "]"
            }
        }), v.isArguments(arguments) || (v.isArguments = function(e) {
            return v.has(e, "callee")
        }), v.isFunction = function(e) {
            return "function" == typeof e || !1
        }, v.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, v.isNaN = function(e) {
            return v.isNumber(e) && e !== +e
        }, v.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === d.call(e)
        }, v.isNull = function(e) {
            return null === e
        }, v.isUndefined = function(e) {
            return void 0 === e
        }, v.has = function(e, t) {
            return null != e && p.call(e, t)
        }, v.noConflict = function() {
            return n._ = r, this
        }, v.identity = function(e) {
            return e
        }, v.constant = function(e) {
            return function() {
                return e
            }
        }, v.noop = function() {}, v.property = function(e) {
            return function(t) {
                return t[e]
            }
        }, v.matches = function(e) {
            var t = v.pairs(e),
                n = t.length;
            return function(e) {
                if (null == e) return !n;
                e = new Object(e);
                for (var i = 0; n > i; i++) {
                    var o = t[i],
                        r = o[0];
                    if (o[1] !== e[r] || !(r in e)) return !1
                }
                return !0
            }
        }, v.times = function(e, t, n) {
            var i = Array(Math.max(0, e));
            t = b(t, n, 1);
            for (var o = 0; e > o; o++) i[o] = t(o);
            return i
        }, v.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, v.now = Date.now || function() {
            return (new Date).getTime()
        };
        var C = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            A = v.invert(C),
            T = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + v.keys(e).join("|") + ")",
                    i = RegExp(n),
                    o = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, i.test(e) ? e.replace(o, t) : e
                }
            };
        v.escape = T(C), v.unescape = T(A), v.result = function(e, t) {
            if (null != e) {
                var n = e[t];
                return v.isFunction(n) ? e[t]() : n
            }
        };
        var S = 0;
        v.uniqueId = function(e) {
            var t = ++S + "";
            return e ? e + t : t
        }, v.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var E = /(.)^/,
            j = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            z = /\\|'|\r|\n|\u2028|\u2029/g,
            N = function(e) {
                return "\\" + j[e]
            };
        v.template = function(e, t, n) {
            !t && n && (t = n), t = v.defaults({}, t, v.templateSettings);
            var i = RegExp([(t.escape || E).source, (t.interpolate || E).source, (t.evaluate || E).source].join("|") + "|$", "g"),
                o = 0,
                r = "__p+='";
            e.replace(i, function(t, n, i, a, s) {
                return r += e.slice(o, s).replace(z, N), o = s + t.length, n ? r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (r += "';\n" + a + "\n__p+='"), t
            }), r += "';\n", t.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj", "_", r)
            } catch (s) {
                throw s.source = r, s
            }
            var c = function(e) {
                    return a.call(this, e, v)
                },
                l = t.variable || "obj";
            return c.source = "function(" + l + "){\n" + r + "}", c
        }, v.chain = function(e) {
            var t = v(e);
            return t._chain = !0, t
        };
        var I = function(e) {
            return this._chain ? v(e).chain() : e
        };
        v.mixin = function(e) {
            v.each(v.functions(e), function(t) {
                var n = v[t] = e[t];
                v.prototype[t] = function() {
                    var e = [this._wrapped];
                    return l.apply(e, arguments), I.call(this, n.apply(v, e))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = a[e];
            v.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], I.call(this, n)
            }
        }), v.each(["concat", "join", "slice"], function(e) {
            var t = a[e];
            v.prototype[e] = function() {
                return I.call(this, t.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function() {
            return this._wrapped
        }, i = [], o = function() {
            return v
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }).call(this)
}, function(e, t, n) {
    var i, o;
    (function(r) {
        ! function(r, a) {
            i = [n(4), n(3), t], o = function(e, t, n) {
                r.Backbone = a(r, n, e, t)
            }.apply(t, i), !(void 0 !== o && (e.exports = o))
        }(this, function(e, t, n, i) {
            var o = e.Backbone,
                a = [],
                s = (a.push, a.slice);
            a.splice;
            t.VERSION = "1.1.2", t.$ = i, t.noConflict = function() {
                return e.Backbone = o, this
            }, t.emulateHTTP = !1, t.emulateJSON = !1;
            var c = t.Events = {
                    on: function(e, t, n) {
                        if (!u(this, "on", e, [t, n]) || !t) return this;
                        this._events || (this._events = {});
                        var i = this._events[e] || (this._events[e] = []);
                        return i.push({
                            callback: t,
                            context: n,
                            ctx: n || this
                        }), this
                    },
                    once: function(e, t, i) {
                        if (!u(this, "once", e, [t, i]) || !t) return this;
                        var o = this,
                            r = n.once(function() {
                                o.off(e, r), t.apply(this, arguments)
                            });
                        return r._callback = t, this.on(e, r, i)
                    },
                    off: function(e, t, i) {
                        var o, r, a, s, c, l, m, d;
                        if (!this._events || !u(this, "off", e, [t, i])) return this;
                        if (!e && !t && !i) return this._events = void 0, this;
                        for (s = e ? [e] : n.keys(this._events), c = 0, l = s.length; l > c; c++)
                            if (e = s[c], a = this._events[e]) {
                                if (this._events[e] = o = [], t || i)
                                    for (m = 0, d = a.length; d > m; m++) r = a[m], (t && t !== r.callback && t !== r.callback._callback || i && i !== r.context) && o.push(r);
                                o.length || delete this._events[e]
                            }
                        return this
                    },
                    trigger: function(e) {
                        if (!this._events) return this;
                        var t = s.call(arguments, 1);
                        if (!u(this, "trigger", e, t)) return this;
                        var n = this._events[e],
                            i = this._events.all;
                        return n && m(n, t), i && m(i, arguments), this
                    },
                    stopListening: function(e, t, i) {
                        var o = this._listeningTo;
                        if (!o) return this;
                        var r = !t && !i;
                        i || "object" != typeof t || (i = this), e && ((o = {})[e._listenId] = e);
                        for (var a in o) e = o[a], e.off(t, i, this), (r || n.isEmpty(e._events)) && delete this._listeningTo[a];
                        return this
                    }
                },
                l = /\s+/,
                u = function(e, t, n, i) {
                    if (!n) return !0;
                    if ("object" == typeof n) {
                        for (var o in n) e[t].apply(e, [o, n[o]].concat(i));
                        return !1
                    }
                    if (l.test(n)) {
                        for (var r = n.split(l), a = 0, s = r.length; s > a; a++) e[t].apply(e, [r[a]].concat(i));
                        return !1
                    }
                    return !0
                },
                m = function(e, t) {
                    var n, i = -1,
                        o = e.length,
                        r = t[0],
                        a = t[1],
                        s = t[2];
                    switch (t.length) {
                        case 0:
                            for (; ++i < o;)(n = e[i]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r);
                            return;
                        case 2:
                            for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r, a);
                            return;
                        case 3:
                            for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r, a, s);
                            return;
                        default:
                            for (; ++i < o;)(n = e[i]).callback.apply(n.ctx, t);
                            return
                    }
                },
                d = {
                    listenTo: "on",
                    listenToOnce: "once"
                };
            n.each(d, function(e, t) {
                c[t] = function(t, i, o) {
                    var r = this._listeningTo || (this._listeningTo = {}),
                        a = t._listenId || (t._listenId = n.uniqueId("l"));
                    return r[a] = t, o || "object" != typeof i || (o = this), t[e](i, o, this), this
                }
            }), c.bind = c.on, c.unbind = c.off, n.extend(t, c);
            var p = t.Model = function(e, t) {
                var i = e || {};
                t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
            };
            n.extend(p.prototype, c, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function(e) {
                    return n.clone(this.attributes)
                },
                sync: function() {
                    return t.sync.apply(this, arguments)
                },
                get: function(e) {
                    return this.attributes[e]
                },
                escape: function(e) {
                    return n.escape(this.get(e))
                },
                has: function(e) {
                    return null != this.get(e)
                },
                set: function(e, t, i) {
                    var o, r, a, s, c, l, u, m;
                    if (null == e) return this;
                    if ("object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i || (i = {}), !this._validate(r, i)) return !1;
                    a = i.unset, c = i.silent, s = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), m = this.attributes, u = this._previousAttributes, this.idAttribute in r && (this.id = r[this.idAttribute]);
                    for (o in r) t = r[o], n.isEqual(m[o], t) || s.push(o), n.isEqual(u[o], t) ? delete this.changed[o] : this.changed[o] = t, a ? delete m[o] : m[o] = t;
                    if (!c) {
                        s.length && (this._pending = i);
                        for (var d = 0, p = s.length; p > d; d++) this.trigger("change:" + s[d], this, m[s[d]], i)
                    }
                    if (l) return this;
                    if (!c)
                        for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(e, t) {
                    return this.set(e, void 0, n.extend({}, t, {
                        unset: !0
                    }))
                },
                clear: function(e) {
                    var t = {};
                    for (var i in this.attributes) t[i] = void 0;
                    return this.set(t, n.extend({}, e, {
                        unset: !0
                    }))
                },
                hasChanged: function(e) {
                    return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
                },
                changedAttributes: function(e) {
                    if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                    var t, i = !1,
                        o = this._changing ? this._previousAttributes : this.attributes;
                    for (var r in e) n.isEqual(o[r], t = e[r]) || ((i || (i = {}))[r] = t);
                    return i
                },
                previous: function(e) {
                    return null != e && this._previousAttributes ? this._previousAttributes[e] : null
                },
                previousAttributes: function() {
                    return n.clone(this._previousAttributes)
                },
                fetch: function(e) {
                    e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                    var t = this,
                        i = e.success;
                    return e.success = function(n) {
                        return t.set(t.parse(n, e), e) ? (i && i(t, n, e), void t.trigger("sync", t, n, e)) : !1
                    }, H(this, e), this.sync("read", this, e)
                },
                save: function(e, t, i) {
                    var o, r, a, s = this.attributes;
                    if (null == e || "object" == typeof e ? (o = e, i = t) : (o = {})[e] = t, i = n.extend({
                            validate: !0
                        }, i), o && !i.wait) {
                        if (!this.set(o, i)) return !1
                    } else if (!this._validate(o, i)) return !1;
                    o && i.wait && (this.attributes = n.extend({}, s, o)), void 0 === i.parse && (i.parse = !0);
                    var c = this,
                        l = i.success;
                    return i.success = function(e) {
                        c.attributes = s;
                        var t = c.parse(e, i);
                        return i.wait && (t = n.extend(o || {}, t)), n.isObject(t) && !c.set(t, i) ? !1 : (l && l(c, e, i), void c.trigger("sync", c, e, i))
                    }, H(this, i), r = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === r && (i.attrs = o), a = this.sync(r, this, i), o && i.wait && (this.attributes = s), a
                },
                destroy: function(e) {
                    e = e ? n.clone(e) : {};
                    var t = this,
                        i = e.success,
                        o = function() {
                            t.trigger("destroy", t, t.collection, e)
                        };
                    if (e.success = function(n) {
                            (e.wait || t.isNew()) && o(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                        }, this.isNew()) return e.success(), !1;
                    H(this, e);
                    var r = this.sync("delete", this, e);
                    return e.wait || o(), r
                },
                url: function() {
                    var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || U();
                    return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return !this.has(this.idAttribute)
                },
                isValid: function(e) {
                    return this._validate({}, n.extend(e || {}, {
                        validate: !0
                    }))
                },
                _validate: function(e, t) {
                    if (!t.validate || !this.validate) return !0;
                    e = n.extend({}, this.attributes, e);
                    var i = this.validationError = this.validate(e, t) || null;
                    return i ? (this.trigger("invalid", this, i, n.extend(t, {
                        validationError: i
                    })), !1) : !0
                }
            });
            var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
            n.each(h, function(e) {
                p.prototype[e] = function() {
                    var t = s.call(arguments);
                    return t.unshift(this.attributes), n[e].apply(n, t)
                }
            });
            var f = t.Collection = function(e, t) {
                    t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                        silent: !0
                    }, t))
                },
                g = {
                    add: !0,
                    remove: !0,
                    merge: !0
                },
                v = {
                    add: !0,
                    remove: !1
                };
            n.extend(f.prototype, c, {
                model: p,
                initialize: function() {},
                toJSON: function(e) {
                    return this.map(function(t) {
                        return t.toJSON(e)
                    })
                },
                sync: function() {
                    return t.sync.apply(this, arguments)
                },
                add: function(e, t) {
                    return this.set(e, n.extend({
                        merge: !1
                    }, t, v))
                },
                remove: function(e, t) {
                    var i = !n.isArray(e);
                    e = i ? [e] : n.clone(e), t || (t = {});
                    var o, r, a, s;
                    for (o = 0, r = e.length; r > o; o++) s = e[o] = this.get(e[o]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, t.silent || (t.index = a, s.trigger("remove", s, this, t)), this._removeReference(s, t));
                    return i ? e[0] : e
                },
                set: function(e, t) {
                    t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
                    var i = !n.isArray(e);
                    e = i ? e ? [e] : [] : n.clone(e);
                    var o, r, a, s, c, l, u, m = t.at,
                        d = this.model,
                        h = this.comparator && null == m && t.sort !== !1,
                        f = n.isString(this.comparator) ? this.comparator : null,
                        v = [],
                        b = [],
                        y = {},
                        w = t.add,
                        x = t.merge,
                        _ = t.remove,
                        k = !h && w && _ ? [] : !1;
                    for (o = 0, r = e.length; r > o; o++) {
                        if (c = e[o] || {}, a = c instanceof p ? s = c : c[d.prototype.idAttribute || "id"], l = this.get(a)) _ && (y[l.cid] = !0), x && (c = c === s ? s.attributes : c, t.parse && (c = l.parse(c, t)), l.set(c, t), h && !u && l.hasChanged(f) && (u = !0)), e[o] = l;
                        else if (w) {
                            if (s = e[o] = this._prepareModel(c, t), !s) continue;
                            v.push(s), this._addReference(s, t)
                        }
                        s = l || s, !k || !s.isNew() && y[s.id] || k.push(s), y[s.id] = !0
                    }
                    if (_) {
                        for (o = 0, r = this.length; r > o; ++o) y[(s = this.models[o]).cid] || b.push(s);
                        b.length && this.remove(b, t)
                    }
                    if (v.length || k && k.length)
                        if (h && (u = !0), this.length += v.length, null != m)
                            for (o = 0, r = v.length; r > o; o++) this.models.splice(m + o, 0, v[o]);
                        else {
                            k && (this.models.length = 0);
                            var C = k || v;
                            for (o = 0, r = C.length; r > o; o++) this.models.push(C[o])
                        }
                    if (u && this.sort({
                            silent: !0
                        }), !t.silent) {
                        for (o = 0, r = v.length; r > o; o++)(s = v[o]).trigger("add", s, this, t);
                        (u || k && k.length) && this.trigger("sort", this, t)
                    }
                    return i ? e[0] : e
                },
                reset: function(e, t) {
                    t || (t = {});
                    for (var i = 0, o = this.models.length; o > i; i++) this._removeReference(this.models[i], t);
                    return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                        silent: !0
                    }, t)), t.silent || this.trigger("reset", this, t), e
                },
                push: function(e, t) {
                    return this.add(e, n.extend({
                        at: this.length
                    }, t))
                },
                pop: function(e) {
                    var t = this.at(this.length - 1);
                    return this.remove(t, e), t
                },
                unshift: function(e, t) {
                    return this.add(e, n.extend({
                        at: 0
                    }, t))
                },
                shift: function(e) {
                    var t = this.at(0);
                    return this.remove(t, e), t
                },
                slice: function() {
                    return s.apply(this.models, arguments)
                },
                get: function(e) {
                    return null != e ? this._byId[e] || this._byId[e.id] || this._byId[e.cid] : void 0
                },
                at: function(e) {
                    return this.models[e]
                },
                where: function(e, t) {
                    return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                        for (var n in e)
                            if (e[n] !== t.get(n)) return !1;
                        return !0
                    })
                },
                findWhere: function(e) {
                    return this.where(e, !0)
                },
                sort: function(e) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
                },
                pluck: function(e) {
                    return n.invoke(this.models, "get", e)
                },
                fetch: function(e) {
                    e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                    var t = e.success,
                        i = this;
                    return e.success = function(n) {
                        var o = e.reset ? "reset" : "set";
                        i[o](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
                    }, H(this, e), this.sync("read", this, e)
                },
                create: function(e, t) {
                    if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
                    t.wait || this.add(e, t);
                    var i = this,
                        o = t.success;
                    return t.success = function(e, n) {
                        t.wait && i.add(e, t), o && o(e, n, t)
                    }, e.save(null, t), e
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0, this.models = [], this._byId = {}
                },
                _prepareModel: function(e, t) {
                    if (e instanceof p) return e;
                    t = t ? n.clone(t) : {}, t.collection = this;
                    var i = new this.model(e, t);
                    return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
                },
                _addReference: function(e, t) {
                    this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
                },
                _removeReference: function(e, t) {
                    this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(e, t, n, i) {
                    ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
                }
            });
            var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
            n.each(b, function(e) {
                f.prototype[e] = function() {
                    var t = s.call(arguments);
                    return t.unshift(this.models), n[e].apply(n, t)
                }
            });
            var y = ["groupBy", "countBy", "sortBy", "indexBy"];
            n.each(y, function(e) {
                f.prototype[e] = function(t, i) {
                    var o = n.isFunction(t) ? t : function(e) {
                        return e.get(t)
                    };
                    return n[e](this.models, o, i)
                }
            });
            var w = t.View = function(e) {
                    this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, _)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
                },
                x = /^(\S+)\s*(.*)$/,
                _ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            n.extend(w.prototype, c, {
                tagName: "div",
                $: function(e) {
                    return this.$el.find(e)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this.$el.remove(), this.stopListening(), this
                },
                setElement: function(e, n) {
                    return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
                },
                delegateEvents: function(e) {
                    if (!e && !(e = n.result(this, "events"))) return this;
                    this.undelegateEvents();
                    for (var t in e) {
                        var i = e[t];
                        if (n.isFunction(i) || (i = this[e[t]]), i) {
                            var o = t.match(x),
                                r = o[1],
                                a = o[2];
                            i = n.bind(i, this), r += ".delegateEvents" + this.cid, "" === a ? this.$el.on(r, i) : this.$el.on(r, a, i)
                        }
                    }
                    return this
                },
                undelegateEvents: function() {
                    return this.$el.off(".delegateEvents" + this.cid), this
                },
                _ensureElement: function() {
                    if (this.el) this.setElement(n.result(this, "el"), !1);
                    else {
                        var e = n.extend({}, n.result(this, "attributes"));
                        this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                        var i = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                        this.setElement(i, !1)
                    }
                }
            }), t.sync = function(e, i, o) {
                var a = C[e];
                n.defaults(o || (o = {}), {
                    emulateHTTP: t.emulateHTTP,
                    emulateJSON: t.emulateJSON
                });
                var s = {
                    type: a,
                    dataType: "json"
                };
                if (o.url || (s.url = n.result(i, "url") || U()), null != o.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = r.stringify(o.attrs || i.toJSON(o))), o.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                        model: s.data
                    } : {}), o.emulateHTTP && ("PUT" === a || "DELETE" === a || "PATCH" === a)) {
                    s.type = "POST", o.emulateJSON && (s.data._method = a);
                    var c = o.beforeSend;
                    o.beforeSend = function(e) {
                        return e.setRequestHeader("X-HTTP-Method-Override", a), c ? c.apply(this, arguments) : void 0
                    }
                }
                "GET" === s.type || o.emulateJSON || (s.processData = !1), "PATCH" === s.type && k && (s.xhr = function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                });
                var l = o.xhr = t.ajax(n.extend(s, o));
                return i.trigger("request", i, l, o), l
            };
            var k = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
                C = {
                    create: "POST",
                    update: "PUT",
                    patch: "PATCH",
                    "delete": "DELETE",
                    read: "GET"
                };
            t.ajax = function() {
                return t.$.ajax.apply(t.$, arguments)
            };
            var A = t.Router = function(e) {
                    e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                },
                T = /\((.*?)\)/g,
                S = /(\(\?)?:\w+/g,
                E = /\*\w+/g,
                j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            n.extend(A.prototype, c, {
                initialize: function() {},
                route: function(e, i, o) {
                    n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (o = i,
                        i = ""), o || (o = this[i]);
                    var r = this;
                    return t.history.route(e, function(n) {
                        var a = r._extractParameters(e, n);
                        r.execute(o, a), r.trigger.apply(r, ["route:" + i].concat(a)), r.trigger("route", i, a), t.history.trigger("route", r, i, a)
                    }), this
                },
                execute: function(e, t) {
                    e && e.apply(this, t)
                },
                navigate: function(e, n) {
                    return t.history.navigate(e, n), this
                },
                _bindRoutes: function() {
                    if (this.routes) {
                        this.routes = n.result(this, "routes");
                        for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                    }
                },
                _routeToRegExp: function(e) {
                    return e = e.replace(j, "\\$&").replace(T, "(?:$1)?").replace(S, function(e, t) {
                        return t ? e : "([^/?]+)"
                    }).replace(E, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                },
                _extractParameters: function(e, t) {
                    var i = e.exec(t).slice(1);
                    return n.map(i, function(e, t) {
                        return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                    })
                }
            });
            var z = t.History = function() {
                    this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                },
                N = /^[#\/]|\s+$/g,
                I = /^\/+|\/+$/g,
                M = /msie [\w.]+/,
                P = /\/$/,
                L = /#.*$/;
            z.started = !1, n.extend(z.prototype, c, {
                interval: 50,
                atRoot: function() {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
                },
                getHash: function(e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : ""
                },
                getFragment: function(e, t) {
                    if (null == e)
                        if (this._hasPushState || !this._wantsHashChange || t) {
                            e = decodeURI(this.location.pathname + this.location.search);
                            var n = this.root.replace(P, "");
                            e.indexOf(n) || (e = e.slice(n.length))
                        } else e = this.getHash();
                    return e.replace(N, "")
                },
                start: function(e) {
                    if (z.started) throw new Error("Backbone.history has already been started");
                    z.started = !0, this.options = n.extend({
                        root: "/"
                    }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var i = this.getFragment(),
                        o = document.documentMode,
                        r = M.exec(navigator.userAgent.toLowerCase()) && (!o || 7 >= o);
                    if (this.root = ("/" + this.root + "/").replace(I, "/"), r && this._wantsHashChange) {
                        var a = t.$('<iframe src="javascript:0" tabindex="-1">');
                        this.iframe = a.hide().appendTo("body")[0].contentWindow, this.navigate(i)
                    }
                    this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                    var s = this.location;
                    if (this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                        this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(N, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                    }
                    return this.options.silent ? void 0 : this.loadUrl()
                },
                stop: function() {
                    t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), z.started = !1
                },
                route: function(e, t) {
                    this.handlers.unshift({
                        route: e,
                        callback: t
                    })
                },
                checkUrl: function(e) {
                    var t = this.getFragment();
                    return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
                },
                loadUrl: function(e) {
                    return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
                        return t.route.test(e) ? (t.callback(e), !0) : void 0
                    })
                },
                navigate: function(e, t) {
                    if (!z.started) return !1;
                    t && t !== !0 || (t = {
                        trigger: !!t
                    });
                    var n = this.root + (e = this.getFragment(e || ""));
                    if (e = e.replace(L, ""), this.fragment !== e) {
                        if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                        else {
                            if (!this._wantsHashChange) return this.location.assign(n);
                            this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                        }
                        return t.trigger ? this.loadUrl(e) : void 0
                    }
                },
                _updateHash: function(e, t, n) {
                    if (n) {
                        var i = e.href.replace(/(javascript:|#).*$/, "");
                        e.replace(i + "#" + t)
                    } else e.hash = "#" + t
                }
            }), t.history = new z;
            var R = function(e, t) {
                var i, o = this;
                i = e && n.has(e, "constructor") ? e.constructor : function() {
                    return o.apply(this, arguments)
                }, n.extend(i, o, t);
                var r = function() {
                    this.constructor = i
                };
                return r.prototype = o.prototype, i.prototype = new r, e && n.extend(i.prototype, e), i.__super__ = o.prototype, i
            };
            p.extend = f.extend = A.extend = w.extend = z.extend = R;
            var U = function() {
                    throw new Error('A "url" property or function must be specified')
                },
                H = function(e, t) {
                    var n = t.error;
                    t.error = function(i) {
                        n && n(e, i, t), e.trigger("error", e, i, t)
                    }
                };
            return t
        })
    }).call(t, n(6))
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && !("prototype" in e)
    }
    var o, r, a = n(4),
        s = n(7),
        c = a.isUndefined;
    c(window.JSON) || (o = window.JSON.stringify, r = window.JSON.parse);
    var l = i(o) && i(Date.prototype.toJSON) && c(String.prototype.toJSON) && c(Number.prototype.toJSON) && c(Boolean.prototype.toJSON) && c(Array.prototype.toJSON),
        u = i(r);
    e.exports = {
        stringify: l ? o : s.stringify,
        parse: u ? r : s.parse
    }
}, function(module, exports) {
    "use strict";

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, i, o, r, a, s = gap,
            c = t[e];
        switch ("function" == typeof rep && (c = rep.call(t, e, c)), "undefined" == typeof c ? "undefined" : _typeof(c)) {
            case "string":
                return quote(c);
            case "number":
                return isFinite(c) ? String(c) : "null";
            case "boolean":
            case "null":
                return String(c);
            case "object":
                if (!c) return "null";
                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                    for (r = c.length, n = 0; r > n; n += 1) a[n] = str(n, c) || "null";
                    return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, o
                }
                if (rep && "object" === ("undefined" == typeof rep ? "undefined" : _typeof(rep)))
                    for (r = rep.length, n = 0; r > n; n += 1) "string" == typeof rep[n] && (i = rep[n], o = str(i, c), o && a.push(quote(i) + (gap ? ": " : ":") + o));
                else
                    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (o = str(i, c), o && a.push(quote(i) + (gap ? ": " : ":") + o));
                return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, o
        }
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        JSON = {},
        cx, escapable, gap, indent, meta, rep;
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, JSON.stringify = function(e, t, n) {
        var i;
        if (gap = "", indent = "", "number" == typeof n)
            for (i = 0; n > i; i += 1) indent += " ";
        else "string" == typeof n && (indent = n);
        if (rep = t, t && "function" != typeof t && ("object" !== ("undefined" == typeof t ? "undefined" : _typeof(t)) || "number" != typeof t.length)) throw new Error("JSON.stringify");
        return str("", {
            "": e
        })
    }, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var n, i, o = e[t];
            if (o && "object" === ("undefined" == typeof o ? "undefined" : _typeof(o)))
                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (i = walk(o, n), void 0 !== i ? o[n] = i : delete o[n]);
            return reviver.call(e, t, o)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    }, module.exports = JSON
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return w.reduce(t.split("."), function(e, t) {
            return w.isObject(e) ? e[t] : void 0
        }, e)
    }

    function o(e) {
        var t = i(e, "app.name");
        return t.indexOf(/team/gi) < 0 && _.isLocaleEnglish() ? t + " Team" : t
    }

    function r(e) {
        return k.isEnabled("v3_email_attribute") ? i(e, "user.anonymous") : void 0 === i(e, "user_id") && void 0 === i(e, "email")
    }

    function a(e) {
        return w.chain(e).keys().reject(function(t) {
            return (w.isArray(e[t]) || w.isObject(e[t]) || w.contains(T, t)) && !w.contains(S, t)
        }).value()
    }

    function s(e) {
        return w.pick(e, a(e))
    }

    function c(e) {
        var t = i(e, "widget.activator");
        if (!w.include(A, t)) return t
    }

    function l(e) {
        return r(e) ? i(e, "modules.messages.features.inbound_lead_messaging") === !0 : i(e, "modules.messages.features.inbound_messages") === !0
    }

    function u(e) {
        return i(e, "modules.messages.features.outbound_messages") !== !1
    }

    function m(e) {
        return i(e, "modules.messages.features.server_side_interbot") !== !1
    }

    function d(e, t) {
        var n = i(e, "disable_modules");
        return void 0 !== n && w.contains(n, t)
    }

    function p(e) {
        if (d(e, "messages")) return !1;
        var t = i(e, "widget.activator"),
            n = i(e, "modules.messages.use_activator");
        return void 0 === n ? "#IntercomDefaultWidget" === t : n === !0 && ("#IntercomDefaultWidget" === t || 0 === y(t).length) && (l(e) || u(e))
    }

    function h(e) {
        return i(e, "modules.messages.features.rtm") === !0
    }

    function f(e) {
        var t = i(e, "modules.rtm");
        if (!w.isEmpty(t)) return t
    }

    function g(e) {
        var t = i(e, "app.last_active");
        if (w.isNumber(t)) return 1e3 * t
    }

    function v(e) {
        !w.isUndefined(e) && w.isUndefined(e.user_id) && w.isEmpty(e.email) && (C = !0)
    }

    function b(e) {
        this.settings = w.clone(e || {}), v(e)
    }
    var y = n(3),
        w = n(4),
        x = n(9),
        _ = n(10),
        k = n(49),
        C = !1,
        A = ["#IntercomDefaultWidget", "body"],
        T = ["app_id", "user_id", "email", "user_hash", "modules", "disable_modules", "widget", "inert", "fake_message_response", "increments", "anonymous_session", "is_anonymous_install"],
        S = ["custom_data", "company", "companies"];
    b.prototype = {
        get: function(e) {
            switch (e) {
                case "app.id":
                    return i(this.settings, "app_id");
                case "app.name":
                    return o(this.settings);
                case "app.locale":
                    return i(this.settings, "app.locale");
                case "app.branding-enabled":
                    return i(this.settings, "app.show_powered_by");
                case "app.color":
                    return i(this.settings, "modules.messages.colors.base");
                case "app.message":
                    return i(this.settings, "app.message");
                case "app.inbound-messaging-enabled":
                    return l(this.settings);
                case "app.outbound-messaging-enabled":
                    return u(this.settings);
                case "app.server-side-interbot":
                    return m(this.settings);
                case "app.messaging-disabled":
                    return d(this.settings, "messages");
                case "app.rtm-enabled":
                    return h(this.settings);
                case "app.rtm-settings":
                    return f(this.settings);
                case "app.auto-response":
                    return i(this.settings, "app.auto_response");
                case "app.audio-enabled":
                    return i(this.settings, "app.audio_enabled");
                case "app.active-admins":
                    return i(this.settings, "app.active_admins");
                case "app.feature-flags":
                    return i(this.settings, "app.feature_flags") || [];
                case "user.id":
                    return i(this.settings, "user_id") || i(this.settings, "user_data.user_id");
                case "user.intercom-id":
                    return i(this.settings, "user.id");
                case "user.email":
                    return i(this.settings, "email") || i(this.settings, "user_data.email") || i(this.settings, "user.email");
                case "user.hash":
                    return i(this.settings, "user_hash") || i(this.settings, "user_data.user_hash");
                case "user.anonymous":
                    return r(this.settings);
                case "user.anonymous-id":
                    return i(this.settings, "user.anonymous_id");
                case "user.anonymous-email":
                    return i(this.settings, "user.anonymous_email");
                case "user.anonymous-session":
                    return i(this.settings, "anonymous_session");
                case "user.has-conversations":
                    return i(this.settings, "user.has_conversations");
                case "user.locale":
                    return i(this.settings, "user.locale");
                case "user.role":
                    return i(this.settings, "user.role");
                case "launcher.selector":
                    return c(this.settings);
                case "launcher.enabled":
                    return p(this.settings);
                case "increments":
                    return i(this.settings, "increments");
                case "is-anonymous-install":
                    return C;
                case "team.last-active":
                    return g(this.settings)
            }
        },
        has: function(e) {
            return void 0 !== this.get(e)
        },
        isValid: function() {
            return this.has("app.id")
        },
        update: function(e) {
            w.isObject(e) ? y.extend(!0, this.settings, e) : x.error("Unable to update settings")
        },
        getCustomAttributes: function() {
            return s(this.settings)
        },
        reset: function() {
            this.settings = {}
        },
        getAndClear: function(e) {
            var t = this.get(e);
            return delete this.settings[e], t
        }
    }, e.exports = b
}, function(e, t) {
    "use strict";

    function n(e, t) {
        i.push((new Date).toString() + " " + e + " " + t)
    }
    var i = [];
    e.exports = {
        info: function(e) {
            n("INFO ", e)
        },
        error: function(e) {
            n("ERROR", e)
        },
        getLines: function() {
            return i
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return e.replace(/{([\s\S]+?)}/g, function(e, n) {
            return t[n]
        })
    }
    var o = n(4),
        r = n(9),
        a = ["ar", "bg", "bs", "ca", "cs", "da", "de", "de-form", "el", "en", "es", "et", "fi", "fr", "he", "hr", "hu", "id", "it", "ja", "ko", "lt", "lv", "mn", "nb", "nl", "pl", "pt", "ro", "ru", "sl", "sr", "sv", "tr", "vi", "zh-CN", "zh-TW"],
        s = "en",
        c = {};
    o.each(a, function(e) {
        c[e] = n(11)("./" + e + ".json")
    });
    var l = {
        translate: function(e, t) {
            var n = c[s];
            if (!n) return r.error("Unknown locale '" + s + "'"), "";
            var o = n[e];
            if (!o) return r.error("Unknown key '" + e + "' in locale '" + s + "'"), "";
            try {
                return i(o, t)
            } catch (a) {
                return r.error("Interpolation failed for key '" + e + "' in locale '" + s + "'"), ""
            }
            return o
        },
        setLocales: function(e) {
            c = e
        },
        setLocale: function(e) {
            s = e
        },
        getLocales: function() {
            return c
        },
        getLocale: function() {
            return s
        },
        isLocaleEnglish: function() {
            return "en" === s
        },
        isSupportedLocale: function(e) {
            return o.has(c, e)
        }
    };
    e.exports = l
}, function(e, t, n) {
    function i(e) {
        return n(o(e))
    }

    function o(e) {
        return r[e] || function() {
            throw new Error("Cannot find module '" + e + "'.")
        }()
    }
    var r = {
        "./ar.json": 12,
        "./bg.json": 13,
        "./bs.json": 14,
        "./ca.json": 15,
        "./cs.json": 16,
        "./da.json": 17,
        "./de-form.json": 18,
        "./de.json": 19,
        "./el.json": 20,
        "./en.json": 21,
        "./es.json": 22,
        "./et.json": 23,
        "./fi.json": 24,
        "./fr.json": 25,
        "./he.json": 26,
        "./hr.json": 27,
        "./hu.json": 28,
        "./id.json": 29,
        "./it.json": 30,
        "./ja.json": 31,
        "./ko.json": 32,
        "./lt.json": 33,
        "./lv.json": 34,
        "./mn.json": 35,
        "./nb.json": 36,
        "./nl.json": 37,
        "./pl.json": 38,
        "./pt.json": 39,
        "./ro.json": 40,
        "./ru.json": 41,
        "./sl.json": 42,
        "./sr.json": 43,
        "./sv.json": 44,
        "./tr.json": 45,
        "./vi.json": 46,
        "./zh-CN.json": 47,
        "./zh-TW.json": 48
    };
    i.keys = function() {
        return Object.keys(r)
    }, i.resolve = o, e.exports = i, i.id = 11
}, function(e, t) {
    e.exports = {
        "language-name-en": "Arabic",
        "language-name": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
        "new-message": "Ø±Ø³Ø§Ù„Ø© Ø¬Ø¯ÙŠØ¯Ø©",
        "new-comment-placeholder": "Ø¥Ù†ØªØ¸Ø± Ø§Ù„Ø±Ø¯",
        "new-conversation-placeholder": "Ø¥Ø¨Ø¯Ø£ Ù…Ø­Ø§Ø¯Ø«Ø©",
        "new-article-conversation-placeholder": "ÙˆØ¬Ù‹Ù‡ Ø³Ø¤Ø§Ù„Ù‹Ø§",
        "no-conversations": "Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ù…Ø­Ø§Ø¯Ø«Ø§Øª",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Ø¥Ø±Ø³Ø§Ù„",
        "powered-by-intercom": "Ø¨ÙˆØ§Ø³Ø·Ø© Ø¥Ù†ØªØ±ÙƒÙˆÙ…",
        Xs: "Ø§Ù„Ø¢Ù†",
        Xm: "Ù…Ù†Ø° {delta} Ø¯Ù‚ÙŠÙ‚Ø©",
        Xh: "Ù…Ù†Ø° {delta} Ø³Ø§Ø¹Ø§Øª",
        Xd: "Ù…Ù†Ø° {delta} Ø£ÙŠØ§Ù…",
        Xw: "Ù…Ù†Ø° {delta} Ø£Ø³Ø§Ø¨ÙŠØ¹",
        you: "Ø£Ù†Øª",
        delivered: "ÙˆØµÙ„Øª",
        "anonymous-email-response": "Ø´ÙƒØ±Ù‹Ø§ Ù„ÙƒØŒ Ø³ÙˆÙ Ù†ÙØ¨Ù„ØºÙƒ Ø¹Ø¨Ø± Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ({email}) Ø¹Ù†Ø¯ Ø±Ø¯Ù†Ø§.",
        "anonymous-email-responder": "Ø¯Ø¹Ù†Ø§ Ù†ÙØ¨Ù„ØºÙƒ Ø¹Ø¨Ø± Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ.",
        "your-email": "Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
        sending: "Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø¥Ø±Ø³Ø§Ù„",
        failed: "Ø®Ø·Ø£ØŒ Ø¥Ø¶ØºØ· Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø©",
        uploading: "Ø¬Ø§Ø±Ù Ø§Ù„ØªØ­Ù…ÙŠÙ„",
        uploaded: "ØªÙ… Ø§Ù„ØªØ­Ù…ÙŠÙ„",
        "max-upload-size": "Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ù‚ØµÙ‰ Ù„Ù„ØªØ­Ù…ÙŠÙ„ Ù‡Ùˆ {number} Ù…ÙŠØ¬Ø§ Ø¨Ø§ÙŠØª",
        "insert-emoji": "Ø¥Ø¯Ø±Ø§Ø¬ Ø±Ù…Ø² ØªØ¹Ø¨ÙŠØ±ÙŠ",
        "send-attachment": "Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ù…Ø±ÙÙ‚",
        "press-enter-to-send": "Ø§Ø¶ØºØ· Enter Ù„Ù„Ø¥Ø±Ø³Ø§Ù„",
        "not-seen-yet": "Ù„Ù… ØªØªÙ… Ù…Ø´Ø§Ù‡Ø¯ØªÙ‡Ø§ Ø¨Ø¹Ø¯",
        seen: "ØªÙ…Øª Ø§Ù„Ù…Ø´Ø§Ù‡Ø¯ØªÙ‡Ø§",
        "x-says": "{firstName} ÙŠÙ‚ÙˆÙ„ ...",
        "someone-says": "Ø´Ø®Øµ Ù…Ø§ ÙŠÙ‚ÙˆÙ„ ...",
        "active-in-the-last-x-minutes": "ÙƒØ§Ù† Ù†Ø´Ø·Ù‹Ø§ Ø®Ù„Ø§Ù„ Ø§Ù„Ù€ {minutes} Ø¯Ù‚Ø§Ø¦Ù‚ Ø§Ù„Ø£Ø®ÙŠØ±Ø©",
        "active-in-the-last-hour": "Ø¢Ø®Ø± Ù†Ø´Ø§Ø· ÙƒØ§Ù† Ù…Ù†Ø° Ø³Ø§Ø¹Ø©",
        "last-active-one-hour-ago": "Ø¢Ø®Ø± Ù†Ø´Ø§Ø· ÙƒØ§Ù† Ù…Ù†Ø° Ø³Ø§Ø¹Ø©",
        "last-active-x-hours-ago": "Ø¢Ø®Ø± Ù†Ø´Ø§Ø· ÙƒØ§Ù† Ù…Ù†Ø° {hours} Ø³Ø§Ø¹Ø§Øª",
        "last-active-one-day-ago": "Ø¢Ø®Ø± Ù†Ø´Ø§Ø· ÙƒØ§Ù† Ø£Ù…Ø³",
        "last-active-x-days-ago": "ÙˆÙƒØ§Ù† Ø¢Ø®Ø± Ù†Ø´Ø§Ø· Ù…Ù†Ø° {days} Ø£ÙŠØ§Ù…",
        "last-active-more-than-one-week-ago": "Ø¢Ø®Ø± Ù†Ø´Ø§Ø· ÙƒØ§Ù† Ù…Ù†Ø° Ø£ÙƒØ«Ø± Ù…Ù† Ø£Ø³Ø¨ÙˆØ¹",
        "message-autoresponse": "Ø³ÙˆÙ Ù†ÙØ¨Ù„ØºÙƒ Ù‡Ù†Ø§ Ø¹Ù†Ø¯ Ø±Ø¯Ù‘Ù†Ø§.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Ø§Ø³ØªÙ‚Ø¨Ù„ ØªØ­Ø¯ÙŠØ«Ø§Øª Ù‡Ø°Ù‡ Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø© Ø¹Ø¨Ø± Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
        "team-will-reply-asap": "Ø³ÙŠØ±ÙØ¯ Ø§Ù„ÙØ±ÙŠÙ‚ Ø¹Ù„ÙŠÙƒ ÙÙŠ Ø£Ù‚Ø±Ø¨ ÙˆÙ‚Øª Ù…Ù…ÙƒÙ†.",
        "check-back-or-email": "Ø£Ù„Ù‚Ù Ù†Ø¸Ø±Ø© Ù‡Ù†Ø§ ÙÙŠ ÙˆÙ‚Øª Ù„Ø§Ø­Ù‚ Ø£Ùˆ Ø³ÙŠÙ‚ÙˆÙ…ÙˆÙ† Ø¨Ù…Ø±Ø§Ø³Ù„ØªÙƒ Ø¹Ø¨Ø± Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ {email} Ø¥Ø°Ø§ ÙƒÙ†Øª ØºÙŠØ± Ù…ØªÙˆØ§Ø¬Ø¯.",
        close: "Close",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Bulgarian",
        "language-name": "Ð‘ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸",
        "new-message": "ÐÐ¾Ð²Ð° Ð´Ð¸ÑÐºÑƒÑÐ¸Ñ",
        "new-comment-placeholder": "ÐÐ°Ð¿Ð¸ÑˆÐ¸ Ð¾Ñ‚Ð³Ð¾Ð²Ð¾Ñ€&hellip;",
        "new-conversation-placeholder": "Ð—Ð°Ð¿Ð¾Ñ‡Ð½Ð¸ Ð´Ð¸ÑÐºÑƒÑÐ¸Ñ&hellip;",
        "new-article-conversation-placeholder": "Ð—Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ð²ÑŠÐ¿Ñ€Ð¾Ñ&hellip;",
        "no-conversations": "ÐÑÐ¼Ð° Ð´Ð¸ÑÐºÑƒÑÐ¸Ð¸",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Ð˜Ð·Ð¿Ñ€Ð°Ñ‚Ð¸",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "ÐŸÑ€ÐµÐ´Ð¸ Ð¼Ð°Ð»ÐºÐ¾",
        Xm: "Ð¿Ñ€ÐµÐ´Ð¸ {delta}Ð¼Ð¸Ð½.",
        Xh: "Ð¿Ñ€ÐµÐ´Ð¸ {delta}Ñ‡Ð°ÑÐ°",
        Xd: "Ð¿Ñ€ÐµÐ´Ð¸ {delta}Ð´Ð½Ð¸",
        Xw: "Ð¿Ñ€ÐµÐ´Ð¸ {delta}ÑÐµÐ´Ð¼Ð¸Ñ†Ð¸",
        you: "You",
        delivered: "Ð”Ð¾ÑÑ‚Ð°Ð²ÐµÐ½Ð¾",
        "anonymous-email-response": "Ð‘Ð»Ð³Ð¾Ð´Ð°Ñ€Ñ, Ñ‰Ðµ Ð²Ð¸ ÑÑŠÐ¾Ð±Ñ‰Ð¸Ð¼ Ð¿Ð¾ Ð¸Ð¼ÐµÐ¹Ð» ({email}) ÐºÐ¾Ð³Ð°Ñ‚Ð¾ Ð¾Ñ‚Ð³Ð¾Ð²Ð¾Ñ€Ð¸Ð¼",
        "anonymous-email-responder": "ÐÐµÐºÐ° Ð´Ð° Ð²Ð¸ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð¸Ð¼ Ð¿Ð¾ Ð¸Ð¼ÐµÐ¹Ð».",
        "your-email": "Ð’Ð°ÑˆÐ¸ÑÑ‚ Ð¸Ð¼ÐµÐ¹Ð»",
        sending: "Ð˜Ð·Ð¿Ñ€Ð°Ñ‰Ð° ÑÐµ&hellip;",
        failed: "ÐÐµ Ðµ Ð´Ð¾ÑÑ‚Ð°Ð²ÐµÐ½Ð¾. ÐšÐ»Ð¸ÐºÐ½ÐµÑ‚Ðµ Ð·Ð° Ð´Ð° Ð¾Ð¿Ð¸Ñ‚Ð°Ñ‚Ðµ Ð¾Ñ‚Ð½Ð¾Ð²Ð¾.",
        uploading: "ÐšÐ°Ñ‡Ð²Ð° ÑÐµ",
        uploaded: "ÐšÐ°Ñ‡ÐµÐ½Ð¾",
        "max-upload-size": "ÐœÐ°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð¸Ñ Ñ€Ð°Ð·Ð¼ÐµÑ€ Ð·Ð° ÐºÐ°Ñ‡Ð²Ð°Ð½Ðµ Ðµ {number}MB",
        "insert-emoji": "Ð’ÑŠÐ²ÐµÐ´Ð¸ ÐµÐ¼Ð¾Ñ‚Ð¸ÐºÐ¾Ð½",
        "send-attachment": "Ð˜Ð·Ð¿Ñ€Ð°Ñ‚Ð¸ Ð¿Ñ€Ð¸ÐºÐ°Ñ‡ÐµÐ½ Ñ„Ð°Ð¹Ð»",
        "press-enter-to-send": "ÐÐ°Ñ‚Ð¸ÑÐ½ÐµÑ‚Ðµ Enter Ð·Ð° Ð´Ð° Ð¸Ð·Ð¿Ñ€Ð°Ñ‚Ð¸Ñ‚Ðµ",
        "not-seen-yet": "ÐÐµ Ðµ Ð²Ð¸Ð´ÑÐ½Ð¾ Ð²ÑÐµ Ð¾Ñ‰Ðµ",
        seen: "Ð’Ð¸Ð´ÑÐ½Ð¾",
        "x-says": "{firstName} ÐºÐ°Ð·Ð²Ð°...",
        "someone-says": "ÐÑÐºÐ¾Ð¹ ÐºÐ°Ð·Ð²Ð°...",
        "active-in-the-last-x-minutes": "ÐÐºÑ‚Ð¸Ð²ÐµÐ½ Ð¿Ñ€ÐµÐ· Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ñ‚Ðµ {minutes} Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
        "active-in-the-last-hour": "ÐÐºÑ‚Ð¸Ð²ÐµÐ½ Ð¿Ñ€ÐµÐ· Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ñ Ñ‡Ð°Ñ",
        "last-active-one-hour-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¾ Ð°ÐºÑ‚Ð¸Ð²ÐµÐ½ Ð¿Ñ€ÐµÐ´Ð¸ 1 Ñ‡Ð°Ñ",
        "last-active-x-hours-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¾ Ð°ÐºÑ‚Ð¸Ð²ÐµÐ½ Ð¿Ñ€ÐµÐ´Ð¸ {hours} Ñ‡Ð°ÑÐ°",
        "last-active-one-day-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¾ Ð°ÐºÑ‚Ð¸Ð²ÐµÐ½ Ð²Ñ‡ÐµÑ€Ð°",
        "last-active-x-days-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¾ Ð°ÐºÑ‚Ð¸Ð²ÐµÐ½ Ð¿Ñ€ÐµÐ´Ð¸ {days} Ð´Ð½Ð¸",
        "last-active-more-than-one-week-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¾ Ð°ÐºÑ‚Ð¸Ð²ÐµÐ½ Ð¿Ñ€ÐµÐ´Ð¸ 1 ÑÐµÐ´Ð¼Ð¸Ñ†Ð°",
        "message-autoresponse": "Ð©Ðµ Ð²Ð¸ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð¸Ð¼, ÐºÐ¾Ð³Ð°Ñ‚Ð¾ Ð¾Ñ‚Ð³Ð¾Ð¾Ð²Ñ€Ð¸Ð¼.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "",
        "team-will-reply-asap": "",
        "check-back-or-email": "",
        close: "Close",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Bosnian",
        "language-name": "Bosanski",
        "new-message": "Nova poruka",
        "new-comment-placeholder": "NapiÅ¡i odovor&hellip;",
        "new-conversation-placeholder": "ZapoÄni razgovor&hellip;",
        "new-article-conversation-placeholder": "Postavite pitanje&hellip;",
        "no-conversations": "Nema razgovora",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "PoÅ¡alji",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Upravo sada",
        Xm: "{delta}m prije",
        Xh: "{delta}h prije",
        Xd: "{delta}d prije",
        Xw: "{delta}sedm. prije",
        you: "Vi",
        delivered: "IsporuÄena",
        "anonymous-email-response": "Hvala, mi Ä‡emo vas obavijestiti putem e-maila ({email}) kad odgovorimo.",
        "anonymous-email-responder": "Dozvolite da vas obavijestimo putem e-maila.",
        "your-email": "VaÅ¡ e-mail",
        sending: "Slanje&hellip;",
        failed: "Nije isporuÄena. Kliknite da pokuÅ¡ate ponovo.",
        uploading: "Snimanje",
        uploaded: "Snimljeno",
        "max-upload-size": "Maksimalna veliÄina upload je {number}MB",
        "insert-emoji": "Ubacite Emoji",
        "send-attachment": "PoÅ¡alji prilog",
        "press-enter-to-send": "Pritisnite â€žEnterâ€œ za slanje",
        "not-seen-yet": "Nije joÅ¡ pogledano",
        seen: "Pogledano",
        "x-says": "{firstName} kaÅ¾e...",
        "someone-says": "Netko kaÅ¾e...",
        "active-in-the-last-x-minutes": "Aktivan zadnjih {minutes} minuta",
        "active-in-the-last-hour": "Aktivan je u posljednjih sat vremena",
        "last-active-one-hour-ago": "Zadnji put aktivan: prije 1 sat",
        "last-active-x-hours-ago": "Zadnji put aktivan: prije {hours} sati",
        "last-active-one-day-ago": "Zadnji puta aktivan: juÄer",
        "last-active-x-days-ago": "Zadnji put aktivan: {days} dana prije",
        "last-active-more-than-one-week-ago": "Zadnji puta aktivan: prije viÅ¡e od jednog tjedna",
        "message-autoresponse": "Obavijestit Ä‡emo vas nakon Å¡to odgovorimo.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "",
        "team-will-reply-asap": "",
        "check-back-or-email": "",
        close: "Zatvori",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Catalan",
        "language-name": "CatalÃ ",
        "new-message": "Missatge nou",
        "new-comment-placeholder": "Escriu una resposta&hellip;",
        "new-conversation-placeholder": "ComenÃ§a una conversa&hellip;",
        "new-article-conversation-placeholder": "Feu una pregunta&hellip;",
        "no-conversations": "Sense converses",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Enviar",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Just ara",
        Xm: "Fa {delta}m",
        Xh: "Fa {delta}h",
        Xd: "Fa {delta}d",
        Xw: "Fa {delta}set",
        you: "Tu",
        delivered: "Entregat",
        "anonymous-email-response": "GrÃ cies, et notificarem per email ({email}) quan contestem.",
        "anonymous-email-responder": "Deixa'ns el teu correu electrÃ²nic i t'informarem.",
        "your-email": "El teu email",
        sending: "Enviant&hellip;",
        failed: "No entregat. Pitja per tornar-hi.",
        uploading: "Pujant",
        uploaded: "Pujat",
        "max-upload-size": "La mida mÃ xima de cÃ rrega Ã©s {number}MB",
        "insert-emoji": "Insertar emogi",
        "send-attachment": "Enviar un afegit",
        "press-enter-to-send": "Prem Entrar per enviar",
        "not-seen-yet": "Sense veure encara",
        seen: "Vist",
        "x-says": "{firstName} diu...",
        "someone-says": "AlgÃº diu...",
        "active-in-the-last-x-minutes": "Actiu els darrers {minutes} minuts",
        "active-in-the-last-hour": "Actiu per darrera vegada fa 1 hora",
        "last-active-one-hour-ago": "Actiu per darrera vegada fa 1 hora",
        "last-active-x-hours-ago": "Actiu per darrera vegada fa {hours} hores",
        "last-active-one-day-ago": "Actiu per darrera vegada ahir",
        "last-active-x-days-ago": "Actiu per Ãºltima vegada fa {days} dies",
        "last-active-more-than-one-week-ago": "Actiu per darrera vegada fa mÃ©s d'una setmana",
        "message-autoresponse": "Et notificarem per aquÃ­ quan contestem.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Rebre les novetats d'aquesta conversa per correu electrÃ²nic",
        "team-will-reply-asap": "L'equip et respondrÃ  tan aviat com pugui.",
        "check-back-or-email": "Torna a comprovar-ho aquÃ­ mÃ©s tard, o ells t'escriuran un correu a {email} si no hi ets.",
        close: "Close",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Czech",
        "language-name": "ÄŒesky",
        "new-message": "NovÃ¡ zprÃ¡va",
        "new-comment-placeholder": "Napsat odpovÄ›Ä&hellip;",
        "new-conversation-placeholder": "ZahÃ¡jenÃ­ konverzace&hellip;",
        "new-article-conversation-placeholder": "Zeptejte se&hellip;",
        "no-conversations": "Å½Ã¡dnÃ© konverzace",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Odeslat",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "NynÃ­",
        Xm: "PÅ™ed {delta}m",
        Xh: "PÅ™ed {delta}h",
        Xd: "PÅ™ed {delta}d",
        Xw: "PÅ™ed {delta}t",
        you: "Vy",
        delivered: "DoruÄeno",
        "anonymous-email-response": "DÄ›kujeme, aÅ¾ vÃ¡m odpovÃ­me, budeme vÃ¡s o tom informovat e-mailem ({email}).",
        "anonymous-email-responder": "Dovolte nÃ¡m informovat vÃ¡s e-mailem.",
        "your-email": "VÃ¡Å¡ e-mail",
        sending: "PosÃ­lÃ¡ se&hellip;",
        failed: "DoruÄenÃ­ se nezdaÅ™ilo. KliknÄ›te a zkuste to znovu.",
        uploading: "OdesÃ­lÃ¡nÃ­",
        uploaded: "OdeslÃ¡no",
        "max-upload-size": "MaximÃ¡lnÃ­ velikost odesÃ­lanÃ©ho souboru je {number}MB",
        "insert-emoji": "VloÅ¾it emoji",
        "send-attachment": "Poslat pÅ™Ã­lohu",
        "press-enter-to-send": "",
        "not-seen-yet": "",
        seen: "",
        "x-says": "",
        "someone-says": "",
        "active-in-the-last-x-minutes": "",
        "active-in-the-last-hour": "",
        "last-active-one-hour-ago": "",
        "last-active-x-hours-ago": "",
        "last-active-one-day-ago": "",
        "last-active-x-days-ago": "",
        "last-active-more-than-one-week-ago": "",
        "message-autoresponse": "",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "DostÃ¡vat aktualizovanÃ© pÅ™Ã­spÄ›vky k tÃ©to konverzaci prostÅ™ednictvÃ­m mailu",
        "team-will-reply-asap": "TÃ½m se vÃ¡m ozve, jakmile bude moct.",
        "check-back-or-email": "PodÃ­vejte se sem pozdÄ›ji, a pokud tu prÃ¡vÄ› nebudete, poÅ¡lou vÃ¡m mail na adresu {email}.",
        close: "ZavÅ™Ã­t okno",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Danish",
        "language-name": "Dansk",
        "new-message": "Ny besked",
        "new-comment-placeholder": "Skriv et svar&hellip;",
        "new-conversation-placeholder": "Start en samtale&hellip;",
        "new-article-conversation-placeholder": "SpÃ¸rg her&hellip;",
        "no-conversations": "Ingen samtaler",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Send",
        "powered-by-intercom": "Drevet af Intercom",
        Xs: "Lige nu",
        Xm: "{delta}m siden",
        Xh: "{delta}t siden",
        Xd: "{delta}d siden",
        Xw: "{delta}u siden",
        you: "Dig",
        delivered: "Leveret",
        "anonymous-email-response": "Tak, vi vil lade dig vide via e-mail pÃ¥ ({email}), nÃ¥r vi svarer.",
        "anonymous-email-responder": "Lad os give dig besked via e-mail.",
        "your-email": "Din e-mail",
        sending: "Sender&hellip;",
        failed: "Ikke leveret. Klik, for at prÃ¸ve igen.",
        uploading: "Uploader",
        uploaded: "Uploadet",
        "max-upload-size": "Den maksimale uploadstÃ¸rrelse er {number}MB",
        "insert-emoji": "IndsÃ¦t emoji",
        "send-attachment": "Send vedhÃ¦ftet fil",
        "press-enter-to-send": "Tryk pÃ¥ Enter for at sende",
        "not-seen-yet": "Ikke set endnu",
        seen: "Set",
        "x-says": "{firstName} siger...",
        "someone-says": "Nogen siger...",
        "active-in-the-last-x-minutes": "Aktiv inden for de sidste {minutes} minutter",
        "active-in-the-last-hour": "Aktiv i den sidste time",
        "last-active-one-hour-ago": "Sidst aktiv 1 time siden",
        "last-active-x-hours-ago": "Sidst aktiv {hours} timer siden",
        "last-active-one-day-ago": "Sidst aktiv i gÃ¥r",
        "last-active-x-days-ago": "Sidste aktiv {days} dage siden",
        "last-active-more-than-one-week-ago": "Sidst aktiv over 1 uge siden",
        "message-autoresponse": "Vi vil give dig besked, nÃ¥r vi svarer.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Modtag opdateringer om denne samtale via e-mail",
        "team-will-reply-asap": "Holdet vil vende tilbage til dig, sÃ¥ snart de kan.",
        "check-back-or-email": "Vend tilbage her senere, eller vent pÃ¥ at modtage en e-mail til {email}, hvis du ikke er tilgÃ¦ngelig.",
        close: "Luk",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "German (formal)",
        "language-name": "Deutsch (hÃ¶flich)",
        "new-message": "Neue Nachricht",
        "new-comment-placeholder": "Antwort schreiben&hellip;",
        "new-conversation-placeholder": "Unterhaltung beginnen&hellip;",
        "new-article-conversation-placeholder": "Stellen Sie eine Frage&hellip;",
        "no-conversations": "Keine Unterhaltungen",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Senden",
        "powered-by-intercom": "Betrieben von Intercom",
        Xs: "Jetzt",
        Xm: "vor {delta}m",
        Xh: "vor {delta}h",
        Xd: "vor {delta}d",
        Xw: "vor {delta}w",
        you: "Sie",
        delivered: "Zugestellt",
        "anonymous-email-response": "Danke, wir benachrichtigen Sie per E-Mail ({email}), wenn wir antworten.",
        "anonymous-email-responder": "Wir benachrichtigen Sie per E-Mail.",
        "your-email": "Ihre E-Mail-Adresse",
        sending: "Senden&hellip;",
        failed: "Nicht zugestellt. Bitte klicken, um es nochmals zu versuchen.",
        uploading: "Hochladen",
        uploaded: "Hochgeladen",
        "max-upload-size": "Die maximale GrÃ¶ÃŸe zum Hochladen ist {number}MB",
        "insert-emoji": "Emoticon einfÃ¼gen",
        "send-attachment": "Anhang senden",
        "press-enter-to-send": "Zum Senden ENTER drÃ¼cken",
        "not-seen-yet": "Noch nicht geÃ¶ffnet",
        seen: "GeÃ¶ffnet",
        "x-says": "{firstName} sagt...",
        "someone-says": "Jemand sagt...",
        "active-in-the-last-x-minutes": "In den letzten {minutes} Minuten aktiv",
        "active-in-the-last-hour": "In der letzten Stunde aktiv",
        "last-active-one-hour-ago": "Vor 1 Stunde das letzte Mal aktiv",
        "last-active-x-hours-ago": "Vor {hours} Stunden das letzte Mal aktiv",
        "last-active-one-day-ago": "Gestern das letzte Mal aktiv",
        "last-active-x-days-ago": "Vor {days} Tagen das letzte Mal aktiv",
        "last-active-more-than-one-week-ago": "Vor Ã¼ber 1 Woche das letzte Mal aktiv",
        "message-autoresponse": "Wir benachrichtigen Sie hier, sobald wir antworten.",
        "median-reply-autoresponse-with-email": "Schauen Sie spÃ¤ter wieder vorbei. Falls Sie nicht online sind, schreiben sie Ihnen eine E-Mail an {email}.",
        "median-reply-autoresponse-without-email": "Schauen Sie spÃ¤ter wieder vorbei, oder hinterlassen Sie Ihre E-Mail Addresse um benachrichtigt zu werden, falls Sie nicht online sind.",
        "receive-updates-email-collector": "Erhalten Sie E-Mail-Benachrichtigungen bei neuen Nachrichten in diesem GesprÃ¤ch",
        "team-will-reply-asap": "Das Team wird Ihnen baldmÃ¶glichst antworten.",
        "check-back-or-email": "Schauen Sie spÃ¤ter wieder vorbei. Falls Sie nicht online sind, schreiben sie Ihnen eine E-Mail an {email}.",
        close: "SchlieÃŸen",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "German",
        "language-name": "Deutsch",
        "new-message": "Neue Nachricht",
        "new-comment-placeholder": "Antwort schreiben&hellip;",
        "new-conversation-placeholder": "Unterhaltung beginnen&hellip;",
        "new-article-conversation-placeholder": "Stellen Sie eine Frage&hellip;",
        "no-conversations": "Keine Unterhaltungen",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Senden",
        "powered-by-intercom": "Betrieben von Intercom",
        Xs: "Gerade eben",
        Xm: "vor {delta}m",
        Xh: "vor {delta}h",
        Xd: "vor {delta}d",
        Xw: "vor {delta}w",
        you: "Du",
        delivered: "Zugestellt",
        "anonymous-email-response": "Danke, wir benachrichtigen Dich per E-Mail ({email}), wenn wir antworten.",
        "anonymous-email-responder": "Wir benachrichtigen Dich per E-Mail.",
        "your-email": "Deine E-Mail-Adresse",
        sending: "Senden&hellip;",
        failed: "Nicht zugestellt. Klicke, um es nochmals zu versuchen.",
        uploading: "LÃ¤dt hoch",
        uploaded: "Hochgeladen",
        "max-upload-size": "Die maximale GrÃ¶ÃŸe zum Hochladen ist {number}MB",
        "insert-emoji": "Emoticon einfÃ¼gen",
        "send-attachment": "Anhang senden",
        "press-enter-to-send": "Zum Senden ENTER drÃ¼cken",
        "not-seen-yet": "Noch nicht geÃ¶ffnet",
        seen: "GeÃ¶ffnet",
        "x-says": "{firstName} sagt...",
        "someone-says": "Jemand sagt...",
        "active-in-the-last-x-minutes": "In den letzten {minutes} Minuten aktiv",
        "active-in-the-last-hour": "In der letzten Stunde aktiv",
        "last-active-one-hour-ago": "Vor 1 Stunde das letzte Mal aktiv",
        "last-active-x-hours-ago": "Vor {hours} Stunden das letzte Mal aktiv",
        "last-active-one-day-ago": "Gestern das letzte Mal aktiv",
        "last-active-x-days-ago": "Vor {days} Tagen das letzte Mal aktiv",
        "last-active-more-than-one-week-ago": "Vor Ã¼ber 1 Woche das letzte Mal aktiv",
        "message-autoresponse": "Wir benachrichtigen dich hier, sobald wir antworten.",
        "median-reply-autoresponse-with-email": "Schau spÃ¤ter wieder vorbei. Falls du nicht online bist, schreiben sie dir eine E-Mail an {email}.",
        "median-reply-autoresponse-without-email": "Schau spÃ¤ter wieder vorbei, oder hinterlasse Deine E-Mail Addresse um benachrichtigt zu werden, falls Du nicht online bist.",
        "receive-updates-email-collector": "Erhalte E-Mail-Benachrichtigungen bei neuen Nachrichten in diesem GesprÃ¤ch",
        "team-will-reply-asap": "Das Team wird dir baldmÃ¶glichst antworten.",
        "check-back-or-email": "Schau spÃ¤ter wieder vorbei. Falls du nicht online bist, schreiben sie dir eine E-Mail an {email}.",
        close: "SchlieÃŸen",
        "video-launcher-conversation-placeholder": "Ask {adminName} a question&hellip;"
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Greek",
        "language-name": "ÎµÎ»Î»Î·Î½Î¹ÎºÎ¬",
        "new-message": "ÎÎ­Î¿ ÎœÎ®Î½Ï…Î¼Î±",
        "new-comment-placeholder": "Î“ÏÎ¬ÏˆÏ„Îµ Î¼Î¯Î± Î±Ï€Î¬Î½Ï„Î·ÏƒÎ·&hellip;",
        "new-conversation-placeholder": "ÎžÎµÎºÎ¹Î½Î®ÏƒÏ„Îµ Î¼Î¹Î± ÏƒÏ…Î¶Î®Ï„Î·ÏƒÎ·&hellip;",
        "new-article-conversation-placeholder": "ÎšÎ¬Î½Ï„Îµ Î¼Î¹Î± ÎµÏÏŽÏ„Î·ÏƒÎ·&hellip;",
        "no-conversations": "ÎšÎ±Î¼Î¯Î± ÏƒÏ…Î½Î¿Î¼Î¹Î»Î¯Î±",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Î‘Ï€Î¿ÏƒÏ„Î¿Î»Î®",
        "powered-by-intercom": "Î¥Ï€Î¿ÏƒÏ„Î·ÏÎ¯Î¶ÎµÏ„Î±Î¹ Î±Ï€ÏŒ Ï„Î·Î½ Intercom",
        Xs: "ÎœÏŒÎ»Î¹Ï‚ Ï„ÏŽÏÎ±",
        Xm: "{delta}Î» Ï€ÏÎ¹Î½",
        Xh: "{delta}Ï‰ Ï€ÏÎ¹Î½",
        Xd: "{delta}Î·Î¼ Ï€ÏÎ¹Î½",
        Xw: "{delta}ÎµÎ²Î´ Ï€ÏÎ¹Î½",
        you: "Î•ÏƒÏ",
        delivered: "Î Î±ÏÎ±Î´ÏŒÎ¸Î·ÎºÎµ",
        "anonymous-email-response": "Î•Ï…Ï‡Î±ÏÎ¹ÏƒÏ„Î¿ÏÎ¼Îµ, Î¸Î± Î»Î¬Î²ÎµÏ„Îµ Î±Ï€Î¬Î½Ï„Î·ÏƒÎ® Î¼Î±Ï‚ Î¼Îµ Ï„Î¿ email ({email}).",
        "anonymous-email-responder": "Î˜Î± ÏƒÎ±Ï‚ ÎµÎ¹Î´Î¿Ï€Î¿Î¹Î®ÏƒÎ¿Ï…Î¼Îµ Î¼Îµ email.",
        "your-email": "Î¤Î¿ email ÏƒÎ±Ï‚",
        sending: "Î“Î¯Î½ÎµÏ„Î±Î¹ Î±Ï€Î¿ÏƒÏ„Î¿Î»Î®&hellip;",
        failed: "Î”ÎµÎ½ Ï€Î±ÏÎ±Î´ÏŒÎ¸Î·ÎºÎµ. ÎšÎ¬Î½Ï„Îµ ÎºÎ»Î¹Îº Î³Î¹Î± Î½Î± Î¾Î±Î½Î±Î´Î¿ÎºÎ¹Î¼Î¬ÏƒÎµÏ„Îµ.",
        uploading: "ÎœÎµÏ„Î±Ï†ÏŒÏÏ„Ï‰ÏƒÎ·",
        uploaded: "ÎœÎµÏ„Î±Ï†Î¿ÏÏ„ÏŽÎ¸Î·ÎºÎµ",
        "max-upload-size": "Î¤Î¿ Î¼Î­Î³Î¹ÏƒÏ„Î¿ Î¼Î­Î³ÎµÎ¸Î¿Ï‚ Î¼ÎµÏ„Î±Ï†ÏŒÏÏ„Ï‰ÏƒÎ·Ï‚ ÎµÎ¯Î½Î±Î¹ {number}ÎœÎ’",
        "insert-emoji": "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ emoji",
        "send-attachment": "Î£Ï„ÎµÎ¯Î»Ï„Îµ Ï„Î¿ ÏƒÏ…Î½Î·Î¼Î¼Î­Î½Î¿",
        "press-enter-to-send": "Î Î±Ï„Î®ÏƒÏ„Îµ Enter Î³Î¹Î± Î±Ï€Î¿ÏƒÏ„Î¿Î»Î®",
        "not-seen-yet": "Î”ÎµÎ½ Î­Ï‡ÎµÎ¹ Î±ÎºÏŒÎ¼Î· Î±Î½Î±Î³Î½Ï‰ÏƒÏ„ÎµÎ¯",
        seen: "Î‘Î½Î±Î³Î½ÏŽÏƒÏ„Î·ÎºÎµ",
        "x-says": "O/H {firstName} Î»Î­ÎµÎ¹...",
        "someone-says": "ÎšÎ¬Ï€Î¿Î¹Î¿Ï‚ Î»Î­ÎµÎ¹...",
        "active-in-the-last-x-minutes": "Î•Î½ÎµÏÎ³ÏŒÏ‚/Î® Ï„Î± Ï„ÎµÎ»ÎµÏ…Ï„Î±Î¯Î± {minutes} Î»ÎµÏ€Ï„Î¬",
        "active-in-the-last-hour": "Î¤ÎµÎ»ÎµÏ…Ï„Î±Î¯Î± ÎµÎ½ÎµÏÎ³ÏŒÏ‚/Î® Ï€ÏÎ¹Î½ Î±Ï€ÏŒ 1 ÏŽÏÎ±",
        "last-active-one-hour-ago": "Î¤ÎµÎ»ÎµÏ…Ï„Î±Î¯Î± ÎµÎ½ÎµÏÎ³ÏŒÏ‚/Î® Ï€ÏÎ¹Î½ Î±Ï€ÏŒ 1 ÏŽÏÎ±",
        "last-active-x-hours-ago": "Î¤ÎµÎ»ÎµÏ…Ï„Î±Î¯Î± ÎµÎ½ÎµÏÎ³ÏŒÏ‚/Î® Ï€ÏÎ¹Î½ Î±Ï€ÏŒ {hours} ÏŽÏÎµÏ‚",
        "last-active-one-day-ago": "Î¤ÎµÎ»ÎµÏ…Ï„Î±Î¯Î± ÎµÎ½ÎµÏÎ³ÏŒÏ‚/Î® Ï‡Î¸ÎµÏ‚",
        "last-active-x-days-ago": "Î¤ÎµÎ»ÎµÏ…Ï„Î±Î¯Î± ÎµÎ½ÎµÏÎ³ÏŒÏ‚/Î® Ï€ÏÎ¹Î½ Î±Ï€ÏŒ {days} Î·Î¼Î­ÏÎµÏ‚",
        "last-active-more-than-one-week-ago": "Î¤ÎµÎ»ÎµÏ…Ï„Î±Î¯Î± ÎµÎ½ÎµÏÎ³ÏŒÏ‚/Î® Ï€ÏÎ¹Î½ Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ¿ Î±Ï€ÏŒ 1 ÎµÎ²Î´Î¿Î¼Î¬Î´Î±",
        "message-autoresponse": "Î˜Î± ÏƒÎ±Ï‚ ÎµÎ¹Î´Î¿Ï€Î¿Î¹Î®ÏƒÎ¿Ï…Î¼Îµ ÎµÎ´ÏŽ ÏŒÏ„Î±Î½ Î±Ï€Î±Î½Ï„Î®ÏƒÎ¿Ï…Î¼Îµ.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Î›Î¬Î²ÎµÏ„Îµ ÎµÎ½Î·Î¼ÎµÏÏŽÏƒÎµÎ¹Ï‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Î±Ï…Ï„Î® Ï„Î· ÏƒÏ…Î½Î¿Î¼Î¹Î»Î¯Î± Î¼Î­ÏƒÏ‰ email",
        "team-will-reply-asap": "Î— Î¿Î¼Î¬Î´Î± Î¸Î± ÎµÏ€Î¹ÎºÎ¿Î¹Î½Ï‰Î½Î®ÏƒÎµÎ¹ Î¼Î±Î¶Î¯ ÏƒÎ±Ï‚ Ï„Î¿ ÏƒÏ…Î½Ï„Î¿Î¼ÏŒÏ„ÎµÏÎ¿ Î´Ï…Î½Î±Ï„ÏŒ.",
        "check-back-or-email": "Î•Î»Î­Î³Î¾Ï„Îµ Î¾Î±Î½Î¬ ÎµÎ´ÏŽ Î±ÏÎ³ÏŒÏ„ÎµÏÎ±, Î´Î¹Î±Ï†Î¿ÏÎµÏ„Î¹ÎºÎ¬ Î¸Î± ÏƒÎ±Ï‚ Î±Ï€Î¿ÏƒÏ„Î±Î»ÎµÎ¯ email ÏƒÏ„Î¿ {email} Î±Î½ Î±Ï€Î¿Ï…ÏƒÎ¹Î¬Î¶ÎµÏ„Îµ.",
        close: "Close",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "English",
        "language-name": "English",
        "new-message": "New Conversation",
        "new-comment-placeholder": "Start typing&hellip;",
        "new-conversation-placeholder": "Send a message&hellip;",
        "new-article-conversation-placeholder": "Ask a question&hellip;",
        "enter-email-placeholder": "youremail@domain.com",
        "not-now": "Not now",
        "please-enter-a-valid-email": "Please enter a valid email address",
        "no-conversations": "No conversations",
        send: "Send",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Just now",
        Xm: "{delta}m ago",
        Xh: "{delta}h ago",
        Xd: "{delta}d ago",
        Xw: "{delta}w ago",
        you: "You",
        delivered: "Delivered",
        "anonymous-email-response": "Thanks, we'll update you here and by email ({email}).",
        "anonymous-email-responder": "Let us notify you by email.",
        "your-email": "Your email",
        sending: "Sending&hellip;",
        failed: "Not delivered. Click to try again.",
        uploading: "Uploading",
        uploaded: "Uploaded",
        "max-upload-size": "The maximum upload size is {number}MB",
        "insert-emoji": "Insert emoji",
        "send-attachment": "Send attachment",
        "press-enter-to-send": "Press Enter to send",
        "not-seen-yet": "Not seen yet",
        seen: "Seen",
        "x-says": "{firstName} says...",
        "someone-says": "Someone says...",
        "active-in-the-last-x-minutes": "Active in the last {minutes} minutes",
        "active-in-the-last-hour": "Active in the last hour",
        "last-active-one-hour-ago": "Last active 1 hour ago",
        "last-active-x-hours-ago": "Last active {hours} hours ago",
        "last-active-one-day-ago": "Last active yesterday",
        "last-active-x-days-ago": "Last active {days} days ago",
        "last-active-more-than-one-week-ago": "Last active more than 1 week ago",
        "message-autoresponse": "We'll notify you here when we reply.",
        "median-reply-autoresponse-with-email": "Check back here later, or you'll receive updates at {email} if you're away.",
        "median-reply-autoresponse-without-email": "Check back here later, or enter your email address to get notified if you're away.",
        "receive-updates-email-collector": "Receive updates on this conversation via email:",
        "team-will-reply-asap": "The team will get back to you as soon as they can.",
        "check-back-or-email": "Check back here later, or you'll receive updates at {email} if you're away.",
        close: "Close",
        "january-date": "January {date}",
        "february-date": "February {date}",
        "march-date": "March {date}",
        "april-date": "April {date}",
        "may-date": "May {date}",
        "june-date": "June {date}",
        "july-date": "July {date}",
        "august-date": "August {date}",
        "september-date": "September {date}",
        "october-date": "October {date}",
        "november-date": "November {date}",
        "december-date": "December {date}",
        "video-launcher-conversation-placeholder": "Ask {adminName} a question&hellip;"
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Spanish",
        "language-name": "EspaÃ±ol",
        "new-message": "Nuevo Mensaje",
        "new-comment-placeholder": "Escribir una respuesta&hellip;",
        "new-conversation-placeholder": "Iniciar una conversaciÃ³n&hellip;",
        "new-article-conversation-placeholder": "Haga una pregunta&hellip;",
        "no-conversations": "No hay conversaciones",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Enviar",
        "powered-by-intercom": "Patrocinado por Intercom",
        Xs: "Justo ahora",
        Xm: "hace {delta}m",
        Xh: "hace {delta}h",
        Xd: "hace {delta}d",
        Xw: "hace {delta}sem",
        you: "TÃº",
        delivered: "Entregado",
        "anonymous-email-response": "Gracias. Te informaremos por correo electrÃ³nico ({email}) cuando respondamos.",
        "anonymous-email-responder": "DÃ©janos tu correo electrÃ³nico y te informaremos.",
        "your-email": "Correo electrÃ³nico",
        sending: "Enviando...",
        failed: "No entregado. Haz clic para volver a intentarlo.",
        uploading: "Subiendo",
        uploaded: "Subido",
        "max-upload-size": "El tamaÃ±o mÃ¡ximo de subida es {number}MB",
        "insert-emoji": "Insertar emoji",
        "send-attachment": "Enviar adjunto",
        "press-enter-to-send": "Pulsa Entrar para enviar",
        "not-seen-yet": "AÃºn no se ha visto",
        seen: "Visto",
        "x-says": "{firstName} dice...",
        "someone-says": "Alguien dice...",
        "active-in-the-last-x-minutes": "Activo los Ãºltimos {minutes} minutos",
        "active-in-the-last-hour": "Activo en la Ãºltima hora",
        "last-active-one-hour-ago": "Activo por Ãºltima vez hace 1 hora",
        "last-active-x-hours-ago": "Activo por Ãºltima vez hace {hours} horas",
        "last-active-one-day-ago": "Activo por Ãºltima vez ayer",
        "last-active-x-days-ago": "Activo por Ãºltima vez hace {days} dias",
        "last-active-more-than-one-week-ago": "Activo por Ãºltima vez hace mÃ¡s de una semana",
        "message-autoresponse": "Te notificaremos por aquÃ­ cuando contestemos.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Recibe actualizaciones sobre esta conversaciÃ³n por correo electrÃ³nico.",
        "team-will-reply-asap": "El equipo se pondrÃ¡ en contacto contigo en cuanto pueda.",
        "check-back-or-email": "Vuelve mÃ¡s tarde por aquÃ­ o se pondrÃ¡n en contacto contigo por correo electrÃ³nico en {email} si estÃ¡s ausente.",
        close: "Cerrar",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Estonian",
        "language-name": "Eesti keel",
        "new-message": "Uus sÃµnum",
        "new-comment-placeholder": "Kirjuta vastus&hellip;",
        "new-conversation-placeholder": "Alusta uut vestlust&hellip;",
        "new-article-conversation-placeholder": "KÃ¼si kÃ¼simus&hellip;",
        "no-conversations": "Vestlusi ei ole",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Saada",
        "powered-by-intercom": "Teenust pakub Intercom",
        Xs: "Just nÃ¼Ã¼d",
        Xm: "{delta}m eest",
        Xh: "{delta}t eest",
        Xd: "{delta}p eest",
        Xw: "{delta}n eest",
        you: "Sina",
        delivered: "Saadetud",
        "anonymous-email-response": "TÃ¤name! Teatame su meilile ({email}) oma vastusest",
        "anonymous-email-responder": "Las me saadame sulle meiliga teate.",
        "your-email": "Sinu meiliaadress",
        sending: "Saadan &hellip;.",
        failed: "SÃµnumi saatmine ebaÃµnnestus. KlÃµpsa nupule, et uuesti saata.",
        uploading: "Laen Ã¼les",
        uploaded: "Ãœles laetud",
        "max-upload-size": "Maksimaalne Ã¼leslaadimise maht on {number}MB",
        "insert-emoji": "Saada emoji",
        "send-attachment": "Saada manus",
        "press-enter-to-send": "Vajuta saatmiseks sisestuklahvi",
        "not-seen-yet": "Ei ole veel vaadatud",
        seen: "Vaadatud",
        "x-says": "{firstName} Ã¼tleb...",
        "someone-says": "Keegi Ã¼tleb...",
        "active-in-the-last-x-minutes": "Aktiivne {minutes} minutit",
        "active-in-the-last-hour": "Aktiivne viimase tunni",
        "last-active-one-hour-ago": "Viimati aktiivne 1 tund tagasi",
        "last-active-x-hours-ago": "Viimati aktiivne {hours} tundi tagasi",
        "last-active-one-day-ago": "Viimati aktiivne eile",
        "last-active-x-days-ago": "Viimati aktiivne {days} pÃ¤eva tagasi",
        "last-active-more-than-one-week-ago": "Viimati aktiivne rohkem kui 1 nÃ¤dal tagasi",
        "message-autoresponse": "Teatame oma vastusest.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Saa teavitusi selle vestluse kohta meili teel",
        "team-will-reply-asap": "Tiim vastab sulle esimesel vÃµimalusel.",
        "check-back-or-email": "Vaata hiljem siit. Kui oled aga eemal, saadab tiim sulle meili aadressile {email}.",
        close: "Sulge",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Finnish",
        "language-name": "Finnish",
        "new-message": "Uusi viesti",
        "new-comment-placeholder": "Kirjoita vastaus&hellip;",
        "new-conversation-placeholder": "Aloita keskustelu&hellip;",
        "new-article-conversation-placeholder": "Kysy kysymys&hellip;",
        "no-conversations": "Ei keskusteluja",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "LÃ¤hetÃ¤",
        "powered-by-intercom": "Palvelun tarjoaa Intercom",
        Xs: "Juuri nyt",
        Xm: "{delta}m sitten",
        Xh: "{delta}t sitten",
        Xd: "{delta}p sitten",
        Xw: "{delta}vk sitten",
        you: "SinÃ¤",
        delivered: "LÃ¤hetetty",
        "anonymous-email-response": "Kiitos. Ilmoitamme sÃ¤hkÃ¶postitse ({email}), kun vastaamme viestiisi.",
        "anonymous-email-responder": "Salli sÃ¤hkÃ¶posti-ilmoituksen lÃ¤hettÃ¤minen.",
        "your-email": "SÃ¤hkÃ¶postiosoitteesi",
        sending: "LÃ¤hetetÃ¤Ã¤n&hellip;",
        failed: "LÃ¤hettÃ¤minen epÃ¤onnistui. YritÃ¤ uudestaan napsauttamalla.",
        uploading: "Ladataan",
        uploaded: "Ladattu",
        "max-upload-size": "Palvelimelle ladattavan tiedoston kokorajoitus on {number}Mt",
        "insert-emoji": "LisÃ¤Ã¤ emoji",
        "send-attachment": "LÃ¤hetÃ¤ liitetiedosto",
        "press-enter-to-send": "LÃ¤hetÃ¤ painamalla Enter",
        "not-seen-yet": "Ei nÃ¤hty",
        seen: "NÃ¤hty",
        "x-says": "{firstName} sanoo...",
        "someone-says": "Joku sanoo...",
        "active-in-the-last-x-minutes": "Aktiivinen {minutes} minuuttia sitten",
        "active-in-the-last-hour": "Aktiivinen viimeisen tunnin aikana",
        "last-active-one-hour-ago": "Aktiivinen tunti sitten",
        "last-active-x-hours-ago": "Aktiivinen {hours} tuntia sitten",
        "last-active-one-day-ago": "Aktiivinen eilen",
        "last-active-x-days-ago": "Aktiivinen {days} pÃ¤ivÃ¤Ã¤ sitten",
        "last-active-more-than-one-week-ago": "Aktiivinen yli viikko sitten",
        "message-autoresponse": "Ilmoitamme tÃ¤ssÃ¤, kun vastaamme viestiisi.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Vastaanota keskustelun pÃ¤ivitykset sÃ¤hkÃ¶postilla",
        "team-will-reply-asap": "Tiimi ottaa sinuun yhteyttÃ¤ niin pian kuin mahdollista.",
        "check-back-or-email": "KÃ¤vÃ¤ise paikalla myÃ¶hemmin. Jos olet poissa, saat sÃ¤hkÃ¶postin osoitteeseen {email}.",
        close: "Sulje",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "French",
        "language-name": "FranÃ§ais",
        "new-message": "Nouveau message",
        "new-comment-placeholder": "Ecrire une rÃ©ponse&hellip;",
        "new-conversation-placeholder": "DÃ©marrez une conversation&hellip;",
        "new-article-conversation-placeholder": "Poser une question&hellip;",
        "no-conversations": "Aucune conversation",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Envoyer",
        "powered-by-intercom": "PropulsÃ© par Intercom",
        Xs: "Ã€ l'instant",
        Xm: "Il y a {delta} min",
        Xh: "Il y a {delta}h",
        Xd: "Il y a {delta}j",
        Xw: "Il y a {delta} sem",
        you: "Vous",
        delivered: "LivrÃ©",
        "anonymous-email-response": "Merci, nous vous prÃ©viendrons par e-mail ({email}) lorsque nous vous rÃ©pondons.",
        "anonymous-email-responder": "Laissez-nous vous prÃ©venir par e-mail.",
        "your-email": "Votre e-mail",
        sending: "Envoi en cours&hellip;",
        failed: "Non livrÃ©. Cliquez pour rÃ©essayer.",
        uploading: "TÃ©lÃ©versement",
        uploaded: "TÃ©lÃ©versÃ©",
        "max-upload-size": "La taille maximale de tÃ©lÃ©versement est de {number}Mo",
        "insert-emoji": "InsÃ©rer une Ã©moticÃ´ne",
        "send-attachment": "Envoyer une piÃ¨ce jointe",
        "press-enter-to-send": "Appuyez sur EntrÃ©e pour envoyer",
        "not-seen-yet": "Pas encore vu",
        seen: "Vu",
        "x-says": "{firstName} dit...",
        "someone-says": "Quelqu'un dit...",
        "active-in-the-last-x-minutes": "Actifs dans les {minutes} derniÃ¨res minutes",
        "active-in-the-last-hour": "Actifs dans la derniÃ¨re heure",
        "last-active-one-hour-ago": "DerniÃ¨re activitÃ© il y a 1 heure",
        "last-active-x-hours-ago": "DerniÃ¨re activitÃ© il y a {hours} heures",
        "last-active-one-day-ago": "DerniÃ¨re activitÃ© hier",
        "last-active-x-days-ago": "DerniÃ¨re activitÃ© il y a {days} jours",
        "last-active-more-than-one-week-ago": "DerniÃ¨re activitÃ© il y a plus de 1 semaine",
        "message-autoresponse": "Nous vous prÃ©viendrons ici lorsque nous vous rÃ©pondrons.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Recevoir des mises Ã  jour sur cette conversation par e-mail",
        "team-will-reply-asap": "L'Ã©quipe vous rÃ©pondra dÃ¨s que possible.",
        "check-back-or-email": "Revenez plus tard ou on vous enverra un e-mail Ã  l'adresse {email} si vous Ãªtes absent(e).",
        close: "Fermer cette fenÃªtre",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Hebrew",
        "language-name": "×¢×‘×¨×™×ª",
        "new-message": "×”×•×“×¢×” ×—×“×©×”",
        "new-comment-placeholder": "&hellip; ×›×ª×•×‘ ××ª ×”×ª×©×•×‘×”",
        "new-conversation-placeholder": "&hellip; ×”×•×“×¢×” ×—×“×©×”",
        "new-article-conversation-placeholder": "×©××œ ×©××œ×”",
        "no-conversations": "××™×Ÿ ×©×™×—×•×ª",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "×©×œ×™×—×”",
        "powered-by-intercom": "×ž×•×¤×¢×œ ×¢×œ ×™×“×™ Intercom",
        Xs: "×¨×§ ×¢×›×©×™×•",
        Xm: "×œ×¤× ×™ {delta} ×“×§×•×ª",
        Xh: "×œ×¤× ×™ {delta} ×©×¢×•×ª",
        Xd: "×œ×¤× ×™ {delta} ×™×ž×™×",
        Xw: "×œ×¤× ×™ {delta} ×©×‘×•×¢×•×ª",
        you: "××ª×",
        delivered: "× ×ž×¡×¨",
        "anonymous-email-response": "×ª×•×“×”, × ×•×“×™×¢ ×œ×š ×‘××ž×¦×¢×•×ª ×”×“×•×'×œ ({email}) ×›××©×¨ ×™×©×œ×— ×ž×¢× ×”.",
        "anonymous-email-responder": "××¤×©×¨×™ ×œ× ×• ×œ×™×“×¢ ××•×ª×š ×‘××ž×¦×¢×•×ª ×“×•×'×œ.",
        "your-email": "×”×“×•×'×œ ×©×œ×š",
        sending: "×©×•×œ×—&hellip;",
        failed: "×œ× × ×ž×¡×¨. ×”×§×©/×™ ×œ× ×¡×•×ª ×©×•×‘.",
        uploading: "×ž×¢×œ×”",
        uploaded: "×”×•×¢×œ×”",
        "max-upload-size": "×”×’×•×“×œ ×”×ž×§×¡×™×ž×œ×™ ×œ×”×¢×œ××” ×”×•× {number}MB",
        "insert-emoji": "×”×•×¡×¤×ª ××ž×•×’'×™",
        "send-attachment": "×©×œ×™×—×ª ×§×•×‘×¥ ×ž×¦×•×¨×£",
        "press-enter-to-send": "×œ×©×œ×™×—×” ×œ×—×¥ ×¢×œ Enter",
        "not-seen-yet": "×¢×“×™×™×Ÿ ×œ× × ×¦×¤×”",
        seen: "× ×¦×¤×”",
        "x-says": "{firstName} ××•×ž×¨...",
        "someone-says": "×ž×™×©×”×• ××•×ž×¨...",
        "active-in-the-last-x-minutes": "×¤×¢×™×œ×•×ª ×‘-{minutes} ×”×“×§×•×ª ×”××—×¨×•× ×•×ª",
        "active-in-the-last-hour": "×¤×¢×™×œ ×‘×©×¢×” ×”××—×¨×•× ×”",
        "last-active-one-hour-ago": "×¤×¢×™×œ×•×ª ××—×¨×•× ×” ×œ×¤× ×™ ×©×¢×” ××—×ª",
        "last-active-x-hours-ago": "×¤×¢×™×œ×•×ª ××—×¨×•× ×” ×œ×¤× ×™ {hours} ×©×¢×•×ª",
        "last-active-one-day-ago": "×¤×¢×™×œ×•×ª ××—×¨×•× ×” ××ª×ž×•×œ",
        "last-active-x-days-ago": "×”×¤×¢×™×œ×•×ª ××—×¨×•× ×” ×™×ž×™× {days}",
        "last-active-more-than-one-week-ago": "×¤×¢×™×œ×•×ª ××—×¨×•× ×” ×œ×¤× ×™ ×™×•×ª×¨ ×ž×©×‘×•×¢",
        "message-autoresponse": "× ×•×“×™×¢ ×œ×š ×›××Ÿ ×›×©×ª×ª×§×‘×œ ×ª×©×•×‘×”.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": '×§×‘×œ×ª ×¢×“×›×•× ×™× ×‘×“×•×"×œ ××•×“×•×ª ×©×™×—×” ×–×•',
        "team-will-reply-asap": "×”×¦×•×•×ª ×™×—×–×•×¨ ××œ×™×›× ×‘×”×§×“× ×”××¤×©×¨×™.",
        "check-back-or-email": '×‘×“×§×• ×›××Ÿ ×©×•×‘ ×ž××•×—×¨ ×™×•×ª×¨ ××• ×©×”× ×™×©×œ×—×• ×œ×›× ×“×•×"×œ ×œ-{email} ×× ××ª× ×œ× ×ž×—×•×‘×¨×™×.',
        close: "×¡×’×™×¨×ª ×—×œ×•×Ÿ ×§×•×¤×¥",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Croatian",
        "language-name": "Hrvatski",
        "new-message": "Nova poruka",
        "new-comment-placeholder": "NapiÅ¡i odovor&hellip;",
        "new-conversation-placeholder": "ZapoÄni razgovor&hellip;",
        "new-article-conversation-placeholder": "Postavite pitanje&hellip;",
        "no-conversations": "Nema razgovora",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "PoÅ¡alji",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Upravo sada",
        Xm: "{delta}m prije",
        Xh: "{delta}h prije",
        Xd: "{delta}d prije",
        Xw: "{delta}tjed. prije",
        you: "Vi",
        delivered: "IsporuÄeno",
        "anonymous-email-response": "Hvala, obavijestit Ä‡emo vas e-poÅ¡tom ({email}) kad odgovorimo.",
        "anonymous-email-responder": "Å½eljeli bismo vas obavijestiti e-poÅ¡tom.",
        "your-email": "VaÅ¡a e-poÅ¡ta",
        sending: "Slanje&hellip;",
        failed: "Nije isporuÄeno. Kliknite za ponovni pokuÅ¡aj.",
        uploading: "PrenoÅ¡enje&hellip;",
        uploaded: "PreneÅ¡eno",
        "max-upload-size": "Maksimalna veliÄina prijenosa je {number}MB",
        "insert-emoji": "Umetni emoji",
        "send-attachment": "PoÅ¡alji privitak",
        "press-enter-to-send": "Pritisnite â€žEnterâ€œ za slanje",
        "not-seen-yet": "Nije joÅ¡ pogledano",
        seen: "Pogledano",
        "x-says": "{firstName} kaÅ¾e...",
        "someone-says": "Netko kaÅ¾e...",
        "active-in-the-last-x-minutes": "Aktivan zadnjih {minutes} minuta",
        "active-in-the-last-hour": "Aktivan je u posljednjih sat vremena",
        "last-active-one-hour-ago": "Zadnji put aktivan: prije 1 sat",
        "last-active-x-hours-ago": "Zadnji put aktivan: prije {hours} sati",
        "last-active-one-day-ago": "Zadnji puta aktivan: juÄer",
        "last-active-x-days-ago": "Zadnji put aktivan: {days} dana prije",
        "last-active-more-than-one-week-ago": "Zadnji puta aktivan: prije viÅ¡e od jednog tjedna",
        "message-autoresponse": "Obavijestit Ä‡emo vas nakon Å¡to odgovorimo.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Primajte aÅ¾uriranja o ovom razgovoru e-poÅ¡tom",
        "team-will-reply-asap": "Tim Ä‡e vam se javiti u Å¡to kraÄ‡em roku.",
        "check-back-or-email": "Provjerite poslije ovdje ili, ako ste odsutni, priÄekajte da vam se jave na adresu {email}.",
        close: "Zatvori",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Hungarian",
        "language-name": "Magyar",
        "new-message": "Ãšj Ã¼zenet",
        "new-comment-placeholder": "Ãrj egy vÃ¡laszt&hellip;",
        "new-conversation-placeholder": "IndÃ­tsunk el egy beszÃ©lgetÃ©st&hellip;",
        "new-article-conversation-placeholder": "Tegyen fel egy kÃ©rdÃ©st&hellip;",
        "no-conversations": "Nincsenek pÃ¡rbeszÃ©dek",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "KÃ¼ld",
        "powered-by-intercom": "TechnolÃ³gia: Intercom",
        Xs: "Csak most",
        Xm: "{delta}p",
        Xh: "{delta}Ã³",
        Xd: "{delta}n",
        Xw: "{delta}h",
        you: "Te",
        delivered: "KÃ©zbesÃ­tve",
        "anonymous-email-response": "KÃ¶szÃ¶njÃ¼k. A vÃ¡laszrÃ³l e-mailben ({email}) Ã©rtesÃ­tÃ¼nk.",
        "anonymous-email-responder": "KÃ©rj e-mail Ã©rtesÃ­tÃ©st.",
        "your-email": "E-mail cÃ­med",
        sending: "KÃ¼ldÃ©s&hellip;",
        failed: "KÃ¼ldÃ©s sikertelen. Kattints, hogy ÃºjbÃ³l megprÃ³bÃ¡ljuk.",
        uploading: "FeltÃ¶ltÃ©s",
        uploaded: "FeltÃ¶ltve",
        "max-upload-size": "A feltÃ¶lthetÅ‘ fÃ¡jl maximÃ¡lis mÃ©rete {number}MB",
        "insert-emoji": "SzmÃ¡jli beszÃºrÃ¡sa",
        "send-attachment": "CsatolmÃ¡ny kÃ¼ldÃ©se",
        "press-enter-to-send": "KÃ¼ldÃ©shez nyomd meg az Enter billentyÅ±t",
        "not-seen-yet": "MÃ©g nem lÃ¡tta",
        seen: "LÃ¡tta",
        "x-says": "{firstName} szerint...",
        "someone-says": "Valaki szerint...",
        "active-in-the-last-x-minutes": "AktÃ­v az elmÃºlt {minutes} percben",
        "active-in-the-last-hour": "AktÃ­v az elmÃºlt Ã³rÃ¡ban",
        "last-active-one-hour-ago": "LegutÃ³bb aktÃ­v: 1 Ã³rÃ¡ja",
        "last-active-x-hours-ago": "LegutÃ³bb aktÃ­v: {hours} Ã³rÃ¡ja",
        "last-active-one-day-ago": "LegutÃ³bb aktÃ­v: tegnap",
        "last-active-x-days-ago": "LegutÃ³bb aktÃ­v: {days} nappal ezelÅ‘tt",
        "last-active-more-than-one-week-ago": "LegutÃ³bb aktÃ­v: tÃ¶bb mint 1 hete",
        "message-autoresponse": "A vÃ¡laszunkrÃ³l itt Ã©rtesÃ­tÃ¼nk.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "E-mail Ã©rtesÃ­tÃ©s a beszÃ©lgetÃ©s frissÃ¼lÃ©sÃ©rÅ‘l",
        "team-will-reply-asap": "Csapatunk amint tud, vÃ¡laszol Ã–nnek.",
        "check-back-or-email": "NÃ©zzen vissza kÃ©sÅ‘bb, vagy ha nincs itt, e-mailt kÃ¼ldÃ¼nk Ã–nnek a kÃ¶vetkezÅ‘ cÃ­mre: {email}.",
        close: "BezÃ¡rÃ¡s",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Bahasa",
        "language-name": "Bahasa",
        "new-message": "Chat Baru",
        "new-comment-placeholder": "Ketik reply&hellip;",
        "new-conversation-placeholder": "Mulai percakapan&hellip;",
        "new-article-conversation-placeholder": "Ajukan pertanyaan&hellip;",
        "no-conversations": "Belum ada percakapan",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Send",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Baru saja",
        Xm: "{delta} menit yang lalu",
        Xh: "{delta} jam yang lalu",
        Xd: "{delta} hari yang lalu",
        Xw: "{delta} minggu yang lalu",
        you: "Anda",
        delivered: "Terkirim",
        "anonymous-email-response": "Terima kasih, Anda akan mendapat kabar dari kami lewat email ({email}) setelah kami mengirim jawaban.",
        "anonymous-email-responder": "Harap perbolehkan kami untuk mengabari Anda lewat email.",
        "your-email": "Email Anda",
        sending: "Sedang mengirim&hellip;",
        failed: "Tidak terkirim. Harap klik untuk mencoba sekali lagi.",
        uploading: "Uploading",
        uploaded: "Uploaded",
        "max-upload-size": "Ukuran upload maksimal adalah {number}MB",
        "insert-emoji": "Masukkan emoji",
        "send-attachment": "Kirim lampiran",
        "press-enter-to-send": "Tekan Enter untuk mengirim",
        "not-seen-yet": "Belum terlihat",
        seen: "Terlihat",
        "x-says": "{firstName} mengatakan...",
        "someone-says": "Seseorang mengatakan...",
        "active-in-the-last-x-minutes": "Aktif dalam {minutes} menit",
        "active-in-the-last-hour": "Aktif dalam 1 jam yang lalu",
        "last-active-one-hour-ago": "Terakhir aktif 1 jam yang lalu",
        "last-active-x-hours-ago": "Terakhir aktif {hours} jam yang lalu",
        "last-active-one-day-ago": "Terakhir aktif kemarin",
        "last-active-x-days-ago": "Terakhir aktif {days} hari yang lalu",
        "last-active-more-than-one-week-ago": "Terakhir aktif lebih dari 1 minggu yang lalu",
        "message-autoresponse": "Anda akan mendapat kabar dari kami di sini ketika kami menjawab.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "",
        "team-will-reply-asap": "",
        "check-back-or-email": "",
        close: "Close",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Italian",
        "language-name": "Italiano",
        "new-message": "Nuovo messaggio",
        "new-comment-placeholder": "Scrivi una risposta&hellip;",
        "new-conversation-placeholder": "Inizia una conversazione&hellip;",
        "new-article-conversation-placeholder": "Poni una domanda&hellip;",
        "no-conversations": "Nessuna conversazione",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Invia",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "In questo istante",
        Xm: "{delta}m fa",
        Xh: "{delta}h fa",
        Xd: "{delta}d fa",
        Xw: "{delta} sett fa",
        you: "Tu",
        delivered: "Consegnato",
        "anonymous-email-response": "Grazie. Ti invieremo una notifica non appena risponderemo tramite email all'indirizzo ({email}).",
        "anonymous-email-responder": "Ricevi una email di notifica.",
        "your-email": "La tua email",
        sending: "Invio in corso&hellip;",
        failed: "Non inviato. Clicca per riprovare.",
        uploading: "Caricamento",
        uploaded: "Caricato",
        "max-upload-size": "Limite massimo di caricamento: {number}MB",
        "insert-emoji": "Inserisci emoji",
        "send-attachment": "Invia l'allegato",
        "press-enter-to-send": "Premi Invio per inviare",
        "not-seen-yet": "Non ancora visualizzato",
        seen: "Visualizzato",
        "x-says": "{firstName} dice...",
        "someone-says": "Qualcuno dice...",
        "active-in-the-last-x-minutes": "Ultima attivitÃ  negli ultimi {minutes} minuti",
        "active-in-the-last-hour": "Ultima attivitÃ : nelle ultime ora",
        "last-active-one-hour-ago": "Ultima attivitÃ : 1 ora fa",
        "last-active-x-hours-ago": "Ultima attivitÃ : {hours} ore fa",
        "last-active-one-day-ago": "Ultima attivitÃ : ieri",
        "last-active-x-days-ago": "Ultima attivitÃ : {days} giorni fa",
        "last-active-more-than-one-week-ago": "Ultima attivitÃ : piÃ¹ di 1 settimana fa",
        "message-autoresponse": "Quando risponderemo, riceverai una notifica qui.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Ricevi aggiornamenti su questa conversazione tramite e-mail",
        "team-will-reply-asap": "Riceverai una risposta da parte del team non appena possibile.",
        "check-back-or-email": "Controlla qui tra un po' oppure, se non ci sei, riceverai un'e-mail all'indirizzo {email}.",
        close: "Chiudi",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Japanese",
        "language-name": "æ—¥æœ¬ã®",
        "new-message": "æ–°ã—ã„ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸",
        "new-comment-placeholder": "è¿”ä¿¡ã‚’æ›¸ã&hellip;",
        "new-conversation-placeholder": "ä¼šè©±ã‚’å§‹ã‚ã‚‹&hellip;",
        "new-article-conversation-placeholder": "è³ªå•ã™ã‚‹&hellip;",
        "no-conversations": "ä¼šè©±ãªã—",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "é€ä¿¡",
        "powered-by-intercom": "Intercom ã«ã‚ˆã‚Šç¨¼åƒã—ã¦ã„ã¾ã™",
        Xs: "æ•°ç§’",
        Xm: "{delta}åˆ†å‰",
        Xh: "{delta}æ™‚é–“å‰",
        Xd: "{delta}æ—¥å‰",
        Xw: "{delta}é€±é–“å‰",
        you: "ãŠå®¢æ§˜",
        delivered: "é…ä¿¡æ¸ˆã¿",
        "anonymous-email-response": "ã‚ã‚ŠãŒã¨ã†ã”ã–ã„ã¾ã™ã€‚è¿”ä¿¡æ™‚ã«ã¯ã“ã¡ã‚‰ã‹ã‚‰ãƒ¡ãƒ¼ãƒ«({email})ã«é€šçŸ¥ã—ã¾ã™ã€‚",
        "anonymous-email-responder": "ãƒ¡ãƒ¼ãƒ«ã§é€šçŸ¥ã•ã›ã¦ãã ã•ã„ã€‚",
        "your-email": "ã‚ãªãŸã®ãƒ¡ãƒ¼ãƒ«",
        sending: "é€ä¿¡ä¸­&hellip;",
        failed: "é€ä¿¡ã•ã‚Œã¾ã›ã‚“ã§ã—ãŸã€‚ã‚¯ãƒªãƒƒã‚¯ã—ã¦å†åº¦ãŠè©¦ã—ãã ã•ã„ã€‚",
        uploading: "ã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰ä¸­",
        uploaded: "ã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰æ¸ˆã¿",
        "max-upload-size": "ã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰ã§ãã‚‹ã‚µã‚¤ã‚ºã®ä¸Šé™ã¯{number}MBã§ã™",
        "insert-emoji": "çµµæ–‡å­—ã‚’æŒ¿å…¥ã™ã‚‹",
        "send-attachment": "æ·»ä»˜ã‚’é€ä¿¡ã™ã‚‹",
        "press-enter-to-send": "Enterã‚­ãƒ¼ã‚’æŠ¼ã—ã¦é€ä¿¡ã—ã¦ãã ã•ã„",
        "not-seen-yet": "ã¾ã é–²è¦§ã•ã‚Œã¦ã„ã¾ã›ã‚“",
        seen: "é–²è¦§æ¸ˆã¿",
        "x-says": "{firstName}ã•ã‚“ãŒè¨€ã£ã¦ã„ã¾ã™...",
        "someone-says": "èª°ã‹ãŒè¨€ã£ã¦ã„ã¾ã™...",
        "active-in-the-last-x-minutes": "{minutes}åˆ†å‰ã‹ã‚‰ã‚ªãƒ³ãƒ©ã‚¤ãƒ³",
        "active-in-the-last-hour": "æœ€å¾Œã®æ™‚é–“ã§ã‚¢ã‚¯ãƒ†ã‚£ãƒ–",
        "last-active-one-hour-ago": "æœ€çµ‚ã‚ªãƒ³ãƒ©ã‚¤ãƒ³æ™‚: 1æ™‚é–“å‰",
        "last-active-x-hours-ago": "æœ€çµ‚ã‚ªãƒ³ãƒ©ã‚¤ãƒ³æ™‚: {hours}æ™‚é–“å‰",
        "last-active-one-day-ago": "æœ€çµ‚ã‚ªãƒ³ãƒ©ã‚¤ãƒ³æ™‚: æ˜¨æ—¥",
        "last-active-x-days-ago": "æœ€çµ‚ã‚ªãƒ³ãƒ©ã‚¤ãƒ³æ™‚: {days}æ—¥å‰",
        "last-active-more-than-one-week-ago": "æœ€çµ‚ã‚ªãƒ³ãƒ©ã‚¤ãƒ³æ™‚: 1é€±é–“ä»¥ä¸Šå‰",
        "message-autoresponse": "è¿”ä¿¡æ™‚ã«ã¯ã“ã¡ã‚‰ã‹é€šçŸ¥ã—ã¾ã™ã€‚",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "ã“ã®ä¼šè©±ã«ã¤ã„ã¦ã®æœ€æ–°æƒ…å ±ã‚’ãƒ¡ãƒ¼ãƒ«ã§å—ã‘å–ã‚‹",
        "team-will-reply-asap": "å½“ç¤¾ãƒãƒ¼ãƒ ãŒã§ãã‚‹ã ã‘ã™ãã«ãŠè¿”äº‹ã„ãŸã—ã¾ã™ã€‚",
        "check-back-or-email": "å¾Œã»ã©ã“ã¡ã‚‰ã‹ã‚‰å†åº¦ç¢ºèªã—ã¦ãã ã•ã„ã€‚ã‚ãªãŸãŒã„ãªã„å ´åˆã¯ã€{email}ã«ãƒ¡ãƒ¼ãƒ«ãŒå±Šãã¾ã™ã€‚",
        close: "ã‚¯ãƒ­ãƒ¼ã‚º",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Korean",
        "language-name": "í•œêµ­ì–´",
        "new-message": "ìƒˆ ë©”ì‹œì§€",
        "new-comment-placeholder": "ë‹µë³€ ìž‘ì„±í•˜ê¸°&hellip;",
        "new-conversation-placeholder": "ëŒ€í™” ì‹œìž‘í•˜ê¸°&hellip;",
        "new-article-conversation-placeholder": "ë¬¸ì˜í•˜ê¸°&hellip;",
        "no-conversations": "ëŒ€í™” ì—†ìŒ",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "ì „ì†¡",
        "powered-by-intercom": "Intercom ì œê³µ",
        Xs: "ë°©ê¸ˆ",
        Xm: "{delta} ë¶„ ì „",
        Xh: "{delta} ì‹œê°„ ì „",
        Xd: "{delta} ì¼ ì „",
        Xw: "{delta} ì£¼ ì „",
        you: "ë‚˜",
        delivered: "ì „ë‹¬ë¨",
        "anonymous-email-response": "ê°ì‚¬í•©ë‹ˆë‹¤. ë‹µìž¥ì„ í•  ë•Œ ì´ë©”ì¼({email})ë¡œ ì•Œë ¤ë“œë¦¬ê² ìŠµë‹ˆë‹¤.",
        "anonymous-email-responder": "ì´ë©”ì¼ë¡œ ì•Œë ¤ë“œë¦¬ê² ìŠµë‹ˆë‹¤.",
        "your-email": "ì´ë©”ì¼",
        sending: "ì „ì†¡ ì¤‘&hellip;",
        failed: "ì „ì†¡ ì‹¤íŒ¨. ë‹¤ì‹œ ì‹œë„í•˜ì‹œë ¤ë©´ í´ë¦­í•˜ì„¸ìš”.",
        uploading: "ì—…ë¡œë“œ ì¤‘",
        uploaded: "ì—…ë¡œë“œ ì™„ë£Œ",
        "max-upload-size": "ì—…ë¡œë“œ ê°€ëŠ¥í•œ ìµœëŒ€ í¬ê¸°ëŠ” {number}MBìž…ë‹ˆë‹¤.",
        "insert-emoji": "ì—ëª¨ì§€ ì‚½ìž…",
        "send-attachment": "ì²¨ë¶€íŒŒì¼ ì „ì†¡",
        "press-enter-to-send": "ì—”í„° í‚¤ë¥¼ ëˆŒëŸ¬ ì „ì†¡í•˜ì„¸ìš”.",
        "not-seen-yet": "ì•„ì§ ì½ì§€ ì•ŠìŒ",
        seen: "ì½ìŒ",
        "x-says": "{firstName}ë‹˜ì˜ ë©”ì‹œì§€...",
        "someone-says": "ëˆ„êµ°ê°€ì˜ ë©”ì‹œì§€...",
        "active-in-the-last-x-minutes": "ë§ˆì§€ë§‰ ì ‘ì† {minutes}ë¶„ ì „",
        "active-in-the-last-hour": "ë§ˆì§€ë§‰ ì ‘ì† 1ì‹œê°„ ì „",
        "last-active-one-hour-ago": "ë§ˆì§€ë§‰ ì ‘ì† 1ì‹œê°„ ì „",
        "last-active-x-hours-ago": "ë§ˆì§€ë§‰ ì ‘ì† {hours}ì‹œê°„ ì „",
        "last-active-one-day-ago": "ë§ˆì§€ë§‰ ì ‘ì† ì–´ì œ",
        "last-active-x-days-ago": "ë§ˆì§€ë§‰ ì ‘ì† {days}ì¼ ì „",
        "last-active-more-than-one-week-ago": "ë§ˆì§€ë§‰ ì ‘ì† 1ì£¼ì¼ ì „",
        "message-autoresponse": "ì €í¬ê°€ ë‹µë³€í•˜ë©´ ì—¬ê¸°ì—ì„œ ì•Œë¦¼ì„ í™•ì¸í•˜ì‹¤ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "ì´ ëŒ€í™”ì˜ ì—…ë°ì´íŠ¸ ë‚´ìš©ì„ ì´ë©”ì¼ë¡œ ë°›ê¸°",
        "team-will-reply-asap": "ê°€ëŠ¥í•œ ë¹¨ë¦¬ íŒ€ì´ ë‹µë³€ì„ ë“œë¦½ë‹ˆë‹¤.",
        "check-back-or-email": "ë‚˜ì¤‘ì— ì—¬ê¸°ì—ì„œ í™•ì¸í•´ë³´ì„¸ìš”. ë¶€ìž¬ì¤‘ì¼ ê²½ìš°, {email}ìœ¼ë¡œ ì´ë©”ì¼ì´ ë°œì†¡ë©ë‹ˆë‹¤.",
        close: "ë‹«ê¸°",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Lithuanian",
        "language-name": "LietuviÅ³ kalba",
        "new-message": "Nauja Å¾inutÄ—",
        "new-comment-placeholder": "Atsakyti&hellip;",
        "new-conversation-placeholder": "PradÄ—ti pokalbÄ¯&hellip;",
        "new-article-conversation-placeholder": "UÅ¾duokite klausimÄ…&hellip;",
        "no-conversations": "NÄ—ra pokalbiÅ³",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "SiÅ³sti",
        "powered-by-intercom": "Sukurta Intercom",
        Xs: "KÄ… tik",
        Xm: "prieÅ¡ {delta}m",
        Xh: "prieÅ¡ {delta}v",
        Xd: "prieÅ¡ {delta}d",
        Xw: "prieÅ¡ {delta}s",
        you: "Tu",
        delivered: "Pristatyta",
        "anonymous-email-response": "AÄiÅ«. Apie atsakymÄ… praneÅ¡ime el. paÅ¡tu.",
        "anonymous-email-responder": "Leiskite praneÅ¡ti el. paÅ¡tu.",
        "your-email": "JÅ«sÅ³ el. paÅ¡tas",
        sending: "SiunÄiama&hellip;",
        failed: "Nepristatyta. SpustelÄ—kite, kad pabandytume dar kartÄ….",
        uploading: "Keliama",
        uploaded: "Ä®kelta",
        "max-upload-size": "Maksimalus leistinas failo dydis â€“ {number}MB",
        "insert-emoji": "Ä®terpkite Å¡ypsniukÄ…",
        "send-attachment": "SiÅ³skite priedÄ…",
        "press-enter-to-send": "Paspauskite â€žEnterâ€œ, kad iÅ¡siÅ³stumÄ—te",
        "not-seen-yet": "Dar nepamatyta.",
        seen: "Pamatyta.",
        "x-says": "{firstName} sako...",
        "someone-says": "KaÅ¾kas sako...",
        "active-in-the-last-x-minutes": "Aktyvus per paskutines {minutes} minutes",
        "active-in-the-last-hour": "Aktyvus paskutinÄ™ valandÄ…",
        "last-active-one-hour-ago": "PaskutinÄ¯ kartÄ… aktyvus prieÅ¡ 1 valandÄ…",
        "last-active-x-hours-ago": "PaskutinÄ¯ kartÄ… aktyvus prieÅ¡ {hours} valandas",
        "last-active-one-day-ago": "PaskutinÄ¯ kartÄ… aktyvus vakar",
        "last-active-x-days-ago": "PaskutinÄ¯ kartÄ… aktyvus prieÅ¡ {days} dienas",
        "last-active-more-than-one-week-ago": "PaskutinÄ¯ kartÄ… aktyvus daugiau nei prieÅ¡ 1 savaitÄ™",
        "message-autoresponse": "Atsakydami jums praneÅ¡ime.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Gaukite informacijÄ… apie Å¡Ä¯ pokalbÄ¯ elektroniniu paÅ¡tu",
        "team-will-reply-asap": "Komanda Jums atsakys kai tik galÄ—s.",
        "check-back-or-email": "GrÄ¯Å¾kite vÄ—liau arba, jei nepasiliksite, gausite elektroninÄ¯ laiÅ¡kÄ… adresu {email}.",
        close: "UÅ¾daryti",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Latvian",
        "language-name": "LatvieÅ¡u",
        "new-message": "Jauna ziÅ†a",
        "new-comment-placeholder": "RakstÄ«t atbildi&hellip;",
        "new-conversation-placeholder": "UzsÄkt sarunu&hellip;",
        "new-article-conversation-placeholder": "Uzdot jautÄjumu&hellip;",
        "no-conversations": "Nav ziÅ†as",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "SÅ«tÄ«t",
        "powered-by-intercom": "NodroÅ¡ina Intercom",
        Xs: "Tikko",
        Xm: "pirms {delta}m",
        Xh: "pirms {delta}s",
        Xd: "pirms {delta}d",
        Xw: "pirms {delta}n",
        you: "Tu",
        delivered: "NosÅ«tÄ«ts",
        "anonymous-email-response": "MÄ“s jÅ«s informÄ“sim pa e-pastu ({email}), kad mÅ«su ziÅ†ojums bÅ«s nosÅ«tÄ«ts.",
        "anonymous-email-responder": "MÄ“s informÄ“sim JÅ«s pa e-pastu.",
        "your-email": "JÅ«su e-pasts",
        sending: "NosÅ«ta&hellip;",
        failed: "Nav nosÅ«tÄ«ts. UzkliÅ¡Ä·iniet vÄ“lreiz.",
        uploading: "AugÅ¡upielÄdÄ“",
        uploaded: "AugÅ¡upielÄdÄ“ts",
        "max-upload-size": "MaksimÄlais augÅ¡upielÄdes lielums ir {number}MB",
        "insert-emoji": "Ievietot emocijzÄ«mes",
        "send-attachment": "NosÅ«tÄ«t pielikumu",
        "press-enter-to-send": "Nospiediet Enter, lai nosÅ«tÄ«tu",
        "not-seen-yet": "VÄ“l nav apskatÄ«ts",
        seen: "ApskatÄ«ts",
        "x-says": "{firstName} saka...",
        "someone-says": "KÄds saka...",
        "active-in-the-last-x-minutes": "AktÄ«vs pÄ“dÄ“jÄs {minutes} minÅ«tÄ“s",
        "active-in-the-last-hour": "AktÄ«vs pÄ“dÄ“jÄs stundas",
        "last-active-one-hour-ago": "PÄ“dÄ“joreiz aktÄ«vs pirms 1 stundas",
        "last-active-x-hours-ago": "PÄ“dÄ“joreiz aktÄ«vs pirms {hours} stundÄm",
        "last-active-one-day-ago": "PÄ“dÄ“joreiz aktÄ«vs vakar",
        "last-active-x-days-ago": "PÄ“dÄ“joreiz aktÄ«vs pirms {days} dienas",
        "last-active-more-than-one-week-ago": "PÄ“dÄ“joreiz aktÄ«vs pirms vairÄk nekÄ 1 nedÄ“Ä¼as",
        "message-autoresponse": "MÄ“s jÅ«s informÄ“sim, kad bÅ«sim nosÅ«tÄ«juÅ¡i atbildi.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "SaÅ†emiet jaunÄko informÄciju par Å¡o saraksti pa e-pastu",
        "team-will-reply-asap": "Komandas loceklis sazinÄsies ar Jums, cik Ätri vien iespÄ“jams.",
        "check-back-or-email": "MÄ“Ä£iniet vÄ“lÄk, vai Jums tiks nosÅ«tÄ«ts e-pasts uz {email} JÅ«su prombÅ«tnes laikÄ.",
        close: "AizvÄ“rt",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Mongolian",
        "language-name": "ÐœÐ¾Ð½Ð³Ð¾Ð»",
        "new-message": "Ð¨Ð¸Ð½Ñ Ð—ÑƒÑ€Ð²Ð°Ñ",
        "new-comment-placeholder": "Ð¥Ð°Ñ€Ð¸Ñƒ Ð±Ð¸Ñ‡Ð¸Ñ…&hellip;",
        "new-conversation-placeholder": "Ð¯Ñ€Ð¸Ð° ÑÑ…Ð»ÑÑ…&hellip;",
        "new-article-conversation-placeholder": "ÐÑÑƒÑƒÐ»Ñ‚ Ð°ÑÑƒÑƒÑ…&hellip;",
        "no-conversations": "Ð¯Ð¼Ð°Ñ€ Ñ‡ ÑÑ€Ð¸Ð°",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Ð˜Ð»Ð³ÑÑÑ…",
        "powered-by-intercom": "Intercom Ð·Ð°Ð¹Ñ‚Ð°Ð¹",
        Xs: "Ð¯Ð³ Ð¾Ð´Ð¾Ð¾",
        Xm: "{delta} Ð¼Ð¸Ð½ÑƒÑ‚ Ó©Ð¼Ð½Ó©",
        Xh: "{delta} Ñ†Ð°Ð³Ð¸Ð¹Ð½ Ó©Ð¼Ð½Ó©",
        Xd: "{delta} Ó©Ð´Ñ€Ð¸Ð¹Ð½ Ó©Ð¼Ð½Ó©",
        Xw: "{delta} Ð´Ð¾Ð»Ð¾Ð¾ Ñ…Ð¾Ð½Ð¾Ð³Ð¸Ð¹Ð½ Ó©Ð¼Ð½Ó©",
        you: "Ð¢Ð°",
        delivered: "Ð¥Ò¯Ñ€Ð³ÑÑÑÐ½",
        "anonymous-email-response": "Ð‘Ð°ÑÑ€Ð»Ð°Ð»Ð°Ð°, Ð±Ð¸Ð´ Ñ‚Ð°Ð½Ð´ Ñ-Ð¼ÑÐ¹Ð» ({email})-ÑÑÑ€ Ñ…Ð°Ñ€Ð¸Ñƒ Ð¼ÑÐ´ÑÐ³Ð´ÑÑ… Ð±Ð¾Ð»Ð½Ð¾.",
        "anonymous-email-responder": "Ð¢Ð°Ð½Ð´ Ñ-Ð¼ÑÐ¹Ð»ÑÑÑ€ Ð¼ÑÐ´ÑÐ³Ð´ÑŒÐµ.",
        "your-email": "Ð¢Ð°Ð½Ñ‹ Ñ-Ð¼ÑÐ¹Ð»",
        sending: "Ð˜Ð»Ð³ÑÑÐ¶ Ð±Ð°Ð¹Ð½Ð°&hellip;",
        failed: "ÐžÑ‡ÑÐ¾Ð½Ð³Ò¯Ð¹. Ð”Ð°Ñ…Ð¸Ð½ Ð´Ð°Ñ€Ð¶ Ð¾Ñ€Ð¾Ð»Ð´Ð¾Ð½Ð¾ ÑƒÑƒ.",
        uploading: "Ð‘Ð°Ð¹Ñ€ÑˆÑƒÑƒÐ»Ð¶ Ð±Ð°Ð¹Ð½Ð°",
        uploaded: "Ð‘Ð°Ð¹Ñ€ÑˆÑƒÑƒÐ»Ð»Ð°Ð°",
        "max-upload-size": "Ð‘Ð°Ð¹Ñ€ÑˆÑƒÑƒÐ»Ð°Ñ… Ñ„Ð°Ð¹Ð»Ñ‹Ð½ Ð´ÑÑÐ´ Ñ…ÑÐ¼Ð¶ÑÑ {number}MB.",
        "insert-emoji": "Ð­Ð¼Ð¾Ð¶Ð¸ Ð¾Ñ€ÑƒÑƒÐ»Ð°Ñ…",
        "send-attachment": "Ð¥Ð°Ð²ÑÑ€Ð°Ð»Ñ‚ Ð¸Ð»Ð³ÑÑÑ…",
        "press-enter-to-send": "",
        "not-seen-yet": "",
        seen: "",
        "x-says": "",
        "someone-says": "",
        "active-in-the-last-x-minutes": "",
        "active-in-the-last-hour": "",
        "last-active-one-hour-ago": "",
        "last-active-x-hours-ago": "",
        "last-active-one-day-ago": "",
        "last-active-x-days-ago": "",
        "last-active-more-than-one-week-ago": "",
        "message-autoresponse": "",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Ð˜Ð¼ÑÐ¹Ð»ÑÑÑ€ ÑÐ½Ñ ÑÑ€Ð¸Ð°Ð½Ñ‹ Ñ‚ÑƒÑ…Ð°Ð¹ ÑˆÐ¸Ð½Ñ Ð¼ÑÐ´ÑÑÐ»Ð»Ð¸Ð¹Ð³ Ñ…Ò¯Ð»ÑÑÐ½ Ð°Ð²Ð°Ñ…",
        "team-will-reply-asap": "Ð¢ÑƒÑ Ð±Ð°Ð³ Ñ‚Ð°Ð½Ñ‚Ð°Ð¹ Ð°Ð»ÑŒ Ð±Ð¾Ð»Ð¾Ñ… Ñ…ÑƒÑ€Ð´Ð°Ð½ Ñ…Ð¾Ð»Ð±Ð¾Ð¾ Ð±Ð°Ñ€Ð¸Ð½Ð°.",
        "check-back-or-email": "Ð¢Ð° Ð´Ð°Ñ€Ð°Ð° Ò¯Ò¯Ð½Ð¸Ð¹Ð³ ÑˆÐ°Ð»Ð³Ð°Ð½Ð° ÑƒÑƒ ÑÑÐ²ÑÐ» Ñ‚Ð°Ð½Ñ‹Ð³ Ñ…Ð¾Ð» Ð±Ð°Ð¹Ð²Ð°Ð» {email} Ñ…Ð°ÑÐ³Ð°Ð°Ñ€ Ñ‚Ð°Ð½Ð´ Ð¸Ð¼ÑÐ¹Ð» Ð¸Ð»Ð³ÑÑÐ½Ñ.",
        close: "Ð¥Ð°Ð°Ñ…",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Norwegian BokmÃ¥l",
        "language-name": "Norsk",
        "new-message": "Ny melding",
        "new-comment-placeholder": "Skriv et svar&hellip;",
        "new-conversation-placeholder": "Start en samtale&hellip;",
        "new-article-conversation-placeholder": "SpÃ¸r et spÃ¸rsmÃ¥l&hellip;",
        "no-conversations": "Ingen samtaler",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} fra {appName}",
        send: "Send",
        "powered-by-intercom": "Levert av Intercom",
        Xs: "Noen sekunder",
        Xm: "{delta}m",
        Xh: "{delta}t",
        Xd: "{delta}d",
        Xw: "{delta}u",
        you: "Du",
        delivered: "Levert",
        "anonymous-email-response": "Takk. Vi varsler deg via e-post ({email}) nÃ¥r vi svarer.",
        "anonymous-email-responder": "La oss varsle deg via e-post.",
        "your-email": "Din e-post",
        sending: "Sender &hellip;",
        failed: "Ikke levert. PrÃ¸v igjen.",
        uploading: "Laster opp",
        uploaded: "Opplastet",
        "max-upload-size": "Maksimal opplastingsstÃ¸rrelse er {number}MB",
        "insert-emoji": "Sett inn emoji",
        "send-attachment": "Send vedlegg",
        "press-enter-to-send": "Trykk pÃ¥ Enter for Ã¥ sende",
        "not-seen-yet": "Ikke sett ennÃ¥.",
        seen: "Sett.",
        "x-says": "{firstName} sier...",
        "someone-says": "Noen sa...",
        "active-in-the-last-x-minutes": "Aktiv de siste {minutes} minuttene",
        "active-in-the-last-hour": "Aktiv den siste timen",
        "last-active-one-hour-ago": "Aktiv for 1 time siden",
        "last-active-x-hours-ago": "Sist aktiv for {hours} timer siden",
        "last-active-one-day-ago": "Sist aktiv i gÃ¥r",
        "last-active-x-days-ago": "Sist aktiv for {days} dager siden",
        "last-active-more-than-one-week-ago": "Sist aktiv for over 1 uke siden",
        "message-autoresponse": "Vi varsler deg her nÃ¥r vi svarer.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Motta oppdateringer om denne samtalen via e-post",
        "team-will-reply-asap": "Temaet vil svare deg sÃ¥ snart de kan.",
        "check-back-or-email": "Ta en titt senere. Dersom du er borte, vil de sende deg en e-post til {email}.",
        close: "Lukk",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Dutch",
        "language-name": "Nederlands",
        "new-message": "Nieuw bericht",
        "new-comment-placeholder": "Schrijf een reactie&hellip;",
        "new-conversation-placeholder": "Begin een gesprek&hellip;",
        "new-article-conversation-placeholder": "Stel een vraag&hellip;",
        "no-conversations": "Geen gesprekken",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Stuur",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Een paar seconden",
        Xm: "{delta}m geleden",
        Xh: "{delta}u geleden",
        Xd: "{delta}d geleden",
        Xw: "{delta}w geleden",
        you: "U",
        delivered: "Afgeleverd",
        "anonymous-email-response": "Bedankt, we brengen je per e-mail ({email}) op de hoogte wanneer we reageren.",
        "anonymous-email-responder": "Laat ons je per e-mail op de hoogte brengen.",
        "your-email": "Je e-mail",
        sending: "Aan het verzenden&hellip;",
        failed: "Niet afgeleverd. Klik om opnieuw te proberen.",
        uploading: "Aan het uploaden",
        uploaded: "GeÃ¼pload",
        "max-upload-size": "De maximale uploadgrootte is {number}MB",
        "insert-emoji": "Emoji invoegen",
        "send-attachment": "Bijlage verzenden",
        "press-enter-to-send": "Druk op Enter om te versturen",
        "not-seen-yet": "Nog niet bekeken",
        seen: "Bekeken",
        "x-says": "{firstName} zegt...",
        "someone-says": "Iemand zegt...",
        "active-in-the-last-x-minutes": "In de afgelopen {minutes} minuten actief",
        "active-in-the-last-hour": "In het afgelopen uur actief",
        "last-active-one-hour-ago": "1 uur geleden voor het laatst actief",
        "last-active-x-hours-ago": "{hours} uur geleden voor het laatst actief",
        "last-active-one-day-ago": "Gisteren voor het laatst actief",
        "last-active-x-days-ago": "{days} dagen geleden voor het laatst actief",
        "last-active-more-than-one-week-ago": "Meer dan 1 week geleden voor het laatst actief",
        "message-autoresponse": "We laten het je hier weten als we antwoorden.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Ontvang updates over dit gesprek via e-mail",
        "team-will-reply-asap": "Het team zal zo snel mogelijk contact met je opnemen.",
        "check-back-or-email": "Je kunt hier later terugkomen, of ze sturen je een e-mail naar {email} als je er niet bent.",
        close: "Sluit",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Polish",
        "language-name": "Polski",
        "new-message": "Nowa wiadomoÅ›Ä‡",
        "new-comment-placeholder": "Napisz odpowiedÅº&hellip;",
        "new-conversation-placeholder": "Rozpocznij rozmowÄ™&hellip;",
        "new-article-conversation-placeholder": "Zadaj pytanie&hellip;",
        "no-conversations": "Brak rozmÃ³w",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} z {appName}",
        send: "WyÅ›lij",
        "powered-by-intercom": "ObsÅ‚uga przez Intercom",
        Xs: "Tylko teraz",
        Xm: "{delta}m temu",
        Xh: "{delta}g temu",
        Xd: "{delta}d temu",
        Xw: "{delta}t temu",
        you: "Ty",
        delivered: "Dostarczono",
        "anonymous-email-response": "DziÄ™kujemy, o odpowiedzi poinformujemy CiÄ™ mailowo ({email}).",
        "anonymous-email-responder": "PozwÃ³l nam zawiadamiaÄ‡ CiÄ™ przez email.",
        "your-email": "TwÃ³j email",
        sending: "WysyÅ‚anie&hellip;",
        failed: "Nie dostarczono. Kliknij, aby sprÃ³bowaÄ‡ ponownie.",
        uploading: "Åadowanie",
        uploaded: "ZaÅ‚adowano",
        "max-upload-size": "Maksymalny rozmiar Å‚adowania to {number}MB",
        "insert-emoji": "Wstaw emoji",
        "send-attachment": "WyÅ›lij zaÅ‚Ä…cznik",
        "press-enter-to-send": "WciÅ›nij Enter, aby wysÅ‚aÄ‡",
        "not-seen-yet": "Nieodczytana",
        seen: "Odczytana",
        "x-says": "{firstName} mÃ³wi...",
        "someone-says": "KtoÅ› mÃ³wi...",
        "active-in-the-last-x-minutes": "Aktywny(a) w ciÄ…gu ostatnich {minutes} minut",
        "active-in-the-last-hour": "Aktywny(a) w ciÄ…gu ostatniej godziny",
        "last-active-one-hour-ago": "Ostatnio aktywny(a) godzinÄ™ temu",
        "last-active-x-hours-ago": "Ostatnio aktywny(a) {hours} godzin(y) temu",
        "last-active-one-day-ago": "Ostatnio aktywny(a) wczoraj",
        "last-active-x-days-ago": "Ostatnio aktywny(a) {days} dni temu",
        "last-active-more-than-one-week-ago": "Ostatnio aktywny(a) ponad tydzieÅ„ temu",
        "message-autoresponse": "Powiadomimy ciÄ™ o tutaj naszej odpowiedzi.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Informacje o przebiegu tej sprawy moÅ¼esz dostawaÄ‡ pocztÄ… elektronicznÄ….",
        "team-will-reply-asap": "Nasz zespÃ³Å‚ postara siÄ™ udzieliÄ‡ odpowiedzi jak najszybciej.",
        "check-back-or-email": "SprawdÅº pÃ³Åºniej, a jeÅ›li nie bÄ™dziesz dostÄ™pny(a), otrzymasz e-mail na adres {email}.",
        close: "Zamknij okno",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Portuguese",
        "language-name": "PortuguÃªs",
        "new-message": "Nova Mensagem",
        "new-comment-placeholder": "Escreva uma resposta&hellip;",
        "new-conversation-placeholder": "Iniciar uma conversa&hellip;",
        "new-article-conversation-placeholder": "FaÃ§a uma pergunta&hellip;",
        "no-conversations": "Sem conversas",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Enviar",
        "powered-by-intercom": "Fornecido pela Intercom",
        Xs: "Agora mesmo",
        Xm: "HÃ¡ {delta}m",
        Xh: "HÃ¡ {delta}h",
        Xd: "HÃ¡ {delta}d",
        Xw: "HÃ¡ {delta}s",
        you: "VocÃª",
        delivered: "Entregue",
        "anonymous-email-response": "Obrigado, irÃ¡ ser notificado(a) por e-mail ({email}) ao receber a nossa resposta.",
        "anonymous-email-responder": "Permita que o(a) notifiquemos por e-mail.",
        "your-email": "O seu e-mail",
        sending: "A enviar&hellip;",
        failed: "NÃ£o entregue. Clique para tentar de novo.",
        uploading: "A carregar&hellip;",
        uploaded: "Carregado",
        "max-upload-size": "O tamanho de carregamento mÃ¡ximo Ã© {number}MB",
        "insert-emoji": "Inserir emoji",
        "send-attachment": "Enviar anexo",
        "press-enter-to-send": "Prime Enter para enviar",
        "not-seen-yet": "NÃ£o lida",
        seen: "Lida",
        "x-says": "{firstName} diz...",
        "someone-says": "AlguÃ©m diz...",
        "active-in-the-last-x-minutes": "Ativo nos Ãºltimos {minutes} minutos",
        "active-in-the-last-hour": "Ativo nos Ãºltimas hora",
        "last-active-one-hour-ago": "Ativo hÃ¡ 1 hora atrÃ¡s",
        "last-active-x-hours-ago": "Ativo hÃ¡ {hours} horas atrÃ¡s",
        "last-active-one-day-ago": "Ativo ontem",
        "last-active-x-days-ago": "Ativo hÃ¡ {days} dias atrÃ¡s",
        "last-active-more-than-one-week-ago": "Ativo hÃ¡ mais de 1 semana atrÃ¡s",
        "message-autoresponse": "Vais ser notificado aqui quando nos respondermos.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Receba atualizaÃ§Ãµes sobre esta conversa por e-mail",
        "team-will-reply-asap": "A equipa vai responder-lhe assim que possÃ­vel.",
        "check-back-or-email": "Volte aqui mais tarde ou espere por e-mail deles para {email} se estiver longe.",
        close: "Fechar",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Romanian",
        "language-name": "RomÃ¢nÄƒ",
        "new-message": "Mesaje noi",
        "new-comment-placeholder": "Scrie un raspuns&hellip;",
        "new-conversation-placeholder": "Incepe o conversatie&hellip;",
        "new-article-conversation-placeholder": "PuneÈ›i o Ã®ntrebare&hellip;",
        "no-conversations": "Fara conversatii",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} de la {appName}",
        send: "Trimite",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Chiar acum",
        Xm: "{delta}m inainte",
        Xh: "{delta}h inainte",
        Xd: "{delta}d inainte",
        Xw: "{delta}s inainte",
        you: "Tu",
        delivered: "Trimis",
        "anonymous-email-response": "MulÈ›umim, te vom notifica prin e-mail ({email}) atunci cÃ¢nd rÄƒspundem.",
        "anonymous-email-responder": "Permite-ne sÄƒ te notificÄƒm prin e-mail.",
        "your-email": "E-mailul tÄƒu",
        sending: "Se trimite&hellip;",
        failed: "Netransmis. FÄƒ clic pentru a Ã®ncerca din nou.",
        uploading: "Se Ã®ncarcÄƒ",
        uploaded: "ÃŽncÄƒrcat",
        "max-upload-size": "Dimensiunea maximÄƒ de Ã®ncÄƒrcare este {number}MB",
        "insert-emoji": "Introducere emoji",
        "send-attachment": "Trimitere ataÈ™ament",
        "press-enter-to-send": "ApasÄƒ Enter pentru a trimite",
        "not-seen-yet": "Nu s-a vÄƒzut Ã®ncÄƒ",
        seen: "VÄƒzut",
        "x-says": "{firstName} scrie...",
        "someone-says": "Cineva scrie...",
        "active-in-the-last-x-minutes": "Activ Ã®n ultimele {minutes} minute",
        "active-in-the-last-hour": "ActivÄƒ Ã®n ultimele orÄƒ",
        "last-active-one-hour-ago": "Activ acum 1 orÄƒ",
        "last-active-x-hours-ago": "Activ acum {hours} ore",
        "last-active-one-day-ago": "Activ ieri",
        "last-active-x-days-ago": "Activ {days} zile Ã®n urmÄƒ",
        "last-active-more-than-one-week-ago": "Activ acum peste o sÄƒptÄƒmÃ¢nÄƒ",
        "message-autoresponse": "Te vom notifica aici atunci cÃ¢nd rÄƒspundem.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "PrimeÈ™te actualizÄƒri la aceastÄƒ conversaÈ›ie prin e-mail",
        "team-will-reply-asap": "Echipa te va contacta Ã®n cel mai scurt timp posibil.",
        "check-back-or-email": "Revino mai tÃ¢rziu sau Ã®È›i vor trimite un e-mail la {email} dacÄƒ eÈ™ti plecat.",
        close: "Inchide",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Russian",
        "language-name": "Ð ÑƒÑÑÐºÐ¸Ð¹",
        "new-message": "ÐÐ¾Ð²Ð¾Ðµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ",
        "new-comment-placeholder": "ÐÐ°Ð¿Ð¸ÑÐ°Ñ‚ÑŒ Ð¾Ñ‚Ð²ÐµÑ‚&hellip;",
        "new-conversation-placeholder": "ÐÐ°Ñ‡Ð°Ñ‚ÑŒ Ñ€Ð°Ð·Ð³Ð¾Ð²Ð¾Ñ€&hellip;",
        "new-article-conversation-placeholder": "Ð—Ð°Ð´Ð°Ñ‚ÑŒ Ð²Ð¾Ð¿Ñ€Ð¾Ñ&hellip;",
        "no-conversations": "ÐÐµÑ‚ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",
        "powered-by-intercom": "ÐÐ° Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ðµ Intercom",
        Xs: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
        Xm: "{delta}m Ð½Ð°Ð·Ð°Ð´",
        Xh: "{delta}Ñ‡ Ð½Ð°Ð·Ð°Ð´",
        Xd: "{delta}Ð´ Ð½Ð°Ð·Ð°Ð´",
        Xw: "{delta}Ð½ÐµÐ´ Ð½Ð°Ð·Ð°Ð´",
        you: "Ð’Ñ‹",
        delivered: "Ð”Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¾",
        "anonymous-email-response": "Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾, Ð¼Ñ‹ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð¸Ð¼ Ð²Ð°Ñ Ð¾Ð± Ð¾Ñ‚Ð²ÐµÑ‚Ðµ Ð¿Ð¾ ÑÐ». Ð¿Ð¾Ñ‡Ñ‚Ðµ ({email}).",
        "anonymous-email-responder": "Ð”Ð°Ð²Ð°Ð¹Ñ‚Ðµ Ð¼Ñ‹ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð¸Ð¼ Ð²Ð°Ñ Ð¿Ð¾ ÑÐ». Ð¿Ð¾Ñ‡Ñ‚Ðµ.",
        "your-email": "Ð’Ð°Ñˆ ÑÐ». Ð°Ð´Ñ€ÐµÑ",
        sending: "ÐžÑ‚Ð¿Ñ€Ð°Ð²ÐºÐ°&hellip;",
        failed: "ÐÐµ Ð´Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¾. ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.",
        uploading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°",
        uploaded: "Ð—Ð°Ð³Ñ€ÑƒÐ¶ÐµÐ½Ð¾",
        "max-upload-size": "ÐœÐ°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ñ€Ð°Ð·Ð¼ÐµÑ€ Ð·Ð°Ð³Ñ€ÑƒÐ¶Ð°ÐµÐ¼Ð¾Ð³Ð¾ Ñ„Ð°Ð¹Ð»Ð° â€• {number}ÐœÐ±",
        "insert-emoji": "Ð’ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ ÑÐ¼Ð¾Ð´Ð·Ð¸",
        "send-attachment": "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ Ð²Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ",
        "press-enter-to-send": "ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ Enter Ð´Ð»Ñ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²ÐºÐ¸",
        "not-seen-yet": "Ð•Ñ‰Ðµ Ð½Ðµ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ð¾",
        seen: "ÐŸÑ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ð¾",
        "x-says": "{firstName} Ð³Ð¾Ð²Ð¾Ñ€Ð¸Ñ‚...",
        "someone-says": "ÐšÑ‚Ð¾-Ñ‚Ð¾ Ð³Ð¾Ð²Ð¾Ñ€Ð¸Ñ‚...",
        "active-in-the-last-x-minutes": "ÐÐºÑ‚Ð¸Ð²Ð½Ñ‹Ðµ Ð² Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ðµ {minutes} Ð¼Ð¸Ð½.",
        "active-in-the-last-hour": "ÐÐºÑ‚Ð¸Ð²Ð½Ñ‹Ðµ Ð² Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ Ñ‡Ð°Ñ",
        "last-active-one-hour-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ 1 Ñ‡Ð°Ñ Ð½Ð°Ð·Ð°Ð´",
        "last-active-x-hours-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ {hours} Ñ‡ Ð½Ð°Ð·Ð°Ð´",
        "last-active-one-day-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ Ð²Ñ‡ÐµÑ€Ð°",
        "last-active-x-days-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ {days} Ð´Ð½ÐµÐ¹ Ð½Ð°Ð·Ð°Ð´",
        "last-active-more-than-one-week-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ Ð±Ð¾Ð»ÐµÐµ 1 Ð½ÐµÐ´ÐµÐ»Ð¸ Ð½Ð°Ð·Ð°Ð´",
        "message-autoresponse": "ÐœÑ‹ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð¸Ð¼ Ð²Ð°Ñ Ð·Ð´ÐµÑÑŒ Ð¾Ð± Ð¾Ñ‚Ð²ÐµÑ‚Ðµ.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "ÐŸÐ¾Ð»ÑƒÑ‡Ð°Ð¹Ñ‚Ðµ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ Ð¾ Ð½Ð¾Ð²Ñ‹Ñ… ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸ÑÑ… ÑÑ‚Ð¾Ð¹ Ð±ÐµÑÐµÐ´Ñ‹ Ð¿Ð¾ ÑÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð¾Ð¹ Ð¿Ð¾Ñ‡Ñ‚Ðµ",
        "team-will-reply-asap": "ÐÐ°ÑˆÐ° ÐºÐ¾Ð¼Ð°Ð½Ð´Ð° Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ñ‚ Ð²Ð°Ð¼, ÐºÐ°Ðº Ñ‚Ð¾Ð»ÑŒÐºÐ¾ ÑÐ¼Ð¾Ð¶ÐµÑ‚.",
        "check-back-or-email": "ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð¿Ð¾Ð·Ð¶Ðµ, Ð½Ðµ Ð¿Ð¾ÑÐ²Ð¸Ð»ÑÑ Ð»Ð¸ Ð¾Ñ‚Ð²ÐµÑ‚ Ð·Ð´ÐµÑÑŒ, Ð»Ð¸Ð±Ð¾, Ð² ÑÐ»ÑƒÑ‡Ð°Ðµ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²Ð¸Ñ, Ð¾Ñ‚Ð²ÐµÑ‚ Ð¿Ñ€Ð¸Ð´ÐµÑ‚ Ð½Ð° Ð²Ð°Ñˆ ÐµÐ¼ÐµÐ¹Ð»: {email}",
        close: "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Slovenian",
        "language-name": "SlovenÅ¡Äina",
        "new-message": "Novo sporoÄilo",
        "new-comment-placeholder": "Odgovorite&hellip;",
        "new-conversation-placeholder": "PriÄnite pogovor&hellip;",
        "new-article-conversation-placeholder": "Zastavite vpraÅ¡anje&hellip;",
        "no-conversations": "Ni pogovorov",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} iz {appName}",
        send: "PoÅ¡lji",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Ravnokar",
        Xm: "{delta}m nazaj",
        Xh: "{delta}h nazaj",
        Xd: "{delta}d nazaj",
        Xw: "{delta}t nazaj",
        you: "Vi",
        delivered: "Dostavljeno",
        "anonymous-email-response": "Hvala, ko bomo odgovorili, vas bomo obvestili po e-poÅ¡ti ({email}).",
        "anonymous-email-responder": "Dovolite, da vas obvestimo po e-poÅ¡ti.",
        "your-email": "VaÅ¡a e-poÅ¡ta",
        sending: "PoÅ¡iljanje&hellip;",
        failed: "Ni dostavljeno. Kliknite, Äe Å¾elite znova poskusiti.",
        uploading: "Prenos",
        uploaded: "Preneseno",
        "max-upload-size": "NajveÄja velikost prenosa je {number}MB",
        "insert-emoji": "Vstavi smeÅ¡ka",
        "send-attachment": "PoÅ¡lji prilogo",
        "press-enter-to-send": "Za poÅ¡iljanje pritisnite Enter",
        "not-seen-yet": "Å e nevideno",
        seen: "Videno",
        "x-says": "{firstName} pravi...",
        "someone-says": "Nekdo pravi...",
        "active-in-the-last-x-minutes": "Aktiven v zadnjih {minutes} minutah",
        "active-in-the-last-hour": "Aktiven v zadnjih uro",
        "last-active-one-hour-ago": "ZadnjiÄ aktiven pred 1 uro",
        "last-active-x-hours-ago": "ZadnjiÄ aktiven pred {hours} urami",
        "last-active-one-day-ago": "ZadnjiÄ aktiven vÄeraj",
        "last-active-x-days-ago": "ZadnjiÄ aktiven pred {days} dnevi",
        "last-active-more-than-one-week-ago": "ZadnjiÄ aktiven pred veÄ kot 1 tednom",
        "message-autoresponse": "Ko bomo odgovorili, vas bomo obvestili tukaj.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Prejmite posodobitve tega pogovora po e-poÅ¡ti",
        "team-will-reply-asap": "Ekipa se vam bo oglasila takoj, ko bo mogoÄe.",
        "check-back-or-email": "Preverite kasneje tu, ali pa boste prejeli e-poÅ¡to {email}, Äe boste odsotni.",
        close: "Zapri",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Serbian",
        "language-name": "Srpski",
        "new-message": "Novi razgovor",
        "new-comment-placeholder": "NapiÅ¡i odovor&hellip;",
        "new-conversation-placeholder": "ZapoÄni razgovor&hellip;",
        "new-article-conversation-placeholder": "Postavite pitanje&hellip;",
        "no-conversations": "Nemate razgovora",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "PoÅ¡alji",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Upravo sada",
        Xm: "{delta}m prije",
        Xh: "{delta}h prije",
        Xd: "{delta}d prije",
        Xw: "{delta}sedm. prije",
        you: "Vi",
        delivered: "ÐŸÐ¾ÑÐ»Ð°Ñ‚Ð¾",
        "anonymous-email-response": "Ð¥Ð²Ð°Ð»Ð°, Ð¾Ð±Ð°Ð²ÐµÑÑ‚Ð¸Ñ›ÐµÐ¼Ð¾ Ñ‚Ðµ Ð¿Ð¾Ñ€ÑƒÐºÐ¾Ð¼ ({number}) ÐºÐ°Ð´Ð° Ð±ÑƒÐ´ÐµÐ¼Ð¾ Ð¾Ð´Ð³Ð¾Ð²Ð¾Ñ€Ð¸Ð»Ð¸.",
        "anonymous-email-responder": "ÐžÐ¼Ð¾Ð³ÑƒÑ›Ð¸ Ð½Ð°Ð¼ Ð´Ð° Ñ‚Ðµ Ð¾Ð±Ð°Ð²ÐµÑÑ‚Ð¸Ð¼Ð¾ Ð¿Ð¾Ñ€ÑƒÐºÐ¾Ð¼.",
        "your-email": "Ð¢Ð²Ð¾Ñ˜Ð° Ð°Ð´Ñ€ÐµÑÐ°",
        sending: "Ð¨Ð°Ñ™Ðµ ÑÐµ&hellip;",
        failed: "ÐÐ¸Ñ˜Ðµ Ð¿Ð¾ÑÐ»Ð°Ñ‚Ð¾. ÐŸÑ€Ð¸Ñ‚Ð¸ÑÐ½Ð¸ Ð´Ð° Ð¿Ð¾ÐºÑƒÑˆÐ°Ñˆ Ð¿Ð¾Ð½Ð¾Ð²Ð¾.",
        uploading: "Ð£Ñ‡Ð¸Ñ‚Ð°Ð²Ð° ÑÐµ",
        uploaded: "Ð£Ñ‡Ð¸Ñ‚Ð°Ð½Ð¾",
        "max-upload-size": "ÐœÐ°ÐºÑÐ¸Ð¼Ð°Ð»Ð½Ð° Ð²ÐµÐ»Ð¸Ñ‡Ð¸Ð½Ð° Ð·Ð° ÑƒÑ‡Ð¸Ñ‚Ð°Ð²Ð°ÑšÐµ Ñ˜Ðµ {email}MB",
        "insert-emoji": "Ð£Ð±Ð°Ñ†Ð¸ ÑÐ¼ÐµÑˆÐºÐ°",
        "send-attachment": "ÐŸÐ¾ÑˆÐ°Ñ™Ð¸ Ð¿Ñ€Ð¸Ð»Ð¾Ð³",
        "press-enter-to-send": "ÐŸÑ€Ð¸Ñ‚Ð¸ÑÐ½Ð¸ ÐµÐ½Ñ‚ÐµÑ€ Ð´Ð° Ð¿Ð¾ÑˆÐ°Ñ™ÐµÑˆ",
        "not-seen-yet": "ÐˆÐ¾Ñˆ Ð½Ð¸Ñ˜Ðµ Ð¿Ñ€ÐµÐ³Ð»ÐµÐ´Ð°Ð½",
        seen: "ÐŸÑ€ÐµÐ³Ð»ÐµÐ´Ð°Ð½",
        "x-says": "{firstName} ÐºÐ°Ð¶Ðµ...",
        "someone-says": "ÐÐµÐºÐ¾ ÐºÐ°Ð¶Ðµ...",
        "active-in-the-last-x-minutes": "ÐÐºÑ‚Ð¸Ð²Ð°Ð½ Ñ‚Ð¾ÐºÐ¾Ð¼ Ð¿Ð¾ÑÐ»ÐµÐ´ÑšÐ¸Ñ… {minutes} Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
        "active-in-the-last-hour": "ÐÐºÑ‚Ð¸Ð²Ð°Ð½ Ñ‚Ð¾ÐºÐ¾Ð¼ Ð¿Ð¾ÑÐ»ÐµÐ´ÑšÐ¸Ñ… ÑÐ°Ñ‚Ñƒ",
        "last-active-one-hour-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´ÑšÐ¸ Ð¿ÑƒÑ‚ Ð°ÐºÑ‚Ð¸Ð²Ð°Ð½ Ð¿Ñ€Ðµ 1 ÑÐ°Ñ‚",
        "last-active-x-hours-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´ÑšÐ¸ Ð¿ÑƒÑ‚ Ð°ÐºÑ‚Ð¸Ð²Ð°Ð½ Ð¿Ñ€Ðµ {hours} ÑÐ°Ñ‚Ð°",
        "last-active-one-day-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´ÑšÐ¸ Ð¿ÑƒÑ‚ Ð°ÐºÑ‚Ð¸Ð²Ð°Ð½ Ñ˜ÑƒÑ‡Ðµ",
        "last-active-x-days-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´ÑšÐ¸ Ð¿ÑƒÑ‚ Ð°ÐºÑ‚Ð¸Ð²Ð°Ð½ {days} Ð´Ð°Ð½Ð°",
        "last-active-more-than-one-week-ago": "ÐŸÐ¾ÑÐ»ÐµÐ´ÑšÐ¸ Ð¿ÑƒÑ‚ Ð°ÐºÑ‚Ð¸Ð²Ð°Ð½ Ð¿Ñ€Ðµ Ð²Ð¸ÑˆÐµ Ð¾Ð´ 1 Ð½ÐµÐ´ÐµÑ™Ðµ",
        "message-autoresponse": "ÐœÐ¸ Ñ›ÐµÐ¼Ð¾ Ñ‚Ðµ Ð¾Ð±Ð°Ð²ÐµÑÑ‚Ð¸Ñ‚Ð¸ Ð¾Ð²Ð´Ðµ ÐºÐ°Ð´Ð° Ð¾Ð´Ð³Ð¾Ð²Ð¾Ñ€Ð¸Ð¼Ð¾.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "ÐŸÑ€Ð¸Ð¼Ð¸Ñ‚Ðµ Ð°Ð¶ÑƒÑ€Ð¸Ñ€Ð°ÑšÐ° Ñƒ Ð²ÐµÐ·Ð¸ Ð¾Ð²Ðµ ÐºÐ¾Ð½Ð²ÐµÑ€Ð·Ð°Ñ†Ð¸Ñ˜Ðµ ÐµÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½ÑÐºÐ¾Ð¼ Ð¿Ð¾ÑˆÑ‚Ð¾Ð¼",
        "team-will-reply-asap": "Ð¢Ð¸Ð¼ Ñ›Ðµ Ð’Ð°Ñ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð¸Ñ€Ð°Ñ‚Ð¸ Ñ‡Ð¸Ð¼ Ð±ÑƒÐ´Ðµ Ð¼Ð¾Ð³Ð°Ð¾.",
        "check-back-or-email": "Ð’Ñ€Ð°Ñ‚Ð¸Ñ‚Ðµ ÑÐµ Ð½Ð°Ð·Ð°Ð´ Ð´Ð° Ð¿Ñ€Ð¾Ð²ÐµÑ€Ð¸Ñ‚Ðµ ÐºÐ°ÑÐ½Ð¸Ñ˜Ðµ Ð¸Ð»Ð¸ Ñ›Ðµ Ð’Ð°Ð¼ Ð¿Ð¾ÑÐ»Ð°Ñ‚Ð¸ Ð¿Ð¾Ñ€ÑƒÐºÑƒ Ð½Ð° {email} Ð°ÐºÐ¾ ÑÑ‚Ðµ Ð¾Ð´ÑÑƒÑ‚Ð½Ð¸.",
        close: "Zatvori",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Swedish",
        "language-name": "Svenska",
        "new-message": "Nytt meddelande",
        "new-comment-placeholder": "Skriv ett svar&hellip;",
        "new-conversation-placeholder": "Starta en konversation&hellip;",
        "new-article-conversation-placeholder": "StÃ¤ll en frÃ¥ga&hellip;",
        "admin-from-app": "{adminFirstName} frÃ¥n {appName}",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "no-conversations": "Inga konversationer",
        send: "Skicka",
        "powered-by-intercom": "Drivs av Intercom",
        Xs: "Just nu",
        Xm: "{delta}m sedan",
        Xh: "{delta}t sedan",
        Xd: "{delta}d sedan",
        Xw: "{delta}v sedan",
        you: "Du",
        delivered: "Levererat",
        "anonymous-email-response": "Tack, vi meddelar dig via e-post ({email}) nÃ¤r vi svarar.",
        "anonymous-email-responder": "LÃ¥t oss meddela dig via e-post.",
        "your-email": "Din e-postadress",
        sending: "Skickar&hellip;",
        failed: "Ej levererat. Klicka fÃ¶r att fÃ¶rsÃ¶ka igen.",
        uploading: "Laddar upp",
        uploaded: "Uppladdad",
        "max-upload-size": "Maximal uppladdningsstorlek Ã¤r {number} MB",
        "insert-emoji": "Infoga emoji",
        "send-attachment": "Skicka bifogad fil",
        "press-enter-to-send": "Tryck pÃ¥ Enter fÃ¶r att skicka",
        "not-seen-yet": "Inte visat Ã¤nnu",
        seen: "Visat",
        "x-says": "{firstName} sÃ¤ger...",
        "someone-says": "NÃ¥gon sÃ¤ger...",
        "active-in-the-last-x-minutes": "Aktiv inom de senaste {minutes} minuterna",
        "active-in-the-last-hour": "Aktiv inom de senaste timmen",
        "last-active-one-hour-ago": "Var senast aktiv fÃ¶r 1 timme sedan",
        "last-active-x-hours-ago": "Var senast aktiv fÃ¶r {hours} timmar sedan",
        "last-active-one-day-ago": "Var senast aktiv igÃ¥r",
        "last-active-x-days-ago": "Var senast aktiv fÃ¶r {days} dagar sedan",
        "last-active-more-than-one-week-ago": "Var senast aktiv fÃ¶r mer Ã¤n 1 vecka sedan",
        "message-autoresponse": "Vi kommer att meddela dig hÃ¤r nÃ¤r vi svarar.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "FÃ¥ uppdateringar om den hÃ¤r konversationen via e-post",
        "team-will-reply-asap": "Teamet kommer att svara sÃ¥ snabbt de kan.",
        "check-back-or-email": "Ta en titt hÃ¤r senare, eller sÃ¥ fÃ¥r du ett meddelande pÃ¥ {email} om du Ã¤r nÃ¥gon annanstans.",
        close: "StÃ¤ng",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Turkish",
        "language-name": "TÃ¼rkÃ§e",
        "new-message": "Yeni Mesaj",
        "new-comment-placeholder": "Bir cevap yazÄ±n&hellip;",
        "new-conversation-placeholder": "Bir konuÅŸmayÄ± baÅŸlatmak&hellip;",
        "new-article-conversation-placeholder": "Soru sor&hellip;",
        "no-conversations": "Sohbet Yok",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "GÃ¶nder",
        "powered-by-intercom": "Intercom tarafÄ±ndan gÃ¼Ã§lendirilmiÅŸtir",
        Xs: "BirkaÃ§ saniye",
        Xm: "{delta}d Ã¶nce",
        Xh: "{delta}s Ã¶nce",
        Xd: "{delta}g Ã¶nce",
        Xw: "{delta}h Ã¶nce",
        you: "Sen",
        delivered: "Ä°letildi",
        "anonymous-email-response": "TeÅŸekkÃ¼rler, cevapladÄ±ÄŸÄ±mÄ±zda e-posta ile ({email}) seni bu konuda bilgilendireceÄŸiz.",
        "anonymous-email-responder": "Sorunu yanÄ±tladÄ±ÄŸÄ±mÄ±zda e-posta ile bilgilendireceÄŸiz.",
        "your-email": "E-posta adresin",
        sending: "GÃ¶nderiliyor&hellip;",
        failed: "Teslim edilemedi. Tekrar denemek iÃ§in tÄ±kla.",
        uploading: "YÃ¼kleniyor",
        uploaded: "YÃ¼klendi",
        "max-upload-size": "YÃ¼klenebilecek maksimum boyut {number}MB",
        "insert-emoji": "Emoji ekle",
        "send-attachment": "Eklenti gÃ¶nder",
        "press-enter-to-send": "GÃ¶ndermek iÃ§in Enter tuÅŸuna bas",
        "not-seen-yet": "HenÃ¼z gÃ¶rÃ¼nmedi",
        seen: "GÃ¶rÃ¼ndÃ¼",
        "x-says": "{firstName} diyor ki...",
        "someone-says": "Birisi diyor ki...",
        "active-in-the-last-x-minutes": "Son {minutes} dakika iÃ§inde etkindi",
        "active-in-the-last-hour": "Son bir saat iÃ§inde etkin olan",
        "last-active-one-hour-ago": "En son 1 saat Ã¶nce etkindi",
        "last-active-x-hours-ago": "En son {hours} saat Ã¶nce etkindi",
        "last-active-one-day-ago": "En son dÃ¼n etkindi",
        "last-active-x-days-ago": "En son {days} gÃ¼n iÃ§inde etkindi",
        "last-active-more-than-one-week-ago": "1 haftadan fazla bir sÃ¼redir etkin deÄŸil",
        "message-autoresponse": "Cevap verdiÄŸimizde sana bildirim gÃ¶ndereceÄŸiz.",
        "median-reply-autoresponse-with-email": "Daha sonra kontrol edebilirsiniz yada ekibimizin size {email} adresinden ulaÅŸmasÄ±nÄ± bekleyebilirsiniz.",
        "median-reply-autoresponse-without-email": "Daha sonra kontrol edebilirsiniz yada bilgilendirilmek iÃ§in email adresinizi tanÄ±mlayabilirsiniz.",
        "receive-updates-email-collector": "Bu sohbetle lgili gÃ¼ncellemeleri e-posta ile alÄ±n",
        "team-will-reply-asap": "Ekip, mÃ¼mkÃ¼n olan en kÄ±sa zamanda size geri dÃ¶nÃ¼ÅŸ yapacaktÄ±r.",
        "check-back-or-email": "Daha sonra buradan tekrar kontrol edin ya da uzaktaysanÄ±z size {email} adresinden e-posta gÃ¶nderirler.",
        close: "Kapat",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Vietnamese",
        "language-name": "Tiáº¿ng Viá»‡t",
        "new-message": "Trao Ä‘á»•i má»›i",
        "new-comment-placeholder": "Tráº£ lá»i&hellip;",
        "new-conversation-placeholder": "Báº¯t Ä‘áº§u trao Ä‘á»•i&hellip;",
        "new-article-conversation-placeholder": "Äáº·t má»™t cÃ¢u há»i&hellip;",
        "no-conversations": "ChÆ°a cÃ³ trao Ä‘á»•i",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Gá»­i",
        "powered-by-intercom": "Cung cáº¥p bá»Ÿi Intercom",
        Xs: "Má»›i Ä‘Ã¢y",
        Xm: "{delta} phÃºt trÆ°á»›c",
        Xh: "{delta} giá» trÆ°á»›c",
        Xd: "{delta} ngÃ y trÆ°á»›c",
        Xw: "{delta} tuáº§n trÆ°á»›c",
        you: "Báº¡n",
        delivered: "ÄÃ£ gá»­i",
        "anonymous-email-response": "CÃ¡m Æ¡n. Khi chÃºng tÃ´i tráº£ lá»i, chÃºng tÃ´i cÅ©ng sáº½ gá»­i email ({email}) thÃ´ng bÃ¡o.",
        "anonymous-email-responder": "Cho phÃ©p chÃºng tÃ´i thÃ´ng bÃ¡o Ä‘áº¿n báº¡n qua email.",
        "your-email": "Email",
        sending: "Äang gá»­i&hellip;",
        failed: "ChÆ°a gá»­i. Báº¥m Ä‘á»ƒ thá»­ gá»­i láº¡i.",
        uploading: "Äang táº£i lÃªn",
        uploaded: "ÄÃ£ táº£i lÃªn",
        "max-upload-size": "Giá»›i háº¡n dung lÆ°á»£ng táº£i lÃªn lÃ  {number}MB",
        "insert-emoji": "ThÃªm emoji",
        "send-attachment": "Gá»­i Ä‘Ã­nh kÃ¨m",
        "press-enter-to-send": "Báº¥m Enter Ä‘á»ƒ gá»­i",
        "not-seen-yet": "ChÆ°a Ä‘Æ°á»£c xem",
        seen: "ÄÃ£ xem",
        "x-says": "{firstName} nÃ³i...",
        "someone-says": "CÃ³ ngÆ°á»i nÃ³i...",
        "active-in-the-last-x-minutes": "CÃ³ hoáº¡t Ä‘á»™ng trong {minutes} phÃºt vá»«a rá»“i",
        "active-in-the-last-hour": "CÃ³ hoáº¡t Ä‘á»™ng trong nhá»¯ng giá» cuá»‘i",
        "last-active-one-hour-ago": "Láº§n cuá»‘i hoáº¡t Ä‘á»™ng 1 giá» trÆ°á»›c",
        "last-active-x-hours-ago": "Láº§n cuá»‘i hoáº¡t Ä‘á»™ng {hours} giá» trÆ°á»›c",
        "last-active-one-day-ago": "Láº§n cuá»‘i hoáº¡t Ä‘á»™ng ngÃ y hÃ´m qua",
        "last-active-x-days-ago": "Láº§n cuá»‘i hoáº¡t Ä‘á»™ng {hours} ngÃ y trÆ°á»›c",
        "last-active-more-than-one-week-ago": "Láº§n cuá»‘i hoáº¡t Ä‘á»™ng hÆ¡n 1 tuáº§n trÆ°á»›c",
        "message-autoresponse": "ChÃºng tÃ´i sáº½ thÃ´ng bÃ¡o cho báº¡n táº¡i Ä‘Ã¢y khi chuÌng tÃ´i tráº£ lá»i.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Nháº­n cÃ¡c cáº­p nháº­t vá» cuá»™c trÃ² chuyá»‡n nÃ y qua email",
        "team-will-reply-asap": "NhÃ³m sáº½ pháº£n há»“i láº¡i báº¡n nhanh nháº¥t cÃ³ thá»ƒ.",
        "check-back-or-email": "HÃ£y quay láº¡i Ä‘Ã¢y sau, hoáº·c há» sáº½ gá»­i email cho báº¡n tá»›i {email} náº¿u báº¡n khÃ´ng cÃ³ máº·t.",
        close: "Close",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Chinese (Simplified)",
        "language-name": "ä¸­æ–‡ (ç®€ä½“)",
        "new-message": "æ–°ä¿¡æ¯",
        "new-comment-placeholder": "å†™å›žå¤",
        "new-conversation-placeholder": "å†™ä¿¡æ¯",
        "new-article-conversation-placeholder": "æé—®é¢˜",
        "no-conversations": "æ— å¯¹è¯",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} æ¥è‡ª {appName}",
        send: "é€å‡º",
        "powered-by-intercom": "ç”±Intercomæä¾›",
        Xs: "çŽ°åœ¨",
        Xm: "{delta}åˆ†é’Ÿå‰",
        Xh: "{delta}å°æ—¶å‰",
        Xd: "{delta}å¤©å‰",
        Xw: "{delta}å‘¨å‰",
        you: "ä½ ",
        delivered: "å·²å‘é€",
        "anonymous-email-response": "è°¢è°¢ï¼æˆ‘ä»¬å›žå¤ä½ çš„æ¶ˆæ¯æ—¶ï¼Œå°†ä¼šé€šè¿‡ç”µå­é‚®ä»¶({email})é€šçŸ¥ä½ ã€‚",
        "anonymous-email-responder": "å…è®¸æˆ‘ä»¬é€šè¿‡ç”µå­é‚®ä»¶é€šçŸ¥ä½ ã€‚",
        "your-email": "ä½ çš„é‚®ç®±åœ°å€",
        sending: "æ­£åœ¨å‘é€&hellip;",
        failed: "æ²¡æœ‰å‘é€æˆåŠŸã€‚è¯·ç‚¹å‡»é‡è¯•ã€‚",
        uploading: "æ­£åœ¨ä¸Šä¼ ",
        uploaded: "å·²ä¸Šä¼ ",
        "max-upload-size": "æœ€å¤§ä¸Šä¼ æ–‡æ¡£å¤§å°ï¼š{number}MB",
        "insert-emoji": "æ’å…¥è¡¨æƒ…ç¬¦å·",
        "send-attachment": "å‘é€é™„ä»¶",
        "press-enter-to-send": "æŒ‰Enterå‘é€",
        "not-seen-yet": "è¿˜æœªè§åˆ°",
        seen: "å·²è§åˆ°",
        "x-says": "{firstName}è¯´...",
        "someone-says": "æœ‰äººè¯´...",
        "active-in-the-last-x-minutes": "æœ€è¿‘{minutes}åˆ†é’Ÿå†…æ´»è·ƒ",
        "active-in-the-last-hour": "æœ€è¿‘ä¸€æ¬¡æ´»è·ƒæ˜¯åœ¨1å°æ—¶å‰",
        "last-active-one-hour-ago": "æœ€è¿‘ä¸€æ¬¡æ´»è·ƒæ˜¯åœ¨1å°æ—¶å‰",
        "last-active-x-hours-ago": "æœ€è¿‘ä¸€æ¬¡æ´»è·ƒæ˜¯åœ¨{hours}å°æ—¶å‰",
        "last-active-one-day-ago": "æœ€è¿‘ä¸€æ¬¡æ´»è·ƒæ˜¯åœ¨æ˜¨å¤©",
        "last-active-x-days-ago": "æœ€è¿‘ä¸€æ¬¡æ´»è·ƒæ˜¯åœ¨{days}å¤©å‰",
        "last-active-more-than-one-week-ago": "æœ€è¿‘ä¸€æ¬¡æ´»è·ƒæ˜¯åœ¨1å‘¨ä»¥å‰",
        "message-autoresponse": "å›žå¤ä½ çš„æ¶ˆæ¯æ—¶ï¼Œæˆ‘ä»¬å°†ä¼šåœ¨è¿™é‡Œé€šçŸ¥ä½ ã€‚",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "é€šè¿‡ç”µå­é‚®ä»¶æŽ¥æ”¶æ­¤å¯¹è¯çš„æ›´æ–°",
        "team-will-reply-asap": "å›¢é˜Ÿä¼šå°½å¿«å›žå¤æ‚¨ã€‚",
        "check-back-or-email": "ç¨åŽå›žæ¥æŸ¥çœ‹ï¼Œå¦‚æžœæ‚¨ç¦»å¼€äº†ï¼Œä»–ä»¬ä¹Ÿä¼šå‘é€ç”µå­é‚®ä»¶åˆ°{email}ã€‚",
        close: "å…³é—­è¿™çª—å£",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t) {
    e.exports = {
        "language-name-en": "Chinese (Traditional)",
        "language-name": "ä¸­æ–‡ï¼ˆç¹é«”)",
        "new-message": "æ–°è¨Šæ¯",
        "new-comment-placeholder": "è¼¸å…¥å›žè¦†",
        "new-conversation-placeholder": "è¼¸å…¥è¨Šæ¯",
        "new-article-conversation-placeholder": "æé—®é¢˜",
        "no-conversations": "ç„¡å°è©±",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "é€å‡º",
        "powered-by-intercom": "ç”± Intercom æä¾›",
        Xs: "ç¾åœ¨",
        Xm: "{delta}åˆ†é˜å‰",
        Xh: "{delta}å°æ™‚å‰",
        Xd: "{delta}å¤©å‰",
        Xw: "{delta}é€±å‰",
        you: "æ‚¨",
        delivered: "å·²é€å‡º",
        "anonymous-email-response": "è¬è¬æ‚¨ï¼Œæˆ‘å€‘å›žè¦†æ™‚æœƒé€éŽé›»éƒµ ({email}) é€šçŸ¥æ‚¨ã€‚",
        "anonymous-email-responder": "è®“æˆ‘å€‘é€éŽé›»éƒµé€šçŸ¥æ‚¨ã€‚",
        "your-email": "æ‚¨çš„é›»éƒµ",
        sending: "ç™¼é€ä¸­â€¦",
        failed: "å°šæœªé€å‡ºã€‚è«‹é»žæ“Šå†è©¦ä¸€æ¬¡ã€‚",
        uploading: "ä¸Šè¼‰ä¸­",
        uploaded: "å·²ä¸Šè¼‰",
        "max-upload-size": "æœ€å¤šå¯ä»¥ä¸Šè¼‰ {number}MB",
        "insert-emoji": "æ’å…¥è¡¨æƒ…ç¬¦è™Ÿ",
        "send-attachment": "ç™¼é€é™„ä»¶",
        "press-enter-to-send": "æŒ‰Enteréµå³å¯ç™¼é€",
        "not-seen-yet": "æœªè®€",
        seen: "å·²è®€",
        "x-says": "{firstName} èªª...",
        "someone-says": "æŸäººèªª...",
        "active-in-the-last-x-minutes": "éŽåŽ»çš„{minutes}åˆ†é˜éƒ½åœ¨ç·šä¸Š",
        "active-in-the-last-hour": "ç¶²ä¸Šçš„æœ€å¾Œä¸€å°æ™‚",
        "last-active-one-hour-ago": "ä¸Šæ¬¡ä¸Šç·šæ™‚é–“ç‚º1å°æ™‚å‰",
        "last-active-x-hours-ago": "ä¸Šæ¬¡ä¸Šç·šæ™‚é–“ç‚º{hours}å°æ™‚å‰",
        "last-active-one-day-ago": "ä¸Šæ¬¡ä¸Šç·šæ™‚é–“ç‚ºæ˜¨å¤©",
        "last-active-x-days-ago": "ä¸Šæ¬¡ä¸Šç·šæ™‚é–“ç‚º{days}å¤©å‰",
        "last-active-more-than-one-week-ago": "ä¸Šæ¬¡ä¸Šç·šæ™‚é–“ç‚ºè¶…éŽä¸€æ˜ŸæœŸå‰",
        "message-autoresponse": "æˆ‘å€‘å›žè¦†æ™‚æœƒåœ¨é€™è£¡é€šçŸ¥æ‚¨ã€‚",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "é€éŽé›»éƒµæŽ¥æ”¶é€™å€‹å°è©±çš„æ›´æ–°",
        "team-will-reply-asap": "åœ˜éšŠæœƒç›¡å¿«ä½œå‡ºå›žè¦†ã€‚",
        "check-back-or-email": "è«‹ç¨å¾Œå†æŸ¥çœ‹ï¼Œå¦‚æžœæ‚¨ç¢°å·§é›¢é–‹äº†ï¼Œä»–å€‘æœƒé›»éƒµè‡³ {email}ã€‚",
        close: "é—œé–‰è¨Šæ¯çª—å£",
        "video-launcher-conversation-placeholder": ""
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4);
    e.exports = {
        features: {
            "spa-throttling": ["tx2p130c", "zuahrl6b", "zv1pyb0s", "w2knrl3f", "c5ea3ec6243c3a8164fb702a95a3e61ca193a2cc", "m707r5ky", "fbx44s81", "xn72f8jb", "xplyivn5", "b0catj9i", "s4mb41ak", "vcf876kt", "dtpf4lth", "ndnhud6k", "yi2zrj0l", "y3dmixbx", "jvjwxo89", "qhqvciu7", "lj5p6xy2", "j4pw7jt0", "ys5tnsux", "b1ey3xy0", "l49xfi10", "rsp5hwnh", "gzkpu5io", "k6700fpa", "rf5dnsqt", "ev9h4vde", "ux7f0ki6", "wxr73cw3", "muqo3s0l", "dn8sjuca", "agueobs1", "zi0aqb98"],
            v3_email_attribute: ["3qmk5gyg"],
            browser_notifications: ["m8idu4c4"],
            "video-hovercard": ["iitm8brt"]
        },
        initialize: function(e) {
            this.settings = e
        },
        isEnabled: function(e) {
            return this.settings ? i.include(this.features[e] || {}, this.settings.get("app.id")) || i.include(this.settings.get("app.feature-flags"), e) : !1
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return "intercom-session-" + e.get("app.id")
    }

    function o(e, t, n, i) {
        this.initialized = !1, this.ready = r.Deferred(), this.client = e, this.nexusClient = t, this.messageConditionsMatcher = n, this.refreshConversations = a.bind(this.refreshConversations, this), this.settings = i, this.throttledClient = new k(this.client), this.poller = new _(this.client), this.conversations = new y, this.app = new w, r(document).keyup(a.bind(this.onKeyUp, this))
    }
    n(51);
    var r = n(3),
        a = n(4),
        s = n(5),
        c = n(68),
        l = n(62),
        u = n(69),
        m = n(10),
        d = n(9),
        p = n(74),
        h = n(75),
        f = n(78),
        g = n(79),
        v = n(82),
        b = n(83),
        y = n(67),
        w = n(84),
        x = n(85),
        _ = n(269),
        k = n(270),
        C = n(271),
        A = n(272),
        T = n(49),
        S = n(52),
        E = n(150),
        j = 6048e5,
        z = 6048e5,
        N = 6311e8;
    a.extend(o.prototype, s.Events, {
        initialize: function(e) {
            if (!this.isInitialized()) {
                d.info("intercom - Initializing"), this.settings.update(e || {});
                var t = p.read("intercom-id");
                void 0 !== t && this.settings.update({
                    user: {
                        anonymous_id: t
                    }
                });
                var n = p.read(i(this.settings));
                if (T.isEnabled("v3_email_attribute") ? void 0 !== n && this.settings.get("is-anonymous-install") && this.settings.update({
                        anonymous_session: n
                    }) : void 0 !== n && this.settings.get("user.anonymous") && this.settings.update({
                        anonymous_session: n
                    }), this.recordUniqeVisitorMetricIfRequired(), !this.settings.isValid()) return void d.error("intercom - Invalid settings");
                this.nexusClient.addListener("NewComment", a.bind(function(e) {
                    this.trigger("new-comment", e.eventData.conversationId)
                }, this.client)), this.nexusClient.addListener("UserContentSeenByAdmin", a.bind(function(e) {
                    this.trigger("user-content-seen-by-admin", e.eventData.conversationId)
                }, this.client)), this.view = new x({
                    client: this.client,
                    nexusClient: this.nexusClient,
                    settings: this.settings,
                    collection: this.conversations,
                    app: this.app,
                    interbotConditionMatchers: this.interbotConditionMatchers
                }), this.listenTo(this.client, "ping", this.onPingResponse), this.listenTo(this.client, "new-unread-conversation", this.onUnreadConversationAdded), this.listenTo(this.client, "new-comment", this.onNewComment), this.listenTo(this.client, "user-content-seen-by-admin", this.onUserContentSeenByAdmin), this.listenTo(f, "click:open", this.onLauncherClicked), this.listenTo(f, "click:conversations", this.showConversations), this.listenTo(f, "click:conversation", this.showConversation), this.listenTo(f, "click:new-conversation", this.showNewConversation), this.listenTo(f, "click:new-conversation-no-animation", this.showNewConversationWithoutAnimation), this.listenTo(f, "click:close", this.hide), this.listenTo(f, "click:minimize", this.minimize), this.listenTo(this.conversations, "add", this.startConversationConditionMatcher), this.listenTo(this.conversations, "change", this.updateConversationConditionMatchers), C.runAll(), h.run(), this.enableCustomLauncher(), this.throttledClient.reset(), this.poller.start(), c.start(), v.initialize(this.nexusClient), this.initialized = !0, this.createOrUpdateUser()
            }
        },
        deinitialize: function() {
            this.isInitialized() && (d.info("intercom - Deinitializing"), this.ready.reject(), p.clear(i(this.settings), "all", "/"), this.settings.reset(), this.conversations.reset(), this.stopListening(), this.disableCustomLauncher(), this.poller.stop(), c.stop(), b.clear(), this.remove(), this.initialized = !1, this.ready = r.Deferred())
        },
        createOrUpdateUser: function(e) {
            return this.isInitialized() ? (this.settings.update(e || {}), this.settings.isValid() ? void this.throttledClient.throttledCreateOrUpdateUser() : void d.error("intercom - Invalid settings")) : void 0
        },
        show: function(e) {
            this.showWhenReady(function() {
                this.view.isMinimized() ? this.maximize(e) : this.view.show(e)
            })
        },
        showConversations: function() {
            this.showWhenReady(function() {
                this.view.showConversations()
            })
        },
        showConversation: function(e) {
            this.showWhenReady(function() {
                this.view.showConversation(e)
            })
        },
        showNewConversation: function(e, t) {
            this.showWhenReady(function() {
                void 0 === t && (t = !0), this.view.isMinimized() && this.maximize(), this.view.showNewConversation(e, t)
            })
        },
        _showNewArticleConversation: function(e, t) {
            this.showWhenReady(function() {
                void 0 === t && (t = !0), this.view.isMinimized() && this.maximize(), this.view.showNewArticleConversation(e, t)
            })
        },
        showNewArticleConversation: function(e, t) {
            this.client.getArticleConversation(e.articleId).then(a.bind(function(n, i, o) {
                204 === o.status ? this._showNewArticleConversation(e, t) : this.showConversation(new S(n))
            }, this))
        },
        showNewConversationWithoutAnimation: function(e) {
            this.showNewConversation(e, !1)
        },
        autoOpenConversation: function(e) {
            this.showWhenReady(function() {
                this.view.autoOpenConversation(e)
            })
        },
        hide: function() {
            this.whenReady(function() {
                var e = this.isActive();
                this.view.hide(), e && !this.isActive() && this.trigger("hide")
            })
        },
        minimize: function() {
            this.whenReady(function() {
                this.view.minimize()
            })
        },
        maximize: function(e) {
            this.whenReady(function() {
                this.view.maximize(e)
            })
        },
        add: function(e) {
            this.whenReady(function() {
                r("body").append(this.view.render(e).$el), this.trigger("add")
            })
        },
        remove: function() {
            this.whenReady(function() {
                this.view.remove(), this.trigger("remove")
            })
        },
        createEvent: function(e, t) {
            this.whenReady(function() {
                this.client.createEvent(e, t)
            })
        },
        enableCustomLauncher: function() {
            var e = this.settings.get("launcher.selector");
            return a.isEmpty(e) ? !1 : (this.disableCustomLauncher(), r("body").on("click.intercom-launcher", e, a.bind(this.onCustomLauncherClicked, this)), d.info("intercom â€“ Enabled custom launcher: " + e), !0)
        },
        disableCustomLauncher: function() {
            r("body").off("click.intercom-launcher")
        },
        isActive: function() {
            return this.isInitialized() && this.view.isActive()
        },
        isInitialized: function() {
            return this.initialized
        },
        whenReady: function(e) {
            return r.when(this.ready).then(a.bind(e, this))
        },
        showWhenReady: function(e) {
            this.whenReady(function() {
                var t = this.isActive();
                a.bind(e, this)(), t || this.trigger("show")
            })
        },
        windowIsChild: function() {
            return null !== window.opener
        },
        onLauncherClicked: function(e) {
            this.show(e), this.trigger("click")
        },
        onCustomLauncherClicked: function(e) {
            return e.preventDefault(), this.onLauncherClicked(), !1
        },
        onPingResponse: function(e) {
            if (e.client_messages && e.client_messages.length > 0 && this.messageConditionsMatcher.start(e.client_messages), A.hasInstallationQueryParameter()) return A.showSuccessOverlay(), this.settings.update(A.fakePingResponse), void this.onPingResponseBoot(e);
            A.listenForInstallationStartMessage(a.bind(function() {
                A.showSuccessOverlay(), this.settings.update(A.fakePingResponse), this.onPingResponseBoot(e)
            }, this));
            var t = function() {
                return e.type && "error.list" === e.type ? void d.error("intercom - createOrUpdateUser failed") : (this.settings.update(e), void this.onPingResponseBoot(e))
            };
            t = a.bind(t, this), A.isLegacyInstallationMode(e) ? setTimeout(t, 1e3) : t()
        },
        onPingResponseBoot: function(e) {
            "resolved" !== this.ready.state() && this.onFirstPingResponse(e);
            var t = this.settings.get("user.anonymous-id");
            void 0 !== t && p.write("intercom-id", t, "all", "/", new Date(l.now() + N));
            var n = this.settings.get("user.anonymous-session");
            void 0 === n || this.settings.get("user.anonymous") || p.write(i(this.settings), n, "all", "/", new Date(l.now() + j)), e.app && e.app.last_active && this.app.set({
                last_active: e.app.last_active
            }), this.nexusClient.initialise(), this.trigger("ping")
        },
        onFirstPingResponse: function(e) {
            var t = this.settings.get("user.locale");
            m.isSupportedLocale(t) ? m.setLocale(t) : d.error("intercom - Unknown locale '" + t + "'"), this.settings.get("app.audio-enabled") && u.enable(), this.settings.get("app.rtm-enabled") && g.enable();
            var n = e && e.unread_conversation_ids && e.unread_conversation_ids.length > 0;
            this.add(n), this.ready.resolve(), d.info("intercom - Initialized")
        },
        refreshConversations: function(e) {
            this.view.refreshActiveConversation(e) || this.client.createOrUpdateUser()
        },
        onUserContentSeenByAdmin: function(e) {
            this.refreshConversations(e)
        },
        onNewComment: function(e) {
            this.refreshConversations(e)
        },
        recordUniqeVisitorMetricIfRequired: function() {
            if (this.settings.get("user.anonymous")) {
                var e = "intercom-visitor-semaphore-" + this.settings.get("app.id"),
                    t = p.read(e);
                void 0 === t && (p.write(e, 1, "all", "/", new Date(l.now() + z)), E.trackSignedOutEvent("uniqueSiteVisitor"))
            }
        },
        onUnreadConversationAdded: function(e) {
            if (!this.view.refreshActiveConversation(e.id)) {
                var t = this.conversations.add(e, {
                    merge: !0
                });
                !this.isActive() && t.autoOpen() && this.autoOpenConversation(t)
            }
        },
        updateConversationConditionMatchers: function() {
            a.each(this.conversations.models, function(e) {
                e.hasChanged("interbot_client_conditions") && e.startInterbotConditionsMatcher(this.client)
            }, this)
        },
        startConversationConditionMatcher: function(e) {
            e.startInterbotConditionsMatcher(this.client)
        },
        onKeyUp: function(e) {
            0 === r(".intercom-image-viewer").length && this.isActive() && !this.view.isMinimized() && 27 === e.keyCode && this.hide()
        }
    }), e.exports = o
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(52),
        r = n(54),
        a = n(57),
        s = n(66),
        c = n(67);
    e.exports = function(e, t) {
        return function(n, l, u) {
            if (l.constructor === o && "read" === n) return e.getConversation(l.id).then(u.success).fail(u.error);
            if (l.constructor === o && "update" === n) return e.markConversationAsRead(l.toJSON()).then(u.success).fail(u.error);
            if (l.constructor === o && "create" === n) return e.createConversation(l.toJSON()).then(i.bind(t.syncCreateConversation, t)).then(u.success).fail(u.error);
            if (l.constructor === c && "read" === n) return e.getConversations({
                page: l.pages
            }).then(u.success).fail(u.error);
            if (l.constructor === r && "create" === n) return e.createComment(l.toJSON()).then(i.bind(t.syncCreateComment, t)).then(u.success).fail(u.error);
            if (l.constructor === a && "create" === n) return e.createUpload(l.toJSON()).then(u.success).fail(u.error);
            if (l.constructor === a && "update" === n) return e.updateUpload(l.toJSON()).then(u.success).fail(u.error);
            if (l.constructor === s) {
                var m = t.getMetrics();
                return t.resetMetrics(), e.createOrUpdateUser(m).then(u.success).fail(u.error)
            }
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.byUser()
    }
    var o = n(4),
        r = n(5),
        a = n(53),
        s = n(56),
        c = n(62),
        l = n(55),
        u = n(6),
        m = n(65),
        d = 1407334860,
        p = r.Model.extend({
            initialize: function() {
                this.parts = new a, this.on("change:conversation_message", this.onMessageChanged), this.on("change:conversation_parts", this.onPartsChanged), this.parts.add(this.get("conversation_message")), this.has("conversation_parts") && this.parts.add(this.get("conversation_parts"), {
                    parse: !0
                })
            },
            markAsRead: function() {
                this.isRead() || this.save({
                    read: !0
                })
            },
            markAsUnread: function() {
                this.set({
                    read: !1
                })
            },
            isRead: function() {
                return this.get("read")
            },
            isUnread: function() {
                return !this.get("read")
            },
            isChat: function() {
                return this.getMessage().isChat()
            },
            isAnnouncement: function() {
                return this.getMessage().isAnnouncement()
            },
            isSmallAnnouncement: function() {
                return this.getMessage().isSmallAnnouncement()
            },
            doesNotMatchCurrentUrl: function() {
                return this.get("matches_url") === !1
            },
            matchesCurrentUrl: function() {
                return !this.doesNotMatchCurrentUrl()
            },
            autoOpen: function() {
                return this.createdBeforeInAppsV2() ? !1 : this.getMessage().autoOpen() && 1 === this.partsCount() && this.isUnread()
            },
            replyDelayBodyBlockList: function() {
                return o.isEmpty(this.get("reply_delay_json_blocks")) ? [] : u.parse(this.get("reply_delay_json_blocks"))
            },
            lastAdminName: function(e) {
                var t = e ? this.lastAdmin() : this.lastHumanAdmin();
                if (t) return t.name
            },
            lastAdminFirstName: function(e) {
                var t = this.lastAdminName(e);
                if (t) {
                    var n = t.split(" ")[0];
                    return n ? n : t
                }
            },
            lastAdminAvatar: function(e, t) {
                var n = e ? this.lastAdmin() : this.lastHumanAdmin();
                if (n) return "Interbot" === n.name ? "https://s3.amazonaws.com/static.intercomcdn.com/interbot/icon%402x.png" : n.avatar[t || "square_128"]
            },
            lastAdminInitials: function() {
                var e = this.lastAdmin();
                if (e) return l.firstInitial(e.name)
            },
            lastAdminActiveTimestamp: function() {
                var e = this.lastAdmin();
                if (e && e.last_active_at) return 1e3 * e.last_active_at
            },
            lastHumanAdmin: function() {
                var e = this.get("last_participating_admin");
                if (e) return e.is_bot ? this.findHumanAdmin() : e
            },
            findHumanAdmin: function() {
                return this.firstPartIsVisitorAutoMessage() ? this.parts.first().get("author") : void 0
            },
            firstPartIsVisitorAutoMessage: function() {
                return this.parts.first() && this.parts.first().byAdmin() && this.parts.first().isChatAutoMessage()
            },
            adminComments: function() {
                return o.reject(this.getComments(), i)
            },
            hasOnlyInterbotAdminComments: function() {
                var e = this.adminComments();
                return e.length > 0 && o(e).every(function(e) {
                    return e.byInterbot()
                })
            },
            hasAnyInterbotComments: function() {
                var e = this.adminComments();
                return o.any(e, function(e) {
                    return e.byInterbot()
                })
            },
            lastAdmin: function() {
                return this.get("last_participating_admin")
            },
            updateLastAdminActiveTimestamp: function(e) {
                var t = this.lastAdmin();
                t && (t.last_active_at = e)
            },
            hasAdminComment: function() {
                return o.any(this.getComments(), function(e) {
                    return e.byAdmin() && !e.byInterbot()
                })
            },
            hasUserPart: function() {
                return o.any(this.parts.toArray(), function(e) {
                    return e.byUser()
                })
            },
            hasUserComment: function() {
                return o.any(this.getComments(), i)
            },
            preview: function() {
                return this.parts.lastNonLwrResponseBody() || ""
            },
            previewText: function() {
                return this.preview().replace(/<br>/gi, " ").replace(/(<([^>]+)>)/gi, "")
            },
            getMessage: function() {
                return this.parts.first()
            },
            getComments: function() {
                return this.parts.rest(1)
            },
            hasComments: function() {
                return this.parts.length > 1
            },
            getLastComment: function() {
                return o.last(this.getComments())
            },
            createdAt: function() {
                return c.timestampToDate(this.get("created_at"))
            },
            updatedAt: function() {
                var e = this.parts.nonLwrResponses().last();
                return e.isMessage() ? this.createdAt() : e.updatedAt()
            },
            partsCount: function() {
                return this.get("parts_count")
            },
            onPartsChanged: function() {
                var e = this.deduplicateConversationParts();
                this.parts.set(e, {
                    parse: !0,
                    remove: !1
                })
            },
            onMessageChanged: function() {
                var e = this.getMessage();
                e ? e.set(this.get("conversation_message")) : this.parts.add(this.get("conversation_message"))
            },
            createdBeforeInAppsV2: function() {
                return this.get("created_at") < d
            },
            updatedBeforeInAppsV2: function() {
                return this.get("updated_at") < d
            },
            qualifiesForAutoResponse: function() {
                return this.getMessage().byUser() && !this.hasAdminComment()
            },
            addPart: function(e) {
                this.parts.add(e), this.trigger("change", this)
            },
            hasArticleMessage: function() {
                return !o.isUndefined(this.get("articleId")) || this.getMessage().isArticleCardMessage()
            },
            deduplicateConversationParts: function h() {
                if (this.get("conversation_parts")) {
                    var e = this.parts.map(function(e) {
                        return e.get("client_assigned_uuid")
                    });
                    e = o.compact(e);
                    var h = o(this.get("conversation_parts").conversation_parts).reject(function(t) {
                        return o(e).contains(t.client_assigned_uuid)
                    });
                    return {
                        conversation_parts: h,
                        type: this.get("conversation_parts").type
                    }
                }
            },
            startInterbotConditionsMatcher: function(e) {
                var t = this.get("interbotConditionsMatcher");
                if (!t) {
                    var n = this._conditionsSatisfiedCallback(e);
                    t = new m(n), this.set("interbotConditionsMatcher", t, {
                        silent: !0
                    })
                }
                t.start(this.get("interbot_client_conditions"))
            },
            _conditionsSatisfiedCallback: function(e) {
                return o.bind(function(t) {
                    e.conditionsSatisfied(this.id, t.id)
                }, this)
            },
            toJSON: function() {
                return {
                    id: this.id,
                    body: this.getMessage().get("body"),
                    article_id: this.get("articleId"),
                    upload_ids: this.getMessage().get("uploads") ? this.getMessage().get("uploads").pluck("id") : []
                }
            }
        });
    p.fromBodyAndUploads = function(e, t) {
        return new p({
            conversation_message: {
                body: o.escape(e),
                uploads: new s(t)
            },
            read: !0
        })
    }, e.exports = p
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(54);
    e.exports = o.Collection.extend({
        model: r,
        comparator: function(e) {
            return e.createdAt()
        },
        byAdmin: function() {
            return i(this.filter(function(e) {
                return e.byAdmin()
            }))
        },
        byUser: function() {
            return i(this.filter(function(e) {
                return e.byUser()
            }))
        },
        nonLwrResponses: function() {
            return i(this.reject(function(e) {
                return e.isLwrResponse()
            }))
        },
        lastNonLwrResponseBlock: function() {
            return this.nonLwrResponses().last().get("blocks")
        },
        lastNonLwrResponseBody: function() {
            return this.nonLwrResponses().last().body()
        },
        parse: function(e) {
            return null !== e && void 0 !== e || (e = {}), e.conversation_parts
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(3),
        r = n(55),
        a = n(5),
        s = n(56),
        c = n(62),
        l = n(60),
        u = n(63),
        m = n(64),
        d = a.Model.extend({
            SEEN: "seen",
            UNSEEN: "unseen",
            interbotAvatar: {
                square_25: "https://static.intercomassets.com/avatars/292054/square_25/data?1450369240",
                square_50: "https://static.intercomassets.com/avatars/292054/square_50/data?1450369240",
                square_128: "https://static.intercomassets.com/avatars/292054/square_128/data?1450369240"
            },
            initialize: function() {
                this.uploads = this.get("uploads") || new s(this.get("attachments") || []), this.set("client_assigned_uuid", m.generateUUID())
            },
            isMessage: function() {
                return "conversation_message" === this.get("type")
            },
            hasClientGeneratedUUID: function() {
                return this.has("client_assigned_uuid")
            },
            byAdmin: function() {
                var e = this.get("author");
                return e ? e.is_admin : !1
            },
            byInterbot: function() {
                var e = this.get("author");
                return e ? e.is_bot : !1
            },
            isSeenByAdmin: function() {
                return this.get("seen_by_admin") === this.SEEN
            },
            shouldShowAdminSeenState: function() {
                return this.byUser() && (this.get("seen_by_admin") === this.SEEN || this.get("seen_by_admin") === this.UNSEEN)
            },
            byUser: function() {
                return !this.byAdmin()
            },
            _bodyText: function() {
                return o.trim(o("<div>").append(this.body()).text())
            },
            isAsciiSticker: function() {
                return l.isSupportedAscii(this._bodyText())
            },
            isUnicodeSticker: function() {
                return l.isSupportedUnicode(this._bodyText())
            },
            isSticker: function() {
                return this.isAsciiSticker() || this.isUnicodeSticker()
            },
            getStickerData: function() {
                var e;
                return e = this.isUnicodeSticker() ? this._bodyText() : this.isAsciiSticker() ? l.unicodeFromAscii(this._bodyText()) : "â“", {
                    identifier: l.identifierFromUnicode(e),
                    assetId: l.codepointIndexFromUnicode(e).toString(16).toLowerCase(),
                    unicodeSticker: e
                }
            },
            isChat: function() {
                return 0 === this.get("message_style")
            },
            isAnnouncement: function() {
                return 1 === this.get("message_style")
            },
            isSmallAnnouncement: function() {
                return 2 === this.get("message_style")
            },
            isUpload: function() {
                return this.byUser() && i.isEmpty(this.get("body")) && this.uploads.length > 0
            },
            isImageUpload: function() {
                return this.isUpload() && this.uploads.length === this.uploads.imageUploads().length
            },
            bodyIsImage: function() {
                return !1
            },
            isChatAutoMessage: function() {
                return this.isMessage() && !this.get("show_created_at") && !this.isArticleCardMessage()
            },
            autoOpen: function() {
                return this.isAnnouncement() || this.isSmallAnnouncement()
            },
            body: function() {
                return this.isUpload() ? "[Attachment]" : this.sanitize(this.get("body") || "")
            },
            createdAt: function() {
                return c.timestampToDate(this.get("created_at"))
            },
            adminAvatar: function(e) {
                if (this.byAdmin()) {
                    e = e || "square_128";
                    var t = this.byInterbot() ? this.interbotAvatar : this.get("author").avatar;
                    return t[e]
                }
            },
            adminInitials: function() {
                return this.byAdmin() ? r.firstInitial(this.get("author").name) : void 0
            },
            isLwrMessage: function() {
                return this.get("lightweight_reply") && !this.isLwrResponse()
            },
            isLwrResponse: function() {
                return "lightweight_reply_user_response" === this.get("part_type")
            },
            getLwrType: function() {
                return this.get("lightweight_reply").type
            },
            getLwrResponse: function() {
                return this.get("lightweight_reply").option
            },
            updatedAt: function() {
                return c.timestampToDate(this.get("updated_at"))
            },
            getAuthorFirstName: function() {
                var e = this.get("author");
                return e.first_name || e.name || e.email
            },
            getAuthorEmail: function() {
                var e = this.get("author");
                return e.email
            },
            sanitize: function(e) {
                return e.replace(/(<script)/gi, i.escape("<script")).replace(/(<[\/]script>)/gi, i.escape("</script>"))
            },
            renderedBody: function() {
                var e = this.get("blocks");
                return e && u.supportsBlockRendering(e) ? u.renderBlocks(e) : this.body()
            },
            isVideoReply: function p() {
                var e = this.get("blocks"),
                    p = e && i.find(e, function(e) {
                        return "videoReply" === e.type
                    });
                return !!p
            },
            isArticleCardMessage: function() {
                var e = this.get("blocks");
                return this.isMessage() && !i.isUndefined(e) && !i.isNull(e) && 1 === e.length && "articleCard" === e[0].type
            },
            getURLForArticleCard: function() {
                return this.get("blocks")[0].url
            },
            BLOCK_LONERS: ["articleCard"],
            connectedComponents: function() {
                var e = [],
                    t = [];
                return i.each(this.get("blocks"), function(n) {
                    i.contains(this.BLOCK_LONERS, n.type) ? (t.length > 0 && (e.push(t), t = []), e.push([n])) : t.push(n)
                }, this), t.length > 0 && e.push(t), e
            },
            toJSON: function() {
                var e = {
                    body: this.get("body"),
                    reply_type: this.get("reply_type"),
                    reply_option: this.get("reply_option"),
                    conversation_id: this.get("conversation_id"),
                    upload_ids: this.uploads.pluck("id"),
                    client_assigned_uuid: this.get("client_assigned_uuid")
                };
                return this.byInterbot() && i.extend(e, {
                    current_state: this.get("current_state"),
                    state_group: this.get("state_group")
                }), e
            }
        });
    d.fromBodyAndUploads = function(e, t, n) {
        return new d({
            body: i.escape(e),
            conversation_id: n.id,
            uploads: new s(t)
        })
    }, e.exports = d
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(4);
    e.exports = {
        firstInitial: function(e) {
            return e = i.trim(e), o.isEmpty(e) ? "?" : e[0]
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        o = n(57),
        r = n(4);
    e.exports = i.Collection.extend({
        model: o,
        initialize: function() {
            this.uploading = 0, this.on("upload:start", this.onUploadStart), this.on("upload:complete", this.onUploadComplete)
        },
        pendingUploads: function() {
            return this.filter(function(e) {
                return r.isUndefined(e.url())
            })
        },
        imageUploads: function() {
            return this.filter(function(e) {
                return e.isImage()
            })
        },
        anyUploading: function() {
            return this.uploading > 0
        },
        onUploadStart: function() {
            this.uploading++
        },
        onUploadComplete: function() {
            this.uploading--
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(58),
        a = n(59),
        s = 264,
        c = 41943040,
        l = o.Model.extend({
            initialize: function() {
                this.file = this.get("file")
            },
            name: function() {
                return this.get("file_name") || this.get("name")
            },
            url: function() {
                return this.get("url") || this.get("public_url")
            },
            size: function() {
                return this.get("file_size") || this.get("filesize") || 0
            },
            isTooBig: function() {
                return this.size() > c
            },
            content_type: function() {
                return this.get("content_type")
            },
            upload: function() {
                return r(this)
            },
            isImage: function() {
                return !!this.get("content_type").toLowerCase().match(/^image\//)
            },
            imageData: function() {
                return this.get("imageData")
            },
            hasDimensions: function() {
                return this.isImage() && i.isNumber(this.naturalWidth()) && i.isNumber(this.naturalHeight())
            },
            naturalWidth: function() {
                return parseInt(this.get("width"), 10) || null
            },
            naturalHeight: function() {
                return parseInt(this.get("height"), 10) || null
            },
            scale: function() {
                return this.naturalWidth() > s ? this.naturalWidth() / s : 1
            },
            width: function() {
                return parseInt(this.naturalWidth() / this.scale(), 10)
            },
            height: function() {
                return parseInt(this.naturalHeight() / this.scale(), 10)
            },
            parse: function(e) {
                var t = e.upload_url;
                return t && (e.id = parseInt(t.match(/\/(\d+)$/)[1], 10)), e
            },
            toJSON: function() {
                return {
                    id: this.id,
                    original_filename: this.name(),
                    size_in_bytes: this.size(),
                    content_type: this.content_type(),
                    width: this.naturalWidth(),
                    height: this.naturalHeight()
                }
            }
        }),
        u = function(e) {
            e = e || "";
            var t = e.match(/[^\x00-\x7F]/);
            return (!e || a.features.safari() && t) && (e = "File" + (new Date).getTime()), e
        };
    l.fromFile = function(e) {
        return new l({
            file_name: u(e.name),
            file_size: e.size,
            content_type: e.type,
            file: e
        })
    }, e.exports = l
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t = a.Deferred(),
            n = new FileReader;
        return n.onload = s.bind(t.resolve, t, e), n.readAsDataURL(e.file), t
    }

    function o(e) {
        var t = a.Deferred();
        return e.save().then(s.bind(t.resolve, t, e)).fail(function() {
            e.trigger("upload:error"), t.reject(e)
        }), t
    }

    function r(e) {
        var t = a.Deferred(),
            n = new FormData;
        n.append("key", e.get("key")), n.append("acl", e.get("acl")), n.append("Content-Type", e.get("content_type")), n.append("AWSAccessKeyId", e.get("aws_access_key")), n.append("policy", e.get("policy")), n.append("signature", e.get("signature")), n.append("success_action_status", e.get("success_action_status")), n.append("file", e.file);
        var i = new XMLHttpRequest;
        return i.upload.addEventListener("progress", function(t) {
            t.lengthComputable && e.trigger("upload:progress", t.loaded, t.total)
        }, !1), i.addEventListener("error", function() {
            e.trigger("upload:error"), t.reject(e)
        }, !1), i.addEventListener("load", function() {
            e.trigger("upload:complete"), t.resolve(e)
        }, !1), i.addEventListener("abort", function() {
            e.trigger("upload:abort"), t.reject(e)
        }, !1), i.open("POST", e.get("upload_destination"), !0), i.send(n), t
    }
    var a = n(3),
        s = n(4);
    e.exports = function(e) {
        return e.trigger("upload:start"), i(e).then(o).then(r)
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        try {
            if (!(e in window)) return !1;
            var t = window[e];
            return null === t ? !1 : (t.setItem("intercom.testStorage", "0"), t.removeItem("intercom.testStorage"), !0)
        } catch (n) {
            return !1
        }
    }
    var o = n(4),
        r = n(3),
        a = n(60),
        s = {
            ie8: function() {
                return "attachEvent" in window && !window.addEventListener
            },
            xhr2: function() {
                return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
            },
            xdr: function() {
                return "undefined" != typeof XDomainRequest
            },
            localStorage: function() {
                return i("localStorage")
            },
            sessionStorage: function() {
                return i("sessionStorage")
            },
            uiwebview: function() {
                return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent)
            },
            upload: function() {
                return !!(window.File && window.FileList && window.FileReader && window.FormData)
            },
            audioMp3: function() {
                var e = r("<audio>")[0];
                return !!e.canPlayType && !!e.canPlayType("audio/mpeg;").replace(/^no$/, "")
            },
            visibility: function() {
                return "undefined" != typeof document.hidden || "undefined" != typeof document.mozHidden || "undefined" != typeof document.msHidden || "undefined" != typeof document.webkitHidden
            },
            emoji: function() {
                return o.isUndefined(this.isNativeEmojiSupport) && (this.isNativeEmojiSupport = a.hasNativeSupport(document)), this.isNativeEmojiSupport
            },
            pointerEvents: function() {
                if (o.isUndefined(this.isPointerEvents)) {
                    var e = document.createElement("x");
                    e.style.cssText = "pointer-events:auto", this.isPointerEvents = "auto" === e.style.pointerEvents
                }
                return this.isPointerEvents
            },
            touchScreen: function() {
                return o.isUndefined(this.isTouchScreen) && (this.isTouchScreen = o.isUndefined(navigator.userAgent) ? !1 : !o.isNull(navigator.userAgent.match(/iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i))), this.isTouchScreen
            },
            chrome: function() {
                return !!window.chrome
            },
            ie: function() {
                return navigator.userAgent.indexOf("MSIE") >= 0 || navigator.appVersion.indexOf("Trident/") >= 0
            },
            safari: function() {
                var e = navigator.vendor || "",
                    t = navigator.userAgent || "";
                return 0 === e.indexOf("Apple") && /\sSafari\//.test(t)
            }
        };
    e.exports = {
        features: s
    }
}, function(e, t, n) {
    var i = n(4),
        o = function(e) {
            for (var t, n, i, o, r = [], a = 0, s = e.length; s > a;) i = e.charAt(a), t = e.charCodeAt(a++), t >= 55296 && 56319 >= t && s > a ? (o = e.charAt(a), n = e.charCodeAt(a++), 56320 == (64512 & n) ? r.push([i + o, ((1023 & t) << 10) + (1023 & n) + 65536]) : (r.push([i, t]), a--)) : r.push([i, t]);
            return r
        },
        r = "__ic_",
        a = n(61),
        s = {};
    i.each(a, function(e, t) {
        i.each(e, function(e) {
            s[e[0]] = [e[1], e[2], e[3], t]
        })
    });
    var c = {
        ":-)": "ðŸ˜€",
        ":-D": "ðŸ˜ƒ",
        ";-)": "ðŸ˜‰",
        "}-)": "ðŸ‘¿",
        ":-o": "ðŸ˜®",
        ":-O": "ðŸ˜®",
        ":-/": "ðŸ˜•",
        ":-\\": "ðŸ˜•",
        "x-(": "ðŸ˜©",
        "X-(": "ðŸ˜©",
        ":-(": "ðŸ˜ž",
        "B-)": "ðŸ˜Ž",
        ":-p": "ðŸ˜›",
        ":-P": "ðŸ˜›",
        ":-@": "ðŸ˜ ",
        ":-|": "ðŸ˜",
        ":-$": "ðŸ˜³"
    };
    i.each(c, function(e, t) {
        s[e][r + "ascii"] = t
    });
    var l = ["â‰", "âœ‚", "âœˆ", "âœ‰", "â¤", "âœŒ", "âœ", "âš ", "ðŸˆ·", "ðŸˆ‚", "â“‚", "âœ’", "âœ”", "âœ–", "â—¼", "â—»", "â„¢", "â˜€", "â˜", "â™ ", "â™£", "â™¥", "â™¦", "â™¨", "â–ª", "â–«", "â„¹", "â†”", "â†•", "â†–", "â†—", "â†˜", "â†™", "â˜‘", "ã€°", "â™»", "ã€½", "â–¶", "â˜", "âœ³", "âœ´", "â„", "â‡", "â¬†", "â¬‡", "â¬…", "âž¡", "â—€", "â†©", "â†ª", "â¤´", "â¤µ", "ãŠ—", "ãŠ™", "â˜º", "â€¼", "ðŸ…°", "ðŸ…±", "ðŸ…¿", "ðŸ…¾", "ðŸ‡¯", "ðŸ‡°", "ðŸ‡©", "ðŸ‡¨", "ðŸ‡º", "ðŸ‡«", "ðŸ‡ª", "ðŸ‡®", "ðŸ‡·", "ðŸ‡¬", "â˜”", "â­", "âš¡", "â˜•", "â˜Ž", "âš“", "â™ˆ", "â™‰", "â™", "â™‘", "â™’", "â™“", "â™¿", "â™Š", "â™‹", "â™Œ", "â™", "â™Ž", "â™", "â—¾", "â—½", "âš«", "âšª"],
        u = {};
    i.each(s, function(e, t) {
        u[r + e[0]] = t
    });
    var m = 5,
        d = i.map(a, function(e) {
            return i.map(e, function(e) {
                return e[0]
            })
        }),
        p = function(e, t, n) {
            for (var i = [], o = 0, r = 0; o + n <= t.length;) {
                var a = t.slice(o, o + n);
                e.isSupportedAscii(a) ? (o > r && i.push(t.slice(r, o)), i.push(a), o += n, r = o) : ++o
            }
            return r < t.length && i.push(t.slice(r, t.length)), i
        };
    e.exports = {
        getGroupRepresentatives: function() {
            return [
                ["ðŸ˜„", "People"],
                ["ðŸŒ¸", "Nature"],
                ["ðŸ””", "Objects"],
                ["ðŸš™", "Places"],
                ["ðŸ” ", "Symbols"]
            ]
        },
        getUglyNativeEmoji: function() {
            return l.slice()
        },
        isUglyNativeEmoji: function(e) {
            return i.contains(l, e)
        },
        hasNativeSupport: function(e) {
            var t, n = "ðŸ˜€";
            return e.createElement("canvas").getContext ? (t = e.createElement("canvas").getContext("2d"), "function" != typeof t.fillText ? !1 : (t.textBaseline = "top", t.font = "32px Arial", t.fillText(n, 0, 0), 0 !== t.getImageData(16, 16, 1, 1).data[0])) : !1
        },
        isSupportedUnicode: function(e) {
            return i.has(s, e)
        },
        identifierFromUnicode: function(e) {
            return s[e][0]
        },
        asciiFromUnicode: function(e) {
            return s[e][r + "ascii"]
        },
        spritemapIndexFromUnicode: function(e) {
            return {
                x: s[e][1],
                y: s[e][2]
            }
        },
        groupFromUnicode: function(e) {
            return s[e][3]
        },
        isSupportedAscii: function(e) {
            return i.has(c, e)
        },
        unicodeFromAscii: function(e) {
            return c[e]
        },
        isSupportedIdentifier: function(e) {
            return i.has(u, r + e)
        },
        unicodeFromIdentifier: function(e) {
            return u[r + e]
        },
        N_GROUPS: m,
        prettyEmoticonsUnicodeGroups: function() {
            return i.map(d, function(e) {
                var t = [];
                return i.each(e, function(e) {
                    i.contains(l, e) || t.push(e)
                }), t
            })
        },
        allEmoticonsUnicodeGroups: d,
        allEmoticonsUnicodeList: i.keys(s),
        allEmoticonsIdentifierList: i.map(s, function(e) {
            return e[0]
        }),
        prettyEmoticonsIdentifierList: function() {
            return i.map(i.filter(s, function(e, t) {
                return !i.contains(l, t)
            }), function(e) {
                return e[0]
            })
        },
        asciiEmoticonsUnicodeList: i.uniq(i.values(c)),
        asciiEmoticonsIdentifierList: i.map(i.uniq(i.values(c)), function(e) {
            return s[e][0]
        }),
        MIN_ASCII_LENGTH: 3,
        MAX_ASCII_LENGTH: 3,
        asciiEmoticonsAsciiList: i.keys(c),
        spritemapStyleString: function(e, t) {
            var n = this.spritemapIndexFromUnicode(t);
            return "display:inline-block;height:" + e + "px;width:" + e + "px;background-position:-" + e * n.x + "px -" + e * n.y + "px;"
        },
        spritemapSpanTag: function(e, t, n) {
            return i.isUndefined(n) && (n = "intermoji-default-class"), '<span style="' + this.spritemapStyleString(e, t) + '" title="' + this.identifierFromUnicode(t) + '" class="' + n + '"></span>'
        },
        splitOnUnicodeEmojis: function(e) {
            if (i.isUndefined(e)) return [];
            var t = [],
                n = "";
            return i.each(o(e), function(e) {
                var i = e[0];
                this.isSupportedUnicode(i) ? (n.length > 0 && (t.push(n), n = ""), t.push(i)) : n += i
            }, this), n.length > 0 && t.push(n), t
        },
        splitOnAsciiEmojis: function(e) {
            if (i.isUndefined(e)) return [];
            for (var t = [e], n = this.MAX_ASCII_LENGTH; n >= this.MIN_ASCII_LENGTH; --n) {
                for (var o = [], r = 0; r < t.length; ++r) o = o.concat(p(this, t[r], n));
                t = o
            }
            return t
        },
        splitOnUnicodeAndAsciiEmojis: function(e) {
            return i.isUndefined(e) ? [] : i.flatten(i.map(this.splitOnUnicodeEmojis(e), function(e) {
                return this.splitOnAsciiEmojis(e)
            }, this), this)
        },
        substituteUnicodeForAsciiEmojis: function(e) {
            return i.isUndefined(e) ? "" : i.reduce(i.map(this.splitOnAsciiEmojis(e), function(e) {
                return this.isSupportedAscii(e) ? this.unicodeFromAscii(e) : e
            }, this), function(e, t) {
                return e + t
            }, "", this)
        },
        substituteSpansForEmojis: function(e, t, n) {
            return i.isUndefined(t) ? "" : i.reduce(i.map(this.splitOnUnicodeAndAsciiEmojis(t), function(t) {
                return this.isSupportedAscii(t) ? this.spritemapSpanTag(e, this.unicodeFromAscii(t), n) : this.isSupportedUnicode(t) ? this.spritemapSpanTag(e, t, n) : t
            }, this), function(e, t) {
                return e + t
            }, "", this)
        },
        wrapUnicodeEmojiInTitledSpans: function(e, t, n) {
            return i.isUndefined(t) ? "" : i.reduce(i.map(this.splitOnUnicodeEmojis(t), function(t) {
                return this.isSupportedUnicode(t) ? this.isUglyNativeEmoji(t) ? this.spritemapSpanTag(e, t, n) : '<span title="' + this.identifierFromUnicode(t) + '">' + t + "</span>" : t
            }, this), function(e, t) {
                return e + t
            }, "", this)
        },
        substituteUnicodeForColonified: function(e) {
            for (var t = function(e) {
                    return ":" + e + ":"
                }, n = !0, i = "", o = "", r = 0; r < e.length; r++) ":" === e[r] ? (n ? (n = !1, o += i) : (n = !0, o += this.isSupportedIdentifier(i) ? this.unicodeFromIdentifier(i) : t(i)), i = "") : i += e[r];
            return n || (o += ":"), o += i
        },
        codepointIndexFromUnicode: function(e) {
            return this.isSupportedUnicode(e) ? o(e)[0][1] : 0
        }
    }
}, function(e, t) {
    e.exports = [
        [
            ["ðŸ˜„", "smile", 23, 23],
            ["ðŸ˜ƒ", "smiley", 22, 23],
            ["ðŸ˜€", "grinning", 19, 23],
            ["ðŸ˜Š", "blush", 24, 5],
            ["â˜º", "relaxed", 27, 24],
            ["ðŸ˜‰", "wink", 24, 4],
            ["ðŸ˜", "heart_eyes", 24, 8],
            ["ðŸ˜˜", "kissing_heart", 24, 19],
            ["ðŸ˜š", "kissing_closed_eyes", 24, 21],
            ["ðŸ˜œ", "stuck_out_tongue_winking_eye", 24, 23],
            ["ðŸ˜", "stuck_out_tongue_closed_eyes", 0, 24],
            ["ðŸ˜›", "stuck_out_tongue", 24, 22],
            ["ðŸ˜³", "flushed", 22, 24],
            ["ðŸ˜", "grin", 20, 23],
            ["ðŸ˜”", "pensive", 24, 15],
            ["ðŸ˜Œ", "relieved", 24, 7],
            ["ðŸ˜’", "unamused", 24, 13],
            ["ðŸ˜ž", "disappointed", 1, 24],
            ["ðŸ˜£", "persevere", 6, 24],
            ["ðŸ˜¢", "cry", 5, 24],
            ["ðŸ˜‚", "joy", 21, 23],
            ["ðŸ˜­", "sob", 16, 24],
            ["ðŸ˜ª", "sleepy", 13, 24],
            ["ðŸ˜¥", "disappointed_relieved", 8, 24],
            ["ðŸ˜°", "cold_sweat", 19, 24],
            ["ðŸ˜…", "sweat_smile", 24, 0],
            ["ðŸ˜“", "sweat", 24, 14],
            ["ðŸ˜©", "weary", 12, 24],
            ["ðŸ˜«", "tired_face", 14, 24],
            ["ðŸ˜¨", "fearful", 11, 24],
            ["ðŸ˜±", "scream", 20, 24],
            ["ðŸ˜ ", "angry", 3, 24],
            ["ðŸ˜¡", "rage", 4, 24],
            ["ðŸ˜¤", "triumph", 7, 24],
            ["ðŸ˜–", "confounded", 24, 17],
            ["ðŸ˜†", "laughing", 24, 1],
            ["ðŸ˜‹", "yum", 24, 6],
            ["ðŸ˜·", "mask", 25, 1],
            ["ðŸ˜Ž", "sunglasses", 24, 9],
            ["ðŸ˜µ", "dizzy_face", 24, 24],
            ["ðŸ˜²", "astonished", 21, 24],
            ["ðŸ‘¿", "imp", 13, 18],
            ["ðŸ˜®", "open_mouth", 17, 24],
            ["ðŸ˜", "neutral_face", 24, 11],
            ["ðŸ˜•", "confused", 24, 16],
            ["ðŸ˜", "smirk", 24, 10],
            ["ðŸ‘²", "man_with_gua_pi_mao", 0, 18],
            ["ðŸ‘³", "man_with_turban", 1, 18],
            ["ðŸ‘®", "cop", 18, 14],
            ["ðŸ‘·", "construction_worker", 5, 18],
            ["ðŸ’‚", "guardsman", 16, 18],
            ["ðŸ‘¶", "baby", 4, 18],
            ["ðŸ‘¦", "boy", 18, 6],
            ["ðŸ‘§", "girl", 18, 7],
            ["ðŸ‘¨", "man", 18, 8],
            ["ðŸ‘©", "woman", 18, 9],
            ["ðŸ‘´", "older_man", 2, 18],
            ["ðŸ‘µ", "older_woman", 3, 18],
            ["ðŸ‘±", "person_with_blond_hair", 18, 17],
            ["ðŸ‘¼", "angel", 10, 18],
            ["ðŸ‘¸", "princess", 6, 18],
            ["ðŸ˜º", "smiley_cat", 25, 4],
            ["ðŸ˜¸", "smile_cat", 25, 2],
            ["ðŸ˜»", "heart_eyes_cat", 25, 5],
            ["ðŸ˜½", "kissing_cat", 25, 7],
            ["ðŸ˜¼", "smirk_cat", 25, 6],
            ["ðŸ™€", "scream_cat", 25, 10],
            ["ðŸ˜¿", "crying_cat_face", 25, 9],
            ["ðŸ˜¹", "joy_cat", 25, 3],
            ["ðŸ˜¾", "pouting_cat", 25, 8],
            ["ðŸ‘¹", "japanese_ogre", 7, 18],
            ["ðŸ‘º", "japanese_goblin", 8, 18],
            ["ðŸ™ˆ", "see_no_evil", 25, 14],
            ["ðŸ™‰", "hear_no_evil", 25, 15],
            ["ðŸ™Š", "speak_no_evil", 25, 16],
            ["ðŸ’€", "skull", 14, 18],
            ["ðŸ‘½", "alien", 11, 18],
            ["ðŸ’©", "hankey", 17, 19],
            ["ðŸ”¥", "fire", 11, 22],
            ["âœ¨", "sparkles", 28, 17],
            ["ðŸŒŸ", "star2", 1, 8],
            ["ðŸ’«", "dizzy", 19, 19],
            ["ðŸ’¥", "boom", 13, 19],
            ["ðŸ’¢", "anger", 10, 19],
            ["ðŸ’¦", "sweat_drops", 14, 19],
            ["ðŸ’§", "droplet", 15, 19],
            ["ðŸ’¤", "zzz", 12, 19],
            ["ðŸ’¨", "dash", 16, 19],
            ["ðŸ‘‚", "ear", 17, 5],
            ["ðŸ‘€", "eyes", 17, 4],
            ["ðŸ‘ƒ", "nose", 17, 6],
            ["ðŸ‘…", "tongue", 17, 8],
            ["ðŸ‘„", "lips", 17, 7],
            ["ðŸ‘", "thumbs_up", 17, 16],
            ["ðŸ‘Ž", "-1", 0, 17],
            ["ðŸ‘Œ", "ok_hand", 17, 15],
            ["ðŸ‘Š", "facepunch", 17, 13],
            ["âœŠ", "fist", 28, 10],
            ["âœŒ", "v", 28, 12],
            ["ðŸ‘‹", "wave", 17, 14],
            ["âœ‹", "hand", 28, 11],
            ["ðŸ‘", "open_hands", 2, 17],
            ["ðŸ‘†", "point_up_2", 17, 9],
            ["ðŸ‘‡", "point_down", 17, 10],
            ["ðŸ‘‰", "point_right", 17, 12],
            ["ðŸ‘ˆ", "point_left", 17, 11],
            ["ðŸ™Œ", "raised_hands", 25, 18],
            ["ðŸ™", "pray", 25, 21],
            ["â˜", "point_up", 27, 23],
            ["ðŸ‘", "clap", 1, 17],
            ["ðŸ’ª", "muscle", 18, 19],
            ["ðŸš¶", "walking", 26, 25],
            ["ðŸƒ", "runner", 14, 10],
            ["ðŸ’ƒ", "dancer", 17, 18],
            ["ðŸ‘«", "couple", 18, 11],
            ["ðŸ‘ª", "family", 18, 10],
            ["ðŸ’", "couplekiss", 19, 10],
            ["ðŸ’‘", "couple_with_heart", 19, 12],
            ["ðŸ‘¯", "dancers", 18, 15],
            ["ðŸ™†", "ok_woman", 25, 12],
            ["ðŸ™…", "no_good", 25, 11],
            ["ðŸ’", "information_desk_person", 15, 18],
            ["ðŸ™‹", "raising_hand", 25, 17],
            ["ðŸ’†", "massage", 19, 1],
            ["ðŸ’‡", "haircut", 19, 2],
            ["ðŸ’…", "nail_care", 19, 0],
            ["ðŸ‘°", "bride_with_veil", 18, 16],
            ["ðŸ™Ž", "person_with_pouting_face", 25, 20],
            ["ðŸ™", "person_frowning", 25, 19],
            ["ðŸ™‡", "bow", 25, 13],
            ["ðŸŽ©", "tophat", 13, 11],
            ["ðŸ‘‘", "crown", 3, 17],
            ["ðŸ‘’", "womans_hat", 4, 17],
            ["ðŸ‘Ÿ", "athletic_shoe", 17, 17],
            ["ðŸ‘ž", "mans_shoe", 16, 17],
            ["ðŸ‘¡", "sandal", 18, 1],
            ["ðŸ‘ ", "high_heel", 18, 0],
            ["ðŸ‘¢", "boot", 18, 2],
            ["ðŸ‘•", "shirt", 7, 17],
            ["ðŸ‘”", "necktie", 6, 17],
            ["ðŸ‘š", "womans_clothes", 12, 17],
            ["ðŸ‘—", "dress", 9, 17],
            ["ðŸŽ½", "running_shirt_with_sash", 14, 4],
            ["ðŸ‘–", "jeans", 8, 17],
            ["ðŸ‘˜", "kimono", 10, 17],
            ["ðŸ‘™", "bikini", 11, 17],
            ["ðŸ’¼", "briefcase", 20, 16],
            ["ðŸ‘œ", "handbag", 14, 17],
            ["ðŸ‘", "pouch", 15, 17],
            ["ðŸ‘›", "purse", 13, 17],
            ["ðŸ‘“", "eyeglasses", 5, 17],
            ["ðŸŽ€", "ribbon", 12, 7],
            ["ðŸŒ‚", "closed_umbrella", 2, 6],
            ["ðŸ’„", "lipstick", 18, 18],
            ["ðŸ’›", "yellow_heart", 3, 19],
            ["ðŸ’™", "blue_heart", 1, 19],
            ["ðŸ’œ", "purple_heart", 4, 19],
            ["ðŸ’š", "green_heart", 2, 19],
            ["â¤", "heart", 0, 28],
            ["ðŸ’”", "broken_heart", 19, 15],
            ["ðŸ’—", "heartpulse", 19, 18],
            ["ðŸ’“", "heartbeat", 19, 14],
            ["ðŸ’•", "two_hearts", 19, 16],
            ["ðŸ’–", "sparkling_heart", 19, 17],
            ["ðŸ’ž", "revolving_hearts", 6, 19],
            ["ðŸ’˜", "cupid", 0, 19],
            ["ðŸ’Œ", "love_letter", 19, 7],
            ["ðŸ’‹", "kiss", 19, 6],
            ["ðŸ’", "ring", 19, 8],
            ["ðŸ’Ž", "gem", 19, 9],
            ["ðŸ‘¤", "bust_in_silhouette", 18, 4],
            ["ðŸ’¬", "speech_balloon", 20, 0],
            ["ðŸ‘£", "footprints", 18, 3]
        ],
        [
            ["ðŸ¶", "dog", 12, 16],
            ["ðŸº", "wolf", 16, 16],
            ["ðŸ±", "cat", 7, 16],
            ["ðŸ­", "mouse", 3, 16],
            ["ðŸ¹", "hamster", 15, 16],
            ["ðŸ°", "rabbit", 6, 16],
            ["ðŸ¸", "frog", 14, 16],
            ["ðŸ¯", "tiger", 5, 16],
            ["ðŸ¨", "koala", 16, 14],
            ["ðŸ»", "bear", 17, 0],
            ["ðŸ·", "pig", 13, 16],
            ["ðŸ½", "pig_nose", 17, 2],
            ["ðŸ®", "cow", 4, 16],
            ["ðŸ—", "boar", 13, 15],
            ["ðŸµ", "monkey_face", 11, 16],
            ["ðŸ’", "monkey", 8, 15],
            ["ðŸ´", "horse", 10, 16],
            ["ðŸ‘", "sheep", 7, 15],
            ["ðŸ˜", "elephant", 14, 15],
            ["ðŸ¼", "panda_face", 17, 1],
            ["ðŸ§", "penguin", 16, 13],
            ["ðŸ¦", "bird", 16, 12],
            ["ðŸ¤", "baby_chick", 16, 10],
            ["ðŸ¥", "hatched_chick", 16, 11],
            ["ðŸ£", "hatching_chick", 16, 9],
            ["ðŸ”", "chicken", 10, 15],
            ["ðŸ", "snake", 3, 15],
            ["ðŸ¢", "turtle", 16, 8],
            ["ðŸ›", "bug", 16, 1],
            ["ðŸ", "bee", 16, 3],
            ["ðŸœ", "ant", 16, 2],
            ["ðŸž", "beetle", 16, 4],
            ["ðŸŒ", "snail", 2, 15],
            ["ðŸ™", "octopus", 15, 15],
            ["ðŸš", "shell", 16, 0],
            ["ðŸ ", "tropical_fish", 16, 6],
            ["ðŸŸ", "fish", 16, 5],
            ["ðŸ¬", "dolphin", 2, 16],
            ["ðŸ³", "whale", 9, 16],
            ["ðŸŽ", "racehorse", 4, 15],
            ["ðŸ²", "dragon_face", 8, 16],
            ["ðŸ¡", "blowfish", 16, 7],
            ["ðŸ«", "camel", 1, 16],
            ["ðŸ©", "poodle", 16, 15],
            ["ðŸ¾", "feet", 17, 3],
            ["ðŸ’", "bouquet", 19, 11],
            ["ðŸŒ¸", "cherry_blossom", 9, 1],
            ["ðŸŒ·", "tulip", 9, 0],
            ["ðŸ€", "four_leaf_clover", 0, 9],
            ["ðŸŒ¹", "rose", 9, 2],
            ["ðŸŒ»", "sunflower", 9, 4],
            ["ðŸŒº", "hibiscus", 9, 3],
            ["ðŸ", "maple_leaf", 1, 9],
            ["ðŸƒ", "leaves", 3, 9],
            ["ðŸ‚", "fallen_leaf", 2, 9],
            ["ðŸŒ¿", "herb", 9, 8],
            ["ðŸŒ¾", "ear_of_rice", 9, 7],
            ["ðŸ„", "mushroom", 4, 9],
            ["ðŸŒµ", "cactus", 8, 8],
            ["ðŸŒ´", "palm_tree", 7, 8],
            ["ðŸŒ°", "chestnut", 3, 8],
            ["ðŸŒ±", "seedling", 4, 8],
            ["ðŸŒ¼", "blossom", 9, 5],
            ["ðŸŒ‘", "new_moon", 3, 7],
            ["ðŸŒ“", "first_quarter_moon", 5, 7],
            ["ðŸŒ”", "moon", 6, 7],
            ["ðŸŒ•", "full_moon", 7, 7],
            ["ðŸŒ›", "first_quarter_moon_with_face", 8, 5],
            ["ðŸŒ™", "crescent_moon", 8, 3],
            ["ðŸŒ", "earth_asia", 1, 7],
            ["ðŸŒ‹", "volcano", 7, 4],
            ["ðŸŒŒ", "milky_way", 7, 5],
            ["ðŸŒ ", "stars", 2, 8],
            ["â­", "star", 14, 28],
            ["â˜€", "sunny", 27, 17],
            ["â›…", "partly_sunny", 25, 27],
            ["â˜", "cloud", 27, 18],
            ["âš¡", "zap", 19, 27],
            ["â˜”", "umbrella", 27, 21],
            ["â„", "snowflake", 28, 20],
            ["â›„", "snowman", 24, 27],
            ["ðŸŒ€", "cyclone", 0, 6],
            ["ðŸŒ", "foggy", 1, 6],
            ["ðŸŒˆ", "rainbow", 7, 1],
            ["ðŸŒŠ", "ocean", 7, 3]
        ],
        [
            ["ðŸŽ", "bamboo", 8, 12],
            ["ðŸ’", "gift_heart", 5, 19],
            ["ðŸŽŽ", "dolls", 9, 12],
            ["ðŸŽ’", "school_satchel", 13, 0],
            ["ðŸŽ“", "mortar_board", 13, 1],
            ["ðŸŽ", "flags", 10, 12],
            ["ðŸŽ†", "fireworks", 1, 12],
            ["ðŸŽ‡", "sparkler", 2, 12],
            ["ðŸŽ", "wind_chime", 11, 12],
            ["ðŸŽ‘", "rice_scene", 12, 12],
            ["ðŸŽƒ", "jack_o_lantern", 12, 10],
            ["ðŸ‘»", "ghost", 9, 18],
            ["ðŸŽ…", "santa", 0, 12],
            ["ðŸŽ„", "christmas_tree", 12, 11],
            ["ðŸŽ", "gift", 12, 8],
            ["ðŸŽ‹", "tanabata_tree", 6, 12],
            ["ðŸŽ‰", "tada", 4, 12],
            ["ðŸŽŠ", "confetti_ball", 5, 12],
            ["ðŸŽˆ", "balloon", 3, 12],
            ["ðŸŽŒ", "crossed_flags", 7, 12],
            ["ðŸ”®", "crystal_ball", 20, 22],
            ["ðŸŽ¥", "movie_camera", 13, 7],
            ["ðŸ“·", "camera", 13, 21],
            ["ðŸ“¹", "video_camera", 14, 21],
            ["ðŸ“¼", "vhs", 17, 21],
            ["ðŸ’¿", "cd", 20, 19],
            ["ðŸ“€", "dvd", 0, 20],
            ["ðŸ’½", "minidisc", 0, 0],
            ["ðŸ’¾", "floppy_disk", 20, 18],
            ["ðŸ’»", "computer", 20, 15],
            ["ðŸ“±", "iphone", 7, 21],
            ["â˜Ž", "phone", 27, 19],
            ["ðŸ“ž", "telephone_receiver", 21, 9],
            ["ðŸ“Ÿ", "pager", 21, 10],
            ["ðŸ“ ", "fax", 21, 11],
            ["ðŸ“¡", "satellite", 21, 12],
            ["ðŸ“º", "tv", 15, 21],
            ["ðŸ“»", "radio", 16, 21],
            ["ðŸ”Š", "loud_sound", 22, 6],
            ["ðŸ””", "bell", 22, 16],
            ["ðŸ“¢", "loudspeaker", 21, 13],
            ["ðŸ“£", "mega", 21, 14],
            ["â³", "hourglass_flowing_sand", 27, 7],
            ["âŒ›", "hourglass", 27, 1],
            ["â°", "alarm_clock", 27, 6],
            ["âŒš", "watch", 27, 0],
            ["ðŸ”“", "unlock", 22, 15],
            ["ðŸ”’", "lock", 22, 14],
            ["ðŸ”", "lock_with_ink_pen", 22, 11],
            ["ðŸ”", "closed_lock_with_key", 22, 12],
            ["ðŸ”‘", "key", 22, 13],
            ["ðŸ”Ž", "mag_right", 22, 10],
            ["ðŸ’¡", "bulb", 9, 19],
            ["ðŸ”¦", "flashlight", 12, 22],
            ["ðŸ”Œ", "electric_plug", 22, 8],
            ["ðŸ”‹", "battery", 22, 7],
            ["ðŸ”", "mag", 22, 9],
            ["ðŸ›€", "bath", 9, 26],
            ["ðŸš½", "toilet", 6, 26],
            ["ðŸ”§", "wrench", 13, 22],
            ["ðŸ”©", "nut_and_bolt", 15, 22],
            ["ðŸ”¨", "hammer", 14, 22],
            ["ðŸšª", "door", 26, 13],
            ["ðŸš¬", "smoking", 26, 15],
            ["ðŸ’£", "bomb", 11, 19],
            ["ðŸ”«", "gun", 17, 22],
            ["ðŸ”ª", "hocho", 16, 22],
            ["ðŸ’Š", "pill", 19, 5],
            ["ðŸ’‰", "syringe", 19, 4],
            ["ðŸ’°", "moneybag", 20, 4],
            ["ðŸ’´", "yen", 20, 8],
            ["ðŸ’µ", "dollar", 20, 9],
            ["ðŸ’³", "credit_card", 20, 7],
            ["ðŸ’¸", "money_with_wings", 20, 12],
            ["ðŸ“²", "calling", 8, 21],
            ["ðŸ“§", "e-mail", 21, 18],
            ["ðŸ“¥", "inbox_tray", 21, 16],
            ["ðŸ“¤", "outbox_tray", 21, 15],
            ["âœ‰", "email", 28, 9],
            ["ðŸ“©", "envelope_with_arrow", 21, 20],
            ["ðŸ“¨", "incoming_envelope", 21, 19],
            ["ðŸ“«", "mailbox", 1, 21],
            ["ðŸ“ª", "mailbox_closed", 0, 21],
            ["ðŸ“®", "postbox", 4, 21],
            ["ðŸ“¦", "package", 21, 17],
            ["ðŸ“", "memo", 21, 8],
            ["ðŸ“„", "page_facing_up", 4, 20],
            ["ðŸ“ƒ", "page_with_curl", 3, 20],
            ["ðŸ“‘", "bookmark_tabs", 17, 20],
            ["ðŸ“Š", "bar_chart", 10, 20],
            ["ðŸ“ˆ", "chart_with_upwards_trend", 8, 20],
            ["ðŸ“‰", "chart_with_downwards_trend", 9, 20],
            ["ðŸ“œ", "scroll", 21, 7],
            ["ðŸ“‹", "clipboard", 11, 20],
            ["ðŸ“…", "date", 5, 20],
            ["ðŸ“†", "calendar", 6, 20],
            ["ðŸ“‡", "card_index", 7, 20],
            ["ðŸ“", "file_folder", 1, 20],
            ["ðŸ“‚", "open_file_folder", 2, 20],
            ["âœ‚", "scissors", 28, 6],
            ["ðŸ“Œ", "pushpin", 12, 20],
            ["ðŸ“Ž", "paperclip", 14, 20],
            ["âœ’", "black_nib", 28, 14],
            ["âœ", "pencil2", 28, 13],
            ["ðŸ“", "straight_ruler", 15, 20],
            ["ðŸ“", "triangular_ruler", 16, 20],
            ["ðŸ“•", "closed_book", 21, 0],
            ["ðŸ“—", "green_book", 21, 2],
            ["ðŸ“˜", "blue_book", 21, 3],
            ["ðŸ“™", "orange_book", 21, 4],
            ["ðŸ““", "notebook", 19, 20],
            ["ðŸ“”", "notebook_with_decorative_cover", 20, 20],
            ["ðŸ“’", "ledger", 18, 20],
            ["ðŸ“š", "books", 21, 5],
            ["ðŸ“–", "book", 21, 1],
            ["ðŸ”–", "bookmark", 22, 18],
            ["ðŸ“›", "name_badge", 21, 6],
            ["ðŸ“°", "newspaper", 6, 21],
            ["ðŸŽ¨", "art", 13, 10],
            ["ðŸŽ¬", "clapper", 1, 13],
            ["ðŸŽ¤", "microphone", 13, 6],
            ["ðŸŽ§", "headphones", 13, 9],
            ["ðŸŽ¼", "musical_score", 14, 3],
            ["ðŸŽµ", "musical_note", 10, 13],
            ["ðŸŽ¶", "notes", 11, 13],
            ["ðŸŽ¹", "musical_keyboard", 14, 0],
            ["ðŸŽ»", "violin", 14, 2],
            ["ðŸŽº", "trumpet", 14, 1],
            ["ðŸŽ·", "saxophone", 12, 13],
            ["ðŸŽ¸", "guitar", 13, 13],
            ["ðŸ‘¾", "space_invader", 12, 18],
            ["ðŸŽ®", "video_game", 3, 13],
            ["ðŸƒ", "black_joker", 20, 17],
            ["ðŸŽ´", "flower_playing_cards", 9, 13],
            ["ðŸ€„", "mahjong", 1, 0],
            ["ðŸŽ²", "game_die", 7, 13],
            ["ðŸŽ¯", "dart", 4, 13],
            ["ðŸˆ", "football", 0, 14],
            ["ðŸ€", "basketball", 14, 7],
            ["âš½", "soccer", 22, 27],
            ["âš¾", "baseball", 23, 27],
            ["ðŸŽ¾", "tennis", 14, 5],
            ["ðŸŽ±", "8ball", 6, 13],
            ["ðŸŽ³", "bowling", 8, 13],
            ["â›³", "golf", 28, 2],
            ["ðŸ", "checkered_flag", 14, 8],
            ["ðŸ†", "trophy", 14, 12],
            ["ðŸŽ¿", "ski", 14, 6],
            ["ðŸ‚", "snowboarder", 14, 9],
            ["ðŸŠ", "swimmer", 2, 14],
            ["ðŸ„", "surfer", 14, 11],
            ["ðŸŽ£", "fishing_pole_and_fish", 13, 5],
            ["â˜•", "coffee", 27, 22],
            ["ðŸµ", "tea", 11, 11],
            ["ðŸ¶", "sake", 12, 0],
            ["ðŸº", "beer", 12, 4],
            ["ðŸ»", "beers", 12, 5],
            ["ðŸ¸", "cocktail", 12, 2],
            ["ðŸ¹", "tropical_drink", 12, 3],
            ["ðŸ·", "wine_glass", 12, 1],
            ["ðŸ´", "fork_and_knife", 10, 11],
            ["ðŸ•", "pizza", 1, 10],
            ["ðŸ”", "hamburger", 0, 10],
            ["ðŸŸ", "fries", 11, 0],
            ["ðŸ—", "poultry_leg", 3, 10],
            ["ðŸ–", "meat_on_bone", 2, 10],
            ["ðŸ", "spaghetti", 9, 10],
            ["ðŸ›", "curry", 7, 10],
            ["ðŸ¤", "fried_shrimp", 11, 5],
            ["ðŸ±", "bento", 7, 11],
            ["ðŸ£", "sushi", 11, 4],
            ["ðŸ¥", "fish_cake", 11, 6],
            ["ðŸ™", "rice_ball", 5, 10],
            ["ðŸ˜", "rice_cracker", 4, 10],
            ["ðŸš", "rice", 6, 10],
            ["ðŸœ", "ramen", 8, 10],
            ["ðŸ²", "stew", 8, 11],
            ["ðŸ¢", "oden", 11, 3],
            ["ðŸ¡", "dango", 11, 2],
            ["ðŸ³", "egg", 9, 11],
            ["ðŸž", "bread", 10, 10],
            ["ðŸ©", "doughnut", 11, 10],
            ["ðŸ®", "custard", 4, 11],
            ["ðŸ¦", "icecream", 11, 7],
            ["ðŸ¨", "ice_cream", 11, 9],
            ["ðŸ§", "shaved_ice", 11, 8],
            ["ðŸŽ‚", "birthday", 12, 9],
            ["ðŸ°", "cake", 6, 11],
            ["ðŸª", "cookie", 0, 11],
            ["ðŸ«", "chocolate_bar", 1, 11],
            ["ðŸ¬", "candy", 2, 11],
            ["ðŸ­", "lollipop", 3, 11],
            ["ðŸ¯", "honey_pot", 5, 11],
            ["ðŸŽ", "apple", 10, 4],
            ["ðŸ", "green_apple", 10, 5],
            ["ðŸŠ", "tangerine", 10, 0],
            ["ðŸ’", "cherries", 10, 8],
            ["ðŸ‡", "grapes", 7, 9],
            ["ðŸ‰", "watermelon", 9, 9],
            ["ðŸ“", "strawberry", 10, 9],
            ["ðŸ‘", "peach", 10, 7],
            ["ðŸˆ", "melon", 8, 9],
            ["ðŸŒ", "banana", 10, 2],
            ["ðŸ", "pineapple", 10, 3],
            ["ðŸ ", "sweet_potato", 11, 1],
            ["ðŸ†", "eggplant", 6, 9],
            ["ðŸ…", "tomato", 5, 9],
            ["ðŸŒ½", "corn", 9, 6]
        ],
        [
            ["ðŸ ", "house", 3, 14],
            ["ðŸ¡", "house_with_garden", 4, 14],
            ["ðŸ«", "school", 14, 14],
            ["ðŸ¢", "office", 5, 14],
            ["ðŸ£", "post_office", 6, 14],
            ["ðŸ¥", "hospital", 8, 14],
            ["ðŸ¦", "bank", 9, 14],
            ["ðŸª", "convenience_store", 13, 14],
            ["ðŸ©", "love_hotel", 12, 14],
            ["ðŸ¨", "hotel", 11, 14],
            ["ðŸ’’", "wedding", 19, 13],
            ["â›ª", "church", 28, 0],
            ["ðŸ¬", "department_store", 15, 0],
            ["ðŸŒ‡", "city_sunrise", 7, 0],
            ["ðŸŒ†", "city_sunset", 6, 6],
            ["ðŸ¯", "japanese_castle", 15, 3],
            ["ðŸ°", "european_castle", 15, 4],
            ["â›º", "tent", 28, 4],
            ["ðŸ­", "factory", 15, 1],
            ["ðŸ—¼", "tokyo_tower", 15, 23],
            ["ðŸ—¾", "japan", 17, 23],
            ["ðŸ—»", "mount_fuji", 14, 23],
            ["ðŸŒ„", "sunrise_over_mountains", 4, 6],
            ["ðŸŒ…", "sunrise", 5, 6],
            ["ðŸŒƒ", "night_with_stars", 3, 6],
            ["ðŸ—½", "statue_of_liberty", 16, 23],
            ["ðŸŒ‰", "bridge_at_night", 7, 2],
            ["ðŸŽ ", "carousel_horse", 13, 2],
            ["ðŸŽ¡", "ferris_wheel", 13, 3],
            ["â›²", "fountain", 28, 1],
            ["ðŸŽ¢", "roller_coaster", 13, 4],
            ["ðŸš¢", "ship", 26, 5],
            ["â›µ", "boat", 28, 3],
            ["ðŸš¤", "speedboat", 26, 7],
            ["âš“", "anchor", 17, 27],
            ["ðŸš€", "rocket", 25, 22],
            ["âœˆ", "airplane", 28, 8],
            ["ðŸ’º", "seat", 20, 14],
            ["ðŸš‰", "station", 6, 25],
            ["ðŸš„", "bullettrain_side", 1, 25],
            ["ðŸš…", "bullettrain_front", 2, 25],
            ["ðŸš‡", "metro", 4, 25],
            ["ðŸšƒ", "railway_car", 0, 25],
            ["ðŸšŒ", "bus", 9, 25],
            ["ðŸš™", "blue_car", 22, 25],
            ["ðŸš—", "car", 20, 25],
            ["ðŸš•", "taxi", 18, 25],
            ["ðŸšš", "truck", 23, 25],
            ["ðŸš¨", "rotating_light", 26, 11],
            ["ðŸš“", "police_car", 16, 25],
            ["ðŸš’", "fire_engine", 15, 25],
            ["ðŸš‘", "ambulance", 14, 25],
            ["ðŸš²", "bike", 26, 21],
            ["ðŸ’ˆ", "barber", 19, 3],
            ["ðŸš", "busstop", 12, 25],
            ["ðŸŽ«", "ticket", 0, 13],
            ["ðŸš¥", "traffic_light", 26, 8],
            ["âš ", "warning", 18, 27],
            ["ðŸš§", "construction", 26, 10],
            ["ðŸ”°", "beginner", 22, 22],
            ["â›½", "fuelpump", 28, 5],
            ["ðŸ®", "izakaya_lantern", 15, 2],
            ["ðŸŽ°", "slot_machine", 5, 13],
            ["â™¨", "hotsprings", 14, 27],
            ["ðŸ—¿", "moyai", 18, 23],
            ["ðŸŽª", "circus_tent", 13, 12],
            ["ðŸŽ­", "performing_arts", 2, 13],
            ["ðŸ“", "round_pushpin", 13, 20],
            ["ðŸš©", "triangular_flag_on_post", 26, 12]
        ],
        [
            ["ðŸ”Ÿ", "keycap_ten", 5, 22],
            ["ðŸ”¢", "1234", 8, 22],
            ["ðŸ”£", "symbols", 9, 22],
            ["â¬†", "arrow_up", 10, 28],
            ["â¬‡", "arrow_down", 11, 28],
            ["â¬…", "arrow_left", 9, 28],
            ["âž¡", "arrow_right", 4, 28],
            ["ðŸ” ", "capital_abcd", 6, 22],
            ["ðŸ”¡", "abcd", 7, 22],
            ["ðŸ”¤", "abc", 10, 22],
            ["â†—", "arrow_upper_right", 22, 26],
            ["â†–", "arrow_upper_left", 21, 26],
            ["â†˜", "arrow_lower_right", 23, 26],
            ["â†™", "arrow_lower_left", 24, 26],
            ["â†”", "left_right_arrow", 19, 26],
            ["â†•", "arrow_up_down", 20, 26],
            ["â—€", "arrow_backward", 27, 12],
            ["â–¶", "arrow_forward", 27, 11],
            ["ðŸ”¼", "arrow_up_small", 23, 11],
            ["ðŸ”½", "arrow_down_small", 23, 12],
            ["â†©", "leftwards_arrow_with_hook", 25, 26],
            ["â†ª", "arrow_right_hook", 26, 26],
            ["â„¹", "information_source", 18, 26],
            ["âª", "rewind", 27, 3],
            ["â©", "fast_forward", 27, 2],
            ["â«", "arrow_double_up", 27, 4],
            ["â¬", "arrow_double_down", 27, 5],
            ["â¤µ", "arrow_heading_down", 8, 28],
            ["â¤´", "arrow_heading_up", 7, 28],
            ["ðŸ†—", "ok", 1, 3],
            ["ðŸ†•", "new", 3, 2],
            ["ðŸ†™", "up", 3, 3],
            ["ðŸ†’", "cool", 2, 2],
            ["ðŸ†“", "free", 3, 0],
            ["ðŸ†–", "ng", 0, 3],
            ["ðŸ“¶", "signal_strength", 12, 21],
            ["ðŸŽ¦", "cinema", 13, 8],
            ["ðŸˆ", "koko", 5, 2],
            ["ðŸˆ¯", "u6307", 0, 5],
            ["ðŸˆ³", "u7a7a", 2, 5],
            ["ðŸˆµ", "u6e80", 4, 5],
            ["ðŸˆ´", "u5408", 3, 5],
            ["ðŸˆ²", "u7981", 1, 5],
            ["ðŸ‰", "ideograph_advantage", 6, 4],
            ["ðŸˆ¹", "u5272", 6, 2],
            ["ðŸˆº", "u55b6", 6, 3],
            ["ðŸˆ¶", "u6709", 5, 5],
            ["ðŸˆš", "u7121", 5, 4],
            ["ðŸš»", "restroom", 4, 26],
            ["ðŸš¹", "mens", 2, 26],
            ["ðŸšº", "womens", 3, 26],
            ["ðŸš¼", "baby_symbol", 5, 26],
            ["ðŸš¾", "wc", 7, 26],
            ["ðŸ…¿", "parking", 2, 1],
            ["â™¿", "wheelchair", 16, 27],
            ["ðŸš­", "no_smoking", 26, 16],
            ["ðŸˆ·", "u6708", 6, 0],
            ["ðŸˆ¸", "u7533", 6, 1],
            ["ðŸˆ‚", "sa", 5, 3],
            ["â“‚", "m", 27, 8],
            ["ðŸ‰‘", "accept", 6, 5],
            ["ãŠ™", "secret", 19, 28],
            ["ãŠ—", "congratulations", 18, 28],
            ["ðŸ†‘", "cl", 1, 2],
            ["ðŸ†˜", "sos", 2, 3],
            ["ðŸ†”", "id", 3, 1],
            ["ðŸš«", "no_entry_sign", 26, 14],
            ["ðŸ”ž", "underage", 4, 22],
            ["â›”", "no_entry", 27, 27],
            ["âœ³", "eight_spoked_asterisk", 28, 18],
            ["â‡", "sparkle", 28, 21],
            ["âŽ", "negative_squared_cross_mark", 28, 23],
            ["âœ…", "white_check_mark", 28, 7],
            ["âœ´", "eight_pointed_black_star", 28, 19],
            ["ðŸ’Ÿ", "heart_decoration", 7, 19],
            ["ðŸ†š", "vs", 4, 0],
            ["ðŸ“³", "vibration_mode", 9, 21],
            ["ðŸ“´", "mobile_phone_off", 10, 21],
            ["ðŸ…°", "a", 0, 1],
            ["ðŸ…±", "b", 1, 1],
            ["ðŸ†Ž", "ab", 0, 2],
            ["ðŸ…¾", "o2", 2, 0],
            ["ðŸ’ ", "diamond_shape_with_a_dot_inside", 8, 19],
            ["â™»", "recycle", 15, 27],
            ["â™ˆ", "aries", 27, 25],
            ["â™‰", "taurus", 27, 26],
            ["â™Š", "gemini", 0, 27],
            ["â™‹", "cancer", 1, 27],
            ["â™Œ", "leo", 2, 27],
            ["â™", "virgo", 3, 27],
            ["â™Ž", "libra", 4, 27],
            ["â™", "scorpius", 5, 27],
            ["â™", "sagittarius", 6, 27],
            ["â™‘", "capricorn", 7, 27],
            ["â™’", "aquarius", 8, 27],
            ["â™“", "pisces", 9, 27],
            ["â›Ž", "ophiuchus", 26, 27],
            ["ðŸ”¯", "six_pointed_star", 21, 22],
            ["ðŸ§", "atm", 10, 14],
            ["ðŸ’¹", "chart", 20, 13],
            ["ðŸ’²", "heavy_dollar_sign", 20, 6],
            ["ðŸ’±", "currency_exchange", 20, 5],
            ["âŒ", "x", 28, 22],
            ["â€¼", "bangbang", 15, 26],
            ["â‰", "interrobang", 16, 26],
            ["â—", "exclamation", 28, 27],
            ["â“", "question", 28, 24],
            ["â•", "grey_exclamation", 28, 26],
            ["â”", "grey_question", 28, 25],
            ["â­•", "o", 15, 28],
            ["ðŸ”", "top", 3, 22],
            ["ðŸ”š", "end", 0, 22],
            ["ðŸ”™", "back", 22, 21],
            ["ðŸ”›", "on", 1, 22],
            ["ðŸ”œ", "soon", 2, 22],
            ["ðŸ”ƒ", "arrows_clockwise", 21, 21],
            ["ðŸ•›", "clock12", 1, 23],
            ["ðŸ•", "clock1", 23, 13],
            ["ðŸ•‘", "clock2", 23, 14],
            ["ðŸ•’", "clock3", 23, 15],
            ["ðŸ•“", "clock4", 23, 16],
            ["ðŸ•”", "clock5", 23, 17],
            ["ðŸ••", "clock6", 23, 18],
            ["ðŸ•–", "clock7", 23, 19],
            ["ðŸ•—", "clock8", 23, 20],
            ["ðŸ•˜", "clock9", 23, 21],
            ["ðŸ•™", "clock10", 23, 22],
            ["ðŸ•š", "clock11", 0, 23],
            ["âœ–", "heavy_multiplication_x", 28, 16],
            ["âž•", "heavy_plus_sign", 1, 28],
            ["âž–", "heavy_minus_sign", 2, 28],
            ["âž—", "heavy_division_sign", 3, 28],
            ["â™ ", "spades", 10, 27],
            ["â™¥", "hearts", 12, 27],
            ["â™£", "clubs", 11, 27],
            ["â™¦", "diamonds", 13, 27],
            ["ðŸ’®", "white_flower", 20, 2],
            ["ðŸ’¯", "100", 20, 3],
            ["âœ”", "heavy_check_mark", 28, 15],
            ["â˜‘", "ballot_box_with_check", 27, 20],
            ["ðŸ”˜", "radio_button", 22, 20],
            ["ðŸ”—", "link", 22, 19],
            ["âž°", "curly_loop", 5, 28],
            ["ã€°", "wavy_dash", 16, 28],
            ["ã€½", "part_alternation_mark", 17, 28],
            ["ðŸ”±", "trident", 23, 0],
            ["â—¼", "black_medium_square", 27, 14],
            ["â—»", "white_medium_square", 27, 13],
            ["â—¾", "black_medium_small_square", 27, 16],
            ["â—½", "white_medium_small_square", 27, 15],
            ["â–ª", "black_small_square", 27, 9],
            ["â–«", "white_small_square", 27, 10],
            ["ðŸ”º", "small_red_triangle", 23, 9],
            ["ðŸ”²", "black_square_button", 23, 1],
            ["ðŸ”³", "white_square_button", 23, 2],
            ["âš«", "black_circle", 21, 27],
            ["âšª", "white_circle", 20, 27],
            ["ðŸ”´", "red_circle", 23, 3],
            ["ðŸ”µ", "large_blue_circle", 23, 4],
            ["ðŸ”»", "small_red_triangle_down", 23, 10],
            ["â¬œ", "white_large_square", 13, 28],
            ["â¬›", "black_large_square", 12, 28],
            ["ðŸ”¶", "large_orange_diamond", 23, 5],
            ["ðŸ”·", "large_blue_diamond", 23, 6],
            ["ðŸ”¸", "small_orange_diamond", 23, 7],
            ["ðŸ”¹", "small_blue_diamond", 23, 8]
        ]
    ];
}, function(e, t) {
    "use strict";

    function n() {
        var e = Date.now;
        return "function" == typeof e && !("prototype" in e)
    }
    t.timestampToDate = function(e) {
        return new Date(1e3 * e)
    }, t.now = function() {
        return n() ? Date.now() : (new Date).getTime()
    }
}, function(e, t, n) {
    (function(t) {
        var i = n(4),
            o = {
                blockRenderers: {
                    simpleCard: function(e) {
                        var t = "";
                        if (!i.isEmpty(e.image)) {
                            var n = document.createElement("img");
                            n.src = e.image, t = '<div class="intercom-interblocks-simple-card-image">' + n.outerHTML + "</div>"
                        }
                        if (!i.isEmpty(e.title) || !i.isEmpty(e.body)) {
                            var o = i.isEmpty(e.title) ? "" : '<div class="intercom-interblocks-simple-card-title">' + i.escape(e.title) + "</div>",
                                r = i.isEmpty(e.body) ? "" : '<div class="intercom-interblocks-simple-card-body">' + i.escape(e.body) + "</div>";
                            t += '<div class="intercom-interblocks-simple-card-text">' + o + r + "</div>"
                        }
                        i.isEmpty(t) && (t = e.text);
                        var a = '<div class="intercom-interblocks-content-card">' + t + "</div>";
                        return a
                    },
                    articleCard: function(e) {
                        var t = document.createElement("img");
                        t.className = "intercom-interblocks-article-author-avatar-image", t.src = e.authorAvatarUrl;
                        var n = '<div class="intercom-interblocks-content-card"><div class="intercom-interblocks-article-icon"></div><div class="intercom-interblocks-article-text"><div class="intercom-interblocks-article-title">' + i.escape(e.title) + '</div><div class="intercom-interblocks-article-body">' + i.escape(e.body) + '</div><div class="intercom-interblocks-article-author"><div class="intercom-interblocks-article-author-avatar">' + t.outerHTML + '</div><div class="intercom-interblocks-article-author-name">' + i.escape(e.authorName) + "</div></div></div></div>";
                        return n
                    },
                    videoReply: function(e) {
                        var t = '<video controls class="intercom-interblocks-video-reply"><source src="' + e.url + '"><p><a href="' + e.url + '">' + e.text + "</a></p></video>";
                        return t
                    },
                    paragraph: function(e) {
                        e.cssClass = o.getBlockClass(e);
                        var t = "<p";
                        return e.cssClass.length && (t += ' class="' + e.cssClass + '"'), t += ">" + e.text + "</p>"
                    },
                    code: function(e) {
                        var t = "<pre><code>" + e.text + "</code></pre>";
                        return t
                    },
                    orderedList: function(e) {
                        var t = "<ol>";
                        return i.each(e.items, function(e) {
                            t += "<li>" + e + "</li>"
                        }), t += "</ol>"
                    },
                    unorderedList: function(e) {
                        var t = "<ul>";
                        return i.each(e.items, function(e) {
                            t += "<li>" + e + "</li>"
                        }), t += "</ul>"
                    },
                    heading: function(e) {
                        e.cssClass = o.getBlockClass(e);
                        var t = "<h1";
                        return e.cssClass.length && (t += ' class="' + e.cssClass + '"'), t += ">" + e.text + "</h1>"
                    },
                    subheading: function(e) {
                        e.cssClass = o.getBlockClass(e);
                        var t = "<h2";
                        return e.cssClass.length && (t += ' class="' + e.cssClass + '"'), t += ">" + e.text + "</h2>"
                    },
                    image: function(e) {
                        e.cssClass = o.getBlockClass(e);
                        var t = "<div";
                        return e.cssClass.length && (t += ' class="intercom-container ' + e.cssClass + '"'), i.isString(e.linkUrl) && (t += '><a target="_blank" href="' + e.linkUrl + '" rel="nofollow"'), t += '><img src="' + e.url + '">', i.isString(e.linkUrl) && (t += "</a>"), t += "</div>"
                    },
                    button: function(e) {
                        e.cssClass = o.getBlockClass(e);
                        var t = '<div class="intercom-container ';
                        return e.cssClass.length && (t += e.cssClass), t += '"><a target="_blank" href="' + e.linkUrl + '" class="intercom-h2b-button" rel="nofollow">' + e.text + "</a></div>"
                    },
                    facebookLikeButton: function(e) {
                        var t = '<iframe src="//www.facebook.com/plugins/like.php?href=' + e.url + '&amp;width&amp;layout=standard&amp;action=like&amp;share=true&amp;height=28&amp;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20+++appId=487224624685065"scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:28px;" allowtransparency="true"></iframe>';
                        return t
                    },
                    twitterFollowButton: function(e) {
                        var t = '<iframe class="allowed_iframe_embed" allowtransparency="true" frameborder="0" scrolling="no" src="https://platform.twitter.com/widgets/follow_button.html?show_count=false&amp;screen_name=' + e.username + '" style="width:300px; height:20px;"></iframe>';
                        return t
                    },
                    video: function(e) {
                        switch (e.provider) {
                            case "wistia":
                                e.src = "https://fast.wistia.net/embed/iframe/" + e.id + "?videoQuality=hd-only";
                                break;
                            case "youtube":
                                e.src = "https://www.youtube.com/embed/" + e.id + "?hd=1";
                                break;
                            case "vimeo":
                                e.src = "https://player.vimeo.com/video/" + e.id;
                                break;
                            default:
                                e.src = ""
                        }
                        var t = '<div class="intercom-h2b-video"><iframe src="' + e.src + '" frameborder="0" style="" class="allowed_iframe_embed" allowtransparency="true"></iframe></div>';
                        return t
                    },
                    attachmentList: function(e) {
                        return ""
                    },
                    html: function(e) {
                        return e.content
                    }
                },
                getBlockClass: function(e) {
                    var t = "";
                    return i.isUndefined(e.align) || (t += "intercom-align-" + e.align + " "), i.isUndefined(e["class"]) || (t += e["class"]), t
                },
                supportsBlockRendering: function(e) {
                    var t = i.keys(this.blockRenderers),
                        n = i.chain(e).pluck("type").uniq().value();
                    return i.all(n, function(e) {
                        return i.contains(t, e)
                    })
                },
                renderBlocks: function(e) {
                    if (!o.supportsBlockRendering(e)) throw new Error("Intercom.Interblocks: Unsupported blockList: " + t.stringify(e));
                    var n = i.map(e, function(e) {
                        return o.blockRenderers[e.type](e)
                    });
                    return i.reduce(n, function(e, t) {
                        return e + t
                    }, "")
                }
            };
        e.exports = o
    }).call(t, n(6))
}, function(e, t) {
    "use strict";
    t.generateUUID = function() {
        var e = (new Date).getTime(),
            t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = (e + 16 * Math.random()) % 16 | 0;
                return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
            });
        return t
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        this.callback = e, this.isStarted = !1, this.timers = [], this.context = {}
    }
    var o = n(4);
    o.extend(i.prototype, {
        start: function(e) {
            this.isStarted && this.shutdown(), this.conditions = e, this._predicateHandlers = {
                duration_integer: this._durationSecondsHandler,
                duration_integer_ms: this._durationMillisecondsHandler,
                duration_delta: this._durationDeltaHandler
            }, this._setupConditions(e), this.isStarted = !0
        },
        shutdown: function() {
            o.each(this.timers, this._stopTimer), this.timers = [], this.isStarted = !1
        },
        setContext: function(e) {
            this.context = e
        },
        _setupConditions: function(e) {
            o.each(e, this._setupConditionPredicateHandlers, this)
        },
        _setupConditionPredicateHandlers: function(e) {
            var t = this;
            e.hasOrPredicates = this._hasOrPredicates(e.predicates), o.each(e.predicates, function(n) {
                n.matched = !1;
                var i = t._predicateHandlers[n.type];
                i && i.call(t, e, n)
            })
        },
        _hasOrPredicates: function(e) {
            return o.any(e, function(e) {
                return e.type && "or" === e.type
            })
        },
        _durationSecondsHandler: function(e, t) {
            var n = 1e3 * parseInt(t.value, 10);
            this._createDurationTimer(e, t, n)
        },
        _durationMillisecondsHandler: function(e, t) {
            var n = parseInt(t.value, 10);
            this._createDurationTimer(e, t, n)
        },
        _durationDeltaHandler: function(e, t) {
            var n = parseInt(t.value, 10);
            this._createDeltaTimer(e, t, n)
        },
        _createDurationTimer: function(e, t, n) {
            var i = this,
                o = function() {
                    t.matched = !0, i._checkConditionsSatisfied(e)
                };
            this._createTimer(o, n)
        },
        _createDeltaTimer: function(e, t, n) {
            var i = this,
                o = function() {
                    if (t.matched = i._evaluateDeltaPredicate(t), t.matched) i._checkConditionsSatisfied(e);
                    else {
                        var n = Date.now() - i.context[t.attribute],
                            o = t.value - n;
                        i._createDeltaTimer(e, t, o)
                    }
                };
            this._createTimer(o, n)
        },
        _evaluateDeltaPredicate: function(e) {
            var t = this.context[e.attribute];
            if (!t) return !0;
            var n = Date.now() - t;
            return n > parseInt(e.value, 10)
        },
        _checkConditionsSatisfied: function(e) {
            this._predicatesMatch(e) && this.callback(e)
        },
        _predicatesMatch: function(e) {
            var t = o.any(e.predicates, function(e) {
                    return e.matched
                }),
                n = o.all(e.predicates, function(e) {
                    return e.matched
                });
            return e.hasOrPredicates ? t : n
        },
        _createTimer: function(e, t) {
            var n = setTimeout(e, t);
            this.timers.push(n)
        },
        _stopTimer: function(e) {
            clearTimeout(e)
        }
    }), e.exports = i
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = o.Model.extend({
            initialize: function(e, t) {
                this.settings = t.settings
            },
            hasEmail: function() {
                return !i.isEmpty(this.getEmail())
            },
            getEmail: function() {
                return this.settings.get("user.email") || this.settings.get("user.anonymous-email")
            },
            getRole: function() {
                return this.settings.get("user.role")
            },
            isUserRole: function() {
                return "user_role" === this.getRole()
            },
            updateAnonymousEmail: function(e) {
                return this.settings.update({
                    user: {
                        anonymous_email: e
                    }
                }), this.trigger("user-model:anonymous-email-changed"), window.IntercomGTM && window.IntercomGTM.recordEmailSubmission(e), this.save()
            },
            fetchRealtimeSettingsIfMissing: function() {
                this.settings.get("user.anonymous") && !this.settings.has("app.rtm-settings") && this.fetch()
            }
        });
    r.fromSettings = function(e) {
        return new r({}, {
            settings: e
        })
    }, e.exports = r
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(52);
    e.exports = o.Collection.extend({
        model: r,
        initialize: function() {
            this.on("change", this.sort), this.on("reset", this.onReset)
        },
        comparator: function(e) {
            return e.updatedAt()
        },
        unread: function() {
            return i(this.reject(function(e) {
                return e.isRead()
            }))
        },
        newUnread: function() {
            return i(this.reject(function(e) {
                return e.isRead() || e.updatedBeforeInAppsV2()
            }))
        },
        fetchNextPage: function() {
            return this.pages += 1, this.fetch({
                remove: !1
            })
        },
        isFetched: function() {
            return this.pages === this.totalPages
        },
        parse: function(e) {
            return this.pages = e.pages.page, this.totalPages = e.pages.total_pages, e.conversations
        },
        onReset: function() {
            this.pages = void 0, this.totalPages = void 0
        }
    })
}, function(e, t, n) {
    "use strict";

    function i() {
        d.invoke(g, "call")
    }

    function o() {
        d.invoke(v, "call")
    }

    function r() {
        return h.now() - c < l
    }

    function a() {
        m && (m = clearTimeout(m))
    }

    function s() {
        a(), m = setTimeout(t.recordActivityFinished, c)
    }
    var c, l, u, m, d = n(4),
        p = n(3),
        h = n(62),
        f = !1,
        g = [],
        v = [];
    t.start = function(e) {
        f || (f = !0, c = e || 1e3, u = !1, p(document).on("intercom.keyup", t.recordActivity), p(document).mousemove(t.recordActivity), p(document).focus(t.recordActivity), p(window).blur(t.recordActivityFinished))
    }, t.stop = function() {
        f && (p(document).off("intercom.keyup", t.recordActivity), p(document).off("mousemove", t.recordActivity), p(document).off("focus", t.recordActivity), p(window).off("blur", t.recordActivityFinished), a(), f = !1)
    }, t.recordActivity = function() {
        u = !0, l = h.now(), s(), i()
    }, t.recordActivityFinished = function() {
        u = !1, a(), o()
    }, t.onActive = function(e) {
        g.push(e)
    }, t.onInactive = function(e) {
        v.push(e)
    }, t.isActive = function() {
        return u || r()
    }
}, function(e, t, n) {
    "use strict";
    var i = n(59);
    e.exports = {
        enable: function() {
            this.enabled = !0
        },
        isEnabled: function() {
            return this.enabled
        },
        playDelivered: function() {
            this.play(n(70))
        },
        playFailed: function() {
            this.play(n(71))
        },
        playNotification: function() {
            this.play(n(72))
        },
        playSubmit: function() {
            this.play(n(73))
        },
        play: function(e) {
            if (i.features.audioMp3() && this.isEnabled()) {
                var t = this.load(e);
                t && t.play()
            }
        },
        load: function(e) {
            return void 0 === this.audio[e] && (this.audio[e] = new Audio(e)), this.audio[e]
        },
        audio: {}
    }
}, function(e, t, n) {
    e.exports = n.p + "audio/delivered.240b316e.mp3"
}, function(e, t, n) {
    e.exports = n.p + "audio/failed.8d215ddf.mp3"
}, function(e, t, n) {
    e.exports = n.p + "audio/notification.0d062b33.mp3"
}, function(e, t, n) {
    e.exports = n.p + "audio/submit.9b6dc5c5.mp3"
}, function(e, t) {
    "use strict";
    var n = /[^.]*\.([^.]*|..\...|...\...)$/,
        i = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    t.findDomain = function(e) {
        var t = e.match(i);
        if (!t && (t = e.match(n))) {
            var o = t[0];
            return o = o.split(":")[0], "." + o
        }
    }, t.read = function(e, t) {
        t = t || document.cookie;
        var n = "(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$";
        return decodeURIComponent(t.replace(new RegExp(n), "$1")) || void 0
    }, t.write = function(e, n, i, o, r) {
        var a = e + "=" + n;
        return "all" === i && (i = t.findDomain(location.host)), i && (a += "; domain=" + i), o && (a += "; path=" + o), r && (a += "; expires=" + r.toUTCString()), document.cookie = a, a
    }, t.clear = function(e, n, i) {
        t.write(e, "", n, i, new Date(0))
    }
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(76);
    e.exports = {
        hasAppleMetaTag: function() {
            return i('head meta[name="apple-itunes-app"]').length > 0
        },
        run: function() {
            this.hasAppleMetaTag() && o.increment("ma:ap_meta")
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(3),
        r = n(9),
        a = n(62),
        s = n(6),
        c = n(77),
        l = "metrics";
    e.exports = {
        increment: function(e) {
            r.info("metrics - increment " + e);
            var t = !1,
                n = this.getMetrics();
            i.each(n, function(n) {
                "increment" === n.type && n.name === e && (n.value += 1, t = !0)
            }), t ? this.saveMetrics(n) : this.addMetric("increment", e, 1)
        },
        timer: function(e) {
            var t = a.now(),
                n = o.Deferred();
            return n.then(i.bind(function() {
                var n = a.now() - t;
                r.info("metrics - timing " + e + ": " + n + "ms"), this.addMetric("timing", e, n)
            }, this)), n
        },
        getMetrics: function() {
            return s.parse(c.localStorage.get(l) || "[]")
        },
        addMetric: function(e, t, n) {
            var i = this.getMetrics();
            i.push({
                type: e,
                name: t,
                value: n
            }), this.saveMetrics(i)
        },
        saveMetrics: function(e) {
            c.localStorage.set(l, s.stringify(e))
        },
        resetMetrics: function() {
            c.localStorage.removeAll(l)
        }
    }
}, function(e, t, n) {
    "use strict";

    function i() {
        return {
            get: r.noop,
            set: r.noop,
            remove: r.noop,
            removeAll: r.noop
        }
    }

    function o(e) {
        return {
            get: function(t) {
                return e.getItem(s + t)
            },
            set: function(t, n) {
                return e.setItem(s + t, n || "")
            },
            remove: function(t) {
                e.removeItem(s + t)
            },
            removeAll: function(t) {
                if (r.isString(t))
                    for (var n in e) 0 === n.indexOf(s + t) && e.removeItem(n)
            }
        }
    }
    var r = n(4),
        a = n(59),
        s = "intercom.";
    e.exports = {
        localStorage: a.features.localStorage() ? o(localStorage) : i(),
        sessionStorage: a.features.sessionStorage() ? o(sessionStorage) : i()
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = {};
    i.extend(r, o.Events), r.retrigger = function(e) {
        return function(t) {
            t.preventDefault(), t.stopPropagation(), r.trigger(e)
        }
    }, e.exports = r
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return "audio.notification." + e.id
    }

    function o(e) {
        return d.parse(m.localStorage.get(i(e)) || 0)
    }

    function r(e) {
        m.localStorage.set(i(e), e.get("updated_at"))
    }

    function a(e) {
        return o(e) === e.get("updated_at")
    }
    var s = n(69),
        c = n(62),
        l = n(80),
        u = n(10),
        m = n(77),
        d = n(6);
    e.exports = {
        enable: function() {
            this.enabled = !0
        },
        isEnabled: function() {
            return this.enabled
        },
        triggerNotification: function(e) {
            if (this.isEnabled() && !e.isRead()) {
                var t = e.parts.last();
                if (t && !t.byUser()) {
                    var n, i = t.getAuthorFirstName();
                    n = i ? u.translate("x-says", {
                        firstName: i
                    }) : u.translate("someone-says"), l.setNotification(n), this._playAudio(e)
                }
            }
        },
        triggerWelcomeNotification: function(e) {
            if (this.isEnabled()) {
                var t = "audio.notification.app-message",
                    n = d.parse(m.localStorage.get(t) || 0);
                if (!n) {
                    if (u.isLocaleEnglish()) {
                        var i = e + " says...";
                        l.setNotification(i)
                    }
                    m.localStorage.set(t, c.now()), s.playNotification()
                }
            }
        },
        _playAudio: function(e) {
            a(e) || (r(e), s.playNotification())
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        u("head title").text(e)
    }

    function o() {
        return u("head title").text()
    }

    function r() {
        var e = o();
        i(s), s = e
    }
    var a, s, c, l = n(4),
        u = n(3),
        m = n(59),
        d = n(81);
    e.exports = {
        setNotification: function(e) {
            m.features.visibility() && (d.isPageVisible() || (a = a || o(), s = a, i(e), l.isUndefined(c) && (c = setInterval(l.bind(function() {
                return d.isPageVisible() ? void this.reset() : void r()
            }, this), 3e3))))
        },
        reset: function() {
            clearInterval(c), c = void 0, i(a), a = void 0
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(3);
    t.isPageVisible = function() {
        return "undefined" != typeof document.hidden ? !document.hidden : "undefined" != typeof document.mozHidden ? !document.mozHidden : "undefined" != typeof document.msHidden ? !document.msHidden : "undefined" != typeof document.webkitHidden ? !document.webkitHidden : !0
    }, t.onVisible = function(e) {
        var n;
        "undefined" != typeof document.hidden ? n = "visibilitychange" : "undefined" != typeof document.mozHidden ? n = "mozvisibilitychange" : "undefined" != typeof document.msHidden ? n = "msvisibilitychange" : "undefined" != typeof document.webkitHidden && (n = "webkitvisibilitychange"), i(document).on(n, function() {
            t.isPageVisible() && e()
        })
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(68);
    e.exports = {
        initialize: function(e) {
            o.onActive(i.bind(e.onUserPresent, e)), o.onInactive(i.bind(e.onUserAbsent, e))
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(77),
        r = n(6);
    e.exports = {
        save: function(e) {
            o.sessionStorage.set("state", r.stringify(i.extend(this.load() || {}, e)))
        },
        load: function() {
            try {
                return r.parse(o.sessionStorage.get("state"))
            } catch (e) {}
        },
        clear: function() {
            o.sessionStorage.remove("state")
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        o = i.Model.extend();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(4),
        r = n(5),
        a = n(86),
        s = n(59),
        c = n(76),
        l = n(83),
        u = n(52),
        m = n(148),
        d = n(259),
        p = n(49);
    e.exports = r.View.extend({
        id: "intercom-container",
        className: "intercom-container intercom-reset",
        initialize: function(e) {
            this.settings = e.settings, this.launcherView = new d({
                settings: this.settings,
                collection: this.collection,
                client: e.client
            }), this.messengerView = new m({
                client: e.client,
                nexusClient: e.nexusClient,
                settings: this.settings,
                collection: this.collection,
                app: e.app
            }), this.render = o.once(this.render), this.fetchConversations = o.once(this.fetchConversations)
        },
        render: function(e) {
            return this.$el.toggleClass("intercom-ie8", s.features.ie8()), this.renderStylesheet(), this.setPackageIdentifier(), this.renderLauncher(), this.renderMessenger(), !e && this.settings.get("user.anonymous") && this.settings.get("launcher.enabled") && this.showWelcomeMessage(), this.restoreState(), this
        },
        renderStylesheet: function() {
            this.$el.append(this.makeStylesheetElement())
        },
        renderLauncher: function() {
            this.$el.append(this.launcherView.render().$el), this.launcherView.$el.fadeIn(100)
        },
        renderMessenger: function() {
            this.$el.append(this.messengerView.render().$el)
        },
        makeStylesheetElement: function() {
            var e = a(this.settings.get("app.color"));
            return i('<style type="text/css" id="intercom-styles">' + e + "</style>")
        },
        setPackageIdentifier: function() {
            this.isUserAnonymous() && this.isInboundMessagingEnabled() ? this.$el.addClass("intercom-acquire") : !this.isInboundMessagingEnabled() && this.isOutboundMessagingEnabled() && this.$el.addClass("intercom-learn")
        },
        show: function(e) {
            return e ? void this.showConversation(e) : void this.fetchConversations().then(o.bind(function() {
                this.collection.isEmpty() && this.isInboundMessagingEnabled() ? this.showNewConversation() : this.showConversations()
            }, this))
        },
        showConversations: function() {
            this.fetchConversations().then(o.bind(function() {
                this.messengerView.showConversations(), this.launcherView.hide()
            }, this)), l.save({
                view: "conversations",
                restore: !0
            })
        },
        showConversationById: function(e) {
            var t = new u({
                id: e
            });
            this.showLoading(), t.fetch().then(o.bind(function() {
                t.set({
                    read: !0
                }), this.collection.add(t, {
                    merge: !0
                }), this.showConversation(t)
            }, this))
        },
        showConversation: function(e) {
            this.shouldShowConversationWithAdmin() && !e.lastHumanAdmin() ? this.messengerView.showConversationWithAdmin(e, this.launcherView.videoAdmin) : this.messengerView.showConversation(e), this.launcherView.hide(), this.shouldMinimize && this.minimize(), l.save({
                view: "conversation-" + e.id,
                restore: !e.isAnnouncement()
            })
        },
        showNewConversation: function(e, t) {
            this.isInboundMessagingEnabled() && (this.shouldShowConversationWithAdmin() ? this.messengerView.showNewConversationWithAdmin(e, t, this.launcherView.videoAdmin) : this.messengerView.showNewConversation(e, t), this.launcherView.hide(), this.shouldMinimize && this.minimize(), l.save({
                view: "new-conversation",
                restore: !0
            }))
        },
        showNewArticleConversation: function(e, t) {
            this.isInboundMessagingEnabled() && (this.messengerView.showNewArticleConversation(e, t), this.launcherView.hide(), this.shouldMinimize && this.minimize())
        },
        showWelcomeMessage: function() {
            this.settings.has("app.message") && this.launcherView.showWelcome(this.settings.get("app.message"))
        },
        showLoading: function() {
            this.messengerView.showLoading(), this.launcherView.hide()
        },
        shouldShowConversationWithAdmin: function() {
            return p.isEnabled("video-hovercard") && null !== this.getVideoAdmin() && this.isUserAnonymous() && !s.features.touchScreen()
        },
        autoOpenConversation: function(e) {
            this.messengerView.autoOpenConversation(e), this.launcherView.hide()
        },
        hide: function() {
            this.messengerView.hide(), this.launcherView.show(), l.clear()
        },
        minimize: function() {
            var e = this.messengerView.getCurrentConversation();
            this.messengerView.minimize(), this.launcherView.minimize(), this.launcherView.maximize(e), this.shouldMinimize = !1, l.save({
                minimized: !0,
                restore: !0
            })
        },
        maximize: function(e) {
            this.messengerView.maximize(), this.launcherView.minimize(), e && e !== this.messengerView.getCurrentConversation() && this.showConversation(e), l.save({
                minimized: !1
            })
        },
        isMinimized: function() {
            return this.messengerView.isMinimized()
        },
        isActive: function() {
            return this.messengerView.isActive()
        },
        isInboundMessagingEnabled: function() {
            return this.settings.get("app.inbound-messaging-enabled")
        },
        isOutboundMessagingEnabled: function() {
            return this.settings.get("app.outbound-messaging-enabled")
        },
        isUserAnonymous: function() {
            return this.settings.get("user.anonymous")
        },
        restoreState: function() {
            var e = l.load();
            if (e && e.view && e.restore !== !1) {
                this.shouldMinimize = e.minimized;
                var t = e.view.match(/conversation-(\d+)/);
                t ? this.showConversationById(t[1]) : "conversations" === e.view ? this.showConversations() : "new-conversation" === e.view && this.showNewConversation(), this.shouldMinimize && this.messengerView.hide()
            }
        },
        refreshActiveConversation: function(e) {
            return this.messengerView.refreshActiveConversation(e)
        },
        fetchConversations: function() {
            this.showLoading();
            var e = c.timer("fetchConversations");
            return this.collection.fetch().then(e.resolve)
        },
        getVideoAdmin: function() {
            return this.launcherView.getVideoAdmin()
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(87),
        o = n(88);
    e.exports = function(e) {
        var t = i.lighten(e, 20),
            n = i.darken(e, 20),
            r = i.darken(e, 40),
            a = o.toString();
        return a = a.replace(/custom-color-light/g, t), a = a.replace(/custom-color-darker/g, r), a = a.replace(/custom-color-dark/g, n), a = a.replace(/custom-color/g, e)
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = e.slice(1),
            n = parseInt(t, 16);
        return {
            red: n >> 16,
            green: n >> 8 & 255,
            blue: 255 & n
        }
    }

    function i(e, t, n) {
        return "#" + String("000000" + (n | t << 8 | e << 16).toString(16)).slice(-6)
    }

    function o(e, t, n) {
        return Math.min(Math.max(t, e), n)
    }
    t.lighten = function(e, t) {
        var r = n(e),
            a = o(r.red + t, 0, 255),
            s = o(r.green + t, 0, 255),
            c = o(r.blue + t, 0, 255);
        return i(a, s, c)
    }, t.darken = function(e, n) {
        return t.lighten(e, -1 * n)
    }, t.addOpacity = function(e, t) {
        var i = n(e);
        return t = o(t, 0, 1), "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")"
    }
}, function(e, t, n) {
    t = e.exports = n(89)(), t.push([e.id, "#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner,#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{background-image:url(" + n(90) + ");background-size:28px 28px;background-repeat:no-repeat;display:block;width:28px;height:28px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner,#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{background-image:url(" + n(91) + ")}}.intercom-reset a,.intercom-reset abbr,.intercom-reset acronym,.intercom-reset address,.intercom-reset applet,.intercom-reset article,.intercom-reset aside,.intercom-reset audio,.intercom-reset b,.intercom-reset big,.intercom-reset blockquote,.intercom-reset button,.intercom-reset canvas,.intercom-reset caption,.intercom-reset center,.intercom-reset cite,.intercom-reset code,.intercom-reset dd,.intercom-reset del,.intercom-reset details,.intercom-reset dfn,.intercom-reset div,.intercom-reset div.form,.intercom-reset dl,.intercom-reset dt,.intercom-reset em,.intercom-reset fieldset,.intercom-reset figcaption,.intercom-reset figure,.intercom-reset footer,.intercom-reset form,.intercom-reset h1,.intercom-reset h2,.intercom-reset h3,.intercom-reset h4,.intercom-reset h5,.intercom-reset h6,.intercom-reset header,.intercom-reset hgroup,.intercom-reset i,.intercom-reset iframe,.intercom-reset img,.intercom-reset input,.intercom-reset input[type],.intercom-reset ins,.intercom-reset kbd,.intercom-reset label,.intercom-reset legend,.intercom-reset li,.intercom-reset mark,.intercom-reset menu,.intercom-reset nav,.intercom-reset object,.intercom-reset ol,.intercom-reset p,.intercom-reset pre,.intercom-reset q,.intercom-reset s,.intercom-reset samp,.intercom-reset section,.intercom-reset small,.intercom-reset span,.intercom-reset strike,.intercom-reset strong,.intercom-reset sub,.intercom-reset summary,.intercom-reset sup,.intercom-reset table,.intercom-reset tbody,.intercom-reset td,.intercom-reset textarea,.intercom-reset tfoot,.intercom-reset th,.intercom-reset thead,.intercom-reset time,.intercom-reset tr,.intercom-reset tt,.intercom-reset u,.intercom-reset ul,.intercom-reset var,.intercom-reset video{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;-moz-text-align-last:initial;text-align-last:initial;text-decoration:none;-webkit-text-emphasis:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;alignment-adjust:auto;alignment-baseline:baseline;-webkit-animation:none 0 ease 0 1 normal;animation:none 0 ease 0 1 normal;-webkit-animation-play-state:running;animation-play-state:running;-webkit-appearance:normal;-moz-appearance:normal;appearance:normal;azimuth:center;-webkit-backface-visibility:visible;backface-visibility:visible;background:none 0 0 auto repeat scroll padding-box transparent;background-color:transparent;background-image:none;baseline-shift:baseline;binding:none;bleed:6pt;bookmark-label:content();bookmark-level:none;bookmark-state:open;bookmark-target:none;border:0 none transparent;border-radius:0;bottom:auto;box-align:stretch;-webkit-box-decoration-break:slice;box-decoration-break:slice;box-direction:normal;box-flex:0.0;box-flex-group:1;box-lines:single;box-ordinal-group:1;box-orient:inline-axis;box-pack:start;box-shadow:none;box-sizing:content-box;-webkit-column-break-after:auto;break-after:auto;-webkit-column-break-before:auto;break-before:auto;-webkit-column-break-inside:auto;break-inside:auto;caption-side:top;clear:none;clip:auto;color:inherit;color-profile:auto;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium medium #1f1f1f;-moz-column-rule:medium medium #1f1f1f;column-rule:medium medium #1f1f1f;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;-webkit-columns:auto auto;-moz-columns:auto auto;columns:auto auto;content:normal;counter-increment:none;counter-reset:none;crop:auto;cursor:auto;direction:ltr;display:inline;dominant-baseline:auto;drop-initial-after-adjust:text-after-edge;drop-initial-after-align:baseline;drop-initial-before-adjust:text-before-edge;drop-initial-before-align:caps-height;drop-initial-size:auto;drop-initial-value:initial;elevation:level;empty-cells:show;fit:fill;fit-position:0 0;float:none;float-offset:0 0;grid-columns:none;grid-rows:none;hanging-punctuation:none;height:auto;hyphenate-after:auto;hyphenate-before:auto;hyphenate-character:auto;hyphenate-lines:no-limit;hyphenate-resource:none;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual;icon:auto;image-orientation:auto;image-rendering:auto;image-resolution:normal;inline-box-align:last;left:auto;line-height:inherit;line-stacking:inline-line-height exclude-ruby consider-shifts;list-style:disc outside none;margin:0;marks:none;marquee-direction:forward;marquee-loop:1;marquee-play-count:1;marquee-speed:normal;marquee-style:scroll;max-height:none;max-width:none;min-height:0;min-width:0;move-to:normal;nav-down:auto;nav-index:auto;nav-left:auto;nav-right:auto;nav-up:auto;opacity:1;orphans:2;outline:medium none invert;outline-offset:0;overflow:visible;overflow-style:auto;padding:0;page:auto;page-break-after:auto;page-break-before:auto;page-break-inside:auto;page-policy:start;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;presentation-level:0;punctuation-trim:none;quotes:none;rendering-intent:auto;resize:none;right:auto;rotation:0;rotation-point:50% 50%;ruby-align:auto;ruby-overhang:none;ruby-position:before;ruby-span:none;size:auto;string-set:none;table-layout:auto;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;transition:all 0 ease 0;unicode-bidi:normal;vertical-align:baseline;white-space:normal;white-space-collapse:collapse;widows:2;width:auto;word-break:normal;word-spacing:normal;word-wrap:normal;z-index:auto;text-align:start;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.intercom-reset address,.intercom-reset article,.intercom-reset aside,.intercom-reset blockquote,.intercom-reset canvas,.intercom-reset center,.intercom-reset dd,.intercom-reset details,.intercom-reset dir,.intercom-reset div,.intercom-reset div.form,.intercom-reset dl,.intercom-reset dt,.intercom-reset fieldset,.intercom-reset figcaption,.intercom-reset figure,.intercom-reset footer,.intercom-reset form,.intercom-reset frame,.intercom-reset frameset,.intercom-reset h1,.intercom-reset h2,.intercom-reset h3,.intercom-reset h4,.intercom-reset h5,.intercom-reset h6,.intercom-reset header,.intercom-reset hgroup,.intercom-reset hr,.intercom-reset menu,.intercom-reset nav,.intercom-reset noframes,.intercom-reset ol,.intercom-reset p,.intercom-reset pre,.intercom-reset section,.intercom-reset summary,.intercom-reset ul{display:block}.intercom-reset li{display:list-item}.intercom-reset table{display:table}.intercom-reset tr{display:table-row}.intercom-reset thead{display:table-header-group}.intercom-reset tbody{display:table-row-group}.intercom-reset tfoot{display:table-footer-group}.intercom-reset col{display:table-column}.intercom-reset colgroup{display:table-column-group}.intercom-reset td,.intercom-reset th{display:table-cell}.intercom-reset caption{display:table-caption}.intercom-reset input,.intercom-reset select{display:inline-block}.intercom-reset b,.intercom-reset strong{font-weight:700}.intercom-reset b>em,.intercom-reset b>i,.intercom-reset em>b,.intercom-reset em>strong,.intercom-reset i>b,.intercom-reset i>strong,.intercom-reset strong>em,.intercom-reset strong>i{font-weight:700;font-style:italic}.intercom-reset input,.intercom-reset textarea{cursor:text}.intercom-reset input::-moz-selection,.intercom-reset textarea::-moz-selection{background-color:#b3d4fc}.intercom-reset input::selection,.intercom-reset textarea::selection{background-color:#b3d4fc}.intercom-reset input::-webkit-input-placeholder,.intercom-reset textarea::-webkit-input-placeholder{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;text-align-last:initial;text-decoration:none;-webkit-text-emphasis:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;background-color:inherit;color:inherit}.intercom-reset input::-moz-placeholder,.intercom-reset textarea::-moz-placeholder{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;-moz-text-align-last:initial;text-align-last:initial;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;background-color:inherit;color:inherit}.intercom-reset input:-ms-input-placeholder,.intercom-reset textarea:-ms-input-placeholder{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;text-align-last:initial;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;background-color:inherit;color:inherit}.intercom-reset input[type=checkbox],.intercom-reset input[type=radio]{cursor:default}.intercom-reset a,.intercom-reset a *,.intercom-reset a span,.intercom-reset button,.intercom-reset button *,.intercom-reset button span,.intercom-reset input[type=reset],.intercom-reset input[type=submit]{cursor:pointer}.intercom-reset a:active,.intercom-reset a:hover,.intercom-reset a:link,.intercom-reset a:visited{color:inherit;background:transparent;text-shadow:none}.intercom-reset button::-moz-focus-inner{border:0;padding:0}.intercom-reset iframe{max-width:100%}.intercom-reset code{font-family:monospace;font-size:1em}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button,#intercom-container .intercom-browser-notification-button,#intercom-container .intercom-composer-send-button,#intercom-container .intercom-conversations-new-conversation-button,#intercom-container .intercom-interbot-composer-send-button,#intercom-container .intercom-new-anonymous-user input[type=submit],#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button{box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.17);background:custom-color;background-image:linear-gradient(180deg,custom-color-light,custom-color);border-radius:3px;text-shadow:0 -1px rgba(0,0,0,.2);text-decoration:none;font-size:14px;line-height:25px;padding:0 9px;display:inline-block;color:#fff;border:1px solid custom-color-dark}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button:hover,#intercom-container .intercom-browser-notification-button:hover,#intercom-container .intercom-composer-send-button:hover,#intercom-container .intercom-conversations-new-conversation-button:hover,#intercom-container .intercom-interbot-composer-send-button:hover,#intercom-container .intercom-new-anonymous-user input[type=submit]:hover,#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button:hover{background:custom-color-dark;background-image:linear-gradient(180deg,custom-color,custom-color-dark);border-color:custom-color-darker}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button:active,#intercom-container .intercom-browser-notification-button:active,#intercom-container .intercom-composer-send-button:active,#intercom-container .intercom-conversations-new-conversation-button:active,#intercom-container .intercom-interbot-composer-send-button:active,#intercom-container .intercom-new-anonymous-user input[type=submit]:active,#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button:active{background:custom-color-darker;border-color:custom-color-darker}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button:disabled,#intercom-container .intercom-browser-notification-button:disabled,#intercom-container .intercom-composer-send-button:disabled,#intercom-container .intercom-conversations-new-conversation-button:disabled,#intercom-container .intercom-interbot-composer-send-button:disabled,#intercom-container .intercom-new-anonymous-user input[type=submit]:disabled,#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button:disabled{box-shadow:0 1px 1px 0 hsla(0,0%,100%,.11),inset 0 0 1px 1px hsla(0,0%,100%,.08);background:#acbbc2;background-image:linear-gradient(180deg,#b6c5cb,#acbbc2);border-color:#a0aeb4}#intercom-container .intercom-browser-notification-button,#intercom-container .intercom-conversations-new-conversation-button{padding:2px 12px;font-weight:400;font-size:14px;line-height:30px}body>.intercom-container{z-index:2147483000;position:fixed}.intercom-embed-container{position:relative}@media print{#intercom-container{display:none}}#intercom-container .intercom-launcher{z-index:2147483000;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:fixed;bottom:20px;right:20px;width:48px;height:48px;visibility:hidden;-webkit-transform:translateZ(0)}#intercom-container .intercom-launcher-enabled{visibility:visible}#intercom-container .intercom-launcher-inactive{visibility:hidden}#intercom-container .intercom-launcher-badge,#intercom-container .intercom-launcher-initials,#intercom-container .intercom-launcher-preview{opacity:0;visibility:hidden}#intercom-container .intercom-launcher-inactive.intercom-launcher-maximized{opacity:1;visibility:visible}#intercom-container .intercom-launcher-inactive.intercom-launcher-minimized{opacity:0}#intercom-container .intercom-launcher-active.intercom-launcher-with-preview,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-preview{width:330px}#intercom-container .intercom-launcher-active.intercom-launcher-with-badge .intercom-launcher-badge,#intercom-container .intercom-launcher-active.intercom-launcher-with-initials .intercom-launcher-initials,#intercom-container .intercom-launcher-active.intercom-launcher-with-preview .intercom-launcher-preview,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-badge .intercom-launcher-badge,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-initials .intercom-launcher-initials,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-preview .intercom-launcher-preview{opacity:1;visibility:visible}#intercom-container .intercom-launcher.intercom-launcher-with-avatar .intercom-launcher-button{border-width:0;background-size:48px 48px}#intercom-container .intercom-launcher-active.intercom-launcher-with-message .intercom-launcher-button{visibility:visible}#intercom-container .intercom-launcher-button{background-image:url(" + n(92) + ");background-size:22px 22px;background-repeat:no-repeat;border-radius:50%;position:absolute;bottom:0;right:0;width:48px;height:48px;cursor:pointer;background-position:50%;background-color:custom-color;border:1px solid custom-color-darker}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-button{background-image:url(" + n(93) + ")}}#intercom-container.intercom-acquire .intercom-launcher-button{background-image:url(" + n(94) + ");background-size:26px 25px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container.intercom-acquire .intercom-launcher-button{background-image:url(" + n(95) + ")}}#intercom-container.intercom-learn .intercom-launcher-button{background-image:url(" + n(96) + ");background-size:22px 20px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container.intercom-learn .intercom-launcher-button{background-image:url(" + n(97) + ")}}#intercom-container .intercom-launcher-maximized .intercom-launcher-button{background-image:url(" + n(98) + ");background-size:22px 22px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-maximized .intercom-launcher-button{background-image:url(" + n(99) + ')}}#intercom-container .intercom-launcher-badge{border-radius:50%;font-size:12px;line-height:18px;background-color:#ff3c00;text-align:center;color:#fff;position:absolute;width:18px;height:18px;top:0;right:-7px;cursor:pointer}#intercom-container .intercom-launcher-initials{border-radius:50%;font-size:22px;line-height:48px;color:#fff;background-color:custom-color;font-weight:700;text-align:center;cursor:pointer}#intercom-container .intercom-launcher-preview{color:#455a64;position:absolute;bottom:2px;right:60px;max-width:240px;padding:12px 14px;color:#333;border-radius:10px;background:#fff;cursor:pointer}#intercom-container .intercom-launcher-preview,#intercom-container .intercom-launcher-preview .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-preview .intercom-container,#intercom-container .intercom-launcher-preview a,#intercom-container .intercom-launcher-preview blockquote,#intercom-container .intercom-launcher-preview code,#intercom-container .intercom-launcher-preview h1,#intercom-container .intercom-launcher-preview h2,#intercom-container .intercom-launcher-preview h3,#intercom-container .intercom-launcher-preview h4,#intercom-container .intercom-launcher-preview h5,#intercom-container .intercom-launcher-preview h6,#intercom-container .intercom-launcher-preview ol,#intercom-container .intercom-launcher-preview p,#intercom-container .intercom-launcher-preview ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-launcher-preview .intercom-container:first-child,#intercom-container .intercom-launcher-preview a:first-child,#intercom-container .intercom-launcher-preview blockquote:first-child,#intercom-container .intercom-launcher-preview code:first-child,#intercom-container .intercom-launcher-preview h1:first-child,#intercom-container .intercom-launcher-preview h2:first-child,#intercom-container .intercom-launcher-preview h3:first-child,#intercom-container .intercom-launcher-preview h4:first-child,#intercom-container .intercom-launcher-preview h5:first-child,#intercom-container .intercom-launcher-preview h6:first-child,#intercom-container .intercom-launcher-preview ol:first-child,#intercom-container .intercom-launcher-preview p:first-child,#intercom-container .intercom-launcher-preview ul:first-child{margin-top:0}#intercom-container .intercom-launcher-preview .intercom-container:last-child,#intercom-container .intercom-launcher-preview a:last-child,#intercom-container .intercom-launcher-preview blockquote:last-child,#intercom-container .intercom-launcher-preview code:last-child,#intercom-container .intercom-launcher-preview h1:last-child,#intercom-container .intercom-launcher-preview h2:last-child,#intercom-container .intercom-launcher-preview h3:last-child,#intercom-container .intercom-launcher-preview h4:last-child,#intercom-container .intercom-launcher-preview h5:last-child,#intercom-container .intercom-launcher-preview h6:last-child,#intercom-container .intercom-launcher-preview ol:last-child,#intercom-container .intercom-launcher-preview p:last-child,#intercom-container .intercom-launcher-preview ul:last-child{margin-bottom:0}#intercom-container .intercom-launcher-preview h1,#intercom-container .intercom-launcher-preview h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-launcher-preview h2,#intercom-container .intercom-launcher-preview h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-launcher-preview ol,#intercom-container .intercom-launcher-preview ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-launcher-preview [dir=ltr] ol,#intercom-container .intercom-launcher-preview [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-launcher-preview [dir=rtl] ol,#intercom-container .intercom-launcher-preview [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-launcher-preview ul>li{list-style-type:disc}#intercom-container .intercom-launcher-preview ol>li{list-style-type:decimal}#intercom-container .intercom-launcher-preview li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-launcher-preview em,#intercom-container .intercom-launcher-preview i{font-style:italic}#intercom-container .intercom-launcher-preview b,#intercom-container .intercom-launcher-preview strong{font-weight:700;line-height:100%}#intercom-container .intercom-launcher-preview pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-launcher-preview img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-launcher-preview p+br{display:none}#intercom-container .intercom-launcher-preview a:active,#intercom-container .intercom-launcher-preview a:hover,#intercom-container .intercom-launcher-preview a:link,#intercom-container .intercom-launcher-preview a:visited{text-decoration:underline}#intercom-container .intercom-launcher-preview a:link,#intercom-container .intercom-launcher-preview a:visited{color:custom-color}#intercom-container .intercom-launcher-preview a:active,#intercom-container .intercom-launcher-preview a:hover{color:custom-color-darker}#intercom-container .intercom-launcher-preview h2+.ic_button_in_content,#intercom-container .intercom-launcher-preview h2+.ic_social_block,#intercom-container .intercom-launcher-preview h2+blockquote,#intercom-container .intercom-launcher-preview h2+ol,#intercom-container .intercom-launcher-preview h2+p,#intercom-container .intercom-launcher-preview h2+ul,#intercom-container .intercom-launcher-preview h3+.ic_button_in_content,#intercom-container .intercom-launcher-preview h3+.ic_social_block,#intercom-container .intercom-launcher-preview h3+blockquote,#intercom-container .intercom-launcher-preview h3+ol,#intercom-container .intercom-launcher-preview h3+p,#intercom-container .intercom-launcher-preview h3+ul,#intercom-container .intercom-launcher-preview h4+.ic_button_in_content,#intercom-container .intercom-launcher-preview h4+.ic_social_block,#intercom-container .intercom-launcher-preview h4+blockquote,#intercom-container .intercom-launcher-preview h4+ol,#intercom-container .intercom-launcher-preview h4+p,#intercom-container .intercom-launcher-preview h4+ul,#intercom-container .intercom-launcher-preview h5+.ic_button_in_content,#intercom-container .intercom-launcher-preview h5+.ic_social_block,#intercom-container .intercom-launcher-preview h5+blockquote,#intercom-container .intercom-launcher-preview h5+ol,#intercom-container .intercom-launcher-preview h5+p,#intercom-container .intercom-launcher-preview h5+ul,#intercom-container .intercom-launcher-preview h6+.ic_button_in_content,#intercom-container .intercom-launcher-preview h6+.ic_social_block,#intercom-container .intercom-launcher-preview h6+blockquote,#intercom-container .intercom-launcher-preview h6+ol,#intercom-container .intercom-launcher-preview h6+p,#intercom-container .intercom-launcher-preview h6+ul{margin-top:0}#intercom-container .intercom-launcher-preview .intercom-h2b-facebook,#intercom-container .intercom-launcher-preview .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-launcher-preview iframe[src*="vimeo.com"],#intercom-container .intercom-launcher-preview iframe[src*="wistia.net"],#intercom-container .intercom-launcher-preview iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-launcher-preview:after,#intercom-container .intercom-launcher-preview:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;border-radius:9.5px}#intercom-container .intercom-launcher-preview:before{background:hsla(0,0%,67%,.24);background-image:linear-gradient(180deg,#eee,hsla(0,0%,67%,.24));top:-1px;right:-1px;bottom:-1px;left:-1px}#intercom-container .intercom-launcher-preview:after{background-color:#fff}#intercom-container .intercom-launcher-preview:hover .intercom-launcher-preview-close{opacity:1}#intercom-container .intercom-launcher-button,#intercom-container .intercom-launcher-preview{box-shadow:0 6px 13px 0 rgba(0,0,0,.23)}#intercom-container .intercom-launcher-preview-caret:after,#intercom-container .intercom-launcher-preview-caret:before{left:100%;border:solid transparent;content:"";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-launcher-preview-caret:after{border-width:5px;margin-top:-5px;bottom:18px;border-left-color:#fff}#intercom-container .intercom-launcher-preview-caret:before{border-width:6px;margin-top:-6px;bottom:17px;border-left-color:#ddd}#intercom-container .intercom-launcher-preview-multi-line{bottom:-8px}#intercom-container .intercom-launcher-preview-multi-line .intercom-launcher-preview-caret:before{bottom:27px}#intercom-container .intercom-launcher-preview-multi-line .intercom-launcher-preview-caret:after{bottom:28px}#intercom-container .intercom-launcher-preview-body{cursor:pointer}#intercom-container .intercom-launcher-preview-body a.intercom-h2b-button,#intercom-container .intercom-launcher-preview-body div.intercom-h2b-facebook,#intercom-container .intercom-launcher-preview-body div.intercom-h2b-twitter,#intercom-container .intercom-launcher-preview-body div.intercom-h2b-video,#intercom-container .intercom-launcher-preview-body img,#intercom-container .intercom-launcher-preview-body ol,#intercom-container .intercom-launcher-preview-body ul,#intercom-container .intercom-launcher-preview-body video{display:none}#intercom-container .intercom-launcher-preview-body a,#intercom-container .intercom-launcher-preview-body b,#intercom-container .intercom-launcher-preview-body h1,#intercom-container .intercom-launcher-preview-body h2,#intercom-container .intercom-launcher-preview-body i,#intercom-container .intercom-launcher-preview-body p{word-wrap:break-word;cursor:pointer;display:inline;margin:0;font-weight:400;font-style:normal}#intercom-container .intercom-launcher-preview-body.intercom-launcher-preview-metadata{font-style:italic}#intercom-container .intercom-launcher-preview-close{background-image:url(' + n(100) + ");background-size:18px 18px;background-repeat:no-repeat;opacity:0;cursor:pointer;position:absolute;top:-9px;left:-9px;width:18px;height:18px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-preview-close{background-image:url(" + n(101) + ")}}#intercom-container .intercom-launcher-hovercard-close{cursor:pointer;position:absolute;top:-30px;right:-1px;background-color:rgba(40,45,50,.4);border-radius:40px;visibility:hidden;box-shadow:0 0 20px rgba(0,0,0,.12);padding:6px 10px 5px 22px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;color:#fff;background-position:10px;line-height:12px;background-image:url(" + n(102) + ");background-size:8px 8px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-hovercard-close{background-image:url(" + n(103) + ')}}#intercom-container .intercom-launcher-hovercard-close:hover{background-color:rgba(40,45,50,.5)}#intercom-container .intercom-launcher-hovercard-close-active{visibility:visible}@media (max-width:480px){#intercom-container .intercom-launcher-preview{max-width:200px}}#intercom-container .intercom-launcher-hovercard{display:none;cursor:pointer;position:absolute;right:-5px;bottom:64px;background-color:#fafafb;width:340px;border-radius:5px;border:1px solid rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.08)}#intercom-container .intercom-launcher-hovercard:after,#intercom-container .intercom-launcher-hovercard:before{top:100%;right:20px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-launcher-hovercard:after{border-color:rgba(250,250,251,0);border-top-color:#fafafb;border-width:8px;margin-left:-5px;right:21px}#intercom-container .intercom-launcher-hovercard:before{border-color:hsla(0,0%,80%,0);border-top-color:rgba(0,0,0,.14);border-width:9px;margin-left:-6px}#intercom-container .intercom-launcher-hovercard-welcome{background-color:#fff;border-radius:5px 5px 0 0;border-bottom:1px solid #dfe0e1;box-shadow:0 1px 1px #f0f0f1;padding:26px 20px;overflow:hidden;cursor:pointer}#intercom-container .intercom-launcher-hovercard-admins{width:115px;position:relative;float:left;height:50px;cursor:pointer;text-align:center}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar img{width:46px;height:46px}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar{line-height:46px;font-size:18.4px}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar{position:relative;display:inline-block;top:0;vertical-align:top;border:2px solid #fff;cursor:pointer;margin-left:-22px;z-index:2147483002}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar:first-child,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar:first-child{margin-left:0;z-index:2147483003}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar:last-child,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar:last-child{z-index:2147483001}#intercom-container .intercom-launcher-hovercard-text{float:right;width:174px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;cursor:pointer}#intercom-container .intercom-launcher-hovercard-app-name{font-weight:700;font-size:14px;color:#37474f;margin-bottom:7px;cursor:pointer}#intercom-container .intercom-launcher-hovercard-welcome-text{font-size:12px;color:#78909c;line-height:1.5;cursor:pointer}#intercom-container .intercom-launcher-hovercard-textarea{padding:18px 16px;font-size:16px;border-radius:0 0 5px 5px;height:42px;cursor:pointer}#intercom-container .intercom-launcher-hovercard-textarea textarea{width:100%;height:42px;box-sizing:border-box;background-color:#fff;font-weight:400;color:#455a64;resize:none;border:1px solid #cfd8dc;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;padding:10px 70px 5px 14px;border-radius:4px}#intercom-container .intercom-launcher-hovercard-textarea textarea::-webkit-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-hovercard-textarea textarea::-moz-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-hovercard-textarea textarea:-ms-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-messenger{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#intercom-container .intercom-sheet{z-index:2147483000;visibility:hidden;position:fixed;height:100%;width:368px;bottom:0;right:0}#intercom-container .intercom-sheet-active{visibility:visible}#intercom-container .intercom-sheet-header{z-index:2147483002;box-shadow:0 1px 2px 0 rgba(0,0,0,.12);background:#fff;overflow:hidden;position:absolute;top:0;right:0;width:100%;height:48px}#intercom-container .intercom-sheet-footer{z-index:2147483002;box-shadow:0 -1px 2px 0 rgba(0,0,0,.06);background:#fff;position:absolute;bottom:0;right:0;width:100%;height:48px;text-align:center;-moz-text-align-last:center;text-align-last:center}#intercom-container .intercom-sheet-body{z-index:2147483000;background:#fafafb;background:rgba(250,250,251,.98);border-left:1px solid #dadee2;box-shadow:0 0 4px 1px rgba(0,0,0,.08);position:absolute;top:0;right:0;bottom:0;width:100%}#intercom-container .intercom-sheet-active .intercom-sheet-content{overflow-y:auto}#intercom-container .intercom-sheet-content{z-index:2147483001;position:absolute;top:48px;right:0;bottom:0;width:100%;-webkit-transform:translateZ(0)}#intercom-container .intercom-sheet-content-container{box-sizing:border-box;position:relative;min-height:100%;max-width:620px;margin:0 auto}#intercom-container .intercom-sheet-header-generic-title,#intercom-container .intercom-sheet-header-title-container{z-index:2147483000;position:absolute;left:0;top:0;width:100%;height:100%;text-align:center;-moz-text-align-last:center;text-align-last:center;pointer-events:none}#intercom-container .intercom-sheet-header-generic-title,#intercom-container .intercom-sheet-header-title{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:48px;font-weight:500;color:#465c66;letter-spacing:.2px;display:inline-block;max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#intercom-container .intercom-sheet-header-generic-title.intercom-sheet-header-with-presence,#intercom-container .intercom-sheet-header-title.intercom-sheet-header-with-presence{line-height:20px;padding-top:7px}#intercom-container .intercom-sheet-header-generic-title{display:none;top:-100%;max-width:100%}#intercom-container .intercom-sheet-header-show-generic .intercom-sheet-header-generic-title{display:block;top:0}#intercom-container .intercom-sheet-header-show-generic .intercom-sheet-header-title-container{display:none;top:100%}#intercom-container .intercom-last-active{position:absolute;z-index:0;text-align:center;color:#90a4ae;font-size:12px;left:0;right:0;bottom:7px;line-height:14px}#intercom-container .intercom-sheet-header-app-name{font-weight:700}#intercom-container .intercom-sheet-header-button{z-index:2147483001;position:relative;margin:0 20px;height:48px}#intercom-container .intercom-sheet-header-button-icon{height:100%;background-position:50%}#intercom-container .intercom-sheet-header-conversations-button{float:left}#intercom-container .intercom-sheet-header-conversations-button .intercom-sheet-header-button-icon{background-image:url(' + n(104) + ");background-size:15px 12px;background-repeat:no-repeat;background-position:50%;width:18px;float:left;opacity:.4}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-sheet-header-conversations-button .intercom-sheet-header-button-icon{background-image:url(" + n(105) + ")}}#intercom-container .intercom-sheet-header-conversations-button .intercom-sheet-header-button-icon:hover{opacity:1;transition:opacity .2s linear}#intercom-container .intercom-sheet-header-close-button{float:right;margin-left:15px}#intercom-container .intercom-sheet-header-close-button .intercom-sheet-header-button-icon{background-image:url(" + n(106) + ");background-size:13px 13px;background-repeat:no-repeat;width:16px;opacity:.4}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-sheet-header-close-button .intercom-sheet-header-button-icon{background-image:url(" + n(107) + ")}}#intercom-container .intercom-sheet-header-close-button .intercom-sheet-header-button-icon:hover{opacity:1;transition:opacity .2s linear}#intercom-container .intercom-sheet-header-minimize-button{float:right;margin-right:0}#intercom-container .intercom-sheet-header-minimize-button .intercom-sheet-header-button-icon{background-image:url(" + n(108) + ");background-size:15px 15px;background-repeat:no-repeat;width:16px;opacity:.4}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-sheet-header-minimize-button .intercom-sheet-header-button-icon{background-image:url(" + n(109) + ')}}#intercom-container .intercom-sheet-header-minimize-button .intercom-sheet-header-button-icon:hover{opacity:1;transition:opacity .2s linear}#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{position:absolute;left:50%;top:50%;margin-left:-14px;margin-top:14px}#intercom-container .intercom-sheet-minimized{opacity:0;visibility:hidden}#intercom-container .intercom-sheet-maximized{width:100%}@media (max-width:460px){#intercom-container .intercom-sheet{width:100%}}@media (-ms-high-contrast:none),screen\\0{#intercom-container .intercom-sheet{width:370px}#intercom-container .intercom-sheet-maximized{width:100%}}#intercom-container .intercom-conversation-parts-container{padding:16px}#intercom-container .intercom-conversation-part{padding-bottom:16px}#intercom-container .intercom-conversation-part:after,#intercom-container .intercom-conversation-part:before{content:" ";display:table}#intercom-container .intercom-conversation-part:after{clear:both}#intercom-container .intercom-conversation-part-unread .intercom-comment-by-admin .intercom-comment-timestamp{color:#93979f}#intercom-container .intercom-conversation-part-unread .intercom-comment-by-admin .intercom-comment-readstate{border-radius:50%;background-color:custom-color;width:7px;height:7px;margin-top:6px;overflow:auto}#intercom-container .intercom-conversation-part-failed .intercom-comment-body-container{opacity:.6}#intercom-container .intercom-conversation-part-failed .intercom-comment-body,#intercom-container .intercom-conversation-part-failed .intercom-comment-state{cursor:pointer}#intercom-container .intercom-conversation-part-failed .intercom-comment-metadata{color:#c00}#intercom-container .intercom-sheet-loading .intercom-conversation-parts,#intercom-container .intercom-sheet-loading .intercom-powered-by-container{opacity:0}#intercom-container .intercom-conversation-preview{pointer-events:none}#intercom-container .intercom-conversation-preview .intercom-composer,#intercom-container .intercom-conversation-preview .intercom-sheet-body,#intercom-container .intercom-conversation-preview .intercom-sheet-header{opacity:0}#intercom-container .intercom-conversation-preview .intercom-sheet-content{overflow-y:hidden}#intercom-container .intercom-conversation-preview .intercom-small-announcement{box-shadow:0 1px 10px 0 rgba(0,0,0,.08);pointer-events:auto}#intercom-container .intercom-conversation-part-grouped,#intercom-container .intercom-conversation-part-grouped-first{padding-bottom:2px}#intercom-container .intercom-conversation-part-grouped-first .intercom-comment-metadata,#intercom-container .intercom-conversation-part-grouped-first .intercom-comment-readstate,#intercom-container .intercom-conversation-part-grouped-last .intercom-comment-avatar,#intercom-container .intercom-conversation-part-grouped-last .intercom-comment-caret,#intercom-container .intercom-conversation-part-grouped .intercom-comment-avatar,#intercom-container .intercom-conversation-part-grouped .intercom-comment-caret,#intercom-container .intercom-conversation-part-grouped .intercom-comment-metadata,#intercom-container .intercom-conversation-part-grouped .intercom-comment-readstate{display:none}#intercom-container .intercom-article-card-container{padding:16px 0 0 16px;display:none}#intercom-container .intercom-conversations-item{display:block;padding-top:17px;padding-left:17px;text-decoration:none}#intercom-container .intercom-conversations-item,#intercom-container .intercom-conversations-item *{cursor:pointer}#intercom-container .intercom-conversations-item:hover{background-color:rgba(0,0,0,.02)}#intercom-container .intercom-conversations-item-admin-avatar,#intercom-container .intercom-conversations-item-user-avatar{border-radius:50%;float:left;margin-top:5px;display:inline-block;width:42px;height:42px}#intercom-container .intercom-conversations-item-admin-avatar{color:#fff;line-height:42px;text-align:center;font-size:18px;font-weight:700}#intercom-container .intercom-conversations-item-admin-avatar-no-image{background-color:custom-color}#intercom-container .intercom-conversations-item-user-avatar{background-color:custom-color;background-image:url(' + n(110) + ");background-size:38px 34px;background-repeat:no-repeat;background-position:50%;background-size:18px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-conversations-item-user-avatar{background-image:url(" + n(111) + ")}}#intercom-container .intercom-default-admin-avatar{background-color:custom-color;font-size:13px;font-weight:700;text-align:center;color:#fff;width:28px;height:28px;line-height:28px}#intercom-container .intercom-conversations-item-body-container{margin-left:55px;padding-right:17px;border-bottom:1px solid #e7e7e7;height:80px}#intercom-container .intercom-conversations-item-header{margin-bottom:5px}#intercom-container .intercom-conversations-item-title-container{margin:0 50px 0 0}#intercom-container .intercom-conversations-item-title{color:#60686e;color:rgba(96,104,110,.8);font-size:15px;line-height:22px;font-weight:500;display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#intercom-container .intercom-conversations-item-timestamp{float:right;font-size:12px;line-height:20px;color:#aaa;width:50px;text-align:right}#intercom-container .intercom-conversations-item-summary{color:#60686e;color:rgba(96,104,110,.8);font-size:14px;font-weight:400;line-height:19px;height:40px;overflow:hidden;position:relative;padding-right:15px;word-break:break-word}#intercom-container .intercom-conversations-item-summary.intercom-conversations-item-summary-metadata{font-style:italic}#intercom-container .intercom-conversations-new-conversation-button{margin:8px;font-weight:500;padding:0 18px}#intercom-container .intercom-conversations-new-conversation-button i{background-image:url(" + n(112) + ");background-size:15px 14px;background-repeat:no-repeat;display:inline-block;width:15px;height:15px;margin:0 8px -2px 0}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-conversations-new-conversation-button i{background-image:url(" + n(113) + ")}}#intercom-container .intercom-browser-notification-button{margin:8px;font-weight:500;padding:0 18px}#intercom-container .intercom-conversations-item-unread .intercom-conversations-item-header span{color:#3d4347;font-weight:500;white-space:nowrap}#intercom-container .intercom-conversations-item-unread .intercom-conversations-item-summary{color:#3d4347}#intercom-container .intercom-conversations-item-unread .intercom-conversations-item-readstate{border-radius:50%;background-color:custom-color;width:7px;height:7px;position:absolute;bottom:27px;right:0}#intercom-container .intercom-no-conversations{position:absolute;top:50%;left:0;right:0;margin:-38px auto 0;text-align:center;color:#e4e5e7;display:none}#intercom-container .intercom-no-conversations .intercom-no-conversations-icon{background-image:url(" + n(114) + ");background-size:79px 59px;background-repeat:no-repeat;display:block;width:79px;height:59px;margin:0 auto 10px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-no-conversations .intercom-no-conversations-icon{background-image:url(" + n(115) + ")}}#intercom-container.intercom-learn .intercom-no-conversations .intercom-no-conversations-icon{height:46px;background-image:url(" + n(116) + ");background-size:79px 46px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container.intercom-learn .intercom-no-conversations .intercom-no-conversations-icon{background-image:url(" + n(117) + ')}}#intercom-container .intercom-conversations-empty .intercom-no-conversations{display:block}#intercom-container .intercom-new-message-enabled .intercom-conversations-content{bottom:48px}#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner{position:relative;left:50%;margin-left:-14px;margin-top:40px;margin-bottom:40px}#intercom-container .intercom-attachments{border-top:1px solid #e4e5e7;padding:11px 14px}#intercom-container .intercom-attachments.intercom-attachments-stand-alone{border:none}#intercom-container .intercom-attachment{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;font-size:14px}#intercom-container .intercom-comment-by-user .intercom-attachments{border-top:1px solid custom-color-dark}#intercom-container .intercom-comment{line-height:20px;position:relative;clear:both;max-width:272px}#intercom-container .intercom-comment-by-user{float:right}#intercom-container .intercom-comment-by-admin{float:left;padding-left:38px}#intercom-container .intercom-comment-is-typing-icon{display:none}#intercom-container .intercom-comment-avatar{border-radius:50%;width:28px;height:28px;position:absolute;left:0;top:9px}#intercom-container .intercom-comment-body-container{font-size:14px;font-weight:400;color:#455a64;line-height:20px;border-radius:9px;border-width:1px;border-style:solid;position:relative;max-width:100%}#intercom-container .intercom-comment-body-container .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-comment-body-container .intercom-container,#intercom-container .intercom-comment-body-container a,#intercom-container .intercom-comment-body-container blockquote,#intercom-container .intercom-comment-body-container code,#intercom-container .intercom-comment-body-container h1,#intercom-container .intercom-comment-body-container h2,#intercom-container .intercom-comment-body-container h3,#intercom-container .intercom-comment-body-container h4,#intercom-container .intercom-comment-body-container h5,#intercom-container .intercom-comment-body-container h6,#intercom-container .intercom-comment-body-container ol,#intercom-container .intercom-comment-body-container p,#intercom-container .intercom-comment-body-container ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-comment-body-container .intercom-container:first-child,#intercom-container .intercom-comment-body-container a:first-child,#intercom-container .intercom-comment-body-container blockquote:first-child,#intercom-container .intercom-comment-body-container code:first-child,#intercom-container .intercom-comment-body-container h1:first-child,#intercom-container .intercom-comment-body-container h2:first-child,#intercom-container .intercom-comment-body-container h3:first-child,#intercom-container .intercom-comment-body-container h4:first-child,#intercom-container .intercom-comment-body-container h5:first-child,#intercom-container .intercom-comment-body-container h6:first-child,#intercom-container .intercom-comment-body-container ol:first-child,#intercom-container .intercom-comment-body-container p:first-child,#intercom-container .intercom-comment-body-container ul:first-child{margin-top:0}#intercom-container .intercom-comment-body-container .intercom-container:last-child,#intercom-container .intercom-comment-body-container a:last-child,#intercom-container .intercom-comment-body-container blockquote:last-child,#intercom-container .intercom-comment-body-container code:last-child,#intercom-container .intercom-comment-body-container h1:last-child,#intercom-container .intercom-comment-body-container h2:last-child,#intercom-container .intercom-comment-body-container h3:last-child,#intercom-container .intercom-comment-body-container h4:last-child,#intercom-container .intercom-comment-body-container h5:last-child,#intercom-container .intercom-comment-body-container h6:last-child,#intercom-container .intercom-comment-body-container ol:last-child,#intercom-container .intercom-comment-body-container p:last-child,#intercom-container .intercom-comment-body-container ul:last-child{margin-bottom:0}#intercom-container .intercom-comment-body-container h1,#intercom-container .intercom-comment-body-container h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-comment-body-container h2,#intercom-container .intercom-comment-body-container h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-comment-body-container ol,#intercom-container .intercom-comment-body-container ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-comment-body-container [dir=ltr] ol,#intercom-container .intercom-comment-body-container [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-comment-body-container [dir=rtl] ol,#intercom-container .intercom-comment-body-container [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-comment-body-container ul>li{list-style-type:disc}#intercom-container .intercom-comment-body-container ol>li{list-style-type:decimal}#intercom-container .intercom-comment-body-container li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-comment-body-container em,#intercom-container .intercom-comment-body-container i{font-style:italic}#intercom-container .intercom-comment-body-container b,#intercom-container .intercom-comment-body-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-comment-body-container pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-comment-body-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-comment-body-container p+br{display:none}#intercom-container .intercom-comment-body-container a:active,#intercom-container .intercom-comment-body-container a:hover,#intercom-container .intercom-comment-body-container a:link,#intercom-container .intercom-comment-body-container a:visited{text-decoration:underline}#intercom-container .intercom-comment-body-container a:link,#intercom-container .intercom-comment-body-container a:visited{color:custom-color}#intercom-container .intercom-comment-body-container a:active,#intercom-container .intercom-comment-body-container a:hover{color:custom-color-darker}#intercom-container .intercom-comment-body-container h2+.ic_button_in_content,#intercom-container .intercom-comment-body-container h2+.ic_social_block,#intercom-container .intercom-comment-body-container h2+blockquote,#intercom-container .intercom-comment-body-container h2+ol,#intercom-container .intercom-comment-body-container h2+p,#intercom-container .intercom-comment-body-container h2+ul,#intercom-container .intercom-comment-body-container h3+.ic_button_in_content,#intercom-container .intercom-comment-body-container h3+.ic_social_block,#intercom-container .intercom-comment-body-container h3+blockquote,#intercom-container .intercom-comment-body-container h3+ol,#intercom-container .intercom-comment-body-container h3+p,#intercom-container .intercom-comment-body-container h3+ul,#intercom-container .intercom-comment-body-container h4+.ic_button_in_content,#intercom-container .intercom-comment-body-container h4+.ic_social_block,#intercom-container .intercom-comment-body-container h4+blockquote,#intercom-container .intercom-comment-body-container h4+ol,#intercom-container .intercom-comment-body-container h4+p,#intercom-container .intercom-comment-body-container h4+ul,#intercom-container .intercom-comment-body-container h5+.ic_button_in_content,#intercom-container .intercom-comment-body-container h5+.ic_social_block,#intercom-container .intercom-comment-body-container h5+blockquote,#intercom-container .intercom-comment-body-container h5+ol,#intercom-container .intercom-comment-body-container h5+p,#intercom-container .intercom-comment-body-container h5+ul,#intercom-container .intercom-comment-body-container h6+.ic_button_in_content,#intercom-container .intercom-comment-body-container h6+.ic_social_block,#intercom-container .intercom-comment-body-container h6+blockquote,#intercom-container .intercom-comment-body-container h6+ol,#intercom-container .intercom-comment-body-container h6+p,#intercom-container .intercom-comment-body-container h6+ul{margin-top:0}#intercom-container .intercom-comment-body-container .intercom-h2b-facebook,#intercom-container .intercom-comment-body-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-comment-body-container iframe[src*="vimeo.com"],#intercom-container .intercom-comment-body-container iframe[src*="wistia.net"],#intercom-container .intercom-comment-body-container iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-comment .intercom-lwr-composer{border-radius:0 0 8px 8px}#intercom-container .intercom-comment-body{padding:12px 17px}#intercom-container .intercom-comment-body p{margin:1em 0 0}#intercom-container .intercom-comment-body p:first-child{margin-top:0}#intercom-container .intercom-comment-body pre span{color:inherit!important;background-color:inherit!important;font-weight:inherit!important;word-wrap:break-word}#intercom-container .intercom-comment-metadata-container{padding:2px 2px 0}#intercom-container .intercom-comment-metadata{font-size:12px;line-height:20px;color:#b0bec5;float:left}#intercom-container .intercom-comment-by-admin .intercom-comment-metadata{margin-right:6px}#intercom-container .intercom-comment-caret:after,#intercom-container .intercom-comment-caret:before{top:19px;border:solid transparent;content:"";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-comment-caret:after{border-width:3px;margin-top:1px}#intercom-container .intercom-comment-caret:before{border-width:4px}#intercom-container .intercom-comment-by-user{text-align:right}#intercom-container .intercom-comment-by-user .intercom-comment-body-container{display:inline-block;background-color:custom-color;color:#fff}#intercom-container .intercom-comment-by-user .intercom-comment-body-container a,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:active,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:hover,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:link,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:visited{color:#fff}#intercom-container .intercom-comment-by-user .intercom-comment-metadata{float:right}#intercom-container .intercom-comment-by-user .intercom-comment-caret:after,#intercom-container .intercom-comment-by-user .intercom-comment-caret:before{left:100%}#intercom-container .intercom-comment-by-user .intercom-comment-caret:after{border-width:4px;margin-top:-1px;border-left-color:custom-color}#intercom-container .intercom-comment-by-admin .intercom-comment-body-container{box-shadow:0 1px 2px 0 rgba(234,236,238,.8);background-color:#fff;border-color:#dadee2}#intercom-container .intercom-comment-by-admin .intercom-comment-caret:after,#intercom-container .intercom-comment-by-admin .intercom-comment-caret:before{right:100%}#intercom-container .intercom-comment-by-admin .intercom-comment-caret:after{border-right-color:#fff}#intercom-container .intercom-comment-by-admin .intercom-comment-caret:before{border-right-color:#dadee2}#intercom-container .intercom-comment-by-interbot .intercom-comment-body-container{box-shadow:none;background-color:#e6eef4;border-color:#e6eef4}#intercom-container .intercom-comment-by-interbot .intercom-comment-avatar{border-radius:0}#intercom-container .intercom-comment-by-interbot .intercom-comment-caret:after,#intercom-container .intercom-comment-by-interbot .intercom-comment-caret:before{border-right-color:#e6eef4}#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container{opacity:.6}#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:active,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:hover,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:link,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:visited{text-decoration:none;cursor:default}#intercom-container .intercom-upload-comment .intercom-upload-body{padding-left:50px}#intercom-container .intercom-upload-comment .intercom-upload-body:before{content:\' \';position:absolute;left:0;top:8px;bottom:8px;width:37px;border-right:1px solid #fff;border-right:1px solid hsla(0,0%,100%,.3);background-image:url(' + n(118) + ");background-size:16px 15px;background-position:50%;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-upload-comment .intercom-upload-body:before{background-image:url(" + n(119) + ')}}#intercom-container .intercom-upload-comment.intercom-upload-image{max-width:266px}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-comment-body-container{background-color:transparent}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-comment-caret{display:none}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-upload-body{padding:0}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-upload-body:before{display:none}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-upload-body img{margin:0;border-radius:4px}#intercom-container .intercom-upload-comment .intercom-attachment-progress-bar{border-radius:4px;position:relative;display:inline-block;width:50px;height:6px;border:1px solid #ccc;vertical-align:middle;background-color:#fff;margin:0 5px}#intercom-container .intercom-upload-comment .intercom-attachment-progress-percentage{transition:width .4s;width:0;border-radius:3px;background-color:custom-color;position:absolute;top:0;left:0;bottom:0}#intercom-container .intercom-conversation-preview .intercom-comment-metadata{display:none}#intercom-container .intercom-conversation-part-component-spacer{height:8px}#intercom-container .intercom-auto-response{display:none;margin-bottom:16px;padding:16px;border-width:1px 0;border-style:solid;border-top:1px solid #e4e5e7;border-bottom:1px solid #e4e5e7;border-image:linear-gradient(90deg,#edf0f2,#e5e5e5 18%,#e5e5e5 82%,#edf0f2) 1}#intercom-container .intercom-auto-response-active{display:block}#intercom-container .intercom-auto-response p{color:#455a64;font-size:13px;color:#90a4ae;line-height:18px;text-align:center;padding:5px 0}#intercom-container .intercom-auto-response p,#intercom-container .intercom-auto-response p .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-auto-response p .intercom-container,#intercom-container .intercom-auto-response p a,#intercom-container .intercom-auto-response p blockquote,#intercom-container .intercom-auto-response p code,#intercom-container .intercom-auto-response p h1,#intercom-container .intercom-auto-response p h2,#intercom-container .intercom-auto-response p h3,#intercom-container .intercom-auto-response p h4,#intercom-container .intercom-auto-response p h5,#intercom-container .intercom-auto-response p h6,#intercom-container .intercom-auto-response p ol,#intercom-container .intercom-auto-response p p,#intercom-container .intercom-auto-response p ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-auto-response p .intercom-container:first-child,#intercom-container .intercom-auto-response p a:first-child,#intercom-container .intercom-auto-response p blockquote:first-child,#intercom-container .intercom-auto-response p code:first-child,#intercom-container .intercom-auto-response p h1:first-child,#intercom-container .intercom-auto-response p h2:first-child,#intercom-container .intercom-auto-response p h3:first-child,#intercom-container .intercom-auto-response p h4:first-child,#intercom-container .intercom-auto-response p h5:first-child,#intercom-container .intercom-auto-response p h6:first-child,#intercom-container .intercom-auto-response p ol:first-child,#intercom-container .intercom-auto-response p p:first-child,#intercom-container .intercom-auto-response p ul:first-child{margin-top:0}#intercom-container .intercom-auto-response p .intercom-container:last-child,#intercom-container .intercom-auto-response p a:last-child,#intercom-container .intercom-auto-response p blockquote:last-child,#intercom-container .intercom-auto-response p code:last-child,#intercom-container .intercom-auto-response p h1:last-child,#intercom-container .intercom-auto-response p h2:last-child,#intercom-container .intercom-auto-response p h3:last-child,#intercom-container .intercom-auto-response p h4:last-child,#intercom-container .intercom-auto-response p h5:last-child,#intercom-container .intercom-auto-response p h6:last-child,#intercom-container .intercom-auto-response p ol:last-child,#intercom-container .intercom-auto-response p p:last-child,#intercom-container .intercom-auto-response p ul:last-child{margin-bottom:0}#intercom-container .intercom-auto-response p h1,#intercom-container .intercom-auto-response p h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-auto-response p h2,#intercom-container .intercom-auto-response p h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-auto-response p ol,#intercom-container .intercom-auto-response p ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-auto-response p [dir=ltr] ol,#intercom-container .intercom-auto-response p [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-auto-response p [dir=rtl] ol,#intercom-container .intercom-auto-response p [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-auto-response p ul>li{list-style-type:disc}#intercom-container .intercom-auto-response p ol>li{list-style-type:decimal}#intercom-container .intercom-auto-response p li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-auto-response p em,#intercom-container .intercom-auto-response p i{font-style:italic}#intercom-container .intercom-auto-response p b,#intercom-container .intercom-auto-response p strong{font-weight:700;line-height:100%}#intercom-container .intercom-auto-response p pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-auto-response p img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-auto-response p p+br{display:none}#intercom-container .intercom-auto-response p a:active,#intercom-container .intercom-auto-response p a:hover,#intercom-container .intercom-auto-response p a:link,#intercom-container .intercom-auto-response p a:visited{text-decoration:underline}#intercom-container .intercom-auto-response p a:link,#intercom-container .intercom-auto-response p a:visited{color:custom-color}#intercom-container .intercom-auto-response p a:active,#intercom-container .intercom-auto-response p a:hover{color:custom-color-darker}#intercom-container .intercom-auto-response p h2+.ic_button_in_content,#intercom-container .intercom-auto-response p h2+.ic_social_block,#intercom-container .intercom-auto-response p h2+blockquote,#intercom-container .intercom-auto-response p h2+ol,#intercom-container .intercom-auto-response p h2+p,#intercom-container .intercom-auto-response p h2+ul,#intercom-container .intercom-auto-response p h3+.ic_button_in_content,#intercom-container .intercom-auto-response p h3+.ic_social_block,#intercom-container .intercom-auto-response p h3+blockquote,#intercom-container .intercom-auto-response p h3+ol,#intercom-container .intercom-auto-response p h3+p,#intercom-container .intercom-auto-response p h3+ul,#intercom-container .intercom-auto-response p h4+.ic_button_in_content,#intercom-container .intercom-auto-response p h4+.ic_social_block,#intercom-container .intercom-auto-response p h4+blockquote,#intercom-container .intercom-auto-response p h4+ol,#intercom-container .intercom-auto-response p h4+p,#intercom-container .intercom-auto-response p h4+ul,#intercom-container .intercom-auto-response p h5+.ic_button_in_content,#intercom-container .intercom-auto-response p h5+.ic_social_block,#intercom-container .intercom-auto-response p h5+blockquote,#intercom-container .intercom-auto-response p h5+ol,#intercom-container .intercom-auto-response p h5+p,#intercom-container .intercom-auto-response p h5+ul,#intercom-container .intercom-auto-response p h6+.ic_button_in_content,#intercom-container .intercom-auto-response p h6+.ic_social_block,#intercom-container .intercom-auto-response p h6+blockquote,#intercom-container .intercom-auto-response p h6+ol,#intercom-container .intercom-auto-response p h6+p,#intercom-container .intercom-auto-response p h6+ul{margin-top:0}#intercom-container .intercom-auto-response p .intercom-h2b-facebook,#intercom-container .intercom-auto-response p .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-auto-response p iframe[src*="vimeo.com"],#intercom-container .intercom-auto-response p iframe[src*="wistia.net"],#intercom-container .intercom-auto-response p iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-auto-response p a:active,#intercom-container .intercom-auto-response p a:hover,#intercom-container .intercom-auto-response p a:link,#intercom-container .intercom-auto-response p a:visited{color:#90a4ae}#intercom-container .intercom-announcement{overflow:hidden}#intercom-container .intercom-announcement-body-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.07);font-size:16px;font-weight:400;color:#455a64;line-height:23px;border-radius:5px;border:1px solid #e4e4e4;background-color:#fff}#intercom-container .intercom-announcement-body-container .intercom-comment-body{font-size:16px;font-weight:400;line-height:23px}#intercom-container .intercom-announcement-body-container .intercom-container,#intercom-container .intercom-announcement-body-container a,#intercom-container .intercom-announcement-body-container blockquote,#intercom-container .intercom-announcement-body-container code,#intercom-container .intercom-announcement-body-container h1,#intercom-container .intercom-announcement-body-container h2,#intercom-container .intercom-announcement-body-container h3,#intercom-container .intercom-announcement-body-container h4,#intercom-container .intercom-announcement-body-container h5,#intercom-container .intercom-announcement-body-container h6,#intercom-container .intercom-announcement-body-container ol,#intercom-container .intercom-announcement-body-container p,#intercom-container .intercom-announcement-body-container ul{font-size:16px;font-weight:400;line-height:23px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-announcement-body-container .intercom-container:first-child,#intercom-container .intercom-announcement-body-container a:first-child,#intercom-container .intercom-announcement-body-container blockquote:first-child,#intercom-container .intercom-announcement-body-container code:first-child,#intercom-container .intercom-announcement-body-container h1:first-child,#intercom-container .intercom-announcement-body-container h2:first-child,#intercom-container .intercom-announcement-body-container h3:first-child,#intercom-container .intercom-announcement-body-container h4:first-child,#intercom-container .intercom-announcement-body-container h5:first-child,#intercom-container .intercom-announcement-body-container h6:first-child,#intercom-container .intercom-announcement-body-container ol:first-child,#intercom-container .intercom-announcement-body-container p:first-child,#intercom-container .intercom-announcement-body-container ul:first-child{margin-top:0}#intercom-container .intercom-announcement-body-container .intercom-container:last-child,#intercom-container .intercom-announcement-body-container a:last-child,#intercom-container .intercom-announcement-body-container blockquote:last-child,#intercom-container .intercom-announcement-body-container code:last-child,#intercom-container .intercom-announcement-body-container h1:last-child,#intercom-container .intercom-announcement-body-container h2:last-child,#intercom-container .intercom-announcement-body-container h3:last-child,#intercom-container .intercom-announcement-body-container h4:last-child,#intercom-container .intercom-announcement-body-container h5:last-child,#intercom-container .intercom-announcement-body-container h6:last-child,#intercom-container .intercom-announcement-body-container ol:last-child,#intercom-container .intercom-announcement-body-container p:last-child,#intercom-container .intercom-announcement-body-container ul:last-child{margin-bottom:0}#intercom-container .intercom-announcement-body-container h1,#intercom-container .intercom-announcement-body-container h1 a{font-size:37px;font-weight:300;line-height:48px;letter-spacing:.35px;margin:27px 0;color:custom-color}#intercom-container .intercom-announcement-body-container h1:first-child{text-align:center;-moz-text-align-last:center;text-align-last:center}#intercom-container .intercom-announcement-body-container h2,#intercom-container .intercom-announcement-body-container h2 a{font-size:18px;line-height:27px;font-weight:400;margin:20px 0 10px;color:custom-color}#intercom-container .intercom-announcement-body-container ol,#intercom-container .intercom-announcement-body-container ul{font-size:16px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:40px}#intercom-container .intercom-announcement-body-container [dir=ltr] ol,#intercom-container .intercom-announcement-body-container [dir=ltr] ul{padding-left:40px}#intercom-container .intercom-announcement-body-container [dir=rtl] ol,#intercom-container .intercom-announcement-body-container [dir=rtl] ul{padding-right:40px}#intercom-container .intercom-announcement-body-container ul>li{list-style-type:disc}#intercom-container .intercom-announcement-body-container ol>li{list-style-type:decimal}#intercom-container .intercom-announcement-body-container li{display:list-item;line-height:26px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-announcement-body-container em,#intercom-container .intercom-announcement-body-container i{font-style:italic}#intercom-container .intercom-announcement-body-container b,#intercom-container .intercom-announcement-body-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-announcement-body-container pre{font-size:16px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-announcement-body-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-announcement-body-container p+br{display:none}#intercom-container .intercom-announcement-body-container a:active,#intercom-container .intercom-announcement-body-container a:hover,#intercom-container .intercom-announcement-body-container a:link,#intercom-container .intercom-announcement-body-container a:visited{text-decoration:underline}#intercom-container .intercom-announcement-body-container a:link,#intercom-container .intercom-announcement-body-container a:visited{color:custom-color}#intercom-container .intercom-announcement-body-container a:active,#intercom-container .intercom-announcement-body-container a:hover{color:custom-color-darker}#intercom-container .intercom-announcement-body-container h2+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h2+.ic_social_block,#intercom-container .intercom-announcement-body-container h2+blockquote,#intercom-container .intercom-announcement-body-container h2+ol,#intercom-container .intercom-announcement-body-container h2+p,#intercom-container .intercom-announcement-body-container h2+ul,#intercom-container .intercom-announcement-body-container h3+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h3+.ic_social_block,#intercom-container .intercom-announcement-body-container h3+blockquote,#intercom-container .intercom-announcement-body-container h3+ol,#intercom-container .intercom-announcement-body-container h3+p,#intercom-container .intercom-announcement-body-container h3+ul,#intercom-container .intercom-announcement-body-container h4+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h4+.ic_social_block,#intercom-container .intercom-announcement-body-container h4+blockquote,#intercom-container .intercom-announcement-body-container h4+ol,#intercom-container .intercom-announcement-body-container h4+p,#intercom-container .intercom-announcement-body-container h4+ul,#intercom-container .intercom-announcement-body-container h5+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h5+.ic_social_block,#intercom-container .intercom-announcement-body-container h5+blockquote,#intercom-container .intercom-announcement-body-container h5+ol,#intercom-container .intercom-announcement-body-container h5+p,#intercom-container .intercom-announcement-body-container h5+ul,#intercom-container .intercom-announcement-body-container h6+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h6+.ic_social_block,#intercom-container .intercom-announcement-body-container h6+blockquote,#intercom-container .intercom-announcement-body-container h6+ol,#intercom-container .intercom-announcement-body-container h6+p,#intercom-container .intercom-announcement-body-container h6+ul{margin-top:0}#intercom-container .intercom-announcement-body-container .intercom-h2b-facebook,#intercom-container .intercom-announcement-body-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-announcement-body-container iframe[src*="vimeo.com"],#intercom-container .intercom-announcement-body-container iframe[src*="wistia.net"],#intercom-container .intercom-announcement-body-container iframe[src*="youtube.com"]{width:100%;height:272px;margin:20px auto}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button{text-decoration:none;padding:6px 18px;font-weight:500;display:table;margin:40px auto;font-size:15px;line-height:31px;color:#fff}#intercom-container .intercom-announcement-body-container .intercom-align-right{text-align:right!important}#intercom-container .intercom-announcement-body-container .intercom-align-right .intercom-h2b-button,#intercom-container .intercom-announcement-body-container .intercom-align-right img{margin-right:0!important}#intercom-container .intercom-announcement-body-container .intercom-align-center{text-align:center!important}#intercom-container .intercom-announcement-body-container .intercom-align-left{text-align:left!important}#intercom-container .intercom-announcement-body-container .intercom-align-left .intercom-h2b-button,#intercom-container .intercom-announcement-body-container .intercom-align-left img{margin-left:0!important}#intercom-container .intercom-announcement-body-container img{margin:10px auto}#intercom-container .intercom-announcement .intercom-lwr-composer{border-radius:0 0 5px 5px}#intercom-container .intercom-announcement-avatar-container{height:30px}#intercom-container .intercom-announcement-avatar{box-shadow:0 1px 2px rgba(0,0,0,.2);border-radius:50%;border:3px solid #fff;position:absolute;width:60px;height:60px;left:50%;margin-left:-30px}#intercom-container .intercom-announcement-body{padding:50px}#intercom-container .intercom-conversation-announcement .intercom-comment{max-width:400px}#intercom-container .intercom-small-announcement{z-index:2147483000;overflow:hidden}#intercom-container .intercom-small-announcement-body-container{box-shadow:0 1px 1px 0 rgba(0,0,0,.04);font-size:15px;font-weight:400;color:#455a64;line-height:23px;border:1px solid #e4e4e4;border-radius:5px;background-color:#fff;position:relative}#intercom-container .intercom-small-announcement-body-container .intercom-comment-body{font-size:15px;font-weight:400;line-height:23px}#intercom-container .intercom-small-announcement-body-container .intercom-container,#intercom-container .intercom-small-announcement-body-container a,#intercom-container .intercom-small-announcement-body-container blockquote,#intercom-container .intercom-small-announcement-body-container code,#intercom-container .intercom-small-announcement-body-container h1,#intercom-container .intercom-small-announcement-body-container h2,#intercom-container .intercom-small-announcement-body-container h3,#intercom-container .intercom-small-announcement-body-container h4,#intercom-container .intercom-small-announcement-body-container h5,#intercom-container .intercom-small-announcement-body-container h6,#intercom-container .intercom-small-announcement-body-container ol,#intercom-container .intercom-small-announcement-body-container p,#intercom-container .intercom-small-announcement-body-container ul{font-size:15px;font-weight:400;line-height:23px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-small-announcement-body-container .intercom-container:first-child,#intercom-container .intercom-small-announcement-body-container a:first-child,#intercom-container .intercom-small-announcement-body-container blockquote:first-child,#intercom-container .intercom-small-announcement-body-container code:first-child,#intercom-container .intercom-small-announcement-body-container h1:first-child,#intercom-container .intercom-small-announcement-body-container h2:first-child,#intercom-container .intercom-small-announcement-body-container h3:first-child,#intercom-container .intercom-small-announcement-body-container h4:first-child,#intercom-container .intercom-small-announcement-body-container h5:first-child,#intercom-container .intercom-small-announcement-body-container h6:first-child,#intercom-container .intercom-small-announcement-body-container ol:first-child,#intercom-container .intercom-small-announcement-body-container p:first-child,#intercom-container .intercom-small-announcement-body-container ul:first-child{margin-top:0}#intercom-container .intercom-small-announcement-body-container .intercom-container:last-child,#intercom-container .intercom-small-announcement-body-container a:last-child,#intercom-container .intercom-small-announcement-body-container blockquote:last-child,#intercom-container .intercom-small-announcement-body-container code:last-child,#intercom-container .intercom-small-announcement-body-container h1:last-child,#intercom-container .intercom-small-announcement-body-container h2:last-child,#intercom-container .intercom-small-announcement-body-container h3:last-child,#intercom-container .intercom-small-announcement-body-container h4:last-child,#intercom-container .intercom-small-announcement-body-container h5:last-child,#intercom-container .intercom-small-announcement-body-container h6:last-child,#intercom-container .intercom-small-announcement-body-container ol:last-child,#intercom-container .intercom-small-announcement-body-container p:last-child,#intercom-container .intercom-small-announcement-body-container ul:last-child{margin-bottom:0}#intercom-container .intercom-small-announcement-body-container h1,#intercom-container .intercom-small-announcement-body-container h1 a{font-size:22px;font-weight:300;line-height:28px;letter-spacing:.3px;margin:27px 0;color:custom-color}#intercom-container .intercom-small-announcement-body-container h1:first-child{text-align:center;-moz-text-align-last:center;text-align-last:center}#intercom-container .intercom-small-announcement-body-container h2,#intercom-container .intercom-small-announcement-body-container h2 a{font-size:15px;line-height:24px;font-weight:700;margin:20px 0 10px;color:#455a64}#intercom-container .intercom-small-announcement-body-container ol,#intercom-container .intercom-small-announcement-body-container ul{font-size:15px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-small-announcement-body-container [dir=ltr] ol,#intercom-container .intercom-small-announcement-body-container [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-small-announcement-body-container [dir=rtl] ol,#intercom-container .intercom-small-announcement-body-container [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-small-announcement-body-container ul>li{list-style-type:disc}#intercom-container .intercom-small-announcement-body-container ol>li{list-style-type:decimal}#intercom-container .intercom-small-announcement-body-container li{display:list-item;line-height:22px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-small-announcement-body-container em,#intercom-container .intercom-small-announcement-body-container i{font-style:italic}#intercom-container .intercom-small-announcement-body-container b,#intercom-container .intercom-small-announcement-body-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-small-announcement-body-container pre{font-size:15px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-small-announcement-body-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-small-announcement-body-container p+br{display:none}#intercom-container .intercom-small-announcement-body-container a:active,#intercom-container .intercom-small-announcement-body-container a:hover,#intercom-container .intercom-small-announcement-body-container a:link,#intercom-container .intercom-small-announcement-body-container a:visited{text-decoration:underline}#intercom-container .intercom-small-announcement-body-container a:link,#intercom-container .intercom-small-announcement-body-container a:visited{color:custom-color}#intercom-container .intercom-small-announcement-body-container a:active,#intercom-container .intercom-small-announcement-body-container a:hover{color:custom-color-darker}#intercom-container .intercom-small-announcement-body-container h2+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h2+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h2+blockquote,#intercom-container .intercom-small-announcement-body-container h2+ol,#intercom-container .intercom-small-announcement-body-container h2+p,#intercom-container .intercom-small-announcement-body-container h2+ul,#intercom-container .intercom-small-announcement-body-container h3+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h3+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h3+blockquote,#intercom-container .intercom-small-announcement-body-container h3+ol,#intercom-container .intercom-small-announcement-body-container h3+p,#intercom-container .intercom-small-announcement-body-container h3+ul,#intercom-container .intercom-small-announcement-body-container h4+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h4+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h4+blockquote,#intercom-container .intercom-small-announcement-body-container h4+ol,#intercom-container .intercom-small-announcement-body-container h4+p,#intercom-container .intercom-small-announcement-body-container h4+ul,#intercom-container .intercom-small-announcement-body-container h5+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h5+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h5+blockquote,#intercom-container .intercom-small-announcement-body-container h5+ol,#intercom-container .intercom-small-announcement-body-container h5+p,#intercom-container .intercom-small-announcement-body-container h5+ul,#intercom-container .intercom-small-announcement-body-container h6+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h6+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h6+blockquote,#intercom-container .intercom-small-announcement-body-container h6+ol,#intercom-container .intercom-small-announcement-body-container h6+p,#intercom-container .intercom-small-announcement-body-container h6+ul{margin-top:0}#intercom-container .intercom-small-announcement-body-container .intercom-h2b-facebook,#intercom-container .intercom-small-announcement-body-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-small-announcement-body-container iframe[src*="vimeo.com"],#intercom-container .intercom-small-announcement-body-container iframe[src*="wistia.net"],#intercom-container .intercom-small-announcement-body-container iframe[src*="youtube.com"]{width:100%;height:162px;margin:20px auto}#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button{text-decoration:none;padding:6px 18px;font-weight:500;display:table;margin:20px auto;font-size:15px;line-height:31px;color:#fff}#intercom-container .intercom-small-announcement-body-container .intercom-align-right{text-align:right!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-right .intercom-h2b-button,#intercom-container .intercom-small-announcement-body-container .intercom-align-right img{margin-right:0!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-center{text-align:center!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-left{text-align:left!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-left .intercom-h2b-button,#intercom-container .intercom-small-announcement-body-container .intercom-align-left img{margin-left:0!important}#intercom-container .intercom-small-announcement-body-container img{margin:10px auto}#intercom-container .intercom-small-announcement .intercom-lwr-composer{border-radius:0 0 5px 5px}#intercom-container .intercom-small-announcement-avatar-container{height:20px}#intercom-container .intercom-small-announcement-avatar{z-index:2147483001;box-shadow:0 1px 2px rgba(0,0,0,.2);border-radius:50%;border:2px solid #fff;position:absolute;width:40px;height:40px;left:50%;margin-left:-22px}#intercom-container .intercom-small-announcement-body{padding:26px 23px}#intercom-container .intercom-conversation-preview .intercom-small-announcement-body-container{box-shadow:0 1px 10px 0 rgba(0,0,0,.08);max-height:320px}#intercom-container .intercom-conversation-preview .intercom-small-announcement-body-container:after{z-index:2147483002;background:linear-gradient(hsla(0,0%,100%,0),#fff 47px);border-radius:0 0 5px 5px;content:"";position:absolute;top:240px;height:81px;width:100%}#intercom-container .intercom-new-anonymous-user-disabled{opacity:.5}#intercom-container .intercom-new-anonymous-user-input-container{position:relative;margin:0 auto;padding:5px 0;width:240px}#intercom-container .intercom-browser-notifications-button-container{margin:0 auto;text-align:center}#intercom-container .intercom-new-anonymous-user,#intercom-container .intercom-new-anonymous-user p{-webkit-transform:translateZ(0);transform:translateZ(0)}#intercom-container .intercom-new-anonymous-user input[type=email]{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:32px;color:#60686e;height:34px;width:100%;padding:0 42px 0 8px;border:1px solid #e4e5e7;border-radius:2px;background-color:#fff}#intercom-container .intercom-new-anonymous-user input[type=email]::-webkit-input-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:32px}#intercom-container .intercom-new-anonymous-user input[type=email]::-moz-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:32px}#intercom-container .intercom-new-anonymous-user input[type=email]:-ms-input-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:32px}#intercom-container .intercom-new-anonymous-user input[type=email].intercom-new-anonymous-user-email-invalid{border-color:#d76060;background-color:#fcedee}#intercom-container .intercom-new-anonymous-user input[type=submit]{background:custom-color;background-image:url(' + n(120) + "),linear-gradient(180deg,custom-color-light,custom-color);background-repeat:no-repeat;background-position:50%;position:absolute;padding:0;margin:0;top:9px;right:4px;width:34px;height:24px}#intercom-container .intercom-new-anonymous-user input[type=submit]:hover{background:custom-color-dark;background-image:url(" + n(120) + "),linear-gradient(180deg,custom-color,custom-color-dark);background-repeat:no-repeat;background-position:50%}#intercom-container .intercom-new-anonymous-user input[type=submit]:disabled{background:#acbbc2;background-image:url(" + n(120) + '),linear-gradient(180deg,#b6c5cb,#acbbc2);background-repeat:no-repeat;background-position:50%}#intercom-container .intercom-composer{z-index:2147483001;position:absolute;bottom:0;left:0;right:0;max-width:336px;margin:0 auto;padding:16px}#intercom-container .intercom-composer.intercom-composer-inactive{display:none}#intercom-container .intercom-powered-by-enabled .intercom-composer{padding:8px 6px 0}#intercom-container .intercom-conversation-announcement .intercom-composer{width:616px;max-width:616px}#intercom-container .intercom-composer-upload-error{display:none;padding-bottom:10px;text-align:center;color:#c00;font-size:13px}#intercom-container .intercom-composer-textarea-container{min-height:32px}#intercom-container .intercom-composer-disabled .intercom-composer-textarea-container{opacity:.5}#intercom-container .intercom-composer-textarea{position:relative;overflow:hidden;border-radius:4px;border:1px solid #cfd8dc}#intercom-container .intercom-composer-textarea pre,#intercom-container .intercom-composer-textarea textarea{box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;min-height:40px;max-height:200px;width:100%;height:100%;padding:10px 70px 5px 14px;border-radius:4px}#intercom-container .intercom-composer-textarea textarea{background:#fff;position:absolute;top:0;left:0;font-weight:400;color:#455a64;resize:none;border:none}#intercom-container .intercom-composer-textarea textarea::-webkit-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-composer-textarea textarea::-moz-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-composer-textarea textarea:-ms-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-composer-textarea textarea:active,#intercom-container .intercom-composer-textarea textarea:focus{box-shadow:inset 0 2px 1px rgba(0,0,0,.06)}#intercom-container .intercom-composer-textarea pre>span,#intercom-container .intercom-composer-textarea textarea{white-space:pre;white-space:pre-wrap;word-wrap:break-word}#intercom-container .intercom-composer-textarea pre{margin:0}#intercom-container .intercom-composer-textarea pre>span{visibility:hidden}#intercom-container .intercom-composer-textarea.intercom-composer-focused{border-color:#74beff;box-shadow:0 0 4px 0 rgba(75,171,255,.38)}#intercom-container .intercom-composer-send-button{border-radius:4px;font-size:13px;margin-left:8px;height:40px;float:right;display:none}#intercom-container .intercom-composer-action-button{z-index:2147483001;opacity:.4;background-position:50%;display:none;height:15px;width:15px;position:relative;float:right;cursor:pointer;top:7px;margin:0 2px 0 0;padding:5px}#intercom-container .intercom-composer-action-button:first-child{margin-right:12px}#intercom-container .intercom-composer-action-button.intercom-composer-emoji-button-active,#intercom-container .intercom-composer-action-button:hover{opacity:.8;transition:opacity .2s linear}#intercom-container .intercom-composer-upload-button{background-image:url(' + n(121) + ");background-size:15px 14px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-composer-upload-button{background-image:url(" + n(122) + ")}}#intercom-container .intercom-composer-emoji-button{z-index:2147483001;opacity:.4;background-image:url(" + n(123) + ");background-size:15px 15px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-composer-emoji-button{background-image:url(" + n(124) + ')}}#intercom-container .intercom-conversation-announcement .intercom-composer{border:1px solid #dadee2;border-bottom:none;border-radius:4px 4px 0 0}#intercom-container .intercom-composer-press-enter-to-send{display:none;text-align:right;width:100%;box-sizing:border-box;line-height:22px;color:#b6c2c9;font-size:13px}#intercom-container .intercom-powered-by-enabled .intercom-composer-press-enter-to-send{position:absolute;padding-bottom:2px;bottom:0;left:8px;right:8px;width:auto}@media (max-width:700px){#intercom-container .intercom-conversation-announcement .intercom-composer{box-sizing:border-box;width:100%;border:none;border-radius:0}}#intercom-container.intercom-embed-container .intercom-composer{box-sizing:border-box;width:100%}#intercom-container.intercom-embed-container .intercom-conversation-announcement .intercom-composer{width:95%}#intercom-container .intercom-emoji-selector{z-index:2147483001;box-shadow:0 0 3px 1px rgba(0,0,0,.1);background-color:#fff;border-radius:3px;border:1px solid #d0d4d8;position:absolute;bottom:calc(100% - 13px);right:10px;margin:0 0 16px;display:none;font-size:22px}#intercom-container .intercom-emoji-selector:after,#intercom-container .intercom-emoji-selector:before{top:100%;right:26px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-emoji-selector:after{border-color:hsla(0,0%,94%,0);border-top-color:#fff;border-width:7px;margin-right:-12px}#intercom-container .intercom-emoji-selector:before{border-color:hsla(0,0%,67%,0);border-top-color:#aaa;border-width:8px;margin-right:-13px}#intercom-container .intercom-emoji-selector-panel-small{background-color:#fff;width:144px;line-height:0;bottom:0;border-radius:3px}#intercom-container .intercom-emoji-selector-panel-small .intercom-emoji-image{background-image:url(' + n(125) + ");background-size:464px 464px;background-repeat:no-repeat;border-radius:3px;border:10px solid;color:#fff;background-color:#fff;border-color:#fff;cursor:pointer}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-emoji-selector-panel-small .intercom-emoji-image{background-image:url(" + n(126) + ')}}#intercom-container .intercom-emoji-selector-panel-small .intercom-emoji-image:hover{background-color:#ededed;border-color:#ededed;color:#ededed}#intercom-container .intercom-emoji-selector-panel-large{box-shadow:0 -1px 3px 0 rgba(0,0,0,.1);background-color:#fff;height:220px;width:322px;overflow-y:auto;display:none;border-radius:0 0 3px 3px}#intercom-container .intercom-emoji-selector-panel-large.active{display:block}#intercom-container .intercom-emoji-selector-panel-large .intercom-emoji-icon{color:#60686e;margin:5px;width:30px;line-height:30px;display:inline-table;text-align:center;cursor:pointer}#intercom-container .intercom-emoji-selector-panel-large .intercom-emoji-icon:hover{background-color:#ededed}#intercom-container .intercom-large-emoji-panel-top-mask{background:linear-gradient(#fff,hsla(0,0%,100%,0) 20px);height:20px;width:100%;position:absolute;top:35px;left:0;content:"";pointer-events:none;display:none}#intercom-container .intercom-large-emoji-panel-bottom-mask{background:linear-gradient(hsla(0,0%,100%,0),#fff 20px);height:20px;width:100%;position:absolute;bottom:0;left:0;content:"";border-radius:0 0 3px 3px;pointer-events:none;display:block}#intercom-container .intercom-emoji-selector-panel-header{background-color:#fafafb;height:35px;width:322px;text-align:center;border-radius:3px}#intercom-container .intercom-emoji-selector-panel-header .intercom-emoji-group-icon{z-index:2147483001;position:relative;color:#60686e;line-height:30px;width:45px;margin-top:5px;text-align:center;display:inline-block;border-radius:3px 3px 0 0;cursor:pointer}#intercom-container .intercom-emoji-selector-panel-header .intercom-emoji-group-icon:hover{background-color:#ededed}#intercom-container .intercom-emoji-selector-panel-header .intercom-emoji-group-icon.active{z-index:2147483002;background-color:#fff;box-shadow:0 -1px 3px 0 rgba(0,0,0,.1);border-bottom:none}#intercom-container .intercom-lwr-composer{width:100%;height:54px;border-top:1px solid #e4e5e7;display:none;overflow:hidden;min-width:120px}#intercom-container .intercom-lwr-composer-active{display:block}#intercom-container .intercom-lwr-composer-options:after,#intercom-container .intercom-lwr-composer-options:before{content:" ";display:table}#intercom-container .intercom-lwr-composer-options:after{clear:both}#intercom-container .intercom-lwr-composer-option{background-color:#fdfdfd;position:relative;float:left;height:54px}#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option,#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option svg{cursor:pointer}#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option:hover{background-color:#f7f7f7}#intercom-container .intercom-lwr-composer-option svg{position:absolute;left:50%;top:50%;width:16px;height:16px;margin-left:-8px;margin-top:-8px;background-color:transparent;shape-rendering:geometricPrecision}#intercom-container .intercom-lwr-composer-options-thumbs .intercom-lwr-composer-option{width:50%}#intercom-container .intercom-lwr-composer-options-emotions .intercom-lwr-composer-option{width:33.33%}#intercom-container .intercom-lwr-composer-option-selected .intercom-lwr-composer-icon{fill:custom-color}#intercom-container .intercom-lwr-composer-option .intercom-lwr-option-background{fill:#fdfdfd}#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option:hover .intercom-lwr-option-background{fill:#f7f7f7}#intercom-container .intercom-powered-by{width:100%;color:#b0bec5;text-align:center;clear:both;font-weight:500;line-height:22px;padding:7px}#intercom-container .intercom-powered-by span{font-size:13px;text-decoration:none}#intercom-container .intercom-powered-by u{text-decoration:underline}#intercom-container .intercom-powered-by a:active,#intercom-container .intercom-powered-by a:active u,#intercom-container .intercom-powered-by a:hover,#intercom-container .intercom-powered-by a:hover u{color:#b0bec5}#intercom-container .intercom-upload-remove{background-image:url(' + n(127) + ");background-size:14px 14px;background-repeat:no-repeat;opacity:.8;display:inline-block;vertical-align:middle;cursor:pointer;width:14px;height:14px;right:-22px;top:2px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-upload-remove{background-image:url(" + n(128) + ')}}#intercom-container .intercom-upload-remove:hover{opacity:1}#intercom-container .intercom-unread-counter{border-radius:50%;border:2px solid #fff;font-size:11px;line-height:16px;background-color:custom-color;text-align:center;color:#fff;position:absolute;width:16px;height:16px;top:11px;left:11px;cursor:pointer;display:none}#intercom-container .intercom-unread-counter.intercom-unread-counter-active{display:block}#intercom-container .intercom-is-typing:after,#intercom-container .intercom-is-typing:before{content:" ";display:table}#intercom-container .intercom-is-typing:after{clear:both}#intercom-container .intercom-is-typing-icon{background-image:url(' + n(129) + ");background-size:38px 18px;background-repeat:no-repeat;height:18px;cursor:default}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-is-typing-icon{background-image:url(" + n(130) + ")}}#intercom-container .intercom-is-typing .intercom-comment-body{min-width:38px;padding-left:12px}#intercom-container.intercom-ie8 .intercom-sheet-content{clip:rect(-9999px,9999px,9999px,-9999px)}#intercom-container.intercom-ie8 .intercom-conversation,#intercom-container.intercom-ie8 .intercom-conversations,#intercom-container.intercom-ie8 .intercom-sheet-loading{border-left:1px solid #dadee2}#intercom-container.intercom-ie8 .intercom-app-profile,#intercom-container.intercom-ie8 .intercom-sheet-header{border-bottom:1px solid #dadee2}#intercom-container.intercom-ie8 .intercom-composer,#intercom-container.intercom-ie8 .intercom-sheet-footer{border-top:1px solid #dadee2}#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-button-with-avatar,#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-notification .intercom-launcher-button-with-avatar{display:none}#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-button-without-avatar,#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-notification .intercom-launcher-button-without-avatar{visibility:visible}#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-badge,#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-notification .intercom-launcher-badge{right:0}#intercom-container.intercom-ie8 .intercom-lwr-composer-enabled .intercom-lwr-composer-option:hover,#intercom-container.intercom-ie8 .intercom-lwr-composer-option-selected.intercom-lwr-composer-option{background-color:#f7f7f7}#intercom-container.intercom-ie8 .intercom-comment{display:block;float:none;max-width:100%;width:100%;box-sizing:border-box}#intercom-container.intercom-ie8 .intercom-comment-by-admin .intercom-comment-body-container,#intercom-container.intercom-ie8 .intercom-comment-by-user .intercom-comment-body-container{max-width:272px;float:right;clear:both}#intercom-container.intercom-ie8 .intercom-comment-metadata-container{clear:both}#intercom-container.intercom-ie8 .intercom-comment-by-admin .intercom-comment-body-container{float:left}#intercom-container.intercom-ie8 .intercom-lwr-composer-option svg{display:none}#intercom-container.intercom-ie8 .intercom-lwr-composer-option .intercom-lwr-icon{position:absolute;left:50%;top:50%;width:18px;height:18px;margin-left:-9px;margin-top:-9px;background-repeat:no-repeat}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-thumbs-up .intercom-lwr-icon{background-image:url(" + n(131) + ")}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-thumbs-down .intercom-lwr-icon{background-image:url(" + n(132) + ")}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-happy .intercom-lwr-icon{background-image:url(" + n(133) + ")}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-neutral .intercom-lwr-icon{background-image:url(" + n(134) + ")}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-sad .intercom-lwr-icon{background-image:url(" + n(135) + ")}#intercom-container.intercom-ie8 .intercom-autoresponse-icon{border:none;background-color:#fafafa}#intercom-container.intercom-ie8 .intercom-autoresponse-icon i{background:url(" + n(136) + ");width:32px;height:32px;margin:2px}@-webkit-keyframes intercom-launcher-show-avatar{0%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes intercom-launcher-show-avatar{0%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes intercom-launcher-hide-and-show-avatar{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1);background-color:transparent;border-color:transparent}}@-keyframes intercom-launcher-hide-and-show-avatar{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1);background-color:transparent;border-color:transparent}}@-webkit-keyframes intercom-launcher-show-badge{0%{-webkit-transform:scale(0);transform:scale(0)}0%,50%{opacity:0}75%{-webkit-transform:scale(1.1);transform:scale(1.1)}75%,to{opacity:1}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes intercom-launcher-show-badge{0%{-webkit-transform:scale(0);transform:scale(0)}0%,50%{opacity:0}75%{-webkit-transform:scale(1.1);transform:scale(1.1)}75%,to{opacity:1}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes intercom-launcher-show-preview{0%{opacity:0;-webkit-transform:translate(10px);transform:translate(10px)}50%{-webkit-transform:translate(-5px) scale(1.05);transform:translate(-5px) scale(1.05)}to{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@-keyframes intercom-launcher-show-preview{0%{opacity:0;-webkit-transform:translate(10px);transform:translate(10px)}50%{-webkit-transform:translate(-5px) scale(1.05);transform:translate(-5px) scale(1.05)}to{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@-webkit-keyframes intercom-launcher-update-preview{0%{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}50%{-webkit-transform:translate(-5px) scale(.95);transform:translate(-5px) scale(.95)}to{opacity:0;-webkit-transform:translate(10px) scale(0);transform:translate(10px) scale(0)}}@-keyframes intercom-launcher-update-preview{0%{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}50%{-webkit-transform:translate(-5px) scale(.95);transform:translate(-5px) scale(.95)}to{opacity:0;-webkit-transform:translate(10px) scale(0);transform:translate(10px) scale(0)}}@-webkit-keyframes intercom-launcher-minimize{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-keyframes intercom-launcher-minimize{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes intercom-launcher-maximize{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes intercom-launcher-maximize{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}#intercom-container .intercom-launcher.intercom-launcher-minimized{transition:opacity,.1s}#intercom-container .intercom-launcher.intercom-launcher-minimized .intercom-launcher-button{-webkit-animation:intercom-launcher-minimize .1s linear 0s both;animation:intercom-launcher-minimize .1s linear 0s both;transition:background-image 0s linear .1s}#intercom-container .intercom-launcher.intercom-launcher-maximized .intercom-launcher-button{-webkit-animation:intercom-launcher-maximize .1s linear 0s both;animation:intercom-launcher-maximize .1s linear 0s both}#intercom-container .intercom-launcher.intercom-launcher-with-updated-avatar .intercom-launcher-button{-webkit-animation:intercom-launcher-show-avatar .15s ease-out 1s both;animation:intercom-launcher-show-avatar .15s ease-out 1s both}#intercom-container .intercom-launcher-enabled.intercom-launcher-with-updated-avatar .intercom-launcher-button,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-updated-avatar .intercom-launcher-button{-webkit-animation:intercom-launcher-hide-and-show-avatar .3s ease-out 1s both;animation:intercom-launcher-hide-and-show-avatar .3s ease-out 1s both;transition:background-image 0s linear 1.15s,background-size 0s linear 1.15s,border-width 0s linear 1.15s}#intercom-container .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-badge{-webkit-animation:intercom-launcher-show-badge .3s ease-out 1.5s both;animation:intercom-launcher-show-badge .3s ease-out 1.5s both}#intercom-container .intercom-launcher-enabled.intercom-launcher-with-updated-avatar.intercom-launcher-with-initials .intercom-launcher-initials,#intercom-container .intercom-launcher.intercom-launcher-with-updated-avatar.intercom-launcher-with-initials .intercom-launcher-initials{-webkit-animation:intercom-launcher-show-avatar .3s ease-out 1s both;animation:intercom-launcher-show-avatar .3s ease-out 1s both}#intercom-container .intercom-launcher.intercom-launcher-with-preview .intercom-launcher-preview{-webkit-animation:intercom-launcher-show-preview .3s ease-in-out 1.5s both;animation:intercom-launcher-show-preview .3s ease-in-out 1.5s both}#intercom-container .intercom-launcher.intercom-launcher-with-preview .intercom-launcher-update-preview{-webkit-animation:intercom-launcher-update-preview .3s ease-out 1s both;animation:intercom-launcher-update-preview .3s ease-out 1s both}#intercom-container .intercom-launcher.intercom-launcher-with-preview .intercom-launcher-preview-close{transition:opacity .1s ease-in}#intercom-container .intercom-conversation-parts{transition:opacity .2s}#intercom-container .intercom-conversation-preview .intercom-sheet-header,#intercom-container .intercom-sheet-loading .intercom-conversation-parts{transition:none}@-webkit-keyframes intercom-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-keyframes intercom-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner,#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{-webkit-animation:intercom-spin 1s infinite linear;animation:intercom-spin 1s infinite linear}@-webkit-keyframes intercom-lwr-composer-option-bounce{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes intercom-lwr-composer-option-bounce{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}#intercom-container .intercom-lwr-composer-option-pop svg{-webkit-animation:intercom-lwr-composer-option-bounce .2s ease-in 0 both;animation:intercom-lwr-composer-option-bounce .2s ease-in 0 both}#intercom-container .intercom-announcement a.intercom-h2b-button,#intercom-container .intercom-announcement a.intercom-h2b-button:hover,#intercom-container .intercom-small-announcement a.intercom-h2b-button,#intercom-container .intercom-small-announcement a.intercom-h2b-button:hover{transition:background-color .05s linear}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button,#intercom-container .intercom-browser-notification-button,#intercom-container .intercom-composer-send-button,#intercom-container .intercom-conversations-new-conversation-button,#intercom-container .intercom-interbot-composer-send-button,#intercom-container .intercom-new-anonymous-user input[type=submit],#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button{transition:background-color .1s linear}#intercom-container .intercom-sheet{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:bottom right;transform-origin:bottom right;transition:opacity .1s linear .15s,-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out,opacity .1s linear .15s;transition:transform .25s ease-in-out,opacity .1s linear .15s,-webkit-transform .25s ease-in-out}#intercom-container .intercom-sheet-minimized{-webkit-transform:scale(0);transform:scale(0);transition:opacity .1s linear,visibility 0s linear .25s,-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out,opacity .1s linear,visibility 0s linear .25s;transition:transform .25s ease-in-out,opacity .1s linear,visibility 0s linear .25s,-webkit-transform .25s ease-in-out}#intercom-container .intercom-emoji-sub-icon{background-image:url(" + n(125) + ");background-size:464px 464px;background-repeat:no-repeat;position:relative;top:2px;margin:1px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-emoji-sub-icon{background-image:url(" + n(126) + ")}}#intercom-container .intercom-sticker-comment-body{padding:0}#intercom-container .intercom-sticker-user-comment,#intercom-container .intercom-sticker-user-comment .intercom-comment-metadata,#intercom-container .intercom-sticker-user-comment .intercom-sticker-comment-body{float:right}#intercom-container .intercom-sticker-admin-comment{padding-left:38px}#intercom-container .intercom-sticker-image{width:96px;height:96px;min-width:96px;min-height:96px}#intercom-container .intercom-sticker-native{font-size:96px;line-height:1.1}#intercom-container .intercom-interblocks-video-reply{display:block;width:100%;border-radius:4px;box-shadow:0 1px 2px 0 rgba(0,0,0,.8);z-index:0;background-color:#000}#intercom-container .intercom-video-reply{position:relative}#intercom-container .intercom-video-reply:hover div{opacity:1;transition:opacity .4s ease}#intercom-container .intercom-video-reply-controls{position:absolute;bottom:0;height:64px;width:100%;z-index:1}#intercom-container .intercom-video-reply-controls-shading{position:absolute;opacity:0;background-image:linear-gradient(transparent,rgba(0,0,0,.7));height:100%;width:100%}#intercom-container .intercom-video-reply-controls-bar{position:absolute;width:100%;height:40px;bottom:0}#intercom-container .intercom-video-reply-controls-playpausebutton{position:absolute;width:39px;left:0;height:100%;opacity:0;background-position:50%;cursor:pointer}#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-paused{background-image:url(" + n(137) + ");background-size:11px 12px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-paused{background-image:url(" + n(138) + ")}}#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-unpaused{background-image:url(" + n(139) + ");background-size:10px 12px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-unpaused{background-image:url(" + n(140) + ")}}#intercom-container .intercom-video-reply-controls-mutebutton{position:absolute;width:45px;height:100%;right:0;background-position:50%;cursor:pointer}#intercom-container .intercom-video-reply-controls-mutebutton.intercom-muted{opacity:1;background-image:url(" + n(141) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-mutebutton.intercom-muted{background-image:url(" + n(142) + ")}}#intercom-container .intercom-video-reply-controls-mutebutton.intercom-unmuted{opacity:0;background-image:url(" + n(143) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-mutebutton.intercom-unmuted{background-image:url(" + n(144) + ")}}#intercom-container .intercom-video-reply-controls-progressbar{position:absolute;height:2px;width:180px;bottom:19px;left:39px;opacity:0;border-radius:1px;background:hsla(0,0%,100%,.5)}#intercom-container .intercom-image-only-comment-body{padding:0;margin:10px 0}#intercom-container .intercom-image-only-comment-body img{border-radius:4px}#intercom-container .intercom-image-only-user-comment,#intercom-container .intercom-image-only-user-comment .intercom-comment-metadata{float:right}#intercom-container .intercom-image-only-admin-comment{padding-left:38px}#intercom-container .intercom-interblocks-content-card{width:334px;max-height:136px;max-width:100%;overflow:hidden;border-radius:20px;font-size:16px;border:1px solid #e0e0e0}#intercom-container .intercom-interblocks-content-card:hover{box-shadow:0 2px 4px rgba(0,0,0,.5)}#intercom-container .intercom-interblocks-article-icon{width:22.5%;height:136px;float:left;background-color:#fafafa;background-image:url(" + n(145) + ');background-repeat:no-repeat;background-size:32px;background-position:50%}#intercom-container .intercom-interblocks-article-text{width:77.5%;float:right;background-color:#fff}#intercom-container .intercom-interblocks-article-title{color:#455a64;height:40px;margin:10px 15px;line-height:1.3;font-weight:700;overflow:hidden}#intercom-container .intercom-interblocks-article-body{color:#74848b;height:30px;margin:10px 15px;font-size:12px;font-weight:500;line-height:1.3;overflow:hidden}#intercom-container .intercom-interblocks-article-author{margin:10px 15px;height:24px;line-height:normal}#intercom-container .intercom-interblocks-article-author-avatar{width:16px;height:16px;display:inline-block;vertical-align:middle}#intercom-container img.intercom-interblocks-article-author-avatar-image{width:16px;height:16px;border-radius:50%;margin:0}#intercom-container .intercom-interblocks-article-author-name{color:#74848b;line-height:1.2;margin:0 0 0 5px;display:inline-block;font-size:12px;font-weight:500;overflow:hidden;vertical-align:middle}@-webkit-keyframes fade-in{0%,25%,50%,75%{opacity:0}to{opacity:1}}@keyframes fade-in{0%,25%,50%,75%{opacity:0}to{opacity:1}}.intercom-installation-overlay{z-index:2147482999;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(53,53,53,.9);text-align:center;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:.75s;animation-duration:.75s}.intercom-installation-content{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#fff;font-size:16px;font-family:Helvetica,sans-serif;font-weight:700;text-align:inherit}.intercom-installation-icon{width:50px;height:50px;background:#65cc93;border-radius:50%;display:inline-block;background-size:25px 21px;background-position:50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAqCAYAAADxughHAAAAAXNSR0IArs4c6QAAAutJREFUaAXVmUloVEEQhidGXCBeogdxQQTxIrgggqgREQRFEQRB0ZOQQ0RB8OAhag6e3fCsghdvLkcFMV7FswsibicVJe5LRCdfQx5pXup1V/VMXjoNP9Ov+q+q/0+GTE2n0Zgiq9lsHgaXQMcUkTxeJuL3g3/Arctg2nhW5hFE7wDDwF/XeZieufQxeYjdBH74Drz9LfYzxtiZ7hC5Cnz2hEvbOwRnZ2qh0UDcMvBOUi7EHhDrys4MohaCV8Cy7mZlBOVzwWOLA7g/weZsjCCmCzwElvUX8q6cTMxE0D2LA7j/wcGcTHQi6KbRhKMfzclEB4KuJpg4lY0JJwQD5xJMXMzNxMkEE9fIyWdoRExfgonb5OQzXyHGn2S1fgYhzsrmLYUYaZKNmXkEYU6yCZK7k5OFROptBFWTLEfiekJ0nlBOFyJ5KXgLzugywizquEl2CFjWG8iLwpUDpyQvAa9BsQYC9OgRRSyTbNHzPZvl0eJVBJIXg5dFNe+1vyonFCc/ZZL9Qt6aUN3g2WjTF5748vZEsEDpkORukDLJ9pRK6R9puAA8B7F1XFOVIqmT7E5NfZFD0/ngWcyBd35MLDQahDc5kyyNBz2R2u0RyQzJbpK9oS3i8cR6Uo/KGMVWgA9eUc3WfRfoKxcldkWTXOKcLtdJfqbwSvCx1CD26Mz0Fk3Zn40lCOcXivy2vdJkNfgkNAuFnJlDoD9EqjibuEmWhmuB9RO4uMqs0CuG3STb2bbfglSIButA7GJMVKcM3odXzyRLo/Xgq1KYhdbaJCv95GMx1G0A3ywqI9ynnKdPsjHBoXMa94DvEYGa49Ym2ZBI7RkqtwDr9wjfXGuTrFaohoeqrcBdTVqX+6ORPslqxFk5CNoGfhmcOOPpk6xVoIWPsO3gt8KMu5NNn2QtolK5TiD4EzDjPu0PpNavNQ+hu8FwhZnWJ9k63WBiD3BvIX+1b5Kt2cxeXBRmztfZu+29MLIPuP99T+qd7AgPy3DCIsoWuwAAAABJRU5ErkJggg==)}.intercom-installation-heading{font-size:30px;font-weight:700;text-align:inherit;margin:20px 0}.intercom-installation-message{font-weight:700;text-align:inherit;margin:10px 0}.intercom-installation-message:before{content:\'\\2014\';margin-right:5px}.intercom-installation-button{margin-top:20px;padding:1.3em 2.2em;border:1px solid #fff;border-radius:20%/50%;background:none;font-size:12px;color:#fff;text-transform:uppercase;cursor:pointer;outline:0}.intercom-installation-button:hover{color:#ddd;border-color:#ddd}.intercom-installation-arrow{position:absolute;right:85px;bottom:32px;width:40px;height:40px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABeJJREFUeAHtnG2oFFUYx+9qaUFvlr1qpJZJL3YDKygSK7EXjajECK5ElERCkBVGUMQNevlSVB/6VJTUhwpKqChCUlIyRE0uJdKrKBFo9iJadhPz9vvv3VmOszN7Zs7uzM7unAeee87MOc/znOfnmd2ZOWftGxkZmYge2+fFicAYrE5G+52svVGfAJ6IzvIs3AgI4AkeoBs8WQUzcLa7i3JbBgDP44vkonKjcMteAINv4NvcXJTbSgAP1BDcWm4UbtkL4P6a6Swu4+lubsprZQIUhQfKi8Ixc2bdlWgg+6gc7+iqlGaagX8ZmQve3caxr9oIMONOC6ZfrfyJcpzNzrcbBAC2NwTxQaPZV20EgLcxBHAPx3pG9mIhoM9AyfejRf3vRGqP1Y98JZZAHEAZLGMWzoi19A1VAs0AHkOPFUAc61lZCABpChonj1rMfbMIQG9nDMFhzl/oKUUTCC5hta6N7tI3nvPvAdE/oUQAMgF+HtEenLqAyltArAQnfBkiAJxzUZsMhsz8oUkAetstBA/Tvsi08XWDAHCetQBU80F0vmHmqwEBwMwUoQTyD32uDex8aRAAzNYEANVlP3qVYVrKqvktHAB4O6hYyuNoXwXEBZZ+5WoGyDRUXxZJ5RAdl5SLkiVbgHyUlJ7Rb9DitjzNQJljgElTfZ/O/j2ipgogNqUhZ/TVkkBhNisxlns6MvUJfKcBJW31XwwKsUTKOIbQ53KHSNCx6A60FVmDcUcX64kvgJInOwHxrtHYLf3VTfcT6NG5J0BA4gYAlcTyXMdAwAq6WZHbILpBvyHXBBoBKo18P1oIOFtR2yhr8XV1XiCJZc5ApaF73Hvzil+NQ0C9UG23fIzDy7NOhBhhgMrjP3Qg69h1/wTT04le7WchG3C6GM1kNwR+owAqDz1BLawnmXWFYMsVNUPZje9n0BntzAV/cQCVil7N3dzOeLG+CDQGXYfmId8QZBCdGTughA34aAZQuejKmpfQXUO3VGscBJqKh69RvYnJS34k0Br0C3R9pVLZniYwYx6if7/FRrt0b8L3Oku/huZUAGXNgPTm5dUGT/md2EWo9eg2VHCrSvK/Um+QhABlp5261+NnQ4OTJidSA5QvBrWSomib0gVgD6pSex6Dci71CWgS2UunuUDckqSz+rgC1CWsWXCJnPSY/E4+1wBxa5K8nADKMbPwHIpN6Kk67jHZTT5zgPidLa+oV/o2m2o7zndSuR09mMiguzqdznBXM0mm2YbtDFCOgahvxvttQbq0fRLjFsSzm42/JYByDMQ3KJY1C9LFbVMYuyCeGZdDywDlGIgvUzwUF6TLz09n/J8BMfKzvi0ABQiIL1E8rHoPirb3aQm34XaobQAFDYgvUjyCjui4x+RS8vkUiPp9dV2cb2PqHiIqBLmD0yvQ4JegEb269pS+OG9ksvytDDIBKMdAvIziA/QsHfeY6Nl8ARCH23oJm5BwvpnjK9CvzPM9Ur+OPKpbYDIDKFBA/IVC/53AazruITlELm8qn8wu4TAsLmntKRTI2HuqsE1Bjw8zrgEmxzsaX6Yz0ARAwE84vhh91zzfZXXdXSwJ4HVs7MzGRWjczypoKqws7Ri0cGAQjUe1zvJHYXEdObBiPiQwxgno82hWq35HYnA7ejw8AQp3TF6TUa3KaXWuSPJ04WA1GxDkxqED6JcFoPhCs7EWvg2A/ehT6JYOwHyl8IDSDBCAk9D70A/RrL94XidGonvkRJ3SJJpXXxKcTCwtvGthS6pXTvql/UloK+vWekRbzL2ebpjLKcDV5tBTUP3+71s0qayk41HlpBaTNUBsWzsCuNotlnqDU26PcjH5FeX0agaykMs29QqjBzi65+YW4A27/GuWHeBGoM0H3gEXeLIpM8Ah8teree2hcZayAtwGsXnA+9OZXM2wjAB/IHftwPqtVXiyLxvAHeQseNpj6CUJAeM+8GfqU5PY+D4GgRrAXZTnG6d9NSkBwGlfi9ZivLgQAN4ZLnbeJicC/wMLmKUehkIagAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:40px 40px}#intercom-container .intercom-sheet-loading .intercom-app-profile-container{visibility:hidden}#intercom-container .intercom-app-profile{padding:20px 12px 26px;background-color:#fff;overflow:hidden;box-shadow:0 0 3px rgba(0,0,0,.2);border-radius:5px}#intercom-container .intercom-app-profile-team{text-align:center;color:#455a64;font-weight:500;font-size:15px;line-height:1.8}#intercom-container .intercom-app-profile-last-active .intercom-last-active{position:relative;bottom:auto;color:#90a4ae}#intercom-container .intercom-active-admins{text-align:center;color:#364850;padding-top:24px}#intercom-container .intercom-active-admin{display:inline-block}#intercom-container .intercom-admin-avatar,#intercom-container .intercom-admin-avatar img{width:48px;height:48px}#intercom-container .intercom-admin-fallback-avatar{line-height:48px;font-size:19.2px}#intercom-container .intercom-app-profile-text{padding:14px 30px 0;text-align:center;color:#455a64;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-app-profile-text,#intercom-container .intercom-app-profile-text .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-app-profile-text .intercom-container,#intercom-container .intercom-app-profile-text a,#intercom-container .intercom-app-profile-text blockquote,#intercom-container .intercom-app-profile-text code,#intercom-container .intercom-app-profile-text h1,#intercom-container .intercom-app-profile-text h2,#intercom-container .intercom-app-profile-text h3,#intercom-container .intercom-app-profile-text h4,#intercom-container .intercom-app-profile-text h5,#intercom-container .intercom-app-profile-text h6,#intercom-container .intercom-app-profile-text ol,#intercom-container .intercom-app-profile-text p,#intercom-container .intercom-app-profile-text ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-app-profile-text .intercom-container:first-child,#intercom-container .intercom-app-profile-text a:first-child,#intercom-container .intercom-app-profile-text blockquote:first-child,#intercom-container .intercom-app-profile-text code:first-child,#intercom-container .intercom-app-profile-text h1:first-child,#intercom-container .intercom-app-profile-text h2:first-child,#intercom-container .intercom-app-profile-text h3:first-child,#intercom-container .intercom-app-profile-text h4:first-child,#intercom-container .intercom-app-profile-text h5:first-child,#intercom-container .intercom-app-profile-text h6:first-child,#intercom-container .intercom-app-profile-text ol:first-child,#intercom-container .intercom-app-profile-text p:first-child,#intercom-container .intercom-app-profile-text ul:first-child{margin-top:0}#intercom-container .intercom-app-profile-text .intercom-container:last-child,#intercom-container .intercom-app-profile-text a:last-child,#intercom-container .intercom-app-profile-text blockquote:last-child,#intercom-container .intercom-app-profile-text code:last-child,#intercom-container .intercom-app-profile-text h1:last-child,#intercom-container .intercom-app-profile-text h2:last-child,#intercom-container .intercom-app-profile-text h3:last-child,#intercom-container .intercom-app-profile-text h4:last-child,#intercom-container .intercom-app-profile-text h5:last-child,#intercom-container .intercom-app-profile-text h6:last-child,#intercom-container .intercom-app-profile-text ol:last-child,#intercom-container .intercom-app-profile-text p:last-child,#intercom-container .intercom-app-profile-text ul:last-child{margin-bottom:0}#intercom-container .intercom-app-profile-text h1,#intercom-container .intercom-app-profile-text h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-app-profile-text h2,#intercom-container .intercom-app-profile-text h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-app-profile-text ol,#intercom-container .intercom-app-profile-text ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-app-profile-text [dir=ltr] ol,#intercom-container .intercom-app-profile-text [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-app-profile-text [dir=rtl] ol,#intercom-container .intercom-app-profile-text [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-app-profile-text ul>li{list-style-type:disc}#intercom-container .intercom-app-profile-text ol>li{list-style-type:decimal}#intercom-container .intercom-app-profile-text li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-app-profile-text em,#intercom-container .intercom-app-profile-text i{font-style:italic}#intercom-container .intercom-app-profile-text b,#intercom-container .intercom-app-profile-text strong{font-weight:700;line-height:100%}#intercom-container .intercom-app-profile-text pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-app-profile-text img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-app-profile-text p+br{display:none}#intercom-container .intercom-app-profile-text a:active,#intercom-container .intercom-app-profile-text a:hover,#intercom-container .intercom-app-profile-text a:link,#intercom-container .intercom-app-profile-text a:visited{text-decoration:underline}#intercom-container .intercom-app-profile-text a:link,#intercom-container .intercom-app-profile-text a:visited{color:custom-color}#intercom-container .intercom-app-profile-text a:active,#intercom-container .intercom-app-profile-text a:hover{color:custom-color-darker}#intercom-container .intercom-app-profile-text h2+.ic_button_in_content,#intercom-container .intercom-app-profile-text h2+.ic_social_block,#intercom-container .intercom-app-profile-text h2+blockquote,#intercom-container .intercom-app-profile-text h2+ol,#intercom-container .intercom-app-profile-text h2+p,#intercom-container .intercom-app-profile-text h2+ul,#intercom-container .intercom-app-profile-text h3+.ic_button_in_content,#intercom-container .intercom-app-profile-text h3+.ic_social_block,#intercom-container .intercom-app-profile-text h3+blockquote,#intercom-container .intercom-app-profile-text h3+ol,#intercom-container .intercom-app-profile-text h3+p,#intercom-container .intercom-app-profile-text h3+ul,#intercom-container .intercom-app-profile-text h4+.ic_button_in_content,#intercom-container .intercom-app-profile-text h4+.ic_social_block,#intercom-container .intercom-app-profile-text h4+blockquote,#intercom-container .intercom-app-profile-text h4+ol,#intercom-container .intercom-app-profile-text h4+p,#intercom-container .intercom-app-profile-text h4+ul,#intercom-container .intercom-app-profile-text h5+.ic_button_in_content,#intercom-container .intercom-app-profile-text h5+.ic_social_block,#intercom-container .intercom-app-profile-text h5+blockquote,#intercom-container .intercom-app-profile-text h5+ol,#intercom-container .intercom-app-profile-text h5+p,#intercom-container .intercom-app-profile-text h5+ul,#intercom-container .intercom-app-profile-text h6+.ic_button_in_content,#intercom-container .intercom-app-profile-text h6+.ic_social_block,#intercom-container .intercom-app-profile-text h6+blockquote,#intercom-container .intercom-app-profile-text h6+ol,#intercom-container .intercom-app-profile-text h6+p,#intercom-container .intercom-app-profile-text h6+ul{margin-top:0}#intercom-container .intercom-app-profile-text .intercom-h2b-facebook,#intercom-container .intercom-app-profile-text .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-app-profile-text iframe[src*="vimeo.com"],#intercom-container .intercom-app-profile-text iframe[src*="wistia.net"],#intercom-container .intercom-app-profile-text iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-app-profile-text p{text-align:center;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-app-profile-text p a:link,#intercom-container .intercom-app-profile-text p a:visited{color:#78909c}#intercom-container .intercom-image-viewable{cursor:-webkit-zoom-in;cursor:zoom-in}#intercom-container .intercom-zoomed-image{z-index:2147483004;position:fixed;cursor:-webkit-zoom-out;cursor:zoom-out;transition:all .3s ease}#intercom-container .intercom-zoomed-image-placeholder{background-color:#e4e5e7;border-radius:4px}#intercom-container .intercom-image-viewer-overlay{z-index:2147483003;position:fixed;top:0;right:0;bottom:0;left:0;background:#000;cursor:-webkit-zoom-out;cursor:zoom-out;opacity:0}#intercom-container .intercom-admin-avatar{overflow:hidden;text-align:center;background-color:#fff}#intercom-container .intercom-admin-avatar,#intercom-container .intercom-admin-avatar img{margin:0 auto;border-radius:50%}#intercom-container .intercom-admin-fallback-avatar{color:#fff;text-align:center;font-weight:500;background-color:custom-color}#intercom-container .intercom-interbot-email-collector{z-index:2147483001;position:absolute;bottom:0;left:0;right:0;max-width:336px;margin:0 auto;padding:16px}#intercom-container .intercom-interbot-email-collector.intercom-interbot-composer-inactive{display:none}#intercom-container .intercom-interbot-email-error-text{color:#d76060;font-size:11px;font-weight:500;margin-bottom:4px}#intercom-container .intercom-interbot-email-error-text.intercom-interbot-email-error-text-hidden{display:none}#intercom-container .intercom-powered-by-enabled .intercom-interbot-email-collector{padding:8px 6px 0}#intercom-container .intercom-interbot-email-collector-input-wrapper{overflow:hidden;width:100%}#intercom-container .intercom-interbot-email-collector-button-wrapper{display:block;overflow:hidden;padding-right:10px}#intercom-container .intercom-interbot-email-collector-input{width:100%;overflow:hidden;color:#455a64;border-radius:4px;border:1px solid #cfd8dc;box-sizing:border-box;padding:10px 10px 10px 14px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;background:#fff}#intercom-container .intercom-interbot-email-collector-input.interbot-invalid-email{border-color:#d76060}#intercom-container .intercom-interbot-email-collector-input:focus{border-color:#74beff;box-shadow:0 0 4px 0 rgba(75,171,255,.38)}#intercom-container .intercom-interbot-email-collector-input::-webkit-input-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-interbot-email-collector-input::-moz-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-interbot-email-collector-input:-ms-input-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-interbot-email-collector-input.intercom-interbot-invalid-email{border-color:#d76060}#intercom-container .intercom-interbot-email-collector-input.intercom-interbot-invalid-email:focus{box-shadow:0 0 4px 0 rgba(255,0,0,.3)}#intercom-container .intercom-interbot-composer-send-button{height:40px;width:52px;text-align:center;float:right;padding:0 9px;line-height:25px;border:1px solid #fff;color:#789090;background:none;background-image:none;display:inline-block;font-size:13px;font-weight:400;text-shadow:none;border:1px solid #fafafb}#intercom-container .intercom-interbot-composer-send-button:active,#intercom-container .intercom-interbot-composer-send-button:focus,#intercom-container .intercom-interbot-composer-send-button:hover{color:#455a64;background:#fff;border-color:#e6eef4}#intercom-container .intercom-composer-press-enter-to-send{display:none}#intercom-container .intercom-composer-press-enter-to-send.interbot-enter-to-send{bottom:15px;right:85px}#intercom-container .intercom-knowledgebase-article-body{z-index:2147483004;position:fixed;top:10%;right:10%;bottom:10%;left:10%;height:80%;width:80%;max-width:640px;margin:0 auto;border-radius:5px}#intercom-container .intercom-knowledgebase-article-overlay{z-index:2147483003;position:fixed;top:0;right:0;bottom:0;left:0;background:#000;opacity:.8}#intercom-container .intercom-video-launcher-hovercard-textarea{left:17px;padding:0;position:absolute;transition:bottom .2s ease}#intercom-container .intercom-video-launcher-hovercard-textarea textarea{background-color:#fff;border:1px solid #cfd8dc;border-radius:4px;box-sizing:border-box;color:#455a64;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;height:42px;line-height:20px;padding:10px 10px 5px 14px;resize:none;width:200px;transition:opacity .2s ease}#intercom-container .intercom-video-launcher-hovercard-textarea textarea::-webkit-input-placeholder{color:#b0bec5;font-size:14px;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;line-height:20px}#intercom-container .intercom-video-launcher-hovercard-textarea textarea::-moz-placeholder{color:#b0bec5;font-size:14px;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;line-height:20px}#intercom-container .intercom-video-launcher-hovercard-textarea textarea:-ms-input-placeholder{color:#b0bec5;font-size:14px;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-hovercard-videolauncher{position:absolute;right:-5px;bottom:64px;width:234px;height:310px}#intercom-container .intercom-video-launcher-hovercard-video-plain{border-radius:5px;cursor:pointer}#intercom-container .intercom-video-launcher-hovercard-video{-webkit-clip-path:url("#intercom-video-launcher-hovercard-clip-path");clip-path:url("#intercom-video-launcher-hovercard-clip-path");cursor:pointer}#intercom-container .intercom-launcher-video-topbar{height:16px;left:17px;position:absolute;top:14px;width:200px}#intercom-container .intercom-launcher-video-topbar-status-text-container{position:absolute;left:30px;top:-1px;transition:opacity .1s ease}#intercom-container .intercom-launcher-video-topbar-status-text{color:#fff;cursor:pointer;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:18px}#intercom-container .intercom-launcher-video-topbar-status-icon{width:19px;height:18px;cursor:pointer}#intercom-container .intercom-launcher-video-topbar-muted-icon{background-image:url(' + n(141) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-muted-icon{background-image:url(" + n(142) + ")}}#intercom-container .intercom-launcher-video-topbar-unmuted-icon{background-image:url(" + n(143) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-unmuted-icon{background-image:url(" + n(144) + ")}}#intercom-container .intercom-launcher-video-topbar-replay-icon{background-image:url(" + n(146) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-replay-icon{background-image:url(" + n(147) + ")}}#intercom-container .intercom-launcher-video-topbar-close-icon{background-image:url(" + n(102) + ");background-size:15px 15px;background-repeat:no-repeat;background-position:50%;cursor:pointer;height:30px;width:30px;position:absolute;right:-6px;top:-4px;transition:opacity .1s ease}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-close-icon{background-image:url(" + n(103) + ')}}#intercom-container .intercom-launcher-video-muted-text,#intercom-container .intercom-launcher-video-replay-text,#intercom-container .intercom-launcher-video-unmuted-text{cursor:pointer}#intercom-container .intercom-launcher-video-topbar-text-muted{float:left;visibility:visible}#intercom-container .intercom-launcher-hovercard-video-overlay{background-color:#000;border-radius:5px;display:none;height:100%;opacity:.35;pointer-events:none;position:absolute;right:0;top:0;width:100%}#intercom-container .intercom-launcher-hovercard-video-overlay.intercom-launcher-hovercard-video-overlay-nocaret{height:320px}#intercom-container .intercom-launcher-overlay-admin-information-container{bottom:87px;display:none;height:48px;left:17px;position:absolute}#intercom-container .intercom-launcher-overlay-video-admin-avatar{border-radius:50%;cursor:pointer;display:inline-block;float:left;height:48px;vertical-align:top;width:48px}#intercom-container .intercom-launcher-overlay-video-admin-name{color:#fff;cursor:pointer;display:inline-block;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:48px;padding-left:5px}#intercom-container .intercom-video-launcher-admin-upload-time{color:#fff;cursor:pointer;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;padding-bottom:5px}#intercom-container .intercom-sheet-loading .intercom-app-video-admin-profile-container{visibility:hidden}#intercom-container .intercom-admin-profile{box-shadow:0 0 3px rgba(0,0,0,.2);border-radius:5px;background-color:#fff}#intercom-container .intercom-app-profile-container{padding:16px 16px 0}#intercom-container .intercom-admin-profile-data-container{padding:20px 12px 12px;background-color:#fff;overflow:hidden}#intercom-container .intercom-admin-profile-data{text-align:center}#intercom-container .intercom-admin-profile-data .intercom-admin-avatar,#intercom-container .intercom-admin-profile-data .intercom-admin-avatar img{width:48px;height:48px}#intercom-container .intercom-admin-profile-data .intercom-admin-fallback-avatar{line-height:48px;font-size:19.2px}#intercom-container .intercom-active-admin-name{font-size:12px;color:#90a4ae;text-align:center;padding-top:7px;width:80px;overflow:hidden;text-overflow:ellipsis}#intercom-container .intercom-admin-profile-text-container{padding-bottom:10px;text-align:center;font-size:14px;font-weight:400;color:#455a64;line-height:20px;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-admin-profile-text-container .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-admin-profile-text-container .intercom-container,#intercom-container .intercom-admin-profile-text-container a,#intercom-container .intercom-admin-profile-text-container blockquote,#intercom-container .intercom-admin-profile-text-container code,#intercom-container .intercom-admin-profile-text-container h1,#intercom-container .intercom-admin-profile-text-container h2,#intercom-container .intercom-admin-profile-text-container h3,#intercom-container .intercom-admin-profile-text-container h4,#intercom-container .intercom-admin-profile-text-container h5,#intercom-container .intercom-admin-profile-text-container h6,#intercom-container .intercom-admin-profile-text-container ol,#intercom-container .intercom-admin-profile-text-container p,#intercom-container .intercom-admin-profile-text-container ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-admin-profile-text-container .intercom-container:first-child,#intercom-container .intercom-admin-profile-text-container a:first-child,#intercom-container .intercom-admin-profile-text-container blockquote:first-child,#intercom-container .intercom-admin-profile-text-container code:first-child,#intercom-container .intercom-admin-profile-text-container h1:first-child,#intercom-container .intercom-admin-profile-text-container h2:first-child,#intercom-container .intercom-admin-profile-text-container h3:first-child,#intercom-container .intercom-admin-profile-text-container h4:first-child,#intercom-container .intercom-admin-profile-text-container h5:first-child,#intercom-container .intercom-admin-profile-text-container h6:first-child,#intercom-container .intercom-admin-profile-text-container ol:first-child,#intercom-container .intercom-admin-profile-text-container p:first-child,#intercom-container .intercom-admin-profile-text-container ul:first-child{margin-top:0}#intercom-container .intercom-admin-profile-text-container .intercom-container:last-child,#intercom-container .intercom-admin-profile-text-container a:last-child,#intercom-container .intercom-admin-profile-text-container blockquote:last-child,#intercom-container .intercom-admin-profile-text-container code:last-child,#intercom-container .intercom-admin-profile-text-container h1:last-child,#intercom-container .intercom-admin-profile-text-container h2:last-child,#intercom-container .intercom-admin-profile-text-container h3:last-child,#intercom-container .intercom-admin-profile-text-container h4:last-child,#intercom-container .intercom-admin-profile-text-container h5:last-child,#intercom-container .intercom-admin-profile-text-container h6:last-child,#intercom-container .intercom-admin-profile-text-container ol:last-child,#intercom-container .intercom-admin-profile-text-container p:last-child,#intercom-container .intercom-admin-profile-text-container ul:last-child{margin-bottom:0}#intercom-container .intercom-admin-profile-text-container h1,#intercom-container .intercom-admin-profile-text-container h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-admin-profile-text-container h2,#intercom-container .intercom-admin-profile-text-container h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-admin-profile-text-container ol,#intercom-container .intercom-admin-profile-text-container ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-admin-profile-text-container [dir=ltr] ol,#intercom-container .intercom-admin-profile-text-container [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-admin-profile-text-container [dir=rtl] ol,#intercom-container .intercom-admin-profile-text-container [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-admin-profile-text-container ul>li{list-style-type:disc}#intercom-container .intercom-admin-profile-text-container ol>li{list-style-type:decimal}#intercom-container .intercom-admin-profile-text-container li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-admin-profile-text-container em,#intercom-container .intercom-admin-profile-text-container i{font-style:italic}#intercom-container .intercom-admin-profile-text-container b,#intercom-container .intercom-admin-profile-text-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-admin-profile-text-container pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-admin-profile-text-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-admin-profile-text-container p+br{display:none}#intercom-container .intercom-admin-profile-text-container a:active,#intercom-container .intercom-admin-profile-text-container a:hover,#intercom-container .intercom-admin-profile-text-container a:link,#intercom-container .intercom-admin-profile-text-container a:visited{text-decoration:underline}#intercom-container .intercom-admin-profile-text-container a:link,#intercom-container .intercom-admin-profile-text-container a:visited{color:custom-color}#intercom-container .intercom-admin-profile-text-container a:active,#intercom-container .intercom-admin-profile-text-container a:hover{color:custom-color-darker}#intercom-container .intercom-admin-profile-text-container h2+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h2+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h2+blockquote,#intercom-container .intercom-admin-profile-text-container h2+ol,#intercom-container .intercom-admin-profile-text-container h2+p,#intercom-container .intercom-admin-profile-text-container h2+ul,#intercom-container .intercom-admin-profile-text-container h3+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h3+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h3+blockquote,#intercom-container .intercom-admin-profile-text-container h3+ol,#intercom-container .intercom-admin-profile-text-container h3+p,#intercom-container .intercom-admin-profile-text-container h3+ul,#intercom-container .intercom-admin-profile-text-container h4+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h4+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h4+blockquote,#intercom-container .intercom-admin-profile-text-container h4+ol,#intercom-container .intercom-admin-profile-text-container h4+p,#intercom-container .intercom-admin-profile-text-container h4+ul,#intercom-container .intercom-admin-profile-text-container h5+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h5+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h5+blockquote,#intercom-container .intercom-admin-profile-text-container h5+ol,#intercom-container .intercom-admin-profile-text-container h5+p,#intercom-container .intercom-admin-profile-text-container h5+ul,#intercom-container .intercom-admin-profile-text-container h6+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h6+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h6+blockquote,#intercom-container .intercom-admin-profile-text-container h6+ol,#intercom-container .intercom-admin-profile-text-container h6+p,#intercom-container .intercom-admin-profile-text-container h6+ul{margin-top:0}#intercom-container .intercom-admin-profile-text-container .intercom-h2b-facebook,#intercom-container .intercom-admin-profile-text-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-admin-profile-text-container iframe[src*="vimeo.com"],#intercom-container .intercom-admin-profile-text-container iframe[src*="wistia.net"],#intercom-container .intercom-admin-profile-text-container iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-admin-profile-text{text-align:center;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-admin-profile-text a:link,#intercom-container .intercom-admin-profile-text a:visited{color:#78909c}', ""]);
}, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function(e, t, n) {
    e.exports = n.p + "images/spinner.4d295ead.png"
}, function(e, t, n) {
    e.exports = n.p + "images/spinner@2x.2b560838.png"
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAAAzElEQVR4AY3Kr0qDcRSA4bNgmUkZSyr2YVkWwTtYEZNFxLQ0wajZZrJ4AcIQ1O4fLHoFpkXTTDIXNoQ9RtEf+p3nrW9EaLk28p+RKy0R2sYyxtrhTtZtmMiahNKbvgtDhXLumxdC3WX1vKTh2aOGBZ9V86kHsCl8VM1wb1fNBpl51Zxtw9y8Yg1y845efkZ+XrdFKcyU9hwqzcJA1iB0ZXVDzbGpKlNHaiGEpo6ed8CrA/s/6mgKEb47By+WRdnv+QxPFkVmPnGjLv7uC9s8WoTqo+lHAAAAAElFTkSuQmCC"
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAQAAAC0jZKKAAABnklEQVR4AdXOP2gUdgDF8acnElQSEOuSbhUd1CEB0UDQQQiIZBNFUTDgkkEwgqPgqDgGgzjoEhd10kgG/4xOIbTQXKF0aEoqKMYhWXpG83EIx8ER5Jr73ZDP27+81Ok3rqpmo2qqxvXJ2iKi26RVJayatKse7vGrkn73k0RMKe2lxGmdcCqe6YQn8V4nLMQ3nfA1OiRaUTPpogHHXfbUl1LhGftEY/vNlAjP6ZGm9ai2Hx4WUXHVC89dEhFD7Yd7RVxXd17EVp/bDY+KPT6oeyAiqu2GmbOoYUzElvYeN1t233YRRykVfmfANhFR8bpc+KSszU6PKRceFLHXmHnKh0dhk4SHRdwsH/7DGSMWi4frNlF4yi/6/VY+/LOI4fLhYyKuaFHUtOYfN9yypDX/xV864c+4pxPG45AVpa04GHFHabclouKRkh6qSKxtxL9KWDAiIlFfl3MmTHvjk/UsmfXqB5s24awuaYSb1+2tZnftkP+zWG8nNLDqmkiJ8GENNRekVLhP3bIhKRceBHx0RMqH/3ZAyoZ3mzerVza+70aAaX0tAGh+AAAAAElFTkSuQmCC"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-launcher-acquire.8a742481.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-launcher-acquire@2x.8a739dbd.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-launcher-learn.1f592eb7.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-launcher-learn@2x.3e7fa84c.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-launcher-minimized.3b631d81.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-launcher-minimized@2x.43b2eb9d.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-preview-close.ec1a68fc.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-preview-close@2x.31f72604.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-close-white@1x.bac0a0d6.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-close-white@2x.eca653ab.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-conversations.6e0b2a74.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-conversations@2x.9ee78dea.png"
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAq0lEQVR42o2RMQoCMRBFcwQ776C11upOekHEnaC47sQbWomIlWfRSm+wZiBFIAzfgYEw/PeKfLdYdyNiuSz5OHV/TLM9TTSvnPMsVx/ikPadBQh8aZ6C3Fyz62bp8SkFEOT4XQWZ670SaBCCeWwBBm0Bcb+xQSwYEFgLOO5L2LdyAEj9ObpGC7gOavuz0QLu0WoBgqhGCEJBOtwBWAly/qG1jInlWYJIoHnlfhcTzX2HEVUjAAAAAElFTkSuQmCC"
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAUVBMVEUAAAAAAAAAVVUzTU0uRl1EWGRCWWFFWGNDWWNEWWNDWWNFWWNEWmNFWWNEWWREWmNEWWREWWNEWWNFWWREWmNEWWNFWmNFWmREWWRFWmRFWmTQYCLkAAAAGnRSTlMAAgMKC0BCXV+am6Cio6SlprS3vb6/wfX2/eBzOYoAAACDSURBVHja3dFJDsJADETRYgozYQqQvv9BaYNQqfWdC+CNF29V+pJWu7mSm207hT5Lb7ceyqv7aAmnlvBLfeHQuKsWw8+pj6XsqTYOhUNlh8IbhTdKt6ZuhUPhVjY6ffmMPt7r/VQ4Kgz2rODf9NXeSj9qPU73HTcKn+gbWv2e971VfQPHpCEx8fOtQAAAAABJRU5ErkJggg=="
}, function(e, t, n) {
    e.exports = n.p + "images/icon-minimize.d9de03dd.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-minimize@2x.31dc3d95.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-user-avatar.cc0ba124.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-user-avatar@2x.c98e6549.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-compose.ae40ed11.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-compose@2x.d2936115.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-no-conversations.c8479cfc.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-no-conversations@2x.3ba90162.png"
}, function(e, t, n) {
    e.exports = n.p + "images/empty-inbox.e63231e3.png"
}, function(e, t, n) {
    e.exports = n.p + "images/empty-inbox@2x.15a2054e.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-upload-white.f4e8f08e.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-upload-white@2x.751fc11c.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-tick.6c64940e.svg"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-upload.d2842ae1.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-upload@2x.d8d0039b.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-emoji.03826508.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-emoji@2x.fba93a3f.png"
}, function(e, t, n) {
    e.exports = n.p + "images/emoji-spritemap-16.bc0d768e.png"
}, function(e, t, n) {
    e.exports = n.p + "images/emoji-spritemap-32.93b83e6d.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-upload-remove.b3413d69.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-upload-remove@2x.644a85e2.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-is-typing.4a0dc2a4.gif"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-is-typing@2x.0f7bf1a7.gif"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-thumbs-up.ef2a83d6.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-thumbs-down.289ff01a.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-emotion-happy.445136ff.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-emotion-neutral.4bc254cc.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-emotion-sad.82ef651a.png"
}, function(e, t, n) {
    e.exports = n.p + "images/icon-info.e879e16e.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-play.c58d0cd9.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-play@2x.2d812ec3.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-pause.be2f5667.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-pause@2x.17de5c88.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-muted.e00bd7de.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-muted@2x.77d304f4.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-unmuted.d9cbe1e3.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-unmuted@2x.2855eea9.png"
}, function(e, t, n) {
    e.exports = n.p + "images/article_book.97c7a8be.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-replay_360.12582747.png"
}, function(e, t, n) {
    e.exports = n.p + "images/video-replay_360@2x.26b8f034.png"
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(4),
        r = n(5),
        a = n(149),
        s = n(255),
        c = n(258);
    e.exports = r.View.extend({
        id: "intercom-messenger",
        className: "intercom-messenger intercom-messenger-inactive",
        initialize: function(e) {
            this.settings = e.settings;
            var t = {
                client: e.client,
                nexusClient: e.nexusClient,
                settings: e.settings,
                collection: this.collection,
                app: e.app
            };
            this.newConversationView = new a(t), this.conversationsView = new s(t), this.conversationView = new a(t), this.loadingView = new c({
                settings: e.settings
            }), this.render = o.once(this.render), this.renderConversation = o.once(this.renderConversation), this.renderConversations = o.once(this.renderConversations), this.renderNewConversation = o.once(this.renderNewConversation), this.renderLoading = o.once(this.renderLoading), this._registerNexusEvents(e.nexusClient)
        },
        renderConversation: function() {
            this.$el.append(this.conversationView.render().el)
        },
        renderConversations: function() {
            this.$el.append(this.conversationsView.render().el)
        },
        renderNewConversation: function() {
            this.$el.append(this.newConversationView.render().el)
        },
        renderLoading: function() {
            this.$el.append(this.loadingView.render().el)
        },
        showConversations: function() {
            this.renderConversations(), this.show(this.conversationsView)
        },
        showNewConversation: function(e, t) {
            this.renderNewConversation(), this.show(this.newConversationView), this.newConversationView.renderNewConversation(t), this.newConversationView.composerView.setText(e)
        },
        showNewArticleConversation: function(e, t) {
            this.renderNewConversation(), this.show(this.newConversationView), this.newConversationView.renderNewConversation(t), this.newConversationView.showTopArticleCard(e)
        },
        showNewConversationWithAdmin: function(e, t, n) {
            this.renderNewConversation(), this.show(this.newConversationView), this.newConversationView.renderNewConversationWithAdmin(t, n), this.newConversationView.composerView.setText(e)
        },
        showConversation: function(e) {
            this.renderConversation(), this.conversationView.renderConversation(e, {
                autoOpen: !1
            }), this.show(this.conversationView)
        },
        showConversationWithAdmin: function(e, t) {
            this.renderConversation(), this.conversationView.renderConversation(e, {
                autoOpen: !1,
                admin: t
            }), this.show(this.conversationView)
        },
        showLoading: function() {
            this.renderLoading(), this.show(this.loadingView)
        },
        autoOpenConversation: function(e) {
            this.renderConversation(), this.conversationView.renderConversation(e, {
                autoOpen: !0
            }), this.show(this.conversationView)
        },
        hide: function() {
            i("body").removeClass("intercom-messenger-active"), this.$el.removeClass("intercom-messenger-active").addClass("intercom-messenger-inactive"), this.currentView && this.currentView.hide()
        },
        show: function(e) {
            this.currentView && this.currentView.hide(), this.currentView = e, i("body").addClass("intercom-messenger-active"), this.$el.addClass("intercom-messenger-active").removeClass("intercom-messenger-inactive"), e.show()
        },
        minimize: function() {
            this.currentView && this.currentView.minimize()
        },
        maximize: function() {
            this.currentView && this.currentView.maximize()
        },
        isMinimized: function() {
            return this.currentView && this.currentView.isMinimized()
        },
        isActive: function() {
            return this.$el.hasClass("intercom-messenger-active")
        },
        isConversationViewActive: function() {
            return this.isActive() && o.contains([this.conversationView, this.newConversationView], this.currentView)
        },
        getCurrentConversation: function() {
            return this.isConversationViewActive() ? this.currentView.model : void 0
        },
        refreshActiveConversation: function(e) {
            var t = this.getCurrentConversation();
            return t && t.id === e ? (t.fetch(), !0) : !1
        },
        onAdminIsTyping: function(e) {
            this.settings.get("app.rtm-enabled") && this.isConversationViewActive() && this.currentView.onAdminIsTyping(e)
        },
        _registerNexusEvents: function(e) {
            e.addListener("AdminIsTyping", o.bind(this.onAdminIsTyping, this))
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(10),
        r = n(59),
        a = n(55),
        s = n(68),
        c = n(69),
        l = n(62),
        u = n(76),
        m = n(150),
        d = n(151),
        p = n(81),
        h = n(152),
        f = n(83),
        g = n(66),
        v = n(54),
        b = n(52),
        y = n(189),
        w = n(190),
        x = n(208),
        _ = n(214),
        k = n(215),
        C = n(218),
        A = n(219),
        T = n(220),
        S = n(226),
        E = n(228),
        j = n(230),
        z = n(231),
        N = n(216),
        I = n(233),
        M = n(234),
        P = n(235),
        L = n(236),
        R = n(237),
        U = n(238),
        H = n(239),
        V = n(240),
        $ = n(241),
        O = n(242),
        q = n(225),
        B = n(243),
        D = n(49),
        F = n(63),
        X = n(244);
    e.exports = y.extend({
        template: h.load("conversation"),
        titleTemplate: h.load("conversation-title"),
        articleCardMessageTemplate: h.load("article-card-message"),
        id: "intercom-conversation",
        className: "intercom-conversation intercom-sheet",
        events: i.extend(y.prototype.events, {
            mousemove: "onMouseMovedOrClicked",
            click: "onMouseMovedOrClicked",
            "click .intercom-active-admin-avatar": "onAppProfileAvatarClicked"
        }),
        initialize: function(e) {
            y.prototype.initialize.apply(this, arguments), this.app = e.app, this.user = g.fromSettings(this.settings), this.client = e.client, this.nexusClient = e.nexusClient, this.composerView = new x(e), this.counterView = new _({
                collection: this.collection
            }), this.poweredByView = new A({
                settings: this.settings
            }), this.appProfileView = new k({
                settings: this.settings,
                app: this.app
            }), this.adminProfileView = new C({
                settings: this.settings,
                app: this.app
            }), this.lastActiveView = new N({
                model: this.app
            }), this.listenTo(this.composerView, "submit", this.onComposerSubmitted), this.listenTo(this.composerView, "userIsTyping", i.throttle(this.onComposerIsTyping, 1e3)), this.listenTo(this.composerView, "userIsTyping", this._updateLastComposerEventTimestamp), this.listenTo(this.app, "change", this.onTeamLastSeenChange)
        },
        render: function() {
            return this.$el.html(this.template()), this.$el.addClass("intercom-emoji-support"), this.renderComposer(), this.renderPoweredBy(), this.counterView.setElement(this.$(".intercom-unread-counter")).render(), this
        },
        renderNewConversation: function(e) {
            this.model && this.stopListening(this.model.parts), this.model = void 0, this.renderAppProfile(), this.renderTitle(), this.renderTeamLastActive(), this._configureComposerView(e), this.$(".intercom-sheet-content").on("scroll", i.bind(this.onConversationScroll, this)), m.trackSignedOutEvent("uniqueVisitorOpenedNewConversation")
        },
        renderNewConversationWithAdmin: function(e, t) {
            this.model && this.stopListening(this.model.parts), this.model = void 0, this.renderTitleForAdmin(t), this.renderAdminLastActive(t), this.renderAdminProfile(t), this._configureComposerView(e), this.$(".intercom-sheet-content").on("scroll", i.bind(this.onConversationScroll, this)), m.trackSignedOutEvent("uniqueVisitorOpenedNewConversation")
        },
        _configureComposerView: function(e) {
            this.interbotEmailCollectorView && this.interbotEmailCollectorView.hide(), this.composerView.show().reset().setPlaceholder(o.translate("new-conversation-placeholder")), this.focusComposerIfAppropriate(), this.composerView.setConversationId(), this.composerView.resetEnterToSend(), e !== !1 && this.showComposerWithAnimation()
        },
        renderConversation: function(e, t) {
            var n = t.admin;
            this.model && this.stopListening(this.model.parts), this.stopListening(this.app), this.model = e, n || (this.renderTitle(), this.renderAdminLastActive()), this.interbotEmailCollectorView && this.interbotEmailCollectorView.hide(), this.composerView.hide().reset().setPlaceholder(o.translate("new-comment-placeholder")), this.$el.addClass("intercom-sheet-loading"), this.$el.toggleClass("intercom-conversation-preview", t.autoOpen && this.model.isSmallAnnouncement()), this.$el.toggleClass(["intercom-conversation-announcement", "intercom-sheet-maximized"].join(" "), this.model.isAnnouncement()), d.invalidateLatencyData(), this.model.fetch().then(i.bind(function() {
                this.isVisitorAutoMessage() && m.trackSignedOutEvent("uniqueVisitorOpenedVisitorAutoMessage"), this.listenTo(this.model.parts, "add", this.onPartAdded), this.listenTo(this.model.parts, "change", this.onPartChange), this.composerView.setConversationId(this.model.id), this.composerView.setVisitorAutoMessage(this.isVisitorAutoMessage()), this.composerView.resetEnterToSend(), this.setComposerVisibility(), n ? (this.renderTitleForAdmin(n), this.renderAdminProfile(n), this.renderAdminLastActive(n)) : (this.renderAdminLastActive(), this.renderAppProfile(), this.renderTitle()), this.renderParts(), this.shouldShowAutoResponder() && this.renderAutoResponse(), this.focusComposerIfAppropriate(), this.showComposerWithAnimation(), this.model.partsCount() > 1 && this.scrollToBottom(), this._maybeShowEmailCollectorOrStartInterbot(), this.$el.removeClass("intercom-sheet-loading"), this.$(".intercom-sheet-content").on("scroll", i.bind(this.onConversationScroll, this))
            }, this))
        },
        renderParts: function() {
            this.model.parts.nonLwrResponses().each(function(e) {
                var t = new w({
                    model: e,
                    conversation: this.model
                });
                this.groupParts(e, t), this.$(".intercom-conversation-parts").append(t.render().el)
            }, this), this.model.partsCount() > 1 && this.$el.removeClass("intercom-conversation-preview"), this.model.isUnread() && this.$(".intercom-conversation-part:last").addClass("intercom-conversation-part-unread"), this.markConversationAsRead()
        },
        groupParts: function(e, t) {
            var n = this.$(".intercom-conversation-part:not(.intercom-is-typing):last"),
                i = n.outerHeight(!0);
            return !this.isGroupedWithPreviousPart(e) && this.isGroupedWithNextPart(e) ? this.group(t.$el, "first") : this.isGroupedWithPreviousPart(e) && !this.isGroupedWithNextPart(e) ? (this.group(t.$el, "last"), n.hasClass("intercom-conversation-part-grouped-last") ? this.group(n, "middle") : n.hasClass("intercom-conversation-part-grouped") || this.group(n, "first")) : this.isGroupedWithPreviousPart(e) && this.group(t.$el, "middle"), (this.autoResponseIsActive() || this.emailCollectorIsActive()) && this.regroupComments(), i - n.outerHeight(!0)
        },
        regroupComments: function() {
            var e = this.domPart(0),
                t = this.domPart(1),
                n = this.domPart(2),
                i = this.isGroupedWithNextPart(this.model.parts.at(0)),
                o = this.model.parts.at(1) && this.isGroupedWithNextPart(this.model.parts.at(1)),
                r = this.model.parts.at(2) && this.isGroupedWithNextPart(this.model.parts.at(2));
            this.autoResponseIsActive() ? (this.removeGroupingClasses(e), this.removeGroupingClasses(t), o && this.group(t, "first")) : this.emailCollectorIsActive() ? (this.removeGroupingClasses(t), this.removeGroupingClasses(n), r && this.group(n, "first")) : (e.toggleClass("intercom-conversation-part-grouped-first", i), o && this.group(t, "middle"))
        },
        group: function(e, t) {
            return "first" === t ? this.removeGroupingClasses(e).addClass("intercom-conversation-part-grouped-first") : "middle" === t ? this.removeGroupingClasses(e).addClass("intercom-conversation-part-grouped") : "last" === t ? this.removeGroupingClasses(e).addClass("intercom-conversation-part-grouped-last") : void 0
        },
        domPart: function(e) {
            return this.$(".intercom-conversation-part:eq(" + e + ")")
        },
        removeGroupingClasses: function(e) {
            return e.removeClass(function(e, t) {
                return i.filter(t.split(" "), function(e) {
                    return e.indexOf("grouped") >= 0
                }).join(" ")
            })
        },
        showComposerWithAnimation: function() {
            H(this)
        },
        scrollToBottom: function() {
            this.setScrollTop(this.getScrollHeight())
        },
        autoResponseIsActive: function() {
            return this.autoResponseView && this.autoResponseView.isActive()
        },
        emailCollectorIsActive: function() {
            return this.emailCollectorView && this.emailCollectorView.isActive()
        },
        renderAppProfile: function() {
            this.model && (this.model.hasAdminComment() || this.model.getMessage().byAdmin()) || this.$(".intercom-app-profile-container").show().html(this.appProfileView.render().el)
        },
        hideAppProfile: function(e) {
            e === !1 ? this.$(".intercom-app-profile-container").hide() : L(this)
        },
        renderAdminProfile: function(e) {
            this.$(".intercom-app-profile-container").show().html(this.adminProfileView.render(e).el)
        },
        renderTitle: function() {
            var e = this.model ? this.titleTemplate({
                appName: this.settings.get("app.name"),
                adminFirstName: this.model.lastAdminFirstName(!1),
                adminName: this.model.lastAdminName(!1)
            }) : this.titleTemplate({
                adminName: void 0,
                appName: this.settings.get("app.name")
            });
            this.$(".intercom-sheet-header-title").html(e), this.setGenericTitle()
        },
        renderTitleForAdmin: function(e) {
            var t = this.titleTemplate({
                appName: this.settings.get("app.name"),
                adminFirstName: e.first_name,
                adminName: e.name
            });
            this.$(".intercom-sheet-header-title").html(t)
        },
        setGenericTitle: function() {
            this.model && 0 !== this.model.parts.byAdmin().size() && this.model.lastHumanAdmin() ? this.resetTitle() : (this.$(".intercom-sheet-header-generic-title").html(o.translate("new-message")), this.model && !this.appProfileNameIsVisible() && this.model.lastHumanAdmin() || this.$(".intercom-sheet-header").addClass("intercom-sheet-header-show-generic"))
        },
        renderAdminLastActive: function(e) {
            var t = e ? !0 : this.hasLastActiveAdminTimestamp(),
                n = e ? 1e3 * e.last_seen_at : this.getLastActiveTimestamp();
            this.$(".intercom-sheet-header-title").toggleClass("intercom-sheet-header-with-presence", t), this.$(".intercom-sheet-header-title-container").append(this.lastActiveView.render({
                last_active: n
            }).el)
        },
        renderTeamLastActive: function() {
            this.$(".intercom-sheet-header-title").toggleClass("intercom-sheet-header-with-presence", this.hasLastActiveTeamTimestamp()), this.$(".intercom-sheet-header-title-container").append(this.lastActiveView.render().el)
        },
        hasLastActiveTeamTimestamp: function() {
            return void 0 !== this.app.get("last_active")
        },
        hasLastActiveAdminTimestamp: function() {
            return void 0 !== this.model && void 0 !== this.model.lastAdmin() && void 0 !== this.model.lastAdminActiveTimestamp()
        },
        getLastActiveTimestamp: function() {
            return this.hasLastActiveAdminTimestamp() ? this.model.lastAdminActiveTimestamp() : void 0
        },
        renderInterbotEmailCollector: function(e) {
            this.stashedComposerText = this.composerView.getText(), e ? R(this) : this.composerView.hide(), this.interbotEmailCollectorView || (this.interbotEmailCollectorView = new z({
                parentView: this,
                conversation: this.model,
                user: this.user,
                settings: this.settings
            })), this.$(".intercom-composer-container").append(this.interbotEmailCollectorView.render().el), this.interbotEmailCollectorView.setText(this.stashedInterbotEmailCollectorText), this.interbotEmailCollectorView.show(e, this.settings.get("app.branding-enabled"))
        },
        onInterbotEmailAdded: function(e) {
            var t = this,
                n = this._findOrCreateInterbotContext();
            n.setUserHasEmail.call(n), this.hideInterbotEmailCollector(), setTimeout(function() {
                return t.createMessageOrComment(e, [])
            })
        },
        onInterbotEmailCancel: function(e) {
            var t = this,
                n = this._findOrCreateInterbotContext();
            n.setUserCancelledEmailCollection.call(n), setTimeout(function() {
                return t.createMessageOrComment(e, [])
            }), this.hideInterbotEmailCollector()
        },
        hideInterbotEmailCollector: function() {
            this.interbotEmailCollectorView && (this.stashedInterbotEmailCollectorText = this.interbotEmailCollectorView.getText(), this.interbotEmailCollectorView.hide(), this.showComposerWithStashedText(), this.composerView.updatePosition(), U(this))
        },
        hideTopArticleCard: function() {
            this.articleId = void 0, this.$(".intercom-article-card-container").hide()
        },
        showTopArticleCard: function(e) {
            this.hideAppProfile(!1), this.articleId = e.articleId, this.$(".intercom-article-card-container").show().html(this.articleCardMessageTemplate({
                cardURL: e.url,
                renderedCard: F.renderBlocks([e])
            })), this.showCustomTitleRemoveGeneric(), this.composerView.show().reset().setPlaceholder(o.translate("new-article-conversation-placeholder"))
        },
        showCustomTitleRemoveGeneric: function() {
            this.$(".intercom-sheet-header").removeClass("intercom-sheet-header-show-generic"), this.$(".intercom-sheet-header-title-container").show()
        },
        showComposerWithStashedText: function() {
            this.composerView.setText(this.stashedComposerText), this.stashedComposerText = "", this.composerView.show(), this.composerView.focus()
        },
        renderComposer: function() {
            this.$(".intercom-composer-container").append(this.composerView.render().el)
        },
        renderPoweredBy: function() {
            if (this.settings.get("app.branding-enabled")) {
                var e = this.model && this.model.getMessage().byAdmin(),
                    t = e ? "outbound" : "inbound";
                this.$(".intercom-composer").append(this.poweredByView.render({
                    trackingType: t
                }).el), this.$el.addClass("intercom-powered-by-enabled")
            }
        },
        renderAutoResponse: function(e) {
            var t = new T({
                model: this.model,
                settings: this.settings
            });
            t.isActive() && (this.$(".intercom-conversation-part:first").after(t.render(e).$el), this.autoResponseView = t, this.regroupComments())
        },
        renderBrowserNotificationPrompt: function() {
            if (D.isEnabled("browser_notifications") && (void 0 !== this.autoResponseView || this._legacyInterbotEnabled()) && void 0 === this.browserNotificationPromptView) {
                var e = new S({
                    model: this.model,
                    settings: this.settings
                });
                e.isActive() && (this.$(".intercom-conversation-parts").append(e.render().$el), this.browserNotificationPromptView = e)
            }
        },
        addIsTypingWithAnimation: function(e, t) {
            if (void 0 === this.isTypingView) {
                var n = new j;
                this.$(".intercom-conversation-parts").append(n.render({
                    adminAvatar: e,
                    adminInitials: t
                }).$el), this.scrollToBottom(), P(this, n), this.isTypingTimeout = setTimeout(i.bind(function() {
                    this.removeIsTypingWithAnimation()
                }, this), 2e4), this.isTypingView = n
            }
        },
        removeIsTypingWithAnimation: function() {
            void 0 !== this.isTypingView && (O(this, this.isTypingView), this.isTypingView = void 0, clearTimeout(this.isTypingTimeout))
        },
        removeIsTyping: function() {
            void 0 !== this.isTypingView && (this.isTypingView.remove(), this.isTypingView = void 0, clearTimeout(this.isTypingTimeout))
        },
        removeAutoResponse: function() {
            void 0 !== this.autoResponseView && (q(this.autoResponseView), this.autoResponseView.isAnonymousUserWithoutEmail() || (this.autoResponseView = void 0, this.regroupComments()))
        },
        addUserPartWithAnimation: function(e) {
            var t = new w({
                    model: e,
                    conversation: this.model
                }),
                n = this.groupParts(e, t);
            return this.$(".intercom-conversation-parts").append(t.render().$el), this.composerView.reset(), I(this, t, n), this._maybeShowEmailCollector(!0), t
        },
        addAdminPartWithAnimation: function(e) {
            var t = new w({
                model: e,
                conversation: this.model
            });
            return this.$(".intercom-conversation-parts").append(t.render().$el), e === this.model.parts.last() ? M(this, t, this.isTypingView, this.isGroupedWithPreviousPart(e)) : this.groupParts(e, t), this.renderTitle(), this.scrollToBottom(), this.removeIsTyping({
                animate: !1
            }), this.removeAutoResponse(), e.byInterbot() || this.hideAppProfile(), this.model.isUnread() && t.setUnread(), this.markConversationAsRead(), t
        },
        markConversationAsRead: function() {
            p.isPageVisible() && s.isActive() ? this.markActiveConversationAsRead() : this.markConversationAsReadWhenActive()
        },
        markConversationAsReadWhenActive: function() {
            var e = i.once(i.bind(this.markActiveConversationAsRead, this));
            s.onActive(e), p.onVisible(e)
        },
        markActiveConversationAsRead: function() {
            this.shouldMarkConversationAsRead() && (this.model.markAsRead(), this.nexusClient.onConversationSeen(this.model.id), setTimeout(i.bind(function() {
                this.$(".intercom-conversation-part").removeClass("intercom-conversation-part-unread")
            }, this), 3e3))
        },
        shouldMarkConversationAsRead: function() {
            return this.isActive() && !this.isMinimized() && this.model && this.model.isUnread()
        },
        focusComposerIfAppropriate: function() {
            var e = this.model && 1 === this.model.parts.nonLwrResponses().size(),
                t = r.features.touchScreen();
            e || t ? this.composerView.blur() : this.composerView.focus()
        },
        createComment: function(e) {
            var t = u.timer("createComment");
            this.model.addPart(e);
            var n = this.model.parts,
                o = this.addUserPartWithAnimation(e);
            this.model.set({
                interbot_state: "user_message_received"
            }), this._maybeStartInterbot();
            var r = function() {
                    c.playDelivered(), t.resolve()
                },
                a = i.throttle(function() {
                    u.increment("saveCommentFailed"), t.fail(), c.playFailed(), o.renderFailed()
                }, 1e3, {
                    leading: !1
                }),
                s = function() {
                    n.get(e) && e.save().then(r).fail(a)
                };
            o.on("retry", s), e.isUpload() ? o.on("part:save", s) : s()
        },
        shouldShowAutoResponder: function() {
            if (this._interbotEnabledAndLeadHasEmail() || this.model.hasAnyInterbotComments()) return !1;
            var e = !this._interbotEnabled(),
                t = this.user.isUserRole(),
                n = this.user.hasEmail();
            return e || t || n
        },
        createConversation: function(e) {
            var t = u.timer("createConversation");
            this.model = e, this.model.set("articleId", this.articleId), this.listenTo(this.model.parts, "add", this.onPartAdded), this.collection.add(this.model);
            var n = e.getMessage(),
                r = this.addUserPartWithAnimation(n);
            this.composerView.reset().disable().setPlaceholder(o.translate("new-comment-placeholder"));
            var a = i.bind(function() {
                    this.model.hasArticleMessage() && (this.hideTopArticleCard(), this.$(".intercom-conversation-parts").empty(), this.renderParts(), this._maybeShowEmailCollectorOrStartInterbot()), c.playDelivered(), this.shouldShowAutoResponder() ? this.renderAutoResponse({
                        delay: 1e3
                    }) : this._maybeStartInterbot(), this.renderBrowserNotificationPrompt(), this.composerView.enable().setConversationId(this.model.id), this.focusComposerIfAppropriate(), this.user.fetchRealtimeSettingsIfMissing(), f.save({
                        view: "conversation-" + this.model.id
                    }), t.resolve()
                }, this),
                s = i.throttle(function() {
                    t.fail(), u.increment("saveConversationFailed"), c.playFailed(), r.renderFailed()
                }, 1e3, {
                    leading: !1
                }),
                l = function() {
                    e.save().then(a).fail(s)
                };
            r.on("retry", l), n.isUpload() ? r.on("part:save", l) : l()
        },
        setComposerVisibility: function() {
            var e = this.model.getMessage().isLwrMessage() && 1 === this.model.parts.nonLwrResponses().size();
            e ? this.composerView.hide() : this.composerView.show(), this.composerView.updatePosition()
        },
        reset: function() {
            this.model && this.stopListening(this.model.parts), this.resetTitle(), this.$(".intercom-sheet-content").off("scroll"), this.$(".intercom-conversation-parts").empty(), this.$(".intercom-app-profile-container").empty().hide(), this.composerView.blur().reset(), this.hideTopArticleCard()
        },
        resetTitle: function() {
            this.$(".intercom-sheet-header-generic-title").removeAttr("style"), this.$(".intercom-sheet-header-title-container").removeAttr("style"), this.$(".intercom-sheet-header").removeClass("intercom-sheet-header-show-generic")
        },
        isPreview: function() {
            return this.$el.hasClass("intercom-conversation-preview")
        },
        didHide: function() {
            this.reset()
        },
        didMaximize: function() {
            this.markConversationAsRead()
        },
        _maybeUpdateLastActive: function() {
            var e = l.now();
            this.app.set("last_active", parseInt(e / 1e3, 10)), this.model.updateLastAdminActiveTimestamp(parseInt(e / 1e3, 10)), this.renderAdminLastActive()
        },
        _maybeShowEmailCollectorOrStartInterbot: function(e) {
            this._interbotEnabled() ? this._maybeStartInterbot() : this._maybeShowEmailCollector(e)
        },
        _maybeShowEmailCollector: function(e) {
            !this._interbotEnabled() && this.shouldShowAnonymousEmailCollector() && (this.emailCollectorView = new E({
                parentView: this,
                settings: this.settings
            }), this.emailCollectorView.render(), this.emailCollectorView.insertIntoParentView(), this.regroupComments(), e === !0 && V(this.emailCollectorView))
        },
        _maybeStartInterbot: function() {
            if ((!this.isVisitorAutoMessage() || 1 !== this.model.parts.length) && this._legacyInterbotEnabled()) {
                var e = this._findOrCreateInterbotContext();
                e.isInitialState() ? (this.stopListening(this.model, "conversation:email-collector"), this.listenTo(this.model, "conversation:email-collector", this.renderInterbotEmailCollector)) : e.showEmailCollector() && this.renderInterbotEmailCollector(!1)
            }
        },
        _findOrCreateInterbotContext: function() {
            var e = this.model.interbotContext || X(this.model, this.user, this.composerView);
            return this.model.interbotContext = e, e
        },
        _legacyInterbotEnabled: function() {
            return void 0 !== this.model.get("interbot_state") && D.isEnabled("interbot")
        },
        _serversideInterbotEnabled: function() {
            return this._legacyInterbotEnabled() ? !1 : this.settings.get("app.server-side-interbot")
        },
        _interbotEnabled: function() {
            return this._legacyInterbotEnabled() || this._serversideInterbotEnabled() || this.model.hasAnyInterbotComments()
        },
        _interbotEnabledAndLeadHasEmail: function() {
            return this._interbotEnabled() && !this.user.isUserRole() && this.user.hasEmail()
        },
        onTeamLastSeenChange: function() {
            D.isEnabled("video-hovercard") || this.renderTeamLastActive()
        },
        onPartAdded: function(e) {
            e.byAdmin() && (this.nexusClient.onConversationReceived(this.model.id), this._maybeUpdateLastActive(), this.addAdminPartWithAnimation(e), e.byInterbot() || this.hideInterbotEmailCollector())
        },
        onPartChange: function(e) {
            e.byUser() && e.changed.seen_by_admin === e.SEEN && this._maybeUpdateLastActive()
        },
        previousPart: function(e) {
            return this.model.parts.at(this.model.parts.indexOf(e) - 1)
        },
        nextPart: function(e) {
            return this.model.parts.at(this.model.parts.indexOf(e) + 1)
        },
        hasPreviousPart: function(e) {
            return !i.isUndefined(this.previousPart(e))
        },
        hasNextPart: function(e) {
            return !i.isUndefined(this.nextPart(e))
        },
        isGroupedWithPreviousPart: function(e) {
            return this.hasPreviousPart(e) && this.isGroupedWithNextPart(this.previousPart(e)) && this.isGroupedWithPart(this.previousPart(e), e)
        },
        isGroupedWithNextPart: function(e) {
            return this.hasNextPart(e) && this.isGroupedWithPart(e, this.nextPart(e))
        },
        isSameAdminAuthor: function(e, t) {
            return e.byInterbot() && t.byInterbot() ? !0 : t.getAuthorEmail() === e.getAuthorEmail()
        },
        isGroupedWithPart: function(e, t) {
            if (t.isNew() && e.isNew()) return t.byInterbot() && e.byInterbot() ? !0 : t.byUser() && e.byUser();
            if (t.isNew()) {
                var n = parseInt(l.now() / 1e3, 10),
                    i = t.byUser() && e.byUser(),
                    o = !t.byUser() && this.isSameAdminAuthor(e, t);
                return Math.abs(n - e.get("created_at")) <= 60 && (i || o)
            }
            return !e.isNew() && t.getAuthorEmail() === e.getAuthorEmail() && t.byUser() === e.byUser() && t.get("created_at") - e.get("created_at") <= 60
        },
        onAdminIsTyping: function(e) {
            if (this.model && this.model.id === e.eventData.conversationId) {
                var t = a.firstInitial(e.eventData.adminName),
                    n = e.eventData.adminAvatar;
                n.indexOf("/assets/msg-user-icon-73") >= 0 && (n = null), this.addIsTypingWithAnimation(n, t)
            }
        },
        createMessageOrComment: function(e, t) {
            this.model ? this.createComment(v.fromBodyAndUploads(e, t, this.model)) : this.createConversation(b.fromBodyAndUploads(e, t))
        },
        scrollHeaderIfRequired: function() {
            this.$(".intercom-app-profile-team-and-activity").is(":visible") && B(this, this.appProfileNameIsVisible())
        },
        appProfileNameIsVisible: function() {
            if (!this.$(".intercom-app-profile-team-and-activity").is(":visible")) return !1;
            var e = this.getScrollTop(),
                t = this.$(".intercom-app-profile-team-and-activity").position().top + this.$(".intercom-app-profile-team-and-activity").outerHeight();
            return t > e
        },
        onComposerSubmitted: function(e, t) {
            t.isEmpty() ? this.createMessageOrComment(e, []) : t.each(i.bind(function(t) {
                this.createMessageOrComment(e, t)
            }, this))
        },
        isVisitorAutoMessage: function() {
            return this.model && this.model.parts.first().byAdmin() ? this.model.parts.first().isChatAutoMessage() && this.settings.get("user.anonymous") : !1
        },
        shouldShowAnonymousEmailCollector: function() {
            return D.isEnabled("v3_email_attribute") ? (this.isVisitorAutoMessage() || this.model.hasArticleMessage()) && this.model.hasUserPart() && i.isEmpty(this.settings.get("email")) && !this.emailCollectorIsActive() : (this.isVisitorAutoMessage() || this.model.hasArticleMessage()) && this.model.hasUserPart() && !this.emailCollectorIsActive() && i.isEmpty(this.settings.get("user.anonymous-email"));
        },
        onComposerIsTyping: function() {
            this.model && this.model.hasUserComment() || this.composerView.queueEnterToSendAnimation(), this.model && (this._updateLastComposerEventTimestamp(), this.settings.get("app.rtm-enabled") && this.nexusClient.postEvent("UserIsTyping", {
                conversationId: this.model.id
            }))
        },
        _updateLastComposerEventTimestamp: function() {
            if (this.model) {
                var e = this.model.get("interbotConditionsMatcher");
                e && e.setContext({
                    lastComposerEvent: l.now()
                })
            }
        },
        onMouseMovedOrClicked: i.throttle(function() {
            this.model && this.model.isSmallAnnouncement() && this.isPreview() && this.$el.removeClass("intercom-conversation-preview")
        }, 100),
        onAppProfileAvatarClicked: i.throttle(function() {
            $(this)
        }, 1e3),
        onConversationScroll: i.throttle(function() {
            this.scrollHeaderIfRequired()
        }, 100)
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(76),
        r = n(77),
        a = n(6),
        s = "tracked-events";
    e.exports = {
        initialize: function(e) {
            this.settings = e
        },
        trackEvent: function(e) {
            if (!this.isTrackedEvent(e)) {
                var t = this.getTrackedEvents();
                t.push(e), r.localStorage.set(s, a.stringify(t)), o.increment(e)
            }
        },
        trackSignedOutEvent: function(e) {
            this.settings && this.settings.get("user.anonymous") && this.trackEvent(e)
        },
        isTrackedEvent: function(e) {
            return i.indexOf(this.getTrackedEvents(), e) >= 0
        },
        getTrackedEvents: function() {
            return a.parse(r.localStorage.get(s) || "[]")
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = {},
        r = !1;
    t.onNewComment = function(e) {
        var t = e.eventData;
        if (t && t.conversationId && t.adminTimestamp && t.adminTabId) return i.has(o, t.conversationId) ? void(r = !0) : void(o[t.conversationId] = i.pick(t, ["adminTimestamp", "adminTabId"]))
    }, t.invalidateLatencyData = function() {
        o = {}
    }, t.popLatencyDataForConversation = function(e) {
        var t = {};
        return !r && i.has(o, e) && (t = o[e], delete o[e]), t
    }, t.disable = function() {
        r = !0
    }, t.reset = function() {
        t.invalidateLatencyData(), r = !1
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(10),
        r = n(153);
    e.exports = {
        load: function(e) {
            var t = n(154)("./" + e + ".html");
            return function(e) {
                return t.call(this, i.extend({}, e, {
                    t: o.translate,
                    relativeTime: r.relativeTimeInWords
                }))
            }
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return "Invalid Date" !== e.toString()
    }
    var o = n(10),
        r = {
            s: 1e3,
            m: 60,
            h: 60,
            d: 24,
            w: 7
        };
    t.isSameDate = function(e, t) {
        return e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
    }, t.relativeTime = function(e) {
        var t = new Date,
            n = t - e;
        n = Math.max(0, n);
        var i = "s";
        for (var o in r) {
            if (n < r[o]) break;
            i = o, n /= r[o]
        }
        return n = Math.floor(n), {
            unit: i,
            delta: n
        }
    }, t.relativeTimeInWords = function(e, n) {
        if (!i(e)) return "";
        var r = t.relativeTime(e);
        return void 0 !== n && "s" === r.unit ? n : o.translate("X" + r.unit, {
            delta: r.delta
        })
    }, t.absoluteTimeInWords = function(e) {
        var t = e.getHours();
        0 === t && (t = 12), t = t > 12 ? t % 12 : t;
        var n = e.getMinutes() < 10 ? "0" + e.getMinutes() : "" + e.getMinutes(),
            i = e.getHours() < 12 ? "AM" : "PM";
        return t + ":" + n + " " + i
    }, t.lastActiveTimeInWords = function(e) {
        var n = t.relativeTime(e);
        switch (n.unit) {
            case "s":
                return o.translate("active-in-the-last-x-minutes", {
                    minutes: 15
                });
            case "m":
                return n.delta <= 15 ? o.translate("active-in-the-last-x-minutes", {
                    minutes: 15
                }) : o.translate("active-in-the-last-hour");
            case "h":
                return 1 === n.delta ? o.translate("last-active-one-hour-ago") : o.translate("last-active-x-hours-ago", {
                    hours: n.delta
                });
            case "d":
                return 1 === n.delta ? o.translate("last-active-one-day-ago") : o.translate("last-active-x-days-ago", {
                    days: n.delta
                });
            default:
                return o.translate("last-active-more-than-one-week-ago")
        }
    }
}, function(e, t, n) {
    function i(e) {
        return n(o(e))
    }

    function o(e) {
        return r[e] || function() {
            throw new Error("Cannot find module '" + e + "'.")
        }()
    }
    var r = {
        "./admin-avatar.html": 155,
        "./admin-profile.html": 156,
        "./announcement.html": 157,
        "./app-hovercard.html": 158,
        "./app-profile-admin.html": 159,
        "./app-profile.html": 160,
        "./article-card-message.html": 161,
        "./auto-response.html": 162,
        "./browser-notification-prompt.html": 163,
        "./comment-from-blocks.html": 164,
        "./comment-metadata.html": 165,
        "./comment.html": 166,
        "./composer.html": 167,
        "./conversation-item.html": 168,
        "./conversation-title.html": 169,
        "./conversation.html": 170,
        "./conversations.html": 171,
        "./image-only-part.html": 172,
        "./image-viewer.html": 173,
        "./interbot-email-collector.html": 174,
        "./is-typing.html": 175,
        "./knowledgebase-article.html": 176,
        "./last-active.html": 177,
        "./launcher.html": 178,
        "./loading.html": 179,
        "./lwr-emotions-composer.html": 180,
        "./lwr-thumbs-composer.html": 181,
        "./new-anonymous-user.html": 182,
        "./powered-by.html": 183,
        "./small-announcement.html": 184,
        "./sticker-part.html": 185,
        "./upload-part.html": 186,
        "./video-hovercard.html": 187,
        "./video-reply-part.html": 188
    };
    i.keys = function() {
        return Object.keys(r)
    }, i.resolve = o, e.exports = i, i.id = 154
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += hasAvatar ? '<img src="' + __e(avatarUri) + '" alt="' + __e(adminFirstName) + '">' : __e(adminFirstInitial), __p += "\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        with(obj) __p += '<div class="intercom-admin-profile-data-container">\n  <div class="intercom-admin-profile-data">\n  </div>\n</div>\n<div class="intercom-admin-profile-text-container">\n  <p class="intercom-admin-profile-text">' + (null == (__t = message) ? "" : __t) + "</p>\n</div>\n";
        return __p
    }
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) part.adminAvatar() && (__p += '\n  <div class="intercom-announcement-avatar-container">\n    <img src="' + __e(part.adminAvatar()) + '" class="intercom-announcement-avatar" />\n  </div>\n'), __p += '\n<div class="intercom-announcement">\n  <div class="intercom-announcement-body-container">\n    <div class="intercom-announcement-body intercom-embed-body">\n      ' + (null == (__t = partBody) ? "" : __t) + '\n    </div>\n    <div class="intercom-attachments">\n      ', part.uploads.each(function(e) {
                __p += '\n        <div class="intercom-attachment">\n          <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n        </div>\n      "
            }), __p += '\n    </div>\n    <div class="intercom-lwr-composer-container"></div>\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="intercom-launcher-hovercard-close">\n  ' + __e(t("close")) + '\n</div>\n<div class="intercom-launcher-hovercard-welcome">\n  <div class="intercom-launcher-hovercard-admins"></div>\n  <div class="intercom-launcher-hovercard-text">\n    <div class="intercom-launcher-hovercard-app-name">' + __e(appName) + '</div>\n    <div class="intercom-launcher-hovercard-welcome-text"></div>\n  </div>\n</div>\n<div class="intercom-launcher-hovercard-textarea">\n  <textarea placeholder="' + (null == (__t = t("new-conversation-placeholder")) ? "" : __t) + '"></textarea>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-active-admin">\n  ' + (null == (__t = adminAvatar) ? "" : __t) + "\n  ", firstName && (__p += '\n    <div class="intercom-active-admin-name">\n      ' + __e(firstName) + "\n    </div>\n  "), __p += "\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="intercom-app-profile-team-and-activity">\n  <div class="intercom-app-profile-team">' + __e(appName) + '</div>\n  <div class="intercom-app-profile-last-active"></div>\n</div>\n<div class="intercom-active-admins"></div>\n<div class="intercom-app-profile-text">\n  <p>' + (null == (__t = message) ? "" : __t) + "</p>\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<a href="' + __e(cardURL) + '" target="_blank" class="intercom-article-lightbox-link">\n  ' + (null == (__t = renderedCard) ? "" : __t) + "\n</a>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-auto-response-text">\n  ', medianResponseTimeEnabled ? (__p += "\n    " + (null == (__t = medianResponseTimeBodyHTML) ? "" : __t) + "\n    ", haveEmail && (__p += "\n      <p>" + __e(t("median-reply-autoresponse-with-email", {
                email: email
            })) + "</p>\n    "), __p += "\n  ") : (__p += "\n    ", customAutoResponseEnabled ? (__p += "\n      ", customAutoResponse && (__p += "\n        <p>" + __e(customAutoResponse) + "</p>\n      "), __p += "\n    ") : (__p += "\n      ", __p += haveEmail ? "\n        <p>" + __e(t("team-will-reply-asap")) + "</p>\n        <p>" + __e(t("check-back-or-email", {
                email: email
            })) + "</p>\n      " : "\n        <p>" + __e(t("message-autoresponse")) + "</p>\n      ", __p += "\n    "), __p += "\n  "), __p += "\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __p = "";
        with(obj) __p += '<div class="intercom-auto-response intercom-auto-response-active">\n  <div class="intercom-auto-response-text">\n    <p>If you don\'t want to leave your email you can also get notified via desktop notifications.</p>\n  </div>\n  <div class="intercom-browser-notifications-button-container">\n    <span class="intercom-browser-notification-button">Turn on push notifications</span>\n  </div>\n</div>\n';
        return __p
    }
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-comment ' + __e(part.byUser() ? "intercom-comment-by-user" : "intercom-comment-by-admin") + " " + __e(part.byInterbot() ? "intercom-comment-by-interbot" : "") + '">\n  ', part.byAdmin() && (__p += "\n    ", __p += part.adminAvatar() ? '\n      <img src="' + __e(part.adminAvatar()) + '" class="intercom-comment-avatar">\n    ' : '\n      <div class="intercom-comment-avatar intercom-default-admin-avatar">' + __e(part.adminInitials()) + "</div>\n    ", __p += "\n  "), __p += "\n  ", _.each(connectedComponentsExceptLast, function(e, t) {
                __p += "\n    ", shouldNotWrapInBubble(e) ? __p += "\n      " + (null == (__t = articleCardMessageTemplate({
                    cardURL: e[0].url,
                    renderedCard: renderBlocks(e)
                })) ? "" : __t) + "\n    " : (__p += '\n      <div class="intercom-comment-body-container">\n        <div class="intercom-comment-body intercom-embed-body">\n          ' + (null == (__t = renderBlocks(e)) ? "" : __t) + "\n        </div>\n        ", 0 === t && (__p += '\n          <div class="intercom-comment-caret"></div>\n        '), __p += "\n      </div>\n    "), __p += '\n    <div class="intercom-conversation-part-component-spacer"></div>\n  '
            }), __p += "\n  ", shouldNotWrapInBubble(lastComponent) ? (__p += "\n    " + (null == (__t = articleCardMessageTemplate({
                cardURL: lastComponent[0].url,
                renderedCard: renderBlocks(lastComponent)
            })) ? "" : __t) + '\n    <div class="intercom-conversation-part-component-spacer"></div>\n    ', part.uploads.length > 0 && (__p += '\n      <div class="intercom-comment-body-container">\n        <div class="intercom-attachments intercom-attachments-stand-alone">\n          ', part.uploads.each(function(e) {
                __p += '\n            <div class="intercom-attachment">\n              <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n            </div>\n          "
            }), __p += "\n        </div>\n      </div>\n    "), __p += "\n  ") : (__p += '\n    <div class="intercom-comment-body-container">\n      <div class="intercom-comment-body intercom-embed-body">\n        ' + (null == (__t = renderBlocks(lastComponent)) ? "" : __t) + "\n      </div>\n      ", 0 === connectedComponentsExceptLast.length && (__p += '\n        <div class="intercom-comment-caret"></div>\n      '), __p += '\n      <div class="intercom-attachments">\n        ', part.uploads.each(function(e) {
                __p += '\n          <div class="intercom-attachment">\n            <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n          </div>\n        "
            }), __p += '\n      </div>\n      <div class="intercom-lwr-composer-container"></div>\n    </div>\n  '), __p += '\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        with(obj) __p += '<div class="intercom-comment-metadata">\n  <span class="intercom-comment-state">\n    ' + (null == (__t = commentState) ? "" : __t) + '\n  </span>\n</div>\n<div class="intercom-comment-readstate"></div>\n';
        return __p
    }
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-comment ' + __e(part.byUser() ? "intercom-comment-by-user" : "intercom-comment-by-admin") + " " + __e(part.byInterbot() ? "intercom-comment-by-interbot" : "") + '">\n  ', part.byAdmin() && (__p += "\n    ", __p += part.adminAvatar() ? '\n      <img src="' + __e(part.adminAvatar()) + '" class="intercom-comment-avatar">\n    ' : '\n      <div class="intercom-comment-avatar intercom-default-admin-avatar">' + __e(part.adminInitials()) + "</div>\n    ", __p += "\n  "), __p += '\n  <div class="intercom-comment-body-container">\n    <div class="intercom-comment-body intercom-embed-body">\n      ' + (null == (__t = partBody) ? "" : __t) + '\n    </div>\n    <div class="intercom-attachments">\n      ', part.uploads.each(function(e) {
                __p += '\n        <div class="intercom-attachment">\n          <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n        </div>\n      "
            }), __p += '\n    </div>\n    <div class="intercom-comment-caret"></div>\n    <div class="intercom-lwr-composer-container"></div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="intercom-composer-upload-error">' + __e(t("max-upload-size", {
                number: 40
            })) + '</div>\n<div class="intercom-composer-textarea-container">\n  <input type="submit" class="intercom-composer-send-button" value="' + __e(t("send")) + '"></input>\n  <input style="display:none" type="file">\n  <div class="intercom-composer-emoji-selector-container"></div>\n  <div class="intercom-composer-textarea">\n    <strong class="intercom-composer-action-button intercom-composer-emoji-button" title="' + __e(t("insert-emoji")) + '"></strong>\n    <strong class="intercom-composer-action-button intercom-composer-upload-button" title="' + __e(t("send-attachment")) + '"></strong>\n    <pre><span></span><br></pre>\n    <textarea></textarea>\n  </div>\n</div>\n<div class="intercom-composer-press-enter-to-send">' + __e(t("press-enter-to-send")) + "</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) conversation.lastHumanAdmin() ? (__p += "\n  ", __p += conversation.lastAdminAvatar(!1) ? '\n    <img src="' + __e(conversation.lastAdminAvatar(!1)) + '" class="intercom-conversations-item-admin-avatar" />\n  ' : '\n    <div class="intercom-conversations-item-admin-avatar intercom-conversations-item-admin-avatar-no-image">' + __e(conversation.lastAdminInitials()) + "</div>\n  ", __p += "\n") : __p += '\n    <div class="intercom-conversations-item-user-avatar"></div>\n', __p += '\n<div class="intercom-conversations-item-body-container">\n  <div class="intercom-conversations-item-body">\n    <div class="intercom-conversations-item-header">\n      <div class="intercom-conversations-item-timestamp"></div>\n      <div class="intercom-conversations-item-title-container">\n        <div class="intercom-conversations-item-title">\n          ', __p += conversation.lastHumanAdmin() ? "\n            " + __e(conversation.lastAdminName(!1)) + "\n          " : "\n            " + __e(t("you")) + "\n          ", __p += '\n        </div>\n      </div>\n    </div>\n    <div class="intercom-conversations-item-summary">\n      <div class="intercom-conversations-item-readstate"></div>\n      ' + (null == (__t = preview) ? "" : __t) + "\n    </div>\n  </div>\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += adminName ? "\n  " + __e(adminFirstName) + "\n" : "\n  " + __e(appName) + "\n", __p += "\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __p = "";
        with(obj) __p += '<div class="intercom-sheet-header">\n  <a class="intercom-sheet-header-button intercom-sheet-header-conversations-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n    <div class="intercom-unread-counter"></div>\n  </a>\n  <div class="intercom-sheet-header-title-container">\n    <b class="intercom-sheet-header-title"></b>\n  </div>\n  <div class="intercom-sheet-header-generic-title"></div>\n  <a class="intercom-sheet-header-button intercom-sheet-header-close-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n  </a>\n  <a class="intercom-sheet-header-button intercom-sheet-header-minimize-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n  </a>\n</div>\n<div class="intercom-sheet-body">\n  <div class="intercom-sheet-spinner"></div>\n</div>\n<div class="intercom-sheet-content">\n  <div class="intercom-sheet-content-container">\n    <div class="intercom-app-profile-container"></div>\n    <div class="intercom-article-card-container"></div>\n    <div class="intercom-conversation-parts-container">\n      <div class="intercom-conversation-parts"></div>\n    </div>\n  </div>\n</div>\n<div class="intercom-composer-container">\n</div>\n';
        return __p
    }
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-sheet-header">\n  <div class="intercom-sheet-header-title-container">\n    <b class="intercom-sheet-header-title">' + __e(appName) + '</b>\n  </div>\n  <a class="intercom-sheet-header-button intercom-sheet-header-close-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n  </a>\n</div>\n<div class="intercom-sheet-body">\n  <div class="intercom-sheet-spinner"></div>\n</div>\n<div class="intercom-sheet-content intercom-conversations-content">\n  <div class="intercom-sheet-content-container">\n    <div class="intercom-conversations-items"></div>\n    <div class="intercom-conversations-spinner"></div>\n  </div>\n  <div class="intercom-no-conversations">\n    <div class="intercom-no-conversations-icon"></div>\n    ' + __e(t("no-conversations")) + "\n  </div>\n</div>\n", inboundMessagingEnabled && (__p += '\n  <div class="intercom-sheet-footer intercom-conversations-footer">\n    <a class="intercom-conversations-new-conversation-button" href="#"><i></i>' + __e(t("new-message")) + "</a>\n  </div>\n"), __p += "\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-comment ' + __e(isAdminPart ? "intercom-image-only-admin-comment" : "intercom-image-only-user-comment") + '">\n  ', isAdminPart && adminAvatar && (__p += '\n    <img src="' + __e(adminAvatar) + '" class="intercom-comment-avatar">\n  '), __p += '\n  <div class="intercom-comment-body-container">\n    <div class="intercom-comment-body intercom-image-only-comment-body">\n      ' + (null == (__t = partBody) ? "" : __t) + '\n    </div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __p = "";
        with(obj) __p += '<div class="intercom-image-viewer-overlay"></div>\n';
        return __p
    }
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="intercom-composer-textarea-container">\n  <div class="intercom-interbot-email-error-text-hidden intercom-interbot-email-error-text">\n    ' + __e(t("please-enter-a-valid-email")) + '\n  </div>\n  <div class="intercom-interbot-email-collector-input-wrapper">\n    <button class="intercom-interbot-composer-send-button">' + __e(t("not-now")) + '</button>\n    <span class="intercom-interbot-email-collector-button-wrapper">\n      <input type="email" placeholder="youremail@domain.com" class="intercom-interbot-email-collector-input">\n    </span>\n  </div>\n</div>\n<div class="intercom-composer-press-enter-to-send interbot-enter-to-send">' + __e(t("press-enter-to-send")) + "</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-comment intercom-comment-by-admin">\n  ', __p += adminAvatar ? '\n    <img src="' + __e(adminAvatar) + '" class="intercom-comment-avatar">\n  ' : '\n    <div class="intercom-comment-avatar intercom-default-admin-avatar">' + __e(adminInitials) + "</div>\n  ", __p += '\n  <div class="intercom-comment-body-container">\n    <div class="intercom-comment-body">\n      <div class="intercom-is-typing-icon"></div>\n    </div>\n    <div class="intercom-comment-caret"></div>\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        with(obj) __p += '<div class="intercom-knowledgebase-article-overlay"></div>\n<iframe class="intercom-knowledgebase-article-body" src=' + (null == (__t = iFrameUrl) ? "" : __t) + ">\n";
        return __p
    }
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            with(obj) __p += '<span class="relative-time-in-text">' + __e(lastActive) + "</span>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __p = "";
        with(obj) __p += '<div class="intercom-launcher-button">\n  <div class="intercom-launcher-initials"></div>\n</div>\n<div class="intercom-launcher-badge"></div>\n<div class="intercom-launcher-preview">\n  <div class="intercom-launcher-preview-body"></div>\n  <div class="intercom-launcher-preview-caret"></div>\n  <div class="intercom-launcher-preview-close"></div>\n</div>\n';
        return __p
    }
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="intercom-sheet-header">\n  <div class="intercom-sheet-header-title-container">\n    <b class="intercom-sheet-header-title">' + __e(appName) + '</b>\n  </div>\n  <a class="intercom-sheet-header-button intercom-sheet-header-close-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n  </a>\n</div>\n<div class="intercom-sheet-body">\n  <div class="intercom-sheet-spinner"></div>\n</div>\n<div class="intercom-sheet-content">\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __p = "";
        with(obj) __p += '<div class="intercom-lwr-composer-options intercom-lwr-composer-options-emotions">\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-happy" data-option="happy">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-neutral" data-option="neutral">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-sad" data-option="sad">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n</div>\n';
        return __p
    }
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __p = "";
        with(obj) __p += '<div class="intercom-lwr-composer-options intercom-lwr-composer-options-thumbs">\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-thumbs-up" data-option="thumbs_up">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-thumbs-down" data-option="thumbs_down">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n</div>\n';
        return __p
    }
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += haveEmail ? "\n  <p>" + __e(t("anonymous-email-response", {
                email: email
            })) + "</p>\n" : "\n  <p>" + __e(t(emailCollectorText)) + '</p>\n  <div class="intercom-new-anonymous-user-input-container">\n    <input type="email" name="email" autocapitalize="off" placeholder="' + __e(t("your-email")) + '" formnovalidate="true"/>\n    <input type="submit" value="" />\n  </div>\n', __p += "\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            with(obj) __p += '<a href="https://www.intercom.io?utm_source=web-app&amp;utm_medium=' + __e(trackingType) + '&amp;utm_campaign=powered-by-intercom" target="_blank">\n  <i></i>\n  <span>We run on <u>Intercom</u></span>\n</a>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) part.adminAvatar() && (__p += '\n  <div class="intercom-small-announcement-avatar-container">\n    <img src="' + __e(part.adminAvatar()) + '" class="intercom-small-announcement-avatar" />\n  </div>\n'), __p += '\n<div class="intercom-small-announcement">\n  <div class="intercom-small-announcement-body-container">\n    <div class=" intercom-small-announcement-body intercom-embed-body">\n      ' + (null == (__t = partBody) ? "" : __t) + '\n    </div>\n    <div class="intercom-attachments">\n      ', part.uploads.each(function(e) {
                __p += '\n        <div class="intercom-attachment">\n          <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n        </div>\n      "
            }), __p += '\n    </div>\n    <div class="intercom-lwr-composer-container"></div>\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-comment ' + __e(isAdminPart ? "intercom-sticker-admin-comment" : "intercom-sticker-user-comment") + '">\n  ', isAdminPart && adminAvatar && (__p += '\n    <img src="' + __e(adminAvatar) + '" class="intercom-comment-avatar">\n  '), __p += '\n  <div class="intercom-comment-body-container">\n    <div class="intercom-comment-body intercom-sticker-comment-body">\n      ', __p += nativeStickerSupport ? '\n        <div class="intercom-sticker-native" title="' + __e(stickerIdentifier) + '">\n          ' + __e(unicodeSticker) + "\n        </div>\n      " : '\n        <div title="' + __e(stickerIdentifier) + '">\n          <img alt="' + __e(stickerIdentifier) + '" src="' + __e(stickerUrl) + '" class="intercom-sticker-image" style="cursor:default;">\n        </div>\n      ', __p += '\n    </div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-comment intercom-comment-by-user intercom-upload-comment ', upload.isImage() && (__p += "intercom-upload-image"), __p += " " + __e(showSending ? "intercom-upload-is-uploading" : "") + '">\n  <div class="intercom-comment-body-container">\n    <div class="intercom-comment-body intercom-upload-body">\n      ', upload.isImage() ? (__p += "\n        ", __p += upload.hasDimensions() ? '\n          <img src="' + __e(upload.url()) + '" style="width: ' + __e(upload.width()) + "px; height: " + __e(upload.height()) + 'px;" alt="' + __e(upload.name()) + '">\n        ' : '\n          <img src="' + __e(upload.url()) + '" alt="' + __e(upload.name()) + '">\n        ', __p += "\n      ") : __p += '\n        <a href="' + __e(upload.url()) + '" target="_blank">' + __e(upload.name()) + "</a>\n      ", __p += '\n    </div>\n    <div class="intercom-comment-caret"></div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n    <div class="intercom-comment-metadata">\n      <span class="intercom-comment-state">\n        ', showFailed && (__p += "\n          " + __e(t("failed")) + "\n        "), __p += "\n        ", showSending && (__p += "\n          " + __e(t("uploading")) + '\n          <div class="intercom-attachment-progress-bar">\n            <div class="intercom-attachment-progress-percentage"></div>\n          </div>\n          <span class="intercom-upload-remove"></span>\n        '), __p += "\n      </span>\n    </div>\n  </div>\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-video-launcher-video-area">\n  ', __p += isClippingSupported ? '\n    <svg height="310">\n      <foreignObject width="234" height="310">\n        <video class="' + (null == (__t = video.className) ? "" : __t) + '" autoplay loop muted >\n            <source src="' + (null == (__t = video.source) ? "" : __t) + '" >\n        </video>\n      </foreignObject>\n      <defs>\n        <clipPath id="intercom-video-launcher-hovercard-clip-path">\n          <polygon points="0 5, 5 5, 5 0, 229 0, 229 5, 234 5, 234 295, 229 295, 229 300, 215 300, 205 310, 195 300, 5 300, 5 295, 0 295" />\n          <circle cx="5" cy="5" r="5"/>\n          <circle cx="229" cy="5" r="5"/>\n          <circle cx="229" cy="295" r="5"/>\n          <circle cx="5" cy="295" r="5"/>\n        </clipPath>\n      </defs>\n    </svg>\n    <div class="intercom-launcher-hovercard-video-overlay intercom-launcher-hovercard-video-overlay-withcaret">\n    </div>\n  ' : '\n    <video class="' + (null == (__t = video.className) ? "" : __t) + '" autoplay loop muted >\n        <source src="' + (null == (__t = video.source) ? "" : __t) + '" >\n    </video>\n    <div class="intercom-launcher-hovercard-video-overlay intercom-launcher-hovercard-video-overlay-nocaret">\n    </div>\n  ', __p += '\n\n  <div class="intercom-launcher-video-topbar" >\n    <div class="intercom-launcher-video-topbar-status">\n      <div class="intercom-launcher-video-topbar-status-icon-container">\n        <div class="intercom-launcher-video-topbar-muted-icon intercom-launcher-video-topbar-status-icon"></div>\n        <div class="intercom-launcher-video-topbar-unmuted-icon intercom-launcher-video-topbar-status-icon"></div>\n        <div class="intercom-launcher-video-topbar-replay-icon intercom-launcher-video-topbar-status-icon"></div>\n      </div>\n      <div class="intercom-launcher-video-topbar-status-text-container">\n        <span class="intercom-launcher-video-topbar-muted-text intercom-launcher-video-topbar-status-text">Click for sound</span>\n        <span class="intercom-launcher-video-topbar-unmuted-text intercom-launcher-video-topbar-status-text">Click to mute</span>\n        <span class="intercom-launcher-video-topbar-replay-text intercom-launcher-video-topbar-status-text">Replay</span>\n      </div>\n    </div>\n    <div class="intercom-launcher-video-topbar-close-icon"></div>\n  </div>\n\n</div>\n\n<div class="intercom-video-launcher-hovercard-textarea">\n  <div class="intercom-video-launcher-admin-upload-time">\n    ' + (null == (__t = video.uploadTimeString) ? "" : __t) + '\n  </div>\n    <textarea placeholder="' + (null == (__t = t("video-launcher-conversation-placeholder", {
                adminName: admin.firstName
            })) ? "" : __t) + '"></textarea>\n</div>\n\n<div class="intercom-launcher-overlay-admin-information-container">\n    <img src="' + __e(admin.avatar) + '" class="intercom-launcher-overlay-video-admin-avatar" />\n    <div class="intercom-launcher-overlay-video-admin-name">\n      ' + __e(admin.name) + "\n    </div>\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(module, exports, __webpack_require__) {
    (function(_) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += '<div class="intercom-comment ' + __e(part.byUser() ? "intercom-comment-by-user" : "intercom-comment-by-admin") + '">\n  ', part.byAdmin() && part.adminAvatar() && (__p += '\n    <img src="' + __e(part.adminAvatar()) + '" class="intercom-comment-avatar">\n  '), __p += '\n  <div class="intercom-video-reply">\n    ' + (null == (__t = partBody) ? "" : __t) + '\n    <div class="intercom-video-reply-controls">\n      <div class="intercom-video-reply-controls-shading"></div>\n      <div class="intercom-video-reply-controls-bar">\n        <div class="intercom-video-reply-controls-playpausebutton"></div>\n        <div class="intercom-video-reply-controls-progressbar"></div>\n        <div class="intercom-video-reply-controls-mutebutton"></div>\n      </div>\n    </div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(4))
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        o = n(76),
        r = n(78);
    e.exports = i.View.extend({
        events: {
            "click .intercom-sheet-header-conversations-button": "onConversationsClicked",
            "click .intercom-sheet-header-close-button": "onCloseClicked",
            "click .intercom-sheet-header-minimize-button": "onMinimizeClicked"
        },
        initialize: function(e) {
            this.settings = e.settings
        },
        show: function() {
            return this.callback("willShow", arguments), this.$el.addClass("intercom-sheet-active"), this.callback("didShow", arguments), this
        },
        hide: function() {
            return this.callback("willHide", arguments), this.$el.removeClass("intercom-sheet-active"), this.callback("didHide", arguments), this
        },
        minimize: function() {
            this.callback("willMinimize", arguments), this.$el.addClass("intercom-sheet-minimized"), this.callback("didMinimize", arguments)
        },
        maximize: function() {
            this.callback("willMaximize", arguments), this.$el.removeClass("intercom-sheet-minimized"), this.callback("didMaximize", arguments)
        },
        isMinimized: function() {
            return this.$el.hasClass("intercom-sheet-minimized")
        },
        isActive: function() {
            return this.$el.hasClass("intercom-sheet-active")
        },
        getScrollPosition: function() {
            return this.getScrollHeight() - this.getHeight() - this.getScrollTop()
        },
        getScrollTop: function() {
            return this.$(".intercom-sheet-content").scrollTop()
        },
        setScrollTop: function(e) {
            return this.$(".intercom-sheet-content").scrollTop(e)
        },
        getScrollHeight: function() {
            return this.$(".intercom-sheet-content").prop("scrollHeight")
        },
        getHeight: function() {
            return this.$(".intercom-sheet-content").height()
        },
        scrollToBottom: function() {
            this.setScrollTop(this.getScrollHeight())
        },
        callback: function a(e, t) {
            var a = this[e];
            void 0 !== a && a.apply(this, t)
        },
        onCloseClicked: function(e) {
            e.preventDefault(), e.stopPropagation(), r.trigger("click:close"), o.increment("closeClicked")
        },
        onMinimizeClicked: function(e) {
            e.preventDefault(), e.stopPropagation(), r.trigger("click:minimize"), o.increment("minimizeButtonClicked")
        },
        onConversationsClicked: function(e) {
            e.preventDefault(), e.stopPropagation(), r.trigger("click:conversations"), o.increment("inboxButtonClicked")
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(3),
        r = n(10),
        a = n(59),
        s = n(5),
        c = n(76),
        l = n(191),
        u = n(152),
        m = n(193),
        d = n(54),
        p = n(194),
        h = n(200),
        f = n(201),
        g = n(202),
        v = n(207),
        b = n(63);
    e.exports = s.View.extend({
        commentTemplate: u.load("comment"),
        commentFromBlocksTemplate: u.load("comment-from-blocks"),
        announcementTemplate: u.load("announcement"),
        smallAnnouncementTemplate: u.load("small-announcement"),
        uploadTemplate: u.load("upload-part"),
        imageOnlyTemplate: u.load("image-only-part"),
        stickerTemplate: u.load("sticker-part"),
        articleCardMessageTemplate: u.load("article-card-message"),
        commentMetadataTemplate: u.load("comment-metadata"),
        className: "intercom-conversation-part",
        events: {
            click: "onClick",
            "click .intercom-comment-body a": "openLink",
            "click .intercom-announcement-body a": "openLink",
            "click .intercom-small-announcement-body a": "openLink",
            "click .intercom-article-lightbox-link": "openArticle"
        },
        initialize: function(e) {
            this.failed = !1, this.conversation = e.conversation, this.lwrComposerView = new p({
                model: this.model
            }), this.listenTo(this.lwrComposerView, "submit", this.onLwrComposerSubmitted), this.listenTo(this.model, "change", this.onChange), this.listenTo(this.model.uploads, "upload:complete", this.triggerPartSave)
        },
        render: function() {
            return this.model.isAnnouncement() ? this.renderAnnouncement() : this.model.isSmallAnnouncement() ? this.renderSmallAnnouncement() : this.model.isSticker() ? this.renderSticker() : this.model.isVideoReply() ? this.renderVideoReply() : this.model.isArticleCardMessage() ? this.renderArticleCardMessage() : this.shouldRenderUsingCommentBlocksTemplate() ? this.renderCommentFromBlocks() : this.renderComment(), this.renderLwrComposer(), this.renderImages(), this.$(".intercom-attachments").toggle(this.model.uploads.any()), this
        },
        renderImages: function() {
            this.$([".intercom-comment-body img", ".intercom-announcement-body img", ".intercom-small-announcement-body img"].join(", ")).each(function() {
                new g({
                    el: this
                }).render()
            })
        },
        renderArticleCardMessage: function() {
            this.$el.html(this.articleCardMessageTemplate({
                cardURL: this.model.getURLForArticleCard(),
                renderedCard: this.model.renderedBody()
            }))
        },
        renderSticker: function() {
            var e = this.model.getStickerData();
            this.$el.html(this.stickerTemplate({
                adminAvatar: this.model.adminAvatar(),
                stickerIdentifier: e.identifier,
                isAdminPart: this.model.byAdmin(),
                stickerUrl: "https://js.intercomcdn.com/images/stickers/" + e.assetId + ".png",
                unicodeSticker: e.unicodeSticker,
                nativeStickerSupport: a.features.emoji() && !a.features.touchScreen()
            })), this.renderMetadata()
        },
        renderAnnouncement: function() {
            this.$el.html(this.announcementTemplate({
                part: this.model,
                partBody: m.maybeSubstituteWithSpans(this.model.renderedBody(), "intercom-emoji-sub-icon")
            }))
        },
        renderSmallAnnouncement: function() {
            this.$el.html(this.smallAnnouncementTemplate({
                part: this.model,
                partBody: m.maybeSubstituteWithSpans(this.model.renderedBody(), "intercom-emoji-sub-icon")
            }))
        },
        shouldRenderUsingCommentBlocksTemplate: function() {
            return !i.isUndefined(this.model.get("blocks")) && !i.isNull(this.model.get("blocks")) && this.model.byAdmin()
        },
        shouldNotWrapInBubble: function(e) {
            return !i.isUndefined(e) && 1 === e.length && i.contains(this.part.BLOCK_LONERS, e[0].type)
        },
        renderCommentFromBlocks: function() {
            var e = this.model.connectedComponents();
            this.insertCommentHTML(m.maybeSubstituteWithSpans(this.commentFromBlocksTemplate({
                part: this.model,
                connectedComponentsExceptLast: e.slice(0, -1),
                lastComponent: e[e.length - 1],
                renderBlocks: b.renderBlocks,
                shouldNotWrapInBubble: this.shouldNotWrapInBubble,
                articleCardMessageTemplate: this.articleCardMessageTemplate
            }), "intercom-emoji-sub-icon")), this.renderMetadata()
        },
        renderComment: function() {
            var e = this.model.renderedBody();
            this.model.isNew() && (e = this.replaceNewLineWithBreak(e)), this.insertCommentHTML(this.getCommentTemplate(e)), this.hasPendingUploads() ? (this.$el.find(".intercom-upload-remove").click(o.proxy(this.removeUpload, this, this.model, this.$el)), this.uploadPendingUploads()) : this.$(".intercom-attachment-progress-percentage").css({
                width: "100%"
            }), this.renderMetadata()
        },
        renderVideoReply: function() {
            this.$el.html(new f({
                model: this.model
            }).render().el), this.renderMetadata()
        },
        renderMetadata: function() {
            var e;
            this.model.byUser() && (this.failed ? e = r.translate("failed") : this.showSending() && (e = r.translate("sending"))), this.model.isUpload() || this.$(".intercom-comment-metadata-container").append(this.commentMetadataTemplate({
                commentState: e
            })), this.$el.toggleClass("intercom-conversation-part-failed", this.failed), this.showCreatedAt() && (this.$(".intercom-comment-metadata").append((new h).render(this.getCreatedAt(), this.model.byUser() ? r.translate("delivered") : void 0).el), this.model.shouldShowAdminSeenState() && this.$(".intercom-comment-metadata").append(this.model.isSeenByAdmin() ? ". " + r.translate("seen") + "." : ". " + r.translate("not-seen-yet") + "."))
        },
        getCommentTemplate: function(e) {
            return this.model.isUpload() ? this.uploadTemplate({
                part: this.model,
                upload: this.model.uploads.first(),
                showSending: this.showSending(),
                showFailed: this.failed
            }) : this.model.bodyIsImage() && 0 === this.model.uploads.length ? this.imageOnlyTemplate({
                partBody: e,
                adminAvatar: this.model.adminAvatar(),
                isAdminPart: this.model.byAdmin()
            }) : this.commentTemplate({
                part: this.model,
                partBody: m.maybeSubstituteWithSpans(e, "intercom-emoji-sub-icon")
            })
        },
        insertCommentHTML: function(e) {
            if (this.shouldNotReRenderContent()) {
                var t = o(e).find(".intercom-comment-metadata-container");
                this.$(".intercom-comment-metadata-container").replaceWith(t), this.$(".intercom-comment").removeClass("intercom-upload-is-uploading")
            } else this.$el.html(e)
        },
        shouldNotReRenderContent: function() {
            return this.failed && this.model.isImageUpload() || !this.model.isNew() && this.model.isImageUpload() && !i.isEmpty(this.$el.html())
        },
        renderLwrComposer: function() {
            this.model.isLwrMessage() ? this.$(".intercom-lwr-composer-container").html(this.lwrComposerView.render().el) : this.lwrComposerView.hide()
        },
        renderFailed: function() {
            this.failed = !0, this.render()
        },
        showSending: function() {
            return !this.failed && this.model.isNew()
        },
        showCreatedAt: function() {
            return this.model.byInterbot() ? !0 : !this.failed && !this.model.isNew() && !this.model.isChatAutoMessage()
        },
        getCreatedAt: function() {
            return this.model.isMessage() ? this.conversation.createdAt() : this.model.createdAt()
        },
        setUnread: function() {
            this.$el.addClass("intercom-conversation-part-unread")
        },
        replaceNewLineWithBreak: function(e) {
            return i.isEmpty(e) ? void 0 : (e = e.replace(/^\s+|\s+$/g, "").replace(/(?:\r\n|\r|\n){2,}/g, "</p><p>").replace(/(?:\r\n|\r|\n)/g, "<br>"), e.indexOf("<p>") > 0 && (e = "<p>" + e + "</p>"), e)
        },
        openArticle: function(e) {
            e.preventDefault();
            var t = new v(e.currentTarget.href + "?lightbox=1");
            o("#intercom-container").append(t.render().$el)
        },
        openLink: function(e) {
            var t = o(e.target).closest("a");
            l.openLink(t) && e.preventDefault()
        },
        hasPendingUploads: function() {
            return this.model.uploads.pendingUploads().length > 0
        },
        uploadPendingUploads: function() {
            this.failed || i.each(this.model.uploads.pendingUploads(), i.bind(function(e) {
                this.listenTo(e, "upload:progress", this.updateUploadProgress), this.listenTo(e, "upload:error", i.bind(this.errorUploading, this, e)), e.isImage() && this.previewUpload(e), e.upload()
            }, this))
        },
        previewUpload: function(e) {
            this.$("img").attr("src", e.imageData())
        },
        stopListeningToUploads: function() {
            this.stopListening(this.model.uploads), i.each(this.model.uploads, i.bind(function(e) {
                this.stopListening(e)
            }, this))
        },
        errorUploading: function(e) {
            e.attributes.public_url || (c.increment("errorUploading"), this.renderFailed())
        },
        updateUploadProgress: function(e, t) {
            var n = parseInt(e / t * 100, 10);
            this.$(".intercom-attachment-progress-percentage").css({
                width: n + "%"
            })
        },
        triggerPartSave: function() {
            this.trigger("part:save")
        },
        removeUpload: function(e, t, n) {
            n.preventDefault(), this.stopListeningToUploads(), this.conversation.parts.remove(this.model), t.slideUp(function() {
                t.remove()
            })
        },
        getHeight: function() {
            return this.$el.outerHeight(!0)
        },
        createLwrPart: function(e, t) {
            return new d({
                conversation_id: this.conversation.id,
                message_id: this.model.id,
                reply_type: e,
                reply_option: t
            }).save()
        },
        onChange: function() {
            this.failed = !1, this.render()
        },
        onClick: function() {
            this.failed && (this.failed = !1, this.hasPendingUploads() || this.trigger("retry"), this.render())
        },
        onLwrComposerSubmitted: function(e, t) {
            this.createLwrPart(e, t), this.trigger("lwr:submit")
        }
    })
}, function(e, t, n) {
    "use strict";

    function i() {
        return r.features.uiwebview()
    }
    var o = n(4),
        r = n(59),
        a = n(192);
    e.exports = {
        openUrlInNewWindowAndNullOpener: function(e) {
            if (!o.isEmpty(e)) {
                var t = window.open("");
                t.opener = null, t.document.write('<meta http-equiv="refresh" content="0; url=' + e + '">'), t.document.close()
            }
        },
        openUrlInNewWindow: function(e) {
            return i() ? !1 : (this.openUrlInNewWindowAndNullOpener(e), !0)
        },
        openLink: function(e) {
            var t = e.data("via") || e.attr("href"),
                n = e.attr("href");
            return o.isUndefined(t) ? !1 : (e.attr("href", t), this.shouldOpenInSameWindow(n) ? (e.attr("target", "_self"), !1) : this.openUrlInNewWindow(t))
        },
        shouldOpenInSameWindow: function(e) {
            return o.isUndefined(e) ? !1 : this.getWindowLocationHostname() === a.parse(e).hostname
        },
        getWindowLocationHostname: function() {
            return window.location.hostname
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4);
    t.parse = function(e) {
        var t = document.createElement("a");
        return t.href = e, i.pick(t, "protocol", "host", "port", "pathname", "hash", "search", "hostname")
    }
}, function(e, t, n) {
    "use strict";
    var i = n(60),
        o = n(59);
    t.sizePx = function() {
        return 16
    }, t.maybeSubstituteWithSpans = function(e, n) {
        return o.features.emoji() ? i.wrapUnicodeEmojiInTitledSpans(t.sizePx(), i.substituteUnicodeForAsciiEmojis(e), n) : i.substituteSpansForEmojis(t.sizePx(), e, n)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(4),
        r = n(5),
        a = n(69),
        s = n(181),
        c = n(180),
        l = n(195),
        u = n(196),
        m = n(197),
        d = n(198),
        p = n(199);
    e.exports = r.View.extend({
        thumbsTemplate: s,
        emotionsTemplate: c,
        tagName: "form",
        id: "intercom-lwr-composer",
        className: "intercom-lwr-composer",
        events: {
            "click .intercom-lwr-composer-option": "onSelected"
        },
        render: function() {
            var e = this.getLwrComposerType();
            return "thumbs" === e ? this.renderThumbs() : "emotions" === e && this.renderEmotions(), this.markSelectedOption(), this.$el.toggleClass("intercom-lwr-composer-enabled", 0 === this.$(".intercom-lwr-composer-option-selected").length), this.show(), this
        },
        renderThumbs: function() {
            this.$el.html(this.thumbsTemplate()), this.$(".intercom-lwr-composer-option-thumbs-up .intercom-lwr-icon").html(l), this.$(".intercom-lwr-composer-option-thumbs-down .intercom-lwr-icon").html(u)
        },
        renderEmotions: function() {
            this.$el.html(this.emotionsTemplate()), this.$(".intercom-lwr-composer-option-happy .intercom-lwr-icon").html(m), this.$(".intercom-lwr-composer-option-neutral .intercom-lwr-icon").html(d), this.$(".intercom-lwr-composer-option-sad .intercom-lwr-icon").html(p)
        },
        show: function() {
            this.$el.addClass("intercom-lwr-composer-active")
        },
        hide: function() {
            this.$el.removeClass("intercom-lwr-composer-active")
        },
        enable: function() {
            this.$el.addClass("intercom-lwr-composer-enabled")
        },
        disable: function() {
            this.$el.removeClass("intercom-lwr-composer-enabled")
        },
        onSelected: function(e) {
            e.preventDefault();
            var t = i(e.target).closest(".intercom-lwr-composer-option");
            if (this.$el.hasClass("intercom-lwr-composer-enabled")) {
                t.addClass("intercom-lwr-composer-option-selected intercom-lwr-composer-option-pop"), this.$el.removeClass("intercom-lwr-composer-enabled");
                var n = t.data("option");
                this.trigger("submit", this.model.getLwrType(), n), a.playDelivered()
            }
        },
        markSelectedOption: function() {
            var e = this.model.getLwrResponse();
            this.$(".intercom-lwr-composer-option").each(function(t, n) {
                i(n).toggleClass("intercom-lwr-composer-option-selected", i(n).data("option") === e)
            })
        },
        getLwrComposerType: function() {
            var e = this.model.getLwrResponse();
            return o.contains(["thumbs_up", "thumbs_down"], e) ? "thumbs" : o.contains(["happy", "neutral", "sad"], e) ? "emotions" : this.model.getLwrType()
        }
    })
}, function(e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="15px" height="14px" viewBox="0 0 15 14" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <path d="M3.59655172,4.76491228 L2.96896552,4.76491228 L0.531034483,4.76491228 L-0.0965517241,4.76491228 L-0.0965517241,5.40350877 L-0.0965517241,12.9929825 L-0.0965517241,13.6315789 L0.531034483,13.6315789 L2.99310345,13.6315789 L3.62068966,13.6315789 L3.62068966,12.9929825 L3.62068966,5.40350877 L3.62068966,4.76491228 L3.59655172,4.76491228 L3.59655172,4.76491228 Z"></path>\n    <path d="M9.06206897,0.0245614035 C8.36206897,0.0245614035 7.56551724,0.564912281 7.56551724,2.1122807 C7.56551724,2.52982456 7.56551724,2.84912281 6.47931034,3.85614035 C5.39310345,4.86315789 4.37931034,5.64912281 4.35517241,5.64912281 L4.06551724,5.87017544 L4.06551724,6.23859649 L4.06551724,11.9368421 L4.06551724,12.4035088 L4.47586207,12.6 L6.35862069,13.5578947 C6.50344828,13.6315789 7.22758621,14 8.26551724,14 L8.43448276,14 L8.86896552,14 L10.462069,14 L11.5,14 L11.6448276,14 C12.6344828,14 13.4310345,13.1894737 13.4310345,12.1824561 C13.4310345,12.0350877 13.4068966,11.8877193 13.3827586,11.7403509 C13.7931034,11.3964912 14.0586207,10.8807018 14.0586207,10.3157895 C14.0586207,10.1684211 14.0344828,10.045614 14.0103448,9.89824561 C14.4448276,9.57894737 14.7103448,9.03859649 14.7103448,8.47368421 C14.7103448,8.17894737 14.637931,7.88421053 14.5172414,7.63859649 C14.7344828,7.34385965 14.8551724,6.9754386 14.8551724,6.58245614 C14.8551724,5.5754386 14.0586207,4.76491228 13.0689655,4.76491228 L10.6551724,4.76491228 C10.8965517,4.2 11.0896552,3.5122807 11.0896552,2.8 C11.0896552,1.08070175 10.0275862,0.0245614035 9.06206897,0.0245614035 L9.06206897,0.0245614035 L9.06206897,0.0245614035 Z"></path>\n  </g>\n</svg>\n'
}, function(e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="15px" height="14px" viewBox="0 0 15 14" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <path d="M3.59655172,9.23508772 L3.59655172,8.59649123 L3.59655172,1.00701754 L3.59655172,0.392982456 L2.96896552,0.392982456 L0.531034483,0.392982456 L-0.0965517241,0.392982456 L-0.0965517241,1.03157895 L-0.0965517241,8.59649123 L-0.0965517241,9.23508772 L0.531034483,9.23508772 L2.99310345,9.23508772 L3.59655172,9.23508772 L3.59655172,9.23508772 Z"></path>\n    <path d="M9.06206897,13.9754386 C10.0517241,13.9754386 11.0896552,12.9192982 11.0896552,11.2 C11.0896552,10.5122807 10.8965517,9.8 10.6551724,9.23508772 L13.0689655,9.23508772 C14.0586207,9.23508772 14.8551724,8.4245614 14.8551724,7.41754386 C14.8551724,7.0245614 14.7344828,6.65614035 14.5172414,6.36140351 C14.637931,6.11578947 14.7103448,5.82105263 14.7103448,5.52631579 C14.7103448,4.93684211 14.4448276,4.42105263 14.0103448,4.10175439 C14.0344828,3.97894737 14.0586207,3.83157895 14.0586207,3.68421053 C14.0586207,3.11929825 13.7931034,2.60350877 13.3827586,2.25964912 C13.4310345,2.1122807 13.4310345,1.96491228 13.4310345,1.81754386 C13.4310345,0.810526316 12.6344828,8.8817842e-16 11.6448276,8.8817842e-16 L11.5,8.8817842e-16 L10.462069,8.8817842e-16 L8.86896552,8.8817842e-16 L8.43448276,8.8817842e-16 L8.26551724,8.8817842e-16 C7.22758621,8.8817842e-16 6.50344828,0.368421053 6.35862069,0.442105263 L4.47586207,1.4 L4.06551724,1.59649123 L4.06551724,2.06315789 L4.06551724,7.76140351 L4.06551724,8.12982456 L4.35517241,8.35087719 C4.35517241,8.35087719 5.36896552,9.13684211 6.45517241,10.1684211 C7.54137931,11.1754386 7.54137931,11.4947368 7.54137931,11.9122807 C7.54137931,13.4350877 8.36206897,13.9754386 9.06206897,13.9754386 L9.06206897,13.9754386 L9.06206897,13.9754386 Z"></path>\n  </g>\n</svg>\n'
}, function(e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <path d="M9,2 C12.9,2 16,5.1 16,9 C16,12.9 12.9,16 9,16 C5.1,16 2,12.9 2,9 C2,5.1 5.1,2 9,2 L9,2 Z M9,0 C4,0 0,4 0,9 C0,14 4,18 9,18 C14,18 18,14 18,9 C18,4 14,0 9,0 L9,0 L9,0 Z"></path>\n    <circle cx="9" cy="10" r="4"></circle>\n    <rect class="intercom-lwr-option-background" x="5" y="6" width="8" height="4" fill="#aaaaaa"></rect>\n    <circle cx="6.5" cy="6.5" r="1.5"></circle>\n    <circle cx="11.5" cy="6.5" r="1.5"></circle>\n  </g>\n</svg>\n'
}, function(e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <path d="M9,2 C12.9,2 16,5.1 16,9 C16,12.9 12.9,16 9,16 C5.1,16 2,12.9 2,9 C2,5.1 5.1,2 9,2 L9,2 Z M9,0 C4,0 0,4 0,9 C0,14 4,18 9,18 C14,18 18,14 18,9 C18,4 14,0 9,0 L9,0 L9,0 Z"></path>\n    <circle cx="6.5" cy="6.5" r="1.5"></circle>\n    <circle cx="11.5" cy="6.5" r="1.5"></circle>\n    <path d="M13,12 C13,12.6 12.6,13 12,13 L6,13 C5.4,13 5,12.6 5,12 L5,12 C5,11.4 5.4,11 6,11 L12,11 C12.6,11 13,11.4 13,12 L13,12 L13,12 Z"></path>\n  </g>\n</svg>\n'
}, function(e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <g transform="translate(5.000000, 9.000000)">\n      <path d="M4,2 C5.1,2 6,2.9 6,4 C6,5.1 5.1,6 4,6 C2.9,6 2,5.1 2,4 C2,2.9 2.9,2 4,2 L4,2 Z M4,0 C1.8,0 0,1.8 0,4 C0,6.2 1.8,8 4,8 C6.2,8 8,6.2 8,4 C8,1.8 6.2,0 4,0 L4,0 L4,0 Z"></path>\n    </g>\n    <rect class="intercom-lwr-option-background" x="5" y="13" width="8" height="4" fill="#aaaaaa"></rect>\n    <path d="M9,2 C12.9,2 16,5.1 16,9 C16,12.9 12.9,16 9,16 C5.1,16 2,12.9 2,9 C2,5.1 5.1,2 9,2 L9,2 Z M9,0 C4,0 0,4 0,9 C0,14 4,18 9,18 C14,18 18,14 18,9 C18,4 14,0 9,0 L9,0 L9,0 Z"></path>\n    <circle cx="6.5" cy="6.5" r="1.5"></circle>\n    <circle cx="11.5" cy="6.5" r="1.5"></circle>\n  </g>\n</svg>\n'
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(153);
    e.exports = o.View.extend({
        tagName: "span",
        className: "intercom-relative-time",
        render: function(e, t) {
            var n = i.bind(function() {
                this.$el.html(r.relativeTimeInWords(e, t))
            }, this);
            return n(), setInterval(n, 1e3), this
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(152);
    e.exports = o.View.extend({
        template: r.load("video-reply-part"),
        className: "intercom-video-reply-part",
        events: {
            "click .intercom-video-reply-controls-playpausebutton": "togglePlayPause",
            "click .intercom-video-reply-controls-mutebutton": "toggleMute",
            "click video": "togglePlayPause",
            "click .intercom-video-reply-controls": "togglePlayPause"
        },
        render: function() {
            this.$el.html(this.template({
                part: this.model,
                partBody: this.model.renderedBody()
            }));
            var e = this.video();
            return e.controls = !1, e.addEventListener("timeupdate", i.bind(this.updateProgressBar, this)), this.startPlayback(e), this.updateVideoControls(), this
        },
        video: function() {
            return i.isUndefined(this._video) && (this._video = this.$("video")[0]), this._video
        },
        startPlayback: function(e) {
            e.loop = !0, e.muted = !0, e.addEventListener("canplay", i.bind(function() {
                e.play(), this.updateVideoControls()
            }, this)), e.play(), this.updateVideoControls()
        },
        updateVideoControls: function() {
            var e = this.video();
            this.$(".intercom-video-reply-controls-playpausebutton").toggleClass("intercom-paused", e.paused).toggleClass("intercom-unpaused", !e.paused), this.$(".intercom-video-reply-controls-mutebutton").toggleClass("intercom-muted", e.muted).toggleClass("intercom-unmuted", !e.muted)
        },
        updateProgressBar: function() {
            var e = this.video(),
                t = Math.round(100 * (e.currentTime / e.duration)),
                n = i.template("linear-gradient(to right,white, white <%= percentProgress %>%, rgba(255,255,255,0.5) <%= percentProgress %>%, rgba(255,255,255,0.5) <%= percentProgress %>%)")({
                    percentProgress: t
                });
            this.$(".intercom-video-reply-controls-progressbar").css("background", n)
        },
        togglePlayPause: function(e) {
            e.stopPropagation();
            var t = this.video();
            t.paused ? t.play() : t.pause(), this.updateVideoControls()
        },
        toggleMute: function(e) {
            e.stopPropagation();
            var t = this.video();
            t.muted && !t.paused && (t.currentTime = 0), t.muted = !t.muted, this.updateVideoControls()
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        e.naturalWidth > 0 && e.naturalHeight > 0 ? r.defer(t) : o(e).load(t)
    }
    var o = n(3),
        r = n(4),
        a = n(5),
        s = n(203),
        c = n(191),
        l = n(59);
    e.exports = a.View.extend({
        render: function() {
            return i(this.el, r.bind(function() {
                this.isScaled() && !this.isLink() && this.$el.off("click").on("click", r.bind(this.onClick, this)).addClass("intercom-image-viewable")
            }, this)), this
        },
        open: function() {
            l.features.ie8() ? this.openInNewWindow() : this.openInViewer()
        },
        openInViewer: function() {
            var e = new s({
                image: this.el
            });
            o("#intercom-container").append(e.render().$el)
        },
        openInNewWindow: function() {
            c.openUrlInNewWindow(this.$el.attr("src"))
        },
        isLink: function() {
            return this.$el.closest("a").length > 0
        },
        isScaled: function() {
            return this.$el.width() < this.el.naturalWidth || this.$el.height() < this.el.naturalHeight
        },
        onClick: function(e) {
            e.preventDefault(), this.open()
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(4),
        r = n(5),
        a = n(204),
        s = n(152);
    e.exports = r.View.extend({
        className: "intercom-image-viewer",
        template: s.load("image-viewer"),
        events: {
            click: "onClick"
        },
        initialize: function(e) {
            this.zoomedImageView = new a({
                image: e.image
            })
        },
        render: function() {
            return this.$el.html(this.template()), this.$el.append(this.zoomedImageView.render().$el), o.defer(o.bind(function() {
                this.$(".intercom-image-viewer-overlay").transition({
                    opacity: .8
                }, 300)
            }, this)), i(document).on("keyup.intercom-image-overlay", o.bind(this.onKeyUp, this)), this
        },
        close: function() {
            this.$(".intercom-image-viewer-overlay").transition({
                opacity: 0,
                complete: o.bind(this.remove, this)
            }, 300), this.zoomedImageView.remove(), i(document).off("keyup.intercom-image-overlay")
        },
        onClick: function() {
            this.close()
        },
        onKeyUp: function(e) {
            27 === e.keyCode && this.close()
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(4),
        r = n(5),
        a = n(205);
    e.exports = r.View.extend({
        className: "intercom-zoomed-image",
        tagName: "img",
        padding: 20,
        initialize: function(e) {
            this.image = e.image, this.$image = i(e.image)
        },
        render: function() {
            this.$el.attr("src", i(this.image).attr("src")), i(window).on("resize.intercom-image-viewer", o.bind(this.onResize, this));
            var e = window.innerWidth,
                t = window.innerHeight;
            return this.resize(e, t), this.addPlaceholder(), a.show(this), this
        },
        resize: function(e, t) {
            var n = e - 2 * this.padding,
                i = t - 2 * this.padding,
                o = Math.min(n / this.image.naturalWidth, i / this.image.naturalHeight);
            o > 1 && (o = 1), this.width = this.image.naturalWidth * o, this.height = this.image.naturalHeight * o, this.left = e / 2 - this.width / 2, this.top = t / 2 - this.height / 2, this.$el.css({
                top: this.top,
                left: this.left,
                width: this.width,
                height: this.height
            })
        },
        remove: function() {
            this.stopListening(), i(window).off("resize.intercom-image-viewer"), a.hide(this, o.bind(function() {
                this.removePlaceholder(), this.$el.remove()
            }, this))
        },
        addPlaceholder: function() {
            this.$placeholder = i("<div/>").addClass("intercom-zoomed-image-placeholder").width(this.$image.width()).height(this.$image.height()), this.$image.hide(), this.$image.parent().append(this.$placeholder)
        },
        removePlaceholder: function() {
            this.$placeholder.remove(), this.$image.show()
        },
        onResize: o.throttle(function() {
            var e = window.innerWidth,
                t = window.innerHeight;
            this.resize(e, t)
        }, 500)
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t = e.$placeholder.width(),
            n = e.$placeholder.height(),
            i = e.$placeholder.offset();
        i.top -= o(document).scrollTop(), i.left -= o(document).scrollLeft();
        var r = t / e.width,
            a = i.left + t / 2 - (e.left + e.width / 2),
            s = i.top + n / 2 - (e.top + e.height / 2);
        return {
            x: a,
            y: s,
            scale: r
        }
    }
    n(206);
    var o = n(3),
        r = n(4);
    t.show = function(e) {
        e.$el.transition(i(e), 100).transition({
            x: 0,
            y: 0,
            scale: 1
        }, 300, "ease")
    }, t.hide = function(e, t) {
        e.$el.transition(r.extend(i(e), {
            complete: t
        }), 300, "ease")
    }
}, function(e, t, n) {
    var i, o, r;
    ! function(a, s) {
        o = [n(3)], i = s, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r))
    }(this, function(e) {
        function t(e) {
            if (e in m.style) return e;
            for (var t = ["Moz", "Webkit", "O", "ms"], n = e.charAt(0).toUpperCase() + e.substr(1), i = 0; i < t.length; ++i) {
                var o = t[i] + n;
                if (o in m.style) return o
            }
        }

        function n() {
            return m.style[d.transform] = "", m.style[d.transform] = "rotateY(90deg)", "" !== m.style[d.transform]
        }

        function i(e) {
            return "string" == typeof e && this.parse(e), this
        }

        function o(e, t, n) {
            t === !0 ? e.queue(n) : t ? e.queue(t, n) : e.each(function() {
                n.call(this)
            })
        }

        function r(t) {
            var n = [];
            return e.each(t, function(t) {
                t = e.camelCase(t), t = e.transit.propertyMap[t] || e.cssProps[t] || t, t = c(t), d[t] && (t = c(d[t])), -1 === e.inArray(t, n) && n.push(t)
            }), n
        }

        function a(t, n, i, o) {
            var a = r(t);
            e.cssEase[i] && (i = e.cssEase[i]);
            var s = "" + u(n) + " " + i;
            parseInt(o, 10) > 0 && (s += " " + u(o));
            var c = [];
            return e.each(a, function(e, t) {
                c.push(t + " " + s)
            }), c.join(", ")
        }

        function s(t, n) {
            n || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = d.transform, e.cssHooks[t] = {
                get: function(n) {
                    var i = e(n).css("transit:transform");
                    return i.get(t)
                },
                set: function(n, i) {
                    var o = e(n).css("transit:transform");
                    o.setFromString(t, i), e(n).css({
                        "transit:transform": o
                    })
                }
            }
        }

        function c(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function l(e, t) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
        }

        function u(t) {
            var n = t;
            return "string" != typeof n || n.match(/^[\-0-9\.]+/) || (n = e.fx.speeds[n] || e.fx.speeds._default), l(n, "ms")
        }
        e.transit = {
            version: "0.9.12",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: !0,
            useTransitionEnd: !1
        };
        var m = document.createElement("div"),
            d = {},
            p = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
        d.transition = t("transition"), d.transitionDelay = t("transitionDelay"), d.transform = t("transform"), d.transformOrigin = t("transformOrigin"), d.filter = t("Filter"), d.transform3d = n();
        var h = {
                transition: "transitionend",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                WebkitTransition: "webkitTransitionEnd",
                msTransition: "MSTransitionEnd"
            },
            f = d.transitionEnd = h[d.transition] || null;
        for (var g in d) d.hasOwnProperty(g) && "undefined" == typeof e.support[g] && (e.support[g] = d[g]);
        return m = null, e.cssEase = {
            _default: "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }, e.cssHooks["transit:transform"] = {
            get: function(t) {
                return e(t).data("transform") || new i
            },
            set: function(t, n) {
                var o = n;
                o instanceof i || (o = new i(o)), "WebkitTransform" !== d.transform || p ? t.style[d.transform] = o.toString() : t.style[d.transform] = o.toString(!0), e(t).data("transform", o)
            }
        }, e.cssHooks.transform = {
            set: e.cssHooks["transit:transform"].set
        }, e.cssHooks.filter = {
            get: function(e) {
                return e.style[d.filter]
            },
            set: function(e, t) {
                e.style[d.filter] = t
            }
        }, e.fn.jquery < "1.8" && (e.cssHooks.transformOrigin = {
            get: function(e) {
                return e.style[d.transformOrigin]
            },
            set: function(e, t) {
                e.style[d.transformOrigin] = t
            }
        }, e.cssHooks.transition = {
            get: function(e) {
                return e.style[d.transition]
            },
            set: function(e, t) {
                e.style[d.transition] = t
            }
        }), s("scale"), s("scaleX"), s("scaleY"), s("translate"), s("rotate"), s("rotateX"), s("rotateY"), s("rotate3d"), s("perspective"), s("skewX"), s("skewY"), s("x", !0), s("y", !0), i.prototype = {
            setFromString: function(e, t) {
                var n = "string" == typeof t ? t.split(",") : t.constructor === Array ? t : [t];
                n.unshift(e), i.prototype.set.apply(this, n)
            },
            set: function(e) {
                var t = Array.prototype.slice.apply(arguments, [1]);
                this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
            },
            get: function(e) {
                return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
            },
            setter: {
                rotate: function(e) {
                    this.rotate = l(e, "deg")
                },
                rotateX: function(e) {
                    this.rotateX = l(e, "deg")
                },
                rotateY: function(e) {
                    this.rotateY = l(e, "deg")
                },
                scale: function(e, t) {
                    void 0 === t && (t = e), this.scale = e + "," + t
                },
                skewX: function(e) {
                    this.skewX = l(e, "deg")
                },
                skewY: function(e) {
                    this.skewY = l(e, "deg")
                },
                perspective: function(e) {
                    this.perspective = l(e, "px")
                },
                x: function(e) {
                    this.set("translate", e, null)
                },
                y: function(e) {
                    this.set("translate", null, e)
                },
                translate: function(e, t) {
                    void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== e && void 0 !== e && (this._translateX = l(e, "px")),
                        null !== t && void 0 !== t && (this._translateY = l(t, "px")), this.translate = this._translateX + "," + this._translateY
                }
            },
            getter: {
                x: function() {
                    return this._translateX || 0
                },
                y: function() {
                    return this._translateY || 0
                },
                scale: function() {
                    var e = (this.scale || "1,1").split(",");
                    return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
                },
                rotate3d: function() {
                    for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; 3 >= t; ++t) e[t] && (e[t] = parseFloat(e[t]));
                    return e[3] && (e[3] = l(e[3], "deg")), e
                }
            },
            parse: function(e) {
                var t = this;
                e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, n, i) {
                    t.setFromString(n, i)
                })
            },
            toString: function(e) {
                var t = [];
                for (var n in this)
                    if (this.hasOwnProperty(n)) {
                        if (!d.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n)) continue;
                        "_" !== n[0] && (e && "scale" === n ? t.push(n + "3d(" + this[n] + ",1)") : e && "translate" === n ? t.push(n + "3d(" + this[n] + ",0)") : t.push(n + "(" + this[n] + ")"))
                    }
                return t.join(" ")
            }
        }, e.fn.transition = e.fn.transit = function(t, n, i, r) {
            var s = this,
                c = 0,
                l = !0,
                m = e.extend(!0, {}, t);
            "function" == typeof n && (r = n, n = void 0), "object" == typeof n && (i = n.easing, c = n.delay || 0, l = "undefined" == typeof n.queue ? !0 : n.queue, r = n.complete, n = n.duration), "function" == typeof i && (r = i, i = void 0), "undefined" != typeof m.easing && (i = m.easing, delete m.easing), "undefined" != typeof m.duration && (n = m.duration, delete m.duration), "undefined" != typeof m.complete && (r = m.complete, delete m.complete), "undefined" != typeof m.queue && (l = m.queue, delete m.queue), "undefined" != typeof m.delay && (c = m.delay, delete m.delay), "undefined" == typeof n && (n = e.fx.speeds._default), "undefined" == typeof i && (i = e.cssEase._default), n = u(n);
            var p = a(m, n, i, c),
                h = e.transit.enabled && d.transition,
                g = h ? parseInt(n, 10) + parseInt(c, 10) : 0;
            if (0 === g) {
                var v = function(e) {
                    s.css(m), r && r.apply(s), e && e()
                };
                return o(s, l, v), s
            }
            var b = {},
                y = function(t) {
                    var n = !1,
                        i = function() {
                            n && s.unbind(f, i), g > 0 && s.each(function() {
                                this.style[d.transition] = b[this] || null
                            }), "function" == typeof r && r.apply(s), "function" == typeof t && t()
                        };
                    g > 0 && f && e.transit.useTransitionEnd ? (n = !0, s.bind(f, i)) : window.setTimeout(i, g), s.each(function() {
                        g > 0 && (this.style[d.transition] = p), e(this).css(m)
                    })
                },
                w = function(e) {
                    this.offsetWidth, y(e)
                };
            return o(s, l, w), this
        }, e.transit.getTransitionValue = a, e
    })
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        o = n(152);
    e.exports = i.View.extend({
        className: "intercom-knowledgebase-article",
        articleTemplate: o.load("knowledgebase-article"),
        events: {
            "click .intercom-knowledgebase-article-overlay": "close"
        },
        initialize: function(e) {
            this.url = e
        },
        render: function() {
            return this.$el.html(this.articleTemplate({
                iFrameUrl: this.url
            })), this
        },
        close: function() {
            this.remove()
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e.stopPropagation()
    }
    var o = n(3),
        r = n(4),
        a = n(5),
        s = n(59),
        c = n(209),
        l = n(150),
        u = n(210),
        m = n(57),
        d = n(69),
        p = n(76),
        h = n(56),
        f = n(211),
        g = n(152),
        v = n(212),
        b = n(213);
    e.exports = a.View.extend({
        template: g.load("composer"),
        tagName: "form",
        id: "intercom-composer",
        className: "intercom-composer",
        attributes: {
            action: "",
            method: "POST"
        },
        events: {
            submit: "onSubmitted",
            "keyup textarea": "onTextChanged",
            "input textarea": "onTextChanged",
            "focus textarea": "updateComposer",
            "blur textarea": "onComposerBlur",
            "keydown textarea": "onKeyDown",
            "click .intercom-composer-upload-button": "onUploadButtonClicked",
            "click .intercom-composer-emoji-button": "onEmojiButtonClicked",
            "change input[type=file]": "onUploadsAdded"
        },
        initialize: function(e) {
            this.timeout = null, this.settings = e.settings, this.uploads = new h, this.isVisitorAutoMessage = !1, this.$(".intercom-composer-upload-error").hide(), this.emojiSelectorView = new f({
                onEmojiIconClickCallback: r.bind(this.insertEmoji, this)
            }), this.listenTo(this.uploads, "add", this.submitUpload)
        },
        render: function() {
            return this.$el.html(this.template()), this.$(".intercom-composer-emoji-selector-container").append(this.emojiSelectorView.render().el), this.$(".intercom-composer-emoji-button").toggle(this.isEmojiEnabled()), this.$(".intercom-composer-upload-button").toggle(this.isUploadingEnabled()), this.updateSubmit(), this
        },
        setConversationId: function(e) {
            this.conversationId = e;
            var t = c.loadDraft(this.conversationId);
            r.isUndefined(t) || this.setText(t.getText())
        },
        setVisitorAutoMessage: function(e) {
            this.isVisitorAutoMessage = e
        },
        insertEmoji: function(e) {
            0 === this.getText().length ? (this.setText(e), this.$el.submit()) : (this._insertTextAtCursor(e), this.saveDraft(), this.focus())
        },
        enable: function() {
            return this.$("textarea, input").prop("disabled", ""), this.$("input[type=submit]").css("visibility", "inherit"), this.$el.removeClass("intercom-composer-disabled"), this.updateSubmit(), this
        },
        disable: function() {
            return this.$("textarea, input").prop("disabled", "disabled"), this.$("input[type=submit]").css("visibility", "hidden"), this.$el.addClass("intercom-composer-disabled"), this
        },
        reset: function() {
            return this.uploads.reset(), this.$("textarea").val(""), this.$("pre span").empty(), this.updateComposer(), this.conversationId = null, this
        },
        focus: function() {
            return this.$("textarea").focus(), this
        },
        blur: function() {
            return this.$("textarea").blur(), this
        },
        isEmojiEnabled: function() {
            return !s.features.ie8() && !s.features.touchScreen() && void 0 !== this.settings
        },
        isUploadingEnabled: function() {
            return s.features.upload() && void 0 !== this.settings
        },
        isSubmitButtonEnabled: function() {
            return !this.$("input[type=submit]").prop("disabled")
        },
        isFocused: function() {
            return this.$("textarea").is(":focus")
        },
        hide: function() {
            return this.$el.addClass("intercom-composer-inactive"), this
        },
        show: function() {
            return this.$el.removeClass("intercom-composer-inactive"), this
        },
        updatePosition: function() {
            var e = 0;
            this.$el.hasClass("intercom-composer-inactive") || (e = this.$el.closest(".intercom-composer").outerHeight(!0)), this.$el.closest(".intercom-conversation").find(".intercom-sheet-content").css({
                bottom: e
            })
        },
        updateSubmit: function() {
            var e = o.trim(this.getText()),
                t = r.isEmpty(e);
            this.$("input[type=submit]").prop("disabled", t), s.features.touchScreen() && (this.$("input[type=submit]").show(), this.$("textarea").css("font-size", "20px"))
        },
        hasAnyUploads: function() {
            return this.uploads.length > 0
        },
        saveDraft: function() {
            var e = new u(this.getText());
            e.isEmpty() ? c.removeDraft(this.conversationId) : c.saveDraft(e, this.conversationId)
        },
        scrollIntoView: function() {
            var e = this.$el.closest(".intercom-sheet-content");
            e.scrollTop(e.prop("scrollHeight"))
        },
        setPlaceholder: function(e) {
            var t = o("<div/>").html(e).text();
            this.$("textarea").attr("placeholder") !== t && this.$("textarea").attr({
                placeholder: t
            })
        },
        getText: function() {
            return this.$("textarea").val()
        },
        isEmpty: function() {
            return "" === this.getText()
        },
        setText: function(e) {
            r.isString(e) && (this.$("textarea").val(e), this.updateComposer())
        },
        clearText: function() {
            this.$("textarea").val(""), this.$("pre span").empty(), this.updateComposer()
        },
        updateComposer: function() {
            this.$("pre span").text(this.getText()), this.updatePosition(), this.scrollIntoView(), this.updateSubmit(), this.$(".intercom-composer-textarea").addClass("intercom-composer-focused")
        },
        onComposerBlur: function() {
            this.$(".intercom-composer-textarea").removeClass("intercom-composer-focused")
        },
        onTextChanged: function(e) {
            e.stopPropagation(), this.updateComposer(), this.saveDraft(), this.eventShouldTriggerUserIsTyping(e) && (this.trigger("userIsTyping"), o(document).trigger(o.Event("intercom.keyup")))
        },
        queueEnterToSendAnimation: function() {
            s.features.touchScreen() || (this.resetEnterToSendTimeout(), r.isEmpty(this.getText()) ? this.hideEnterToSend() : this.timeout = setTimeout(r.bind(this.showEnterToSendAnimation, this), 2e3))
        },
        showEnterToSendAnimation: function() {
            v(this)
        },
        eventShouldTriggerUserIsTyping: function(e) {
            if ("input" === e.type) return !0;
            if (!e.originalEvent) return !0;
            var t = e.originalEvent.keyCode;
            return t > 46 && 91 > t || t > 145 || 32 === t
        },
        submitUpload: function() {
            var e = this.getText();
            this.clearText(), this.$el.submit(), this.setText(e)
        },
        onSubmitted: function(e) {
            e.preventDefault(), this.hideEmojiSelector();
            var t = this.getText();
            c.removeDraft(this.conversationId), r.isEmpty(t) && !this.hasAnyUploads() || (this.trigger("submit", t, this.uploads.clone()), this.resetUploads(), d.playSubmit(), s.features.touchScreen() && this.blur(), this._trackMessageSent(), this.hideEnterToSend())
        },
        resetEnterToSendTimeout: function() {
            clearTimeout(this.timeout)
        },
        hideEnterToSend: function() {
            this.resetEnterToSendTimeout(), b(this)
        },
        resetEnterToSend: function() {
            this.$(".intercom-composer-press-enter-to-send").css({
                height: "auto",
                display: "none"
            }), this.$(".intercom-powered-by").css({
                opacity: 1
            })
        },
        submitKeyPressed: function(e) {
            return 13 !== e.keyCode || e.altKey || e.shiftKey ? !1 : (e.preventDefault(), !0)
        },
        onKeyDown: function(e) {
            this.submitKeyPressed(e) && this.isSubmitButtonEnabled() && this.$el.submit(), this._trackComposerTyping(), e.stopPropagation()
        },
        onUploadButtonClicked: function() {
            this.$("input[type=file]").click()
        },
        onUploadError: function() {
            this.$(".intercom-composer-upload-error").show(), this.updateComposer()
        },
        showEmojiSelector: function() {
            this.$(".intercom-emoji-selector").on("click", i), this.$(".intercom-emoji-selector").show(), o(".intercom-conversation.intercom-sheet-active").on("click.hideEmojiSelector", r.bind(this.hideEmojiSelector, this)), this.$(".intercom-composer-emoji-button").addClass("intercom-composer-emoji-button-active"), this.focus()
        },
        hideEmojiSelector: function() {
            this.$(".intercom-emoji-selector").off("click", i), this.$(".intercom-emoji-selector").hide(), o(".intercom-conversation.intercom-sheet-active").off("click.hideEmojiSelector"), this.$(".intercom-composer-emoji-button").removeClass("intercom-composer-emoji-button-active")
        },
        onEmojiButtonClicked: function(e) {
            e.stopPropagation(), this.$(".intercom-emoji-selector").is(":visible") ? this.hideEmojiSelector() : this.showEmojiSelector()
        },
        getFiles: function() {
            return this.$("input[type=file]")[0].files
        },
        onUploadsAdded: function() {
            var e = this.getFiles();
            r.each(e, r.bind(function(e) {
                var t = m.fromFile(e);
                t.isTooBig() ? (p.increment("uploadTooBig"), this.onUploadError()) : t.isImage() ? this.previewAndAddUpload(t) : this.uploads.add(t)
            }, this))
        },
        previewAndAddUpload: function(e) {
            if (s.features.upload()) {
                var t = new FileReader,
                    n = new Image;
                t.onload = r.bind(function(t) {
                    n.src = t.target.result, n.onload = r.bind(function() {
                        e.set({
                            imageData: t.target.result,
                            width: n.width,
                            height: n.height
                        }), this.uploads.add(e)
                    }, this)
                }, this), t.readAsDataURL(e.file)
            } else this.uploads.add(e)
        },
        resetUploads: function() {
            var e = this.$("input[type=file]");
            this.$(".intercom-composer-upload-error").hide(), e.replaceWith(e.val("").clone(!0)), this.uploads.reset()
        },
        metricsPrefix: function() {
            return this.conversationId || this.isVisitorAutoMessage ? this.isVisitorAutoMessage ? "inReplyToVisitorAutoMessage." : void 0 : "fromNewConversationView."
        },
        _getCursorPosition: function() {
            return this.$("textarea")[0].selectionStart
        },
        _setCursorPosition: function(e) {
            this.$("textArea")[0].setSelectionRange(e, e)
        },
        _insertTextAtCursor: function(e) {
            var t = this.$("textarea"),
                n = this._getCursorPosition(),
                i = t.val(),
                o = i.slice(0, n),
                r = i.slice(n);
            this.setText(o + e + r), this._setCursorPosition(n + e.length)
        },
        _trackComposerTyping: function() {
            this.conversationId && !this.isVisitorAutoMessage || l.trackSignedOutEvent(this.metricsPrefix() + "uniqueVisitorTypedInComposer")
        },
        _trackMessageSent: function() {
            this.conversationId && !this.isVisitorAutoMessage || l.trackSignedOutEvent(this.metricsPrefix() + "uniqueVisitorSentMessage")
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e ? s + "-" + e : s
    }
    var o = n(77),
        r = n(210),
        a = n(6),
        s = "draft";
    e.exports = {
        loadDraft: function(e) {
            var t = o.sessionStorage.get(i(e));
            return r.fromJSON(t)
        },
        removeDraft: function(e) {
            o.sessionStorage.remove(i(e))
        },
        saveDraft: function(e, t) {
            e.isEmpty() || (o.sessionStorage.removeAll(s), o.sessionStorage.set(i(t), a.stringify(e.toJSON())))
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        this.text = e
    }
    var o = n(4),
        r = n(6);
    i.prototype = {
        getText: function() {
            return this.text
        },
        isEmpty: function() {
            return o.isEmpty(this.text)
        },
        toJSON: function() {
            return {
                text: this.text
            }
        }
    }, i.fromJSON = function(e) {
        if (!o.isUndefined(e) && !o.isNull(e)) {
            var t = r.parse(e);
            return new i(t.text)
        }
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(59),
        r = n(60),
        a = n(193),
        s = n(5),
        c = function(e) {
            return '<span class="intercom-emoji-image" style="' + r.spritemapStyleString(a.sizePx(), e) + '" title="' + r.asciiFromUnicode(e) + '"></span>'
        },
        l = function(e, t) {
            return i.reduce(e, function(e, t) {
                return e + '<span class="intercom-emoji-icon" title="' + r.identifierFromUnicode(t) + '">' + t + "</span>"
            }, '<div class="intercom-emoji-selector-panel-large" data-group-idx="' + t + '">') + '<div class="intercom-large-emoji-panel-top-mask" data-group-idx="' + t + '"></div><div class="intercom-large-emoji-panel-bottom-mask" data-group-idx="' + t + '"></div></div>'
        },
        u = function(e, t, n) {
            return '<span class="intercom-emoji-group-icon" title="' + t + '"data-group-idx="' + n + '">' + e + "</span>"
        };
    e.exports = s.View.extend({
        className: "intercom-emoji-selector",
        events: {
            "click .intercom-emoji-image": "onEmojiImageClick",
            "click .intercom-emoji-group-icon": "onEmojiGroupIconClick",
            "click .intercom-emoji-icon": "onEmojiIconClick"
        },
        getScrollPosition: function() {
            return this.getScrollHeight() - this.getHeight() - this.getScrollTop()
        },
        getScrollTop: function() {
            return this.$(".intercom-emoji-selector-panel-large.active").scrollTop()
        },
        getScrollHeight: function() {
            return this.$(".intercom-emoji-selector-panel-large.active").prop("scrollHeight")
        },
        getHeight: function() {
            return this.$(".intercom-emoji-selector-panel-large.active").height()
        },
        onScrollLargePanel: function(e) {
            if (o.features.pointerEvents()) {
                var t = this.$('.intercom-large-emoji-panel-top-mask[data-group-idx="' + e.target.dataset.groupIdx + '"]'),
                    n = this.$('.intercom-large-emoji-panel-bottom-mask[data-group-idx="' + e.target.dataset.groupIdx + '"]');
                this.getScrollTop() > 0 && !t.is(":visible") ? t.fadeIn(200) : 0 === this.getScrollTop() && t.is(":visible") && t.fadeOut(200), this.getScrollPosition() > 0 && !n.is(":visible") ? n.fadeIn(200) : 0 === this.getScrollPosition() && n.is(":visible") && n.fadeOut(200)
            }
        },
        initialize: function(e) {
            this.onEmojiIconClickCallback = e.onEmojiIconClickCallback
        },
        render: function() {
            return o.features.emoji() ? (this.renderWithNativeSupport(r.prettyEmoticonsUnicodeGroups()), this.activatePanel(0), this.$(".intercom-emoji-selector-panel-large").on("scroll", i.bind(this.onScrollLargePanel, this))) : this.renderWithoutNativeSupport(r.asciiEmoticonsUnicodeList.slice(0, 12)), this
        },
        renderWithNativeSupport: function(e) {
            this.$el.append(i.reduce(e, function(e, t, n) {
                var i = r.getGroupRepresentatives()[n];
                return e + u(i[0], i[1], n)
            }, '<div class="intercom-emoji-selector-panel-header">') + "</div>" + i.reduce(e, function(e, t, n) {
                return e + l(t, n)
            }, "", this)), o.features.pointerEvents() || this.$(".intercom-large-emoji-panel-bottom-mask").css("display", "none")
        },
        renderWithoutNativeSupport: function(e) {
            this.$el.append(i.reduce(e, function(e, t) {
                return e + c(t)
            }, '<div class="intercom-emoji-selector-panel-small">') + "</div>")
        },
        onEmojiImageClick: function(e) {
            this.onEmojiIconClickCallback(e.currentTarget.title)
        },
        onEmojiIconClick: function(e) {
            this.onEmojiIconClickCallback(r.unicodeFromIdentifier(e.currentTarget.title))
        },
        onEmojiGroupIconClick: function(e) {
            this.activatePanel(e.currentTarget.dataset.groupIdx)
        },
        activatePanel: function(e) {
            this.$(".intercom-emoji-selector-panel-large.active").removeClass("active"), this.$('.intercom-emoji-selector-panel-large[data-group-idx="' + e + '"]').addClass("active"), this.$(".intercom-emoji-group-icon.active").removeClass("active"), this.$('.intercom-emoji-group-icon[data-group-idx="' + e + '"]').addClass("active")
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        t.transition({
            opacity: 0,
            duration: 200
        }), e.transition({
            opacity: 0,
            duration: 0
        }).delay(200).transition({
            opacity: 1,
            duration: 200
        })
    }

    function o(e) {
        e.transition({
            height: 0,
            opacity: 0,
            duration: 0
        }).transition({
            height: 16,
            opacity: 1,
            easing: "ease",
            duration: 200
        })
    }

    function r(e) {
        e.bind("click", function(e) {
            e.preventDefault()
        }), e.css("pointer-events", "none")
    }
    n(3), n(206), e.exports = function(e) {
        var t = e.$(".intercom-composer-press-enter-to-send"),
            n = e.$(".intercom-powered-by"),
            a = e.$(".intercom-powered-by > a");
        t.is(":visible") || (t.css({
            display: "block"
        }), n.length > 0 ? (r(a), i(t, n)) : o(t))
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e.css({
            display: "none",
            height: "auto"
        })
    }

    function o(e, t) {
        e.transition({
            opacity: 0,
            duration: 200,
            complete: function() {
                i(e)
            }
        }), t.transition({
            opacity: 0,
            duration: 0
        }).delay(200).transition({
            opacity: 1,
            duration: 200
        })
    }

    function r(e) {
        e.transition({
            height: 0,
            opacity: 0,
            duration: 200,
            complete: function() {
                i(e)
            }
        })
    }

    function a(e) {
        e.unbind("click"), e.css("pointer-events", "auto")
    }
    n(3), n(206), e.exports = function(e) {
        var t = e.$(".intercom-composer-press-enter-to-send"),
            n = e.$(".intercom-powered-by"),
            i = e.$(".intercom-powered-by > a");
        t.is(":hidden") || (n.length > 0 ? (a(i), o(t, n)) : r(t))
    }
}, function(e, t, n) {
    "use strict";
    var i = n(5);
    e.exports = i.View.extend({
        className: "intercom-unread-counter",
        initialize: function() {
            this.listenTo(this.collection, "add change", this.render)
        },
        render: function() {
            var e = this.collection.unread().size();
            return this.$el.toggleClass("intercom-unread-counter-active", e > 0).text(e), this
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(152),
        r = n(150),
        a = n(5),
        s = n(216),
        c = n(217);
    e.exports = a.View.extend({
        template: o.load("app-profile"),
        adminTemplate: o.load("app-profile-admin"),
        className: "intercom-app-profile",
        events: {
            "click .intercom-active-admin-avatar": "onAppProfileAvatarClicked"
        },
        initialize: function(e) {
            this.settings = e.settings, this.app = e.app, this.lastActiveView = new s({
                model: this.app
            }), this.listenTo(this.app, "change", this.renderLastActive)
        },
        render: function() {
            var e = this.settings.get("app.active-admins"),
                t = this.settings.get("app.message"),
                n = this.settings.get("app.name");
            return e || t ? (this.$el.html(this.template({
                message: t,
                appName: n
            })), this.renderAdmins(), this.renderLastActive()) : this.$el.hide(), this
        },
        renderAdmins: function() {
            var e = this.settings.get("app.active-admins");
            e && 0 !== e.length ? (this.$(".intercom-active-admins").show(), i.each(e, i.bind(function(e) {
                var t = {
                        avatarUri: e.avatar.image_urls.square_128,
                        adminFirstName: e.first_name
                    },
                    n = new c(t).html();
                this.$el.find(".intercom-active-admins").append(this.adminTemplate({
                    adminAvatar: n,
                    firstName: e.first_name
                }))
            }, this))) : this.$(".intercom-active-admins").hide()
        },
        renderLastActive: function() {
            this.$(".intercom-app-profile-last-active").html(this.lastActiveView.render().el)
        },
        hasAvatar: function(e) {
            return !i.isEmpty(e) && e.indexOf("msg-user-icon-73") < 0
        },
        onAppProfileAvatarClicked: function() {
            r.trackSignedOutEvent("uniqueVisitorClickedAvatarInWelcomePanel")
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(152),
        a = n(153);
    e.exports = o.View.extend({
        template: r.load("last-active"),
        className: "intercom-last-active",
        initialize: function() {
            this.updateLastSeen = null, this.listenTo(this.model, "change", this.render)
        },
        render: function(e) {
            if (this.clearLastSeenUpdateTimer(), e ? (this.stopListening(this.model), this.last_active = e.last_active) : this.last_active = this.getTeamPresenceTimestamp(), this.last_active) {
                var t = i.bind(function() {
                    this.$el.html(this.template({
                        lastActive: this.getRelativeText((new Date).getTime())
                    }))
                }, this);
                t(), this.$el.show(), this.updateLastSeen = setInterval(t, 6e4)
            } else this.$el.hide();
            return this
        },
        getRelativeText: function() {
            return a.lastActiveTimeInWords(this.last_active)
        },
        clearLastSeenUpdateTimer: function() {
            window.clearInterval(this.updateLastSeen)
        },
        getTeamPresenceTimestamp: function() {
            var e = this.model.get("last_active");
            if (i.isNumber(e)) return 1e3 * e
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(152),
        a = n(55);
    e.exports = o.View.extend({
        template: r.load("admin-avatar"),
        className: "intercom-admin-avatar",
        initialize: function(e) {
            this.avatarUri = e.avatarUri, this.adminFirstName = e.adminFirstName, this.adminFirstInitial = a.firstInitial(this.adminFirstName)
        },
        render: function() {
            return this.$el.html(this.template({
                avatarUri: this.avatarUri,
                adminFirstInitial: this.adminFirstInitial,
                adminFirstName: this.adminFirstName,
                hasAvatar: this.hasAvatar()
            })), this.$el.toggleClass("intercom-admin-fallback-avatar", !this.hasAvatar()), this
        },
        hasAvatar: function() {
            return !i.isEmpty(this.avatarUri) && this.avatarUri.indexOf("msg-user-icon-73") < 0
        },
        html: function() {
            return this.render().$el.prop("outerHTML")
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(152),
        o = n(5),
        r = n(217);
    e.exports = o.View.extend({
        template: i.load("admin-profile"),
        adminTemplate: i.load("app-profile-admin"),
        className: "intercom-admin-profile",
        initialize: function(e) {
            this.settings = e.settings
        },
        render: function(e) {
            var t = this.settings.get("app.message");
            return this.$el.html(this.template({
                message: t
            })), this.renderVideoAdmin(e), this
        },
        renderVideoAdmin: function(e) {
            var t = {
                    avatarUri: e.avatar.image_urls.square_128,
                    adminFirstName: e.first_name
                },
                n = new r(t).html(),
                i = this.$el.find(".intercom-admin-profile-data");
            i.append(this.adminTemplate({
                adminAvatar: n,
                firstName: e.first_name
            }))
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        o = n(152);
    e.exports = i.View.extend({
        template: o.load("powered-by"),
        className: "intercom-powered-by",
        render: function(e) {
            return this.$el.html(this.template(e)), this
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(152),
        a = n(221),
        s = n(224),
        c = n(225),
        l = n(63);
    e.exports = o.View.extend({
        template: r.load("auto-response"),
        className: "intercom-auto-response",
        initialize: function(e) {
            this.settings = e.settings, this.message = this.model.getMessage()
        },
        render: function(e) {
            var t = 200;
            if (e = i.defaults({}, e, {
                    delay: 0
                }), this.$el.toggleClass("intercom-auto-response-active", this.isActive()), !this.isActive()) return this;
            if (this.hasAutoResponse() && this.renderTemplate(), this.isAnonymousUserWithoutEmail()) {
                var n = new a({
                    settings: this.settings,
                    parentView: this,
                    shouldShowReplyDelay: this.shouldShowReplyDelay()
                }).render();
                if (this.$el.append(n.$el), this.hasAutoResponse() && e.delay > 0) {
                    var o = e.delay + t;
                    s(n, o)
                }
            }
            return e.delay > 0 && this.$el.hide().delay(e.delay).fadeIn(t), this
        },
        shouldShowReplyDelay: function() {
            return this.model.replyDelayBodyBlockList().length > 0 && l.supportsBlockRendering(this.model.replyDelayBodyBlockList())
        },
        renderTemplate: function() {
            this.$el.html(this.template({
                medianResponseTimeEnabled: this.shouldShowReplyDelay(),
                medianResponseTimeBodyHTML: l.renderBlocks(this.model.replyDelayBodyBlockList()),
                customAutoResponseEnabled: this.settings.get("app.rtm-enabled"),
                customAutoResponse: this.settings.get("app.auto-response"),
                firstName: this.message.getAuthorFirstName(),
                haveEmail: !i.isEmpty(this.message.getAuthorEmail()),
                email: this.message.getAuthorEmail()
            }))
        },
        isActive: function() {
            return this.isAnonymousUserWithoutEmail() || this.hasAutoResponse()
        },
        hasAutoResponse: function() {
            return this.showStaticAutoResponse() || this.showCustomAutoResponse() || this.shouldShowReplyDelay()
        },
        isAutoResponseVisible: function() {
            return this.$(".intercom-auto-response-text").is(":visible")
        },
        hasAnonymousForm: function() {
            return this.$("input").is(":visible")
        },
        isAnonymousUserWithoutEmail: function() {
            return this.settings.get("user.anonymous") && i.isEmpty(this.message.getAuthorEmail())
        },
        showStaticAutoResponse: function() {
            return this.model.qualifiesForAutoResponse() && (!this.settings.get("app.rtm-enabled") || this.settings.get("app.rtm-enabled") && this.message.byAdmin())
        },
        showCustomAutoResponse: function() {
            return this.settings.get("app.rtm-enabled") && this.settings.has("app.auto-response") && this.model.qualifiesForAutoResponse()
        },
        removeAutoResponse: function() {
            c(this)
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(4),
        r = n(5),
        a = n(222),
        s = n(152),
        c = n(66),
        l = n(223);
    e.exports = r.View.extend({
        template: s.load("new-anonymous-user"),
        className: "intercom-new-anonymous-user",
        tagName: "form",
        events: {
            submit: "onSubmit",
            "input input[name=email]": "onTextChanged"
        },
        attributes: {
            novalidate: "novalidate"
        },
        initialize: function(e) {
            this.user = c.fromSettings(e.settings), this.parentView = e.parentView, this.shouldShowReplyDelay = e.shouldShowReplyDelay
        },
        render: function() {
            return this.$el.html(this.template({
                haveEmail: this.user.hasEmail(),
                email: this.user.getEmail(),
                emailCollectorText: this.shouldShowReplyDelay ? "median-reply-autoresponse-without-email" : "anonymous-email-responder"
            })), this.enable(), this
        },
        enable: function() {
            this.$el.removeClass("intercom-new-anonymous-user-disabled").find('input[type="submit"]').prop("disabled", "disabled")
        },
        disable: function() {
            this.$el.addClass("intercom-new-anonymous-user-disabled").find("input").prop("disabled", "disabled")
        },
        getEmail: function() {
            return i.trim(this.$("input[name=email]").val())
        },
        onSubmit: function(e) {
            e.preventDefault();
            var t = this.getEmail();
            return a.isValid(t) ? (this.disable(), void this.user.updateAnonymousEmail(t).then(this.playPostSubmitAnimation())) : void this.$("input[type=email]").addClass("intercom-new-anonymous-user-email-invalid")
        },
        playPostSubmitAnimation: function() {
            l(this, this.parentView)
        },
        onTextChanged: function() {
            this.$("input[type=submit]").prop("disabled", o.isEmpty(this.getEmail()) ? "disabled" : ""), this.$("input[type=email]").removeClass("intercom-new-anonymous-user-email-invalid")
        }
    })
}, function(e, t) {
    "use strict";
    t.isValid = function(e) {
        var t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return t.test(e)
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t, n, i) {
        e.$el.transition({
            height: n + "px",
            scale: .95,
            duration: 0
        }).transition({
            height: i + "px",
            duration: 200
        }).transition({
            opacity: 1,
            scale: 1.05,
            duration: 100
        }).transition({
            scale: 1,
            duration: 100,
            complete: function() {
                t.isAutoResponseVisible() ? this.transition({
                    opacity: 0,
                    delay: 5e3,
                    duration: 200
                }).slideUp() : this.transition({
                    delay: 5e3,
                    complete: function() {
                        t.removeAutoResponse()
                    }
                })
            }
        })
    }

    function o(e) {
        return e.$el.height()
    }
    n(3), n(206), e.exports = function(e, t) {
        e.$el.transition({
            opacity: 0,
            duration: 200,
            complete: function() {
                var n = o(e);
                e.render();
                var r = o(e);
                i(e, t, n, r)
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    n(3), n(206), e.exports = function(e, t) {
        e.$el.hide().transition({
            opacity: 0,
            duration: 0
        }).delay(t + 1800).slideDown({
            duration: 400
        }).transition({
            opacity: 1,
            duration: 200
        })
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e.isAnonymousUserWithoutEmail() && e.hasAnonymousForm() && !e.isAutoResponseVisible() ? void 0 : e.isAnonymousUserWithoutEmail() && e.isAutoResponseVisible() ? e.$(".intercom-auto-response-text") : e.$el
    }
    n(3), n(206), e.exports = function(e) {
        var t = i(e);
        if (t) {
            var n = t.height();
            t.css({
                height: n
            }).transition({
                opacity: 0,
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                border: 0,
                duration: 400
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(152),
        a = n(227);
    e.exports = o.View.extend({
        template: r.load("browser-notification-prompt"),
        className: "intercom-browser-notification-prompt",
        initialize: function(e) {
            this.settings = e.settings, this.message = this.model.getMessage()
        },
        events: {
            "click .intercom-browser-notification-button": "onBrowserNotificationPromptClicked"
        },
        render: function() {
            return this.$el.html(this.template()), this
        },
        isActive: function() {
            return this.settings.get("user.anonymous") && i.isEmpty(this.message.getAuthorEmail())
        },
        onBrowserNotificationPromptClicked: function() {
            var e = this.settings.get("app.id"),
                t = this.settings.get("user.anonymous-id");
            e && t && window.open(this._permissionPromptUrl(e, t), "Intercom", this._windowSettings())
        },
        _permissionPromptUrl: function(e, t) {
            return a.browser_notification_base + "/apps/" + e + "/notification_preferences?anonymous_id=" + t
        },
        _windowSettings: function() {
            var e = 608,
                t = 416,
                n = screen.width / 2 - e / 2,
                i = screen.height / 2 - t / 2;
            return "toolbar=no, location=no, directories=no, status=no, menubar=no, copyhistory=no, width=" + e + ", height=" + t + ", top=" + i + ", left=" + n
        }
    })
}, function(e, t) {
    e.exports = {
        api_base: "https://api-iam.intercom.io",
        ping_api_base: "https://api-ping.intercom.io",
        browser_notification_base: "https://app.intercom.io",
        sentry_dsn: "https://10947f071245455fb0a24fe35aa91587@app.getsentry.com/24287"
    }
}, function(e, t, n) {
    "use strict";
    var i = n(221),
        o = n(229);
    e.exports = i.extend({
        className: "intercom-auto-response intercom-new-anonymous-user",
        render: function() {
            return this.$el.addClass("intercom-auto-response-active").html(this.template({
                haveEmail: this.user.hasEmail(),
                email: this.user.getEmail(),
                emailCollectorText: "receive-updates-email-collector"
            })), this.enable(), this
        },
        isActive: function() {
            return this.$el.is(":visible")
        },
        enable: function() {
            this.$el.removeClass("intercom-new-anonymous-user-disabled").find('input[type="submit"]').prop("disabled", "disabled")
        },
        disable: function() {
            this.$el.addClass("intercom-new-anonymous-user-disabled").find("input").prop("disabled", "disabled")
        },
        insertIntoParentView: function() {
            0 === this.parentView.$(".intercom-new-anonymous-user").length && this.$el.insertAfter(this.parentView.$(".intercom-conversation-part").has(".intercom-comment-by-user").first())
        },
        playPostSubmitAnimation: function() {
            o(this)
        },
        removeFromParentView: function() {
            this.$el.remove()
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        e.$el.transition({
            height: t,
            duration: 0
        }).transition({
            height: n,
            duration: 200,
            complete: function() {
                e.$el.height(n)
            }
        }), e.$el.children().transition({
            opacity: 0,
            duration: 0
        }).delay(200).transition({
            opacity: 1,
            duration: 200
        })
    }

    function o(e) {
        return e.$el.height()
    }
    n(3), n(206);
    var r = !1;
    e.exports = function(e) {
        e.$el.children().transition({
            opacity: 0,
            duration: 200,
            complete: function() {
                if (!r) {
                    r = !0;
                    var t = o(e);
                    e.render();
                    var n = o(e);
                    i(e, t, n)
                }
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        o = n(152);
    e.exports = i.View.extend({
        template: o.load("is-typing"),
        className: "intercom-conversation-part intercom-is-typing",
        render: function(e) {
            return this.$el.html(this.template(e)), this
        },
        getHeight: function() {
            return this.$el.outerHeight(!0)
        }
    })
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        o = n(4),
        r = n(59),
        a = n(152),
        s = n(69),
        c = n(222),
        l = n(219),
        u = n(76),
        m = n(232),
        d = n(212),
        p = n(213);
    e.exports = i.View.extend({
        template: a.load("interbot-email-collector"),
        tagName: "form",
        id: "intercom-interbot-email-collector",
        className: "intercom-interbot-email-collector",
        events: {
            submit: "onSubmitted",
            "keyup   .intercom-interbot-email-collector-input": "onTextChanged",
            "keydown .intercom-interbot-email-collector-input": "onKeyDown",
            "input   .intercom-interbot-email-collector-input": "onTextChanged",
            "click   .intercom-interbot-composer-send-button": "onSendClicked"
        },
        initialize: function(e) {
            this.conversation = e.conversation, this.user = e.user, this.settings = e.settings, this.poweredByView = new l({
                settings: this.settings
            }), this.conversationView = e.parentView
        },
        render: function() {
            return this.$el.html(this.template()), this
        },
        renderPoweredBy: function() {
            this.$el.append(this.poweredByView.render({
                trackingType: "inbound"
            }).el)
        },
        onSendClicked: function(e) {
            e.preventDefault(), e.stopPropagation(), this.browserIsTouchScreenAndHasValidEmail() ? this.sendEmailMessage(this.getText()) : this.sendNotNowMessage()
        },
        browserIsTouchScreenAndHasValidEmail: function() {
            return this.emailIsValid() && r.features.touchScreen()
        },
        showNotNowTextInSubmitButtonForTouchScreens: function() {
            r.features.touchScreen() && this.$(".intercom-interbot-composer-send-button").text("Not now")
        },
        showSendTextInSubmitButtonForTouchScreens: function() {
            r.features.touchScreen() && this.$(".intercom-interbot-composer-send-button").text("Send")
        },
        sendNotNowMessage: function() {
            u.increment("interbotEmailCollectorLeadDeclinedEmail"), this.$(".intercom-interbot-email-collector-input").val(""), this.conversationView.onInterbotEmailCancel.call(this.conversationView, "Not now")
        },
        onKeyDown: function(e) {
            this.submitKeyPressed(e) && this.$el.submit(), e.stopPropagation()
        },
        submitKeyPressed: function(e) {
            return 13 !== e.keyCode || e.altKey || e.shiftKey ? !1 : (e.preventDefault(), !0)
        },
        emailIsValid: function() {
            return c.isValid(this.getText())
        },
        onTextChanged: function(e) {
            e.stopPropagation(), this.emailIsValid() ? (this.queueEnterToSendAnimation(), this.disableEmailErrorState(), this.showSendTextInSubmitButtonForTouchScreens()) : this.showNotNowTextInSubmitButtonForTouchScreens()
        },
        onSubmitted: function(e) {
            e.preventDefault();
            var t = this.getText();
            c.isValid(t) ? this.sendEmailMessage(t) : this.enableEmailErrorState()
        },
        sendEmailMessage: function(e) {
            s.playSubmit(), u.increment("interbotEmailCollectorLeadProvidedEmail"), this.user.updateAnonymousEmail(e), this.conversationView.onInterbotEmailAdded.call(this.conversationView, e), this.hideEnterToSend()
        },
        updatePosition: function() {
            var e = this.$el.closest(".intercom-interbot-email-collector").outerHeight(!0);
            this.$el.closest(".intercom-conversation").find(".intercom-sheet-content").css({
                bottom: e
            })
        },
        disableEmailErrorState: function() {
            this.$(".intercom-interbot-email-collector-input").removeClass("intercom-interbot-invalid-email"), this.$(".intercom-interbot-email-error-text").addClass("intercom-interbot-email-error-text-hidden"), this.updatePosition()
        },
        enableEmailErrorState: function() {
            u.increment("interbotEmailCollectorLeadIncorrectEmail"), this.hideEnterToSend(), this.$(".intercom-interbot-email-collector-input").addClass("intercom-interbot-invalid-email"),
                this.$(".intercom-interbot-email-error-text").removeClass("intercom-interbot-email-error-text-hidden"), this.updatePosition()
        },
        hide: function() {
            return this.$el.addClass("intercom-interbot-composer-inactive"), this
        },
        show: function(e, t) {
            return this.$el.removeClass("intercom-interbot-composer-inactive"), e && m(this), this.focus(), t && this.renderPoweredBy(), this
        },
        focus: function() {
            r.features.touchScreen() && this.$(".intercom-composer-textarea-container .intercom-interbot-email-collector-input").css({
                "font-size": "20px",
                "padding-bottom": "6px"
            }), this.$(".intercom-interbot-email-collector-input").focus()
        },
        getText: function() {
            return this.$(".intercom-interbot-email-collector-input").val()
        },
        setText: function(e) {
            o.isString(e) && this.$(".intercom-interbot-email-collector-input").val(e)
        },
        resetEnterToSendTimeout: function() {
            clearTimeout(this.timeout)
        },
        hideEnterToSend: function() {
            this.resetEnterToSendTimeout(), p(this)
        },
        queueEnterToSendAnimation: function() {
            r.features.touchScreen() || (this.resetEnterToSendTimeout(), o.isEmpty(this.getText()) ? this.hideEnterToSend() : d(this))
        }
    })
}, function(e, t, n) {
    "use strict";
    n(3), n(206), e.exports = function(e) {
        e.$el.transition({
            opacity: 0,
            duration: 0
        }).delay(400).transition({
            opacity: 1,
            duration: 200
        })
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        e.scrollToBottom(), t.$el.transition({
            opacity: 0,
            duration: 0
        }).transition({
            opacity: 100,
            duration: 400
        }), e.$(".intercom-conversation-parts").transition({
            y: n + "px",
            duration: 0
        }).transition({
            y: "0px",
            duration: 400,
            easing: "ease"
        })
    }

    function o(e) {
        e.$el.transition({
            y: "100px",
            opacity: 0,
            duration: 0
        }).transition({
            opacity: 100,
            queue: !1,
            duration: 200
        }).transition({
            y: "0px",
            duration: 400,
            easing: "snap"
        })
    }

    function r(e, t, n) {
        return Math.min(e.getHeight() - e.$(".intercom-conversation-parts-container").outerHeight(!0) - e.$(".intercom-app-profile-container").outerHeight(!0), t.getHeight() - n)
    }
    n(3), n(206), e.exports = function(e, t, n) {
        var a = r(e, t, n),
            s = t.getHeight() - n;
        a > 0 ? o(t) : (a = Math.abs(a) < s ? Math.abs(a) : s, i(e, t, a, n))
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t, n, i) {
        e.scrollToBottom(), e.$(".intercom-sheet-content").transition({
            y: t + "px",
            duration: 0
        }).transition({
            y: "0px",
            duration: 400,
            easing: "ease",
            complete: function() {
                n && i.$el.addClass("intercom-conversation-part-grouped-last")
            }
        })
    }

    function o(e, t) {
        e.$el.transition({
            y: "+=" + t + "px",
            duration: 0
        }).transition({
            y: "0px",
            duration: 400,
            easing: "snap",
            complete: function() {
                this.addClass("intercom-conversation-part-grouped-last")
            }
        }), e.$(".intercom-comment-metadata-container").transition({
            opacity: 0,
            duration: 0
        }).transition({
            opacity: 1,
            duration: 100
        })
    }

    function r(e, t) {
        e.$el.transition({
            y: t + "px",
            opacity: 0,
            duration: 0
        }).transition({
            opacity: 100,
            queue: !1,
            duration: 200
        }).transition({
            y: "0px",
            duration: 400,
            easing: "snap"
        })
    }

    function a(e, t, n) {
        return Math.min(e.getScrollPosition(), t.getHeight() - n)
    }

    function s(e, t, n) {
        if (!n) return 0;
        e.$(".intercom-comment-caret").remove();
        var i = e.model.byInterbot() ? 0 : 200;
        e.$(".intercom-comment-avatar").transition({
            opacity: 0,
            duration: i
        });
        var o = t.outerHeight(!0);
        return t.hasClass("intercom-conversation-part-grouped-last") ? t.removeClass("intercom-conversation-part-grouped-last").addClass("intercom-conversation-part-grouped") : t.addClass("intercom-conversation-part-grouped-first"), o - t.outerHeight(!0)
    }

    function c(e) {
        var t = 100,
            n = e.$(".intercom-conversation-parts-container"),
            i = e.$(".intercom-app-profile-container"),
            o = e.$(".intercom-sheet-content-container"),
            r = o.height() - (i.outerHeight() + n.outerHeight() + t) + parseInt(n.css("padding-bottom"), 10);
        return 0 > r && (t -= Math.abs(r)), t
    }
    n(3), n(206), e.exports = function(e, t, n, l) {
        var u = e.$(".intercom-conversation-part:not(.intercom-is-typing):eq(-2)"),
            m = s(t, u, l),
            d = a(e, t, m),
            p = t.getHeight() - m;
        if (n && (d -= n.getHeight()), d > 0) d = p > d ? d : p, i(e, d, l, t);
        else if (l) o(t, m);
        else if (t.model.byInterbot()) {
            var h = c(e);
            r(t, h)
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        e.$(".intercom-conversation-parts").transition({
            y: n + "px",
            duration: 0
        }).transition({
            y: "0px",
            duration: 100
        }), t.$(".intercom-comment-avatar").transition({
            opacity: 0,
            scale: 0,
            duration: 0
        }).transition({
            opacity: 100,
            scale: 1,
            duration: 100,
            delay: 100
        }), t.$(".intercom-comment-body-container").transition({
            scale: 0,
            opacity: 0,
            duration: 0
        }).transition({
            scale: 1,
            opacity: 100,
            duration: 100,
            delay: 200
        })
    }

    function o(e) {
        e.$(".intercom-comment-avatar").transition({
            opacity: 0,
            scale: 0,
            duration: 0
        }).transition({
            opacity: 100,
            scale: 1,
            duration: 100
        }), e.$(".intercom-comment-body-container").transition({
            scale: 0,
            opacity: 0,
            duration: 0
        }).transition({
            scale: 1,
            opacity: 100,
            duration: 100,
            delay: 100
        })
    }

    function r(e, t) {
        return Math.min(e.getScrollTop(), t.getHeight())
    }
    n(3), n(206), e.exports = function(e, t) {
        var n = r(e, t);
        n > 0 ? i(e, t, n) : o(t)
    }
}, function(e, t, n) {
    "use strict";
    n(3), n(206), e.exports = function(e) {
        var t = e.$(".intercom-app-profile-container"),
            n = t.height();
        t.css({
            height: n,
            overflow: "hidden"
        }).transition({
            height: 0,
            duration: 400,
            complete: function() {
                t.empty().removeAttr("style")
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    n(3), n(206), e.exports = function(e) {
        var t = e.$(".intercom-composer");
        t.transition({
            opacity: 0,
            duration: 400
        })
    }
}, function(e, t, n) {
    "use strict";
    n(3), n(206), e.exports = function(e) {
        var t = e.$(".intercom-composer");
        t.transition({
            opacity: 1,
            duration: 400
        })
    }
}, function(e, t, n) {
    "use strict";
    n(3), n(206), e.exports = function(e) {
        var t = e.$(".intercom-composer"),
            n = t.outerHeight(!0);
        t.transition({
            y: n,
            duration: 0
        }).delay(200).transition({
            y: -5,
            easing: "ease",
            duration: 200
        }).transition({
            y: 0,
            easing: "ease",
            duration: 200
        })
    }
}, function(e, t, n) {
    "use strict";
    n(3), n(206), e.exports = function(e) {
        e.$el.transition({
            opacity: 0,
            duration: 0
        }).delay(400).transition({
            opacity: 1,
            duration: 200
        })
    }
}, function(e, t, n) {
    "use strict";
    n(3), n(206), e.exports = function(e) {
        var t = e.$(".intercom-composer");
        t.transition({
            y: -5,
            duration: 200
        }).transition({
            y: 0,
            easing: "ease",
            duration: 200
        })
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        e.$(".intercom-conversation-parts").transition({
            y: -t + "px",
            duration: 0,
            delay: n
        }).transition({
            y: "0px",
            duration: n
        })
    }

    function o(e, t) {
        e.$el.transition({
            opacity: 0,
            duration: t
        })
    }

    function r(e, t) {
        return Math.min(e.getScrollTop(), t.getHeight())
    }
    n(3), n(206);
    var a = n(4);
    e.exports = function(e, t, n) {
        n = n || 100;
        var s = r(e, t);
        i(e, t, s, n), o(t, n), a.delay(a.bind(t.remove, t), n)
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        e.is(":visible") && !a && (a = !0, e.transition({
            opacity: 0,
            top: "-100%",
            duration: r,
            complete: function() {
                this.css({
                    opacity: 1
                }).hide(), a = !1
            }
        }), t.show().css({
            opacity: 0
        }).transition({
            opacity: 1,
            top: 0,
            duration: r
        }))
    }

    function o(e, t) {
        e.is(":visible") || a || (a = !0, e.show().css({
            opacity: 0
        }).transition({
            opacity: 1,
            top: 0,
            duration: r
        }), t.transition({
            opacity: 0,
            top: "100%",
            duration: r,
            complete: function() {
                this.css({
                    opacity: 1
                }).hide(), a = !1
            }
        }))
    }
    n(3), n(206);
    var r, a = !1;
    e.exports = function(e, t, n) {
        var r = e.$(".intercom-sheet-header-generic-title"),
            a = e.$(".intercom-sheet-header-title-container");
        n = n || 200, t ? o(r, a) : i(r, a)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(245),
        o = n(253),
        r = n(254),
        a = function(e, t, n) {
            var a = new o(e, t, n);
            if (a.shouldStartInterbot()) {
                var s = new r(e),
                    c = new i(a, s);
                c.startAt("emailCollectorState", e.get("interbot_state"))
            }
            return a
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var i = n(246),
        o = n(247),
        r = function(e, t) {
            this.context = e, this.conversation = t, this.stateMachine = new i.StateMachine("interbot"), this.instance = new i.StateMachineInstance("instance"), this.initial = new i.PseudoState("initial", this.stateMachine, i.PseudoStateKind.Initial), this.finalState = new i.PseudoState("final", this.stateMachine, i.PseudoStateKind.Terminate), this._listenForContextUpdates()
        };
    r.prototype.getStateMachine = function() {
        return this.stateMachine
    }, r.prototype.getStateMachineInstance = function() {
        return this.instance
    }, r.prototype.initialState = function() {
        return this.initial
    }, r.prototype.finalState = function() {
        return this.finalState
    }, r.prototype.startAt = function(e, t) {
        var n = o(this, this.context, this.conversation, t);
        this.initial.to(n), i.initialise(this.stateMachine, this.instance)
    }, r.prototype.evaluate = function(e) {
        i.evaluate(this.getStateMachine(), this.getStateMachineInstance(), e)
    }, r.prototype._listenForContextUpdates = function() {
        this.context.on("interbot-context:state-update", function() {
            this.evaluate(this.context)
        }, this)
    }, e.exports = r
}, function(e, t) {
    var n;
    ! function(e) {
        var t = function() {
            function e(e) {
                this.actions = [], e && this.push(e)
            }
            return e.prototype.push = function(t) {
                return Array.prototype.push.apply(this.actions, t instanceof e ? t.actions : arguments), this
            }, e.prototype.hasActions = function() {
                return 0 !== this.actions.length
            }, e.prototype.invoke = function(e, t, n) {
                void 0 === n && (n = !1), this.actions.forEach(function(i) {
                    return i(e, t, n)
                })
            }, e
        }();
        e.Behavior = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        ! function(e) {
            e[e.Initial = 0] = "Initial", e[e.ShallowHistory = 1] = "ShallowHistory", e[e.DeepHistory = 2] = "DeepHistory", e[e.Choice = 3] = "Choice", e[e.Junction = 4] = "Junction", e[e.Terminate = 5] = "Terminate"
        }(e.PseudoStateKind || (e.PseudoStateKind = {}));
        e.PseudoStateKind
    }(n || (n = {}));
    var n;
    ! function(e) {
        ! function(e) {
            e[e.Internal = 0] = "Internal", e[e.Local = 1] = "Local", e[e.External = 2] = "External"
        }(e.TransitionKind || (e.TransitionKind = {}));
        e.TransitionKind
    }(n || (n = {}));
    var n;
    ! function(e) {
        var t = function() {
            function e(t, n) {
                this.name = t, this.qualifiedName = n ? n.qualifiedName + e.namespaceSeparator + t : t
            }
            return e.prototype.toString = function() {
                return this.qualifiedName
            }, e.namespaceSeparator = ".", e
        }();
        e.Element = t
    }(n || (n = {}));
    var n, i = this && this.__extends || function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    };
    ! function(e) {
        var t = function(e) {
            function t(t, n) {
                e.call(this, t, n), this.vertices = [], this.state = n, this.state.regions.push(this), this.state.getRoot().clean = !1
            }
            return i(t, e), t.prototype.getRoot = function() {
                return this.state.getRoot()
            }, t.prototype.accept = function(e, t, n, i) {
                return e.visitRegion(this, t, n, i)
            }, t.defaultName = "default", t
        }(e.Element);
        e.Region = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        var t = function(t) {
            function n(n, i) {
                t.call(this, n, i instanceof e.State ? i.defaultRegion() : i), this.outgoing = [], this.region = i instanceof e.State ? i.defaultRegion() : i instanceof e.Region ? i : void 0, this.region && (this.region.vertices.push(this), this.region.getRoot().clean = !1)
            }
            return i(n, t), n.prototype.ancestry = function() {
                return (this.region ? this.region.state.ancestry() : []).concat(this)
            }, n.prototype.getRoot = function() {
                return this.region.getRoot()
            }, n.prototype.to = function(t, n) {
                return void 0 === n && (n = e.TransitionKind.External), new e.Transition(this, t, n)
            }, n.prototype.accept = function(e, t, n, i) {}, n
        }(e.Element);
        e.Vertex = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        var t = function(t) {
            function n(n, i, o) {
                void 0 === o && (o = e.PseudoStateKind.Initial), t.call(this, n, i), this.kind = o
            }
            return i(n, t), n.prototype.isHistory = function() {
                return this.kind === e.PseudoStateKind.DeepHistory || this.kind === e.PseudoStateKind.ShallowHistory
            }, n.prototype.isInitial = function() {
                return this.kind === e.PseudoStateKind.Initial || this.isHistory()
            }, n.prototype.accept = function(e, t, n, i) {
                return e.visitPseudoState(this, t, n, i)
            }, n
        }(e.Vertex);
        e.PseudoState = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        var t = function(t) {
            function n(n, i) {
                t.call(this, n, i), this.exitBehavior = new e.Behavior, this.entryBehavior = new e.Behavior, this.regions = []
            }
            return i(n, t), n.prototype.defaultRegion = function() {
                return this.regions.reduce(function(t, n) {
                    return n.name === e.Region.defaultName ? n : t
                }, void 0) || new e.Region(e.Region.defaultName, this)
            }, n.prototype.isFinal = function() {
                return 0 === this.outgoing.length
            }, n.prototype.isSimple = function() {
                return 0 === this.regions.length
            }, n.prototype.isComposite = function() {
                return this.regions.length > 0
            }, n.prototype.isOrthogonal = function() {
                return this.regions.length > 1
            }, n.prototype.exit = function(e) {
                return this.exitBehavior.push(e), this.getRoot().clean = !1, this
            }, n.prototype.entry = function(e) {
                return this.entryBehavior.push(e), this.getRoot().clean = !1, this
            }, n.prototype.accept = function(e, t, n, i) {
                return e.visitState(this, t, n, i)
            }, n
        }(e.Vertex);
        e.State = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        var t = function(e) {
            function t(t, n) {
                e.call(this, t, n)
            }
            return i(t, e), t.prototype.accept = function(e, t, n, i) {
                return e.visitFinalState(this, t, n, i)
            }, t
        }(e.State);
        e.FinalState = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        var t = function(e) {
            function t(t) {
                e.call(this, t, void 0), this.clean = !1
            }
            return i(t, e), t.prototype.getRoot = function() {
                return this.region ? this.region.getRoot() : this
            }, t.prototype.accept = function(e, t, n, i) {
                return e.visitStateMachine(this, t, n, i)
            }, t
        }(e.State);
        e.StateMachine = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        var t = function() {
            function t(n, i, o) {
                var r = this;
                void 0 === o && (o = e.TransitionKind.External), this.transitionBehavior = new e.Behavior, this.onTraverse = new e.Behavior, this.source = n, this.target = i, this.kind = i ? o : e.TransitionKind.Internal, this.guard = n instanceof e.PseudoState ? t.TrueGuard : function(e) {
                    return e === r.source
                }, this.source.outgoing.push(this), this.source.getRoot().clean = !1
            }
            return t.prototype.Else = function() {
                return this.guard = t.FalseGuard, this
            }, t.prototype.when = function(e) {
                return this.guard = e, this
            }, t.prototype.effect = function(e) {
                return this.transitionBehavior.push(e), this.source.getRoot().clean = !1, this
            }, t.prototype.accept = function(e, t, n, i) {
                return e.visitTransition(this, t, n, i)
            }, t.prototype.toString = function() {
                return "[" + (this.target ? this.source + " -> " + this.target : this.source) + "]"
            }, t.TrueGuard = function() {
                return !0
            }, t.FalseGuard = function() {
                return !1
            }, t
        }();
        e.Transition = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        var t = function() {
            function e() {}
            return e.prototype.visitElement = function(e, t, n, i) {}, e.prototype.visitRegion = function(e, t, n, i) {
                var o = this,
                    r = this.visitElement(e, t, n, i);
                return e.vertices.forEach(function(e) {
                    e.accept(o, t, n, i)
                }), r
            }, e.prototype.visitVertex = function(e, t, n, i) {
                var o = this,
                    r = this.visitElement(e, t, n, i);
                return e.outgoing.forEach(function(e) {
                    e.accept(o, t, n, i)
                }), r
            }, e.prototype.visitPseudoState = function(e, t, n, i) {
                return this.visitVertex(e, t, n, i)
            }, e.prototype.visitState = function(e, t, n, i) {
                var o = this,
                    r = this.visitVertex(e, t, n, i);
                return e.regions.forEach(function(e) {
                    e.accept(o, t, n, i)
                }), r
            }, e.prototype.visitFinalState = function(e, t, n, i) {
                return this.visitState(e, t, n, i)
            }, e.prototype.visitStateMachine = function(e, t, n, i) {
                return this.visitState(e, t, n, i)
            }, e.prototype.visitTransition = function(e, t, n, i) {}, e
        }();
        e.Visitor = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        var t = function() {
            function e(e) {
                void 0 === e && (e = "unnamed"), this.last = {}, this.isTerminated = !1, this.name = e
            }
            return e.prototype.setCurrent = function(e, t) {
                this.last[e.qualifiedName] = t
            }, e.prototype.getCurrent = function(e) {
                return this.last[e.qualifiedName]
            }, e.prototype.toString = function() {
                return this.name
            }, e
        }();
        e.StateMachineInstance = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        function t(e) {
            i = e
        }

        function n() {
            return i
        }
        e.setRandom = t, e.getRandom = n;
        var i = function(e) {
            return Math.floor(Math.random() * e)
        }
    }(n || (n = {}));
    var n;
    ! function(e) {
        function t(e, n) {
            return e.region ? t(e.region.state, n) && n.getCurrent(e.region) === e : !0
        }
        e.isActive = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        function t(n, i) {
            return n instanceof e.Region ? i.getCurrent(n).isFinal() : n instanceof e.State ? n.regions.every(function(e) {
                return t(e, i)
            }) : !0
        }
        e.isComplete = t
    }(n || (n = {}));
    var n;
    ! function(e) {
        function t(n, i, o) {
            void 0 === o && (o = !0), i ? (o && n.clean === !1 && t(n), e.console.log("initialise " + i), n.onInitialise.invoke(void 0, i)) : (e.console.log("initialise " + n.name), n.accept(new u, !1), n.clean = !0)
        }

        function n(n, i, r, a) {
            return void 0 === a && (a = !0), e.console.log(i + " evaluate " + r), a && n.clean === !1 && t(n), i.isTerminated ? !1 : o(n, i, r)
        }

        function o(t, n, i) {
            var a = !1;
            if (t.regions.every(function(r) {
                    return o(n.getCurrent(r), n, i) ? (a = !0, e.isActive(t, n)) : !0
                }), a) i !== t && e.isComplete(t, n) && o(t, n, t);
            else {
                var s = t.outgoing.filter(function(e) {
                    return e.guard(i, n)
                });
                1 === s.length ? a = r(s[0], n, i) : s.length > 1 && e.console.error(t + ": multiple outbound transitions evaluated true for message " + i)
            }
            return a
        }

        function r(t, n, i) {
            for (var s = new e.Behavior(t.onTraverse); t.target && t.target instanceof e.PseudoState;) {
                var c = t.target;
                if (c.kind !== e.PseudoStateKind.Junction) break;
                t = a(c, n, i), s.push(t.onTraverse)
            }
            if (s.invoke(i, n), null != t.target)
                if (t.target instanceof e.PseudoState) {
                    var c = t.target;
                    c.kind == e.PseudoStateKind.Choice && r(a(c, n, i), n, i)
                } else if (t.target instanceof e.State) {
                var l = t.target;
                e.isComplete(l, n) && o(l, n, l)
            }
            return !0
        }

        function a(t, n, i) {
            var o = t.outgoing.filter(function(e) {
                return e.guard(i, n)
            });
            return t.kind === e.PseudoStateKind.Choice ? 0 !== o.length ? o[e.getRandom()(o.length)] : s(t) : o.length > 1 ? void e.console.error("Multiple outbound transition guards returned true at " + t + " for " + i) : o[0] || s(t)
        }

        function s(t) {
            return t.outgoing.filter(function(t) {
                return t.guard === e.Transition.FalseGuard
            })[0]
        }
        e.initialise = t, e.evaluate = n;
        var c = function() {
                function t() {
                    this.leave = new e.Behavior, this.beginEnter = new e.Behavior, this.endEnter = new e.Behavior
                }
                return t.prototype.enter = function() {
                    return new e.Behavior(this.beginEnter).push(this.endEnter)
                }, t
            }(),
            l = function(t) {
                function n() {
                    t.apply(this, arguments)
                }
                return i(n, t), n.prototype.visitTransition = function(t, n) {
                    t.kind === e.TransitionKind.Internal ? t.onTraverse.push(t.transitionBehavior) : t.kind === e.TransitionKind.Local ? this.visitLocalTransition(t, n) : this.visitExternalTransition(t, n)
                }, n.prototype.visitLocalTransition = function(t, n) {
                    var i = this;
                    t.onTraverse.push(function(o, r) {
                        for (var a = t.target.ancestry(), s = 0; e.isActive(a[s], r);) ++s;
                        for (n(r.getCurrent(a[s].region)).leave.invoke(o, r), t.transitionBehavior.invoke(o, r); s < a.length;) i.cascadeElementEntry(t, n, a[s++], a[s], function(e) {
                            return e.invoke(o, r)
                        });
                        n(t.target).endEnter.invoke(o, r)
                    })
                }, n.prototype.visitExternalTransition = function(e, t) {
                    for (var n = e.source.ancestry(), i = e.target.ancestry(), o = Math.min(n.length, i.length) - 1; n[o - 1] !== i[o - 1];) --o;
                    for (e.onTraverse.push(t(n[o]).leave), e.onTraverse.push(e.transitionBehavior); o < i.length;) this.cascadeElementEntry(e, t, i[o++], i[o], function(t) {
                        return e.onTraverse.push(t)
                    });
                    e.onTraverse.push(t(e.target).endEnter)
                }, n.prototype.cascadeElementEntry = function(t, n, i, o, r) {
                    if (r(n(i).beginEnter), o && i instanceof e.State) {
                        var a = i;
                        a.regions.forEach(function(e) {
                            r(n(e).beginEnter), e !== o.region && r(n(e).endEnter)
                        })
                    }
                }, n
            }(e.Visitor),
            u = function(t) {
                function n() {
                    t.apply(this, arguments), this.behaviors = {}
                }
                return i(n, t), n.prototype.behavior = function(e) {
                    return this.behaviors[e.qualifiedName] || (this.behaviors[e.qualifiedName] = new c)
                }, n.prototype.visitElement = function(t, n) {
                    e.console !== m && (this.behavior(t).leave.push(function(n, i) {
                        return e.console.log(i + " leave " + t)
                    }), this.behavior(t).beginEnter.push(function(n, i) {
                        return e.console.log(i + " enter " + t)
                    }))
                }, n.prototype.visitRegion = function(t, n) {
                    var i = this,
                        o = t.vertices.reduce(function(t, n) {
                            return n instanceof e.PseudoState && n.isInitial() ? n : t
                        }, void 0);
                    t.vertices.forEach(function(t) {
                        return t.accept(i, n || o && o.kind === e.PseudoStateKind.DeepHistory)
                    }), this.behavior(t).leave.push(function(e, n) {
                        return i.behavior(n.getCurrent(t)).leave.invoke(e, n)
                    }), n || !o || o.isHistory() ? this.behavior(t).endEnter.push(function(n, r, a) {
                        return i.behavior(a || o.isHistory() ? r.getCurrent(t) || o : o).enter().invoke(n, r, a || o.kind === e.PseudoStateKind.DeepHistory)
                    }) : this.behavior(t).endEnter.push(this.behavior(o).enter()), this.visitElement(t, n)
                }, n.prototype.visitPseudoState = function(n, i) {
                    t.prototype.visitPseudoState.call(this, n, i), n.isInitial() ? this.behavior(n).endEnter.push(function(e, t) {
                        return r(n.outgoing[0], t)
                    }) : n.kind === e.PseudoStateKind.Terminate && this.behavior(n).beginEnter.push(function(e, t) {
                        return t.isTerminated = !0
                    })
                }, n.prototype.visitState = function(e, t) {
                    var n = this;
                    e.regions.forEach(function(i) {
                        i.accept(n, t), n.behavior(e).leave.push(n.behavior(i).leave), n.behavior(e).endEnter.push(n.behavior(i).enter())
                    }), this.visitVertex(e, t), this.behavior(e).leave.push(e.exitBehavior), this.behavior(e).beginEnter.push(e.entryBehavior), this.behavior(e).beginEnter.push(function(t, n) {
                        e.region && n.setCurrent(e.region, e)
                    })
                }, n.prototype.visitStateMachine = function(e, n) {
                    var i = this;
                    t.prototype.visitStateMachine.call(this, e, n), e.accept(new l, function(e) {
                        return i.behavior(e)
                    }), e.onInitialise = this.behavior(e).enter()
                }, n
            }(e.Visitor),
            m = {
                log: function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
                },
                warn: function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
                },
                error: function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    throw e
                }
            };
        e.console = m
    }(n || (n = {}));
    var n;
    ! function(e) {
        function t(e) {
            e.accept(new n)
        }
        e.validate = t;
        var n = function(t) {
            function n() {
                t.apply(this, arguments)
            }
            return i(n, t), n.prototype.visitPseudoState = function(n) {
                t.prototype.visitPseudoState.call(this, n), n.kind === e.PseudoStateKind.Choice || n.kind === e.PseudoStateKind.Junction ? (0 === n.outgoing.length && e.console.error(n + ": " + n.kind + " pseudo states must have at least one outgoing transition."), n.outgoing.filter(function(t) {
                    return t.guard === e.Transition.FalseGuard
                }).length > 1 && e.console.error(n + ": " + n.kind + " pseudo states cannot have more than one Else transitions.")) : (0 !== n.outgoing.filter(function(t) {
                    return t.guard === e.Transition.FalseGuard
                }).length && e.console.error(n + ": " + n.kind + " pseudo states cannot have Else transitions."), n.isInitial() && (1 !== n.outgoing.length ? e.console.error(n + ": initial pseudo states must have one outgoing transition.") : n.outgoing[0].guard !== e.Transition.TrueGuard && e.console.error(n + ": initial pseudo states cannot have a guard condition.")))
            }, n.prototype.visitRegion = function(n) {
                t.prototype.visitRegion.call(this, n);
                var i;
                n.vertices.forEach(function(t) {
                    t instanceof e.PseudoState && t.isInitial() && (i && e.console.error(n + ": regions may have at most one initial pseudo state."), i = t)
                })
            }, n.prototype.visitState = function(n) {
                t.prototype.visitState.call(this, n), n.regions.filter(function(t) {
                    return t.name === e.Region.defaultName
                }).length > 1 && e.console.error(n + ": a state cannot have more than one region named " + e.Region.defaultName)
            }, n.prototype.visitFinalState = function(n) {
                t.prototype.visitFinalState.call(this, n), 0 !== n.outgoing.length && e.console.error(n + ": final states must not have outgoing transitions."), 0 !== n.regions.length && e.console.error(n + ": final states must not have child regions."), n.entryBehavior.hasActions() && e.console.warn(n + ": final states may not have entry behavior."), n.exitBehavior.hasActions() && e.console.warn(n + ": final states may not have exit behavior.")
            }, n.prototype.visitTransition = function(n) {
                t.prototype.visitTransition.call(this, n), n.kind === e.TransitionKind.Local && -1 === n.target.ancestry().indexOf(n.source) && e.console.error(n + ": local transition target vertices must be a child of the source composite sate.")
            }, n
        }(e.Visitor)
    }(n || (n = {}));
    var e = e;
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var i = n(246),
        o = n(248),
        r = n(249),
        a = n(250),
        s = n(251),
        c = n(252),
        l = function(e, t, n, l) {
            var u = e.getStateMachine();
            l = l || "user_message_received";
            var m = new i.State("emailCollector", u),
                d = new i.PseudoState("history", m, i.PseudoStateKind.DeepHistory),
                p = new i.State("evaluate", m),
                h = o(m, e, t, n),
                f = r(m, e, t, n),
                g = a(m, e, t, n),
                v = s(m, e, t, n),
                b = c(m, e, t, n);
            return h.to(f).when(function(e) {
                return e.userHasEmail === !1 && e.composerIsEmpty && e.timeSinceMessage >= 2
            }), f.to(g).when(function(e) {
                return e.timeSinceBotMessage >= 1 && e.botWelcomeMessageDelivered
            }), g.to(v).when(function(e) {
                return e.userCancelledEmailCollection === !0
            }), g.to(b).when(function(e) {
                return e.userHasEmail === !0
            }), p.to(h).when(function() {
                return l === h.name
            }), p.to(f).when(function() {
                return l === f.name
            }), p.to(g).when(function() {
                return l === g.name
            }), d.to(p), m
        };
    e.exports = l
}, function(e, t, n) {
    "use strict";
    var i = n(246),
        o = function(e, t, n) {
            var o = new i.State("user_message_received", e);
            return o.entry(function() {
                o.quickTimer = setTimeout(function() {
                    n.timeSinceMessage = 2, t.evaluate(n)
                }, 2e3), o.repeatTimer = setInterval(function() {
                    t.evaluate(n)
                }, 5e3)
            }), o.exit(function() {
                clearTimeout(o.quickTimer), clearInterval(o.repeatTimer)
            }), o
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var i = n(246),
        o = function(e, t, n, o) {
            var r = new i.State("deliver_welcome_message", e),
                a = "The team usually responds in under two hours at this time of day.";
            return r.entry(function() {
                o.createInterbotConversationPart("deliver_welcome_message", a), r.botTimer = setTimeout(function() {
                    n.timeSinceBotMessage = 1, n.botWelcomeMessageDelivered = !0, t.evaluate(n)
                }, 600)
            }), r.exit(function() {
                clearTimeout(r.botTimer), n.skipMessage = !1
            }), r
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var i = n(246),
        o = function(e, t, n, o) {
            var r = new i.State("deliver_bot_email_request", e),
                a = "Can I get your email to send you their reply?";
            return r.entry(function() {
                n.skipMessage || o.createInterbotConversationPart("deliver_bot_email_request", a), o.enterEmailCollectorView()
            }), r.exit(function() {
                n.skipMessage = !1
            }), r
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var i = n(246),
        o = function(e, t, n, o) {
            var r = "No problem. The team will reply here as soon as they can. You can also close this conversation and check back later.",
                a = new i.State("user_email_not_received", e);
            return a.entry(function() {
                setTimeout(function() {
                    n.skipMessage || o.createInterbotConversationPart("user_email_not_received", r)
                }, 1e3)
            }), a.exit(function() {
                n.skipMessage = !1
            }), a
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var i = n(246),
        o = function(e, t, n, o) {
            var r = "Thanks! The team will email you and reply right here.",
                a = new i.State("user_email_received", e);
            return a.entry(function() {
                setTimeout(function() {
                    n.skipMessage || o.createInterbotConversationPart("user_email_received", r)
                }, 1e3)
            }), a.exit(function() {
                n.skipMessage = !1
            }), a
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(59),
        r = n(5),
        a = function(e, t, n) {
            this.conversation = e, this.user = t, this.composerView = n, this.skipMessage = !1, this.setHasAdminComment(), this.setComposerIsEmpty(), this.setUserHasEmail(), this.skipMessage = !this.isInitialState(), this.message = "", this.userCancelledEmailCollection = !1, this.setupListeners()
        };
    i.extend(a.prototype, r.Events, {
        userHasEmail: null,
        composerIsEmpty: null,
        userCancelledEmailCollection: null,
        hasAdminComment: null,
        setupListeners: function() {
            this.listenTo(this.conversation, "change:conversation_parts", this.setHasAdminComment), this.listenTo(this.composerView, "userIsTyping", this.setComposerIsEmpty), this.listenTo(this.composerView, "submit", this.setComposerIsEmpty)
        },
        setHasAdminComment: function() {
            this.hasAdminComment = this.conversation.hasAdminComment(), this.hasAdminComment && this.triggerStateUpdate()
        },
        setComposerIsEmpty: function() {
            this.composerIsEmpty = this.composerView.isEmpty()
        },
        setUserHasEmail: function() {
            this.userHasEmail = this.user.hasEmail(), this.triggerStateUpdate()
        },
        setUserCancelledEmailCollection: function() {
            this.userCancelledEmailCollection = !0, this.triggerStateUpdate()
        },
        shouldStartInterbot: function() {
            return this._notIe8() && this._notUserRole() && !this.userHasEmail
        },
        isInitialState: function() {
            return "user_message_received" === this.conversation.get("interbot_state") || !this.conversation.get("interbot_state")
        },
        showEmailCollector: function() {
            return this.lastConversationPartByInterbot() && "deliver_bot_email_request" === this.conversation.get("interbot_state")
        },
        lastConversationPartByInterbot: function() {
            var e = this.conversation.getLastComment();
            return this._started() && e.byInterbot()
        },
        triggerStateUpdate: function() {
            this.trigger("interbot-context:state-update")
        },
        _notIe8: function() {
            return !o.features.ie8()
        },
        _notUserRole: function() {
            return "user_role" !== this.user.getRole()
        },
        _started: function() {
            var e = this.conversation.get("interbot_state");
            return i.isString(e) && "user_message_received" !== e
        }
    }), e.exports = a
}, function(e, t, n) {
    "use strict";
    var i = n(54),
        o = n(76),
        r = n(62),
        a = {
            email: "interbot@intercom.io",
            first_name: "Interbot",
            is_admin: !0,
            is_bot: !0,
            name: "Interbot",
            type: "Admin"
        },
        s = function(e, t, n, o) {
            var r = {
                author: a,
                body: "<p>" + e + "</p>",
                conversation_id: t,
                type: "interbot_comment",
                current_state: o,
                state_group: n,
                reply_type: "interbot_comment"
            };
            return new i(r)
        },
        c = function(e) {
            this.conversationModel = e
        };
    c.prototype.createInterbotConversationPart = function(e, t) {
        var n = s(t, this.conversationModel.id, "email_collector", e);
        n.set("created_at", r.now()), n.set("updated_at", r.now()), this.conversationModel.set("last_participating_admin", a), this.conversationModel.markAsUnread(), this.conversationModel.addPart(n), n.save()
    }, c.prototype.enterEmailCollectorView = function() {
        this.conversationModel.trigger("conversation:email-collector", !0), o.increment("interbotEmailCollectorLeadWasAskedForEmail")
    }, e.exports = c
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(4),
        r = n(78),
        a = n(189),
        s = n(256),
        c = n(152),
        l = n(76);
    e.exports = a.extend({
        template: c.load("conversations"),
        id: "intercom-conversations",
        className: "intercom-conversations intercom-sheet",
        events: o.extend(a.prototype.events, {
            "click .intercom-conversations-new-conversation-button": "onNewConversationClicked"
        }),
        initialize: function(e) {
            a.prototype.initialize.apply(this, arguments), this.client = e.client, this.listenTo(this.collection, "add change", this.renderConversations)
        },
        render: function() {
            var e = this.settings.get("app.inbound-messaging-enabled");
            return this.$el.html(this.template({
                appName: this.settings.get("app.name"),
                inboundMessagingEnabled: e
            })).toggleClass("intercom-new-message-enabled", e), this.renderConversations(), this.$(".intercom-sheet-content").on("scroll", o.bind(this.onScroll, this)), this
        },
        renderConversations: function() {
            var e = document.createDocumentFragment();
            this.collection.each(function(t) {
                i(e).prepend(new s({
                    model: t
                }).render().el)
            }, this), this.$(".intercom-conversations-items").html(e), this.$el.toggleClass("intercom-conversations-empty", this.collection.isEmpty()), this.$el.toggleClass("intercom-conversations-fetched", this.collection.isFetched()), this.shouldFetchNextPage() && this.fetchNextPage()
        },
        fetchNextPage: function() {
            this.$el.hasClass("intercom-conversations-fetching") || this.$el.hasClass("intercom-conversations-fetched") || (this.$el.addClass("intercom-conversations-fetching"), this.collection.fetchNextPage().then(o.bind(function() {
                this.$el.removeClass("intercom-conversations-fetching")
            }, this)))
        },
        shouldFetchNextPage: function() {
            return 1 === this.collection.pages && !this.collection.isFetched()
        },
        onNewConversationClicked: function(e) {
            e.preventDefault(), e.stopPropagation(), r.trigger("click:new-conversation"), l.increment("newConversationButtonClicked")
        },
        onScroll: o.throttle(function() {
            this.getScrollPosition() < 50 && this.fetchNextPage()
        }, 200)
    })
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        o = n(78),
        r = n(200),
        a = n(76),
        s = n(257),
        c = n(152),
        l = n(193);
    e.exports = i.View.extend({
        template: c.load("conversation-item"),
        className: "intercom-conversations-item",
        events: {
            click: "onClicked"
        },
        initialize: function() {
            this.listenTo(this.model, "change", this.render), this.listenTo(this.model.parts, "add", this.render)
        },
        getPreview: function() {
            return s.isMetadataPreview(this.model.preview()) ? s.preview(this.model.preview()) : l.maybeSubstituteWithSpans(this.model.previewText(), "intercom-emoji-sub-icon")
        },
        render: function() {
            return this.$el.html(this.template({
                conversation: this.model,
                preview: this.getPreview()
            })).toggleClass("intercom-conversations-item-unread", this.isUnread()), this.$(".intercom-conversations-item-summary").toggleClass("intercom-conversations-item-summary-metadata", s.isMetadataPreview(this.model.preview())), this.$(".intercom-conversations-item-timestamp").append((new r).render(this.model.updatedAt()).el), this
        },
        isUnread: function() {
            return this.model.isUnread() && !this.model.hasOnlyInterbotAdminComments()
        },
        onClicked: function(e) {
            e.preventDefault(), o.trigger("click:conversation", this.model), a.increment("conversationInInboxClicked")
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return "" !== e.text().replace(/^\s+|\s+$/g, "")
    }

    function o(e) {
        return 0 !== e.find("img").length
    }

    function r(e) {
        return 0 !== e.find('iframe[src*="vimeo.com"],iframe[src*="wistia.net"],iframe[src*="youtube.com"]').length
    }

    function a(e) {
        return 0 !== e.find(".intercom-interblocks-content-card").length
    }
    var s = n(3),
        c = n(10);
    e.exports = {
        isMetadataPreview: function(e) {
            if (!c.isLocaleEnglish()) return !1;
            var t = s("<p/>", {
                html: e
            });
            return a(t) || !i(t) && (o(t) || r(t))
        },
        preview: function(e) {
            if (!c.isLocaleEnglish()) return e;
            var t = s("<p/>", {
                html: e
            });
            return a(t) ? "(article attached)" : i(t) ? e : o(t) ? "(image attached)" : r(t) ? "(video attached)" : ""
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(189),
        o = n(152);
    e.exports = i.extend({
        template: o.load("loading"),
        id: "intercom-loading",
        minimizable: !1,
        className: "intercom-sheet intercom-sheet-loading",
        initialize: function() {
            i.prototype.initialize.apply(this, arguments)
        },
        render: function() {
            return this.$el.html(this.template({
                appName: this.settings.get("app.name")
            })), this
        },
        didHide: function() {
            this.$(".intercom-sheet-spinner").hide()
        },
        willShow: function() {
            this.$(".intercom-sheet-spinner").show()
        }
    })
}, function(e, t, n) {
    "use strict";
    n(260);
    var i = n(3),
        o = n(4),
        r = n(6),
        a = n(5),
        s = n(9),
        c = n(59),
        l = n(77),
        u = n(76),
        m = n(78),
        d = n(257),
        p = n(79),
        h = n(152),
        f = n(193),
        g = n(150),
        v = n(261),
        b = n(265),
        y = n(266),
        w = n(267),
        x = n(49);
    e.exports = a.View.extend({
        hoverCardFirstLoad: !0,
        template: h.load("launcher"),
        closedPreviewsKey: "closed-preview-keys",
        id: "intercom-launcher",
        className: "intercom-launcher intercom-launcher-active",
        events: {
            click: "onClicked",
            mouseenter: "onMouseOver",
            mouseleave: "onMouseOut",
            "click .intercom-launcher-preview-close": "onCloseClicked",
            "click .intercom-launcher-hovercard-close": "onHoverCardClosed",
            "click .intercom-launcher-video-topbar-close-icon": "onHoverCardClosed"
        },
        videoAdmin: null,
        initialize: function(e) {
            this.timeout = null, this.settings = e.settings, this.listenTo(this.collection, "add change", this.update), this.listenTo(this.collection, "add", this.onConversationAdded), this.listenTo(this.collection, "change", this.onConversationChanged), this.render = o.once(this.render), this.anonymousOnDesktop = this.settings.get("user.anonymous") && !c.features.touchScreen(), this.client = e.client
        },
        render: function() {
            return this.$el.html(this.template), this.insertHoverCard(), this.insertVideoHovercard(), this.isEnabled() && this.enable(), this
        },
        insertHoverCard: function() {
            this.createHoverCard(), this.appHovercardView && this.$el.append(this.appHovercardView.render().el)
        },
        createHoverCard: function() {
            this.appHovercardView || this.settings.get("user.anonymous") && !this.isMobileUser() && (this.appHovercardView = new v(this.settings))
        },
        insertVideoHovercard: function() {
            var e = this;
            x.isEnabled("video-hovercard") && this.client.gfdtadminVideoData().then(function(t) {
                e.videoAdmin = t.admin, e.createVideoHovercard(t.admin, t.video_config), e.videoHovercardView && e.$el.append(e.videoHovercardView.render().el)
            })
        },
        createVideoHovercard: function(e, t) {
            this.videoHovercardView || this.settings.get("user.anonymous") && !this.isMobileUser() && (this.videoHovercardView = new w(this.settings, e, t))
        },
        show: function() {
            this.$el.addClass("intercom-launcher-active").removeClass("intercom-launcher-maximized").removeClass("intercom-launcher-minimized").removeClass("intercom-launcher-inactive"), this.model || this.removeAvatar()
        },
        hide: function() {
            this.$el.addClass("intercom-launcher-inactive").removeClass("intercom-launcher-maximized").removeClass("intercom-launcher-active")
        },
        minimize: function() {
            this.$el.addClass("intercom-launcher-minimized").removeClass("intercom-launcher-maximized"), this.minimizedConversation = void 0, this.updatedSinceMinimize = !1
        },
        isMinimized: function() {
            return this.$el.hasClass("intercom-launcher-maximized")
        },
        maximize: function(e) {
            if (this.minimizedConversation = e, this.updatedSinceMinimize = !1, this.$el.addClass("intercom-launcher-maximized").removeClass("intercom-launcher-minimized").removeClass("intercom-launcher-with-preview").removeClass("intercom-launcher-with-avatar").removeClass("intercom-launcher-with-initials"), this.removeAvatar(), void 0 !== e) {
                var t = e.lastAdminAvatar(!1),
                    n = e.lastAdminInitials();
                this.setAvatar(t, n)
            }
        },
        enable: function() {
            this.$el.addClass("intercom-launcher-enabled"), s.info("views/launcher - Launcher enabled")
        },
        disable: function() {
            this.$el.removeClass("intercom-launcher-enabled"), s.info("views/launcher - Launcher disabled")
        },
        update: function() {
            void 0 !== this.minimizedConversation && (this.updatedSinceMinimize = !0), this.model = this.collection.newUnread().last(), o.isUndefined(this.model) ? (this.$el.removeClass("intercom-launcher-with-message").removeClass("intercom-launcher-with-avatar").removeClass("intercom-launcher-with-initials").removeClass("intercom-launcher-with-badge").removeClass("intercom-launcher-with-preview"), this.removeAvatar()) : (this.$el.addClass("intercom-launcher-with-message"), this.updateAvatar(), this.updateBadge(), this.updatePreview(), this.appHovercardView && this.hideHoverCard(), this.videoHovercardView && this.hideHoverCard())
        },
        onConversationAdded: function(e, t, n) {
            o.isUndefined(e) || o.isUndefined(n) || n.add !== !0 || e.isRead() || (this.settings.update({
                user: {
                    has_conversations: !0
                }
            }), p.triggerNotification(e))
        },
        onConversationChanged: function(e) {
            o.isUndefined(e) || e.isRead() || e.changed.read !== !1 && o.isUndefined(e.changed.parts_count) || p.triggerNotification(e)
        },
        updateAvatar: function() {
            var e = this.model.lastAdminAvatar(!0),
                t = this.model.lastAdminInitials();
            this.$el.addClass("intercom-launcher-with-updated-avatar"), this.setAvatar(e, t)
        },
        setAvatar: function(e, t) {
            void 0 === e ? (this.$el.addClass("intercom-launcher-with-initials"), this.$(".intercom-launcher-button").show().removeAttr("style").find(".intercom-launcher-initials").text(t)) : (this.$el.addClass("intercom-launcher-with-avatar"), this.$(".intercom-launcher-button").show().removeAttr("style").css({
                "background-image": 'url("' + e + '")'
            }))
        },
        removeAvatar: function() {
            this.$el.removeClass("intercom-launcher-with-avatar").removeClass("intercom-launcher-with-updated-avatar").removeClass("intercom-launcher-with-initials"), this.$(".intercom-launcher-button").removeAttr("style")
        },
        updatePreview: function() {
            var e = this.model.parts.byAdmin().last();
            void 0 !== e && this.shouldShowPreview(e) ? this.$el.hasClass("intercom-launcher-with-preview") ? this.hidePreviewForUpdate(e) : this.showPreview(e.body(), e.id) : this.hidePreview()
        },
        updateBadge: function() {
            var e = this.collection.unread().size();
            this.$el.toggleClass("intercom-launcher-with-badge", e > 0), this.$(".intercom-launcher-badge").text(e)
        },
        isEnabled: function() {
            return this.settings.get("launcher.enabled")
        },
        shouldSupressPreview: function() {
            return this.model && !this.model.matchesCurrentUrl() && !this.model.hasUserComment()
        },
        showPreview: function(e, t) {
            if (!this.isPreviewClosed(t) && !this.shouldSupressPreview()) {
                var n = this.$el.addClass("intercom-launcher-with-preview").find(".intercom-launcher-preview-body").toggleClass("intercom-launcher-preview-metadata", d.isMetadataPreview(e)).html(f.maybeSubstituteWithSpans(d.preview(e), "intercom-emoji-sub-icon"));
                this.anonymousOnDesktop && "app-message" === t || o.defer(o.bind(n.previewify, n)), o.defer(o.bind(function() {
                    var e = this.$el.find(".intercom-launcher-preview");
                    e.toggleClass("intercom-launcher-preview-multi-line", e.outerHeight() > this.$el.outerHeight())
                }, this)), this.previewKey = t
            }
        },
        showWelcome: function(e) {
            if (!this.isMobileUser())
                if (this.appHovercardView || this.videoHovercardView) {
                    if (!this.firstPingThisSession()) return void(this.hoverCardFirstLoad = !1);
                    setTimeout(o.bind(this.showHoverCard, this), 500), l.sessionStorage.set("welcome.animated", "true")
                } else this.firstPingOrAnonymousOnDesktop() && !this.isPreviewClosed("app-message") ? (this.showPreview(e, "app-message"), b.first(this), y.show(this, this.anonymousOnDesktop), l.sessionStorage.set("welcome.animated", "true")) : b.subsequent(this)
        },
        playWelcomeNotification: function() {
            p.triggerWelcomeNotification(this.settings.get("app.name"))
        },
        firstPingThisSession: function() {
            return "true" !== l.sessionStorage.get("welcome.animated")
        },
        firstPingOrAnonymousOnDesktop: function() {
            return this.firstPingThisSession() || this.anonymousOnDesktop
        },
        hidePreview: function() {
            this.$el.removeClass("intercom-launcher-with-preview intercom-launcher-with-admins"), this.$(".intercom-launcher-preview").removeAttr("style")
        },
        hidePreviewForUpdate: function(e) {
            this.$(".intercom-launcher-preview").removeAttr("style").addClass("intercom-launcher-update-preview"), o.delay(o.bind(function() {
                this.hidePreview(), this.$(".intercom-launcher-preview").removeClass("intercom-launcher-update-preview"), this.showPreview(e.body(), e.id)
            }, this), 1500)
        },
        closePreview: function() {
            this.previewKey && (this.addClosedPreviewKey(this.previewKey), this.hidePreview(), "app-message" === this.previewKey ? g.trackSignedOutEvent("uniqueVisitorDismissedWelcomeMessage") : g.trackSignedOutEvent("uniqueVisitorDismissedChatNotification"))
        },
        shouldShowPreview: function(e) {
            return !this.isPreviewClosed(e.id) && (this.model.isChat() || this.model.hasComments())
        },
        isPreviewClosed: function(e) {
            var t = this.getClosedPreviewKeys();
            return o.contains(t, e)
        },
        isMobileUser: function() {
            return c.features.touchScreen()
        },
        getClosedPreviewKeys: function() {
            return r.parse(l.sessionStorage.get(this.closedPreviewsKey) || "[]")
        },
        addClosedPreviewKey: function(e) {
            var t = this.getClosedPreviewKeys();
            o.contains(t, e) || t.push(e), l.sessionStorage.set(this.closedPreviewsKey, r.stringify(t))
        },
        incrementLauncherClickMetrics: function() {
            o.isUndefined(this.minimizedConversation) ? o.isUndefined(this.model) ? u.increment("launcherClicked") : u.increment("chatheadClicked") : u.increment("maximizeClicked")
        },
        onClicked: function(e) {
            if (!i(e.target).is("a")) {
                e.preventDefault();
                var t;
                t = void 0 === this.minimizedConversation || this.updatedSinceMinimize ? this.model : this.minimizedConversation, this.appHovercardView && this.appHovercardView.isVisible() && !t && !c.features.ie() ? this.appHovercardView.transitionToNewMessage() : this.videoHovercardView && this.videoHovercardView.isVisible() && !t && !c.features.ie() ? this.videoHovercardView.transitionToNewMessage() : m.trigger("click:open", t), this.incrementLauncherClickMetrics(), this.addClosedPreviewKey(this.previewKey), this.hidePreview(), this.trackClickMetrics()
            }
        },
        showHoverCard: function() {
            x.isEnabled("video-hovercard") ? this.hoverCardFirstLoad ? this.videoHovercardView.show() : (this.videoHovercardView.show(), this.videoHovercardView.play()) : (this.hoverCardFirstLoad ? this.appHovercardView.showCloseButton() : this.appHovercardView.hideCloseButton(), this.appHovercardView.show())
        },
        hideHoverCard: function() {
            x.isEnabled("video-hovercard") ? (this.videoHovercardView.hide(), this.videoHovercardView.pause()) : this.appHovercardView.hide(), this.hoverCardFirstLoad = !1
        },
        onMouseOver: function() {
            !this.hasHoverCard() || this.model || this.isMinimized() || (clearTimeout(this.timeout), this.timeout = setTimeout(o.bind(this.showHoverCard, this), 150))
        },
        hasHoverCard: function() {
            return this.appHovercardView || this.videoHovercardView
        },
        onMouseOut: function(e) {
            if (!this.hoverCardFirstLoad && (this.appHovercardView || this.videoHovercardView)) {
                var t = 1 === i(e.fromElement).closest(".intercom-launcher-hovercard").length && 0 === i(e.toElement).closest(".intercom-launcher-hovercard").length,
                    n = t ? 50 : 500;
                clearTimeout(this.timeout), this.timeout = setTimeout(o.bind(this.hideHoverCard, this), n)
            }
        },
        trackClickMetrics: function() {
            this.isVisitorAutoMessage() ? g.trackSignedOutEvent("inReplyToVisitorAutoMessage.uniqueVisitorOpenedMessenger") : this.isInterbotComment() ? g.trackSignedOutEvent("leadOpenedMessengerFromInterbotMessageNotification") : g.trackSignedOutEvent("fromNewConversationView.uniqueVisitorOpenedMessenger")
        },
        isVisitorAutoMessage: function() {
            return this.model && this.model.parts.byAdmin().first() && this.model.parts.byAdmin().first().isChatAutoMessage() && this.settings.get("user.anonymous")
        },
        isInterbotComment: function() {
            return this.model && this.model.parts.last() && this.model.parts.last().byInterbot() && this.settings.get("user.anonymous")
        },
        onHoverCardClosed: function(e) {
            e.stopPropagation(), this.hideHoverCard(), u.increment("appHoverCardCloseClicked")
        },
        onCloseClicked: function(e) {
            e.stopPropagation(), this.closePreview(), u.increment("launcherPreviewClosed")
        },
        getVideoAdmin: function() {
            return this.videoAdmin
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        t = r.defaults({}, t, {
            rows: 2,
            overflow: "&hellip;"
        });
        var n = e.html(),
            i = e.height();
        e.text("a");
        var o = parseFloat(e.css("line-height"), 10),
            a = e.height(),
            s = o > a ? o - a : 0,
            c = s * (t.rows - 1) + a * t.rows;
        if (c >= i) return void e.html(n);
        for (var l = 1, u = 0, m = n.length; m > l;) u = Math.ceil((l + m) / 2), e.html(n.slice(0, u) + t.overflow), e.height() <= c ? l = u : m = u - 1;
        e.html(n.slice(0, l) + t.overflow)
    }
    var o = n(3),
        r = n(4);
    o.fn.previewify = function(e) {
        return i(this, e)
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(152),
        a = n(257),
        s = n(193),
        c = n(217),
        l = n(262),
        u = n(263);
    e.exports = o.View.extend({
        template: r.load("app-hovercard"),
        className: "intercom-launcher-hovercard",
        initialize: function(e) {
            this.timeout = null, this.settings = e
        },
        render: function() {
            return this.$el.html(this.template({
                appName: this.settings.get("app.name")
            })).hide(), this.renderAdminAvatars(), this
        },
        renderAdminAvatars: function() {
            var e = this.$(".intercom-launcher-hovercard-admins").html(""),
                t = this.settings.get("app.active-admins");
            t && t.length > 0 && i.each(t, i.bind(function(t) {
                var n = {
                    avatarUri: t.avatar.image_urls.square_128,
                    adminFirstName: t.first_name
                };
                e.append(new c(n).html())
            }, this))
        },
        show: function() {
            this.isVisible() || this.settings.get("user.has-conversations") || (this.previewAppMessage(), this.$("textarea").val(""), l.show(this.$el))
        },
        hide: function() {
            this.isVisible() && l.hide(this.$el)
        },
        showCloseButton: function() {
            var e = this.$el.find(".intercom-launcher-hovercard-close");
            e.addClass("intercom-launcher-hovercard-close-active")
        },
        hideCloseButton: function() {
            var e = this.$el.find(".intercom-launcher-hovercard-close");
            e.removeClass("intercom-launcher-hovercard-close-active")
        },
        previewAppMessage: function() {
            var e = this.$el.find(".intercom-launcher-hovercard-welcome-text");
            e.is(":empty") && (e.html(s.maybeSubstituteWithSpans(a.preview(this.settings.get("app.message")), "intercom-emoji-sub-icon")), i.defer(i.bind(function() {
                e.previewify({
                    rows: 3
                })
            }, e)))
        },
        transitionToNewMessage: function() {
            u(this.$el, this.settings.get("app.branding-enabled"))
        },
        isVisible: function() {
            return this.$el.is(":visible")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(3), n(206);
    var i = "cubic-bezier(0.1, 0.0, 0.2, 1)";
    t.show = function(e) {
        e.stop().clearQueue().removeAttr("style"), e.show().css({
            transformOrigin: "315px 100%",
            x: 0,
            y: 0
        }).transition({
            opacity: 0,
            scale: .8,
            x: 0,
            y: 0,
            duration: 0
        }), e.transition({
            scale: 1,
            x: 0,
            y: 0,
            queue: !1
        }, 250, i), e.transition({
            opacity: 1,
            duration: 170
        })
    }, t.hide = function(e) {
        e.css({
            transformOrigin: "315px 100%"
        }).transition({
            scale: .8,
            x: 0,
            y: 0,
            opacity: 0,
            complete: function() {
                e.hide()
            }
        }, 90, i)
    }
}, function(e, t, n) {
    "use strict";
    n(3), n(206);
    var i = n(78),
        o = n(264);
    e.exports = function(e, t) {
        var n = 300,
            r = e.closest("#intercom-launcher"),
            a = r.find(".intercom-launcher-button"),
            s = e.closest("#intercom-container"),
            c = s.find("#intercom-messenger"),
            l = e.find(".intercom-launcher-hovercard-textarea"),
            u = e.find(".intercom-launcher-hovercard-welcome"),
            m = t ? "+=19" : "-=3";
        i.trigger("click:new-conversation-no-animation"), o(e), r.removeClass("intercom-launcher-inactive");
        var d = s.find(".intercom-sheet-body");
        d.css({
            boxShadow: "none"
        }), u.transition({
            opacity: 0,
            marginBottom: "+=100",
            duration: 100
        }), l.transition({
            paddingBottom: m,
            duration: n
        }), c.children().transition({
            opacity: 0,
            duration: 0
        }).delay(n).transition({
            opacity: 1,
            duration: 200,
            complete: function() {
                r.removeAttr("style").addClass("intercom-launcher-inactive"), a.removeAttr("style"), c.removeAttr("style"), d.removeAttr("style"), c.children().removeAttr("style"), e.removeAttr("style").hide(), u.removeAttr("style"), l.removeAttr("style")
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    n(3), n(206), e.exports = function(e) {
        var t = 300,
            n = e.closest("#intercom-container"),
            i = n.find("#intercom-messenger"),
            o = window.innerHeight;
        i.transition({
            opacity: 0,
            duration: 0
        }).delay(t).transition({
            opacity: 1,
            duration: 0
        }), e.css({
            border: "none",
            borderLeft: "1px solid #dadee2"
        }).transition({
            width: "+=1",
            duration: 0
        }).transition({
            width: 368,
            paddingTop: o,
            borderRadius: 0,
            right: -20,
            bottom: -19,
            duration: t
        })
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e.$(".intercom-launcher-button")
    }
    n(3), n(206), t.first = function(e) {
        i(e).transition({
            scale: 0,
            delay: 1e3
        }).transition({
            scale: 1.2,
            duration: 120,
            easing: "ease-out"
        }).transition({
            scale: 1,
            duration: 30,
            easing: "ease-out"
        })
    }, t.subsequent = function(e) {
        i(e).transition({
            opacity: 0,
            scale: .8,
            delay: 1e3,
            duration: 0
        }).transition({
            opacity: 1,
            scale: 1,
            duration: 150,
            easing: "ease-out"
        })
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e.$(".intercom-launcher-preview")
    }

    function o(e) {
        return e.$(".intercom-launcher-preview-close")
    }

    function r(e) {
        i(e).transition({
            x: "10px",
            opacity: 0,
            scale: .8,
            duration: 150,
            easing: "ease-in-out"
        }, function() {
            i(e).removeAttr("style"), e.hidePreview(), o(e).show()
        })
    }
    n(3), n(206), t.show = function(e, t) {
        t || o(e).hide(), i(e).css({
            animation: "none"
        }).transition({
            opacity: 0,
            x: "10px",
            delay: 1500,
            duration: 0,
            easing: "ease-in-out"
        }, function() {
            i(e).css({
                visibility: "visible",
                opacity: 0
            })
        }).transition({
            x: "-5px",
            scale: 1.05,
            duration: 150,
            easing: "ease-in-out"
        }).transition({
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 150,
            easing: "ease-in-out"
        }, function() {
            i(e).css({
                transformOrigin: "right"
            }), t && e.playWelcomeNotification(), setTimeout(function() {
                t || r(e)
            }, 8e3)
        })
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(5),
        r = n(152),
        a = n(262),
        s = n(268),
        c = n(59),
        l = n(62);
    e.exports = o.View.extend({
        template: r.load("video-hovercard"),
        className: "intercom-launcher-hovercard-videolauncher",
        events: {
            click: "onClicked",
            mouseleave: "onMouseLeave",
            mouseenter: "onMouseEnter",
            "ended .intercom-launcher-hovercard-video": "_updateUI",
            "mouseenter .intercom-video-launcher-hovercard-textarea textarea": "textareaMouseEnter",
            "mouseleave .intercom-video-launcher-hovercard-textarea textarea": "textareaMouseLeave"
        },
        firstTimeLoad: !0,
        textAreaOpacityTimeout: null,
        isHovered: !1,
        isTextAreaHovered: !1,
        initialize: function(e, t, n) {
            this.timeout = null, this.settings = e, this.admin = t, this.videoConfig = n
        },
        render: function() {
            this.$el.html(this.template({
                admin: this.adminDisplayInfo(),
                appName: this.settings.get("app.name"),
                isClippingSupported: this.isClippingSupported(),
                video: this.videoDisplayInfo()
            })).hide();
            var e = this.video();
            return e.muted = !0, e.addEventListener("ended", i.bind(this._updateUI, this), !1), e.addEventListener("canplaythrough", i.bind(this.canPlayThrough, this), !1), this._updateUI(), this
        },
        textareaMouseEnter: function() {
            this.isTextAreaHovered = !0, this._updateUI()
        },
        textareaMouseLeave: function() {
            this.isTextAreaHovered = !1, this._updateUI()
        },
        onMouseEnter: function() {
            this.isHovered = !0, this._updateUI()
        },
        onMouseLeave: function() {
            this.isHovered = !1, this._updateUI()
        },
        onClicked: function(e) {
            var t = this.video();
            return this.isClickOnTexarea(e) ? void this.pause() : void(this.isClickOnCloseButton(e) || (e.stopPropagation(), t.loop && t.muted ? (this._setMuteState(!1), this.videoPlayFromStart(t)) : this.isPlaying(t) ? this._setMuteState(!t.muted) : this.videoPlayFromStart(t), this._updateUI()))
        },
        _setMuteState: function(e) {
            var t = this.video();
            t.muted = e, t.loop = e
        },
        _updateUI: function() {
            this._updateUIElements(this.video().muted, this.isHovered, this.isTextAreaHovered, this.isPlaying(this.video()))
        },
        _updateUIElements: function(e, t, n, i) {
            return i ? (this.$(".intercom-launcher-hovercard-video-overlay").hide(), this.$(".intercom-launcher-overlay-admin-information-container").hide(), this.$(".intercom-video-launcher-admin-upload-time").show(), this.setTextAreaVisibility(t, n), void(e ? (this.showControlsForMutedState(), this.setStatusTextAndCloseButtonVisibility(t)) : (this.showControlsForUnmutedState(), this.setStatusTextAndCloseButtonVisibility(!0)))) : (this.showControlsForVideoEndState(), this.setStatusTextAndCloseButtonVisibility(!0), this.setTextAreaVisibility(!0, !0), this.$(".intercom-video-launcher-admin-upload-time").hide(), this.$(".intercom-launcher-hovercard-video-overlay").show(), void this.$(".intercom-launcher-overlay-admin-information-container").show())
        },
        isPlaying: function(e) {
            return !e.ended
        },
        isClippingSupported: function() {
            return c.features.chrome()
        },
        adminDisplayInfo: function() {
            return {
                avatar: this.admin.avatar.image_urls.square_128,
                name: this.admin.name,
                firstName: this.admin.first_name
            }
        },
        videoDisplayInfo: function() {
            return {
                uploadTimeString: this.uploadTimeString(),
                className: this.videoClassName(),
                source: this.videoSource()
            }
        },
        uploadTimeString: function() {
            var e = new Date,
                t = l.timestampToDate(this.videoConfig.start_time),
                n = this.calculateTimeDiff(e, t),
                i = Math.ceil(n);
            return i > 6 ? "Today" : i + "h ago"
        },
        videoClassName: function() {
            return this.isClippingSupported() ? "intercom-video-launcher-hovercard-video" : "intercom-video-launcher-hovercard-video-plain"
        },
        videoSource: function() {
            return this.videoConfig.video_url
        },
        show: function() {
            this.settings.get("user.has-conversations") || this.isVisible() || (this.$("textarea").val(""), a.show(this.$el))
        },
        hide: function() {
            this.isVisible() && (this.pause(), a.hide(this.$el), this.videoPlayed && this.endVideo())
        },
        video: function() {
            return i.isUndefined(this._video) && (this._video = this.$("." + this.videoClassName())[0]), this._video
        },
        play: function() {
            var e = this.video();
            e.ended || e.play()
        },
        pause: function() {
            this.video().pause()
        },
        transitionToNewMessage: function() {
            s(this.$el, this.settings.get("app.branding-enabled"))
        },
        isVisible: function() {
            return this.$el.is(":visible")
        },
        isClickOnTexarea: function(e) {
            return this.$(e.target).is("textarea")
        },
        isClickOnCloseButton: function(e) {
            return e.target && "intercom-launcher-video-topbar-close-icon" === e.target.className
        },
        videoPlayFromStart: function(e) {
            e.loop = !1, e.currentTime = 0, e.play()
        },
        canPlayThrough: function() {
            this.firstTimeLoad && (this.show(), this.play(), this.firstTimeLoad = !1)
        },
        calculateTimeDiff: function(e, t) {
            return Math.abs(e.getTime() - t) / 36e5
        },
        showControlsForMutedState: function() {
            this.hideControls(), this.$(".intercom-launcher-video-topbar-muted-icon").show(), this.$(".intercom-launcher-video-topbar-muted-text").show()
        },
        showControlsForUnmutedState: function() {
            this.hideControls(), this.$(".intercom-launcher-video-topbar-unmuted-icon").show(), this.$(".intercom-launcher-video-topbar-unmuted-text").show()
        },
        showControlsForVideoEndState: function() {
            this.hideControls(), this.$(".intercom-launcher-video-topbar-replay-icon").show(), this.$(".intercom-launcher-video-topbar-replay-text").show()
        },
        hideControls: function() {
            this.$(".intercom-launcher-video-topbar-status-icon").hide(), this.$(".intercom-launcher-video-topbar-status-text").hide()
        },
        setStatusTextAndCloseButtonVisibility: function(e) {
            var t = e ? 1 : 0;
            this.$(".intercom-launcher-video-topbar-status-text-container").css("opacity", t), this.$(".intercom-launcher-video-topbar-close-icon").css("opacity", t)
        },
        setTextAreaVisibility: function(e, t) {
            var n = this.$(".intercom-video-launcher-hovercard-textarea"),
                i = n.find("textarea");
            e ? (n.css("bottom", "23px"), i.css("opacity", t ? 1 : .5)) : (n.css("bottom", "-32px"), i.css("opacity", 0))
        }
    })
}, function(e, t, n) {
    "use strict";
    n(3), n(206);
    var i = n(78),
        o = n(264);
    e.exports = function(e, t) {
        var n = 300,
            r = e.closest("#intercom-launcher"),
            a = r.find(".intercom-launcher-button"),
            s = e.closest("#intercom-container"),
            c = s.find("#intercom-messenger"),
            l = e.find(".intercom-video-launcher-hovercard-textarea textarea"),
            u = e.find(".intercom-video-launcher-video-area"),
            m = e.find(".intercom-launcher-overlay-admin-information-container img"),
            d = s.find(".intercom-sheet-body"),
            p = window.innerHeight,
            h = t ? "+=16" : "-=3",
            f = p - 225;
        i.trigger("click:new-conversation-no-animation"), o(e), r.removeClass("intercom-launcher-inactive"), d.css({
            boxShadow: "none"
        }), l.transition({
            width: "339px",
            marginBottom: h,
            duration: 300
        }), u.transition({
            x: "150px",
            y: "100px",
            scale: 0,
            opacity: 0,
            duration: n
        }), m.transition({
            x: "143px",
            y: "-" + f + "px",
            duration: n
        }), e.css({
            backgroundColor: "#F7F8FA"
        }), c.children().transition({
            opacity: 0,
            duration: 0
        }).delay(n).transition({
            opacity: 1,
            duration: 200,
            complete: function() {
                r.removeAttr("style").addClass("intercom-launcher-inactive"), a.removeAttr("style"), c.removeAttr("style"), d.removeAttr("style"), c.children().removeAttr("style"), e.removeAttr("style").hide(), l.css("width", ""), l.css("marginBottom", ""), u.removeAttr("style"), m.removeAttr("style")
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(9),
        r = n(68),
        a = n(151),
        s = 18e5,
        c = 3,
        l = function(e, t) {
            this.failures = 0, this.options = i.defaults({}, t, {
                interval: s,
                maxFailures: c
            }), this.client = e, this.running = !1, this.pollImmediatelyWhenNextActive = !1, r.onActive(i.bind(this.onActive, this))
        };
    l.prototype = {
        start: function() {
            return this.running ? void o.info("poller - Already running") : (this.enqueue(), this.running = !0, void o.info("poller - Polling started"))
        },
        stop: function() {
            return this.running ? (this.running = !1, void o.info("poller - Polling stopped")) : void o.info("poller - Not running")
        },
        update: function() {
            return this.running ? this.isActive() ? (a.invalidateLatencyData(), o.info("poller - Polling"), void this.client.createOrUpdateUser().fail(i.bind(function() {
                this.failures++
            }, this)).always(i.bind(function() {
                this.failures >= this.options.maxFailures ? o.info("poller - Max failures exceeded, stopping") : this.enqueue()
            }, this))) : (o.info("poller - User not active, will poll when next active"), void(this.pollImmediatelyWhenNextActive = !0)) : void o.info("poller - Not running")
        },
        enqueue: function() {
            setTimeout(i.bind(this.update, this), this.options.interval)
        },
        isActive: function() {
            return r.isActive()
        },
        onActive: function() {
            this.pollImmediatelyWhenNextActive && (o.info("poller - User is newly active, polling"), this.pollImmediatelyWhenNextActive = !1, this.update())
        }
    }, e.exports = l
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        this.options = o.defaults({}, t, {
            limit: c,
            delay: u
        }), this.client = e, this.updating = !1, this.queued = !1, this.count = 0
    }
    var o = n(4),
        r = n(9),
        a = n(62),
        s = n(49),
        c = 10,
        l = 100,
        u = 18e5,
        m = 3e4;
    i.prototype = {
        createOrUpdateUser: function() {
            return this.updating ? (r.info("throttler - An update is in progress"), void(this.queued = !0)) : (this.client.createOrUpdateUser().then(o.bind(function() {
                this.queued && o.defer(o.bind(this.createOrUpdateUser, this)), this.updatedAt = a.now(), this.count++, this.queued = this.updating = this.delayed = !1
            }, this)), void(this.updating = !0))
        },
        throttledCreateOrUpdateUser: function() {
            var e = this.getDelay();
            return 0 === e ? this.createOrUpdateUser() : (r.info("throttler - Update delayed for " + e + "ms"), void(this.delayed || (o.delay(o.bind(this.createOrUpdateUser, this), e), this.delayed = !0)))
        },
        getDelay: function() {
            var e = this.options.delay;
            return s.isEnabled("spa-throttling") && (e = m), this.isThrottled() ? o.max([this.updatedAt - a.now() + e, 0]) : 0
        },
        isThrottled: function() {
            var e = this.options.limit;
            return s.isEnabled("spa-throttling") && (e = l), this.count >= e
        },
        reset: function() {
            this.count = 0
        }
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var i = n(76),
        o = n(4);
    e.exports = {
        runAll: function() {
            var e = [
                    ["mixpanel", "mp"],
                    ["olark", "ol"],
                    ["$zopim", "zpm"],
                    ["KM", "km"],
                    ["_cio", "cus"],
                    ["analytics", "sg"]
                ],
                t = "#?#:";
            i.increment(t + o.filter(o.map(e, function(e) {
                return e[0] in window ? e[1] : ""
            }), function(e) {
                return e.length > 0
            }).join(":"))
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        o = n(3);
    e.exports = {
        hasInstallationQueryParameter: function() {
            return window.location.search.substring(1).match(/intercom-installation/)
        },
        isLegacyInstallationMode: function(e) {
            return "object" === i(e.modules) && "object" === i(e.modules.install)
        },
        listenForInstallationStartMessage: function(e) {
            o(window).off("message.intercom-installation-start").on("message.intercom-installation-start", function(t) {
                o(window).off("message.intercom-installation-start");
                var n = t.originalEvent;
                "installation.start" === n.data && (e(), n.ports && n.ports[0] ? n.ports[0].postMessage("installation.started") : n.source.postMessage("installation.started", n.origin))
            })
        },
        showSuccessOverlay: function() {
            o("body").append(this.successOverlay())
        },
        successOverlay: function() {
            var e = o("<div />", {
                    "class": "intercom-installation-icon"
                }),
                t = o("<h1 />", {
                    "class": "intercom-installation-heading",
                    text: "Intercom is successfully installed!"
                }),
                n = o("<p />", {
                    "class": "intercom-installation-message",
                    text: "Live user data is now being synced to Intercom."
                }),
                i = o("<p />", {
                    "class": "intercom-installation-message",
                    text: "Now you can make Intercom messenger visible by starting a free trial."
                }),
                r = o("<button />", {
                    "class": "intercom-installation-button",
                    text: "Next step",
                    click: function() {
                        setTimeout(window.close, 300)
                    }
                }),
                a = o("<div />", {
                    "class": "intercom-installation-content"
                });
            a.append(e, t, n, i, r);
            var s = o("<div />", {
                    "class": "intercom-installation-arrow"
                }),
                c = o("<div />", {
                    "class": "intercom-installation-overlay"
                });
            return setTimeout(function() {
                o("#intercom-launcher").off("click"), o("#intercom-launcher").off("mouseover")
            }, 1e3), c.append(a, s)
        },
        fakePingResponse: {
            modules: {
                messages: {
                    activator: "#IntercomDefaultWidget",
                    colors: {
                        base: "#0071b2"
                    },
                    features: {
                        inbound_lead_messaging: !0
                    },
                    use_activator: !0
                }
            },
            app: {
                name: ""
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(4),
        o = n(9);
    e.exports = function(e) {
        function t(e) {
            return e = i.toArray(e), i.isEmpty(e) || i.isUndefined(n[e[0]]) ? void 0 : n[e[0]].apply(n, e.slice(1))
        }
        var n = {
            boot: function(t) {
                e.initialize(t)
            },
            shutdown: function() {
                e.deinitialize()
            },
            update: function(t) {
                e.createOrUpdateUser(t)
            },
            reattachActivator: function() {
                e.enableCustomLauncher()
            },
            show: function() {
                e.show()
            },
            showMessages: function() {
                e.showConversations()
            },
            showNewMessage: function(t) {
                e.showNewConversation(t)
            },
            showNewArticleConversation: function(t) {
                e.showNewArticleConversation(t)
            },
            hide: function() {
                e.hide()
            },
            trackEvent: function(t, n) {
                e.createEvent(t, n)
            },
            onHide: function(t) {
                e.on("hide", t)
            },
            onShow: function(t) {
                e.on("show", t)
            },
            onActivatorClick: function(t) {
                e.on("click", t)
            },
            log: function() {
                i.each(o.getLines(), function(e) {
                    console.log(e)
                })
            }
        };
        if (n.reattach_activator = n.reattachActivator, n.trackUserEvent = n.trackEvent, window.Intercom && window.Intercom.q)
            for (;;) {
                var r = window.Intercom.q.shift();
                if (i.isUndefined(r)) break;
                t(r)
            }
        return window.Intercom = function() {
            return t(arguments)
        }, window.Intercom.public_api = n, window.Intercom
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t = window.$;
        null !== t && void 0 !== t && void 0 !== t.pjax && (t(document).on("pjax:click", ".intercom-container a", function(e) {
            e.preventDefault()
        }), t(document).on("pjax:success", function() {
            e.createOrUpdateUser()
        }))
    }
}, function(e, t, n) {
    "use strict";
    var i = n(3);
    e.exports = function(e) {
        i(document).on("page:change", function() {
            e.add()
        })
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        this.base = e, this.pingBase = t, this.settings = n
    }
    var o = n(4),
        r = n(6),
        a = n(9),
        s = n(277),
        c = n(62),
        l = n(76),
        u = n(282),
        m = n(49),
        d = n(5).Events;
    o.extend(i.prototype, d, {
        createOrUpdateUser: function(e) {
            a.info("clients/intercom - createOrUpdateUser");
            var t, n = this._buildPingRequest(e);
            return t = m.isEnabled("v3_email_attribute") ? this.settings.get("is-anonymous-install") ? "/ping" : "/vjs/users/ping" : this.settings.get("user.anonymous") === !0 ? "/ping" : "/vjs/users/ping", this._post(t, n, this.pingBase).pipe(o.bind(this._handlePingResponse, this)).promise()
        },
        getConversation: function(e) {
            return a.info("clients/intercom - getConversation - id:" + e), this._post("/widget_api/conversations/" + e + "/fetch", this._buildRequest()).promise()
        },
        getArticleConversation: function(e) {
            return a.info("clients/intercom - getArticleConversation - articleId:" + e), this._post("/widget_api/articles/fetch_conversation", this._buildRequest({
                article_id: e
            })).promise()
        },
        getConversations: function(e) {
            return e = o.defaults(e || {}, {
                page: 1,
                per_page: 10,
                referer: this._getReferer()
            }), a.info("clients/intercom - getConversations"), this._post("/widget_api/conversations", this._buildRequest(e)).promise()
        },
        getConversationsAndFilterByIds: function(e) {
            return a.info("clients/intercom - getConversationsAndFilterByIds - ids:" + e), this.getConversations().then(function(t) {
                return o.filter(t.conversations, function(t) {
                    return o.contains(e, t.id)
                })
            }).promise()
        },
        markConversationAsRead: function(e) {
            return a.info("clients/intercom - updateConversation - id:" + e.id), this._post("/widget_api/conversations/" + e.id + "/read", this._buildRequest(o.omit(e, "id"))).promise()
        },
        createComment: function(e) {
            var t = this;
            return a.info("clients/intercom - createComment"), o.extend(e, {
                referer: this._getReferer()
            }), this._post("/widget_api/conversations/" + e.conversation_id + "/reply", this._buildRequest(e)).pipe(function(n, i, o) {
                if (!o || 204 !== o.status) {
                    var r, a = n.conversation_parts.conversation_parts;
                    return r = t._extractPartWithMatchingUUID(a, e.client_assigned_uuid), r || (r = t._lastPartWithNoUUID(a)), r.conversation_id = n.id, r
                }
            }).promise()
        },
        _extractPartWithMatchingUUID: function(e, t) {
            return o(e).filter(function(e) {
                return e.client_assigned_uuid === t
            })[0]
        },
        _lastPartWithNoUUID: function(e) {
            return o(e.reverse()).filter(function(e) {
                return o.isNull(e.client_assigned_uuid) || o.isUndefined(e.client_assigned_uuid)
            })[0]
        },
        createConversation: function(e) {
            return a.info("clients/intercom - createConversation"), o.extend(e, {
                referer: this._getReferer()
            }), this._post("/widget_api/messages", this._buildRequest(e)).promise()
        },
        matchMessage: function(e) {
            var t = this._buildRequest({
                predicates: r.stringify(e.predicates)
            });
            this._post("/widget_api/messages/" + e.id + "/match", t).then(o.bind(function(e) {
                o.isEmpty(e) || this.trigger("new-unread-conversation", e)
            }, this))
        },
        createUpload: function(e) {
            return a.info("clients/intercom - createUpload"), this._post("/vjs/uploads", this._buildRequest({
                upload: r.stringify(e),
                user_id: this.settings.get("user.intercom-id")
            })).promise()
        },
        updateUpload: function(e) {
            a.info("clients/intercom - updateUpload");
            var t = e.id;
            return this._post("/vjs/uploads/" + t, this._buildRequest({
                upload: r.stringify(e),
                _method: "put"
            })).promise()
        },
        createEvent: function(e, t) {
            a.info("clients/intercom - createEvent");
            var n = this.settings.get("user.anonymous") ? "/ping/events" : "/vjs/users/events";
            return this._post(n, this._buildRequest({
                event_list: r.stringify({
                    data: [{
                        event_name: e,
                        created: Math.round(c.now() / 1e3),
                        metadata: t
                    }]
                })
            })).promise()
        },
        gfdtadminVideoData: function() {
            var e = "/widget_api/acquire_video_response";
            return this._post(e, this._buildRequest({
                app_id: this.settings.get("app.id")
            })).promise()
        },
        conditionsSatisfied: function(e, t) {
            return a.info("clients/intercom - conditionsSatisfied"), this._post("/widget_api/conversations/" + e + "/conditions_satisfied", this._buildRequest({
                condition_id: t
            }))
        },
        _handlePingResponse: function(e) {
            if ("string" == typeof e) throw a.error("Unable to process String ping responses"), new Error("Intercom was unable to initialise.");
            return this.trigger("ping", e), this.settings.get("app.messaging-disabled") ? e : (this._getUnreadConversations(e.unread_conversation_ids), e)
        },
        _buildRequest: function(e) {
            return e = o.extend(e || {}, this._attributesForRequest()), e.user_data = r.stringify(e.user_data), e
        },
        _getUnreadConversations: function(e) {
            if (!o.isEmpty(e)) {
                var t = o.invoke(e, "toString");
                this.getConversationsAndFilterByIds(t).then(o.bind(function(e) {
                    o.each(e, o.bind(this.trigger, this, "new-unread-conversation"))
                }, this))
            }
        },
        _buildPingRequest: function() {
            var e = this._attributesForRequest();
            return o.extend(e.user_data, {
                increments: this.settings.getAndClear("increments")
            }, this.settings.getCustomAttributes()), e.referer = this._getReferer(), e.user_data = r.stringify(e.user_data), e.metrics = r.stringify(l.getMetrics()), l.resetMetrics(), e
        },
        _attributesForRequest: function() {
            return {
                app_id: this.settings.get("app.id"),
                anonymous_session: this.settings.get("user.anonymous-session"),
                user_data: {
                    email: this.settings.get("user.email"),
                    user_id: this.settings.get("user.id"),
                    user_hash: this.settings.get("user.hash"),
                    anonymous_id: this.settings.get("user.anonymous-id"),
                    anonymous_email: this.settings.get("user.anonymous-email")
                }
            }
        },
        _getReferer: function() {
            return window.location.href
        },
        _post: function(e, t, n) {
            return t[u.keyName] = u.randomKey(), s.post((n || this.base) + e, t)
        }
    }), e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return o.features.xdr() && a.parse(e).protocol === document.location.protocol
    }
    var o = n(59),
        r = n(9),
        a = n(192),
        s = n(278),
        c = n(280),
        l = n(281),
        u = {
            xhr2: s,
            xdr: c,
            jsonp: l
        };
    u.post = function(e, t, n, a) {
        return o.features.xhr2() ? (r.info("http - POST (xhr2) " + e), this.xhr2(e, "POST", t, n, a)) : i(e) ? (r.info("http - POST (xdr) " + e), this.xdr(e, t, n, a)) : (r.info("http - POST (jsonp) " + e), this.jsonp(e, t, n))
    }, e.exports = u
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(279);
    e.exports = function(e, t, n, r, a) {
        return i.ajax({
            xhrFields: {
                withCredentials: !0
            },
            xhr: o.createXHR,
            dataType: "json",
            type: t,
            url: e,
            data: n,
            success: r,
            error: a
        })
    }
}, function(e, t) {
    "use strict";

    function n() {
        return "function" == typeof window.xdomain && "object" === r(window.xhook) && void 0 !== r(window.xhook.XMLHttpRequest)
    }

    function i() {
        try {
            var e = n() ? window.xhook.XMLHttpRequest : window.XMLHttpRequest;
            return new e
        } catch (t) {}
    }

    function o() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    };
    e.exports = {
        createXHR: function() {
            return void 0 !== window.ActiveXObject ? i() || o() : i()
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if ("string" == typeof e)
            if (e.match(/^\s*$/)) e = {};
            else try {
                e = a.parse(e)
            } catch (t) {
                s.error("Parsing failed:'" + e + "'")
            }
            return e
    }
    var o = n(3),
        r = n(4),
        a = n(6),
        s = n(9);
    e.exports = function(e, t, n, a) {
        var s = new XDomainRequest,
            c = o.Deferred();
        return s.timeout = 1e4, s.open("POST", e), s.ontimeout = function() {}, s.onprogress = function() {}, s.onload = function() {
            var e = s.response || s.responseText,
                t = i(e);
            r.isFunction(n) && n(t, s.status), c.resolve(t)
        }, s.onerror = function() {
            var e = s.response || s.responseText,
                t = i(e);
            r.isFunction(a) && a(t), c.rejectWith(t)
        }, t.utf8 = "âœ“", setTimeout(function() {
            s.send(o.param(t))
        }, 0), c
    }
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        o = n(62);
    e.exports = function(e, t, n) {
        return i.ajax({
            type: "GET",
            url: e,
            data: t,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "intercom_jsonp_" + o.now(),
            success: n
        })
    }
}, function(e, t) {
    "use strict";
    t.randomKey = function() {
        return Math.floor(4294967295 * Math.random()).toString(16)
    }, t.keyName = "Idempotency-Key"
}, function(e, t, n) {
    "use strict";

    function i(e) {
        this.settings = e, this.listeners = [], this.isInitialised = !1
    }
    var o = n(4),
        r = n(9),
        a = n(284),
        s = n(151);
    i.prototype.initialise = function() {
        try {
            var e = this.settings.get("app.rtm-settings");
            if (o.isUndefined(e) || o.isUndefined(e.endpoints)) return void this._shutdown();
            if (this.isInitialised && 0 === o(this.nexusClient.getEndpoints()).difference(e.endpoints).length) return;
            !this.isInitialised && o.isUndefined(this.nexusClient) || this._shutdown(), r.info("Starting Nexus client"), this.nexusClient = this._createNexusClient(e.endpoints, r), this.isInitialised = !0, this._addListeners(), this.addListener("NewComment", s.onNewComment)
        } catch (t) {
            r.error("initialise Error: " + t), this.isInitialised = !1
        }
    }, i.prototype.postEvent = function(e, t) {
        if (this.isInitialised) try {
            this.nexusClient.sendEvent(e, t)
        } catch (n) {
            r.error("postEvent Error: " + n)
        }
    }, i.prototype.addListener = function(e, t) {
        this.isInitialised ? this.nexusClient.addListener(e, t) : this.listeners.push({
            eventName: e,
            eventHandler: t
        })
    }, i.prototype.syncCreateConversation = function(e) {
        return this.postEvent("CreateConversation", e.id), e
    }, i.prototype.syncCreateComment = function(e) {
        return this.postEvent("NewComment", e.conversation_id), e
    }, i.prototype.onConversationSeen = function(e) {
        this.postEvent("ConversationSeen", {
            conversationId: e
        })
    }, i.prototype.onConversationReceived = function(e) {
        try {
            var t = s.popLatencyDataForConversation(e),
                n = o.extend(t, {
                    conversationId: e
                });
            this.postEvent("ConversationReceived", n)
        } catch (i) {
            r.error("onConversationReceived Error: " + i)
        }
    }, i.prototype.onUserPresent = function() {
        if (this.isInitialised) try {
            this.nexusClient.setUserPresent()
        } catch (e) {
            r.error("onUserPresent Error: " + e)
        }
    }, i.prototype.onUserAbsent = function() {
        if (this.isInitialised) try {
            this.nexusClient.setUserAbsent()
        } catch (e) {
            r.error("onUserAbsent Error: " + e)
        }
    }, i.prototype.getMetrics = function() {
        return this.isInitialised ? this.nexusClient.getMetrics() : void 0
    }, i.prototype.resetMetrics = function() {
        this.isInitialised && this.nexusClient.resetMetrics()
    }, i.prototype._createNexusClient = function(e, t) {
        return new a(e, t)
    }, i.prototype._addListeners = function() {
        return this.isInitialised ? void o.each(this.listeners, function(e) {
            this.nexusClient.addListener(e.eventName, e.eventHandler)
        }, this) : void r.error("_addListeners must not be called until isInitialised is set")
    }, i.prototype._shutdown = function() {
        o.isUndefined(this.nexusClient) || (r.info("Shutting down Nexus client - configuration removed from ping response"), this.nexusClient.shutdown()), this.isInitialised = !1
    }, e.exports = i
}, function(e, t, n) {
    function i(e, t) {
        this._endpoints = e, this._logger = t, this._seenMessages = {}, this._userIsPresent = !1, this._sendPresenceImmediatelyWhenPresent = !0, this._userPresenceFrequencySecs = 60, this.connections = this._createConnections(), this._startPingTest(), this._startConnectionKeepAlive()
    }
    var o = n(285),
        r = n(4),
        a = 12e5,
        s = "0.0.68";
    i.prototype.addListener = function(e, t) {
        r.each(this.connections, function(n) {
            n.addListener(e, t)
        })
    }, i.prototype.setListener = function(e, t) {
        this.addListener(e, t)
    }, i.prototype.sendEvent = function(e, t) {
        this._publish({
            eventName: e,
            eventData: t
        })
    }, i.prototype.sendUserEvent = function(e, t, n) {
        this._publish({
            "nx.ToUser": e,
            eventName: t,
            eventData: n
        })
    }, i.prototype.newMessage = function(e) {
        this.sendEvent("NewMessage", e)
    }, i.prototype.newComment = function(e) {
        this.sendEvent("NewComment", e)
    }, i.prototype.getMetrics = function() {
        return void 0 !== this._lastResetMetrics && (new Date).getTime() - this._lastResetMetrics > a ? void 0 : {
            version: s,
            endpoints: r.map(this.connections, function(e) {
                return e.getMetrics()
            })
        }
    }, i.prototype.resetMetrics = function() {
        r.each(this.connections, function(e) {
            e.resetMetrics()
        }), this._lastResetMetrics = (new Date).getTime()
    }, i.prototype.getEndpoints = function() {
        return this._endpoints
    }, i.prototype.setUserPresent = function() {
        this._userIsPresent || (this._userIsPresent = !0, this._sendPresenceImmediatelyWhenPresent && (this._sendPresenceImmediatelyWhenPresent = !1, this._userPresence(), this._startUserPresence()))
    }, i.prototype.setUserAbsent = function() {
        this._userIsPresent = !1
    }, i.prototype.shutdown = function() {
        this._stopUserPresence(), r.each(this.connections, function(e) {
            e.shutdown()
        })
    }, i.prototype.unsubscribe = function() {
        this.shutdown()
    }, i.prototype._publish = function(e) {
        var t = this._generateGuid();
        e.eventGuid = t, r.each(this.connections, function(t) {
            t.publish(e)
        })
    }, i.prototype._userPresence = function() {
        this._userIsPresent ? this._sendUserPresenceEvent() : (this._sendPresenceImmediatelyWhenPresent = !0, this._stopUserPresence())
    }, i.prototype._sendUserPresenceEvent = function() {
        this.sendEvent("nx.UserPresence", {
            current_page: this._getCurrentPage()
        })
    }, i.prototype._startUserPresence = function() {
        this.userPresenceInterval = setInterval(r.bind(this._userPresence, this), 1e3 * this._userPresenceFrequencySecs)
    }, i.prototype._stopUserPresence = function() {
        this.userPresenceInterval && (this.userPresenceInterval = clearInterval(this.userPresenceInterval))
    }, i.prototype._createConnections = function() {
        return r.map(this._endpoints, function(e) {
            return new o(e, s, this._seenMessages, r.bind(this._sendUserPresenceEvent, this), this._logger)
        }, this)
    }, i.prototype._startPingTest = function() {
        r.each(this.connections, function(e) {
            e.startPingTest()
        })
    }, i.prototype._startConnectionKeepAlive = function() {
        r.each(this.connections, function(e) {
            e.startConnectionKeepAlive()
        })
    }, i.prototype._generateGuid = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0,
                n = "x" === e ? t : 3 & t | 8;
            return n.toString(16)
        })
    }, i.prototype._getCurrentPage = function() {
        return window.location.href
    }, e.exports = i
}, function(e, t, n) {
    (function(t) {
        function i(e, t, n, i, o) {
            this._endpoint = e, this._transport = this._getTransport(), this._logger = o, this._clientVersion = t, this._onFirstConnect = i, this._allowReconnect = !0, this._listeners = {}, this._seenMessages = n, this._connectionAttempts = 0, this._lastMessageSentAt = this._now(), this.websocket = {
                hadConnection: !1
            }, this["long-polling"] = {
                hadConnection: !1
            }, this.jsonp = {
                hadConnection: !1
            }, this.resetMetrics(), this._subscribe()
        }
        var o = n(286),
            r = n(4),
            a = "/client-test",
            s = 33e4;
        i.prototype.addListener = function(e, t) {
            void 0 === this._listeners[e] ? this._listeners[e] = [t] : this._listeners[e].push(t)
        }, i.prototype.resetMetrics = function() {
            var e = {
                    connections: 0,
                    connectionDuration: 0,
                    reconnections: 0,
                    backoffDuration: 0
                },
                t = {
                    endpoint: this._endpoint,
                    messagesReceived: 0,
                    uniqueMessagesReceived: 0,
                    errors: 0,
                    messagesPublished: 0,
                    timeouts: 0,
                    transportFailures: 0,
                    attempts: 0,
                    successes: 0,
                    failures: 0,
                    totalTransitTime: 0,
                    healthcheckFailures: 0,
                    transports: {
                        websocket: r.clone(e),
                        "long-polling": r.clone(e),
                        jsonp: r.clone(e)
                    }
                };
            this.metrics = r.clone(t)
        }, i.prototype.getMetrics = function() {
            return this._sliceTimingMetrics(), this.metrics
        }, i.prototype.publish = function(e) {
            this._hasSubscription() && (this._seenMessages[e.eventGuid] = !0, this._subscription.push(t.stringify(e)), this._lastMessageSentAt = this._now())
        }, i.prototype.startPingTest = function() {
            this.addListener("ACK", r.bind(this._handlePingResponse, this)), this._pingTestInterval = setInterval(r.bind(function() {
                this._ping()
            }, this), 3e5)
        }, i.prototype.stopPingTest = function() {
            void 0 !== this._pingTestInterval && clearInterval(this._pingTestInterval)
        }, i.prototype.startConnectionKeepAlive = function() {
            this._keepAliveInterval = setInterval(r.bind(function() {
                this._keepAlive()
            }, this), 3e5)
        }, i.prototype.stopKeepAlive = function() {
            void 0 !== this._keepAliveInterval && clearInterval(this._keepAliveInterval)
        }, i.prototype.shutdown = function() {
            this._allowReconnect = !1, this.stopPingTest(), this.stopKeepAlive(), this._subscription.close()
        }, i.prototype._subscribe = function() {
            if (window.XDomainRequest) return this._logger.info("Not running Nexus client test on IE8/9"), this._createSubscription(), void this._setConnectionStart();
            var e = this._healthcheckEndpoint(),
                t = new XMLHttpRequest;
            t.onreadystatechange = r.bind(function() {
                4 === t.readyState && 200 === t.status ? (this._createSubscription(), this._setConnectionStart()) : 4 === t.readyState && 200 !== t.status && (this.metrics.healthcheckFailures++, this._connectionAttempts++, this._logger.info("Endpoint " + e + " unavailable, scheduling resubscribe"), this._scheduleReconnect("healthcheck-failure"))
            }, this), t.open("GET", e, !0), t.timeout = 2e3, t.send(null)
        }, i.prototype._createSubscription = function() {
            var e = this._endpoint,
                t = this._transport; - 1 !== e.indexOf("router") ? "long-polling" === t || "jsonp" === t ? (e = e.replace(/nexus-router-a-\d+/, "nexus-long-poller-a"), e = e.replace(/nexus-router-b-\d+/, "nexus-long-poller-b")) : (e = e.replace(/nexus-router-a-\d+/, "nexus-websocket-a"), e = e.replace(/nexus-router-b-\d+/, "nexus-websocket-b")) : "long-polling" !== t && "jsonp" !== t || (e = e.replace(/websocket/, "long-poller"));
            var n = {
                    websocket: {
                        connectTimeout: 2e4
                    },
                    "long-polling": {
                        connectTimeout: -1,
                        enableXDR: !0,
                        withCredentials: !0
                    },
                    jsonp: {
                        connectTimeout: -1,
                        enableXDR: !0,
                        withCredentials: !0
                    }
                },
                i = {
                    url: e,
                    shared: !1,
                    transport: t,
                    fallbackTransport: "none",
                    maxReconnectOnClose: 0,
                    reconnectOnServerError: !1,
                    closeAsync: !0,
                    timeout: 13e4,
                    onOpen: r.bind(this._onOpen, this),
                    onClose: r.bind(this._onClose, this),
                    onMessage: r.bind(this._onMessage, this),
                    onError: r.bind(this._onError, this),
                    onMessagePublished: r.bind(this._onMessagePublished, this),
                    onClientTimeout: r.bind(this._onClientTimeout, this),
                    onTransportFailure: r.bind(this._onTransportFailure, this),
                    environment: "production",
                    headers: {
                        "X-Nexus-Version": this._clientVersion
                    }
                };
            r.extend(i, n[t]), this._logger.info("Connecting to Nexus at " + e + " via " + t), this._subscription = o.subscribe(i)
        }, i.prototype._onOpen = function(e) {
            this[e.transport].hadConnection = !0, this.metrics.transports[e.transport].connections++, this._logger.info("Opened " + e.transport + " Nexus connection " + this._connectionUuidForResponse(e)), 0 === this._connectionAttempts && this._onFirstConnect()
        }, i.prototype._onClose = function(e) {
            this._logger.info("Closed " + e.transport + " Nexus connection " + this._connectionUuidForResponse(e))
        }, i.prototype._onMessage = function(e) {
            this.metrics.messagesReceived++;
            try {
                var n = t.parse(e.messages[0]),
                    i = n.eventGuid;
                if (void 0 !== this._seenMessages[i]) return;
                this._seenMessages[i] = !0, this.metrics.uniqueMessagesReceived++, this._callListeners(n.eventName, n)
            } catch (o) {
                this.metrics.errors++, this._logger.error(o)
            }
        }, i.prototype._onError = function(e) {
            var t = this._connectionUuidForResponse(e);
            "maxReconnectOnClose reached" === e.reasonPhrase && "jsonp" === this._transport && this[this._transport].hadConnection && 0 === e.status ? this._reconnect(t) : ("maxReconnectOnClose reached" === e.reasonPhrase || "Unable to reconnect with fallback transport" === e.reasonPhrase || e.status >= 500 && e.status < 600) && this._retry(t), this._logger.info("Error for Nexus connection " + t + ": " + e.status + " - " + e.reasonPhrase), this.metrics.errors++
        }, i.prototype._onMessagePublished = function(e) {
            this.metrics.messagesPublished++
        }, i.prototype._onClientTimeout = function(e) {
            this._logger.info("Client timeout for Nexus connection " + e.uuid), this._retry(e.uuid), this.metrics.timeouts++
        }, i.prototype._onTransportFailure = function(e, t) {
            this._logger.info("Client timeout for Nexus connection " + t.uuid + ": " + e), this.metrics.transportFailures++
        }, i.prototype._retry = function(e) {
            return this._recordConnectionEnd(), "websocket" !== this._transport || this[this._transport].hadConnection ? (this[this._transport].hadConnection = !1, this._transport = this._getTransport(), this._connectionAttempts++, void this._scheduleReconnect(e)) : (this._transport = this._getFallbackTransport(), void this._reconnect(e))
        }, i.prototype._scheduleReconnect = function(e) {
            var t = this._calculateBackoff();
            this._logger.info("On retry number " + this._connectionAttempts + " for endpoint " + this._endpoint + " - backing off for " + t + "ms"), this._setBackoffStart(), r.delay(r.bind(function() {
                this._recordBackoffEnd(), this._reconnect(e)
            }, this), t)
        }, i.prototype._reconnect = function(e) {
            this._allowReconnect && ("healthcheck-failure" === e ? this._subscribe() : this._subscriptionReconnect(e))
        }, i.prototype._subscriptionReconnect = function(e) {
            e === this._subscription.getUUID() ? (this._subscription.close(), this._subscribe()) : this._logger.info("Not reconnecting to Nexus: asked to reconnect for " + e + ' (probably due to a "close" request failure) but current connection is ' + this._subscription.getUUID())
        }, i.prototype._setConnectionStart = function() {
            this[this._transport].lastConnectionAt = this._now()
        }, i.prototype._setBackoffStart = function() {
            this[this._transport].lastBackoffAt = this._now()
        }, i.prototype._recordConnectionEnd = function() {
            var e = this._transport;
            this.metrics.transports[e].connectionDuration += this._now() - this[e].lastConnectionAt, this[e].lastConnectionAt = void 0
        }, i.prototype._recordBackoffEnd = function() {
            var e = this._transport;
            this.metrics.transports[e].reconnections++, this.metrics.transports[e].backoffDuration += this._now() - this[e].lastBackoffAt, this[e].lastBackoffAt = void 0
        }, i.prototype._sliceTimingMetrics = function() {
            var e = this._transport;
            void 0 !== this[e].lastConnectionAt ? (this.metrics.transports[e].connectionDuration += this._now() - this[e].lastConnectionAt, this._setConnectionStart()) : void 0 !== this[e].lastBackoffAt && (this.metrics.transports[e].backoffDuration += this._now() - this[e].lastBackoffAt, this._setBackoffStart())
        }, i.prototype._handlePingResponse = function(e) {
            if (!r.isNumber(this._inFlightPing) || this._inFlightPing !== e.ACK.sendTime) return this._logger.info("Received unexpected ACK - something else is pinging for this user's channel - disabling pinging"), void clearInterval(this._pingTestInterval);
            var t = this._now() - e.ACK.sendTime;
            this.metrics.successes++, this.metrics.totalTransitTime += t, this._connectionAttempts > 0 && this._connectionAttempts--, delete this._inFlightPing
        }, i.prototype._keepAlive = function() {
            if (this._hasSubscription() && this._now() - this._lastMessageSentAt > s) {
                var e = this._now(),
                    t = {
                        eventName: "nx.KeepAlive",
                        eventGuid: e,
                        eventData: {
                            sendTime: e
                        }
                    };
                this.publish(t)
            }
        }, i.prototype._ping = function() {
            if (this._hasSubscription()) {
                r.isNumber(this._inFlightPing) && this.metrics.failures++;
                var e = this._now();
                this._inFlightPing = e;
                var t = {
                    eventName: "nx.Ping",
                    eventGuid: e,
                    eventData: {
                        sendTime: e,
                        endpoint: this._endpoint
                    }
                };
                this.metrics.attempts++, this.publish(t)
            }
        }, i.prototype._callListeners = function(e, t) {
            r.each(this._listeners[e], r.bind(function(e) {
                e(t)
            }, this))
        }, i.prototype._connectionUuidForResponse = function(e) {
            return r.isObject(e.request) ? e.request.uuid : this._subscription.getUUID()
        }, i.prototype._calculateBackoff = function() {
            var e = Math.min(10, this._connectionAttempts + 4),
                t = Math.pow(2, e),
                n = t * Math.random(),
                i = t + n;
            return 1e3 * i
        }, i.prototype._getTransport = function() {
            return this._supportsWebSocket() ? "websocket" : this._getFallbackTransport()
        }, i.prototype._getFallbackTransport = function() {
            return window.XDomainRequest && document.location.protocol !== this._parsedEndpoint().protocol ? "jsonp" : "long-polling"
        }, i.prototype._supportsWebSocket = function() {
            return window.WebSocket || window.MozWebSocket
        }, i.prototype._healthcheckEndpoint = function() {
            var e = this._parsedEndpoint();
            return e.protocol + "//" + e.host + a
        }, i.prototype._parsedEndpoint = function() {
            var e = document.createElement("a");
            return e.href = this._endpoint, {
                host: e.host,
                hostname: e.hostname,
                pathname: e.pathname,
                port: e.port,
                protocol: e.protocol,
                search: e.search,
                hash: e.hash
            }
        }, i.prototype._hasSubscription = function() {
            return void 0 !== this._subscription
        }, i.prototype._now = function() {
            return (new Date).getTime()
        }, e.exports = i
    }).call(t, n(6))
}, function(e, t, n) {
    var i, o;
    ! function(n, r) {
        "use strict";
        i = [], o = function() {
            return r()
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }(this, function() {
        "use strict";
        var e, t = "2.2.6-javascript",
            n = {},
            i = !1,
            o = [],
            r = [],
            a = 0,
            s = "production",
            c = Object.prototype.hasOwnProperty;
        return n = {
                onError: function(e) {},
                onClose: function(e) {},
                onOpen: function(e) {},
                onReopen: function(e) {},
                onMessage: function(e) {},
                onReconnect: function(e, t) {},
                onMessagePublished: function(e) {},
                onTransportFailure: function(e, t) {},
                onLocalMessage: function(e) {},
                onFailureToReconnect: function(e, t) {},
                onClientTimeout: function(e) {},
                onOpenAfterResume: function(e) {},
                WebsocketApiAdapter: function(e) {
                    var t, i;
                    return e.onMessage = function(e) {
                        i.onmessage({
                            data: e.responseBody
                        })
                    }, e.onMessagePublished = function(e) {
                        i.onmessage({
                            data: e.responseBody
                        })
                    }, e.onOpen = function(e) {
                        i.onopen(e)
                    }, i = {
                        close: function() {
                            t.close()
                        },
                        send: function(e) {
                            t.push(e)
                        },
                        onmessage: function(e) {},
                        onopen: function(e) {},
                        onclose: function(e) {},
                        onerror: function(e) {}
                    }, t = new n.subscribe(e), i
                },
                AtmosphereRequest: function(e) {
                    function o() {
                        we = !0, Ce = !1, xe = 0, fe = null, ge = null, ve = null, be = null
                    }

                    function c() {
                        p(), o()
                    }

                    function l(e) {
                        return "debug" == e ? "debug" === pe.logLevel : "info" == e ? "info" === pe.logLevel || "debug" === pe.logLevel : "warn" == e ? "warn" === pe.logLevel || "info" === pe.logLevel || "debug" === pe.logLevel : "error" == e ? "error" === pe.logLevel || "warn" === pe.logLevel || "info" === pe.logLevel || "debug" === pe.logLevel : !1
                    }

                    function u(e, t) {
                        return "" === he.partialMessage && "streaming" === t.transport && e.responseText.length > t.maxStreamingLength
                    }

                    function m() {
                        if (pe.enableProtocol && !pe.firstMessage && "websocket" !== pe.transport) {
                            var e = "X-Atmosphere-Transport=close&X-Atmosphere-tracking-id=" + pe.uuid;
                            n.util.each(pe.headers, function(t, i) {
                                var o = n.util.isFunction(i) ? i.call(this, pe, pe, he) : i;
                                null != o && (e += "&" + encodeURIComponent(t) + "=" + encodeURIComponent(o))
                            });
                            var t = pe.url.replace(/([?&])_=[^&]*/, e);
                            t += t === pe.url ? (/\?/.test(pe.url) ? "&" : "?") + e : "";
                            var i = {
                                    connected: !1
                                },
                                o = new n.AtmosphereRequest(i);
                            o.attachHeadersAsQueryString = !1, o.dropHeaders = !0, o.url = t, o.contentType = "text/plain", o.transport = "polling", o.method = "GET", o.data = "", pe.enableXDR && (o.enableXDR = pe.enableXDR), o.async = pe.closeAsync, K("", o)
                        }
                    }

                    function d() {
                        l("debug") && n.util.debug("Closing"), Ce = !0, pe.reconnectId && (clearTimeout(pe.reconnectId), delete pe.reconnectId), pe.heartbeatTimer && clearTimeout(pe.heartbeatTimer), pe.reconnect = !1, he.request = pe, he.state = "unsubscribe", he.responseBody = "", he.status = 408, he.partialMessage = "", le(), m(), p()
                    }

                    function p() {
                        he.partialMessage = "", pe.id && clearTimeout(pe.id), pe.heartbeatTimer && clearTimeout(pe.heartbeatTimer), null != be && (be.close(), be = null), null != ye && (ye.abort(), ye = null), null != ve && (ve.abort(), ve = null), null != fe && (fe.close(), fe = null), null != ge && (ge.close(), ge = null), h()
                    }

                    function h() {
                        null != ue && (clearInterval(me), document.cookie = de + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/", ue.signal("close", {
                            reason: "",
                            heir: Ce ? (ue.get("children") || [])[0] : Se
                        }), ue.close()), null != Te && Te.close()
                    }

                    function f(e) {
                        c(), pe = n.util.extend(pe, e), s = pe.environment, pe.mrequest = pe.reconnect, pe.reconnect || (pe.reconnect = !0)
                    }

                    function g() {
                        return null != pe.webSocketImpl || window.WebSocket || window.MozWebSocket
                    }

                    function v() {
                        return window.EventSource
                    }

                    function b() {
                        if (pe.shared) {
                            if (Te = y(pe), null != Te && (l("debug") && n.util.debug("Storage service available. All communication will be local"), Te.open(pe))) return;
                            l("debug") && n.util.debug("No Storage service available."), Te = null
                        }
                        pe.firstMessage = 0 == a, pe.isOpen = !1, pe.ctime = n.util.now(), 0 === pe.uuid && (pe.uuid = a), he.closedByClientTimeout = !1, "websocket" !== pe.transport && "sse" !== pe.transport ? U(pe) : "websocket" === pe.transport ? g() ? S(!1) : M("Websocket is not supported, using request.fallbackTransport (" + pe.fallbackTransport + ")") : "sse" === pe.transport && (v() ? T(!1) : M("Server Side Events(SSE) is not supported, using request.fallbackTransport (" + pe.fallbackTransport + ")"))
                    }

                    function y(e) {
                        function t(e, t) {
                            var n, i = e.length;
                            for (n = 0; i > n; n++) e[n] === t && e.splice(n, 1);
                            return i !== e.length
                        }

                        function i(t) {
                            var i = n.util.parseJSON(t),
                                o = i.data;
                            if ("c" === i.target) switch (i.type) {
                                case "open":
                                    x("opening", "local", pe);
                                    break;
                                case "close":
                                    s || (s = !0, "aborted" === o.reason ? d() : o.heir === Se ? b() : setTimeout(function() {
                                        b()
                                    }, 100));
                                    break;
                                case "message":
                                    oe(o, "messageReceived", 200, e.transport);
                                    break;
                                case "localMessage":
                                    ie(o)
                            }
                        }

                        function o() {
                            var e = new RegExp("(?:^|; )(" + encodeURIComponent(c) + ")=([^;]*)").exec(document.cookie);
                            return e ? n.util.parseJSON(decodeURIComponent(e[2])) : void 0
                        }
                        var r, a, s, c = "atmosphere-" + e.url,
                            l = {
                                storage: function() {
                                    function o(e) {
                                        e.key === c && e.newValue && i(e.newValue)
                                    }
                                    if (n.util.storage) {
                                        var r = window.localStorage,
                                            a = function(e) {
                                                return n.util.parseJSON(r.getItem(c + "-" + e))
                                            },
                                            s = function(e, t) {
                                                r.setItem(c + "-" + e, n.util.stringifyJSON(t))
                                            };
                                        return {
                                            init: function() {
                                                return s("children", a("children").concat([Se])), n.util.on(window, "storage", o), a("opened")
                                            },
                                            signal: function(e, t) {
                                                r.setItem(c, n.util.stringifyJSON({
                                                    target: "p",
                                                    type: e,
                                                    data: t
                                                }))
                                            },
                                            close: function() {
                                                var i = a("children");
                                                n.util.off(window, "storage", o), i && t(i, e.id) && s("children", i)
                                            }
                                        }
                                    }
                                },
                                windowref: function() {
                                    var e = window.open("", c.replace(/\W/g, ""));
                                    if (e && !e.closed && e.callbacks) return {
                                        init: function() {
                                            return e.callbacks.push(i), e.children.push(Se), e.opened
                                        },
                                        signal: function(t, i) {
                                            !e.closed && e.fire && e.fire(n.util.stringifyJSON({
                                                target: "p",
                                                type: t,
                                                data: i
                                            }))
                                        },
                                        close: function() {
                                            s || (t(e.callbacks, i), t(e.children, Se))
                                        }
                                    }
                                }
                            };
                        return r = o(), !r || n.util.now() - r.ts > 1e3 || !(a = l.storage() || l.windowref()) ? void 0 : {
                            open: function() {
                                var t;
                                return me = setInterval(function() {
                                    var e = r;
                                    r = o(), r && e.ts !== r.ts || i(n.util.stringifyJSON({
                                        target: "c",
                                        type: "close",
                                        data: {
                                            reason: "error",
                                            heir: e.heir
                                        }
                                    }))
                                }, 1e3), t = a.init(), t && setTimeout(function() {
                                    x("opening", "local", e)
                                }, 50), t
                            },
                            send: function(e) {
                                a.signal("send", e)
                            },
                            localSend: function(e) {
                                a.signal("localSend", n.util.stringifyJSON({
                                    id: Se,
                                    event: e
                                }))
                            },
                            close: function() {
                                Ce || (clearInterval(me), a.signal("close"), a.close())
                            }
                        }
                    }

                    function w() {
                        function e(e) {
                            var t = n.util.parseJSON(e),
                                i = t.data;
                            if ("p" === t.target) switch (t.type) {
                                case "send":
                                    W(i);
                                    break;
                                case "localSend":
                                    ie(i);
                                    break;
                                case "close":
                                    d()
                            }
                        }

                        function t() {
                            document.cookie = de + "=" + encodeURIComponent(n.util.stringifyJSON({
                                ts: n.util.now() + 1,
                                heir: (i.get("children") || [])[0]
                            })) + "; path=/"
                        }
                        var i, o = "atmosphere-" + pe.url,
                            r = {
                                storage: function() {
                                    function t(t) {
                                        t.key === o && t.newValue && e(t.newValue)
                                    }
                                    if (n.util.storage) {
                                        var i = window.localStorage;
                                        return {
                                            init: function() {
                                                n.util.on(window, "storage", t)
                                            },
                                            signal: function(e, t) {
                                                i.setItem(o, n.util.stringifyJSON({
                                                    target: "c",
                                                    type: e,
                                                    data: t
                                                }))
                                            },
                                            get: function(e) {
                                                return n.util.parseJSON(i.getItem(o + "-" + e))
                                            },
                                            set: function(e, t) {
                                                i.setItem(o + "-" + e, n.util.stringifyJSON(t))
                                            },
                                            close: function() {
                                                n.util.off(window, "storage", t), i.removeItem(o), i.removeItem(o + "-opened"), i.removeItem(o + "-children")
                                            }
                                        }
                                    }
                                },
                                windowref: function() {
                                    var t, i = o.replace(/\W/g, ""),
                                        r = document.getElementById(i);
                                    return r || (r = document.createElement("div"), r.id = i, r.style.display = "none", r.innerHTML = '<iframe name="' + i + '" />', document.body.appendChild(r)), t = r.firstChild.contentWindow, {
                                        init: function() {
                                            t.callbacks = [e], t.fire = function(e) {
                                                var n;
                                                for (n = 0; n < t.callbacks.length; n++) t.callbacks[n](e)
                                            }
                                        },
                                        signal: function(e, i) {
                                            !t.closed && t.fire && t.fire(n.util.stringifyJSON({
                                                target: "c",
                                                type: e,
                                                data: i
                                            }))
                                        },
                                        get: function(e) {
                                            return t.closed ? null : t[e]
                                        },
                                        set: function(e, n) {
                                            t.closed || (t[e] = n)
                                        },
                                        close: function() {}
                                    }
                                }
                            };
                        Ae = function(e) {
                            i.signal("message", e)
                        }, i = r.storage() || r.windowref(), i.init(), l("debug") && n.util.debug("Installed StorageService " + i), i.set("children", []), null == i.get("opened") || i.get("opened") || i.set("opened", !1), de = encodeURIComponent(o), t(), me = setInterval(t, 1e3), ue = i
                    }

                    function x(e, t, n) {
                        if (pe.shared && "local" !== t && w(), null != ue && ue.set("opened", !0), n.close = function() {
                                d()
                            }, xe > 0 && "re-connecting" === e) n.isReopen = !0, O(he);
                        else if (null == he.error) {
                            he.request = n;
                            var i = he.state;
                            he.state = e;
                            var o = he.transport;
                            he.transport = t;
                            var r = he.responseBody;
                            le(), he.responseBody = r, he.state = i, he.transport = o
                        }
                    }

                    function _(e) {
                        e.transport = "jsonp";
                        var t, i = pe;
                        null != e && "undefined" != typeof e && (i = e), ye = {
                            open: function() {
                                function o() {
                                    i.lastIndex = 0, i.openId && clearTimeout(i.openId), i.heartbeatTimer && clearTimeout(i.heartbeatTimer), i.reconnect && xe++ < i.maxReconnectOnClose ? (x("re-connecting", i.transport, i), $(ye, i, e.reconnectInterval), i.openId = setTimeout(function() {
                                        L(i)
                                    }, i.reconnectInterval + 1e3)) : N(0, "maxReconnectOnClose reached")
                                }

                                function r() {
                                    var n = i.url;
                                    null != i.dispatchUrl && (n += i.dispatchUrl);
                                    var r = i.data;
                                    i.attachHeadersAsQueryString && (n = P(i), "" !== r && (n += "&X-Atmosphere-Post-Body=" + encodeURIComponent(r)), r = "");
                                    var s = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
                                    t = document.createElement("script"), t.src = n + "&jsonpTransport=" + a, t.clean = function() {
                                        t.clean = t.onerror = t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), 2 === ++e.scriptCount && (e.scriptCount = 1, o())
                                    }, t.onload = t.onreadystatechange = function() {
                                        t.readyState && !/loaded|complete/.test(t.readyState) || t.clean()
                                    }, t.onerror = function() {
                                        e.scriptCount = 1, t.clean()
                                    }, s.insertBefore(t, s.firstChild)
                                }
                                var a = "atmosphere" + (Se = n.util.random());
                                window[a] = function(t) {
                                    if ("" !== t.message)
                                        if (e.scriptCount = 0, i.reconnect && -1 === i.maxRequest || i.requestCount++ < i.maxRequest) {
                                            if (i.executeCallbackBeforeReconnect || $(ye, i, i.pollingInterval), null != t && "string" != typeof t) try {
                                                t = t.message
                                            } catch (o) {}
                                            var r = I(t, i, he);
                                            r || oe(he.responseBody, "messageReceived", 200, i.transport), i.executeCallbackBeforeReconnect && $(ye, i, i.pollingInterval), j(i)
                                        } else n.util.log(pe.logLevel, ["JSONP reconnect maximum try reached " + pe.requestCount]), N(0, "maxRequest reached")
                                }, setTimeout(function() {
                                    r()
                                }, 50)
                            },
                            abort: function() {
                                t && t.clean && t.clean()
                            }
                        }, ye.open()
                    }

                    function k(e) {
                        return null != pe.webSocketImpl ? pe.webSocketImpl : window.WebSocket ? new WebSocket(e) : new MozWebSocket(e)
                    }

                    function C() {
                        return P(pe, n.util.getAbsoluteURL(pe.webSocketUrl || pe.url)).replace(/^http/, "ws")
                    }

                    function A() {
                        var e = P(pe);
                        return e
                    }

                    function T(e) {
                        he.transport = "sse";
                        var t = A();
                        if (l("debug") && (n.util.debug("Invoking executeSSE"), n.util.debug("Using URL: " + t)), e && !pe.reconnect) return void(null != ge && p());
                        try {
                            ge = new EventSource(t, {
                                withCredentials: pe.withCredentials
                            })
                        } catch (i) {
                            return N(0, i), void M("SSE failed. Downgrading to fallback transport and resending")
                        }
                        pe.connectTimeout > 0 && (pe.id = setTimeout(function() {
                            e || p()
                        }, pe.connectTimeout)), ge.onopen = function(t) {
                            j(pe), l("debug") && n.util.debug("SSE successfully opened"), pe.enableProtocol ? pe.isReopen && (pe.isReopen = !1, x("re-opening", pe.transport, pe)) : e ? x("re-opening", "sse", pe) : x("opening", "sse", pe), e = !0, "POST" === pe.method && (he.state = "messageReceived", ge.send(pe.data))
                        }, ge.onmessage = function(e) {
                            if (j(pe), !pe.enableXDR && e.origin && e.origin !== window.location.protocol + "//" + window.location.host) return void n.util.log(pe.logLevel, ["Origin was not " + window.location.protocol + "//" + window.location.host]);
                            he.state = "messageReceived", he.status = 200, e = e.data;
                            var t = I(e, pe, he);
                            t || (le(), he.responseBody = "", he.messages = [])
                        }, ge.onerror = function(t) {
                            clearTimeout(pe.id), pe.heartbeatTimer && clearTimeout(pe.heartbeatTimer), he.closedByClientTimeout || (ce(e), p(), Ce ? n.util.log(pe.logLevel, ["SSE closed normally"]) : e ? pe.reconnect && "sse" === he.transport && (xe++ < pe.maxReconnectOnClose ? (x("re-connecting", pe.transport, pe), pe.reconnectInterval > 0 ? pe.reconnectId = setTimeout(function() {
                                T(!0)
                            }, pe.reconnectInterval) : T(!0), he.responseBody = "", he.messages = []) : (n.util.log(pe.logLevel, ["SSE reconnect maximum try reached " + xe]), N(0, "maxReconnectOnClose reached"))) : M("SSE failed. Downgrading to fallback transport and resending"))
                        }
                    }

                    function S(e) {
                        he.transport = "websocket";
                        var t = C(pe.url);
                        if (l("debug") && (n.util.debug("Invoking executeWebSocket"), n.util.debug("Using URL: " + t)), e && !pe.reconnect) return void(null != fe && p());
                        fe = k(t), null != pe.webSocketBinaryType && (fe.binaryType = pe.webSocketBinaryType), pe.connectTimeout > 0 && (pe.id = setTimeout(function() {
                            if (e);
                            else {
                                var t = {
                                    code: 1002,
                                    reason: "",
                                    wasClean: !1
                                };
                                fe.onclose(t);
                                try {
                                    p()
                                } catch (n) {}
                            }
                        }, pe.connectTimeout)), fe.onopen = function(t) {
                            j(pe), i = !1, l("debug") && n.util.debug("Websocket successfully opened");
                            var o = e;
                            null != fe && (fe.canSendMessage = !0), pe.enableProtocol || (e = !0, o ? x("re-opening", "websocket", pe) : x("opening", "websocket", pe)), null != fe && "POST" === pe.method && (he.state = "messageReceived", fe.send(pe.data))
                        }, fe.onmessage = function(t) {
                            j(pe), pe.enableProtocol && (e = !0), he.state = "messageReceived", he.status = 200, t = t.data;
                            var n = "string" == typeof t;
                            if (n) {
                                var i = I(t, pe, he);
                                i || (le(), he.responseBody = "", he.messages = [])
                            } else {
                                if (t = E(pe, t), "" === t) return;
                                he.responseBody = t, le(), he.responseBody = null
                            }
                        }, fe.onerror = function(e) {
                            clearTimeout(pe.id), pe.heartbeatTimer && clearTimeout(pe.heartbeatTimer)
                        }, fe.onclose = function(t) {
                            if (clearTimeout(pe.id), "closed" !== he.state) {
                                var o = t.reason;
                                if ("" === o) switch (t.code) {
                                    case 1e3:
                                        o = "Normal closure; the connection successfully completed whatever purpose for which it was created.";
                                        break;
                                    case 1001:
                                        o = "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.";
                                        break;
                                    case 1002:
                                        o = "The endpoint is terminating the connection due to a protocol error.";
                                        break;
                                    case 1003:
                                        o = "The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data).";
                                        break;
                                    case 1004:
                                        o = "The endpoint is terminating the connection because a data frame was received that is too large.";
                                        break;
                                    case 1005:
                                        o = "Unknown: no status code was provided even though one was expected.";
                                        break;
                                    case 1006:
                                        o = "Connection was closed abnormally (that is, with no close frame being sent)."
                                }
                                if (l("warn") && (n.util.warn("Websocket closed, reason: " + o), n.util.warn("Websocket closed, wasClean: " + t.wasClean)), he.closedByClientTimeout || i) return void(pe.reconnectId && (clearTimeout(pe.reconnectId), delete pe.reconnectId));
                                ce(e), he.state = "closed", Ce ? n.util.log(pe.logLevel, ["Websocket closed normally"]) : e ? pe.reconnect && "websocket" === he.transport && 1001 !== t.code && (p(), xe++ < pe.maxReconnectOnClose ? (x("re-connecting", pe.transport, pe), pe.reconnectInterval > 0 ? pe.reconnectId = setTimeout(function() {
                                    he.responseBody = "", he.messages = [], S(!0)
                                }, pe.reconnectInterval) : (he.responseBody = "", he.messages = [], S(!0))) : (n.util.log(pe.logLevel, ["Websocket reconnect maximum try reached " + pe.requestCount]), l("warn") && n.util.warn("Websocket error, reason: " + t.reason), N(0, "maxReconnectOnClose reached"))) : M("Websocket failed. Downgrading to Comet and resending")
                            }
                        };
                        var o = navigator.userAgent.toLowerCase(),
                            r = o.indexOf("android") > -1;
                        r && void 0 === fe.url && fe.onclose({
                            reason: "Android 4.1 does not support websockets.",
                            wasClean: !1
                        })
                    }

                    function E(e, t) {
                        var i = t;
                        if ("polling" === e.transport) return i;
                        if (0 !== n.util.trim(t).length && e.enableProtocol && e.firstMessage) {
                            var o = e.trackMessageLength ? 1 : 0,
                                r = t.split(e.messageDelimiter);
                            if (r.length <= o + 1) return i;
                            if (e.firstMessage = !1, e.uuid = n.util.trim(r[o]), r.length <= o + 2 && n.util.log("error", ["Protocol data not sent by the server. If you enable protocol on client side, be sure to install JavascriptProtocol interceptor on server side.Also note that atmosphere-runtime 2.2+ should be used."]), _e = parseInt(n.util.trim(r[o + 1]), 10), ke = r[o + 2], "long-polling" !== e.transport && L(e), a = e.uuid, i = "", o = e.trackMessageLength ? 4 : 3, r.length > o + 1)
                                for (var s = o; s < r.length; s++) i += r[s], s + 1 !== r.length && (i += e.messageDelimiter);
                            0 !== e.ackInterval && setTimeout(function() {
                                W("...ACK...")
                            }, e.ackInterval)
                        } else e.enableProtocol && e.firstMessage && n.util.browser.msie && +n.util.browser.version.split(".")[0] < 10 ? n.util.log(pe.logLevel, ["Receiving unexpected data from IE"]) : L(e);
                        return i
                    }

                    function j(e) {
                        clearTimeout(e.id), e.timeout > 0 && "polling" !== e.transport && (e.id = setTimeout(function() {
                            z(e), m(), p()
                        }, e.timeout))
                    }

                    function z(e) {
                        he.closedByClientTimeout = !0, he.state = "closedByClient", he.responseBody = "", he.status = 408, he.messages = [], le()
                    }

                    function N(e, t) {
                        p(), clearTimeout(pe.id), he.state = "error", he.reasonPhrase = t, he.responseBody = "", he.status = e, he.messages = [], le()
                    }

                    function I(e, t, n) {
                        if (e = E(t, e), 0 === e.length) return !0;
                        if (n.responseBody = e, t.trackMessageLength) {
                            e = n.partialMessage + e;
                            var i = [],
                                o = e.indexOf(t.messageDelimiter);
                            if (-1 != o) {
                                for (; - 1 !== o;) {
                                    var r = e.substring(0, o),
                                        a = +r;
                                    if (isNaN(a)) throw new Error('message length "' + r + '" is not a number');
                                    o += t.messageDelimiter.length, o + a > e.length ? o = -1 : (i.push(e.substring(o, o + a)), e = e.substring(o + a, e.length), o = e.indexOf(t.messageDelimiter))
                                }
                                return n.partialMessage = e, 0 !== i.length ? (n.responseBody = i.join(t.messageDelimiter), n.messages = i, !1) : (n.responseBody = "", n.messages = [], !0)
                            }
                        }
                        return n.responseBody = e, n.messages = [e], !1
                    }

                    function M(e) {
                        n.util.log(pe.logLevel, [e]), "undefined" != typeof pe.onTransportFailure ? pe.onTransportFailure(e, pe) : "undefined" != typeof n.util.onTransportFailure && n.util.onTransportFailure(e, pe), pe.transport = pe.fallbackTransport;
                        var t = -1 === pe.connectTimeout ? 0 : pe.connectTimeout;
                        pe.reconnect && "none" !== pe.transport || null == pe.transport ? (pe.method = pe.fallbackMethod, he.transport = pe.fallbackTransport, pe.fallbackTransport = "none", t > 0 ? pe.reconnectId = setTimeout(function() {
                            b()
                        }, t) : b()) : N(500, "Unable to reconnect with fallback transport")
                    }

                    function P(e, i) {
                        var o = pe;
                        return null != e && "undefined" != typeof e && (o = e), null == i && (i = o.url), o.attachHeadersAsQueryString ? -1 !== i.indexOf("X-Atmosphere-Framework") ? i : (i += -1 !== i.indexOf("?") ? "&" : "?", i += "X-Atmosphere-tracking-id=" + o.uuid, i += "&X-Atmosphere-Framework=" + t, i += "&X-Atmosphere-Transport=" + o.transport, o.trackMessageLength && (i += "&X-Atmosphere-TrackMessageSize=true"), null !== o.heartbeat && null !== o.heartbeat.server && (i += "&X-Heartbeat-Server=" + o.heartbeat.server), "" !== o.contentType && (i += "&Content-Type=" + ("websocket" === o.transport ? o.contentType : encodeURIComponent(o.contentType))), o.enableProtocol && (i += "&X-atmo-protocol=true"), n.util.each(o.headers, function(t, r) {
                            var a = n.util.isFunction(r) ? r.call(this, o, e, he) : r;
                            null != a && (i += "&" + encodeURIComponent(t) + "=" + encodeURIComponent(a))
                        }), i) : i
                    }

                    function L(e) {
                        if (e.isOpen)
                            if (e.isReopen) e.isReopen = !1, x("re-opening", e.transport, e);
                            else {
                                if ("messageReceived" !== he.state || "jsonp" !== e.transport && "long-polling" !== e.transport) return;
                                q(he)
                            }
                        else e.isOpen = !0, x("opening", e.transport, e);
                        R(e)
                    }

                    function R(e) {
                        if (null != e.heartbeatTimer && clearTimeout(e.heartbeatTimer), !isNaN(_e) && _e > 0) {
                            var t = function() {
                                l("debug") && n.util.debug("Sending heartbeat"), W(ke), e.heartbeatTimer = setTimeout(t, _e)
                            };
                            e.heartbeatTimer = setTimeout(t, _e)
                        }
                    }

                    function U(e) {
                        var t = pe;
                        if (null == e && "undefined" == typeof e || (t = e), t.lastIndex = 0, t.readyState = 0, "jsonp" === t.transport || t.enableXDR && n.util.checkCORSSupport()) return void _(t);
                        if (n.util.browser.msie && +n.util.browser.version.split(".")[0] < 10) {
                            if ("streaming" === t.transport) return void(t.enableXDR && window.XDomainRequest ? B(t) : F(t));
                            if (t.enableXDR && window.XDomainRequest) return void B(t)
                        }
                        var i = function() {
                                t.lastIndex = 0, t.reconnect && xe++ < t.maxReconnectOnClose ? (he.ffTryingReconnect = !0, x("re-connecting", e.transport, e), $(r, t, e.reconnectInterval)) : N(0, "maxReconnectOnClose reached")
                            },
                            o = function() {
                                he.errorHandled = !0, p(), i()
                            };
                        if (t.force || t.reconnect && (-1 === t.maxRequest || t.requestCount++ < t.maxRequest)) {
                            t.force = !1;
                            var r = n.util.xhr();
                            r.hasData = !1, V(r, t, !0), t.suspend && (ve = r), "polling" !== t.transport && (he.transport = t.transport, r.onabort = function() {
                                ce(!0)
                            }, r.onerror = function() {
                                he.error = !0, he.ffTryingReconnect = !0;
                                try {
                                    he.status = XMLHttpRequest.status
                                } catch (e) {
                                    he.status = 500
                                }
                                he.status || (he.status = 500), he.errorHandled || (p(), i())
                            }), r.onreadystatechange = function() {
                                if (!Ce) {
                                    he.error = null;
                                    var a = !1,
                                        s = !1;
                                    if ("streaming" === t.transport && t.readyState > 2 && 4 === r.readyState) return p(), void i();
                                    if (t.readyState = r.readyState, "streaming" === t.transport && r.readyState >= 3 ? s = !0 : "long-polling" === t.transport && 4 === r.readyState && (s = !0), j(pe), "polling" !== t.transport) {
                                        var c = 200;
                                        if (4 === r.readyState && (c = r.status > 1e3 ? 0 : r.status), !t.reconnectOnServerError && c >= 300 && 600 > c) return void N(c, r.statusText);
                                        if (c >= 300 || 0 === c) return void o();
                                        t.enableProtocol && e.firstMessage || 2 !== r.readyState || (n.util.browser.mozilla && he.ffTryingReconnect ? (he.ffTryingReconnect = !1, setTimeout(function() {
                                            he.ffTryingReconnect || L(t)
                                        }, 500)) : L(t))
                                    } else 4 === r.readyState && (s = !0);
                                    if (s) {
                                        var l = r.responseText;
                                        if (he.errorHandled = !1, 0 === n.util.trim(l).length && "long-polling" === t.transport) return void(r.hasData ? r.hasData = !1 : $(r, t, t.pollingInterval));
                                        if (r.hasData = !0, re(r, pe), "streaming" === t.transport)
                                            if (n.util.browser.opera) n.util.iterate(function() {
                                                if (500 !== he.status && r.responseText.length > t.lastIndex) {
                                                    try {
                                                        he.status = r.status, he.headers = n.util.parseHeaders(r.getAllResponseHeaders()), re(r, pe)
                                                    } catch (e) {
                                                        he.status = 404
                                                    }
                                                    j(pe), he.state = "messageReceived";
                                                    var i = r.responseText.substring(t.lastIndex);
                                                    if (t.lastIndex = r.responseText.length, a = I(i, t, he), a || le(), u(r, t)) return void H(r, t)
                                                } else if (he.status > 400) return t.lastIndex = r.responseText.length, !1
                                            }, 0);
                                            else {
                                                var m = l.substring(t.lastIndex, l.length);
                                                if (a = I(m, t, he), t.lastIndex = l.length, a) return
                                            }
                                        else a = I(l, t, he);
                                        var d = u(r, t);
                                        try {
                                            he.status = r.status, he.headers = n.util.parseHeaders(r.getAllResponseHeaders()), re(r, t)
                                        } catch (h) {
                                            he.status = 404
                                        }
                                        t.suspend ? he.state = 0 === he.status ? "closed" : "messageReceived" : he.state = "messagePublished";
                                        var f = !d && "streaming" !== e.transport && "polling" !== e.transport;
                                        f && !t.executeCallbackBeforeReconnect && $(r, t, t.pollingInterval), 0 === he.responseBody.length || a || le(), f && t.executeCallbackBeforeReconnect && $(r, t, t.pollingInterval), d && H(r, t)
                                    }
                                }
                            };
                            try {
                                r.send(t.data), we = !0
                            } catch (a) {
                                n.util.log(t.logLevel, ["Unable to connect to " + t.url]), N(0, a)
                            }
                        } else "debug" === t.logLevel && n.util.log(t.logLevel, ["Max re-connection reached."]), N(0, "maxRequest reached")
                    }

                    function H(e, t) {
                        he.messages = [], t.isReopen = !0, d(), Ce = !1, $(e, t, 500)
                    }

                    function V(e, t, i) {
                        var o = t.url;
                        null != t.dispatchUrl && "POST" === t.method && (o += t.dispatchUrl), o = P(t, o), o = n.util.prepareURL(o), i && (e.open(t.method, o, t.async), t.connectTimeout > 0 && (t.id = setTimeout(function() {
                            0 === t.requestCount && (p(), oe("Connect timeout", "closed", 200, t.transport))
                        }, t.connectTimeout))), pe.withCredentials && "websocket" !== pe.transport && "withCredentials" in e && (e.withCredentials = !0), pe.dropHeaders || (e.setRequestHeader("X-Atmosphere-Framework", n.util.version), e.setRequestHeader("X-Atmosphere-Transport", t.transport), null !== t.heartbeat && null !== t.heartbeat.server && e.setRequestHeader("X-Heartbeat-Server", e.heartbeat.server), t.trackMessageLength && e.setRequestHeader("X-Atmosphere-TrackMessageSize", "true"), e.setRequestHeader("X-Atmosphere-tracking-id", t.uuid), n.util.each(t.headers, function(o, r) {
                            var a = n.util.isFunction(r) ? r.call(this, e, t, i, he) : r;
                            null != a && e.setRequestHeader(o, a)
                        })), "" !== t.contentType && e.setRequestHeader("Content-Type", t.contentType)
                    }

                    function $(e, t, n) {
                        if (!he.closedByClientTimeout && (t.reconnect || t.suspend && we)) {
                            var i = 0;
                            e && e.readyState > 1 && (i = e.status > 1e3 ? 0 : e.status), he.status = 0 === i ? 204 : i, he.reason = 0 === i ? "Server resumed the connection or down." : "OK", clearTimeout(t.id), t.reconnectId && (clearTimeout(t.reconnectId), delete t.reconnectId), n > 0 ? pe.reconnectId = setTimeout(function() {
                                U(t)
                            }, n) : U(t)
                        }
                    }

                    function O(e) {
                        e.state = "re-connecting", ae(e)
                    }

                    function q(e) {
                        e.state = "openAfterResume", ae(e), e.state = "messageReceived"
                    }

                    function B(e) {
                        "polling" !== e.transport ? (be = D(e), be.open()) : D(e).open()
                    }

                    function D(e) {
                        var t = pe;
                        null != e && "undefined" != typeof e && (t = e);
                        var i = t.transport,
                            o = 0,
                            r = new window.XDomainRequest,
                            a = function() {
                                "long-polling" === t.transport && t.reconnect && (-1 === t.maxRequest || t.requestCount++ < t.maxRequest) && (r.status = 200, B(t))
                            },
                            s = t.rewriteURL || function(e) {
                                var t = /(?:^|;\s*)(JSESSIONID|PHPSESSID)=([^;]*)/.exec(document.cookie);
                                switch (t && t[1]) {
                                    case "JSESSIONID":
                                        return e.replace(/;jsessionid=[^\?]*|(\?)|$/, ";jsessionid=" + t[2] + "$1");
                                    case "PHPSESSID":
                                        return e.replace(/\?PHPSESSID=[^&]*&?|\?|$/, "?PHPSESSID=" + t[2] + "&").replace(/&$/, "")
                                }
                                return e
                            };
                        r.onprogress = function() {
                            c(r)
                        }, r.onerror = function() {
                            "polling" !== t.transport && (p(), xe++ < t.maxReconnectOnClose ? t.reconnectInterval > 0 ? t.reconnectId = setTimeout(function() {
                                x("re-connecting", e.transport, e), B(t)
                            }, t.reconnectInterval) : (x("re-connecting", e.transport, e), B(t)) : N(0, "maxReconnectOnClose reached"))
                        }, r.onload = function() {};
                        var c = function(e) {
                            clearTimeout(t.id);
                            var r = e.responseText;
                            if (r = r.substring(o), o += r.length, "polling" !== i) {
                                j(t);
                                var s = I(r, t, he);
                                if ("long-polling" === i && 0 === n.util.trim(r).length) return;
                                t.executeCallbackBeforeReconnect && a(), s || oe(he.responseBody, "messageReceived", 200, i), t.executeCallbackBeforeReconnect || a()
                            }
                        };
                        return {
                            open: function() {
                                var e = t.url;
                                null != t.dispatchUrl && (e += t.dispatchUrl), e = P(t, e), r.open(t.method, s(e)), "GET" === t.method ? r.send() : r.send(t.data), t.connectTimeout > 0 && (t.id = setTimeout(function() {
                                    0 === t.requestCount && (p(), oe("Connect timeout", "closed", 200, t.transport))
                                }, t.connectTimeout))
                            },
                            close: function() {
                                r.abort()
                            }
                        }
                    }

                    function F(e) {
                        be = X(e), be.open()
                    }

                    function X(e) {
                        var t = pe;
                        null != e && "undefined" != typeof e && (t = e);
                        var i, o = new window.ActiveXObject("htmlfile");
                        o.open(), o.close();
                        var r = t.url;
                        return null != t.dispatchUrl && (r += t.dispatchUrl), "polling" !== t.transport && (he.transport = t.transport), {
                            open: function() {
                                var e = o.createElement("iframe");
                                r = P(t), "" !== t.data && (r += "&X-Atmosphere-Post-Body=" + encodeURIComponent(t.data)), r = n.util.prepareURL(r), e.src = r, o.body.appendChild(e);
                                var a = e.contentDocument || e.contentWindow.document;
                                i = n.util.iterate(function() {
                                    try {
                                        if (!a.firstChild) return;
                                        var e = a.body ? a.body.lastChild : a,
                                            r = function() {
                                                var t = e.cloneNode(!0);
                                                t.appendChild(a.createTextNode("."));
                                                var n = t.innerText;
                                                return n = n.substring(0, n.length - 1)
                                            };
                                        if (!a.body || !a.body.firstChild || "pre" !== a.body.firstChild.nodeName.toLowerCase()) {
                                            var s = a.head || a.getElementsByTagName("head")[0] || a.documentElement || a,
                                                c = a.createElement("script");
                                            c.text = "document.write('<plaintext>')", s.insertBefore(c, s.firstChild), s.removeChild(c), e = a.body.lastChild
                                        }
                                        return t.closed && (t.isReopen = !0), i = n.util.iterate(function() {
                                            var n = r();
                                            if (n.length > t.lastIndex) {
                                                j(pe), he.status = 200, he.error = null, e.innerText = "";
                                                var i = I(n, t, he);
                                                if (i) return "";
                                                oe(he.responseBody, "messageReceived", 200, t.transport)
                                            }
                                            return t.lastIndex = 0, "complete" === a.readyState ? (ce(!0), x("re-connecting", t.transport, t), t.reconnectInterval > 0 ? t.reconnectId = setTimeout(function() {
                                                F(t)
                                            }, t.reconnectInterval) : F(t), !1) : void 0
                                        }, null), !1
                                    } catch (l) {
                                        return he.error = !0, x("re-connecting", t.transport, t), xe++ < t.maxReconnectOnClose ? t.reconnectInterval > 0 ? t.reconnectId = setTimeout(function() {
                                            F(t)
                                        }, t.reconnectInterval) : F(t) : N(0, "maxReconnectOnClose reached"), o.execCommand("Stop"), o.close(), !1
                                    }
                                })
                            },
                            close: function() {
                                i && i(), o.execCommand("Stop"), ce(!0)
                            }
                        }
                    }

                    function W(e) {
                        null != Te ? J(e) : null != ve || null != ge ? Z(e) : null != be ? Q(e) : null != ye ? Y(e) : null != fe ? ne(e) : (N(0, "No suspended connection available"), n.util.error("No suspended connection available. Make sure atmosphere.subscribe has been called and request.onOpen invoked before invoking this method"))
                    }

                    function K(e, t) {
                        t || (t = te(e)), t.transport = "polling", t.method = "GET", t.withCredentials = !1, t.reconnect = !1, t.force = !0, t.suspend = !1, t.timeout = 1e3, U(t)
                    }

                    function J(e) {
                        Te.send(e)
                    }

                    function G(e) {
                        if (0 !== e.length) try {
                            Te ? Te.localSend(e) : ue && ue.signal("localMessage", n.util.stringifyJSON({
                                id: Se,
                                event: e
                            }))
                        } catch (t) {
                            n.util.error(t)
                        }
                    }

                    function Z(e) {
                        var t = te(e);
                        U(t)
                    }

                    function Q(e) {
                        if (pe.enableXDR && n.util.checkCORSSupport()) {
                            var t = te(e);
                            t.reconnect = !1, _(t)
                        } else Z(e)
                    }

                    function Y(e) {
                        var t = te(e);
                        t.reconnect = !1, _(t)
                    }

                    function ee(e) {
                        var t = e;
                        return "object" == typeof t && (t = e.data), t
                    }

                    function te(e) {
                        var t = ee(e),
                            i = {
                                connected: !1,
                                timeout: 6e4,
                                method: "POST",
                                url: pe.url,
                                contentType: pe.contentType,
                                headers: pe.headers,
                                reconnect: !0,
                                callback: null,
                                data: t,
                                suspend: !1,
                                maxRequest: -1,
                                logLevel: "info",
                                requestCount: 0,
                                withCredentials: pe.withCredentials,
                                async: pe.async,
                                transport: "polling",
                                isOpen: !0,
                                attachHeadersAsQueryString: !0,
                                enableXDR: pe.enableXDR,
                                uuid: pe.uuid,
                                dispatchUrl: pe.dispatchUrl,
                                enableProtocol: !1,
                                messageDelimiter: "|",
                                trackMessageLength: pe.trackMessageLength,
                                maxReconnectOnClose: pe.maxReconnectOnClose,
                                heartbeatTimer: pe.heartbeatTimer,
                                heartbeat: pe.heartbeat
                            };
                        return "object" == typeof e && (i = n.util.extend(i, e)), i
                    }

                    function ne(e) {
                        var t, i = n.util.isBinary(e) ? e : ee(e);
                        try {
                            if (t = null != pe.dispatchUrl ? pe.webSocketPathDelimiter + pe.dispatchUrl + pe.webSocketPathDelimiter + i : i, !fe.canSendMessage) return void n.util.error("WebSocket not connected.");
                            fe.send(t)
                        } catch (o) {
                            fe.onclose = function(e) {}, p(), M("Websocket failed. Downgrading to Comet and resending " + e), Z(e)
                        }
                    }

                    function ie(e) {
                        var t = n.util.parseJSON(e);
                        t.id !== Se && ("undefined" != typeof pe.onLocalMessage ? pe.onLocalMessage(t.event) : "undefined" != typeof n.util.onLocalMessage && n.util.onLocalMessage(t.event))
                    }

                    function oe(e, t, n, i) {
                        he.responseBody = e, he.transport = i, he.status = n, he.state = t, le()
                    }

                    function re(e, t) {
                        if (t.readResponsesHeaders) try {
                            var n = e.getResponseHeader("X-Atmosphere-tracking-id");
                            n && null != n && (t.uuid = n.split(" ").pop())
                        } catch (i) {} else t.enableProtocol || (t.uuid = Se)
                    }

                    function ae(e) {
                        se(e, pe), se(e, n.util)
                    }

                    function se(e, t) {
                        switch (e.state) {
                            case "messageReceived":
                                xe = 0, "undefined" != typeof t.onMessage && t.onMessage(e), "undefined" != typeof t.onmessage && t.onmessage(e);
                                break;
                            case "error":
                                "undefined" != typeof t.onError && t.onError(e), "undefined" != typeof t.onerror && t.onerror(e);
                                break;
                            case "opening":
                                delete pe.closed, "undefined" != typeof t.onOpen && t.onOpen(e), "undefined" != typeof t.onopen && t.onopen(e);
                                break;
                            case "messagePublished":
                                "undefined" != typeof t.onMessagePublished && t.onMessagePublished(e);
                                break;
                            case "re-connecting":
                                "undefined" != typeof t.onReconnect && t.onReconnect(pe, e);
                                break;
                            case "closedByClient":
                                "undefined" != typeof t.onClientTimeout && t.onClientTimeout(pe);
                                break;
                            case "re-opening":
                                delete pe.closed, "undefined" != typeof t.onReopen && t.onReopen(pe, e);
                                break;
                            case "fail-to-reconnect":
                                "undefined" != typeof t.onFailureToReconnect && t.onFailureToReconnect(pe, e);
                                break;
                            case "unsubscribe":
                            case "closed":
                                var n = "undefined" != typeof pe.closed ? pe.closed : !1;
                                n || ("undefined" != typeof t.onClose && t.onClose(e), "undefined" != typeof t.onclose && t.onclose(e)), pe.closed = !0;
                                break;
                            case "openAfterResume":
                                "undefined" != typeof t.onOpenAfterResume && t.onOpenAfterResume(pe)
                        }
                    }

                    function ce(e) {
                        "closed" !== he.state && (he.state = "closed", he.responseBody = "", he.messages = [], he.status = e ? 200 : 501, le())
                    }

                    function le() {
                        var e = function(e, t) {
                            t(he)
                        };
                        null == Te && null != Ae && Ae(he.responseBody), pe.reconnect = pe.mrequest;
                        for (var t = "string" == typeof he.responseBody, i = t && pe.trackMessageLength ? he.messages.length > 0 ? he.messages : [""] : new Array(he.responseBody), o = 0; o < i.length; o++)
                            if (!(i.length > 1 && 0 === i[o].length || (he.responseBody = t ? n.util.trim(i[o]) : i[o], null == Te && null != Ae && Ae(he.responseBody), (0 === he.responseBody.length || t && ke === he.responseBody) && "messageReceived" === he.state))) {
                                if (ae(he), r.length > 0) {
                                    l("debug") && n.util.debug("Invoking " + r.length + " global callbacks: " + he.state);
                                    try {
                                        n.util.each(r, e)
                                    } catch (a) {
                                        n.util.log(pe.logLevel, ["Callback exception" + a])
                                    }
                                }
                                if ("function" == typeof pe.callback) {
                                    l("debug") && n.util.debug("Invoking request callbacks");
                                    try {
                                        pe.callback(he)
                                    } catch (a) {
                                        n.util.log(pe.logLevel, ["Callback exception" + a])
                                    }
                                }
                            }
                    }
                    var ue, me, de, pe = {
                            timeout: 3e5,
                            method: "GET",
                            headers: {},
                            contentType: "",
                            callback: null,
                            url: "",
                            data: "",
                            suspend: !0,
                            maxRequest: -1,
                            reconnect: !0,
                            maxStreamingLength: 1e7,
                            lastIndex: 0,
                            logLevel: "info",
                            requestCount: 0,
                            fallbackMethod: "GET",
                            fallbackTransport: "streaming",
                            transport: "long-polling",
                            webSocketImpl: null,
                            webSocketBinaryType: null,
                            dispatchUrl: null,
                            webSocketPathDelimiter: "@@",
                            enableXDR: !1,
                            rewriteURL: !1,
                            attachHeadersAsQueryString: !0,
                            executeCallbackBeforeReconnect: !1,
                            readyState: 0,
                            withCredentials: !1,
                            trackMessageLength: !1,
                            messageDelimiter: "|",
                            connectTimeout: -1,
                            reconnectInterval: 0,
                            dropHeaders: !0,
                            uuid: 0,
                            async: !0,
                            shared: !1,
                            readResponsesHeaders: !1,
                            maxReconnectOnClose: 5,
                            enableProtocol: !0,
                            pollingInterval: 0,
                            heartbeat: {
                                client: null,
                                server: null
                            },
                            ackInterval: 0,
                            closeAsync: !1,
                            reconnectOnServerError: !0,
                            environment: "production",
                            onError: function(e) {},
                            onClose: function(e) {},
                            onOpen: function(e) {},
                            onMessage: function(e) {},
                            onReopen: function(e, t) {},
                            onReconnect: function(e, t) {},
                            onMessagePublished: function(e) {},
                            onTransportFailure: function(e, t) {},
                            onLocalMessage: function(e) {},
                            onFailureToReconnect: function(e, t) {},
                            onClientTimeout: function(e) {},
                            onOpenAfterResume: function(e) {}
                        },
                        he = {
                            status: 200,
                            reasonPhrase: "OK",
                            responseBody: "",
                            messages: [],
                            headers: [],
                            state: "messageReceived",
                            transport: "polling",
                            error: null,
                            request: null,
                            partialMessage: "",
                            errorHandled: !1,
                            closedByClientTimeout: !1,
                            ffTryingReconnect: !1
                        },
                        fe = null,
                        ge = null,
                        ve = null,
                        be = null,
                        ye = null,
                        we = !0,
                        xe = 0,
                        _e = 0,
                        ke = " ",
                        Ce = !1,
                        Ae = null,
                        Te = null,
                        Se = n.util.random();
                    f(e), this.subscribe = function(e) {
                        f(e), b()
                    }, this.execute = function() {
                        b()
                    }, this.close = function() {
                        d()
                    }, this.disconnect = function() {
                        m()
                    }, this.getUrl = function() {
                        return pe.url
                    }, this.push = function(e, t) {
                        if (null != t) {
                            var n = pe.dispatchUrl;
                            pe.dispatchUrl = t, W(e), pe.dispatchUrl = n
                        } else W(e)
                    }, this.getUUID = function() {
                        return pe.uuid
                    }, this.pushLocal = function(e) {
                        G(e)
                    }, this.enableProtocol = function(e) {
                        return pe.enableProtocol
                    }, this.init = function() {
                        o()
                    }, this.request = pe, this.response = he
                }
            }, n.subscribe = function(e, t, i) {
                "function" == typeof t && n.addCallback(t), "string" != typeof e ? i = e : i.url = e, a = "undefined" != typeof i && "undefined" != typeof i.uuid ? i.uuid : 0;
                var r = new n.AtmosphereRequest(i);
                return r.execute(), o[o.length] = r, r
            }, n.unsubscribe = function() {
                if (o.length > 0)
                    for (var e = [].concat(o), t = 0; t < e.length; t++) {
                        var n = e[t];
                        n.request.isOpen && n.close(), n.response && n.response.request && clearTimeout(n.response.request.id), n.heartbeatTimer && clearTimeout(n.heartbeatTimer)
                    }
                o = [], r = []
            }, n.unsubscribeUrl = function(e) {
                var t = -1;
                if (o.length > 0)
                    for (var n = 0; n < o.length; n++) {
                        var i = o[n];
                        if (i.getUrl() === e) {
                            i.close(), clearTimeout(i.response.request.id), i.heartbeatTimer && clearTimeout(i.heartbeatTimer), t = n;
                            break
                        }
                    }
                t >= 0 && o.splice(t, 1)
            }, n.addCallback = function(e) {
                -1 === n.util.inArray(e, r) && r.push(e)
            }, n.removeCallback = function(e) {
                var t = n.util.inArray(e, r); - 1 !== t && r.splice(t, 1)
            }, n.util = {
                browser: {},
                parseHeaders: function(e) {
                    for (var t, n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, i = {}; t = n.exec(e);) i[t[1]] = t[2];
                    return i
                },
                now: function() {
                    return (new Date).getTime()
                },
                random: function() {
                    return Math.floor(1e8 + 9e8 * Math.random())
                },
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                inArray: function(e, t) {
                    if (!Array.prototype.indexOf) {
                        for (var n = t.length, i = 0; n > i; ++i)
                            if (t[i] === e) return i;
                        return -1
                    }
                    return t.indexOf(e)
                },
                isBinary: function(e) {
                    return /^\[object\s(?:Blob|ArrayBuffer|.+Array)\]$/.test(Object.prototype.toString.call(e))
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                getAbsoluteURL: function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = '<a href="' + e + '"/>', encodeURI(decodeURI(t.firstChild.href))
                },
                prepareURL: function(e) {
                    var t = n.util.now(),
                        i = e.replace(/([?&])_=[^&]*/, "$1_=" + t);
                    return i + (i === e ? (/\?/.test(e) ? "&" : "?") + "_=" + t : "")
                },
                trim: function(e) {
                    return String.prototype.trim ? e.toString().trim() : e.toString().replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ")
                },
                param: function(e) {
                    function t(e, t) {
                        t = n.util.isFunction(t) ? t() : null == t ? "" : t, r.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
                    }

                    function i(e, o) {
                        var r;
                        if (n.util.isArray(o)) n.util.each(o, function(n, o) {
                            /\[\]$/.test(e) ? t(e, o) : i(e + "[" + ("object" == typeof o ? n : "") + "]", o)
                        });
                        else if ("[object Object]" === Object.prototype.toString.call(o))
                            for (r in o) i(e + "[" + r + "]", o[r]);
                        else t(e, o)
                    }
                    var o, r = [];
                    for (o in e) i(o, e[o]);
                    return r.join("&").replace(/%20/g, "+")
                },
                storage: function() {
                    try {
                        return !(!window.localStorage || !window.StorageEvent)
                    } catch (e) {
                        return !1
                    }
                },
                iterate: function(e, t) {
                    var n;
                    return t = t || 0,
                        function i() {
                            n = setTimeout(function() {
                                e() !== !1 && i()
                            }, t)
                        }(),
                        function() {
                            clearTimeout(n)
                        }
                },
                each: function(e, t, i) {
                    if (e) {
                        var o, r = 0,
                            a = e.length,
                            s = n.util.isArray(e);
                        if (i) {
                            if (s)
                                for (; a > r && (o = t.apply(e[r], i), o !== !1); r++);
                            else
                                for (r in e)
                                    if (o = t.apply(e[r], i), o === !1) break
                        } else if (s)
                            for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
                        else
                            for (r in e)
                                if (o = t.call(e[r], r, e[r]), o === !1) break; return e
                    }
                },
                extend: function(e) {
                    var t, n, i;
                    for (t = 1; t < arguments.length; t++)
                        if (null != (n = arguments[t]))
                            for (i in n) e[i] = n[i];
                    return e
                },
                on: function(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                },
                off: function(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                },
                log: function(e, t) {
                    if (window.console) {
                        var n = window.console[e];
                        "function" == typeof n && "production" !== s && n.apply(window.console, t)
                    }
                },
                warn: function() {
                    n.util.log("warn", arguments)
                },
                info: function() {
                    n.util.log("info", arguments)
                },
                debug: function() {
                    n.util.log("debug", arguments)
                },
                error: function() {
                    n.util.log("error", arguments)
                },
                xhr: function() {
                    try {
                        return new window.XMLHttpRequest
                    } catch (e) {
                        try {
                            return new window.ActiveXObject("Microsoft.XMLHTTP")
                        } catch (t) {}
                    }
                },
                parseJSON: function(e) {
                    return e ? window.JSON && window.JSON.parse ? window.JSON.parse(e) : new Function("return " + e)() : null
                },
                stringifyJSON: function(e) {
                    function t(e) {
                        return '"' + e.replace(i, function(e) {
                            var t = o[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"'
                    }

                    function n(e) {
                        return 10 > e ? "0" + e : e
                    }
                    var i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        o = {
                            "\b": "\\b",
                            "	": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        };
                    return window.JSON && window.JSON.stringify ? window.JSON.stringify(e) : function r(e, i) {
                        var o, a, s, l, u = i[e],
                            m = typeof u;
                        switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e), m = typeof u), m) {
                            case "string":
                                return t(u);
                            case "number":
                                return isFinite(u) ? String(u) : "null";
                            case "boolean":
                                return String(u);
                            case "object":
                                if (!u) return "null";
                                switch (Object.prototype.toString.call(u)) {
                                    case "[object Date]":
                                        return isFinite(u.valueOf()) ? '"' + u.getUTCFullYear() + "-" + n(u.getUTCMonth() + 1) + "-" + n(u.getUTCDate()) + "T" + n(u.getUTCHours()) + ":" + n(u.getUTCMinutes()) + ":" + n(u.getUTCSeconds()) + 'Z"' : "null";
                                    case "[object Array]":
                                        for (s = u.length, l = [], o = 0; s > o; o++) l.push(r(o, u) || "null");
                                        return "[" + l.join(",") + "]";
                                    default:
                                        l = [];
                                        for (o in u) c.call(u, o) && (a = r(o, u), a && l.push(t(o) + ":" + a));
                                        return "{" + l.join(",") + "}"
                                }
                        }
                    }("", {
                        "": e
                    })
                },
                checkCORSSupport: function() {
                    if (n.util.browser.msie && !window.XDomainRequest && +n.util.browser.version.split(".")[0] < 11) return !0;
                    if (n.util.browser.opera && +n.util.browser.version.split(".") < 12) return !0;
                    if ("KreaTVWebKit/531" === n.util.trim(navigator.userAgent).slice(0, 16)) return !0;
                    if ("kreatel" === n.util.trim(navigator.userAgent).slice(-7).toLowerCase()) return !0;
                    var e = navigator.userAgent.toLowerCase(),
                        t = e.indexOf("android") > -1;
                    return !!t
                }
            }, e = n.util.random(),
            function() {
                var e = navigator.userAgent.toLowerCase(),
                    t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                n.util.browser[t[1] || ""] = !0, n.util.browser.version = t[2] || "0", n.util.browser.trident && (n.util.browser.msie = !0), (n.util.browser.msie || n.util.browser.mozilla && 1 === +n.util.browser.version.split(".")[0]) && (n.util.storage = !1)
            }(), n.util.on(window, "unload", function(e) {
                n.unsubscribe()
            }), n.util.on(window, "beforeunload", function(e) {
                n.unsubscribe()
            }), n
    })
}, function(e, t, n) {
    "use strict";
    var i = n(288),
        o = n(289);
    o.create(i)
}, function(e, t, n) {
    e.exports = n.p + "frame.ac7bc33e.js"
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = document.createElement("iframe");
        t.style.display = "none", document.body.appendChild(t);
        var n = "<!doctype html><head></head><body>  <script type='text/javascript' src='" + e + "'></script></body></html>";
        return t.contentWindow.document.open("text/html", "replace"), t.contentWindow.document.write(n), t.contentWindow.document.close(), t
    }
    e.exports.create = n
}, function(e, t, n) {
    "use strict";

    function i() {
        try {
            delete window.intercomEchoSuccess, delete window.intercomEchoFailure
        } catch (e) {}
    }
    var o = n(291),
        r = n(76),
        a = n(289);
    window.intercomEchoSuccess = function() {
        r.increment("echoSuccess"), i()
    }, window.intercomEchoFailure = function() {
        r.increment("echoFailure"), i()
    };
    try {
        r.increment("echoAttempt"), a.create(o)
    } catch (s) {
        window.intercomEchoFailure()
    }
}, function(e, t, n) {
    e.exports = n.p + "echo.515e8809.js"
}]);