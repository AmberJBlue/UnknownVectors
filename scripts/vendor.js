! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = Z.type(t);
        return "function" === n || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function r(t, e, n) {
        if (Z.isFunction(e)) return Z.grep(t, function(t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType) return Z.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (ae.test(e)) return Z.filter(e, t, n);
            e = Z.filter(e, t)
        }
        return Z.grep(t, function(t) {
            return X.call(e, t) >= 0 !== n
        })
    }

    function o(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function i(t) {
        var e = de[t] = {};
        return Z.each(t.match(fe) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        Q.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + a.uid++
    }

    function u(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(xe, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : we.test(n) ? Z.parseJSON(n) : n
                } catch (o) {}
                ve.set(t, e, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function p() {
        try {
            return Q.activeElement
        } catch (t) {}
    }

    function h(t, e) {
        return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function f(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function d(t) {
        var e = Oe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var n = 0, r = t.length; r > n; n++) ye.set(t[n], "globalEval", !e || ye.get(e[n], "globalEval"))
    }

    function m(t, e) {
        var n, r, o, i, s, a, u, l;
        if (1 === e.nodeType) {
            if (ye.hasData(t) && (i = ye.access(t), s = ye.set(e, i), l = i.events)) {
                delete s.handle, s.events = {};
                for (o in l)
                    for (n = 0, r = l[o].length; r > n; n++) Z.event.add(e, o, l[o][n])
            }
            ve.hasData(t) && (a = ve.access(t), u = Z.extend({}, a), ve.set(e, u))
        }
    }

    function y(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
    }

    function v(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Te.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function w(e, n) {
        var r, o = Z(n.createElement(e)).appendTo(n.body),
            i = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(o[0])) ? r.display : Z.css(o[0], "display");
        return o.detach(), i
    }

    function x(t) {
        var e = Q,
            n = He[t];
        return n || (n = w(t, e), "none" !== n && n || (qe = (qe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = qe[0].contentDocument, e.write(), e.close(), n = w(t, e), qe.detach()), He[t] = n), n
    }

    function b(t, e, n) {
        var r, o, i, s, a = t.style;
        return n = n || Be(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || Z.contains(t.ownerDocument, t) || (s = Z.style(t, e)), ze.test(s) && Ge.test(e) && (r = a.width, o = a.minWidth, i = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = o, a.maxWidth = i)), void 0 !== s ? s + "" : s
    }

    function _(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function C(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), r = e, o = Ye.length; o--;)
            if (e = Ye[o] + n, e in t) return e;
        return r
    }

    function T(t, e, n) {
        var r = Ve.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }

    function S(t, e, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > i; i += 2) "margin" === n && (s += Z.css(t, n + _e[i], !0, o)), r ? ("content" === n && (s -= Z.css(t, "padding" + _e[i], !0, o)), "margin" !== n && (s -= Z.css(t, "border" + _e[i] + "Width", !0, o))) : (s += Z.css(t, "padding" + _e[i], !0, o), "padding" !== n && (s += Z.css(t, "border" + _e[i] + "Width", !0, o)));
        return s
    }

    function E(t, e, n) {
        var r = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            i = Be(t),
            s = "border-box" === Z.css(t, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = b(t, e, i), (0 > o || null == o) && (o = t.style[e]), ze.test(o)) return o;
            r = s && (J.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + S(t, e, n || (s ? "border" : "content"), r, i) + "px"
    }

    function A(t, e) {
        for (var n, r, o, i = [], s = 0, a = t.length; a > s; s++) r = t[s], r.style && (i[s] = ye.get(r, "olddisplay"), n = r.style.display, e ? (i[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (i[s] = ye.access(r, "olddisplay", x(r.nodeName)))) : (o = Ce(r), "none" === n && o || ye.set(r, "olddisplay", o ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++) r = t[s], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? i[s] || "" : "none"));
        return t
    }

    function R(t, e, n, r, o) {
        return new R.prototype.init(t, e, n, r, o)
    }

    function k() {
        return setTimeout(function() {
            Je = void 0
        }), Je = Z.now()
    }

    function N(t, e) {
        var n, r = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = _e[r], o["margin" + n] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function M(t, e, n) {
        for (var r, o = (nn[e] || []).concat(nn["*"]), i = 0, s = o.length; s > i; i++)
            if (r = o[i].call(n, e, t)) return r
    }

    function D(t, e, n) {
        var r, o, i, s, a, u, l, c, p = this,
            h = {},
            f = t.style,
            d = t.nodeType && Ce(t),
            g = ye.get(t, "fxshow");
        n.queue || (a = Z._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, Z.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = Z.css(t, "display"), c = "none" === l ? ye.get(t, "olddisplay") || x(t.nodeName) : l, "inline" === c && "none" === Z.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (o = e[r], Ke.exec(o)) {
                if (delete e[r], i = i || "toggle" === o, o === (d ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[r]) continue;
                    d = !0
                }
                h[r] = g && g[r] || Z.style(t, r)
            } else l = void 0;
        if (Z.isEmptyObject(h)) "inline" === ("none" === l ? x(t.nodeName) : l) && (f.display = l);
        else {
            g ? "hidden" in g && (d = g.hidden) : g = ye.access(t, "fxshow", {}), i && (g.hidden = !d), d ? Z(t).show() : p.done(function() {
                Z(t).hide()
            }), p.done(function() {
                var e;
                ye.remove(t, "fxshow");
                for (e in h) Z.style(t, e, h[e])
            });
            for (r in h) s = M(d ? g[r] : 0, r, p), r in g || (g[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function P(t, e) {
        var n, r, o, i, s;
        for (n in t)
            if (r = Z.camelCase(n), o = e[r], i = t[n], Z.isArray(i) && (o = i[1], i = t[n] = i[0]), n !== r && (t[r] = i, delete t[n]), s = Z.cssHooks[r], s && "expand" in s) {
                i = s.expand(i), delete t[r];
                for (n in i) n in t || (t[n] = i[n], e[n] = o)
            } else e[r] = o
    }

    function I(t, e, n) {
        var r, o, i = 0,
            s = en.length,
            a = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (o) return !1;
                for (var e = Je || k(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, i = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(i);
                return a.notifyWith(t, [l, i, n]), 1 > i && u ? n : (a.resolveWith(t, [l]), !1)
            },
            l = a.promise({
                elem: t,
                props: Z.extend({}, e),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Je || k(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var r = Z.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(e) {
                    var n = 0,
                        r = e ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; r > n; n++) l.tweens[n].run(1);
                    return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]), this
                }
            }),
            c = l.props;
        for (P(c, l.opts.specialEasing); s > i; i++)
            if (r = en[i].call(l, t, c, l.opts)) return r;
        return Z.map(c, M, l), Z.isFunction(l.opts.start) && l.opts.start.call(t, l), Z.fx.timer(Z.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function j(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, o = 0,
                i = e.toLowerCase().match(fe) || [];
            if (Z.isFunction(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function O(t, e, n, r) {
        function o(a) {
            var u;
            return i[a] = !0, Z.each(t[a] || [], function(t, a) {
                var l = a(e, n, r);
                return "string" != typeof l || s || i[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l), o(l), !1)
            }), u
        }
        var i = {},
            s = t === xn;
        return o(e.dataTypes[0]) || !i["*"] && o("*")
    }

    function L(t, e) {
        var n, r, o = Z.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : r || (r = {}))[n] = e[n]);
        return r && Z.extend(!0, t, r), t
    }

    function F(t, e, n) {
        for (var r, o, i, s, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (o in a)
                if (a[o] && a[o].test(r)) {
                    u.unshift(o);
                    break
                }
        if (u[0] in n) i = u[0];
        else {
            for (o in n) {
                if (!u[0] || t.converters[o + " " + u[0]]) {
                    i = o;
                    break
                }
                s || (s = o)
            }
            i = i || s
        }
        return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
    }

    function q(t, e, n, r) {
        var o, i, s, a, u, l = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
        for (i = c.shift(); i;)
            if (t.responseFields[i] && (n[t.responseFields[i]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = i, i = c.shift())
                if ("*" === i) i = u;
                else if ("*" !== u && u !== i) {
            if (s = l[u + " " + i] || l["* " + i], !s)
                for (o in l)
                    if (a = o.split(" "), a[1] === i && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[o] : l[o] !== !0 && (i = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: s ? p : "No conversion from " + u + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function H(t, e, n, r) {
        var o;
        if (Z.isArray(e)) Z.each(e, function(e, o) {
            n || Sn.test(t) ? r(t, o) : H(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, r)
        });
        else if (n || "object" !== Z.type(e)) r(t, e);
        else
            for (o in e) H(t + "[" + o + "]", e[o], n, r)
    }

    function G(t) {
        return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var z = [],
        B = z.slice,
        W = z.concat,
        V = z.push,
        X = z.indexOf,
        U = {},
        $ = U.toString,
        Y = U.hasOwnProperty,
        J = {},
        Q = t.document,
        K = "2.1.3",
        Z = function(t, e) {
            return new Z.fn.init(t, e)
        },
        te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ee = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(t, e) {
            return e.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : B.call(this)
        },
        pushStack: function(t) {
            var e = Z.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return Z.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(Z.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: z.sort,
        splice: z.splice
    }, Z.extend = Z.fn.extend = function() {
        var t, e, n, r, o, i, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], r = t[e], s !== r && (l && r && (Z.isPlainObject(r) || (o = Z.isArray(r))) ? (o ? (o = !1, i = n && Z.isArray(n) ? n : []) : i = n && Z.isPlainObject(n) ? n : {}, s[e] = Z.extend(l, i, r)) : void 0 !== r && (s[e] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === Z.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? U[$.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(ee, "ms-").replace(ne, re)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, r) {
            var o, i = 0,
                s = t.length,
                a = n(t);
            if (r) {
                if (a)
                    for (; s > i && (o = e.apply(t[i], r), o !== !1); i++);
                else
                    for (i in t)
                        if (o = e.apply(t[i], r), o === !1) break
            } else if (a)
                for (; s > i && (o = e.call(t[i], i, t[i]), o !== !1); i++);
            else
                for (i in t)
                    if (o = e.call(t[i], i, t[i]), o === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(te, "")
        },
        makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? Z.merge(r, "string" == typeof t ? [t] : t) : V.call(r, t)), r
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : X.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, o = t.length; n > r; r++) t[o++] = e[r];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var r, o = [], i = 0, s = t.length, a = !n; s > i; i++) r = !e(t[i], i), r !== a && o.push(t[i]);
            return o
        },
        map: function(t, e, r) {
            var o, i = 0,
                s = t.length,
                a = n(t),
                u = [];
            if (a)
                for (; s > i; i++) o = e(t[i], i, r), null != o && u.push(o);
            else
                for (i in t) o = e(t[i], i, r), null != o && u.push(o);
            return W.apply([], u)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, o;
            return "string" == typeof e && (n = t[e], e = t, t = n), Z.isFunction(t) ? (r = B.call(arguments, 2), o = function() {
                return t.apply(e || this, r.concat(B.call(arguments)))
            }, o.guid = t.guid = t.guid || Z.guid++, o) : void 0
        },
        now: Date.now,
        support: J
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        U["[object " + e + "]"] = e.toLowerCase()
    });
    var oe = function(t) {
        function e(t, e, n, r) {
            var o, i, s, a, u, l, p, f, d, g;
            if ((e ? e.ownerDocument || e : H) !== D && M(e), e = e || D, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!r && I) {
                if (11 !== a && (o = ve.exec(t)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (i = e.getElementById(s), !i || !i.parentNode) return n;
                            if (i.id === s) return n.push(i), n
                        } else if (e.ownerDocument && (i = e.ownerDocument.getElementById(s)) && F(e, i) && i.id === s) return n.push(i), n
                    } else {
                        if (o[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = o[3]) && b.getElementsByClassName) return K.apply(n, e.getElementsByClassName(s)), n
                    }
                if (b.qsa && (!j || !j.test(t))) {
                    if (f = p = q, d = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (l = S(t), (p = e.getAttribute("id")) ? f = p.replace(xe, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + h(l[u]);
                        d = we.test(t) && c(e.parentNode) || e, g = l.join(",")
                    }
                    if (g) try {
                        return K.apply(n, d.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        p || e.removeAttribute("id")
                    }
                }
            }
            return A(t.replace(ue, "$1"), e, n, r)
        }

        function n() {
            function t(n, r) {
                return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
            var e = [];
            return t
        }

        function r(t) {
            return t[q] = !0, t
        }

        function o(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function i(t, e) {
            for (var n = t.split("|"), r = t.length; r--;) _.attrHandle[n[r]] = e
        }

        function s(t, e) {
            var n = e && t,
                r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function l(t) {
            return r(function(e) {
                return e = +e, r(function(n, r) {
                    for (var o, i = t([], n.length, e), s = i.length; s--;) n[o = i[s]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function p() {}

        function h(t) {
            for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
            return r
        }

        function f(t, e, n) {
            var r = e.dir,
                o = n && "parentNode" === r,
                i = z++;
            return e.first ? function(e, n, i) {
                for (; e = e[r];)
                    if (1 === e.nodeType || o) return t(e, n, i)
            } : function(e, n, s) {
                var a, u, l = [G, i];
                if (s) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                } else
                    for (; e = e[r];)
                        if (1 === e.nodeType || o) {
                            if (u = e[q] || (e[q] = {}), (a = u[r]) && a[0] === G && a[1] === i) return l[2] = a[2];
                            if (u[r] = l, l[2] = t(e, n, s)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, n, r) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, r)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, r) {
            for (var o = 0, i = n.length; i > o; o++) e(t, n[o], r);
            return r
        }

        function m(t, e, n, r, o) {
            for (var i, s = [], a = 0, u = t.length, l = null != e; u > a; a++)(i = t[a]) && (!n || n(i, r, o)) && (s.push(i), l && e.push(a));
            return s
        }

        function y(t, e, n, o, i, s) {
            return o && !o[q] && (o = y(o)), i && !i[q] && (i = y(i, s)), r(function(r, s, a, u) {
                var l, c, p, h = [],
                    f = [],
                    d = s.length,
                    y = r || g(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !r && e ? y : m(y, h, t, a, u),
                    w = n ? i || (r ? t : d || o) ? [] : s : v;
                if (n && n(v, w, a, u), o)
                    for (l = m(w, f), o(l, [], a, u), c = l.length; c--;)(p = l[c]) && (w[f[c]] = !(v[f[c]] = p));
                if (r) {
                    if (i || t) {
                        if (i) {
                            for (l = [], c = w.length; c--;)(p = w[c]) && l.push(v[c] = p);
                            i(null, w = [], l, u)
                        }
                        for (c = w.length; c--;)(p = w[c]) && (l = i ? te(r, p) : h[c]) > -1 && (r[l] = !(s[l] = p))
                    }
                } else w = m(w === s ? w.splice(d, w.length) : w), i ? i(null, s, w, u) : K.apply(s, w)
            })
        }

        function v(t) {
            for (var e, n, r, o = t.length, i = _.relative[t[0].type], s = i || _.relative[" "], a = i ? 1 : 0, u = f(function(t) {
                    return t === e
                }, s, !0), l = f(function(t) {
                    return te(e, t) > -1
                }, s, !0), c = [function(t, n, r) {
                    var o = !i && (r || n !== R) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                    return e = null, o
                }]; o > a; a++)
                if (n = _.relative[t[a].type]) c = [f(d(c), n)];
                else {
                    if (n = _.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                        for (r = ++a; o > r && !_.relative[t[r].type]; r++);
                        return y(a > 1 && d(c), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > a && v(t.slice(a, r)), o > r && v(t = t.slice(r)), o > r && h(t))
                    }
                    c.push(n)
                }
            return d(c)
        }

        function w(t, n) {
            var o = n.length > 0,
                i = t.length > 0,
                s = function(r, s, a, u, l) {
                    var c, p, h, f = 0,
                        d = "0",
                        g = r && [],
                        y = [],
                        v = R,
                        w = r || i && _.find.TAG("*", l),
                        x = G += null == v ? 1 : Math.random() || .1,
                        b = w.length;
                    for (l && (R = s !== D && s); d !== b && null != (c = w[d]); d++) {
                        if (i && c) {
                            for (p = 0; h = t[p++];)
                                if (h(c, s, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (G = x)
                        }
                        o && ((c = !h && c) && f--, r && g.push(c))
                    }
                    if (f += d, o && d !== f) {
                        for (p = 0; h = n[p++];) h(g, y, s, a);
                        if (r) {
                            if (f > 0)
                                for (; d--;) g[d] || y[d] || (y[d] = J.call(u));
                            y = m(y)
                        }
                        K.apply(u, y), l && !r && y.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                    }
                    return l && (G = x, R = v), g
                };
            return o ? r(s) : s
        }
        var x, b, _, C, T, S, E, A, R, k, N, M, D, P, I, j, O, L, F, q = "sizzle" + 1 * new Date,
            H = t.document,
            G = 0,
            z = 0,
            B = n(),
            W = n(),
            V = n(),
            X = function(t, e) {
                return t === e && (N = !0), 0
            },
            U = 1 << 31,
            $ = {}.hasOwnProperty,
            Y = [],
            J = Y.pop,
            Q = Y.push,
            K = Y.push,
            Z = Y.slice,
            te = function(t, e) {
                for (var n = 0, r = t.length; r > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = re.replace("w", "w#"),
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(se),
            fe = new RegExp("^" + oe + "$"),
            de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            _e = function(t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Ce = function() {
                M()
            };
        try {
            K.apply(Y = Z.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType
        } catch (Te) {
            K = {
                apply: Y.length ? function(t, e) {
                    Q.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        b = e.support = {}, T = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, M = e.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t : H;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, P = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), I = !T(r), b.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = o(function(t) {
                return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = ye.test(r.getElementsByClassName), b.getById = o(function(t) {
                return P.appendChild(t).id = q, !r.getElementsByName || !r.getElementsByName(q).length
            }), b.getById ? (_.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && I) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function(t) {
                var e = t.replace(be, _e);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete _.find.ID, _.filter.ID = function(t) {
                var e = t.replace(be, _e);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), _.find.TAG = b.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, r = [],
                    o = 0,
                    i = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, _.find.CLASS = b.getElementsByClassName && function(t, e) {
                return I ? e.getElementsByClassName(t) : void 0
            }, O = [], j = [], (b.qsa = ye.test(r.querySelectorAll)) && (o(function(t) {
                P.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + q + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || j.push(".#.+[+~]")
            }), o(function(t) {
                var e = r.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
            })), (b.matchesSelector = ye.test(L = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(t) {
                b.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), O.push("!=", se)
            }), j = j.length && new RegExp(j.join("|")), O = O.length && new RegExp(O.join("|")), e = ye.test(P.compareDocumentPosition), F = e || ye.test(P.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, X = e ? function(t, e) {
                if (t === e) return N = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === H && F(H, t) ? -1 : e === r || e.ownerDocument === H && F(H, e) ? 1 : k ? te(k, t) - te(k, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return N = !0, 0;
                var n, o = 0,
                    i = t.parentNode,
                    a = e.parentNode,
                    u = [t],
                    l = [e];
                if (!i || !a) return t === r ? -1 : e === r ? 1 : i ? -1 : a ? 1 : k ? te(k, t) - te(k, e) : 0;
                if (i === a) return s(t, e);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; u[o] === l[o];) o++;
                return o ? s(u[o], l[o]) : u[o] === H ? -1 : l[o] === H ? 1 : 0
            }, r) : D
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && M(t), n = n.replace(pe, "='$1']"), !(!b.matchesSelector || !I || O && O.test(n) || j && j.test(n))) try {
                var r = L.call(t, n);
                if (r || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch (o) {}
            return e(n, D, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && M(t), F(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && M(t);
            var n = _.attrHandle[e.toLowerCase()],
                r = n && $.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
            return void 0 !== r ? r : b.attributes || !I ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                r = 0,
                o = 0;
            if (N = !b.detectDuplicates, k = !b.sortStable && t.slice(0), t.sort(X), N) {
                for (; e = t[o++];) e === t[o] && (r = n.push(o));
                for (; r--;) t.splice(n[r], 1)
            }
            return k = null, t
        }, C = e.getText = function(t) {
            var e, n = "",
                r = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[r++];) n += C(e);
            return n
        }, _ = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(be, _e), t[3] = (t[3] || t[4] || t[5] || "").replace(be, _e), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return de.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(be, _e).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(o) {
                        var i = e.attr(o, t);
                        return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, r, o) {
                    var i = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === r && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, u) {
                        var l, c, p, h, f, d, g = i !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            y = a && e.nodeName.toLowerCase(),
                            v = !u && !a;
                        if (m) {
                            if (i) {
                                for (; g;) {
                                    for (p = e; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    d = g = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? m.firstChild : m.lastChild], s && v) {
                                for (c = m[q] || (m[q] = {}), l = c[t] || [], f = l[0] === G && l[1], h = l[0] === G && l[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (h = f = 0) || d.pop();)
                                    if (1 === p.nodeType && ++h && p === e) {
                                        c[t] = [G, f, h];
                                        break
                                    }
                            } else if (v && (l = (e[q] || (e[q] = {}))[t]) && l[0] === G) h = l[1];
                            else
                                for (;
                                    (p = ++f && p && p[g] || (h = f = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++h || (v && ((p[q] || (p[q] = {}))[t] = [G, h]), p !== e)););
                            return h -= o, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o, i = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return i[q] ? i(n) : i.length > 1 ? (o = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                        for (var r, o = i(t, n), s = o.length; s--;) r = te(t, o[s]), t[r] = !(e[r] = o[s])
                    }) : function(t) {
                        return i(t, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function(t) {
                    var e = [],
                        n = [],
                        o = E(t.replace(ue, "$1"));
                    return o[q] ? r(function(t, e, n, r) {
                        for (var i, s = o(t, null, r, []), a = t.length; a--;)(i = s[a]) && (t[a] = !(e[a] = i))
                    }) : function(t, r, i) {
                        return e[0] = t, o(e, null, i, n), e[0] = null, !n.pop()
                    }
                }),
                has: r(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function(t) {
                    return t = t.replace(be, _e),
                        function(e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                }),
                lang: r(function(t) {
                    return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(be, _e).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === P
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
                    return t
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) _.pseudos[x] = u(x);
        return p.prototype = _.filters = _.pseudos, _.setFilters = new p, S = e.tokenize = function(t, n) {
            var r, o, i, s, a, u, l, c = W[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, u = [], l = _.preFilter; a;) {
                (!r || (o = le.exec(a))) && (o && (a = a.slice(o[0].length) || a), u.push(i = [])), r = !1, (o = ce.exec(a)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(ue, " ")
                }), a = a.slice(r.length));
                for (s in _.filter) !(o = de[s].exec(a)) || l[s] && !(o = l[s](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: s,
                    matches: o
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? e.error(t) : W(t, u).slice(0)
        }, E = e.compile = function(t, e) {
            var n, r = [],
                o = [],
                i = V[t + " "];
            if (!i) {
                for (e || (e = S(t)), n = e.length; n--;) i = v(e[n]), i[q] ? r.push(i) : o.push(i);
                i = V(t, w(o, r)), i.selector = t
            }
            return i
        }, A = e.select = function(t, e, n, r) {
            var o, i, s, a, u, l = "function" == typeof t && t,
                p = !r && S(t = l.selector || t);
            if (n = n || [], 1 === p.length) {
                if (i = p[0] = p[0].slice(0), i.length > 2 && "ID" === (s = i[0]).type && b.getById && 9 === e.nodeType && I && _.relative[i[1].type]) {
                    if (e = (_.find.ID(s.matches[0].replace(be, _e), e) || [])[0], !e) return n;
                    l && (e = e.parentNode), t = t.slice(i.shift().value.length)
                }
                for (o = de.needsContext.test(t) ? 0 : i.length; o-- && (s = i[o], !_.relative[a = s.type]);)
                    if ((u = _.find[a]) && (r = u(s.matches[0].replace(be, _e), we.test(i[0].type) && c(e.parentNode) || e))) {
                        if (i.splice(o, 1), t = r.length && h(i), !t) return K.apply(n, r), n;
                        break
                    }
            }
            return (l || E(t, p))(r, e, !I, n, we.test(t) && c(e.parentNode) || e), n
        }, b.sortStable = q.split("").sort(X).join("") === q, b.detectDuplicates = !!N, M(), b.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || i("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || i(ee, function(t, e, n) {
            var r;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    Z.find = oe, Z.expr = oe.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = oe.uniqueSort, Z.text = oe.getText, Z.isXMLDoc = oe.isXML, Z.contains = oe.contains;
    var ie = Z.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? Z.find.matchesSelector(r, t) ? [r] : [] : Z.find.matches(t, Z.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, Z.fn.extend({
        find: function(t) {
            var e, n = this.length,
                r = [],
                o = this;
            if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (Z.contains(o[e], this)) return !0
            }));
            for (e = 0; n > e; e++) Z.find(t, o[e], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && ie.test(t) ? Z(t) : t || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = Z.fn.init = function(t, e) {
            var n, r;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : le.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ue).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), se.test(n[1]) && Z.isPlainObject(e))
                        for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return r = Q.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof ue.ready ? ue.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
        };
    ce.prototype = Z.fn, ue = Z(Q);
    var pe = /^(?:parents|prev(?:Until|All))/,
        he = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(t, e, n) {
            for (var r = [], o = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && Z(t).is(n)) break;
                    r.push(t)
                }
            return r
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), Z.fn.extend({
        has: function(t) {
            var e = Z(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (Z.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0, o = this.length, i = [], s = ie.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; o > r; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
                        i.push(n);
                        break
                    }
            return this.pushStack(i.length > 1 ? Z.unique(i) : i)
        },
        index: function(t) {
            return t ? "string" == typeof t ? X.call(Z(t), this[0]) : X.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), Z.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return Z.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return Z.dir(t, "parentNode", n)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return Z.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return Z.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return Z.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return Z.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return Z.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Z.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || Z.merge([], t.childNodes)
        }
    }, function(t, e) {
        Z.fn[t] = function(n, r) {
            var o = Z.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (o = Z.filter(r, o)), this.length > 1 && (he[t] || Z.unique(o), pe.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var fe = /\S+/g,
        de = {};
    Z.Callbacks = function(t) {
        t = "string" == typeof t ? de[t] || i(t) : Z.extend({}, t);
        var e, n, r, o, s, a, u = [],
            l = !t.once && [],
            c = function(i) {
                for (e = t.memory && i, n = !0, a = o || 0, o = 0, s = u.length, r = !0; u && s > a; a++)
                    if (u[a].apply(i[0], i[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : e ? u = [] : p.disable())
            },
            p = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function i(e) {
                            Z.each(e, function(e, n) {
                                var r = Z.type(n);
                                "function" === r ? t.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        }(arguments), r ? s = u.length : e && (o = n, c(e))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(t, e) {
                        for (var n;
                            (n = Z.inArray(e, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(t) {
                    return t ? Z.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = l = e = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, e || p.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(t, e) {
                    return !u || n && !l || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? l.push(e) : c(e)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return p
    }, Z.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(e, function(e, i) {
                                var s = Z.isFunction(t[e]) && t[e];
                                o[i[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && Z.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? Z.extend(t, r) : r
                    }
                },
                o = {};
            return r.pipe = r.then, Z.each(e, function(t, i) {
                var s = i[2],
                    a = i[3];
                r[i[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, r, o = 0,
                i = B.call(arguments),
                s = i.length,
                a = 1 !== s || t && Z.isFunction(t.promise) ? s : 0,
                u = 1 === a ? t : Z.Deferred(),
                l = function(t, n, r) {
                    return function(o) {
                        n[t] = this, r[t] = arguments.length > 1 ? B.call(arguments) : o, r === e ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), r = new Array(s); s > o; o++) i[o] && Z.isFunction(i[o].promise) ? i[o].promise().done(l(o, r, i)).fail(u.reject).progress(l(o, n, e)) : --a;
            return a || u.resolveWith(r, i), u.promise()
        }
    });
    var ge;
    Z.fn.ready = function(t) {
        return Z.ready.promise().done(t), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (ge.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
        }
    }), Z.ready.promise = function(e) {
        return ge || (ge = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), ge.promise(e)
    }, Z.ready.promise();
    var me = Z.access = function(t, e, n, r, o, i, s) {
        var a = 0,
            u = t.length,
            l = null == n;
        if ("object" === Z.type(n)) {
            o = !0;
            for (a in n) Z.access(t, e, a, n[a], !0, i, s)
        } else if (void 0 !== r && (o = !0, Z.isFunction(r) || (s = !0), l && (s ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
                return l.call(Z(t), n)
            })), e))
            for (; u > a; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return o ? t : l ? e.call(t) : u ? e(t[0], n) : i
    };
    Z.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (r) {
                    e[this.expando] = n, Z.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var r, o = this.key(t),
                i = this.cache[o];
            if ("string" == typeof e) i[e] = n;
            else if (Z.isEmptyObject(i)) Z.extend(this.cache[o], e);
            else
                for (r in e) i[r] = e[r];
            return i
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, Z.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r, o, i = this.key(t),
                s = this.cache[i];
            if (void 0 === e) this.cache[i] = {};
            else {
                Z.isArray(e) ? r = e.concat(e.map(Z.camelCase)) : (o = Z.camelCase(e), e in s ? r = [e, o] : (r = o, r = r in s ? [r] : r.match(fe) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(t) {
            return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var ye = new a,
        ve = new a,
        we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    Z.extend({
        hasData: function(t) {
            return ve.hasData(t) || ye.hasData(t)
        },
        data: function(t, e, n) {
            return ve.access(t, e, n)
        },
        removeData: function(t, e) {
            ve.remove(t, e)
        },
        _data: function(t, e, n) {
            return ye.access(t, e, n)
        },
        _removeData: function(t, e) {
            ye.remove(t, e)
        }
    }), Z.fn.extend({
        data: function(t, e) {
            var n, r, o, i = this[0],
                s = i && i.attributes;
            if (void 0 === t) {
                if (this.length && (o = ve.get(i), 1 === i.nodeType && !ye.get(i, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(i, r, o[r])));
                    ye.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                ve.set(this, t)
            }) : me(this, function(e) {
                var n, r = Z.camelCase(t);
                if (i && void 0 === e) {
                    if (n = ve.get(i, t), void 0 !== n) return n;
                    if (n = ve.get(i, r), void 0 !== n) return n;
                    if (n = u(i, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ve.get(this, r);
                    ve.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && ve.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                ve.remove(this, t)
            })
        }
    }), Z.extend({
        queue: function(t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = ye.get(t, e), n && (!r || Z.isArray(n) ? r = ye.access(t, e, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = Z.queue(t, e),
                r = n.length,
                o = n.shift(),
                i = Z._queueHooks(t, e),
                s = function() {
                    Z.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === e && n.unshift("inprogress"), delete i.stop, o.call(t, s, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ye.get(t, n) || ye.access(t, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    ye.remove(t, [e + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = Z.queue(this, t, e);
                Z._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                Z.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1,
                o = Z.Deferred(),
                i = this,
                s = this.length,
                a = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = ye.get(i[s], t + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _e = ["Top", "Right", "Bottom", "Left"],
        Ce = function(t, e) {
            return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
        },
        Te = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = Q.createDocumentFragment(),
            e = t.appendChild(Q.createElement("div")),
            n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), J.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Se = "undefined";
    J.focusinBubbles = "onfocusin" in t;
    var Ee = /^key/,
        Ae = /^(?:mouse|pointer|contextmenu)|click/,
        Re = /^(?:focusinfocus|focusoutblur)$/,
        ke = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(t, e, n, r, o) {
            var i, s, a, u, l, c, p, h, f, d, g, m = ye.get(t);
            if (m)
                for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return typeof Z !== Se && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(fe) || [""], l = e.length; l--;) a = ke.exec(e[l]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f && (p = Z.event.special[f] || {}, f = (o ? p.delegateType : p.bindType) || f, p = Z.event.special[f] || {}, c = Z.extend({
                    type: f,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && Z.expr.match.needsContext.test(o),
                    namespace: d.join(".")
                }, i), (h = u[f]) || (h = u[f] = [], h.delegateCount = 0, p.setup && p.setup.call(t, r, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s, !1)), p.add && (p.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), Z.event.global[f] = !0)
        },
        remove: function(t, e, n, r, o) {
            var i, s, a, u, l, c, p, h, f, d, g, m = ye.hasData(t) && ye.get(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(fe) || [""], l = e.length; l--;)
                    if (a = ke.exec(e[l]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (p = Z.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, h = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = h.length; i--;) c = h[i], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(i, 1), c.selector && h.delegateCount--, p.remove && p.remove.call(t, c));
                        s && !h.length && (p.teardown && p.teardown.call(t, d, m.handle) !== !1 || Z.removeEvent(t, f, m.handle), delete u[f])
                    } else
                        for (f in u) Z.event.remove(t, f + e[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ye.remove(t, "events"))
            }
        },
        trigger: function(e, n, r, o) {
            var i, s, a, u, l, c, p, h = [r || Q],
                f = Y.call(e, "type") ? e.type : e,
                d = Y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !Re.test(f + Z.event.triggered) && (f.indexOf(".") >= 0 && (d = f.split("."), f = d.shift(), d.sort()), l = f.indexOf(":") < 0 && "on" + f, e = e[Z.expando] ? e : new Z.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : Z.makeArray(n, [e]), p = Z.event.special[f] || {}, o || !p.trigger || p.trigger.apply(r, n) !== !1)) {
                if (!o && !p.noBubble && !Z.isWindow(r)) {
                    for (u = p.delegateType || f, Re.test(u + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (r.ownerDocument || Q) && h.push(a.defaultView || a.parentWindow || t)
                }
                for (i = 0;
                    (s = h[i++]) && !e.isPropagationStopped();) e.type = i > 1 ? u : p.bindType || f, c = (ye.get(s, "events") || {})[e.type] && ye.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (e.result = c.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = f, o || e.isDefaultPrevented() || p._default && p._default.apply(h.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[f]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = f, r[f](), Z.event.triggered = void 0, a && (r[l] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = Z.event.fix(t);
            var e, n, r, o, i, s = [],
                a = B.call(arguments),
                u = (ye.get(this, "events") || {})[t.type] || [],
                l = Z.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (s = Z.event.handlers.call(this, t, u), e = 0;
                    (o = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, r = ((Z.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, r, o, i, s = [],
                a = e.delegateCount,
                u = t.target;
            if (a && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== t.type) {
                        for (r = [], n = 0; a > n; n++) i = e[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? Z(o, this).index(u) >= 0 : Z.find(o, this, null, [u]).length), r[o] && r.push(i);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, o, i = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Q, r = n.documentElement, o = n.body, t.pageX = e.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), t.which || void 0 === i || (t.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[Z.expando]) return t;
            var e, n, r, o = t.type,
                i = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Ae.test(o) ? this.mouseHooks : Ee.test(o) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, t = new Z.Event(i), e = r.length; e--;) n = r[e], t[n] = i[n];
            return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, i) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return Z.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, r) {
            var o = Z.extend(new Z.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(o, null, e) : Z.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, Z.Event = function(t, e) {
        return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? l : c) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = l, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        Z.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = this,
                    o = t.relatedTarget,
                    i = t.handleObj;
                return (!o || o !== r && !Z.contains(r, o)) && (t.type = i.origType, n = i.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), J.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            Z.event.simulate(e, t.target, Z.event.fix(t), !0)
        };
        Z.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = ye.access(r, e);
                o || r.addEventListener(t, n, !0), ye.access(r, e, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = ye.access(r, e) - 1;
                o ? ye.access(r, e, o) : (r.removeEventListener(t, n, !0), ye.remove(r, e))
            }
        }
    }), Z.fn.extend({
        on: function(t, e, n, r, o) {
            var i, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t) this.on(s, e, n, t[s], o);
                return this
            }
            if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === o && (i = r, r = function(t) {
                return Z().off(t), i.apply(this, arguments)
            }, r.guid = i.guid || (i.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, t, r, n, e)
            })
        },
        one: function(t, e, n, r) {
            return this.on(t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, o;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, Z(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                Z.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? Z.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Me = /<([\w:]+)/,
        De = /<|&#?\w+;/,
        Pe = /<(?:script|style|link)/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^$|\/(?:java|ecma)script/i,
        Oe = /^true\/(.*)/,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td, Z.extend({
        clone: function(t, e, n) {
            var r, o, i, s, a = t.cloneNode(!0),
                u = Z.contains(t.ownerDocument, t);
            if (!(J.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                for (s = y(a), i = y(t), r = 0, o = i.length; o > r; r++) v(i[r], s[r]);
            if (e)
                if (n)
                    for (i = i || y(t), s = s || y(a), r = 0, o = i.length; o > r; r++) m(i[r], s[r]);
                else m(t, a);
            return s = y(a, "script"), s.length > 0 && g(s, !u && y(t, "script")), a
        },
        buildFragment: function(t, e, n, r) {
            for (var o, i, s, a, u, l, c = e.createDocumentFragment(), p = [], h = 0, f = t.length; f > h; h++)
                if (o = t[h], o || 0 === o)
                    if ("object" === Z.type(o)) Z.merge(p, o.nodeType ? [o] : o);
                    else if (De.test(o)) {
                for (i = i || c.appendChild(e.createElement("div")), s = (Me.exec(o) || ["", ""])[1].toLowerCase(), a = Fe[s] || Fe._default, i.innerHTML = a[1] + o.replace(Ne, "<$1></$2>") + a[2], l = a[0]; l--;) i = i.lastChild;
                Z.merge(p, i.childNodes), i = c.firstChild, i.textContent = ""
            } else p.push(e.createTextNode(o));
            for (c.textContent = "", h = 0; o = p[h++];)
                if ((!r || -1 === Z.inArray(o, r)) && (u = Z.contains(o.ownerDocument, o), i = y(c.appendChild(o), "script"), u && g(i), n))
                    for (l = 0; o = i[l++];) je.test(o.type || "") && n.push(o);
            return c
        },
        cleanData: function(t) {
            for (var e, n, r, o, i = Z.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                if (Z.acceptData(n) && (o = n[ye.expando], o && (e = ye.cache[o]))) {
                    if (e.events)
                        for (r in e.events) i[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, e.handle);
                    ye.cache[o] && delete ye.cache[o]
                }
                delete ve.cache[n[ve.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(t) {
            return me(this, function(t) {
                return void 0 === t ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, r = t ? Z.filter(t, this) : this, o = 0; null != (n = r[o]); o++) e || 1 !== n.nodeType || Z.cleanData(y(n)), n.parentNode && (e && Z.contains(n.ownerDocument, n) && g(y(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(y(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return Z.clone(this, t, e)
            })
        },
        html: function(t) {
            return me(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Pe.test(t) && !Fe[(Me.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ne, "<$1></$2>");
                    try {
                        for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (Z.cleanData(y(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, Z.cleanData(y(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = W.apply([], t);
            var n, r, o, i, s, a, u = 0,
                l = this.length,
                c = this,
                p = l - 1,
                h = t[0],
                g = Z.isFunction(h);
            if (g || l > 1 && "string" == typeof h && !J.checkClone && Ie.test(h)) return this.each(function(n) {
                var r = c.eq(n);
                g && (t[0] = h.call(this, n, r.html())), r.domManip(t, e)
            });
            if (l && (n = Z.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (o = Z.map(y(n, "script"), f), i = o.length; l > u; u++) s = n, u !== p && (s = Z.clone(s, !0, !0), i && Z.merge(o, y(s, "script"))), e.call(this[u], s, u);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, Z.map(o, d), u = 0; i > u; u++) s = o[u], je.test(s.type || "") && !ye.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Le, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        Z.fn[t] = function(t) {
            for (var n, r = [], o = Z(t), i = o.length - 1, s = 0; i >= s; s++) n = s === i ? this : this.clone(!0), Z(o[s])[e](n), V.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var qe, He = {},
        Ge = /^margin/,
        ze = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
        Be = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(i);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top, r = "4px" === e.width, o.removeChild(i)
        }
        var n, r, o = Q.documentElement,
            i = Q.createElement("div"),
            s = Q.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === s.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(s), t.getComputedStyle && Z.extend(J, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == r && e(), r
            },
            reliableMarginRight: function() {
                var e, n = s.appendChild(Q.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(i), e = !parseFloat(t.getComputedStyle(n, null).marginRight), o.removeChild(i), s.removeChild(n), e
            }
        }))
    }(), Z.swap = function(t, e, n, r) {
        var o, i, s = {};
        for (i in e) s[i] = t.style[i], t.style[i] = e[i];
        o = n.apply(t, r || []);
        for (i in e) t.style[i] = s[i];
        return o
    };
    var We = /^(none|table(?!-c[ea]).+)/,
        Ve = new RegExp("^(" + be + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + be + ")", "i"),
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $e = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ye = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = b(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            "float": "cssFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, i, s, a = Z.camelCase(e),
                    u = t.style;
                return e = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[e] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, r)) ? o : u[e] : (i = typeof n, "string" === i && (o = Xe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(t, e)), i = "number"), null != n && n === n && ("number" !== i || Z.cssNumber[a] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, r)) || (u[e] = n)), void 0)
            }
        },
        css: function(t, e, n, r) {
            var o, i, s, a = Z.camelCase(e);
            return e = Z.cssProps[a] || (Z.cssProps[a] = C(t.style, a)), s = Z.cssHooks[e] || Z.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = b(t, e, r)), "normal" === o && e in $e && (o = $e[e]), "" === n || n ? (i = parseFloat(o), n === !0 || Z.isNumeric(i) ? i || 0 : o) : o
        }
    }), Z.each(["height", "width"], function(t, e) {
        Z.cssHooks[e] = {
            get: function(t, n, r) {
                return n ? We.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Ue, function() {
                    return E(t, e, r)
                }) : E(t, e, r) : void 0
            },
            set: function(t, n, r) {
                var o = r && Be(t);
                return T(t, n, r ? S(t, e, r, "border-box" === Z.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), Z.cssHooks.marginRight = _(J.reliableMarginRight, function(t, e) {
        return e ? Z.swap(t, {
            display: "inline-block"
        }, b, [t, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        Z.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[t + _e[r] + e] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, Ge.test(t) || (Z.cssHooks[t + e].set = T)
    }), Z.fn.extend({
        css: function(t, e) {
            return me(this, function(t, e, n) {
                var r, o, i = {},
                    s = 0;
                if (Z.isArray(e)) {
                    for (r = Be(t), o = e.length; o > s; s++) i[e[s]] = Z.css(t, e[s], !1, r);
                    return i
                }
                return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = R, R.prototype = {
        constructor: R,
        init: function(t, e, n, r, o, i) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = i || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = R.propHooks[this.prop];
            return t && t.get ? t.get(this) : R.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = R.propHooks[this.prop];
            return this.pos = e = this.options.duration ? Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, Z.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, Z.fx = R.prototype.init, Z.fx.step = {};
    var Je, Qe, Ke = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
        tn = /queueHooks$/,
        en = [D],
        nn = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    r = n.cur(),
                    o = Ze.exec(e),
                    i = o && o[3] || (Z.cssNumber[t] ? "" : "px"),
                    s = (Z.cssNumber[t] || "px" !== i && +r) && Ze.exec(Z.css(n.elem, t)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== i) {
                    i = i || s[3], o = o || [], s = +r || 1;
                    do a = a || ".5", s /= a, Z.style(n.elem, t, s + i); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return o && (s = n.start = +s || +r || 0, n.unit = i, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    Z.Animation = Z.extend(I, {
            tweener: function(t, e) {
                Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, r = 0, o = t.length; o > r; r++) n = t[r], nn[n] = nn[n] || [], nn[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? en.unshift(t) : en.push(t)
            }
        }), Z.speed = function(t, e, n) {
            var r = t && "object" == typeof t ? Z.extend({}, t) : {
                complete: n || !n && e || Z.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !Z.isFunction(e) && e
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
            }, r
        }, Z.fn.extend({
            fadeTo: function(t, e, n, r) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, r)
            },
            animate: function(t, e, n, r) {
                var o = Z.isEmptyObject(t),
                    i = Z.speed(e, n, r),
                    s = function() {
                        var e = I(this, Z.extend({}, t), i);
                        (o || ye.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || i.queue === !1 ? this.each(s) : this.queue(i.queue, s)
            },
            stop: function(t, e, n) {
                var r = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        i = Z.timers,
                        s = ye.get(this);
                    if (o) s[o] && s[o].stop && r(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && tn.test(o) && r(s[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != t && i[o].queue !== t || (i[o].anim.stop(n), e = !1, i.splice(o, 1));
                    (e || !n) && Z.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ye.get(this),
                        r = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        i = Z.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, Z.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === t && (i[e].anim.stop(!0), i.splice(e, 1));
                    for (e = 0; s > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(t, e) {
            var n = Z.fn[e];
            Z.fn[e] = function(t, r, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, r, o)
            }
        }), Z.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            Z.fn[t] = function(t, n, r) {
                return this.animate(e, t, n, r)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var t, e = 0,
                n = Z.timers;
            for (Je = Z.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || Z.fx.stop(), Je = void 0
        }, Z.fx.timer = function(t) {
            Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Qe), Qe = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(t, e) {
            return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var r = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var t = Q.createElement("input"),
                e = Q.createElement("select"),
                n = e.appendChild(Q.createElement("option"));
            t.type = "checkbox", J.checkOn = "" !== t.value, J.optSelected = n.selected, e.disabled = !0, J.optDisabled = !n.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", J.radioValue = "t" === t.value
        }();
    var rn, on, sn = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(t, e) {
            return me(this, Z.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                Z.removeAttr(this, t)
            })
        }
    }), Z.extend({
        attr: function(t, e, n) {
            var r, o, i = t.nodeType;
            if (t && 3 !== i && 8 !== i && 2 !== i) return typeof t.getAttribute === Se ? Z.prop(t, e, n) : (1 === i && Z.isXMLDoc(t) || (e = e.toLowerCase(), r = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? on : rn)), void 0 === n ? r && "get" in r && null !== (o = r.get(t, e)) ? o : (o = Z.find.attr(t, e), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, r, o = 0,
                i = e && e.match(fe);
            if (i && 1 === t.nodeType)
                for (; n = i[o++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!J.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), on = {
        set: function(t, e, n) {
            return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = sn[e] || Z.find.attr;
        sn[e] = function(t, e, r) {
            var o, i;
            return r || (i = sn[e], sn[e] = o, o = null != n(t, e, r) ? e.toLowerCase() : null, sn[e] = i), o
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(t, e) {
            return me(this, Z.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[Z.propFix[t] || t]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var r, o, i, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return i = 1 !== s || !Z.isXMLDoc(t), i && (e = Z.propFix[e] || e, o = Z.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(t, n, e)) ? r : t[e] = n : o && "get" in o && null !== (r = o.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || an.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), J.optSelected || (Z.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(t) {
            var e, n, r, o, i, s, a = "string" == typeof t && t,
                u = 0,
                l = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(fe) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (i = 0; o = e[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = Z.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, o, i, s, a = 0 === arguments.length || "string" == typeof t && t,
                u = 0,
                l = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(fe) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (i = 0; o = e[i++];)
                            for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                        s = t ? Z.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ? function(n) {
                Z(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, r = 0, o = Z(this), i = t.match(fe) || []; e = i[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(n === Se || "boolean" === n) && (this.className && ye.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ye.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var ln = /\r/g;
    Z.fn.extend({
        val: function(t) {
            var e, n, r, o = this[0]; {
                if (arguments.length) return r = Z.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = r ? t.call(this, n, Z(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                });
                if (o) return e = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = Z.find.attr(t, "value");
                    return null != e ? e : Z.trim(Z.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, o = t.selectedIndex, i = "select-one" === t.type || 0 > o, s = i ? null : [], a = i ? o + 1 : r.length, u = 0 > o ? a : i ? o : 0; a > u; u++)
                        if (n = r[u], !(!n.selected && u !== o || (J.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (e = Z(n).val(), i) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, r, o = t.options, i = Z.makeArray(e), s = o.length; s--;) r = o[s], (r.selected = Z.inArray(r.value, i) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), i
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(t, e) {
                return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
            }
        }, J.checkOn || (Z.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        Z.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), Z.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var cn = Z.now(),
        pn = /\?/;
    Z.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, Z.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (r) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
    };
    var hn = /#.*$/,
        fn = /([?&])_=[^&]*/,
        dn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mn = /^(?:GET|HEAD)$/,
        yn = /^\/\//,
        vn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        wn = {},
        xn = {},
        bn = "*/".concat("*"),
        _n = t.location.href,
        Cn = vn.exec(_n.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _n,
            type: "GET",
            isLocal: gn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bn,
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
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? L(L(t, Z.ajaxSettings), e) : L(Z.ajaxSettings, t)
        },
        ajaxPrefilter: j(wn),
        ajaxTransport: j(xn),
        ajax: function(t, e) {
            function n(t, e, n, s) {
                var u, c, y, v, x, _ = e;
                2 !== w && (w = 2, a && clearTimeout(a), r = void 0, i = s || "", b.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (v = F(p, b, n)), v = q(p, v, b, u), u ? (p.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (Z.lastModified[o] = x), x = b.getResponseHeader("etag"), x && (Z.etag[o] = x)), 204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = v.state, c = v.data, y = v.error, u = !y)) : (y = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || _) + "", u ? d.resolveWith(h, [c, _, b]) : d.rejectWith(h, [b, _, y]), b.statusCode(m), m = void 0, l && f.trigger(u ? "ajaxSuccess" : "ajaxError", [b, p, u ? c : y]), g.fireWith(h, [b, _]), l && (f.trigger("ajaxComplete", [b, p]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var r, o, i, s, a, u, l, c, p = Z.ajaxSetup({}, e),
                h = p.context || p,
                f = p.context && (h.nodeType || h.jquery) ? Z(h) : Z.event,
                d = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                w = 0,
                x = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!s)
                                for (s = {}; e = dn.exec(i);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? i : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return w || (t = v[n] = v[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t) m[e] = [m[e], t[e]];
                            else b.always(t[b.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return r && r.abort(e), n(0, e), this
                    }
                };
            if (d.promise(b).complete = g.add, b.success = b.done, b.error = b.fail, p.url = ((t || p.url || _n) + "").replace(hn, "").replace(yn, Cn[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = Z.trim(p.dataType || "*").toLowerCase().match(fe) || [""], null == p.crossDomain && (u = vn.exec(p.url.toLowerCase()), p.crossDomain = !(!u || u[1] === Cn[1] && u[2] === Cn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = Z.param(p.data, p.traditional)), O(wn, p, e, b), 2 === w) return b;
            l = Z.event && p.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !mn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (pn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = fn.test(o) ? o.replace(fn, "$1_=" + cn++) : o + (pn.test(o) ? "&" : "?") + "_=" + cn++)), p.ifModified && (Z.lastModified[o] && b.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && b.setRequestHeader("If-None-Match", Z.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", p.contentType), b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + bn + "; q=0.01" : "") : p.accepts["*"]);
            for (c in p.headers) b.setRequestHeader(c, p.headers[c]);
            if (p.beforeSend && (p.beforeSend.call(h, b, p) === !1 || 2 === w)) return b.abort();
            x = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[c](p[c]);
            if (r = O(xn, p, e, b)) {
                b.readyState = 1, l && f.trigger("ajaxSend", [b, p]), p.async && p.timeout > 0 && (a = setTimeout(function() {
                    b.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, r.send(y, n)
                } catch (_) {
                    if (!(2 > w)) throw _;
                    n(-1, _)
                }
            } else n(-1, "No Transport");
            return b
        },
        getJSON: function(t, e, n) {
            return Z.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return Z.get(t, void 0, e, "script")
        }
    }), Z.each(["get", "post"], function(t, e) {
        Z[e] = function(t, n, r, o) {
            return Z.isFunction(n) && (o = o || r, r = n, n = void 0), Z.ajax({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: r
            })
        }
    }), Z._evalUrl = function(t) {
        return Z.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(t) {
            var e;
            return Z.isFunction(t) ? this.each(function(e) {
                Z(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(Z.isFunction(t) ? function(e) {
                Z(this).wrapInner(t.call(this, e))
            } : function() {
                var e = Z(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = Z.isFunction(t);
            return this.each(function(n) {
                Z(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, Z.expr.filters.visible = function(t) {
        return !Z.expr.filters.hidden(t)
    };
    var Tn = /%20/g,
        Sn = /\[\]$/,
        En = /\r?\n/g,
        An = /^(?:submit|button|image|reset|file)$/i,
        Rn = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(t, e) {
        var n, r = [],
            o = function(t, e) {
                e = Z.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) H(n, t[n], e, o);
        return r.join("&").replace(Tn, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = Z.prop(this, "elements");
                return t ? Z.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !Z(this).is(":disabled") && Rn.test(this.nodeName) && !An.test(t) && (this.checked || !Te.test(t))
            }).map(function(t, e) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(En, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var kn = 0,
        Nn = {},
        Mn = {
            0: 200,
            1223: 204
        },
        Dn = Z.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Nn) Nn[t]()
    }), J.cors = !!Dn && "withCredentials" in Dn, J.ajax = Dn = !!Dn, Z.ajaxTransport(function(t) {
        var e;
        return J.cors || Dn && !t.crossDomain ? {
            send: function(n, r) {
                var o, i = t.xhr(),
                    s = ++kn;
                if (i.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) i[o] = t.xhrFields[o];
                t.mimeType && i.overrideMimeType && i.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) i.setRequestHeader(o, n[o]);
                e = function(t) {
                    return function() {
                        e && (delete Nn[s], e = i.onload = i.onerror = null, "abort" === t ? i.abort() : "error" === t ? r(i.status, i.statusText) : r(Mn[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                            text: i.responseText
                        } : void 0, i.getAllResponseHeaders()))
                    }
                }, i.onload = e(), i.onerror = e("error"), e = Nn[s] = e("abort");
                try {
                    i.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return Z.globalEval(t), t
            }
        }
    }), Z.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), Z.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(r, o) {
                    e = Z("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), Q.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Pn = [],
        In = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Pn.pop() || Z.expando + "_" + cn++;
            return this[t] = !0, t
        }
    }), Z.ajaxPrefilter("json jsonp", function(e, n, r) {
        var o, i, s, a = e.jsonp !== !1 && (In.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && In.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(In, "$1" + o) : e.jsonp !== !1 && (e.url += (pn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return s || Z.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", i = t[o], t[o] = function() {
            s = arguments
        }, r.always(function() {
            t[o] = i, e[o] && (e.jsonpCallback = n.jsonpCallback, Pn.push(o)), s && Z.isFunction(i) && i(s[0]), s = i = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || Q;
        var r = se.exec(t),
            o = !n && [];
        return r ? [e.createElement(r[1])] : (r = Z.buildFragment([t], e, o), o && o.length && Z(o).remove(), Z.merge([], r.childNodes))
    };
    var jn = Z.fn.load;
    Z.fn.load = function(t, e, n) {
        if ("string" != typeof t && jn) return jn.apply(this, arguments);
        var r, o, i, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (r = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && Z.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            i = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(t)).find(r) : t)
        }).complete(n && function(t, e) {
            s.each(n, i || [t.responseText, e, t])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        Z.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), Z.expr.filters.animated = function(t) {
        return Z.grep(Z.timers, function(e) {
            return t === e.elem
        }).length
    };
    var On = t.document.documentElement;
    Z.offset = {
        setOffset: function(t, e, n) {
            var r, o, i, s, a, u, l, c = Z.css(t, "position"),
                p = Z(t),
                h = {};
            "static" === c && (t.style.position = "relative"), a = p.offset(), i = Z.css(t, "top"), u = Z.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1, l ? (r = p.position(), s = r.top, o = r.left) : (s = parseFloat(i) || 0, o = parseFloat(u) || 0), Z.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : p.css(h)
        }
    }, Z.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                Z.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                i = r && r.ownerDocument;
            if (i) return e = i.documentElement, Z.contains(e, r) ? (typeof r.getBoundingClientRect !== Se && (o = r.getBoundingClientRect()), n = G(i), {
                top: o.top + n.pageYOffset - e.clientTop,
                left: o.left + n.pageXOffset - e.clientLeft
            }) : o
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (r = t.offset()), r.top += Z.css(t[0], "borderTopWidth", !0), r.left += Z.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - r.top - Z.css(n, "marginTop", !0),
                    left: e.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || On; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                return t || On
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = "pageYOffset" === n;
        Z.fn[e] = function(o) {
            return me(this, function(e, o, i) {
                var s = G(e);
                return void 0 === i ? s ? s[n] : e[o] : void(s ? s.scrollTo(r ? t.pageXOffset : i, r ? i : t.pageYOffset) : e[o] = i)
            }, e, o, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(t, e) {
        Z.cssHooks[e] = _(J.pixelPosition, function(t, n) {
            return n ? (n = b(t, e), ze.test(n) ? Z(t).position()[e] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        Z.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, r) {
            Z.fn[r] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || o === !0 ? "margin" : "border");
                return me(this, function(e, n, r) {
                    var o;
                    return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? Z.css(e, n, s) : Z.style(e, n, r, s)
                }, e, i ? r : void 0, i, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Ln = t.jQuery,
        Fn = t.$;
    return Z.noConflict = function(e) {
        return t.$ === Z && (t.$ = Fn), e && t.jQuery === Z && (t.jQuery = Ln), Z
    }, typeof e === Se && (t.jQuery = t.$ = Z), Z
});
var shim = function() {
        window.requestDraw = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }
        }()
    }({}),
    constants = function() {
        var t = Math.PI;
        return {
            ARROW: "default",
            CROSS: "crosshair",
            HAND: "pointer",
            MOVE: "move",
            TEXT: "text",
            WAIT: "wait",
            HALF_PI: t / 2,
            PI: t,
            QUARTER_PI: t / 4,
            TAU: 2 * t,
            TWO_PI: 2 * t,
            DEGREES: "degrees",
            RADIANS: "radians",
            CORNER: "corner",
            CORNERS: "corners",
            RADIUS: "radius",
            RIGHT: "right",
            LEFT: "left",
            CENTER: "center",
            POINTS: "points",
            LINES: "lines",
            TRIANGLES: "triangles",
            TRIANGLE_FAN: "triangles_fan",
            TRIANGLE_STRIP: "triangles_strip",
            QUADS: "quads",
            QUAD_STRIP: "quad_strip",
            CLOSE: "close",
            OPEN: "open",
            CHORD: "chord",
            PIE: "pie",
            PROJECT: "square",
            SQUARE: "butt",
            ROUND: "round",
            BEVEL: "bevel",
            MITER: "miter",
            RGB: "rgb",
            HSB: "hsb",
            AUTO: "auto",
            ALT: 18,
            BACKSPACE: 8,
            CONTROL: 17,
            DELETE: 46,
            DOWN_ARROW: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT_ARROW: 37,
            OPTION: 18,
            RETURN: 13,
            RIGHT_ARROW: 39,
            SHIFT: 16,
            TAB: 9,
            UP_ARROW: 38,
            BLEND: "normal",
            ADD: "lighter",
            DARKEST: "darken",
            LIGHTEST: "lighten",
            DIFFERENCE: "difference",
            EXCLUSION: "exclusion",
            MULTIPLY: "multiply",
            SCREEN: "screen",
            REPLACE: "source-over",
            OVERLAY: "overlay",
            HARD_LIGHT: "hard-light",
            SOFT_LIGHT: "soft-light",
            DODGE: "color-dodge",
            BURN: "color-burn",
            NORMAL: "normal",
            ITALIC: "italic",
            BOLD: "bold",
            LINEAR: "linear",
            QUADRATIC: "quadratic",
            BEZIER: "bezier",
            CURVE: "curve"
        }
    }({}),
    core = function(t, e, n) {
        "use strict";
        var n = n,
            r = function(t, e) {
                this._setupDone = !1, this._pixelDensity = window.devicePixelRatio || 1, this._startTime = (new Date).getTime(), this._userNode = e, this._curElement = null, this._elements = [], this._preloadCount = 0, this._updateInterval = 0, this._isGlobal = !1, this._loop = !0, this._styles = [], this._defaultCanvasSize = {
                    width: 100,
                    height: 100
                }, this._events = {
                    mousemove: null,
                    mousedown: null,
                    mouseup: null,
                    click: null,
                    mousewheel: null,
                    mouseover: null,
                    mouseout: null,
                    keydown: null,
                    keyup: null,
                    keypress: null,
                    touchstart: null,
                    touchmove: null,
                    touchend: null,
                    resize: null,
                    blur: null
                }, this._loadingScreenId = "p5_loading", this._start = function() {
                    if (this._userNode && "string" == typeof this._userNode && (this._userNode = document.getElementById(this._userNode)), this._loadingScreen = document.getElementById(this._loadingScreenId), !this._loadingScreen) {
                        this._loadingScreen = document.createElement("loadingDiv"), this._loadingScreen.innerHTML = "loading...", this._loadingScreen.style.position = "absolute";
                        var t = this._userNode || document.body;
                        t.appendChild(this._loadingScreen)
                    }
                    this.createCanvas(this._defaultCanvasSize.width, this._defaultCanvasSize.height, !0);
                    var e = this.preload || window.preload,
                        n = this._isGlobal ? window : this;
                    e ? (this._preloadMethods.forEach(function(t) {
                        n[t] = function(e) {
                            return n._preload(t, e)
                        }
                    }), e(), 0 === this._preloadCount && (this._setup(), this._runFrames(), this._draw())) : (this._setup(), this._runFrames(), this._draw())
                }.bind(this), this._preload = function(t, e) {
                    var n = this._isGlobal ? window : this;
                    return n._setProperty("_preloadCount", n._preloadCount + 1), r.prototype[t].call(n, e, function() {
                        n._setProperty("_preloadCount", n._preloadCount - 1), 0 === n._preloadCount && (n._setup(), n._runFrames(), n._draw())
                    })
                }.bind(this), this._setup = function() {
                    var t = this._isGlobal ? window : this;
                    "function" == typeof t.preload && this._preloadMethods.forEach(function(e) {
                        t[e] = r.prototype[e]
                    }), "function" == typeof t.setup && t.setup(), this.canvas.style.visibility = "", this.canvas.className = this.canvas.className.replace("p5_hidden", ""), this._setupDone = !0, this._loadingScreen.parentNode.removeChild(this._loadingScreen)
                }.bind(this), this._draw = function() {
                    var t = this.setup || window.setup,
                        e = (new Date).getTime();
                    this._frameRate = 1e3 / (e - this._lastFrameTime), this._lastFrameTime = e;
                    var n = this.draw || window.draw;
                    this._loop && (this._drawInterval && clearInterval(this._drawInterval), this._drawInterval = setTimeout(function() {
                        window.requestDraw(this._draw.bind(this))
                    }.bind(this), 1e3 / this._targetFrameRate)), "function" == typeof n && (this.push(), "undefined" == typeof t && this.scale(this._pixelDensity, this._pixelDensity), this._registeredMethods.pre.forEach(function(t) {
                        t.call(this)
                    }), n(), this._registeredMethods.post.forEach(function(t) {
                        t.call(this)
                    }), this.pop()), this._updatePMouseCoords(), this._updatePTouchCoords()
                }.bind(this), this._runFrames = function() {
                    this._updateInterval && clearInterval(this._updateInterval), this._updateInterval = setInterval(function() {
                        this._setProperty("frameCount", this.frameCount + 1)
                    }.bind(this), 1e3 / this._targetFrameRate)
                }.bind(this), this._setProperty = function(t, e) {
                    this[t] = e, this._isGlobal && (window[t] = e)
                }.bind(this), this.remove = function() {
                    if (this._curElement) {
                        this._loop = !1, this._drawInterval && clearTimeout(this._drawInterval), this._updateInterval && clearTimeout(this._updateInterval);
                        for (var t in this._events) window.removeEventListener(t, this._events[t]);
                        for (var e = 0; e < this._elements.length; e++) {
                            var n = this._elements[e];
                            n.elt.parentNode && n.elt.parentNode.removeChild(n.elt);
                            for (var o in n._events) n.elt.removeEventListener(o, n._events[o])
                        }
                        var i = this;
                        if (this._registeredMethods.remove.forEach(function(t) {
                                "undefined" != typeof t && t.call(i)
                            }), this._isGlobal) {
                            for (var s in r.prototype) try {
                                delete window[s]
                            } catch (a) {
                                window[s] = void 0
                            }
                            for (var u in this)
                                if (this.hasOwnProperty(u)) try {
                                    delete window[u]
                                } catch (a) {
                                    window[u] = void 0
                                }
                        }
                    }
                }.bind(this);
                for (var o in n) r.prototype[o] = n[o];
                if (t) t(this);
                else {
                    this._isGlobal = !0;
                    for (var i in r.prototype)
                        if ("function" == typeof r.prototype[i]) {
                            var s = i.substring(2);
                            this._events.hasOwnProperty(s) || (window[i] = r.prototype[i].bind(this))
                        } else window[i] = r.prototype[i];
                    for (var a in this) this.hasOwnProperty(a) && (window[a] = this[a])
                }
                for (var u in this._events) {
                    var l = this["on" + u];
                    if (l) {
                        var c = l.bind(this);
                        window.addEventListener(u, c), this._events[u] = c
                    }
                }
                var p = this;
                window.addEventListener("focus", function() {
                    p._setProperty("focused", !0)
                }), window.addEventListener("blur", function() {
                    p._setProperty("focused", !1)
                }), "complete" === document.readyState ? this._start() : window.addEventListener("load", this._start.bind(this), !1)
            };
        return r.prototype._preloadMethods = ["loadJSON", "loadImage", "loadStrings", "loadXML", "loadShape", "loadTable"], r.prototype._registeredMethods = {
            pre: [],
            post: [],
            remove: []
        }, r.prototype.registerPreloadMethod = function(t) {
            r.prototype._preloadMethods.push(t)
        }.bind(this), r.prototype.registerMethod = function(t, e) {
            r.prototype._registeredMethods.hasOwnProperty(t) || (r.prototype._registeredMethods[t] = []), r.prototype._registeredMethods[t].push(e)
        }.bind(this), r
    }({}, shim, constants),
    p5Color = function(t, e, n) {
        var r = e,
            n = n;
        return r.Color = function(t, e) {
            if (e instanceof Array) this.rgba = e;
            else {
                var o = r.Color._getFormattedColor.apply(t, e);
                t._colorMode === n.HSB ? (this.hsba = o, this.rgba = r.Color._getRGB(o)) : this.rgba = o
            }
            var i = r.Color._normalizeColorArray.call(t, this.rgba);
            return this.colorString = r.Color._getColorString(i), this
        }, r.Color._getFormattedColor = function() {
            if (arguments[0] instanceof Array) return r.Color.getNormalizedColor.apply(this, arguments[0]);
            var t, e, o, i;
            return arguments.length >= 3 ? (t = arguments[0], e = arguments[1], o = arguments[2], i = "number" == typeof arguments[3] ? arguments[3] : 255) : (this._colorMode === n.RGB ? t = e = o = arguments[0] : (t = o = arguments[0], e = 0), i = "number" == typeof arguments[1] ? arguments[1] : 255), [t, e, o, i]
        }, r.Color._normalizeColorArray = function(t) {
            var e = this._colorMode === n.RGB,
                r = e ? this._maxRGB : this._maxHSB;
            return t[0] *= 255 / r[0], t[1] *= 255 / r[1], t[2] *= 255 / r[2], t[3] *= 255 / r[3], t
        }, r.Color._getRGB = function(t) {
            var e = t[0],
                n = t[1],
                r = t[2];
            e /= 255, n /= 255, r /= 255;
            var o = [];
            if (0 === n) o = [Math.round(255 * r), Math.round(255 * r), Math.round(255 * r), t[3]];
            else {
                var i = 6 * e;
                6 === i && (i = 0);
                var s, a, u, l = Math.floor(i),
                    c = r * (1 - n),
                    p = r * (1 - n * (i - l)),
                    h = r * (1 - n * (1 - (i - l)));
                0 === l ? (s = r, a = h, u = c) : 1 === l ? (s = p, a = r, u = c) : 2 === l ? (s = c, a = r, u = h) : 3 === l ? (s = c, a = p, u = r) : 4 === l ? (s = h, a = c, u = r) : (s = r, a = c, u = p), o = [Math.round(255 * s), Math.round(255 * a), Math.round(255 * u), t[3]]
            }
            return o
        }, r.Color._getHSB = function(t) {
            var e, n, r = t[0] / 255,
                o = t[1] / 255,
                i = t[2] / 255,
                s = Math.min(r, o, i),
                a = Math.max(r, o, i),
                u = a - s,
                l = a;
            if (0 === u) e = 0, n = 0;
            else {
                n = u / a;
                var c = ((a - r) / 6 + u / 2) / u,
                    p = ((a - o) / 6 + u / 2) / u,
                    h = ((a - i) / 6 + u / 2) / u;
                r === a ? e = h - p : o === a ? e = 1 / 3 + c - h : i === a && (e = 2 / 3 + p - c), 0 > e && (e += 1), e > 1 && (e -= 1)
            }
            return [Math.round(255 * e), Math.round(255 * n), Math.round(255 * l), t[3]]
        }, r.Color._getColorString = function(t) {
            for (var e = 0; 3 > e; e++) t[e] = Math.floor(t[e]);
            var n = "undefined" != typeof t[3] ? t[3] / 255 : 1;
            return "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + n + ")"
        }, r.Color._getCanvasColor = function() {
            if (arguments[0] instanceof r.Color) {
                if (1 === arguments.length) return arguments[0].colorString;
                var t = arguments[0].rgba;
                return t[3] = arguments[1], t = r.Color._normalizeColorArray.call(this, t), r.Color._getColorString(t)
            }
            if (arguments[0] instanceof Array) {
                if (1 === arguments.length) return r.Color._getColorString(arguments[0]);
                var e = this._colorMode === n.RGB,
                    o = e ? this._maxRGB[3] : this._maxHSB[3];
                return arguments[0][3] = 255 * arguments[1] / o, r.Color._getColorString(arguments[0])
            }
            var i = r.Color._getFormattedColor.apply(this, arguments);
            return i = r.Color._normalizeColorArray.call(this, i), this._colorMode === n.HSB && (i = r.Color._getRGB(i)), r.Color._getColorString(i)
        }, r.Color
    }({}, core, constants),
    p5Element = function(t, e) {
        function n(t, e, n) {
            var r = e.bind(n);
            n.elt.addEventListener(t, r, !1), n._events[t] = r
        }
        var r = e;
        return r.Element = function(t, e) {
            this.elt = t, this._pInst = e, this._events = {}, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight
        }, r.Element.prototype.parent = function(t) {
            return "string" == typeof t ? t = document.getElementById(t) : t instanceof r.Element && (t = t.elt), t.appendChild(this.elt), this
        }, r.Element.prototype.id = function(t) {
            return this.elt.id = t, this
        }, r.Element.prototype.class = function(t) {
            return this.elt.className += " " + t, this
        }, r.Element.prototype.mousePressed = function(t) {
            return n("mousedown", t, this), n("touchstart", t, this), this
        }, r.Element.prototype.mouseWheel = function(t) {
            return n("mousewheel", t, this), this
        }, r.Element.prototype.mouseReleased = function(t) {
            return n("mouseup", t, this), n("touchend", t, this), this
        }, r.Element.prototype.mouseClicked = function(t) {
            return n("click", t, this), this
        }, r.Element.prototype.mouseMoved = function(t) {
            return n("mousemove", t, this), n("touchmove", t, this), this
        }, r.Element.prototype.mouseOver = function(t) {
            return n("mouseover", t, this), this
        }, r.Element.prototype.mouseOut = function(t) {
            return n("mouseout", t, this), this
        }, r.Element.prototype.touchStarted = function(t) {
            return n("touchstart", t, this), n("mousedown", t, this), this
        }, r.Element.prototype.touchMoved = function(t) {
            return n("touchmove", t, this), n("mousemove", t, this), this
        }, r.Element.prototype.touchEnded = function(t) {
            return n("touchend", t, this), n("mouseup", t, this), this
        }, r.Element.prototype._setProperty = function(t, e) {
            this[t] = e
        }, r.Element
    }({}, core),
    p5Graphics = function(t, e, n) {
        var r = e,
            n = n;
        return r.Graphics = function(t, e, n) {
            r.Element.call(this, t, e), this.canvas = t, this.drawingContext = this.canvas.getContext("2d"), this._pInst = e, n ? (this._isMainCanvas = !0, this._pInst._setProperty("_curElement", this), this._pInst._setProperty("canvas", this.canvas), this._pInst._setProperty("drawingContext", this.drawingContext), this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height)) : (this.canvas.style.display = "none", this._styles = [])
        }, r.Graphics.prototype = Object.create(r.Element.prototype), r.Graphics.prototype._applyDefaults = function() {
            this.drawingContext.fillStyle = "#FFFFFF", this.drawingContext.strokeStyle = "#000000", this.drawingContext.lineCap = n.ROUND, this.drawingContext.font = "normal 12px sans-serif"
        }, r.Graphics.prototype.resize = function(t, e) {
            this.width = t, this.height = e, this.elt.width = t * this._pInst._pixelDensity, this.elt.height = e * this._pInst._pixelDensity, this.elt.style.width = t + "px", this.elt.style.height = e + "px", this._isMainCanvas && (this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height)), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity)
        }, r.Graphics
    }({}, core, constants),
    filters = function() {
        "use strict";

        function t(t) {
            var e = 3.5 * t | 0;
            if (e = 1 > e ? 1 : 248 > e ? e : 248, r !== e) {
                r = e, o = 1 + r << 1, i = new Int32Array(o), s = new Array(o);
                for (var n = 0; o > n; n++) s[n] = new Int32Array(256);
                for (var a, u, l, c, p = 1, h = e - 1; e > p; p++) {
                    i[e + p] = i[h] = u = h * h, l = s[e + p], c = s[h--];
                    for (var f = 0; 256 > f; f++) l[f] = c[f] = u * f
                }
                a = i[e] = e * e, l = s[e];
                for (var d = 0; 256 > d; d++) l[d] = a * d
            }
        }

        function e(e, a) {
            for (var u = n._toPixels(e), l = e.width, c = e.height, p = l * c, h = new Int32Array(p), f = 0; p > f; f++) h[f] = n._getARGB(u, f);
            var d, g, m, y, v, w, x, b, _, C, T = new Int32Array(p),
                S = new Int32Array(p),
                E = new Int32Array(p),
                A = new Int32Array(p),
                R = 0;
            t(a);
            var k, N, M, D;
            for (N = 0; c > N; N++) {
                for (k = 0; l > k; k++) {
                    if (y = m = g = v = d = 0, w = k - r, 0 > w) C = -w, w = 0;
                    else {
                        if (w >= l) break;
                        C = 0
                    }
                    for (M = C; o > M && !(w >= l); M++) {
                        var P = h[w + R];
                        D = s[M], v += D[(-16777216 & P) >>> 24], g += D[(16711680 & P) >> 16], m += D[(65280 & P) >> 8], y += D[255 & P], d += i[M], w++
                    }
                    x = R + k, T[x] = v / d, S[x] = g / d, E[x] = m / d, A[x] = y / d
                }
                R += l
            }
            for (R = 0, b = -r, _ = b * l, N = 0; c > N; N++) {
                for (k = 0; l > k; k++) {
                    if (y = m = g = v = d = 0, 0 > b) C = x = -b, w = k;
                    else {
                        if (b >= c) break;
                        C = 0, x = b, w = k + _
                    }
                    for (M = C; o > M && !(x >= c); M++) D = s[M], v += D[T[w]], g += D[S[w]], m += D[E[w]], y += D[A[w]], d += i[M], x++, w += l;
                    h[k + R] = v / d << 24 | g / d << 16 | m / d << 8 | y / d
                }
                R += l, _ += l, b++
            }
            n._setPixels(u, h)
        }
        var n = {};
        n._toPixels = function(t) {
            return t instanceof ImageData ? t.data : t.getContext("2d").getImageData(0, 0, t.width, t.height).data
        }, n._getARGB = function(t, e) {
            var n = 4 * e;
            return t[n + 3] << 24 & 4278190080 | t[n] << 16 & 16711680 | t[n + 1] << 8 & 65280 | 255 & t[n + 2]
        }, n._setPixels = function(t, e) {
            for (var n = 0, r = 0, o = t.length; o > r; r++) n = 4 * r, t[n + 0] = (16711680 & e[r]) >>> 16, t[n + 1] = (65280 & e[r]) >>> 8, t[n + 2] = 255 & e[r], t[n + 3] = (4278190080 & e[r]) >>> 24
        }, n._toImageData = function(t) {
            return t instanceof ImageData ? t : t.getContext("2d").getImageData(0, 0, t.width, t.height)
        }, n._createImageData = function(t, e) {
            return n._tmpCanvas = document.createElement("canvas"), n._tmpCtx = n._tmpCanvas.getContext("2d"), this._tmpCtx.createImageData(t, e)
        }, n.apply = function(t, e, n) {
            var r = t.getContext("2d"),
                o = r.getImageData(0, 0, t.width, t.height),
                i = e(o, n);
            i instanceof ImageData ? r.putImageData(i, 0, 0, 0, 0, t.width, t.height) : r.putImageData(o, 0, 0, 0, 0, t.width, t.height)
        }, n.threshold = function(t, e) {
            var r = n._toPixels(t);
            void 0 === e && (e = .5);
            for (var o = Math.floor(255 * e), i = 0; i < r.length; i += 4) {
                var s, a = r[i],
                    u = r[i + 1],
                    l = r[i + 2],
                    c = .2126 * a + .7152 * u + .0722 * l;
                s = c >= o ? 255 : 0, r[i] = r[i + 1] = r[i + 2] = s
            }
        }, n.gray = function(t) {
            for (var e = n._toPixels(t), r = 0; r < e.length; r += 4) {
                var o = e[r],
                    i = e[r + 1],
                    s = e[r + 2],
                    a = .2126 * o + .7152 * i + .0722 * s;
                e[r] = e[r + 1] = e[r + 2] = a
            }
        }, n.opaque = function(t) {
            for (var e = n._toPixels(t), r = 0; r < e.length; r += 4) e[r + 3] = 255;
            return e
        }, n.invert = function(t) {
            for (var e = n._toPixels(t), r = 0; r < e.length; r += 4) e[r] = 255 - e[r], e[r + 1] = 255 - e[r + 1], e[r + 2] = 255 - e[r + 2]
        }, n.posterize = function(t, e) {
            var r = n._toPixels(t);
            if (2 > e || e > 255) throw new Error("Level must be greater than 2 and less than 255 for posterize");
            for (var o = e - 1, i = 0; i < r.length; i += 4) {
                var s = r[i],
                    a = r[i + 1],
                    u = r[i + 2];
                r[i] = 255 * (s * e >> 8) / o, r[i + 1] = 255 * (a * e >> 8) / o, r[i + 2] = 255 * (u * e >> 8) / o
            }
        }, n.dilate = function(t) {
            for (var e, r, o, i, s, a, u, l, c, p, h, f, d, g, m, y, v, w = n._toPixels(t), x = 0, b = w.length ? w.length / 4 : 0, _ = new Int32Array(b); b > x;)
                for (e = x, r = x + t.width; r > x;) o = i = n._getARGB(w, x), u = x - 1, a = x + 1, l = x - t.width, c = x + t.width, e > u && (u = x), a >= r && (a = x), 0 > l && (l = 0), c >= b && (c = x), f = n._getARGB(w, l), h = n._getARGB(w, u), d = n._getARGB(w, c), p = n._getARGB(w, a), s = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o), m = 77 * (h >> 16 & 255) + 151 * (h >> 8 & 255) + 28 * (255 & h), g = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p), y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f), v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), m > s && (i = h, s = m), g > s && (i = p, s = g), y > s && (i = f, s = y), v > s && (i = d, s = v), _[x++] = i;
            n._setPixels(w, _)
        }, n.erode = function(t) {
            for (var e, r, o, i, s, a, u, l, c, p, h, f, d, g, m, y, v, w = n._toPixels(t), x = 0, b = w.length ? w.length / 4 : 0, _ = new Int32Array(b); b > x;)
                for (e = x, r = x + t.width; r > x;) o = i = n._getARGB(w, x), u = x - 1, a = x + 1, l = x - t.width, c = x + t.width, e > u && (u = x), a >= r && (a = x), 0 > l && (l = 0), c >= b && (c = x), f = n._getARGB(w, l), h = n._getARGB(w, u), d = n._getARGB(w, c), p = n._getARGB(w, a), s = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o), m = 77 * (h >> 16 & 255) + 151 * (h >> 8 & 255) + 28 * (255 & h), g = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p), y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f), v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), s > m && (i = h, s = m), s > g && (i = p, s = g), s > y && (i = f, s = y), s > v && (i = d, s = v), _[x++] = i;
            n._setPixels(w, _)
        };
        var r, o, i, s;
        return n.blur = function(t, n) {
            e(t, n)
        }, n
    }({}),
    p5Image = function(t, e, n) {
        "use strict";
        var r = e,
            o = n;
        return r.Image = function(t, e) {
            this.width = t, this.height = e, this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.drawingContext = this.canvas.getContext("2d"), this.pixels = []
        }, r.Image.prototype._setProperty = function(t, e) {
            this[t] = e
        }, r.Image.prototype.loadPixels = function() {
            r.prototype.loadPixels.call(this)
        }, r.Image.prototype.updatePixels = function(t, e, n, o) {
            r.prototype.updatePixels.call(this, t, e, n, o)
        }, r.Image.prototype.get = function(t, e, n, o) {
            return r.prototype.get.call(this, t, e, n, o)
        }, r.Image.prototype.set = function(t, e, n) {
            r.prototype.set.call(this, t, e, n)
        }, r.Image.prototype.resize = function(t, e) {
            t = t || this.canvas.width, e = e || this.canvas.height;
            var n = document.createElement("canvas");
            n.width = t, n.height = e, n.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, n.width, n.height), this.canvas.width = this.width = t, this.canvas.height = this.height = e, this.drawingContext.drawImage(n, 0, 0, t, e, 0, 0, t, e), this.pixels.length > 0 && this.loadPixels()
        }, r.Image.prototype.copy = function() {
            r.prototype.copy.apply(this, arguments)
        }, r.Image.prototype.mask = function(t) {
            void 0 === t && (t = this);
            var e = this.drawingContext.globalCompositeOperation,
                n = 1;
            t instanceof r.Graphics && (n = t._pInst._pixelDensity);
            var o = [t, 0, 0, n * t.width, n * t.height, 0, 0, this.width, this.height];
            this.drawingContext.globalCompositeOperation = "destination-out", this.copy.apply(this, o), this.drawingContext.globalCompositeOperation = e
        }, r.Image.prototype.filter = function(t, e) {
            o.apply(this.canvas, o[t.toLowerCase()], e)
        }, r.Image.prototype.blend = function() {
            r.prototype.blend.apply(this, arguments)
        }, r.Image.prototype.save = function(t, e) {
            var n;
            if (e) switch (e.toLowerCase()) {
                case "png":
                    n = "image/png";
                    break;
                case "jpeg":
                    n = "image/jpeg";
                    break;
                case "jpg":
                    n = "image/jpeg";
                    break;
                default:
                    n = "image/png"
            } else e = "png", n = "image/png";
            var o = "image/octet-stream",
                i = this.canvas.toDataURL(n);
            i = i.replace(n, o), r.prototype.downloadFile(i, t, e)
        }, r.Image
    }({}, core, filters),
    polargeometry = function() {
        return {
            degreesToRadians: function(t) {
                return 2 * Math.PI * t / 360
            },
            radiansToDegrees: function(t) {
                return 360 * t / (2 * Math.PI)
            }
        }
    }({}),
    p5Vector = function(t, e, n, r) {
        "use strict";
        var o = e,
            i = n,
            r = r;
        return o.Vector = function() {
            var t, e, n;
            arguments[0] instanceof o ? (this.p5 = arguments[0], t = arguments[1][0] || 0, e = arguments[1][1] || 0, n = arguments[1][2] || 0) : (t = arguments[0] || 0, e = arguments[1] || 0, n = arguments[2] || 0), this.x = t, this.y = e, this.z = n
        }, o.Vector.prototype.set = function(t, e, n) {
            return t instanceof o.Vector ? (this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0, this) : t instanceof Array ? (this.x = t[0] || 0, this.y = t[1] || 0, this.z = t[2] || 0, this) : (this.x = t || 0, this.y = e || 0, this.z = n || 0, this)
        }, o.Vector.prototype.get = function() {
            return this.p5 ? new o.Vector(this.p5, [this.x, this.y, this.z]) : new o.Vector(this.x, this.y, this.z)
        }, o.Vector.prototype.add = function(t, e, n) {
            return t instanceof o.Vector ? (this.x += t.x || 0, this.y += t.y || 0, this.z += t.z || 0, this) : t instanceof Array ? (this.x += t[0] || 0, this.y += t[1] || 0, this.z += t[2] || 0, this) : (this.x += t || 0, this.y += e || 0, this.z += n || 0, this)
        }, o.Vector.prototype.sub = function(t, e, n) {
            return t instanceof o.Vector ? (this.x -= t.x || 0, this.y -= t.y || 0, this.z -= t.z || 0, this) : t instanceof Array ? (this.x -= t[0] || 0, this.y -= t[1] || 0, this.z -= t[2] || 0, this) : (this.x -= t || 0, this.y -= e || 0, this.z -= n || 0, this)
        }, o.Vector.prototype.mult = function(t) {
            return this.x *= t || 0, this.y *= t || 0, this.z *= t || 0, this
        }, o.Vector.prototype.div = function(t) {
            return this.x /= t, this.y /= t, this.z /= t, this
        }, o.Vector.prototype.mag = function() {
            return Math.sqrt(this.magSq())
        }, o.Vector.prototype.magSq = function() {
            var t = this.x,
                e = this.y,
                n = this.z;
            return t * t + e * e + n * n
        }, o.Vector.prototype.dot = function(t, e, n) {
            return t instanceof o.Vector ? this.dot(t.x, t.y, t.z) : this.x * (t || 0) + this.y * (e || 0) + this.z * (n || 0)
        }, o.Vector.prototype.cross = function(t) {
            var e = this.y * t.z - this.z * t.y,
                n = this.z * t.x - this.x * t.z,
                r = this.x * t.y - this.y * t.x;
            return this.p5 ? new o.Vector(this.p5, [e, n, r]) : new o.Vector(e, n, r)
        }, o.Vector.prototype.dist = function(t) {
            var e = t.get().sub(this);
            return e.mag()
        }, o.Vector.prototype.normalize = function() {
            return this.div(this.mag())
        }, o.Vector.prototype.limit = function(t) {
            var e = this.magSq();
            return e > t * t && (this.div(Math.sqrt(e)), this.mult(t)), this
        }, o.Vector.prototype.setMag = function(t) {
            return this.normalize().mult(t)
        }, o.Vector.prototype.heading = function() {
            var t = Math.atan2(this.y, this.x);
            return this.p5 ? this.p5._angleMode === r.RADIANS ? t : i.radiansToDegrees(t) : t
        }, o.Vector.prototype.rotate = function(t) {
            this.p5 && this.p5._angleMode === r.DEGREES && (t = i.degreesToRadians(t));
            var e = this.heading() + t,
                n = this.mag();
            return this.x = Math.cos(e) * n, this.y = Math.sin(e) * n, this
        }, o.Vector.prototype.lerp = function(t, e, n, r) {
            return t instanceof o.Vector ? this.lerp(t.x, t.y, t.z, e) : (this.x += (t - this.x) * r || 0, this.y += (e - this.y) * r || 0, this.z += (n - this.z) * r || 0, this)
        }, o.Vector.prototype.array = function() {
            return [this.x || 0, this.y || 0, this.z || 0]
        }, o.Vector.fromAngle = function(t) {
            return this.p5 && this.p5._angleMode === r.DEGREES && (t = i.degreesToRadians(t)), this.p5 ? new o.Vector(this.p5, [Math.cos(t), Math.sin(t), 0]) : new o.Vector(Math.cos(t), Math.sin(t), 0)
        }, o.Vector.random2D = function() {
            var t;
            return t = this.p5 ? this.p5.random(this.p5._angleMode === r.DEGREES ? 360 : r.TWO_PI) : Math.random() * Math.PI * 2, this.fromAngle(t)
        }, o.Vector.random3D = function() {
            var t, e;
            this.p5 ? (t = this.p5.random(0, r.TWO_PI), e = this.p5.random(-1, 1)) : (t = Math.random() * Math.PI * 2, e = 2 * Math.random() - 1);
            var n = Math.sqrt(1 - e * e) * Math.cos(t),
                i = Math.sqrt(1 - e * e) * Math.sin(t);
            return this.p5 ? new o.Vector(this.p5, [n, i, e]) : new o.Vector(n, i, e)
        }, o.Vector.add = function(t, e) {
            return t.get().add(e)
        }, o.Vector.sub = function(t, e) {
            return t.get().sub(e)
        }, o.Vector.mult = function(t, e) {
            return t.get().mult(e)
        }, o.Vector.div = function(t, e) {
            return t.get().div(e)
        }, o.Vector.dot = function(t, e) {
            return t.dot(e)
        }, o.Vector.cross = function(t, e) {
            return t.cross(e)
        }, o.Vector.dist = function(t, e) {
            return t.dist(e)
        }, o.Vector.lerp = function(t, e, n) {
            return t.get().lerp(e, n)
        }, o.Vector.angleBetween = function(t, e) {
            var n = Math.acos(t.dot(e) / (t.mag() * e.mag()));
            return this.p5 && this.p5._angleMode === r.DEGREES && (n = i.radiansToDegrees(n)), n
        }, o.Vector
    }({}, core, polargeometry, constants),
    p5TableRow = function(t, e) {
        "use strict";
        var n = e;
        return n.TableRow = function(t, e) {
            var n = [],
                r = {};
            t && (e = e || ",", n = t.split(e));
            for (var o = 0; o < n.length; o++) {
                var i = o,
                    s = n[o];
                r[i] = s
            }
            this.arr = n, this.obj = r, this.table = null
        }, n.TableRow.prototype.set = function(t, e) {
            if ("string" == typeof t) {
                var n = this.table.columns.indexOf(t);
                if (!(n >= 0)) throw 'This table has no column named "' + t + '"';
                this.obj[t] = e, this.arr[n] = e
            } else {
                if (!(t < this.table.columns.length)) throw "Column #" + t + " is out of the range of this table";
                this.arr[t] = e;
                var r = this.table.columns[t];
                this.obj[r] = e
            }
        }, n.TableRow.prototype.setNum = function(t, e) {
            var n = parseFloat(e, 10);
            this.set(t, n)
        }, n.TableRow.prototype.setString = function(t, e) {
            var n = e.toString();
            this.set(t, n)
        }, n.TableRow.prototype.get = function(t) {
            return "string" == typeof t ? this.obj[t] : this.arr[t]
        }, n.TableRow.prototype.getNum = function(t) {
            var e;
            if (e = "string" == typeof t ? parseFloat(this.obj[t], 10) : parseFloat(this.arr[t], 10), "NaN" === e.toString()) throw "Error: " + this.obj[t] + " is NaN (Not a Number)";
            return e
        }, n.TableRow.prototype.getString = function(t) {
            return "string" == typeof t ? this.obj[t].toString() : this.arr[t].toString()
        }, n.TableRow
    }({}, core),
    p5Table = function(t, e) {
        "use strict";
        var n = e;
        return n.Table = function() {
            this.columns = [], this.rows = []
        }, n.Table.prototype.addRow = function(t) {
            var e = t || new n.TableRow;
            if ("undefined" == typeof e.arr || "undefined" == typeof e.obj) throw "invalid TableRow: " + e;
            return e.table = this, this.rows.push(e), e
        }, n.Table.prototype.removeRow = function(t) {
            this.rows[t].table = null;
            var e = this.rows.splice(t + 1, this.rows.length);
            this.rows.pop(), this.rows = this.rows.concat(e)
        }, n.Table.prototype.getRow = function(t) {
            return this.rows[t]
        }, n.Table.prototype.getRows = function() {
            return this.rows
        }, n.Table.prototype.findRow = function(t, e) {
            if ("string" == typeof e) {
                for (var n = 0; n < this.rows.length; n++)
                    if (this.rows[n].obj[e] === t) return this.rows[n]
            } else
                for (var r = 0; r < this.rows.length; r++)
                    if (this.rows[r].arr[e] === t) return this.rows[r];
            return null
        }, n.Table.prototype.findRows = function(t, e) {
            var n = [];
            if ("string" == typeof e)
                for (var r = 0; r < this.rows.length; r++) this.rows[r].obj[e] === t && n.push(this.rows[r]);
            else
                for (var o = 0; o < this.rows.length; o++) this.rows[o].arr[e] === t && n.push(this.rows[o]);
            return n
        }, n.Table.prototype.matchRow = function(t, e) {
            if ("number" == typeof e) {
                for (var n = 0; n < this.rows.length; n++)
                    if (this.rows[n].arr[e].match(t)) return this.rows[n]
            } else
                for (var r = 0; r < this.rows.length; r++)
                    if (this.rows[r].obj[e].match(t)) return this.rows[r];
            return null
        }, n.Table.prototype.matchRows = function(t, e) {
            var n = [];
            if ("number" == typeof e)
                for (var r = 0; r < this.rows.length; r++) this.rows[r].arr[e].match(t) && n.push(this.rows[r]);
            else
                for (var o = 0; o < this.rows.length; o++) this.rows[o].obj[e].match(t) && n.push(this.rows[o]);
            return n
        }, n.Table.prototype.getColumn = function(t) {
            var e = [];
            if ("string" == typeof t)
                for (var n = 0; n < this.rows.length; n++) e.push(this.rows[n].obj[t]);
            else
                for (var r = 0; r < this.rows.length; r++) e.push(this.rows[r].arr[t]);
            return e
        }, n.Table.prototype.clearRows = function() {
            delete this.rows, this.rows = []
        }, n.Table.prototype.addColumn = function(t) {
            var e = t || null;
            this.columns.push(e)
        }, n.Table.prototype.getColumnCount = function() {
            return this.columns.length
        }, n.Table.prototype.getRowCount = function() {
            return this.rows.length
        }, n.Table.prototype.removeTokens = function(t, e) {
            for (var n = function(t) {
                    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }, r = [], o = 0; o < t.length; o++) r.push(n(t.charAt(o)));
            var i = new RegExp(r.join("|"), "g");
            if ("undefined" == typeof e)
                for (var s = 0; s < this.columns.length; s++)
                    for (var a = 0; a < this.rows.length; a++) {
                        var u = this.rows[a].arr[s];
                        u = u.replace(i, ""), this.rows[a].arr[s] = u, this.rows[a].obj[this.columns[s]] = u
                    } else if ("string" == typeof e)
                        for (var l = 0; l < this.rows.length; l++) {
                            var c = this.rows[l].obj[e];
                            c = c.replace(i, ""), this.rows[l].obj[e] = c;
                            var p = this.columns.indexOf(e);
                            this.rows[l].arr[p] = c
                        } else
                            for (var h = 0; h < this.rows.length; h++) {
                                var f = this.rows[h].arr[e];
                                f = f.replace(i, ""), this.rows[h].arr[e] = f, this.rows[h].obj[this.columns[e]] = f
                            }
        }, n.Table.prototype.trim = function(t) {
            var e = new RegExp(" ", "g");
            if ("undefined" == typeof t)
                for (var n = 0; n < this.columns.length; n++)
                    for (var r = 0; r < this.rows.length; r++) {
                        var o = this.rows[r].arr[n];
                        o = o.replace(e, ""), this.rows[r].arr[n] = o, this.rows[r].obj[this.columns[n]] = o
                    } else if ("string" == typeof t)
                        for (var i = 0; i < this.rows.length; i++) {
                            var s = this.rows[i].obj[t];
                            s = s.replace(e, ""), this.rows[i].obj[t] = s;
                            var a = this.columns.indexOf(t);
                            this.rows[i].arr[a] = s
                        } else
                            for (var u = 0; u < this.rows.length; u++) {
                                var l = this.rows[u].arr[t];
                                l = l.replace(e, ""), this.rows[u].arr[t] = l, this.rows[u].obj[this.columns[t]] = l
                            }
        }, n.Table.prototype.removeColumn = function(t) {
            var e, n;
            "string" == typeof t ? (e = t, n = this.columns.indexOf(t), console.log("string")) : (n = t, e = this.columns[t]);
            var r = this.columns.splice(n + 1, this.columns.length);
            this.columns.pop(), this.columns = this.columns.concat(r);
            for (var o = 0; o < this.rows.length; o++) {
                var i = this.rows[o].arr,
                    s = i.splice(n + 1, i.length);
                i.pop(), this.rows[o].arr = i.concat(s), delete this.rows[o].obj[e]
            }
        }, n.Table
    }({}, core),
    colorcreating_reading = function(t, e) {
        "use strict";
        var n = e;
        return n.prototype.alpha = function(t) {
            if (t instanceof n.Color) return t.rgba[3];
            if (t instanceof Array) return t[3];
            throw new Error("Needs p5.Color or pixel array as argument.")
        }, n.prototype.blue = function(t) {
            if (t instanceof Array) return t[2];
            if (t instanceof n.Color) return t.rgba[2];
            throw new Error("Needs p5.Color or pixel array as argument.")
        }, n.prototype.brightness = function(t) {
            if (!t instanceof n.Color) throw new Error("Needs p5.Color as argument.");
            return t.hsba || (t.hsba = n.Color.getRGB(t.rgba), t.hsba = t.hsba.concat(t.rgba[3])), t.hsba[2]
        }, n.prototype.color = function() {
            return arguments[0] instanceof Array ? new n.Color(this, arguments[0], !0) : new n.Color(this, arguments)
        }, n.prototype.green = function(t) {
            if (t instanceof Array) return t[1];
            if (t instanceof n.Color) return t.rgba[1];
            throw new Error("Needs p5.Color or pixel array as argument.")
        }, n.prototype.hue = function(t) {
            if (!t instanceof n.Color) throw new Error("Needs p5.Color as argument.");
            return t.hsba || (t.hsba = n.Color.getRGB(t.rgba)), t.hsba[0]
        }, n.prototype.lerpColor = function(t, e, r) {
            if (t instanceof Array) {
                for (var o = [], i = 0; i < t.length; i++) o.push(n.prototype.lerp(t[i], e[i], r));
                return o
            }
            if (t instanceof n.Color) {
                for (var s = [], a = 0; 4 > a; a++) s.push(n.prototype.lerp(t.rgba[a], e.rgba[a], r));
                return new n.Color(this, s)
            }
            return n.prototype.lerp(t, e, r)
        }, n.prototype.red = function(t) {
            if (t instanceof Array) return t[0];
            if (t instanceof n.Color) return t.rgba[0];
            throw new Error("Needs p5.Color or pixel array as argument.")
        }, n.prototype.saturation = function(t) {
            if (!t instanceof n.Color) throw new Error("Needs p5.Color as argument.");
            return t.hsba || (t.hsba = n.Color.getRGB(t.rgba), t.hsba = t.hsba.concat(t.rgba[3])), t.hsba[1]
        }, n
    }({}, core, p5Color),
    colorsetting = function(t, e, n) {
        "use strict";
        var r = e,
            n = n;
        return r.prototype._doStroke = !0, r.prototype._doFill = !0, r.prototype._colorMode = n.RGB, r.prototype._maxRGB = [255, 255, 255, 255], r.prototype._maxHSB = [255, 255, 255, 255], r.prototype.background = function() {
            if (arguments[0] instanceof r.Image) this.image(arguments[0], 0, 0, this.width, this.height);
            else {
                var t = this.drawingContext.fillStyle,
                    e = this.drawingContext;
                e.fillStyle = r.Color._getCanvasColor.apply(this, arguments), e.fillRect(0, 0, this.width, this.height), e.fillStyle = t
            }
        }, r.prototype.clear = function() {
            this.drawingContext.clearRect(0, 0, this.width, this.height)
        }, r.prototype.colorMode = function() {
            if (arguments[0] === n.RGB || arguments[0] === n.HSB) {
                this._colorMode = arguments[0];
                var t = this._colorMode === n.RGB,
                    e = t ? this._maxRGB : this._maxHSB;
                2 === arguments.length ? (e[0] = arguments[1], e[1] = arguments[1], e[2] = arguments[1]) : arguments.length > 2 && (e[0] = arguments[1], e[1] = arguments[2], e[2] = arguments[3]), 5 === arguments.length && (e[3] = arguments[4])
            }
        }, r.prototype.fill = function() {
            this._setProperty("_doFill", !0);
            var t = this.drawingContext;
            t.fillStyle = r.Color._getCanvasColor.apply(this, arguments)
        }, r.prototype.noFill = function() {
            this._setProperty("_doFill", !1)
        }, r.prototype.noStroke = function() {
            this._setProperty("_doStroke", !1)
        }, r.prototype.stroke = function() {
            this._setProperty("_doStroke", !0);
            var t = this.drawingContext;
            t.strokeStyle = r.Color._getCanvasColor.apply(this, arguments)
        }, r
    }({}, core, constants, p5Color),
    dataconversion = function(t, e) {
        "use strict";
        var n = e;
        return n.prototype.float = function(t) {
            return parseFloat(t)
        }, n.prototype.int = function(t, e) {
            return "string" == typeof t ? (e = e || 10, parseInt(t, e)) : "number" == typeof t ? 0 | t : "boolean" == typeof t ? t ? 1 : 0 : t instanceof Array ? t.map(n.prototype.int) : void 0
        }, n
    }({}, core),
    dataarray_functions = function(t, e) {
        "use strict";
        var n = e;
        return n.prototype.append = function(t, e) {
            return t.push(e), t
        }, n.prototype.arrayCopy = function(t, e, n, r, o) {
            var i, s;
            "undefined" != typeof o ? (s = Math.min(o, t.length), i = r, t = t.slice(e, s + e)) : ("undefined" != typeof n ? (s = n, s = Math.min(s, t.length)) : s = t.length, i = 0, n = e, t = t.slice(0, s)), Array.prototype.splice.apply(n, [i, s].concat(t))
        }, n.prototype.concat = function(t, e) {
            return t.concat(e)
        }, n.prototype.reverse = function(t) {
            return t.reverse()
        }, n.prototype.shorten = function(t) {
            return t.pop(), t
        }, n.prototype.sort = function(t, e) {
            var n = e ? t.slice(0, Math.min(e, t.length)) : t,
                r = e ? t.slice(Math.min(e, t.length)) : [];
            return n = "string" == typeof n[0] ? n.sort() : n.sort(function(t, e) {
                return t - e
            }), n.concat(r)
        }, n.prototype.splice = function(t, e, n) {
            return Array.prototype.splice.apply(t, [n, 0].concat(e)), t
        }, n.prototype.subset = function(t, e, n) {
            return "undefined" != typeof n ? t.slice(e, e + n) : t.slice(e, t.length)
        }, n
    }({}, core),
    datastring_functions = function(t, e) {
        "use strict";

        function n() {
            var t = arguments[0],
                e = 0 > t,
                n = e ? t.toString().substring(1) : t.toString(),
                r = n.indexOf("."),
                o = -1 !== r ? n.substring(0, r) : n,
                i = -1 !== r ? n.substring(r + 1) : "",
                s = e ? "-" : "";
            if (3 === arguments.length) {
                for (var a = 0; a < arguments[1] - o.length; a++) s += "0";
                s += o, s += ".", s += i;
                for (var u = 0; u < arguments[2] - i.length; u++) s += "0";
                return s
            }
            for (var l = 0; l < Math.max(arguments[1] - o.length, 0); l++) s += "0";
            return s += n
        }

        function r() {
            var t = arguments[0].toString(),
                e = t.indexOf("."),
                n = -1 !== e ? t.substring(e) : "",
                r = -1 !== e ? t.substring(0, e) : t;
            return r = r.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 0 === arguments[1] && (n = ""), arguments.length > 1 && (n = n.substring(0, arguments[1] + 1)), r + n
        }

        function o() {
            return parseFloat(arguments[0]) > 0 ? "+" + arguments[0].toString() : arguments[0].toString()
        }

        function i() {
            return parseFloat(arguments[0]) > 0 ? " " + arguments[0].toString() : arguments[0].toString()
        }
        var s = e;
        return s.prototype.join = function(t, e) {
            return t.join(e)
        }, s.prototype.match = function(t, e) {
            return t.match(e)
        }, s.prototype.matchAll = function(t, e) {
            for (var n = new RegExp(e, "g"), r = n.exec(t), o = []; null !== r;) o.push(r), r = n.exec(t);
            return o
        }, s.prototype.nf = function() {
            if (arguments[0] instanceof Array) {
                var t = arguments[1],
                    e = arguments[2];
                return arguments[0].map(function(r) {
                    return n(r, t, e)
                })
            }
            return n.apply(this, arguments)
        }, s.prototype.nfc = function() {
            if (arguments[0] instanceof Array) {
                var t = arguments[1];
                return arguments[0].map(function(e) {
                    return r(e, t)
                })
            }
            return r.apply(this, arguments)
        }, s.prototype.nfp = function() {
            var t = this.nf(arguments);
            return t instanceof Array ? t.map(o) : o(t)
        }, s.prototype.nfs = function() {
            var t = this.nf(arguments);
            return t instanceof Array ? t.map(i) : i(t)
        }, s.prototype.split = function(t, e) {
            return t.split(e)
        }, s.prototype.splitTokens = function() {
            var t = arguments.length > 0 ? arguments[1] : /\s/g;
            return arguments[0].split(t).filter(function(t) {
                return t
            })
        }, s.prototype.trim = function(t) {
            return t instanceof Array ? t.map(this.trim) : t.trim()
        }, s
    }({}, core),
    environment = function(t, e, n) {
        "use strict";

        function r(t) {
            var e = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
            if (!e) throw new Error("Fullscreen not enabled in this browser.");
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        }

        function o() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }
        var i = e,
            s = n,
            a = [s.ARROW, s.CROSS, s.HAND, s.MOVE, s.TEXT, s.WAIT];
        return i.prototype._frameRate = 0, i.prototype._lastFrameTime = (new Date).getTime(), i.prototype._targetFrameRate = 60, i.prototype.frameCount = 0, i.prototype.focused = !0, i.prototype.cursor = function(t, e, n) {
            var r = "auto",
                o = this._curElement.elt;
            if (a.indexOf(t) > -1) r = t;
            else if ("string" == typeof t) {
                var i = "";
                e && n && "number" == typeof e && "number" == typeof n && (i = e + " " + n), r = "http://" !== t.substring(0, 6) ? "url(" + t + ") " + i + ", auto" : /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(t) ? "url(" + t + ") " + i + ", auto" : t
            }
            o.style.cursor = r
        }, i.prototype.frameRate = function(t) {
            return "undefined" == typeof t ? this._frameRate : (this._setProperty("_targetFrameRate", t), this._runFrames(), this)
        }, i.prototype.getFrameRate = function() {
            return this.frameRate()
        }, i.prototype.setFrameRate = function(t) {
            return this.frameRate(t)
        }, i.prototype.noCursor = function() {
            this._curElement.elt.style.cursor = "none"
        }, i.prototype.displayWidth = screen.width, i.prototype.displayHeight = screen.height, i.prototype.windowWidth = window.innerWidth, i.prototype.windowHeight = window.innerHeight, i.prototype.onresize = function(t) {
            this._setProperty("windowWidth", window.innerWidth), this._setProperty("windowHeight", window.innerHeight);
            var e, n = this._isGlobal ? window : this;
            "function" == typeof n.windowResized && (e = n.windowResized(t), void 0 === e || e || t.preventDefault())
        }, i.prototype.width = 0, i.prototype.height = 0, i.prototype.fullscreen = function(t) {
            return "undefined" == typeof t ? document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement : void(t ? r(document.documentElement) : o())
        }, i.prototype.devicePixelScaling = function(t) {
            this._pixelDensity = t ? window.devicePixelRatio || 1 : 1, this.resizeCanvas(this.width, this.height)
        }, i.prototype.getURL = function() {
            return location.href
        }, i.prototype.getURLPath = function() {
            return location.pathname.split("/").filter(function(t) {
                return "" !== t
            })
        }, i.prototype.getURLParams = function() {
            for (var t, e = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, n = {}; null != (t = e.exec(location.search));) t.index === e.lastIndex && e.lastIndex++, n[t[1]] = t[2];
            return n
        }, i
    }({}, core, constants),
    imageimage = function(t, e, n) {
        "use strict";
        var r = e,
            n = n;
        return r.prototype._imageMode = n.CORNER, r.prototype._tint = null, r.prototype.createImage = function(t, e) {
            return new r.Image(t, e)
        }, r
    }({}, core, constants),
    canvas = function(t, e) {
        var e = e;
        return {
            modeAdjust: function(t, n, r, o, i) {
                return i === e.CORNER ? {
                    x: t,
                    y: n,
                    w: r,
                    h: o
                } : i === e.CORNERS ? {
                    x: t,
                    y: n,
                    w: r - t,
                    h: o - n
                } : i === e.RADIUS ? {
                    x: t - r,
                    y: n - o,
                    w: 2 * r,
                    h: 2 * o
                } : i === e.CENTER ? {
                    x: t - .5 * r,
                    y: n - .5 * o,
                    w: r,
                    h: o
                } : void 0
            },
            arcModeAdjust: function(t, n, r, o, i) {
                return i === e.CORNER ? {
                    x: t + .5 * r,
                    y: n + .5 * o,
                    w: r,
                    h: o
                } : i === e.CORNERS ? {
                    x: t,
                    y: n,
                    w: r + t,
                    h: o + n
                } : i === e.RADIUS ? {
                    x: t,
                    y: n,
                    w: 2 * r,
                    h: 2 * o
                } : i === e.CENTER ? {
                    x: t,
                    y: n,
                    w: r,
                    h: o
                } : void 0
            }
        }
    }({}, constants),
    imageloading_displaying = function(t, e, n, r, o) {
        "use strict";
        var i = e,
            s = n,
            r = r,
            o = o;
        return i.prototype.loadImage = function(t, e) {
            var n = new Image,
                r = new i.Image(1, 1, this);
            return n.onload = function() {
                r.width = r.canvas.width = n.width, r.height = r.canvas.height = n.height, r.canvas.getContext("2d").drawImage(n, 0, 0), "undefined" != typeof e && e(r)
            }, 0 !== t.indexOf("data:image/") && (n.crossOrigin = "Anonymous"), n.src = t, r
        }, i.prototype.image = function(t, e, n, o, i) {
            var s = t.canvas || t.elt;
            e = e || 0, n = n || 0, o = o || t.width, i = i || t.height;
            var a = r.modeAdjust(e, n, o, i, this._imageMode);
            this._tint && t.canvas ? this.drawingContext.drawImage(this._getTintedImageCanvas(t), a.x, a.y, a.w, a.h) : this.drawingContext.drawImage(s, a.x, a.y, a.w, a.h)
        }, i.prototype.tint = function() {
            var t = i.Color._getFormattedColor.apply(this, arguments);
            t = i.Color._normalizeColorArray.call(this, t), this._tint = t
        }, i.prototype.noTint = function() {
            this._tint = null
        }, i.prototype._getTintedImageCanvas = function(t) {
            if (!t.canvas) return t;
            var e = s._toPixels(t.canvas),
                n = document.createElement("canvas");
            n.width = t.canvas.width, n.height = t.canvas.height;
            for (var r = n.getContext("2d"), o = r.createImageData(t.canvas.width, t.canvas.height), i = o.data, a = 0; a < e.length; a += 4) {
                var u = e[a],
                    l = e[a + 1],
                    c = e[a + 2],
                    p = e[a + 3];
                i[a] = u * this._tint[0] / 255, i[a + 1] = l * this._tint[1] / 255, i[a + 2] = c * this._tint[2] / 255, i[a + 3] = p * this._tint[3] / 255
            }
            return r.putImageData(o, 0, 0), n
        }, i.prototype.imageMode = function(t) {
            (t === o.CORNER || t === o.CORNERS || t === o.CENTER) && (this._imageMode = t)
        }, i
    }({}, core, filters, canvas, constants),
    imagepixels = function(t, e, n) {
        "use strict";
        var r = e,
            o = n;
        return r.prototype.pixels = [], r.prototype.blend = function() {
            var t = this.drawingContext.globalCompositeOperation,
                e = arguments[arguments.length - 1],
                n = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
            this.drawingContext.globalCompositeOperation = e, this.copy.apply(this, n), this.drawingContext.globalCompositeOperation = t
        }, r.prototype.copy = function() {
            var t, e, n, r, o, i, s, a, u;
            if (9 === arguments.length) t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3], o = arguments[4], i = arguments[5], s = arguments[6], a = arguments[7], u = arguments[8];
            else {
                if (8 !== arguments.length) throw new Error("Signature not supported");
                e = arguments[0], n = arguments[1], r = arguments[2], o = arguments[3], i = arguments[4], s = arguments[5], a = arguments[6], u = arguments[7], t = this
            }
            var l = t.canvas.width / t.width;
            this.drawingContext.drawImage(t.canvas, l * e, l * n, l * r, l * o, i, s, a, u)
        }, r.prototype.filter = function(t, e) {
            o.apply(this.canvas, o[t.toLowerCase()], e)
        }, r.prototype.get = function(t, e, n, o) {
            if (void 0 === t && void 0 === e && void 0 === n && void 0 === o ? (t = 0, e = 0, n = this.width, o = this.height) : void 0 === n && void 0 === o && (n = 1, o = 1), t > this.width || e > this.height || 0 > t || 0 > e) return [0, 0, 0, 255];
            var i = this.drawingContext.getImageData(t, e, n, o),
                s = i.data;
            if (1 === n && 1 === o) {
                for (var a = [], u = 0; u < s.length; u += 4) a.push(s[u], s[u + 1], s[u + 2], s[u + 3]);
                return a
            }
            n = Math.min(n, this.width), o = Math.min(o, this.height);
            var l = new r.Image(n, o);
            return l.canvas.getContext("2d").putImageData(i, 0, 0, 0, 0, n, o), l
        }, r.prototype.loadPixels = function() {
            var t = this.width,
                e = this.height,
                n = this.drawingContext.getImageData(0, 0, t, e);
            this._setProperty("imageData", n), this._setProperty("pixels", n.data)
        }, r.prototype.set = function(t, e, n) {
            if (n instanceof r.Image) this.drawingContext.drawImage(n.canvas, t, e), this.loadPixels.call(this);
            else {
                var o = 4 * (e * this.width + t);
                if (this.imageData || this.loadPixels.call(this), "number" == typeof n) o < this.pixels.length && (this.pixels[o] = n, this.pixels[o + 1] = n, this.pixels[o + 2] = n, this.pixels[o + 3] = 255);
                else if (n instanceof Array) {
                    if (n.length < 4) throw new Error("pixel array must be of the form [R, G, B, A]");
                    o < this.pixels.length && (this.pixels[o] = n[0], this.pixels[o + 1] = n[1], this.pixels[o + 2] = n[2], this.pixels[o + 3] = n[3])
                } else n instanceof r.Color && o < this.pixels.length && (this.pixels[o] = n.rgba[0], this.pixels[o + 1] = n.rgba[1], this.pixels[o + 2] = n.rgba[2], this.pixels[o + 3] = n.rgba[3])
            }
        }, r.prototype.updatePixels = function(t, e, n, r) {
            void 0 === t && void 0 === e && void 0 === n && void 0 === r && (t = 0, e = 0, n = this.width, r = this.height), this.drawingContext.putImageData(this.imageData, t, e, 0, 0, n, r)
        }, r
    }({}, core, filters, p5Color);
! function(t, e, n) {
    "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("reqwest", n) : e[t] = n()
}("reqwest", this, function() {
    function handleReadyState(t, e, n) {
        return function() {
            return t._aborted ? n(t.request) : void(t.request && 4 == t.request[readyState] && (t.request.onreadystatechange = noop, twoHundo.test(t.request.status) ? e(t.request) : n(t.request)))
        }
    }

    function setHeaders(t, e) {
        var n, r = e.headers || {};
        r.Accept = r.Accept || defaultHeaders.accept[e.type] || defaultHeaders.accept["*"], e.crossOrigin || r[requestedWith] || (r[requestedWith] = defaultHeaders.requestedWith), r[contentType] || (r[contentType] = e.contentType || defaultHeaders.contentType);
        for (n in r) r.hasOwnProperty(n) && "setRequestHeader" in t && t.setRequestHeader(n, r[n])
    }

    function setCredentials(t, e) {
        "undefined" != typeof e.withCredentials && "undefined" != typeof t.withCredentials && (t.withCredentials = !!e.withCredentials)
    }

    function generalCallback(t) {
        lastValue = t
    }

    function urlappend(t, e) {
        return t + (/\?/.test(t) ? "&" : "?") + e
    }

    function handleJsonp(t, e, n, r) {
        var o = uniqid++,
            i = t.jsonpCallback || "callback",
            s = t.jsonpCallbackName || reqwest.getcallbackPrefix(o),
            a = new RegExp("((^|\\?|&)" + i + ")=([^&]+)"),
            u = r.match(a),
            l = doc.createElement("script"),
            c = 0,
            p = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
        return u ? "?" === u[3] ? r = r.replace(a, "$1=" + s) : s = u[3] : r = urlappend(r, i + "=" + s), win[s] = generalCallback, l.type = "text/javascript", l.src = r, l.async = !0, "undefined" == typeof l.onreadystatechange || p || (l.event = "onclick", l.htmlFor = l.id = "_reqwest_" + o), l.onload = l.onreadystatechange = function() {
            return l[readyState] && "complete" !== l[readyState] && "loaded" !== l[readyState] || c ? !1 : (l.onload = l.onreadystatechange = null, l.onclick && l.onclick(), e(lastValue), lastValue = void 0, head.removeChild(l), void(c = 1))
        }, head.appendChild(l), {
            abort: function() {
                l.onload = l.onreadystatechange = null, n({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(l), c = 1
            }
        }
    }

    function getRequest(t, e) {
        var n, r = this.o,
            o = (r.method || "GET").toUpperCase(),
            i = "string" == typeof r ? r : r.url,
            s = r.processData !== !1 && r.data && "string" != typeof r.data ? reqwest.toQueryString(r.data) : r.data || null,
            a = !1;
        return "jsonp" != r.type && "GET" != o || !s || (i = urlappend(i, s), s = null), "jsonp" == r.type ? handleJsonp(r, t, e, i) : (n = r.xhr && r.xhr(r) || xhr(r), n.open(o, i, r.async === !1 ? !1 : !0), setHeaders(n, r), setCredentials(n, r), win[xDomainRequest] && n instanceof win[xDomainRequest] ? (n.onload = t, n.onerror = e, n.onprogress = function() {}, a = !0) : n.onreadystatechange = handleReadyState(this, t, e), r.before && r.before(n), a ? setTimeout(function() {
            n.send(s)
        }, 200) : n.send(s), n)
    }

    function Reqwest(t, e) {
        this.o = t, this.fn = e, init.apply(this, arguments)
    }

    function setType(t) {
        var e = t.match(/\.(json|jsonp|html|xml)(\?|$)/);
        return e ? e[1] : "js"
    }

    function init(o, fn) {
        function complete(t) {
            for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(t)
        }

        function success(resp) {
            resp = "jsonp" !== type ? self.request : resp;
            var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                r = filteredResponse;
            try {
                resp.responseText = r
            } catch (e) {}
            if (r) switch (type) {
                case "json":
                    try {
                        resp = win.JSON ? win.JSON.parse(r) : eval("(" + r + ")")
                    } catch (err) {
                        return error(resp, "Could not parse JSON in response", err)
                    }
                    break;
                case "js":
                    resp = eval(r);
                    break;
                case "html":
                    resp = r;
                    break;
                case "xml":
                    resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
            }
            for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
            complete(resp)
        }

        function error(t, e, n) {
            for (t = self.request, self._responseArgs.resp = t, self._responseArgs.msg = e, self._responseArgs.t = n, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(t, e, n);
            complete(t)
        }
        this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
        var self = this,
            type = o.type || setType(this.url);
        fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
            self.abort()
        }, o.timeout)), o.success && (this._successHandler = function() {
            o.success.apply(o, arguments)
        }), o.error && this._errorHandlers.push(function() {
            o.error.apply(o, arguments)
        }), o.complete && this._completeHandlers.push(function() {
            o.complete.apply(o, arguments)
        }), this.request = getRequest.call(this, success, error)
    }

    function reqwest(t, e) {
        return new Reqwest(t, e)
    }

    function normalize(t) {
        return t ? t.replace(/\r?\n/g, "\r\n") : ""
    }

    function serial(t, e) {
        var n, r, o, i, s = t.name,
            a = t.tagName.toLowerCase(),
            u = function(t) {
                t && !t.disabled && e(s, normalize(t.attributes.value && t.attributes.value.specified ? t.value : t.text))
            };
        if (!t.disabled && s) switch (a) {
            case "input":
                /reset|button|image|file/i.test(t.type) || (n = /checkbox/i.test(t.type), r = /radio/i.test(t.type), o = t.value, (!(n || r) || t.checked) && e(s, normalize(n && "" === o ? "on" : o)));
                break;
            case "textarea":
                e(s, normalize(t.value));
                break;
            case "select":
                if ("select-one" === t.type.toLowerCase()) u(t.selectedIndex >= 0 ? t.options[t.selectedIndex] : null);
                else
                    for (i = 0; t.length && i < t.length; i++) t.options[i].selected && u(t.options[i])
        }
    }

    function eachFormElement() {
        var t, e, n = this,
            r = function(t, e) {
                var r, o, i;
                for (r = 0; r < e.length; r++)
                    for (i = t[byTag](e[r]), o = 0; o < i.length; o++) serial(i[o], n)
            };
        for (e = 0; e < arguments.length; e++) t = arguments[e], /input|select|textarea/i.test(t.tagName) && serial(t, n), r(t, ["input", "select", "textarea"])
    }

    function serializeQueryString() {
        return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
    }

    function serializeHash() {
        var t = {};
        return eachFormElement.apply(function(e, n) {
            e in t ? (t[e] && !isArray(t[e]) && (t[e] = [t[e]]), t[e].push(n)) : t[e] = n
        }, arguments), t
    }

    function buildParams(t, e, n, r) {
        var o, i, s, a = /\[\]$/;
        if (isArray(e))
            for (i = 0; e && i < e.length; i++) s = e[i], n || a.test(t) ? r(t, s) : buildParams(t + "[" + ("object" == typeof s ? i : "") + "]", s, n, r);
        else if (e && "[object Object]" === e.toString())
            for (o in e) buildParams(t + "[" + o + "]", e[o], n, r);
        else r(t, e)
    }
    var win = window,
        doc = document,
        twoHundo = /^(20\d|1223)$/,
        byTag = "getElementsByTagName",
        readyState = "readyState",
        contentType = "Content-Type",
        requestedWith = "X-Requested-With",
        head = doc[byTag]("head")[0],
        uniqid = 0,
        callbackPrefix = "reqwest_" + +new Date,
        lastValue, xmlHttpRequest = "XMLHttpRequest",
        xDomainRequest = "XDomainRequest",
        noop = function() {},
        isArray = "function" == typeof Array.isArray ? Array.isArray : function(t) {
            return t instanceof Array
        },
        defaultHeaders = {
            contentType: "application/x-www-form-urlencoded",
            requestedWith: xmlHttpRequest,
            accept: {
                "*": "text/javascript, text/html, application/xml, text/xml, */*",
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                js: "application/javascript, text/javascript"
            }
        },
        xhr = function(t) {
            if (t.crossOrigin === !0) {
                var e = win[xmlHttpRequest] ? new XMLHttpRequest : null;
                if (e && "withCredentials" in e) return e;
                if (win[xDomainRequest]) return new XDomainRequest;
                throw new Error("Browser does not support cross-origin requests")
            }
            return win[xmlHttpRequest] ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
        },
        globalSetupOptions = {
            dataFilter: function(t) {
                return t
            }
        };
    return Reqwest.prototype = {
        abort: function() {
            this._aborted = !0, this.request.abort()
        },
        retry: function() {
            init.call(this, this.o, this.fn)
        },
        then: function(t, e) {
            return t = t || function() {}, e = e || function() {}, this._fulfilled ? this._responseArgs.resp = t(this._responseArgs.resp) : this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(t), this._errorHandlers.push(e)), this
        },
        always: function(t) {
            return this._fulfilled || this._erred ? t(this._responseArgs.resp) : this._completeHandlers.push(t), this
        },
        fail: function(t) {
            return this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(t), this
        }
    }, reqwest.serializeArray = function() {
        var t = [];
        return eachFormElement.apply(function(e, n) {
            t.push({
                name: e,
                value: n
            })
        }, arguments), t
    }, reqwest.serialize = function() {
        if (0 === arguments.length) return "";
        var t, e, n = Array.prototype.slice.call(arguments, 0);
        return t = n.pop(), t && t.nodeType && n.push(t) && (t = null), t && (t = t.type), e = "map" == t ? serializeHash : "array" == t ? reqwest.serializeArray : serializeQueryString, e.apply(null, n)
    }, reqwest.toQueryString = function(t, e) {
        var n, r, o = e || !1,
            i = [],
            s = encodeURIComponent,
            a = function(t, e) {
                e = "function" == typeof e ? e() : null == e ? "" : e, i[i.length] = s(t) + "=" + s(e)
            };
        if (isArray(t))
            for (r = 0; t && r < t.length; r++) a(t[r].name, t[r].value);
        else
            for (n in t) t.hasOwnProperty(n) && buildParams(n, t[n], o, a);
        return i.join("&").replace(/%20/g, "+")
    }, reqwest.getcallbackPrefix = function() {
        return callbackPrefix
    }, reqwest.compat = function(t, e) {
        return t && (t.type && (t.method = t.type) && delete t.type, t.dataType && (t.type = t.dataType), t.jsonpCallback && (t.jsonpCallbackName = t.jsonpCallback) && delete t.jsonpCallback, t.jsonp && (t.jsonpCallback = t.jsonp)), new Reqwest(t, e)
    }, reqwest.ajaxSetup = function(t) {
        t = t || {};
        for (var e in t) globalSetupOptions[e] = t[e]
    }, reqwest
});
var inputfiles = function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = {};
            if (e = e || [], "undefined" == typeof e)
                for (var r = 0; r < t.length; r++) e[r.toString()] = r;
            for (var o = 0; o < e.length; o++) {
                var i = e[o],
                    s = t[o];
                n[i] = s
            }
            return n
        }
        var o = e,
            n = n;
        return o.prototype.createInput = function() {
            throw "not yet implemented"
        }, o.prototype.createReader = function() {
            throw "not yet implemented"
        }, o.prototype.loadBytes = function() {
            throw "not yet implemented"
        }, o.prototype.loadJSON = function(t, e) {
            var r = [],
                o = -1 === t.indexOf("http") ? "json" : "jsonp";
            return "string" == typeof arguments[2] && ("jsonp" === arguments[2] || "json" === arguments[2]) && (o = arguments[2]), n({
                url: t,
                type: o,
                crossOrigin: !0
            }).then(function(t) {
                for (var n in t) r[n] = t[n];
                "undefined" != typeof e && e(t)
            }), r
        }, o.prototype.loadStrings = function(t, e) {
            var n = [],
                r = new XMLHttpRequest;
            return r.open("GET", t, !0), r.onreadystatechange = function() {
                if (4 === r.readyState && (200 === r.status || 0 === r.status)) {
                    var t = r.responseText.match(/[^\r\n]+/g);
                    for (var o in t) n[o] = t[o];
                    "undefined" != typeof e && e(n)
                }
            }, r.send(null), n
        }, o.prototype.loadTable = function(t) {
            for (var e = null, n = [], i = !1, s = ",", a = 1; a < arguments.length; a++) "function" == typeof arguments[a] ? e = arguments[a] : "string" == typeof arguments[a] && (n.push(arguments[a]), "header" === arguments[a] && (i = !0), "csv" === arguments[a] ? s = "," : "tsv" === arguments[a] && (s = "	"));
            var u = [],
                l = new o.Table,
                c = new XMLHttpRequest;
            return c.open("GET", t, !0), c.onreadystatechange = function() {
                if (4 === c.readyState && (200 === c.status || 0 === c.status)) {
                    var t = c.responseText.match(/[^\r\n]+/g);
                    for (var n in t) u[n] = t[n];
                    if ("undefined" != typeof e) {
                        var a, p;
                        if (i)
                            for (l.columns = new o.TableRow(u[0]).arr, a = 1; a < u.length; a++) p = new o.TableRow(u[a], s), p.obj = r(p.arr, l.columns), l.addRow(p);
                        else {
                            for (a = 0; a < u[0].split(s).length; a++) l.columns[a] = a.toString();
                            for (a = 0; a < u.length; a++) p = new o.TableRow(u[a], s), l.addRow(p)
                        }
                        e(l)
                    }
                }
            }, c.send(null), l
        }, o.prototype.loadXML = function(t, e) {
            var r = [];
            return n({
                url: t,
                type: "xml",
                crossOrigin: !0
            }).then(function(t) {
                e(t)
            }), r
        }, o.prototype.parseXML = function() {
            throw "not yet implemented"
        }, o.prototype.selectFolder = function() {
            throw "not yet implemented"
        }, o.prototype.selectInput = function() {
            throw "not yet implemented"
        }, o.prototype.httpGet = function() {
            var t = Array.prototype.slice.call(arguments);
            t.push("GET"), o.prototype.httpDo.apply(this, t)
        }, o.prototype.httpPost = function() {
            var t = Array.prototype.slice.call(arguments);
            t.push("POST"), o.prototype.httpDo.apply(this, t)
        }, o.prototype.httpDo = function() {
            for (var t, e = "GET", r = arguments[0], o = {}, i = "", s = 1; s < arguments.length; s++) {
                var a = arguments[s];
                "string" == typeof a ? "GET" === a || "POST" === a || "PUT" === a ? e = a : i = a : "object" == typeof a ? o = a : "function" == typeof a && (t = a)
            }
            "" === i && (i = -1 !== r.indexOf("json") ? "json" : -1 !== r.indexOf("xml") ? "xml" : "text"), n({
                url: r,
                method: e,
                data: o,
                type: i,
                crossOrigin: !0,
                success: function(e) {
                    "undefined" != typeof t && t("text" === i ? e.response : e)
                }
            })
        }, o
    }({}, core, reqwest),
    inputkeyboard = function(t, e) {
        "use strict";
        var n = e,
            r = {};
        return n.prototype.isKeyPressed = !1, n.prototype.keyIsPressed = !1, n.prototype.key = "", n.prototype.keyCode = 0, n.prototype.onkeydown = function(t) {
            this._setProperty("isKeyPressed", !0), this._setProperty("keyIsPressed", !0), this._setProperty("keyCode", t.which), r[t.which] = !0;
            var e = String.fromCharCode(t.which);
            e || (e = t.which), this._setProperty("key", e);
            var n = this.keyPressed || window.keyPressed;
            if ("function" == typeof n && !t.charCode) {
                var o = n(t);
                o === !1 && t.preventDefault()
            }
        }, n.prototype.onkeyup = function(t) {
            var e = this.keyReleased || window.keyReleased;
            this._setProperty("isKeyPressed", !1), this._setProperty("keyIsPressed", !1), r[t.which] = !1;
            var n = String.fromCharCode(t.which);
            if (n || (n = t.which), this._setProperty("key", n), this._setProperty("keyCode", t.which), "function" == typeof e) {
                var o = e(t);
                o === !1 && t.preventDefault()
            }
        }, n.prototype.onkeypress = function(t) {
            this._setProperty("keyCode", t.which), this._setProperty("key", String.fromCharCode(t.which));
            var e = this.keyTyped || window.keyTyped;
            if ("function" == typeof e) {
                var n = e(t);
                n === !1 && t.preventDefault()
            }
        }, n.prototype.onblur = function() {
            r = {}
        }, n.prototype.keyIsDown = function(t) {
            return r[t]
        }, n
    }({}, core),
    inputmouse = function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = t.getBoundingClientRect();
            return {
                x: e.clientX - n.left,
                y: e.clientY - n.top
            }
        }
        var o = e,
            n = n;
        return o.prototype.mouseX = 0, o.prototype.mouseY = 0, o.prototype.pmouseX = 0, o.prototype.pmouseY = 0, o.prototype.winMouseX = 0, o.prototype.winMouseY = 0, o.prototype.pwinMouseX = 0, o.prototype.pwinMouseY = 0, o.prototype.mouseButton = 0, o.prototype.mouseIsPressed = !1, o.prototype.isMousePressed = !1, o.prototype._updateMouseCoords = function(t) {
            if ("touchstart" === t.type || "touchmove" === t.type || "touchend" === t.type) this._setProperty("mouseX", this.touchX), this._setProperty("mouseY", this.touchY);
            else if (null !== this._curElement) {
                var e = r(this._curElement.elt, t);
                this._setProperty("mouseX", e.x), this._setProperty("mouseY", e.y)
            }
            this._setProperty("winMouseX", t.pageX), this._setProperty("winMouseY", t.pageY)
        }, o.prototype._updatePMouseCoords = function() {
            this._setProperty("pmouseX", this.mouseX), this._setProperty("pmouseY", this.mouseY), this._setProperty("pwinMouseX", this.winMouseX), this._setProperty("pwinMouseY", this.winMouseY)
        }, o.prototype._setMouseButton = function(t) {
            1 === t.button ? this._setProperty("mouseButton", n.CENTER) : 2 === t.button ? this._setProperty("mouseButton", n.RIGHT) : (this._setProperty("mouseButton", n.LEFT), ("touchstart" === t.type || "touchmove" === t.type) && (this._setProperty("mouseX", this.touchX), this._setProperty("mouseY", this.touchY)))
        }, o.prototype.onmousemove = function(t) {
            var e, n = this._isGlobal ? window : this;
            this._updateMouseCoords(t), this.isMousePressed ? "function" == typeof n.mouseDragged ? (e = n.mouseDragged(t), e === !1 && t.preventDefault()) : "function" == typeof n.touchMoved && (e = n.touchMoved(t), e === !1 && t.preventDefault(), this._updateTouchCoords(t)) : "function" == typeof n.mouseMoved && (e = n.mouseMoved(t), e === !1 && t.preventDefault())
        }, o.prototype.onmousedown = function(t) {
            var e, n = this._isGlobal ? window : this;
            this._setProperty("isMousePressed", !0), this._setProperty("mouseIsPressed", !0), this._setMouseButton(t), this._updateMouseCoords(t), "function" == typeof n.mousePressed ? (e = n.mousePressed(t), e === !1 && t.preventDefault()) : "function" == typeof n.touchStarted && (e = n.touchStarted(t), e === !1 && t.preventDefault(), this._updateTouchCoords(t))
        }, o.prototype.onmouseup = function(t) {
            var e, n = this._isGlobal ? window : this;
            this._setProperty("isMousePressed", !1), this._setProperty("mouseIsPressed", !1), "function" == typeof n.mouseReleased ? (e = n.mouseReleased(t), e === !1 && t.preventDefault()) : "function" == typeof n.touchEnded && (e = n.touchEnded(t), e === !1 && t.preventDefault(), this._updateTouchCoords(t))
        }, o.prototype.onclick = function(t) {
            var e = this._isGlobal ? window : this;
            if ("function" == typeof e.mouseClicked) {
                var n = e.mouseClicked(t);
                n === !1 && t.preventDefault()
            }
        }, o.prototype.onmousewheel = function(t) {
            var e = this._isGlobal ? window : this;
            if ("function" == typeof e.mouseWheel) {
                var n = e.mouseWheel(t);
                n === !1 && t.preventDefault()
            }
        }, o
    }({}, core, constants),
    inputtime_date = function(t, e) {
        "use strict";
        var n = e;
        return n.prototype.day = function() {
            return (new Date).getDate()
        }, n.prototype.hour = function() {
            return (new Date).getHours()
        }, n.prototype.minute = function() {
            return (new Date).getMinutes()
        }, n.prototype.millis = function() {
            return (new Date).getTime() - this._startTime
        }, n.prototype.month = function() {
            return (new Date).getMonth() + 1
        }, n.prototype.second = function() {
            return (new Date).getSeconds()
        }, n.prototype.year = function() {
            return (new Date).getFullYear()
        }, n
    }({}, core),
    inputtouch = function(t, e) {
        "use strict";

        function n(t, e, n) {
            n = n || 0;
            var r = t.getBoundingClientRect();
            return {
                x: e.changedTouches[n].pageX - r.left,
                y: e.changedTouches[n].pageY - r.top
            }
        }
        var r = e;
        return r.prototype.touchX = 0, r.prototype.touchY = 0, r.prototype.ptouchX = 0, r.prototype.ptouchY = 0, r.prototype.touches = [], r.prototype._updateTouchCoords = function(t) {
            if ("mousedown" === t.type || "mousemove" === t.type || "mouseup" === t.type) this._setProperty("touchX", this.mouseX), this._setProperty("touchY", this.mouseY);
            else {
                var e = n(this._curElement.elt, t, 0);
                this._setProperty("touchX", e.x), this._setProperty("touchY", e.y);
                for (var r = [], o = 0; o < t.changedTouches.length; o++) {
                    var i = n(this._curElement.elt, t, o);
                    r[o] = {
                        x: i.x,
                        y: i.y
                    }
                }
                this._setProperty("touches", r)
            }
        }, r.prototype._updatePTouchCoords = function() {
            this._setProperty("ptouchX", this.touchX), this._setProperty("ptouchY", this.touchY)
        }, r.prototype.ontouchstart = function(t) {
            var e, n = this._isGlobal ? window : this;
            this._updateTouchCoords(t), "function" == typeof n.touchStarted ? (e = n.touchStarted(t), e === !1 && t.preventDefault()) : "function" == typeof n.mousePressed && (e = n.mousePressed(t), e === !1 && t.preventDefault())
        }, r.prototype.ontouchmove = function(t) {
            var e, n = this._isGlobal ? window : this;
            this._updateTouchCoords(t), "function" == typeof n.touchMoved ? (e = n.touchMoved(t), e === !1 && t.preventDefault()) : "function" == typeof n.mouseDragged && (e = n.mouseDragged(t), e === !1 && t.preventDefault(), this._updateMouseCoords(t))
        }, r.prototype.ontouchend = function(t) {
            this._updateTouchCoords(t);
            var e, n = this._isGlobal ? window : this;
            "function" == typeof n.touchEnded ? (e = n.touchEnded(t), e === !1 && t.preventDefault()) : "function" == typeof n.mouseReleased && (e = n.mouseReleased(t), e === !1 && t.preventDefault(), this._updateMouseCoords(t))
        }, r
    }({}, core),
    mathmath = function(t, e) {
        "use strict";
        var n = e;
        return n.prototype.createVector = function() {
            return new n.Vector(this, arguments)
        }, n
    }({}, core),
    mathcalculation = function(t, e) {
        "use strict";
        var n = e;
        return n.prototype.abs = Math.abs, n.prototype.ceil = Math.ceil, n.prototype.constrain = function(t, e, n) {
            return Math.max(Math.min(t, n), e)
        }, n.prototype.dist = function(t, e, n, r) {
            return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e))
        }, n.prototype.exp = Math.exp, n.prototype.floor = Math.floor, n.prototype.lerp = function(t, e, n) {
            return n * (e - t) + t
        }, n.prototype.log = Math.log, n.prototype.mag = function(t, e) {
            return Math.sqrt(t * t + e * e)
        }, n.prototype.map = function(t, e, n, r, o) {
            return (t - e) / (n - e) * (o - r) + r
        }, n.prototype.max = function() {
            return arguments[0] instanceof Array ? Math.max.apply(null, arguments[0]) : Math.max.apply(null, arguments)
        }, n.prototype.min = function() {
            return arguments[0] instanceof Array ? Math.min.apply(null, arguments[0]) : Math.min.apply(null, arguments)
        }, n.prototype.norm = function(t, e, n) {
            return this.map(t, e, n, 0, 1)
        }, n.prototype.pow = Math.pow, n.prototype.round = Math.round, n.prototype.sq = function(t) {
            return t * t
        }, n.prototype.sqrt = Math.sqrt, n
    }({}, core),
    mathrandom = function(t, e) {
        "use strict";
        var n = e,
            r = !1,
            o = function() {
                var t, e, n = 4294967296,
                    r = 1664525,
                    o = 1013904223;
                return {
                    setSeed: function(r) {
                        e = t = r || Math.round(Math.random() * n)
                    },
                    getSeed: function() {
                        return t
                    },
                    rand: function() {
                        return e = (r * e + o) % n, e / n
                    }
                }
            }();
        n.prototype.randomSeed = function(t) {
            o.setSeed(t), r = !0
        }, n.prototype.random = function(t, e) {
            var n;
            if (n = r ? o.rand() : Math.random(), 0 === arguments.length) return n;
            if (1 === arguments.length) return n * t;
            if (t > e) {
                var i = t;
                t = e, e = i
            }
            return n * (e - t) + t
        };
        var i, s = !1;
        return n.prototype.randomGaussian = function(t, e) {
            var n, r, o, a;
            if (s) n = i, s = !1;
            else {
                do r = this.random(2) - 1, o = this.random(2) - 1, a = r * r + o * o; while (a >= 1);
                a = Math.sqrt(-2 * Math.log(a) / a), n = r * a, i = o * a, s = !0
            }
            var u = t || 0,
                l = e || 1;
            return n * l + u
        }, n
    }({}, core),
    mathnoise = function(t, e) {
        "use strict";
        for (var n = e, r = 4, o = 1 << r, i = 8, s = 1 << i, a = 4095, u = 4, l = .5, c = .5, p = Math.floor(360 / c), h = new Array(p), f = new Array(p), d = Math.PI / 180, g = 0; p > g; g++) h[g] = Math.sin(g * d * c), f[g] = Math.cos(g * d * c);
        var m = p;
        m >>= 1;
        var y;
        return n.prototype.noise = function(t, e, n) {
            if (e = e || 0, n = n || 0, null == y) {
                y = new Array(a + 1);
                for (var c = 0; a + 1 > c; c++) y[c] = Math.random()
            }
            0 > t && (t = -t), 0 > e && (e = -e), 0 > n && (n = -n);
            for (var h, d, g, v, w, x = Math.floor(t), b = Math.floor(e), _ = Math.floor(n), C = t - x, T = e - b, S = n - _, E = 0, A = .5, R = function(t) {
                    return .5 * (1 - f[Math.floor(t * m) % p])
                }, k = 0; u > k; k++) {
                var N = x + (b << r) + (_ << i);
                h = R(C), d = R(T), g = y[N & a], g += h * (y[N + 1 & a] - g), v = y[N + o & a], v += h * (y[N + o + 1 & a] - v), g += d * (v - g), N += s, v = y[N & a], v += h * (y[N + 1 & a] - v), w = y[N + o & a], w += h * (y[N + o + 1 & a] - w), v += d * (w - v), g += R(S) * (v - g), E += g * A, A *= l, x <<= 1, C *= 2, b <<= 1, T *= 2, _ <<= 1, S *= 2, C >= 1 && (x++, C--), T >= 1 && (b++, T--), S >= 1 && (_++, S--)
            }
            return E
        }, n.prototype.noiseDetail = function(t, e) {
            t > 0 && (u = t), e > 0 && (l = e)
        }, n.prototype.noiseSeed = function(t) {
            var e = function() {
                var t, e, n = 4294967296,
                    r = 1664525,
                    o = 1013904223;
                return {
                    setSeed: function(r) {
                        e = t = r || Math.round(Math.random() * n)
                    },
                    getSeed: function() {
                        return t
                    },
                    rand: function() {
                        return e = (r * e + o) % n, e / n
                    }
                }
            }();
            e.setSeed(t), y = new Array(a + 1);
            for (var n = 0; a + 1 > n; n++) y[n] = e.rand()
        }, n
    }({}, core),
    mathtrigonometry = function(t, e, n, r) {
        "use strict";
        var o = e,
            i = n,
            r = r;
        return o.prototype._angleMode = r.RADIANS, o.prototype.acos = function(t) {
            return this._angleMode === r.RADIANS ? Math.acos(t) : i.radiansToDegrees(Math.acos(t))
        }, o.prototype.asin = function(t) {
            return this._angleMode === r.RADIANS ? Math.asin(t) : i.radiansToDegrees(Math.asin(t))
        }, o.prototype.atan = function(t) {
            return this._angleMode === r.RADIANS ? Math.atan(t) : i.radiansToDegrees(Math.atan(t))
        }, o.prototype.atan2 = function(t, e) {
            return this._angleMode === r.RADIANS ? Math.atan2(t, e) : i.radiansToDegrees(Math.atan2(t, e))
        }, o.prototype.cos = function(t) {
            return Math.cos(this._angleMode === r.RADIANS ? t : this.radians(t))
        }, o.prototype.sin = function(t) {
            return Math.sin(this._angleMode === r.RADIANS ? t : this.radians(t))
        }, o.prototype.tan = function(t) {
            return Math.tan(this._angleMode === r.RADIANS ? t : this.radians(t))
        }, o.prototype.degrees = function(t) {
            return i.radiansToDegrees(t)
        }, o.prototype.radians = function(t) {
            return i.degreesToRadians(t)
        }, o.prototype.angleMode = function(t) {
            (t === r.DEGREES || t === r.RADIANS) && (this._angleMode = t)
        }, o
    }({}, core, polargeometry, constants),
    outputfiles = function(t, e) {
        "use strict";

        function n(t, e) {
            e || (e = ""), t || (t = "untitled");
            var n = "";
            return t && t.indexOf(".") > -1 && (n = t.split(".").pop()), e && n !== e && (n = e, t = t + "." + n), [t, n]
        }

        function r(t) {
            document.body.removeChild(t.target)
        }
        var o = e;
        window.URL = window.URL || window.webkitURL, o.prototype._pWriters = [], o.prototype.beginRaw = function() {
            throw "not yet implemented"
        }, o.prototype.beginRecord = function() {
            throw "not yet implemented"
        }, o.prototype.createOutput = function() {
            throw "not yet implemented"
        }, o.prototype.createWriter = function(t, e) {
            var n;
            for (var r in o.prototype._pWriters)
                if (o.prototype._pWriters[r].name === t) return n = new o.PrintWriter(t + window.millis(), e), o.prototype._pWriters.push(n), n;
            return n = new o.PrintWriter(t, e), o.prototype._pWriters.push(n), n
        }, o.prototype.endRaw = function() {
            throw "not yet implemented"
        }, o.prototype.endRecord = function() {
            throw "not yet implemented"
        }, o.PrintWriter = function(t, e) {
            var n = this;
            this.name = t, this.content = "", this.print = function(t) {
                this.content += t
            }, this.println = function(t) {
                this.content += t + "\n"
            }, this.flush = function() {
                this.content = ""
            }, this.close = function() {
                var r = [];
                r.push(this.content), o.prototype.writeFile(r, t, e);
                for (var i in o.prototype._pWriters) o.prototype._pWriters[i].name === this.name && o.prototype._pWriters.splice(i, 1);
                n.flush(), n = {}
            }
        }, o.prototype.saveBytes = function() {
            throw "not yet implemented"
        }, o.prototype.save = function() {
            var t = arguments,
                e = this._curElement.elt;
            if (0 === t.length) return void o.prototype.saveCanvas(e);
            if (t[0] instanceof o.Graphics) return void o.prototype.saveCanvas(t[0].elt, t[1], t[2]);
            if ("string" == typeof t[0]) o.prototype.saveCanvas(e, t[0]);
            else {
                var r = n(t[1], t[2])[1];
                switch (r) {
                    case "json":
                        o.prototype.saveJSON(t[0], t[1], t[2]);
                        break;
                    case "txt":
                        o.prototype.saveStrings(t[0], t[1], t[2]);
                        break;
                    default:
                        t[0] instanceof Array ? o.prototype.saveStrings(t[0], t[1], t[2]) : t[0] instanceof o.Table ? o.prototype.saveTable(t[0], t[1], t[2], t[3]) : t[0] instanceof o.Image ? o.prototype.saveCanvas(t[0].canvas, t[1]) : t[0] instanceof o.SoundFile ? o.prototype.saveSound(t[0], t[1], t[2], t[3]) : t[0] instanceof Object && o.prototype.saveJSON(t[0], t[1], t[2])
                }
            }
        }, o.prototype.saveJSON = function(t, e, n) {
            var r;
            r = n ? JSON.stringify(t) : JSON.stringify(t, void 0, 2), this.saveStrings(r.split("\n"), e, "json")
        }, o.prototype.saveJSONObject = o.prototype.saveJSON, o.prototype.saveJSONArray = o.prototype.saveJSON, o.prototype.saveStream = function() {
            throw "not yet implemented"
        }, o.prototype.saveStrings = function(t, e, n) {
            var r = n || "txt",
                o = this.createWriter(e, r);
            for (var i in t) i < t.length - 1 ? o.println(t[i]) : o.print(t[i]);
            o.close(), o.flush()
        }, o.prototype.saveXML = function() {
            throw "not yet implemented"
        }, o.prototype.selectOutput = function() {
            throw "not yet implemented"
        }, o.prototype.saveTable = function(t, e, n) {
            var r = this.createWriter(e, n),
                o = t.columns,
                s = ",";
            if ("tsv" === n && (s = "	"), "html" !== n) {
                if ("0" !== o[0])
                    for (var a = 0; a < o.length; a++) a < o.length - 1 ? r.print(o[a] + s) : r.println(o[a]);
                for (var u = 0; u < t.rows.length; u++) {
                    var l;
                    for (l = 0; l < t.rows[u].arr.length; l++) l < t.rows[u].arr.length - 1 ? r.print(t.rows[u].arr[l] + s) : u < t.rows.length - 1 ? r.println(t.rows[u].arr[l]) : r.print(t.rows[u].arr[l])
                }
            } else {
                r.println("<html>"), r.println("<head>");
                var c = '  <meta http-equiv="content-type" content';
                if (c += '="text/html;charset=utf-8" />', r.println(c), r.println("</head>"), r.println("<body>"), r.println("  <table>"), "0" !== o[0]) {
                    r.println("    <tr>");
                    for (var p = 0; p < o.length; p++) {
                        var h = i(o[p]);
                        r.println("      <td>" + h), r.println("      </td>")
                    }
                    r.println("    </tr>")
                }
                for (var f = 0; f < t.rows.length; f++) {
                    r.println("    <tr>");
                    for (var d = 0; d < t.columns.length; d++) {
                        var g = t.rows[f].getString(d),
                            m = i(g);
                        r.println("      <td>" + m), r.println("      </td>")
                    }
                    r.println("    </tr>")
                }
                r.println("  </table>"), r.println("</body>"), r.print("</html>")
            }
            r.close(), r.flush()
        };
        var i = function(t) {
            return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        };
        return o.prototype.writeFile = function(t, e, n) {
            var r = "application/octet-stream";
            o.prototype._isSafari() && (r = "text/plain");
            var i = new Blob(t, {
                    type: r
                }),
                s = window.URL.createObjectURL(i);
            o.prototype.downloadFile(s, e, n)
        }, o.prototype.downloadFile = function(t, e, i) {
            var s = n(e, i),
                a = s[0],
                u = s[1],
                l = document.createElement("a");
            if (l.href = t, l.download = a, l.onclick = r, l.style.display = "none", document.body.appendChild(l), o.prototype._isSafari()) {
                var c = "Hello, Safari user! To download this file...\n";
                c += "1. Go to File --> Save As.\n", c += '2. Choose "Page Source" as the Format.\n', c += '3. Name it with this extension: ."' + u + '"', alert(c)
            }
            l.click(), t = null
        }, o.prototype._checkFileExtension = n, o.prototype._isSafari = function() {
            var t = Object.prototype.toString.call(window.HTMLElement);
            return t.indexOf("Constructor") > 0
        }, o
    }({}, core),
    outputimage = function(t, e) {
        "use strict";
        var n = e,
            r = [];
        return n.prototype.saveCanvas = function(t, e, r) {
            r || (r = n.prototype._checkFileExtension(e, r)[1], "" === r && (r = "png"));
            var o;
            if (t ? o = t : this._curElement && this._curElement.elt && (o = this._curElement.elt), n.prototype._isSafari()) {
                var i = "Hello, Safari user!\n";
                i += "Now capturing a screenshot...\n", i += "To save this image,\n", i += "go to File --> Save As.\n", alert(i), window.location.href = o.toDataURL()
            } else {
                var s;
                if ("undefined" == typeof r) r = "png", s = "image/png";
                else switch (r) {
                    case "png":
                        s = "image/png";
                        break;
                    case "jpeg":
                        s = "image/jpeg";
                        break;
                    case "jpg":
                        s = "image/jpeg";
                        break;
                    default:
                        s = "image/png"
                }
                var a = "image/octet-stream",
                    u = o.toDataURL(s);
                u = u.replace(s, a), n.prototype.downloadFile(u, e, r)
            }
        }, n.prototype.saveFrames = function(t, e, o, i, s) {
            var a = o || 3;
            a = n.prototype.constrain(a, 0, 15), a = 1e3 * a;
            var u = i || 15;
            u = n.prototype.constrain(u, 0, 22);
            var l = 0,
                c = n.prototype._makeFrame,
                p = this._curElement.elt,
                h = setInterval(function() {
                    c(t + l, e, p), l++
                }, 1e3 / u);
            setTimeout(function() {
                if (clearInterval(h), s) s(r);
                else
                    for (var t = 0; t < r.length; t++) {
                        var e = r[t];
                        n.prototype.downloadFile(e.imageData, e.filename, e.ext)
                    }
                r = []
            }, a + .01)
        }, n.prototype._makeFrame = function(t, e, n) {
            var o;
            o = this ? this._curElement.elt : n;
            var i;
            if (e) switch (e.toLowerCase()) {
                case "png":
                    i = "image/png";
                    break;
                case "jpeg":
                    i = "image/jpeg";
                    break;
                case "jpg":
                    i = "image/jpeg";
                    break;
                default:
                    i = "image/png"
            } else e = "png", i = "image/png";
            var s = "image/octet-stream",
                a = o.toDataURL(i);
            a = a.replace(i, s);
            var u = {};
            u.imageData = a, u.filename = t, u.ext = e, r.push(u)
        }, n
    }({}, core),
    outputtext_area = function(t, e) {
        "use strict";
        var n = e;
        return n.prototype.print = window.console && console.log ? console.log.bind(console) : function() {}, n.prototype.println = n.prototype.print, n
    }({}, core),
    renderingrendering = function(t, e, n) {
        var r = e,
            n = n;
        return r.prototype.createCanvas = function(t, e, n) {
            var o;
            return n ? (o = document.createElement("canvas"), o.id = "defaultCanvas") : o = this.canvas, this._setupDone || (o.className += " p5_hidden", o.style.visibility = "hidden"), this._userNode ? this._userNode.appendChild(o) : document.body.appendChild(o), this._defaultGraphics || (this._defaultGraphics = new r.Graphics(o, this, !0), this._elements.push(this._defaultGraphics)), this._defaultGraphics.resize(t, e), this._defaultGraphics._applyDefaults(), this._defaultGraphics
        }, r.prototype.resizeCanvas = function(t, e) {
            this._defaultGraphics && (this._defaultGraphics.resize(t, e), this._defaultGraphics._applyDefaults(), this.redraw())
        }, r.prototype.noCanvas = function() {
            this.canvas && this.canvas.parentNode.removeChild(this.canvas)
        }, r.prototype.createGraphics = function(t, e) {
            var n = document.createElement("canvas"),
                o = this._userNode || document.body;
            o.appendChild(n);
            var i = new r.Graphics(n, this, !1);
            this._elements.push(i);
            for (var s in r.prototype) i.hasOwnProperty(s) || (i[s] = "function" == typeof r.prototype[s] ? r.prototype[s].bind(i) : r.prototype[s]);
            return i.resize(t, e), i._applyDefaults(), i
        }, r.prototype.blendMode = function(t) {
            if (t !== n.BLEND && t !== n.DARKEST && t !== n.LIGHTEST && t !== n.DIFFERENCE && t !== n.MULTIPLY && t !== n.EXCLUSION && t !== n.SCREEN && t !== n.REPLACE && t !== n.OVERLAY && t !== n.HARD_LIGHT && t !== n.SOFT_LIGHT && t !== n.DODGE && t !== n.BURN && t !== n.ADD && t !== n.NORMAL) throw new Error("Mode " + t + " not recognized.");
            this.drawingContext.globalCompositeOperation = t
        }, r
    }({}, core, constants),
    shape2d_primitives = function(t, e, n, r) {
        "use strict";
        var o = e,
            n = n,
            r = r;
        return o.prototype.arc = function(t, e, o, i, s, a, u) {
            if (this._doStroke || this._doFill) {
                this._angleMode === r.DEGREES && (s = this.radians(s), a = this.radians(a));
                var l = this.drawingContext,
                    c = n.arcModeAdjust(t, e, o, i, this._ellipseMode),
                    p = c.h > c.w ? c.h / 2 : c.w / 2,
                    h = c.h > c.w ? c.w / c.h : 1,
                    f = c.h > c.w ? 1 : c.h / c.w;
                return l.save(), l.scale(h, f), l.beginPath(), l.arc(c.x, c.y, p, s, a), this._doStroke && l.stroke(), u === r.CHORD || u === r.OPEN ? l.closePath() : (u === r.PIE || void 0 === u) && (l.lineTo(c.x, c.y), l.closePath()), this._doFill && l.fill(), this._doStroke && u !== r.OPEN && void 0 !== u && l.stroke(), l.restore(), this
            }
        }, o.prototype.ellipse = function(t, e, r, o) {
            if (this._doStroke || this._doFill) {
                r = Math.abs(r), o = Math.abs(o);
                var i = this.drawingContext,
                    s = n.modeAdjust(t, e, r, o, this._ellipseMode);
                if (i.beginPath(), r === o) i.arc(s.x + s.w / 2, s.y + s.w / 2, s.w / 2, 0, 2 * Math.PI, !1);
                else {
                    var a = .5522848,
                        u = s.w / 2 * a,
                        l = s.h / 2 * a,
                        c = s.x + s.w,
                        p = s.y + s.h,
                        h = s.x + s.w / 2,
                        f = s.y + s.h / 2;
                    i.moveTo(s.x, f), i.bezierCurveTo(s.x, f - l, h - u, s.y, h, s.y), i.bezierCurveTo(h + u, s.y, c, f - l, c, f), i.bezierCurveTo(c, f + l, h + u, p, h, p), i.bezierCurveTo(h - u, p, s.x, f + l, s.x, f), i.closePath()
                }
                return this._doFill && i.fill(), this._doStroke && i.stroke(), this
            }
        }, o.prototype.line = function(t, e, n, r) {
            if (this._doStroke) {
                var o = this.drawingContext;
                if ("rgba(0,0,0,0)" !== o.strokeStyle) return o.beginPath(), o.moveTo(t, e), o.lineTo(n, r), o.stroke(), this
            }
        }, o.prototype.point = function(t, e) {
            if (this._doStroke) {
                var n = this.drawingContext,
                    o = n.strokeStyle,
                    i = n.fillStyle;
                if ("rgba(0,0,0,0)" !== o) return t = Math.round(t), e = Math.round(e), n.fillStyle = o, n.lineWidth > 1 ? (n.beginPath(), n.arc(t, e, n.lineWidth / 2, 0, r.TWO_PI, !1), n.fill()) : n.fillRect(t, e, 1, 1), n.fillStyle = i, this
            }
        }, o.prototype.quad = function(t, e, n, r, o, i, s, a) {
            if (this._doStroke || this._doFill) {
                var u = this.drawingContext;
                return u.beginPath(), u.moveTo(t, e), u.lineTo(n, r), u.lineTo(o, i), u.lineTo(s, a), u.closePath(), this._doFill && u.fill(), this._doStroke && u.stroke(), this
            }
        }, o.prototype.rect = function(t, e, r, o) {
            if (this._doStroke || this._doFill) {
                var i = n.modeAdjust(t, e, r, o, this._rectMode),
                    s = this.drawingContext;
                return this._doStroke && s.lineWidth % 2 === 1 && s.translate(.5, .5), s.beginPath(), s.rect(i.x, i.y, i.w, i.h), this._doFill && s.fill(), this._doStroke && s.stroke(), this._doStroke && s.lineWidth % 2 === 1 && s.translate(-.5, -.5), this
            }
        }, o.prototype.triangle = function(t, e, n, r, o, i) {
            if (this._doStroke || this._doFill) {
                var s = this.drawingContext;
                return s.beginPath(), s.moveTo(t, e), s.lineTo(n, r), s.lineTo(o, i), s.closePath(), this._doFill && s.fill(), this._doStroke && s.stroke(), this
            }
        }, o
    }({}, core, canvas, constants),
    shapeattributes = function(t, e, n) {
        "use strict";
        var r = e,
            n = n;
        return r.prototype._rectMode = n.CORNER, r.prototype._ellipseMode = n.CENTER, r.prototype.ellipseMode = function(t) {
            return (t === n.CORNER || t === n.CORNERS || t === n.RADIUS || t === n.CENTER) && (this._ellipseMode = t), this
        }, r.prototype.noSmooth = function() {
            return this.drawingContext.mozImageSmoothingEnabled = !1, this.drawingContext.webkitImageSmoothingEnabled = !1, this
        }, r.prototype.rectMode = function(t) {
            return (t === n.CORNER || t === n.CORNERS || t === n.RADIUS || t === n.CENTER) && (this._rectMode = t), this
        }, r.prototype.smooth = function() {
            return this.drawingContext.mozImageSmoothingEnabled = !0, this.drawingContext.webkitImageSmoothingEnabled = !0, this
        }, r.prototype.strokeCap = function(t) {
            return (t === n.ROUND || t === n.SQUARE || t === n.PROJECT) && (this.drawingContext.lineCap = t), this
        }, r.prototype.strokeJoin = function(t) {
            return (t === n.ROUND || t === n.BEVEL || t === n.MITER) && (this.drawingContext.lineJoin = t), this
        }, r.prototype.strokeWeight = function(t) {
            return this.drawingContext.lineWidth = "undefined" == typeof t || 0 === t ? 1e-4 : t, this
        }, r
    }({}, core, constants),
    shapecurves = function(t, e) {
        "use strict";
        var n = e,
            r = 20,
            o = 20;
        return n.prototype._curveTightness = 0, n.prototype.bezier = function(t, e, n, r, o, i, s, a) {
            return this._doStroke ? (this.beginShape(), this.vertex(t, e), this.bezierVertex(n, r, o, i, s, a), this.endShape(), this.stroke(), this) : void 0
        }, n.prototype.bezierDetail = function(t) {
            return r = t, this
        }, n.prototype.bezierPoint = function(t, e, n, r, o) {
            var i = 1 - o;
            return Math.pow(i, 3) * t + 3 * Math.pow(i, 2) * o * e + 3 * i * Math.pow(o, 2) * n + Math.pow(o, 3) * r
        }, n.prototype.bezierTangent = function(t, e, n, r, o) {
            var i = 1 - o;
            return 3 * r * Math.pow(o, 2) - 3 * n * Math.pow(o, 2) + 6 * n * i * o - 6 * e * i * o + 3 * e * Math.pow(i, 2) - 3 * t * Math.pow(i, 2)
        }, n.prototype.curve = function(t, e, n, r, o, i, s, a) {
            return this._doStroke ? (this.beginShape(), this.curveVertex(t, e), this.curveVertex(n, r), this.curveVertex(o, i), this.curveVertex(s, a), this.endShape(), this.stroke(), this) : void 0
        }, n.prototype.curveDetail = function(t) {
            return o = t, this
        }, n.prototype.curveTightness = function(t) {
            this._setProperty("_curveTightness", t)
        }, n.prototype.curvePoint = function(t, e, n, r, o) {
            var i = o * o * o,
                s = o * o,
                a = -.5 * i + s - .5 * o,
                u = 1.5 * i - 2.5 * s + 1,
                l = -1.5 * i + 2 * s + .5 * o,
                c = .5 * i - .5 * s;
            return t * a + e * u + n * l + r * c
        }, n.prototype.curveTangent = function(t, e, n, r, o) {
            var i = o * o,
                s = -3 * i / 2 + 2 * o - .5,
                a = 9 * i / 2 - 5 * o,
                u = -9 * i / 2 + 4 * o + .5,
                l = 3 * i / 2 - o;
            return t * s + e * a + n * u + r * l
        }, n.prototype.curveTightness = function() {
            throw "not yet implemented"
        }, n
    }({}, core),
    shapevertex = function(t, e, n) {
        "use strict";
        var r = e,
            n = n,
            o = null,
            i = [],
            s = [],
            a = !1,
            u = !1,
            l = !1,
            c = !1;
        return r.prototype._doFillStrokeClose = function() {
            this._doFill && this.drawingContext.fill(), this._doStroke && this.drawingContext.stroke(), this.drawingContext.closePath()
        }, r.prototype.beginContour = function() {
            return s = [], c = !0, this
        }, r.prototype.beginShape = function(t) {
            return o = t === n.POINTS || t === n.LINES || t === n.TRIANGLES || t === n.TRIANGLE_FAN || t === n.TRIANGLE_STRIP || t === n.QUADS || t === n.QUAD_STRIP ? t : null, i = [], s = [], this
        }, r.prototype.bezierVertex = function() {
            if (0 === i.length) throw "vertex() must be used once before calling bezierVertex()";
            a = !0;
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return t.isVert = !1, c ? s.push(t) : i.push(t), this
        }, r.prototype.curveVertex = function(t, e) {
            return u = !0, this.vertex(t, e), this
        }, r.prototype.endContour = function() {
            var t = s[0].slice();
            t.isVert = s[0].isVert, t.moveTo = !1, s.push(t), i.push(i[0]);
            for (var e = 0; e < s.length; e++) i.push(s[e]);
            return this
        }, r.prototype.endShape = function(t) {
            if (0 === i.length) return this;
            if (!this._doStroke && !this._doFill) return this;
            var e, r = t === n.CLOSE;
            r && !c && i.push(i[0]);
            var s, p, h = i.length;
            if (!u || o !== n.POLYGON && null !== o)
                if (!a || o !== n.POLYGON && null !== o)
                    if (!l || o !== n.POLYGON && null !== o)
                        if (o === n.POINTS)
                            for (s = 0; h > s; s++) e = i[s], this._doStroke && this.stroke(e[6]), this.point(e[0], e[1]);
                        else if (o === n.LINES)
                for (s = 0; h > s + 1; s += 2) e = i[s], this._doStroke && this.stroke(i[s + 1][6]), this.line(e[0], e[1], i[s + 1][0], i[s + 1][1]);
            else if (o === n.TRIANGLES)
                for (s = 0; h > s + 2; s += 3) e = i[s], this.drawingContext.beginPath(), this.drawingContext.moveTo(e[0], e[1]), this.drawingContext.lineTo(i[s + 1][0], i[s + 1][1]), this.drawingContext.lineTo(i[s + 2][0], i[s + 2][1]), this.drawingContext.lineTo(e[0], e[1]), this._doFill && (this.fill(i[s + 2][5]), this.drawingContext.fill()), this._doStroke && (this.stroke(i[s + 2][6]), this.drawingContext.stroke()), this.drawingContext.closePath();
            else if (o === n.TRIANGLE_STRIP)
                for (s = 0; h > s + 1; s++) e = i[s], this.drawingContext.beginPath(), this.drawingContext.moveTo(i[s + 1][0], i[s + 1][1]), this.drawingContext.lineTo(e[0], e[1]), this._doStroke && this.stroke(i[s + 1][6]), this._doFill && this.fill(i[s + 1][5]), h > s + 2 && (this.drawingContext.lineTo(i[s + 2][0], i[s + 2][1]), this._doStroke && this.stroke(i[s + 2][6]), this._doFill && this.fill(i[s + 2][5])), this._doFillStrokeClose();
            else if (o === n.TRIANGLE_FAN) {
                if (h > 2)
                    for (this.drawingContext.beginPath(), this.drawingContext.moveTo(i[0][0], i[0][1]), this.drawingContext.lineTo(i[1][0], i[1][1]), this.drawingContext.lineTo(i[2][0], i[2][1]), this._doFill && this.fill(i[2][5]), this._doStroke && this.stroke(i[2][6]), this._doFillStrokeClose(), s = 3; h > s; s++) e = i[s], this.drawingContext.beginPath(), this.drawingContext.moveTo(i[0][0], i[0][1]), this.drawingContext.lineTo(i[s - 1][0], i[s - 1][1]), this.drawingContext.lineTo(e[0], e[1]), this._doFill && this.fill(e[5]), this._doStroke && this.stroke(e[6]), this._doFillStrokeClose()
            } else if (o === n.QUADS)
                for (s = 0; h > s + 3; s += 4) {
                    for (e = i[s], this.drawingContext.beginPath(), this.drawingContext.moveTo(e[0], e[1]), p = 1; 4 > p; p++) this.drawingContext.lineTo(i[s + p][0], i[s + p][1]);
                    this.drawingContext.lineTo(e[0], e[1]), this._doFill && this.fill(i[s + 3][5]), this._doStroke && this.stroke(i[s + 3][6]), this._doFillStrokeClose()
                } else if (o === n.QUAD_STRIP) {
                    if (h > 3)
                        for (s = 0; h > s + 1; s += 2) e = i[s], this.drawingContext.beginPath(), h > s + 3 ? (this.drawingContext.moveTo(i[s + 2][0], i[s + 2][1]), this.drawingContext.lineTo(e[0], e[1]), this.drawingContext.lineTo(i[s + 1][0], i[s + 1][1]), this.drawingContext.lineTo(i[s + 3][0], i[s + 3][1]), this._doFill && this.fill(i[s + 3][5]), this._doStroke && this.stroke(i[s + 3][6])) : (this.drawingContext.moveTo(e[0], e[1]), this.drawingContext.lineTo(i[s + 1][0], i[s + 1][1])), this._doFillStrokeClose()
                } else {
                    for (this.drawingContext.beginPath(), this.drawingContext.moveTo(i[0][0], i[0][1]), s = 1; h > s; s++) e = i[s], e.isVert && (e.moveTo ? this.drawingContext.moveTo(e[0], e[1]) : this.drawingContext.lineTo(e[0], e[1]));
                    this._doFillStrokeClose()
                }
            else {
                for (this.drawingContext.beginPath(), s = 0; h > s; s++) i[s].isVert ? i[s].moveTo ? this.drawingContext.moveTo([0], i[s][1]) : this.drawingContext.lineTo(i[s][0], i[s][1]) : this.drawingContext.quadraticCurveTo(i[s][0], i[s][1], i[s][2], i[s][3]);
                this._doFillStrokeClose()
            } else {
                for (this.drawingContext.beginPath(), s = 0; h > s; s++) i[s].isVert ? i[s].moveTo ? this.drawingContext.moveTo(i[s][0], i[s][1]) : this.drawingContext.lineTo(i[s][0], i[s][1]) : this.drawingContext.bezierCurveTo(i[s][0], i[s][1], i[s][2], i[s][3], i[s][4], i[s][5]);
                this._doFillStrokeClose()
            } else if (h > 3) {
                var f = [],
                    d = 1 - this._curveTightness;
                for (this.drawingContext.beginPath(), this.drawingContext.moveTo(i[1][0], i[1][1]), s = 1; h > s + 2; s++) e = i[s], f[0] = [e[0], e[1]], f[1] = [e[0] + (d * i[s + 1][0] - d * i[s - 1][0]) / 6, e[1] + (d * i[s + 1][1] - d * i[s - 1][1]) / 6], f[2] = [i[s + 1][0] + (d * i[s][0] - d * i[s + 2][0]) / 6, i[s + 1][1] + (d * i[s][1] - d * i[s + 2][1]) / 6], f[3] = [i[s + 1][0], i[s + 1][1]], this.drawingContext.bezierCurveTo(f[1][0], f[1][1], f[2][0], f[2][1], f[3][0], f[3][1]);
                r && this.drawingContext.lineTo(i[s + 1][0], i[s + 1][1]), this._doFillStrokeClose()
            }
            return u = !1, a = !1, l = !1, c = !1, r && i.pop(), this
        }, r.prototype.quadraticVertex = function(t, e, r, o) {
            if (this._contourInited) {
                var a = {};
                return a.x = t, a.y = e, a.x3 = r, a.y3 = o, a.type = n.QUADRATIC, this._contourVertices.push(a), this
            }
            if (!(i.length > 0)) throw "vertex() must be used once before calling quadraticVertex()";
            l = !0;
            for (var u = [], p = 0; p < arguments.length; p++) u[p] = arguments[p];
            return u.isVert = !1, c ? s.push(u) : i.push(u), this
        }, r.prototype.vertex = function(t, e, n) {
            var r = [];
            return r.isVert = !0, r[0] = t, r[1] = e, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = this.drawingContext.fillStyle, r[6] = this.drawingContext.strokeStyle, n && (r.moveTo = n), c ? (0 === s.length && (r.moveTo = !0), s.push(r)) : i.push(r), this
        }, r
    }({}, core, constants),
    structure = function(t, e) {
        "use strict";
        var n = e;
        return n.prototype.exit = function() {
            throw "exit() not implemented, see remove()"
        }, n.prototype.noLoop = function() {
            this._loop = !1, this._drawInterval && clearInterval(this._drawInterval)
        }, n.prototype.loop = function() {
            this._loop = !0, this._draw()
        }, n.prototype.push = function() {
            this.drawingContext.save(), this._styles.push({
                doStroke: this._doStroke,
                doFill: this._doFill,
                tint: this._tint,
                imageMode: this._imageMode,
                rectMode: this._rectMode,
                ellipseMode: this._ellipseMode,
                colorMode: this._colorMode,
                textFont: this.textFont,
                textLeading: this.textLeading,
                textSize: this.textSize,
                textStyle: this.textStyle
            })
        }, n.prototype.pop = function() {
            this.drawingContext.restore();
            var t = this._styles.pop();
            this._doStroke = t.doStroke, this._doFill = t.doFill, this._tint = t.tint, this._imageMode = t.imageMode, this._rectMode = t.rectMode, this._ellipseMode = t.ellipseMode, this._colorMode = t.colorMode, this.textFont = t.textFont, this.textLeading = t.textLeading, this.textSize = t.textSize, this.textStyle = t.textStyle
        }, n.prototype.pushStyle = function() {
            throw new Error("pushStyle() not used, see push()")
        }, n.prototype.popStyle = function() {
            throw new Error("popStyle() not used, see pop()")
        }, n.prototype.redraw = function() {
            var t = this._isGlobal ? window : this;
            t.draw && t.draw()
        }, n.prototype.size = function() {
            throw "size() not implemented, see createCanvas()"
        }, n
    }({}, core),
    transform = function(t, e, n) {
        "use strict";
        var r = e,
            n = n;
        return r.prototype.applyMatrix = function(t, e, n, r, o, i) {
            return this.drawingContext.transform(t, e, n, r, o, i), this
        }, r.prototype.popMatrix = function() {
            throw new Error("popMatrix() not used, see pop()")
        }, r.prototype.printMatrix = function() {
            throw new Error("printMatrix() not implemented")
        }, r.prototype.pushMatrix = function() {
            throw new Error("pushMatrix() not used, see push()")
        }, r.prototype.resetMatrix = function() {
            return this.drawingContext.setTransform(), this
        }, r.prototype.rotate = function(t) {
            return this._angleMode === n.DEGREES && (t = this.radians(t)), this.drawingContext.rotate(t), this
        }, r.prototype.rotateX = function() {
            throw "not yet implemented"
        }, r.prototype.rotateY = function() {
            throw "not yet implemented"
        }, r.prototype.scale = function() {
            var t = 1,
                e = 1;
            return 1 === arguments.length ? t = e = arguments[0] : (t = arguments[0], e = arguments[1]), this.drawingContext.scale(t, e), this
        }, r.prototype.shearX = function(t) {
            return this._angleMode === n.DEGREES && (t = this.radians(t)), this.drawingContext.transform(1, 0, this.tan(t), 1, 0, 0), this
        }, r.prototype.shearY = function(t) {
            return this._angleMode === n.DEGREES && (t = this.radians(t)), this.drawingContext.transform(1, this.tan(t), 0, 1, 0, 0), this
        }, r.prototype.translate = function(t, e) {
            return this.drawingContext.translate(t, e), this
        }, r
    }({}, core, constants, outputtext_area),
    typographyattributes = function(t, e, n) {
        "use strict";
        var r = e,
            n = n;
        return r.prototype._textLeading = 15, r.prototype._textFont = "sans-serif", r.prototype._textSize = 12, r.prototype._textStyle = n.NORMAL, r.prototype._textAscent = null, r.prototype._textDescent = null, r.prototype.textAlign = function(t) {
            (t === n.LEFT || t === n.RIGHT || t === n.CENTER) && (this.drawingContext.textAlign = t)
        }, r.prototype.textLeading = function(t) {
            this._setProperty("_textLeading", t)
        }, r.prototype.textSize = function(t) {
            this._setProperty("_textSize", t), this._applyTextProperties()
        }, r.prototype.textStyle = function(t) {
            (t === n.NORMAL || t === n.ITALIC || t === n.BOLD) && (this._setProperty("_textStyle", t), this._applyTextProperties())
        }, r.prototype.textWidth = function(t) {
            return this.drawingContext.measureText(t).width
        }, r.prototype.textAscent = function() {
            return null == this._textAscent && this._updateTextMetrics(), this._textAscent
        }, r.prototype.textDescent = function() {
            return null == this._textDescent && this._updateTextMetrics(), this._textDescent
        }, r.prototype._applyTextProperties = function() {
            this._setProperty("_textAscent", null), this._setProperty("_textDescent", null);
            var t = this._textStyle + " " + this._textSize + "px " + this._textFont;
            this.drawingContext.font = t
        }, r.prototype._updateTextMetrics = function() {
            var t = document.createElement("span");
            t.style.fontFamily = this._textFont, t.style.fontSize = this._textSize + "px", t.innerHTML = "ABCjgq|";
            var e = document.createElement("div");
            e.style.display = "inline-block", e.style.width = "1px", e.style.height = "0px";
            var n = document.createElement("div");
            n.appendChild(t), n.appendChild(e), n.style.height = "0px", n.style.overflow = "hidden", document.body.appendChild(n), e.style.verticalAlign = "baseline";
            var r = this._calculateOffset(e),
                o = this._calculateOffset(t),
                i = r[1] - o[1];
            e.style.verticalAlign = "bottom", r = this._calculateOffset(e), o = this._calculateOffset(t);
            var s = r[1] - o[1],
                a = s - i;
            document.body.removeChild(n), this._setProperty("_textAscent", i), this._setProperty("_textDescent", a)
        }, r.prototype._calculateOffset = function(t) {
            var e = 0,
                n = 0;
            if (t.offsetParent) {
                do e += t.offsetLeft, n += t.offsetTop; while (t = t.offsetParent)
            } else e += t.offsetLeft, n += t.offsetTop;
            return [e, n]
        }, r
    }({}, core, constants),
    typographyloading_displaying = function(t, e) {
        "use strict";
        var n = e;
        return n.prototype.text = function(t, e, n, r, o) {
            if ("string" == typeof t) {
                "undefined" != typeof r && (n += this._textLeading, o += n), t = t.replace(/(\t)/g, "  ");
                for (var i = t.split("\n"), s = 0; s < i.length; s++) {
                    for (var a = "", u = i[s].split(" "), l = 0; l < u.length; l++)
                        if (n + this._textLeading <= o || "undefined" == typeof o) {
                            var c = a + u[l] + " ",
                                p = this.drawingContext.measureText(c),
                                h = p.width;
                            "undefined" != typeof r && h > r ? (this._doFill && this.drawingContext.fillText(a, e, n), this._doStroke && this.drawingContext.strokeText(a, e, n), a = u[l] + " ", n += this._textLeading) : a = c
                        }
                    this._doFill && this.drawingContext.fillText(a, e, n), this._doStroke && this.drawingContext.strokeText(a, e, n), n += this._textLeading
                }
            }
        }, n.prototype.textFont = function(t) {
            this._setProperty("_textFont", t), this._applyTextProperties()
        }, n
    }({}, core),
    src_app = function(t, e) {
        "use strict";
        var n = e,
            r = function() {
                window.PHANTOMJS || (window.setup && "function" == typeof window.setup || window.draw && "function" == typeof window.draw) && new n
            };
        return "complete" === document.readyState ? r() : window.addEventListener("load", r, !1), window.p5 = n, n
    }({}, core, p5Color, p5Element, p5Graphics, p5Image, p5Vector, p5TableRow, p5Table, colorcreating_reading, colorsetting, constants, dataconversion, dataarray_functions, datastring_functions, environment, imageimage, imageloading_displaying, imagepixels, inputfiles, inputkeyboard, inputmouse, inputtime_date, inputtouch, mathmath, mathcalculation, mathrandom, mathnoise, mathtrigonometry, outputfiles, outputimage, outputtext_area, renderingrendering, shape2d_primitives, shapeattributes, shapecurves, shapevertex, structure, transform, typographyattributes, typographyloading_displaying);
! function(t) {
    "use strict";
    var e, n = "0.1.13";
    e = function() {
        var e = function(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            },
            r = function(t, e) {
                for (var n in e) t[n].value = e[n]
            },
            o = function(t) {
                return Array.isArray(t)
            },
            i = function(t) {
                return "function" == typeof t
            },
            s = function(t) {
                return "object" == typeof t
            },
            a = function(t) {
                return "string" == typeof t
            },
            u = function(t) {
                return "number" == typeof t
            },
            l = function(t) {
                return "undefined" != typeof t
            },
            c = function(t) {
                l(t);
                return l(t) && null !== t ? !0 : void 0
            },
            p = function(t) {
                var e = !1;
                return Object(t) && "node" in t && (e = !0), e
            },
            h = function(t) {
                return "undefined" != typeof t.context
            },
            f = function(t) {
                return t.hasOwnProperty("input") || t.hasOwnProperty("output")
            },
            d = function(t) {
                return s(t) ? "setValueAtTime" in t : !1
            },
            g = function(t, e, n, r, o) {
                if (c(o)) switch (o) {
                    case "linear":
                        t[e].setValueAtTime(t[e].value, w.now()), t[e].linearRampToValueAtTime(n, r);
                        break;
                    case "exponential":
                        t[e].setValueAtTime(t[e].value, w.now()), 0 === n && (n = 1e-8), t[e].exponentialRampToValueAtTime(n, r);
                        break;
                    default:
                        t[e].setValueAtTime(n, r)
                } else t[e].setValueAtTime(n, r)
            },
            m = function(t, e) {
                return t && c(t[e]) ? c(t[e].value) ? t[e].value : t[e] : void 0
            },
            y = function(t, e, n, r, o) {
                c(t[e].value) ? c(r) ? g(t, e, n, r, o) : t[e].value = n : t[e] = n
            },
            v = function(t, e) {
                return function(n, r, o) {
                    return c(n) ? y(t, e, n, r, o) : m(t, e)
                }
            },
            w = {},
            x = [];
        w.version = n, w.isBrowserSupported = !1, w.processors = [];
        var b = function(t, e) {
                var n;
                if ("undefined" == typeof webkitAudioContext && "undefined" == typeof AudioContext)
                    if ("undefined" == typeof webkitAudiocontext().prototype.createGainNode) e("Sorry, your browser doesn't support a recent enough version of the Web Audio API.");
                    else {
                        var r = webkitAudiocontext().prototype;
                        r.createGain = r.createGainNode, r.createDelay = r.createDelayNode, r.createScriptProcessor = r.createJavaScriptNode
                    }
                else "function" == typeof AudioContext ? (n = new AudioContext, w.context = function() {
                    return n
                }) : (n = new webkitAudioContext, w.context = function() {
                    return n
                });
                w.isBrowserSupported = !0, t()
            },
            _ = function() {
                w.speakers = w.context().destination, w.osc = w.oscillator
            };
        w.now = function() {
            return this.context().currentTime
        }, w.channelSplitter = function() {
            return w.context().createChannelSplitter()
        }, w.channelMerger = function(t) {
            return w.context().createChannelMerger(t)
        }, w.connect = function() {
            var t, e = arguments.length,
                n = function() {
                    arguments[0].connect(arguments[1], 0, arguments[2])
                },
                r = function() {
                    arguments[0].connect(arguments[1].input, 0, arguments[2])
                },
                i = function() {
                    for (var t = 0; t < arguments[1].length; t++) w.connect(arguments[0], arguments[1][t])
                },
                s = function() {
                    for (var t = 0; t < arguments[0].length; t++) w.connect(arguments[0][t], arguments[1])
                },
                a = function() {
                    arguments[0].output.connect(arguments[1].input, 0, arguments[2])
                },
                u = function() {
                    arguments[0].output.connect(arguments[1], 0, arguments[2])
                },
                l = function() {
                    for (var t = 0; t < arguments[0].length; t++) w.connect(arguments[0][t], arguments[1])
                },
                c = function() {
                    for (var t = 0; t < arguments[0].length; t++) w.connect(arguments[0][t], arguments[1])
                },
                g = function() {
                    arguments[0].connect(arguments[1])
                },
                m = function() {
                    arguments[0].output.connect(arguments[1])
                };
            for (t = 0; e - 1 > t; t++) {
                var y = arguments[t],
                    v = arguments[t + 1];
                if (h(y) && f(v)) r(y, v);
                else if (f(y) && h(v)) u(y, v);
                else if (h(y) && o(v)) i(y, v);
                else if (o(y) && h(v)) s(y, v);
                else if (h(y) && h(v)) n(y, v);
                else if (f(y) && f(v)) a(y, v);
                else if (f(y) && o(v)) connectTswNodeToArray(y, v);
                else if (o(y) && f(v)) l(y, v);
                else if (o(y) && o(v)) c(y, v);
                else if (p(y) && o(v)) connectObjectWithNodeToArray(y, v);
                else if (o(y) && p(v)) connectArrayToObjectWithNode(y, v);
                else {
                    if (p(y) && p(v)) {
                        if (h(y.node) && h(v.node)) {
                            n(y.node, v.node, v.channel);
                            continue
                        }
                        if (f(y.node) && h(v.node)) {
                            u(y.node, v.node, v.channel);
                            continue
                        }
                        if (h(y.node) && f(v.node)) {
                            r(y.node, v.node, v.channel);
                            continue
                        }
                        if (f(y.node) && f(v.node)) {
                            a(y.node, v.node, v.channel);
                            continue
                        }
                    }
                    h(y) && d(v) ? g(y, v) : f(y) && d(v) && m(y, v)
                }
            }
        }, w.disconnect = function() {
            for (var t = arguments.length, e = 0; t > e; e++) arguments[e].hasOwnProperty("disconnect") && arguments[e].disconnect(), arguments[e].hasOwnProperty("input") && w.disconnect(arguments[e].input), arguments[e].hasOwnProperty("ouput") && w.disconnect(arguments[e].output)
        }, w.disconnectAfterTime = function(t, e) {
            x.push({
                node: t,
                time: e
            })
        }, w.load = function() {
            var t, e, n = {},
                r = arguments[0],
                o = "",
                s = [],
                a = 0,
                u = 0,
                l = 0,
                c = this,
                p = function(t, e, n, r, o, s) {
                    var p = new XMLHttpRequest;
                    p.open("GET", t + n, !0), p.responseType = "arraybuffer";
                    var h = function() {
                            a++, c.context().decodeAudioData(p.response, function(t) {
                                r[e] = t, Object.keys(r).length === l && o(r)
                            })
                        },
                        f = function() {
                            u++, i(s) ? s() : console.log("There was an error loading your file(s)", p.status)
                        };
                    p.onreadystatechange = function() {
                        4 === p.readyState && (200 === p.status ? h() : f())
                    }, p.send()
                };
            if ("object" == typeof arguments[1] ? (o = arguments[1].path || "", s = arguments[1].extensions || []) : "function" == typeof arguments[1] && (t = arguments[1]), "function" == typeof arguments[2] && (e = arguments[2]), "object" == typeof r) {
                l = Object.keys(r).length;
                for (var h in r) p(o, h, r[h], n, t, e)
            } else {
                if ("string" != typeof r) throw new Error("Files must be an array or a valid string.");
                l = 1, p(o, h, r[h], n, t)
            }
        }, w.wait = function(t) {
            var e, n = this.context().createDelay();
            return e = w.createNode(), e.nodeType = "wait", e.time = v(n, "delayTime"), e.time(t || 1), w.connect(e.input, n, e.output), e
        }, w.createMonoMaker = function() {
            var t = {};
            return t.input = w.createGain(), t.output = w.createGain(), w.connect(t.input, t.output), t
        }, w.panner = function(t) {
            var e, n = (w.gain(), w.gain(0)),
                r = w.gain(0),
                o = w.channelMerger(2);
            e = w.createNode(), e.nodeType = "panner";
            var i = function(t) {
                return t > 1 ? t = 1 : -1 > t && (t = -1), t
            };
            return e.pan = function(t, e) {
                var o;
                return l(t) ? (t = i(t || 0), o = 1 - (t + 1) / 2, n.gain(o, e), r.gain(1 - o, e), void 0) : -(2 * (n.gain() - 1)) - 1
            }, e.pan(t || 0), w.connect(e.input, [n, r]), w.connect({
                node: n
            }, {
                node: o,
                channel: 0
            }), w.connect({
                node: r
            }, {
                node: o,
                channel: 1
            }), w.connect(o, e.output), e
        }, w.play = function(t, e) {
            e = e || 0, o(t) ? t.forEach(function(t) {
                t.start(e)
            }) : t.start(e)
        }, w.stop = function(t, e) {
            e = e || 0, t.stop(e)
        }, w.reverse = function(t) {
            for (var e = 0; e < t.buffer.numberOfChannels; e++) Array.prototype.reverse.call(t.buffer.getChannelData(e));
            return t
        };
        var C = function(t) {
            this.start = function(e) {
                return "undefined" == typeof t.sourceNode.start ? t.sourceNode.noteOn(e || w.now()) : t.sourceNode.start(e || w.now()), this
            }, this.stop = function(e) {
                return "undefined" == typeof t.sourceNode.stop ? t.sourceNode.noteOff(e || w.now()) : t.sourceNode.stop(e || w.now()), this
            }
        };
        w.createNode = function(t) {
            var e = {};
            return t = t || {}, e.input = w.context().createGain(), e.output = w.context().createGain(), Object.keys(t).forEach(function(n) {
                e[n] = t[n]
            }), e.connectedTo = [], t.hasOwnProperty("sourceNode") ? C.call(e, t) : t.sourceNode = !1, e
        }, w.oscillator = function(t, e) {
            var n, r = w.context().createOscillator();
            return n = w.createNode({
                sourceNode: r,
                nodeType: "oscillator"
            }), n.frequency = v(r, "frequency"), n.type = v(r, "type"), n.detune = v(r, "detune"), n.params = {
                frequency: r.frequency
            }, n.frequency(t || 440), n.type((e || "sine").toLowerCase()), n.isPlaying = function() {
                return 2 === r.playbackState ? !0 : !1
            }, this.connect(r, n.output), n
        }, w.gain = function(t, e) {
            var n, r;
            return r = "function" == typeof this.context().createGain ? this.context().createGain() : this.context().createGainNode(), n = w.createNode({
                nodeType: "gain"
            }), n.params = {
                gain: r.gain
            }, n.gain = v(r, "gain"), n.gain(t, e), this.connect(n.input, r, n.output), n
        }, w.buffer = function(t, e, n) {
            var r;
            return t = t || 1, e = e || 65536, n = n || 44100, r = this.context().createBuffer(t, e, n), r.nodeType = "buffer", r
        }, w.bufferBox = function(t) {
            var e, n = w.createNode({
                    nodeType: "bufferBox",
                    timePaused: 0,
                    paused: !1
                }),
                r = t,
                o = !1,
                i = 0,
                s = 0;
            return n.buffer = function(t) {
                return t ? void(r = t) : r
            }, n.loop = function(t) {
                return o = t, this
            }, t && n.buffer(t), n.play = function() {
                var t = this;
                e = w.context().createBufferSource(), e.buffer = r, e.loop = o, this.paused = !1, w.connect(e, n.output), e.onended = function() {
                    t.paused || t.position(0)
                }, i = w.now(), e.start(w.now(), this.position())
            }, n.position = function(t) {
                return t || 0 === t ? void(s = t) : s || 0
            }, n.start = n.play, n.stop = function(t) {
                this.paused = !1, e.stop(t || w.now()), this.position(0)
            }, n.pause = function(t) {
                this.paused = !0, e.stop(t || w.now()), w.disconnect(e), this.position(w.now() - i + this.position())
            }, n
        }, w.decode = function(t, e, n) {
            this.context().decodeAudioData(t, e, n)
        }, w.filter = function() {
            var t = w.createNode({
                    type: "filter"
                }),
                e = {},
                n = w.context().createBiquadFilter();
            return s(arguments[0]) ? (e.type = arguments[0].type, e.frequency = arguments[0].frequency || 1e3, e.Q = arguments[0].Q) : a(arguments[0]) && (e.type = arguments[0]), t.nodeType = "filter", t.type = v(n, "type"), t.frequency = v(n, "frequency"), t.Q = v(n, "Q"), t.type(e.type || "lowpass"), t.frequency(e.frequency || 1e3), t.Q(e.Q || 0), this.connect(t.input, n, t.output), t
        }, w.analyser = function() {
            return this.context().createAnalyser()
        }, w.compressor = function(t) {
            var n = w.createNode({
                    nodeType: "compressor"
                }),
                o = this.context().createDynamicsCompressor(),
                i = {
                    threshold: -24,
                    knee: 30,
                    ratio: 12,
                    attack: .003,
                    release: .25
                };
            return t = e(i, t), r(o, t), this.connect(n.input, o, n.output), n
        }, w.processor = function(t, e) {
            var n = t || 1024,
                r = w.context().createScriptProcessor(n, 1, 1);
            return "function" == typeof e && (r.onaudioprocess = function(t) {
                e(t)
            }), r
        }, w.waveShaper = function() {
            for (var t = this.context().createWaveShaper(), e = new Float32Array(65536), n = 0; 32768 > n; n++) e[n] = 3e4 > n ? .1 : -1;
            return t.curve = e, t
        }, w.envelope = function(t) {
            var e = {};
            return t = t || {}, e.name = t.name || "", e.nodeType = "envelope", e.startLevel = t.startLevel || 0, e.maxLevel = t.maxLevel || 1, e.minLevel = t.minLevel || 0, e.param = t.param || null, e.attackTime = t.attack || 0, e.decayTime = t.decay || 1, e.sustainLevel = t.sustain || 1, e.releaseTime = t.release || 1, d(t.param) && (e.param = t.param), e.start = function(t) {
                {
                    var e = this.attackTime + this.decayTime;
                    e + this.releaseTime
                }
                this.maxLevel = this.startLevel + this.maxLevel, this.sustainLevel = this.startLevel + this.sustainLevel, d(this.param) && (t = t || w.now(), this.param.setValueAtTime(this.startLevel, t), this.param.linearRampToValueAtTime(this.maxLevel, t + this.attackTime), this.param.setTargetAtTime(this.sustainLevel, t + this.attackTime, .05))
            }, e.release = function(t) {
                t = t || w.now(), t += this.releaseTime, d(this.param) && this.param.setTargetAtTime(this.minLevel, t, this.releaseTime / 10)
            }, e
        }, w.noise = function() {
            var t, e = this.buffer(),
                n = this.bufferBox(),
                r = e.length;
            for (t = 0; r > t; t++) e.getChannelData(0)[t] = 2 * Math.random() - 1;
            return n.nodeType = "noise", n.buffer(e), n.loop(!0), n
        }, w.lfo = function(t) {
            var e, n = w.oscillator(t || 10);
            return e = w.createNode({
                sourceNode: n,
                nodeType: "lfo"
            }), e.modulate = function(t) {
                c(t) && (w.connect(n, t), n.start())
            }, e.frequency = n.frequency, e
        }, w.getUserAudio = function(t, e) {
            var n = function(e) {
                var n = w.context().createMediaStreamSource(e);
                t(n)
            };
            navigator.webkitGetUserMedia({
                audio: !0
            }, n, e)
        };
        var T = function() {
            ! function t() {
                x.forEach(function(t) {
                    t.time < w.now() && w.disconnect(t.node)
                }), setTimeout(t, 500)
            }()
        };
        return w.helper = {}, w.helper.isString = a, w.helper.isNumber = u, w.init = function() {
            b(function() {
                _(), T()
            }, function(t) {
                console.log(t)
            })
        }, t.tsw = w
    }(), e.init()
}(window),
function(t) {
    "use strict";
    t.tsw = tsw || {}, tsw.delay = function(t) {
        var e = tsw.createNode(),
            n = tsw.wait(),
            r = tsw.gain(),
            o = tsw.gain(),
            i = tsw.gain();
        return e.settings = {
            delayTime: .5,
            feedback: .5,
            level: .5
        }, t = t || {}, n.delayTime.value = t.delayTime || e.settings.delayTime, r.gain.value = t.feedback || e.settings.feedback, o.gain.value = t.level || e.settings.level, tsw.connect(e.input, i, n, r, n, o, e.output), tsw.connect(i, n), e
    }, tsw.distortion = function(t) {
        var e = tsw.createNode(),
            n = tsw.context().createWaveShaper(),
            r = tsw.context().createBiquadFilter(),
            o = tsw.context().createBiquadFilter();
        return e.settings = {
            distortionLevel: .5
        }, t = t || {}, tsw.connect(e.input, n, [r, o], e.output), e
    }, tsw.phaser = function(t) {
        var e = tsw.createNode(),
            n = [],
            r = tsw.gain(),
            o = 0;
        for (e.settings = {
                rate: 8,
                depth: .5,
                feedback: .8
            }, t = t || {}, r.gain.value = t.feedback || e.settings.feedback, t.rate = t.rate || e.settings.rate, o = 0; o < t.rate; o++) n[o] = tsw.context().createBiquadFilter(), n[o].type = 7, n[o].frequency.value = 100 * o;
        for (o = 0; o < n.length - 1; o++) tsw.connect(n[o], n[o + 1]);
        return tsw.connect(e.input, n[n.length - 1], r, n[0]), tsw.connect(n[n.length - 1], e.output), e.setCutoff = function(t) {
            for (var e = 0; e < n.length; e++) n[e].frequency.value = t
        }, e
    }, tsw.reverb = function(t) {
        var e = tsw.context().createConvolver(),
            n = tsw.gain(),
            r = {},
            o = {
                effectLevel: .5,
                reverbTime: .5,
                reverbType: "spring",
                reverbPath: ""
            };
        return t = t || {}, n.gain.value = t.effectLevel || o.effectLevel, tsw.load({
            hall: "/effects/reverb/responses/bright-hall.wav",
            room: "/effects/reverb/responses/medium-room.wav",
            spring: "/effects/reverb/responses/feedback-spring.wav"
        }, function(t) {
            o.reverbPath = t[o.reverbType], e.buffer = o.reverbPath, r.input = tsw.gain(), r.output = tsw.gain(), tsw.connect(r.input, [r.output, e]), tsw.connect(e, n), tsw.connect(n, r.output)
        }), r
    }, tsw.tremolo = function(t) {
        var e = {},
            n = (tsw.gain(), this.lfo()),
            r = this;
        return t = t || {}, e.input = tsw.gain(), e.connect = function(t) {
            e.input.connect(t), n.modulate(e.input.gain), n.start(r.now())
        }, e.setRate = function(t) {
            n.frequency(t)
        }, e.setDepth = function(t) {
            n.depth(t)
        }, e
    }
}(window),
function() {
    "use strict";
    var t = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    t.push.apply(t, t);
    var e = ["unison", "flat 2nd", "2nd", "minor 3rd", "major 3rd", "perfect 4th", "flat 5th", "perfect 5th", "minor 6th", "major 6th", "minor 7th", "major 7th", "octave", "flat 9th", "9th", "sharp 9th", "major 10th", "11th", "augmented 11th", "perfect 12th", "flat 13th", "13th"];
    tsw.helper.getNotePosition = function(e) {
        for (var n, r = t.length, o = 0; r > o; o++)
            if (e.toUpperCase() === t[o]) return n = o, o;
        return null
    };
    var n = function(e) {
            var n = [],
                r = tsw.helper.getNotePosition(e);
            return n.push(t[r]), n.push(t[r + 2]), n.push(t[r + 4]), n.push(t[r + 5]), n.push(t[r + 7]), n.push(t[r + 9]), n.push(t[r + 11]), n.push(t[r + 12]), n
        },
        r = function(e) {
            var n = [],
                r = tsw.helper.getNotePosition(e);
            return n.push(t[r]), n.push(t[r + 2]), n.push(t[r + 3]), n.push(t[r + 5]), n.push(t[r + 7]), n.push(t[r + 8]), n.push(t[r + 10]), n.push(t[r + 12]), n
        },
        o = function(t) {
            return "string" != typeof t || t.length > 3 ? !1 : !0
        };
    tsw.chord = function(e) {
        var n = {},
            r = [],
            o = 0;
        return Array.isArray(e) ? !1 : (e = e.toLowerCase(), n.rootNote = e[0].toUpperCase(), n.isMajor = e.indexOf("maj") > -1, n.isMinor = !n.isMajor && e.indexOf("m") > -1, n.is7th = e.indexOf("7") > -1, n.notes = [], n.is7th || (n.octave = e.match(/\d/g)), n.isMajor || n.isMinor || e.is7th || (n.isMajor = !0), o = tsw.helper.getNotePosition(n.rootNote), r.push(o), r.push(e.isMinor ? o + tsw.semitoneDifference("minor 3rd") : o + tsw.semitoneDifference("major 3rd")), r.push(o + tsw.semitoneDifference("perfect 5th")), r.push(o + tsw.semitoneDifference("octave")), r.forEach(function(e) {
            n.notes.push(t[e])
        }), n.notes)
    }, tsw.scale = function(t, e) {
        return "minor" === e ? r(t) : n(t)
    }, tsw.semitoneDifference = function(t) {
        for (var n = e.length, r = 0; n > r; r++)
            if (t === e[r]) return r
    }, tsw.flat = function(t) {
        var e;
        return t = t.replace("#", "b"), e = String.fromCharCode(t[0].toUpperCase().charCodeAt(0) + 1), "H" === e && (e = "A"), e += t.substr(1)
    }, tsw.sharp = function(t) {
        var e, n = 0;
        return -1 === t.indexOf("b") ? t : (t = t.replace("b", "#"), e = String.fromCharCode(t[0].toUpperCase().charCodeAt(0) - 1), "@" === e && (e = "G"), "B" === e && (n = t.search(/\d/), n > -1 && (t = t.substring(0, n) + (t[n] - 1) + t.substring(n + 1))), e += t.substr(1))
    }, tsw.frequency = function(e) {
        var n, r, i, s;
        return o(e) === !1 ? !1 : (i = e.search(/\d/), n = parseInt(e.slice(-1)), isNaN(n) && (n = 4), e = this.sharp(e), s = e, i > -1 && (s = e.substr(0, i)), r = t.indexOf(s.toUpperCase()), r += 12 * n, parseFloat(440 * Math.pow(2, (r - 57) / 12), 10))
    }
}(window),
function() {
    "use strict";
    tsw = tsw || {}, tsw.isMidiSupported = function() {
        return "function" == typeof navigator.requestMIDIAccess
    }, tsw.getUserMidi = function(t, e) {
        this.isMidiSupported() && navigator.requestMIDIAccess().then(t, e)
    };
    var t = function(t) {
            var e = t.match(/^[A-g#]+/)[0],
                n = parseInt(t.match(/\d+/g), 10),
                r = tsw.helper.getNotePosition(e);
            return r + 12 * n
        },
        e = function(t) {
            var e = t % 12,
                n = Math.floor(t / 12),
                r = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
            return r.push.apply(r, r), r[e] + n
        };
    tsw.midiNote = function(n) {
        return tsw.helper.isString(n) ? t(n) : tsw.helper.isNumber(n) ? e(n) : void 0
    }
}(window),
function() {
    "use strict";
    var t = function(t) {
        var e = Math.floor(t / 60);
        return {
            minutes: e,
            seconds: t - 60 * e,
            totalSeconds: t
        }
    };
    tsw.analyser = function() {
        var t = tsw.context().createAnalyser();
        return t
    }, tsw.info = function(e) {
        return {
            duration: t(e.duration),
            numberOfChannels: e.numberOfChannels,
            sampleRate: e.sampleRate
        }
    }
}(window);
