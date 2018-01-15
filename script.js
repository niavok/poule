function clearText(e) {
    e.defaultValue == e.value ? e.value = "" : "" == e.value && (e.value = e.defaultValue)
}

function checkboxCheckAll(e) {
    for (i = 0; i < e.length; i++) e[i].checked = !0
}

function checkboxUncheckAll(e) {
    for (i = 0; i < e.length; i++) e[i].checked = !1
}

function isValidEmailAddress(e) {
    var t = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return t.test(e)
}

function linkToSlide(e) {
    var t = new RegExp("[?&amp;]" + e + "=([^&amp;#]*)").exec(window.location.href);
    if (null === t || null === document.getElementById(t[1])) {
        if ($("#slides li").find("input").is(":checked")) {
            for (var i = $("input[checked='checked']");
                "li" != i.localName;) i = $(i).parent()[0];
            return $("#slides li").index(i)
        }
        return 0
    }
    for (var n = t[1], i = document.getElementById(n);
        "li" != i.localName;) i = $(i).parent()[0];
    return $("#slides>li").index(i)
}

function openSearchField() {
    var e = $(".sf-NavBar__search form")[0];
    $(e).css("display", "block"), $(".sf-NavBar__search input[type=text]").focus()
}

function closeSearchField() {
    var e = $(".sf-NavBar__search form")[0];
    $(e).css("display", "none"), $(".sf-NavBar__search input[type=text]").blur(), $(".sf-NavBar__search input[type=text]").val("")
}

function openCollapse() {
    var e = new RegExp(/(faq)=(\w*)/).exec(window.location.href);
    null != e && null != e[2] && null != document.getElementById(e[2]) && $("#" + e[2]).addClass("open")
}

function scrollToCollapse() {
    var e = new RegExp(/(faq)=(\w*)/).exec(window.location.href);
    null != e && null != e[2] && null != document.getElementById(e[2]) && $("html, body").scrollTop($("#" + e[2]).offset().top - 70)
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = "length" in e && e.length,
            i = oe.type(e);
        return "function" === i || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function n(e, t, i) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (he.test(t)) return oe.filter(t, e, i);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return oe.inArray(e, t) >= 0 !== i
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function s(e) {
        var t = we[e] = {};
        return oe.each(e.match(be) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function r() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (r(), oe.ready())
    }

    function l(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(De, "-$1").toLowerCase();
            if (i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ce.test(i) ? oe.parseJSON(i) : i
                } catch (o) {}
                oe.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function d(e, t, i, n) {
        if (oe.acceptData(e)) {
            var o, s, r = oe.expando,
                a = e.nodeType,
                l = a ? oe.cache : e,
                c = a ? e[r] : e[r] && r;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof t) return c || (c = a ? e[r] = K.pop() || oe.guid++ : r), l[c] || (l[c] = a ? {} : {
                toJSON: oe.noop
            }), "object" != typeof t && "function" != typeof t || (n ? l[c] = oe.extend(l[c], t) : l[c].data = oe.extend(l[c].data, t)), s = l[c], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[oe.camelCase(t)] = i), "string" == typeof t ? (o = s[t], null == o && (o = s[oe.camelCase(t)])) : o = s, o
        }
    }

    function u(e, t, i) {
        if (oe.acceptData(e)) {
            var n, o, s = e.nodeType,
                r = s ? oe.cache : e,
                a = s ? e[oe.expando] : oe.expando;
            if (r[a]) {
                if (t && (n = i ? r[a] : r[a].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in n ? t = [t] : (t = oe.camelCase(t), t = t in n ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete n[t[o]];
                    if (i ? !c(n) : !oe.isEmptyObject(n)) return
                }(i || (delete r[a].data, c(r[a]))) && (s ? oe.cleanData([e], !0) : ie.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (e) {}
    }

    function g(e) {
        var t = ze.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }

    function m(e, t) {
        var i, n, o = 0,
            s = typeof e.getElementsByTagName !== ke ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== ke ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], i = e.childNodes || e; null != (n = i[o]); o++) !t || oe.nodeName(n, t) ? s.push(n) : oe.merge(s, m(n, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], s) : s
    }

    function v(e) {
        Ae.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) oe._data(i, "globalEval", !t || oe._data(t[n], "globalEval"))
    }

    function x(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var i, n, o, s = oe._data(e),
                r = oe._data(t, s),
                a = s.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a)
                    for (n = 0, o = a[i].length; o > n; n++) oe.event.add(t, i, a[i][n])
            }
            r.data && (r.data = oe.extend({}, r.data))
        }
    }

    function k(e, t) {
        var i, n, o;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[oe.expando]) {
                o = oe._data(t);
                for (n in o.events) oe.removeEvent(t, n, o.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === i && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Ae.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, i) {
        var n, o = oe(i.createElement(t)).appendTo(i.body),
            s = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(o[0])) ? n.display : oe.css(o[0], "display");
        return o.detach(), s
    }

    function D(e) {
        var t = fe,
            i = Ze[e];
        return i || (i = C(e, t), "none" !== i && i || (Je = (Je || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Je[0].contentWindow || Je[0].contentDocument).document, t.write(), t.close(), i = C(e, t), Je.detach()), Ze[e] = i), i
    }

    function T(e, t) {
        return {
            get: function() {
                var i = e();
                if (null != i) return i ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, o = ht.length; o--;)
            if (t = ht[o] + i, t in e) return t;
        return n
    }

    function E(e, t) {
        for (var i, n, o, s = [], r = 0, a = e.length; a > r; r++) n = e[r], n.style && (s[r] = oe._data(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ee(n) && (s[r] = oe._data(n, "olddisplay", D(n.nodeName)))) : (o = Ee(n), (i && "none" !== i || !o) && oe._data(n, "olddisplay", o ? i : oe.css(n, "display"))));
        for (r = 0; a > r; r++) n = e[r], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
        return e
    }

    function $(e, t, i) {
        var n = lt.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function A(e, t, i, n, o) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += oe.css(e, i + Se[s], !0, o)), n ? ("content" === i && (r -= oe.css(e, "padding" + Se[s], !0, o)), "margin" !== i && (r -= oe.css(e, "border" + Se[s] + "Width", !0, o))) : (r += oe.css(e, "padding" + Se[s], !0, o), "padding" !== i && (r += oe.css(e, "border" + Se[s] + "Width", !0, o)));
        return r
    }

    function N(e, t, i) {
        var n = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = et(e),
            r = ie.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if (o = tt(e, t, s), (0 > o || null == o) && (o = e.style[t]), nt.test(o)) return o;
            n = r && (ie.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + A(e, t, i || (r ? "border" : "content"), n, s) + "px"
    }

    function M(e, t, i, n, o) {
        return new M.prototype.init(e, t, i, n, o)
    }

    function P() {
        return setTimeout(function() {
            pt = void 0
        }), pt = oe.now()
    }

    function O(e, t) {
        var i, n = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) i = Se[o], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function j(e, t, i) {
        for (var n, o = (bt[t] || []).concat(bt["*"]), s = 0, r = o.length; r > s; s++)
            if (n = o[s].call(i, t, e)) return n
    }

    function z(e, t, i) {
        var n, o, s, r, a, l, c, d, u = this,
            h = {},
            p = e.style,
            f = e.nodeType && Ee(e),
            g = oe._data(e, "fxshow");
        i.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = oe.css(e, "display"), d = "none" === c ? oe._data(e, "olddisplay") || D(e.nodeName) : c, "inline" === d && "none" === oe.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (o = t[n], gt.exec(o)) {
                if (delete t[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[n]) continue;
                    f = !0
                }
                h[n] = g && g[n] || oe.style(e, n)
            } else c = void 0;
        if (oe.isEmptyObject(h)) "inline" === ("none" === c ? D(e.nodeName) : c) && (p.display = c);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = oe._data(e, "fxshow", {}), s && (g.hidden = !f), f ? oe(e).show() : u.done(function() {
                oe(e).hide()
            }), u.done(function() {
                var t;
                oe._removeData(e, "fxshow");
                for (t in h) oe.style(e, t, h[t])
            });
            for (n in h) r = j(f ? g[n] : 0, n, u), n in g || (g[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function L(e, t) {
        var i, n, o, s, r;
        for (i in e)
            if (n = oe.camelCase(i), o = t[n], s = e[i], oe.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), r = oe.cssHooks[n], r && "expand" in r) {
                s = r.expand(s), delete e[n];
                for (i in s) i in e || (e[i] = s[i], t[i] = o)
            } else t[n] = o
    }

    function I(e, t, i) {
        var n, o, s = 0,
            r = yt.length,
            a = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = pt || P(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, s = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(s);
                return a.notifyWith(e, [c, s, i]), 1 > s && l ? i : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: pt || P(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = oe.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) c.tweens[i].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (L(d, c.opts.specialEasing); r > s; s++)
            if (n = yt[s].call(c, e, d, c.opts)) return n;
        return oe.map(d, j, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function F(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0,
                s = t.toLowerCase().match(be) || [];
            if (oe.isFunction(i))
                for (; n = s[o++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function H(e, t, i, n) {
        function o(a) {
            var l;
            return s[a] = !0, oe.each(e[a] || [], function(e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var s = {},
            r = e === qt;
        return o(t.dataTypes[0]) || !s["*"] && o("*")
    }

    function W(e, t) {
        var i, n, o = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && oe.extend(!0, e, i), e
    }

    function R(e, t, i) {
        for (var n, o, s, r, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (r in a)
                if (a[r] && a[r].test(o)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) s = l[0];
        else {
            for (r in i) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                n || (n = r)
            }
            s = s || n
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function q(e, t, i, n) {
        var o, s, r, a, l, c = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
        for (s = d.shift(); s;)
            if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (r = c[l + " " + s] || c["* " + s], !r)
                for (o in c)
                    if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                        r === !0 ? r = c[o] : c[o] !== !0 && (s = a[0], d.unshift(a[1]));
                        break
                    }
            if (r !== !0)
                if (r && e["throws"]) t = r(t);
                else try {
                    t = r(t)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: r ? u : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B(e, t, i, n) {
        var o;
        if (oe.isArray(t)) oe.each(t, function(t, o) {
            i || Vt.test(e) ? n(e, o) : B(e + "[" + ("object" == typeof o ? t : "") + "]", o, i, n)
        });
        else if (i || "object" !== oe.type(t)) n(e, t);
        else
            for (o in t) B(e + "[" + o + "]", t[o], i, n)
    }

    function U() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Y() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var K = [],
        G = K.slice,
        X = K.concat,
        Q = K.push,
        J = K.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ie = {},
        ne = "1.11.3",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        re = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ne,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return oe.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: K.sort,
        splice: K.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, i, n, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || oe.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (n in o) e = r[n], i = o[n], r !== i && (c && i && (oe.isPlainObject(i) || (t = oe.isArray(i))) ? (t ? (t = !1, s = e && oe.isArray(e) ? e : []) : s = e && oe.isPlainObject(e) ? e : {}, r[n] = oe.extend(c, s, i)) : void 0 !== i && (r[n] = i));
        return r
    }, oe.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === oe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !oe.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && oe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(re, "ms-").replace(ae, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var o, s = 0,
                r = e.length,
                a = i(e);
            if (n) {
                if (a)
                    for (; r > s && (o = t.apply(e[s], n), o !== !1); s++);
                else
                    for (s in e)
                        if (o = t.apply(e[s], n), o === !1) break
            } else if (a)
                for (; r > s && (o = t.call(e[s], s, e[s]), o !== !1); s++);
            else
                for (s in e)
                    if (o = t.call(e[s], s, e[s]), o === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? oe.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)), n
        },
        inArray: function(e, t, i) {
            var n;
            if (t) {
                if (J) return J.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; i > n;) e[o++] = t[n++];
            if (i !== i)
                for (; void 0 !== t[n];) e[o++] = t[n++];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n, o = [], s = 0, r = e.length, a = !i; r > s; s++) n = !t(e[s], s), n !== a && o.push(e[s]);
            return o
        },
        map: function(e, t, n) {
            var o, s = 0,
                r = e.length,
                a = i(e),
                l = [];
            if (a)
                for (; r > s; s++) o = t(e[s], s, n), null != o && l.push(o);
            else
                for (s in e) o = t(e[s], s, n), null != o && l.push(o);
            return X.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (i = G.call(arguments, 2), n = function() {
                return e.apply(t || this, i.concat(G.call(arguments)))
            }, n.guid = e.guid = e.guid || oe.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, i, n) {
            var o, s, r, a, l, c, u, p, f, g;
            if ((t ? t.ownerDocument || t : H) !== M && N(t), t = t || M, i = i || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && O) {
                if (11 !== a && (o = ye.exec(e)))
                    if (r = o[1]) {
                        if (9 === a) {
                            if (s = t.getElementById(r), !s || !s.parentNode) return i;
                            if (s.id === r) return i.push(s), i
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(r)) && I(t, s) && s.id === r) return i.push(s), i
                    } else {
                        if (o[2]) return J.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = o[3]) && _.getElementsByClassName) return J.apply(i, t.getElementsByClassName(r)), i
                    }
                if (_.qsa && (!j || !j.test(e))) {
                    if (p = u = F, f = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = D(e), (u = t.getAttribute("id")) ? p = u.replace(we, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + h(c[l]);
                        f = be.test(e) && d(t.parentNode) || t, g = c.join(",")
                    }
                    if (g) try {
                        return J.apply(i, f.querySelectorAll(g)), i
                    } catch (m) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(le, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > x.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[F] = !0, e
        }

        function o(e) {
            var t = M.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var i = e.split("|"), n = e.length; n--;) x.attrHandle[i[n]] = t
        }

        function r(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function c(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var o, s = e([], i.length, t), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {}

        function h(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function p(e, t, i) {
            var n = t.dir,
                o = i && "parentNode" === n,
                s = R++;
            return t.first ? function(t, i, s) {
                for (; t = t[n];)
                    if (1 === t.nodeType || o) return e(t, i, s)
            } : function(t, i, r) {
                var a, l, c = [W, s];
                if (r) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || o) && e(t, i, r)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || o) {
                            if (l = t[F] || (t[F] = {}), (a = l[n]) && a[0] === W && a[1] === s) return c[2] = a[2];
                            if (l[n] = c, c[2] = e(t, i, r)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var o = e.length; o--;)
                    if (!e[o](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function g(e, i, n) {
            for (var o = 0, s = i.length; s > o; o++) t(e, i[o], n);
            return n
        }

        function m(e, t, i, n, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; l > a; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), c && t.push(a)));
            return r
        }

        function v(e, t, i, o, s, r) {
            return o && !o[F] && (o = v(o)), s && !s[F] && (s = v(s, r)), n(function(n, r, a, l) {
                var c, d, u, h = [],
                    p = [],
                    f = r.length,
                    v = n || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !n && t ? v : m(v, h, e, a, l),
                    b = i ? s || (n ? e : f || o) ? [] : r : y;
                if (i && i(y, b, a, l), o)
                    for (c = m(b, p), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (b[p[d]] = !(y[p[d]] = u));
                if (n) {
                    if (s || e) {
                        if (s) {
                            for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                            s(null, b = [], c, l)
                        }
                        for (d = b.length; d--;)(u = b[d]) && (c = s ? ee(n, u) : h[d]) > -1 && (n[c] = !(r[c] = u))
                    }
                } else b = m(b === r ? b.splice(f, b.length) : b), s ? s(null, r, b, l) : J.apply(r, b)
            })
        }

        function y(e) {
            for (var t, i, n, o = e.length, s = x.relative[e[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = p(function(e) {
                    return e === t
                }, r, !0), c = p(function(e) {
                    return ee(t, e) > -1
                }, r, !0), d = [function(e, i, n) {
                    var o = !s && (n || i !== E) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                    return t = null, o
                }]; o > a; a++)
                if (i = x.relative[e[a].type]) d = [p(f(d), i)];
                else {
                    if (i = x.filter[e[a].type].apply(null, e[a].matches), i[F]) {
                        for (n = ++a; o > n && !x.relative[e[n].type]; n++);
                        return v(a > 1 && f(d), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > a && y(e.slice(a, n)), o > n && y(e = e.slice(n)), o > n && h(e))
                    }
                    d.push(i)
                }
            return f(d)
        }

        function b(e, i) {
            var o = i.length > 0,
                s = e.length > 0,
                r = function(n, r, a, l, c) {
                    var d, u, h, p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = E,
                        b = n || s && x.find.TAG("*", c),
                        w = W += null == y ? 1 : Math.random() || .1,
                        _ = b.length;
                    for (c && (E = r !== M && r); f !== _ && null != (d = b[f]); f++) {
                        if (s && d) {
                            for (u = 0; h = e[u++];)
                                if (h(d, r, a)) {
                                    l.push(d);
                                    break
                                }
                            c && (W = w)
                        }
                        o && ((d = !h && d) && p--, n && g.push(d))
                    }
                    if (p += f, o && f !== p) {
                        for (u = 0; h = i[u++];) h(g, v, r, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = X.call(l));
                            v = m(v)
                        }
                        J.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && t.uniqueSort(l)
                    }
                    return c && (W = w, E = y), g
                };
            return o ? n(r) : r
        }
        var w, _, x, k, C, D, T, S, E, $, A, N, M, P, O, j, z, L, I, F = "sizzle" + 1 * new Date,
            H = e.document,
            W = 0,
            R = 0,
            q = i(),
            B = i(),
            U = i(),
            Y = function(e, t) {
                return e === t && (A = !0), 0
            },
            V = 1 << 31,
            K = {}.hasOwnProperty,
            G = [],
            X = G.pop,
            Q = G.push,
            J = G.push,
            Z = G.slice,
            ee = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ne.replace("w", "w#"),
            se = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
            re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ae = new RegExp(ie + "+", "g"),
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ce = new RegExp("^" + ie + "*," + ie + "*"),
            de = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            he = new RegExp(re),
            pe = new RegExp("^" + oe + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = /'|\\/g,
            _e = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            xe = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            ke = function() {
                N()
            };
        try {
            J.apply(G = Z.call(H.childNodes), H.childNodes), G[H.childNodes.length].nodeType
        } catch (Ce) {
            J = {
                apply: G.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        _ = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, N = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : H;
            return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, P = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", ke, !1) : i.attachEvent && i.attachEvent("onunload", ke)), O = !C(n), _.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = o(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ve.test(n.getElementsByClassName), _.getById = o(function(e) {
                return P.appendChild(e).id = F, !n.getElementsByName || !n.getElementsByName(F).length
            }), _.getById ? (x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(_e, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(_e, xe);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), x.find.TAG = _.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    o = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, x.find.CLASS = _.getElementsByClassName && function(e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            }, z = [], j = [], (_.qsa = ve.test(n.querySelectorAll)) && (o(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || j.push(".#.+[+~]")
            }), o(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (_.matchesSelector = ve.test(L = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                _.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), z.push("!=", re)
            }), j = j.length && new RegExp(j.join("|")), z = z.length && new RegExp(z.join("|")), t = ve.test(P.compareDocumentPosition), I = t || ve.test(P.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Y = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !_.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === H && I(H, e) ? -1 : t === n || t.ownerDocument === H && I(H, t) ? 1 : $ ? ee($, e) - ee($, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var i, o = 0,
                    s = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                if (!s || !a) return e === n ? -1 : t === n ? 1 : s ? -1 : a ? 1 : $ ? ee($, e) - ee($, t) : 0;
                if (s === a) return r(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) c.unshift(i);
                for (; l[o] === c[o];) o++;
                return o ? r(l[o], c[o]) : l[o] === H ? -1 : c[o] === H ? 1 : 0
            }, n) : M
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== M && N(e), i = i.replace(ue, "='$1']"), _.matchesSelector && O && (!z || !z.test(i)) && (!j || !j.test(i))) try {
                var n = L.call(e, i);
                if (n || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (o) {}
            return t(i, M, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && N(e), I(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== M && N(e);
            var i = x.attrHandle[t.toLowerCase()],
                n = i && K.call(x.attrHandle, t.toLowerCase()) ? i(e, t, !O) : void 0;
            return void 0 !== n ? n : _.attributes || !O ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                o = 0;
            if (A = !_.detectDuplicates, $ = !_.sortStable && e.slice(0), e.sort(Y), A) {
                for (; t = e[o++];) t === e[o] && (n = i.push(o));
                for (; n--;) e.splice(i[n], 1)
            }
            return $ = null, e
        }, k = t.getText = function(e) {
            var t, i = "",
                n = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += k(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[n++];) i += k(t);
            return i
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
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
                    return e[1] = e[1].replace(_e, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && he.test(i) && (t = D(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(_e, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(o) {
                        var s = t.attr(o, e);
                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, i, n, o) {
                    var s = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === n && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var c, d, u, h, p, f, g = s !== r ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (m) {
                            if (s) {
                                for (; g;) {
                                    for (u = t; u = u[g];)
                                        if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = g = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                for (d = m[F] || (m[F] = {}), c = d[e] || [], p = c[0] === W && c[1], h = c[0] === W && c[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (h = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++h && u === t) {
                                        d[e] = [W, p, h];
                                        break
                                    }
                            } else if (y && (c = (t[F] || (t[F] = {}))[e]) && c[0] === W) h = c[1];
                            else
                                for (;
                                    (u = ++p && u && u[g] || (h = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[F] || (u[F] = {}))[e] = [W, h]), u !== t)););
                            return h -= o, h === n || h % n === 0 && h / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var o, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[F] ? s(i) : s.length > 1 ? (o = [e, e, "", i], x.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, o = s(e, i), r = o.length; r--;) n = ee(e, o[r]), e[n] = !(t[n] = o[r])
                    }) : function(e) {
                        return s(e, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        o = T(e.replace(le, "$1"));
                    return o[F] ? n(function(e, t, i, n) {
                        for (var s, r = o(e, null, n, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                    }) : function(e, n, s) {
                        return t[0] = e, o(t, null, s, i), t[0] = null, !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(_e, xe),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, xe).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: c(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) x.pseudos[w] = l(w);
        return u.prototype = x.filters = x.pseudos, x.setFilters = new u, D = t.tokenize = function(e, i) {
            var n, o, s, r, a, l, c, d = B[e + " "];
            if (d) return i ? 0 : d.slice(0);
            for (a = e, l = [], c = x.preFilter; a;) {
                n && !(o = ce.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = de.exec(a)) && (n = o.shift(), s.push({
                    value: n,
                    type: o[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (r in x.filter) !(o = fe[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? t.error(e) : B(e, l).slice(0)
        }, T = t.compile = function(e, t) {
            var i, n = [],
                o = [],
                s = U[e + " "];
            if (!s) {
                for (t || (t = D(e)), i = t.length; i--;) s = y(t[i]), s[F] ? n.push(s) : o.push(s);
                s = U(e, b(o, n)), s.selector = e
            }
            return s
        }, S = t.select = function(e, t, i, n) {
            var o, s, r, a, l, c = "function" == typeof e && e,
                u = !n && D(e = c.selector || e);
            if (i = i || [], 1 === u.length) {
                if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && _.getById && 9 === t.nodeType && O && x.relative[s[1].type]) {
                    if (t = (x.find.ID(r.matches[0].replace(_e, xe), t) || [])[0], !t) return i;
                    c && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !x.relative[a = r.type]);)
                    if ((l = x.find[a]) && (n = l(r.matches[0].replace(_e, xe), be.test(s[0].type) && d(t.parentNode) || t))) {
                        if (s.splice(o, 1), e = n.length && h(s), !e) return J.apply(i, n), i;
                        break
                    }
            }
            return (c || T(e, u))(n, t, !O, i, be.test(e) && d(t.parentNode) || t), i
        }, _.sortStable = F.split("").sort(Y).join("") === F, _.detectDuplicates = !!A, N(), _.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || s(te, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var de = oe.expr.match.needsContext,
        ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? oe.find.matchesSelector(n, e) ? [n] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, i = [],
                n = this,
                o = n.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (oe.contains(n[t], this)) return !0
            }));
            for (t = 0; o > t; t++) oe.find(e, n[t], i);
            return i = this.pushStack(o > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var pe, fe = e.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = oe.fn.init = function(e, t) {
            var i, n;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), ue.test(i[1]) && oe.isPlainObject(t))
                        for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (n = fe.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pe.find(e);
                    this.length = 1, this[0] = n
                }
                return this.context = fe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    me.prototype = oe.fn, pe = oe(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function(e, t, i) {
            for (var n = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === i || 1 !== o.nodeType || !oe(o).is(i));) 1 === o.nodeType && n.push(o), o = o[t];
            return n
        },
        sibling: function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }), oe.fn.extend({
        has: function(e) {
            var t, i = oe(e, this),
                n = i.length;
            return this.filter(function() {
                for (t = 0; n > t; t++)
                    if (oe.contains(this, i[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, o = this.length, s = [], r = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && oe.find.matchesSelector(i, e))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? oe.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return oe.dir(e, "parentNode", i)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return oe.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return oe.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return oe.sibling(e.firstChild)
        },
        contents: function(e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(i, n) {
            var o = oe.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = oe.filter(n, o)), this.length > 1 && (ye[e] || (o = oe.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var be = /\S+/g,
        we = {};
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || s(e) : oe.extend({}, e);
        var t, i, n, o, r, a, l = [],
            c = !e.once && [],
            d = function(s) {
                for (i = e.memory && s, n = !0, r = a || 0, a = 0, o = l.length, t = !0; l && o > r; r++)
                    if (l[r].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                t = !1, l && (c ? c.length && d(c.shift()) : i ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function s(t) {
                            oe.each(t, function(t, i) {
                                var n = oe.type(i);
                                "function" === n ? e.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                            })
                        }(arguments), t ? o = l.length : i && (a = n, d(i))
                    }
                    return this
                },
                remove: function() {
                    return l && oe.each(arguments, function(e, i) {
                        for (var n;
                            (n = oe.inArray(i, l, n)) > -1;) l.splice(n, 1), t && (o >= n && o--, r >= n && r--)
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = c = i = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, i || u.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, i) {
                    return !l || n && !c || (i = i || [], i = [e, i.slice ? i.slice() : i], t ? c.push(i) : d(i)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(i) {
                            oe.each(t, function(t, s) {
                                var r = oe.isFunction(e[t]) && e[t];
                                o[s[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, oe.each(t, function(e, s) {
                var r = s[2],
                    a = s[3];
                n[s[1]] = r.add, a && r.add(function() {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? n : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), n.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, i, n, o = 0,
                s = G.call(arguments),
                r = s.length,
                a = 1 !== r || e && oe.isFunction(e.promise) ? r : 0,
                l = 1 === a ? e : oe.Deferred(),
                c = function(e, i, n) {
                    return function(o) {
                        i[e] = this, n[e] = arguments.length > 1 ? G.call(arguments) : o, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (r > 1)
                for (t = new Array(r), i = new Array(r), n = new Array(r); r > o; o++) s[o] && oe.isFunction(s[o].promise) ? s[o].promise().done(c(o, n, s)).fail(l.reject).progress(c(o, i, t)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var _e;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!fe.body) return setTimeout(oe.ready);
                oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (_e.resolveWith(fe, [oe]), oe.fn.triggerHandler && (oe(fe).triggerHandler("ready"), oe(fe).off("ready")))
            }
        }
    }), oe.ready.promise = function(t) {
        if (!_e)
            if (_e = oe.Deferred(), "complete" === fe.readyState) setTimeout(oe.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
        else {
            fe.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == e.frameElement && fe.documentElement
            } catch (n) {}
            i && i.doScroll && ! function o() {
                if (!oe.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    r(), oe.ready()
                }
            }()
        }
        return _e.promise(t)
    };
    var xe, ke = "undefined";
    for (xe in oe(ie)) break;
    ie.ownLast = "0" !== xe, ie.inlineBlockNeedsLayout = !1, oe(function() {
            var e, t, i, n;
            i = fe.getElementsByTagName("body")[0], i && i.style && (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var e = fe.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ie.deleteExpando = !1
                }
            }
            e = null
        }(), oe.acceptData = function(e) {
            var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                i = +e.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        De = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !c(e)
        },
        data: function(e, t, i) {
            return d(e, t, i)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, i) {
            return d(e, t, i, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var i, n, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = oe.data(s), 1 === s.nodeType && !oe._data(s, "parsedAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = oe.camelCase(n.slice(5)), l(s, n, o[n])));
                    oe._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, e, t)
            }) : s ? l(s, e, oe.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = oe._data(e, t), i && (!n || oe.isArray(i) ? n = oe._data(e, t, oe.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = oe.queue(e, t),
                n = i.length,
                o = i.shift(),
                s = oe._queueHooks(e, t),
                r = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, r, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return oe._data(e, i) || oe._data(e, i, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(e, t + "queue"), oe._removeData(e, i)
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                o = oe.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --n || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) i = oe._data(s[r], e + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ee = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        $e = oe.access = function(e, t, i, n, o, s, r) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === oe.type(i)) {
                o = !0;
                for (a in i) oe.access(e, t, a, i[a], !0, s, r)
            } else if (void 0 !== n && (o = !0, oe.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(oe(e), i)
                })), t))
                for (; l > a; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
        },
        Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = fe.createElement("input"),
            t = fe.createElement("div"),
            i = fe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, i.appendChild(e), ie.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ie.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, i, n = fe.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (ie[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), ie[t + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Ne = /^(?:input|select|textarea)$/i,
        Me = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        Oe = /^(?:focusinfocus|focusoutblur)$/,
        je = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var s, r, a, l, c, d, u, h, p, f, g, m = oe._data(e);
            if (m) {
                for (i.handler && (l = i, i = l.handler, o = l.selector), i.guid || (i.guid = oe.guid++), (r = m.events) || (r = m.events = {}), (d = m.handle) || (d = m.handle = function(e) {
                        return typeof oe === ke || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = e), t = (t || "").match(be) || [""], a = t.length; a--;) s = je.exec(t[a]) || [], p = g = s[1], f = (s[2] || "").split(".").sort(), p && (c = oe.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = oe.event.special[p] || {}, u = oe.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (h = r[p]) || (h = r[p] = [], h.delegateCount = 0, c.setup && c.setup.call(e, n, f, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1) : e.attachEvent && e.attachEvent("on" + p, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), oe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, i, n, o) {
            var s, r, a, l, c, d, u, h, p, f, g, m = oe.hasData(e) && oe._data(e);
            if (m && (d = m.events)) {
                for (t = (t || "").match(be) || [""], c = t.length; c--;)
                    if (a = je.exec(t[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = oe.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, h = d[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) r = h[s], !o && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (h.splice(s, 1), r.selector && h.delegateCount--, u.remove && u.remove.call(e, r));
                        l && !h.length && (u.teardown && u.teardown.call(e, f, m.handle) !== !1 || oe.removeEvent(e, p, m.handle), delete d[p])
                    } else
                        for (p in d) oe.event.remove(e, p + t[c], i, n, !0);
                oe.isEmptyObject(d) && (delete m.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function(t, i, n, o) {
            var s, r, a, l, c, d, u, h = [n || fe],
                p = te.call(t, "type") ? t.type : t,
                f = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Oe.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : oe.makeArray(i, [t]), c = oe.event.special[p] || {}, o || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!o && !c.noBubble && !oe.isWindow(n)) {
                    for (l = c.delegateType || p, Oe.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), d = a;
                    d === (n.ownerDocument || fe) && h.push(d.defaultView || d.parentWindow || e)
                }
                for (u = 0;
                    (a = h[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : c.bindType || p, s = (oe._data(a, "events") || {})[t.type] && oe._data(a, "handle"), s && s.apply(a, i), s = r && a[r], s && s.apply && oe.acceptData(a) && (t.result = s.apply(a, i), t.result === !1 && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), i) === !1) && oe.acceptData(n) && r && n[p] && !oe.isWindow(n)) {
                    d = n[r], d && (n[r] = null), oe.event.triggered = p;
                    try {
                        n[p]()
                    } catch (g) {}
                    oe.event.triggered = void 0, d && (n[r] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, i, n, o, s, r = [],
                a = G.call(arguments),
                l = (oe._data(this, "events") || {})[e.type] || [],
                c = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (r = oe.event.handlers.call(this, e, l), t = 0;
                    (o = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, s = 0;
                        (n = o.handlers[s++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(n.namespace) || (e.handleObj = n, e.data = n.data, i = ((oe.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, s, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], s = 0; a > s; s++) n = t[s], i = n.selector + " ", void 0 === o[i] && (o[i] = n.needsContext ? oe(i, this).index(l) >= 0 : oe.find(i, this, null, [l]).length), o[i] && o.push(n);
                        o.length && r.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }), r
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, i, n, o = e.type,
                s = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Pe.test(o) ? this.mouseHooks : Me.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new oe.Event(s), t = n.length; t--;) i = n[t], e[i] = s[i];
            return e.target || (e.target = s.srcElement || fe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, s) : e
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
                var i, n, o, s = t.button,
                    r = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || fe, o = n.documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i, n) {
            var o = oe.extend(new oe.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, oe.removeEvent = fe.removeEventListener ? function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function(e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === ke && (e[n] = null), e.detachEvent(n, i))
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : p) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    o = e.relatedTarget,
                    s = e.handleObj;
                return o && (o === n || oe.contains(n, o)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), ie.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    i = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                i && !oe._data(i, "submitBubbles") && (oe.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), oe._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return Ne.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (oe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ne.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }), oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"), !Ne.test(this.nodeName)
        }
    }), ie.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = oe._data(n, t);
                o || n.addEventListener(e, i, !0), oe._data(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = oe._data(n, t) - 1;
                o ? oe._data(n, t, o) : (n.removeEventListener(e, i, !0), oe._removeData(n, t))
            }
        }
    }), oe.fn.extend({
        on: function(e, t, i, n, o) {
            var s, r;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (s in e) this.on(s, t, i, e[s], o);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === o && (r = n, n = function(e) {
                return oe().off(e), r.apply(this, arguments)
            }, n.guid = r.guid || (r.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, e, n, i, t)
            })
        },
        one: function(e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, oe(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = p), this.each(function() {
                oe.event.remove(this, e, i, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? oe.event.trigger(e, t, i, !0) : void 0
        }
    });
    var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Le = / jQuery\d+="(?:null|\d+)"/g,
        Ie = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        Fe = /^\s+/,
        He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        Re = /<tbody/i,
        qe = /<|&#?\w+;/,
        Be = /<(?:script|style|link)/i,
        Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ye = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Xe = g(fe),
        Qe = Xe.appendChild(fe.createElement("div"));
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, oe.extend({
        clone: function(e, t, i) {
            var n, o, s, r, a, l = oe.contains(e.ownerDocument, e);
            if (ie.html5Clone || oe.isXMLDoc(e) || !Ie.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, Qe.removeChild(s = Qe.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (n = m(s), a = m(e), r = 0; null != (o = a[r]); ++r) n[r] && k(o, n[r]);
            if (t)
                if (i)
                    for (a = a || m(e), n = n || m(s), r = 0; null != (o = a[r]); r++) x(o, n[r]);
                else x(e, s);
            return n = m(s, "script"), n.length > 0 && _(n, !l && m(e, "script")), n = a = o = null, s
        },
        buildFragment: function(e, t, i, n) {
            for (var o, s, r, a, l, c, d, u = e.length, h = g(t), p = [], f = 0; u > f; f++)
                if (s = e[f], s || 0 === s)
                    if ("object" === oe.type(s)) oe.merge(p, s.nodeType ? [s] : s);
                    else if (qe.test(s)) {
                for (a = a || h.appendChild(t.createElement("div")), l = (We.exec(s) || ["", ""])[1].toLowerCase(), d = Ge[l] || Ge._default, a.innerHTML = d[1] + s.replace(He, "<$1></$2>") + d[2], o = d[0]; o--;) a = a.lastChild;
                if (!ie.leadingWhitespace && Fe.test(s) && p.push(t.createTextNode(Fe.exec(s)[0])), !ie.tbody)
                    for (s = "table" !== l || Re.test(s) ? "<table>" !== d[1] || Re.test(s) ? 0 : a : a.firstChild, o = s && s.childNodes.length; o--;) oe.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (oe.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = h.lastChild
            } else p.push(t.createTextNode(s));
            for (a && h.removeChild(a), ie.appendChecked || oe.grep(m(p, "input"), v), f = 0; s = p[f++];)
                if ((!n || -1 === oe.inArray(s, n)) && (r = oe.contains(s.ownerDocument, s), a = m(h.appendChild(s), "script"), r && _(a), i))
                    for (o = 0; s = a[o++];) Ye.test(s.type || "") && i.push(s);
            return a = null, h
        },
        cleanData: function(e, t) {
            for (var i, n, o, s, r = 0, a = oe.expando, l = oe.cache, c = ie.deleteExpando, d = oe.event.special; null != (i = e[r]); r++)
                if ((t || oe.acceptData(i)) && (o = i[a], s = o && l[o])) {
                    if (s.events)
                        for (n in s.events) d[n] ? oe.event.remove(i, n) : oe.removeEvent(i, n, s.handle);
                    l[o] && (delete l[o], c ? delete i[a] : typeof i.removeAttribute !== ke ? i.removeAttribute(a) : i[a] = null, K.push(o))
                }
        }
    }), oe.fn.extend({
        text: function(e) {
            return $e(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
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
            for (var i, n = e ? oe.filter(e, this) : this, o = 0; null != (i = n[o]); o++) t || 1 !== i.nodeType || oe.cleanData(m(i)), i.parentNode && (t && oe.contains(i.ownerDocument, i) && _(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return $e(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Le, "") : void 0;
                if ("string" == typeof e && !Be.test(e) && (ie.htmlSerialize || !Ie.test(e)) && (ie.leadingWhitespace || !Fe.test(e)) && !Ge[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(He, "<$1></$2>");
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (oe.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, oe.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = X.apply([], e);
            var i, n, o, s, r, a, l = 0,
                c = this.length,
                d = this,
                u = c - 1,
                h = e[0],
                p = oe.isFunction(h);
            if (p || c > 1 && "string" == typeof h && !ie.checkClone && Ue.test(h)) return this.each(function(i) {
                var n = d.eq(i);
                p && (e[0] = h.call(this, i, n.html())), n.domManip(e, t)
            });
            if (c && (a = oe.buildFragment(e, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (s = oe.map(m(a, "script"), b), o = s.length; c > l; l++) n = a, l !== u && (n = oe.clone(n, !0, !0), o && oe.merge(s, m(n, "script"))), t.call(this[l], n, l);
                if (o)
                    for (r = s[s.length - 1].ownerDocument, oe.map(s, w), l = 0; o > l; l++) n = s[l], Ye.test(n.type || "") && !oe._data(n, "globalEval") && oe.contains(r, n) && (n.src ? oe._evalUrl && oe._evalUrl(n.src) : oe.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ke, "")));
                a = i = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var i, n = 0, o = [], s = oe(e), r = s.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0), oe(s[n])[t](i), Q.apply(o, i.get());
            return this.pushStack(o)
        }
    });
    var Je, Ze = {};
    ! function() {
        var e;
        ie.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(fe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(n), e) : void 0
        }
    }();
    var et, tt, it = /^margin/,
        nt = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tt = function(e, t, i) {
            var n, o, s, r, a = e.style;
            return i = i || et(e), r = i ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== r || oe.contains(e.ownerDocument, e) || (r = oe.style(e, t)), nt.test(r) && it.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 === r ? r : r + ""
        }) : fe.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }, tt = function(e, t, i) {
            var n, o, s, r, a = e.style;
            return i = i || et(e), r = i ? i[t] : void 0, null == r && a && a[t] && (r = a[t]), nt.test(r) && !ot.test(t) && (n = a.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : r, r = a.pixelLeft + "px", a.left = n, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
        }),
        function() {
            function t() {
                var t, i, n, o;
                i = fe.getElementsByTagName("body")[0], i && i.style && (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = r = !1, l = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(t, null) || {}).top, r = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, o = t.appendChild(fe.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), i.removeChild(n))
            }
            var i, n, o, s, r, a, l;
            i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = i.getElementsByTagName("a")[0], n = o && o.style, n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, oe.extend(ie, {
                reliableHiddenOffsets: function() {
                    return null == a && t(), a
                },
                boxSizingReliable: function() {
                    return null == r && t(), r
                },
                pixelPosition: function() {
                    return null == s && t(), s
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), oe.swap = function(e, t, i, n) {
            var o, s, r = {};
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            o = i.apply(e, n || []);
            for (s in t) e.style[s] = r[s];
            return o
        };
    var st = /alpha\([^)]*\)/i,
        rt = /opacity\s*=\s*([^)]*)/,
        at = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Te + ")(.*)$", "i"),
        ct = new RegExp("^([+-])=(" + Te + ")", "i"),
        dt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ht = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = tt(e, "opacity");
                        return "" === i ? "1" : i
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
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = oe.camelCase(t),
                    l = e.style;
                if (t = oe.cssProps[a] || (oe.cssProps[a] = S(l, a)), r = oe.cssHooks[t] || oe.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : l[t];
                if (s = typeof i, "string" === s && (o = ct.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), s = "number"), null != i && i === i && ("number" !== s || oe.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(e, i, n))))) try {
                    l[t] = i
                } catch (c) {}
            }
        },
        css: function(e, t, i, n) {
            var o, s, r, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = S(e.style, a)), r = oe.cssHooks[t] || oe.cssHooks[a], r && "get" in r && (s = r.get(e, !0, i)), void 0 === s && (s = tt(e, t, n)), "normal" === s && t in ut && (s = ut[t]), "" === i || i ? (o = parseFloat(s), i === !0 || oe.isNumeric(o) ? o || 0 : s) : s
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? at.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, dt, function() {
                    return N(e, t, n)
                }) : N(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var o = n && et(e);
                return $(e, i, n ? A(e, t, n, ie.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ie.opacity || (oe.cssHooks.opacity = {
        get: function(e, t) {
            return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var i = e.style,
                n = e.currentStyle,
                o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(s.replace(st, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = st.test(s) ? s.replace(st, o) : s + " " + o)
        }
    }), oe.cssHooks.marginRight = T(ie.reliableMarginRight, function(e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[e + Se[n] + t] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, it.test(e) || (oe.cssHooks[e + t].set = $)
    }), oe.fn.extend({
        css: function(e, t) {
            return $e(this, function(e, t, i) {
                var n, o, s = {},
                    r = 0;
                if (oe.isArray(t)) {
                    for (n = et(e), o = t.length; o > r; r++) s[t[r]] = oe.css(e, t[r], !1, n);
                    return s
                }
                return void 0 !== i ? oe.style(e, t, i) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ee(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = M, M.prototype = {
        constructor: M,
        init: function(e, t, i, n, o, s) {
            this.elem = e, this.prop = i, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (oe.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.fx = M.prototype.init, oe.fx.step = {};
    var pt, ft, gt = /^(?:toggle|show|hide)$/,
        mt = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [z],
        bt = {
            "*": [function(e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    o = mt.exec(t),
                    s = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                    r = (oe.cssNumber[e] || "px" !== s && +n) && mt.exec(oe.css(i.elem, e)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== s) {
                    s = s || r[3], o = o || [], r = +n || 1;
                    do a = a || ".5", r /= a, oe.style(i.elem, e, r + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
            }]
        };
    oe.Animation = oe.extend(I, {
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var i, n = 0, o = e.length; o > n; n++) i = e[n], bt[i] = bt[i] || [], bt[i].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), oe.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: i || !i && t || oe.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !oe.isFunction(t) && t
            };
            return n.duration = oe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in oe.fx.speeds ? oe.fx.speeds[n.duration] : oe.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                oe.isFunction(n.old) && n.old.call(this), n.queue && oe.dequeue(this, n.queue)
            }, n
        }, oe.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(Ee).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var o = oe.isEmptyObject(e),
                    s = oe.speed(t, i, n),
                    r = function() {
                        var t = I(this, oe.extend({}, e), s);
                        (o || oe._data(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        s = oe.timers,
                        r = oe._data(this);
                    if (o) r[o] && r[o].stop && n(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && vt.test(o) && n(r[o]);
                    for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
                    !t && i || oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, i = oe._data(this),
                        n = i[e + "queue"],
                        o = i[e + "queueHooks"],
                        s = oe.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; r > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var i = oe.fn[t];
            oe.fn[t] = function(e, n, o) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(O(t, !0), e, n, o)
            }
        }), oe.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
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
            oe.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = oe.timers,
                i = 0;
            for (pt = oe.now(); i < t.length; i++) e = t[i], e() || t[i] !== e || t.splice(i--, 1);
            t.length || oe.fx.stop(), pt = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            ft || (ft = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            clearInterval(ft), ft = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(e, t) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
                var n = setTimeout(t, e);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var e, t, i, n, o;
            t = fe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = t.getElementsByTagName("a")[0], i = fe.createElement("select"), o = i.appendChild(fe.createElement("option")), e = t.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== t.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!e.value, ie.optSelected = o.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !o.disabled, e = fe.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value
        }();
    var wt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0]; {
                if (arguments.length) return n = oe.isFunction(e), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (o = n ? e.call(this, i, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(wt, "") : null == i ? "" : i)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (i = n[l], (i.selected || l === o) && (ie.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !oe.nodeName(i.parentNode, "optgroup"))) {
                            if (t = oe(i).val(), s) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, s = oe.makeArray(t), r = o.length; r--;)
                        if (n = o[r], oe.inArray(oe.valHooks.option.get(n), s) >= 0) try {
                            n.selected = i = !0
                        } catch (a) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        }, ie.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var _t, xt, kt = oe.expr.attrHandle,
        Ct = /^(?:checked|selected)$/i,
        Dt = ie.getSetAttribute,
        Tt = ie.input;
    oe.fn.extend({
        attr: function(e, t) {
            return $e(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, i) {
            var n, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === ke ? oe.prop(e, t, i) : (1 === s && oe.isXMLDoc(e) || (t = t.toLowerCase(), n = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? xt : _t)), void 0 === i ? n && "get" in n && null !== (o = n.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(e, i, t)) ? o : (e.setAttribute(t, i + ""), i) : void oe.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var i, n, o = 0,
                s = t && t.match(be);
            if (s && 1 === e.nodeType)
                for (; i = s[o++];) n = oe.propFix[i] || i, oe.expr.match.bool.test(i) ? Tt && Dt || !Ct.test(i) ? e[n] = !1 : e[oe.camelCase("default-" + i)] = e[n] = !1 : oe.attr(e, i, ""), e.removeAttribute(Dt ? i : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), xt = {
        set: function(e, t, i) {
            return t === !1 ? oe.removeAttr(e, i) : Tt && Dt || !Ct.test(i) ? e.setAttribute(!Dt && oe.propFix[i] || i, i) : e[oe.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = kt[t] || oe.find.attr;
        kt[t] = Tt && Dt || !Ct.test(t) ? function(e, t, n) {
            var o, s;
            return n || (s = kt[t], kt[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, kt[t] = s), o
        } : function(e, t, i) {
            return i ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Tt && Dt || (oe.attrHooks.value = {
        set: function(e, t, i) {
            return oe.nodeName(e, "input") ? void(e.defaultValue = t) : _t && _t.set(e, t, i)
        }
    }), Dt || (_t = {
        set: function(e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
        }
    }, kt.id = kt.name = kt.coords = function(e, t, i) {
        var n;
        return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, oe.valHooks.button = {
        get: function(e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : void 0
        },
        set: _t.set
    }, oe.attrHooks.contenteditable = {
        set: function(e, t, i) {
            _t.set(e, "" === t ? !1 : t, i)
        }
    }, oe.each(["width", "height"], function(e, t) {
        oe.attrHooks[t] = {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        }
    })), ie.style || (oe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var St = /^(?:input|select|textarea|button|object)$/i,
        Et = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return $e(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = oe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, i) {
            var n, o, s, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return s = 1 !== r || !oe.isXMLDoc(e), s && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || oe.each(["href", "src"], function(e, t) {
        oe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }), ie.enctype || (oe.propFix.enctype = "encoding");
    var $t = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, i, n, o, s, r, a = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(be) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace($t, " ") : " ")) {
                        for (s = 0; o = t[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        r = oe.trim(n), i.className !== r && (i.className = r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, o, s, r, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(be) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace($t, " ") : "")) {
                        for (s = 0; o = t[s++];)
                            for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                        r = e ? oe.trim(n) : "", i.className !== r && (i.className = r)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(i) {
                oe(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function() {
                if ("string" === i)
                    for (var t, n = 0, o = oe(this), s = e.match(be) || []; t = s[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else i !== ke && "boolean" !== i || (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace($t, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var At = oe.now(),
        Nt = /\?/,
        Mt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var i, n = null,
            o = oe.trim(t + "");
        return o && !oe.trim(o.replace(Mt, function(e, t, o, s) {
            return i && t && (n = 0), 0 === n ? e : (i = o || t, n += !s - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
    }, oe.parseXML = function(t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (n = new DOMParser, i = n.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t))
        } catch (o) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), i
    };
    var Pt, Ot, jt = /#.*$/,
        zt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ft = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Rt = {},
        qt = {},
        Bt = "*/".concat("*");
    try {
        Ot = location.href
    } catch (Ut) {
        Ot = fe.createElement("a"), Ot.href = "", Ot = Ot.href
    }
    Pt = Wt.exec(Ot.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ot,
            type: "GET",
            isLocal: It.test(Pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
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
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? W(W(e, oe.ajaxSettings), t) : W(oe.ajaxSettings, e)
        },
        ajaxPrefilter: F(Rt),
        ajaxTransport: F(qt),
        ajax: function(e, t) {
            function i(e, t, i, n) {
                var o, d, v, y, w, x = t;
                2 !== b && (b = 2, a && clearTimeout(a), c = void 0, r = n || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (y = R(u, _, i)), y = q(u, y, _, o), o ? (u.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (oe.lastModified[s] = w), w = _.getResponseHeader("etag"), w && (oe.etag[s] = w)), 204 === e || "HEAD" === u.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, d = y.data, v = y.error, o = !v)) : (v = x, !e && x || (x = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || x) + "", o ? f.resolveWith(h, [d, x, _]) : f.rejectWith(h, [_, x, v]), _.statusCode(m), m = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [_, u, o ? d : v]), g.fireWith(h, [_, x]), l && (p.trigger("ajaxComplete", [_, u]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, o, s, r, a, l, c, d, u = oe.ajaxSetup({}, t),
                h = u.context || u,
                p = u.context && (h.nodeType || h.jquery) ? oe(h) : oe.event,
                f = oe.Deferred(),
                g = oe.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                w = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!d)
                                for (d = {}; t = Lt.exec(r);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return b || (e = y[i] = y[i] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (u.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), i(0, t), this
                    }
                };
            if (f.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, u.url = ((e || u.url || Ot) + "").replace(jt, "").replace(Ht, Pt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = oe.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (n = Wt.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Pt[1] && n[2] === Pt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = oe.param(u.data, u.traditional)), H(Rt, u, t, _), 2 === b) return _;
            l = oe.event && u.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Ft.test(u.type), s = u.url, u.hasContent || (u.data && (s = u.url += (Nt.test(s) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = zt.test(s) ? s.replace(zt, "$1_=" + At++) : s + (Nt.test(s) ? "&" : "?") + "_=" + At++)), u.ifModified && (oe.lastModified[s] && _.setRequestHeader("If-Modified-Since", oe.lastModified[s]), oe.etag[s] && _.setRequestHeader("If-None-Match", oe.etag[s])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", u.contentType), _.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : u.accepts["*"]);
            for (o in u.headers) _.setRequestHeader(o, u.headers[o]);
            if (u.beforeSend && (u.beforeSend.call(h, _, u) === !1 || 2 === b)) return _.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[o](u[o]);
            if (c = H(qt, u, t, _)) {
                _.readyState = 1, l && p.trigger("ajaxSend", [_, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                    _.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, c.send(v, i)
                } catch (x) {
                    if (!(2 > b)) throw x;
                    i(-1, x)
                }
            } else i(-1, "No Transport");
            return _
        },
        getJSON: function(e, t, i) {
            return oe.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, i, n, o) {
            return oe.isFunction(i) && (o = o || n, n = i, i = void 0), oe.ajax({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            })
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(i) {
                oe(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }, oe.expr.filters.visible = function(e) {
        return !oe.expr.filters.hidden(e)
    };
    var Yt = /%20/g,
        Vt = /\[\]$/,
        Kt = /\r?\n/g,
        Gt = /^(?:submit|button|image|reset|file)$/i,
        Xt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (i in e) B(i, e[i], t, o);
        return n.join("&").replace(Yt, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Xt.test(this.nodeName) && !Gt.test(e) && (this.checked || !Ae.test(e))
            }).map(function(e, t) {
                var i = oe(this).val();
                return null == i ? null : oe.isArray(i) ? oe.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Kt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || Y()
    } : U;
    var Qt = 0,
        Jt = {},
        Zt = oe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Jt) Jt[e](void 0, !0)
    }), ie.cors = !!Zt && "withCredentials" in Zt, Zt = ie.ajax = !!Zt, Zt && oe.ajaxTransport(function(e) {
        if (!e.crossDomain || ie.cors) {
            var t;
            return {
                send: function(i, n) {
                    var o, s = e.xhr(),
                        r = ++Qt;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) s[o] = e.xhrFields[o];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                    s.send(e.hasContent && e.data || null), t = function(i, o) {
                        var a, l, c;
                        if (t && (o || 4 === s.readyState))
                            if (delete Jt[r], t = void 0, s.onreadystatechange = oe.noop, o) 4 !== s.readyState && s.abort();
                            else {
                                c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (d) {
                                    l = ""
                                }
                                a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && n(a, l, c, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Jt[r] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i = fe.head || oe("head")[0] || fe.documentElement;
            return {
                send: function(n, o) {
                    t = fe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || o(200, "success"))
                    }, i.insertBefore(t, i.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [],
        ti = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ei.pop() || oe.expando + "_" + At++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, i, n) {
        var o, s, r, a = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(ti, "$1" + o) : t.jsonp !== !1 && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || oe.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
            r = arguments
        }, n.always(function() {
            e[o] = s, t[o] && (t.jsonpCallback = i.jsonpCallback, ei.push(o)), r && oe.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || fe;
        var n = ue.exec(e),
            o = !i && [];
        return n ? [t.createElement(n[1])] : (n = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], n.childNodes))
    };
    var ii = oe.fn.load;
    oe.fn.load = function(e, t, i) {
        if ("string" != typeof e && ii) return ii.apply(this, arguments);
        var n, o, s, r = this,
            a = e.indexOf(" ");
        return a >= 0 && (n = oe.trim(e.slice(a, e.length)), e = e.slice(0, a)), oe.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), r.length > 0 && oe.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, r.html(n ? oe("<div>").append(oe.parseHTML(e)).find(n) : e)
        }).complete(i && function(e, t) {
            r.each(i, o || [e.responseText, t, e])
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ni = e.document.documentElement;
    oe.offset = {
        setOffset: function(e, t, i) {
            var n, o, s, r, a, l, c, d = oe.css(e, "position"),
                u = oe(e),
                h = {};
            "static" === d && (e.style.position = "relative"), a = u.offset(), s = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === d || "fixed" === d) && oe.inArray("auto", [s, l]) > -1, c ? (n = u.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (h.top = t.top - a.top + r), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                s = o && o.ownerDocument;
            if (s) return t = s.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== ke && (n = o.getBoundingClientRect()), i = V(s), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - oe.css(n, "marginTop", !0),
                    left: t.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ni; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || ni
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = /Y/.test(t);
        oe.fn[e] = function(n) {
            return $e(this, function(e, n, o) {
                var s = V(e);
                return void 0 === o ? s ? t in s ? s[t] : s.document.documentElement[n] : e[n] : void(s ? s.scrollTo(i ? oe(s).scrollLeft() : o, i ? o : oe(s).scrollTop()) : e[n] = o)
            }, e, n, arguments.length, null)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = T(ie.pixelPosition, function(e, i) {
            return i ? (i = tt(e, t), nt.test(i) ? oe(e).position()[t] + "px" : i) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            oe.fn[n] = function(n, o) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    r = i || (n === !0 || o === !0 ? "margin" : "border");
                return $e(this, function(t, i, n) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? oe.css(t, i, r) : oe.style(t, i, n, r)
                }, t, s ? n : void 0, s, null)
            }
        })
    }), oe.fn.size = function() {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var oi = e.jQuery,
        si = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = si), t && e.jQuery === oe && (e.jQuery = oi), oe
    }, typeof t === ke && (e.jQuery = e.$ = oe), oe
}),
function(e, t, i, n) {
    "use strict";
    var o = i("html"),
        s = i(e),
        r = i(t),
        a = i.fancybox = function() {
            a.open.apply(this, arguments)
        },
        l = navigator.userAgent.match(/msie/i),
        c = null,
        d = t.createTouch !== n,
        u = function(e) {
            return e && e.hasOwnProperty && e instanceof i
        },
        h = function(e) {
            return e && "string" === i.type(e)
        },
        p = function(e) {
            return h(e) && e.indexOf("%") > 0
        },
        f = function(e) {
            return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
        },
        g = function(e, t) {
            var i = parseInt(e, 10) || 0;
            return t && p(e) && (i = a.getViewport()[t] / 100 * i), Math.ceil(i)
        },
        m = function(e, t) {
            return g(e, t) + "px"
        };
    i.extend(a, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !d,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeChange: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            return e && (i.isPlainObject(t) || (t = {}), !1 !== a.close(!0)) ? (i.isArray(e) || (e = u(e) ? i(e).get() : [e]), i.each(e, function(o, s) {
                var r, l, c, d, p, f, g, m = {};
                "object" === i.type(s) && (s.nodeType && (s = i(s)), u(s) ? (m = {
                    href: s.data("fancybox-href") || s.attr("href"),
                    title: i("<div/>").text(s.data("fancybox-title") || s.attr("title") || "").html(),
                    isDom: !0,
                    element: s
                }, i.metadata && i.extend(!0, m, s.metadata())) : m = s), r = t.href || m.href || (h(s) ? s : null), l = t.title !== n ? t.title : m.title || "", c = t.content || m.content, d = c ? "html" : t.type || m.type, !d && m.isDom && (d = s.data("fancybox-type"), d || (p = s.prop("class").match(/fancybox\.(\w+)/), d = p ? p[1] : null)), h(r) && (d || (a.isImage(r) ? d = "image" : a.isSWF(r) ? d = "swf" : "#" === r.charAt(0) ? d = "inline" : h(s) && (d = "html", c = s)), "ajax" === d && (f = r.split(/\s+/, 2), r = f.shift(), g = f.shift())), c || ("inline" === d ? r ? c = i(h(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : m.isDom && (c = s) : "html" === d ? c = r : d || r || !m.isDom || (d = "inline", c = s)), i.extend(m, {
                    href: r,
                    type: d,
                    content: c,
                    title: l,
                    selector: g
                }), e[o] = m
            }), a.opts = i.extend(!0, {}, a.defaults, t), t.keys !== n && (a.opts.keys = t.keys ? i.extend({}, a.defaults.keys, t.keys) : !1), a.group = e, a._start(a.opts.index)) : void 0
        },
        cancel: function() {
            var e = a.coming;
            e && !1 === a.trigger("onCancel") || (a.hideLoading(), e && (a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(e)))
        },
        close: function(e) {
            a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && e !== !0 ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
        },
        play: function(e) {
            var t = function() {
                    clearTimeout(a.player.timer)
                },
                i = function() {
                    t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
                },
                n = function() {
                    t(), r.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
                },
                o = function() {
                    a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, r.bind({
                        "onCancel.player beforeClose.player": n,
                        "onUpdate.player": i,
                        "beforeLoad.player": t
                    }), i(), a.trigger("onPlayStart"))
                };
            e === !0 || !a.player.isActive && e !== !1 ? o() : n()
        },
        next: function(e) {
            var t = a.current;
            t && (h(e) || (e = t.direction.next), a.jumpto(t.index + 1, e, "next"))
        },
        prev: function(e) {
            var t = a.current;
            t && (h(e) || (e = t.direction.prev), a.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function(e, t, i) {
            var o = a.current;
            o && (e = g(e), a.direction = t || o.direction[e >= o.index ? "next" : "prev"], a.router = i || "jumpto", o.loop && (0 > e && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== n && (a.cancel(), a._start(e)))
        },
        reposition: function(e, t) {
            var n, o = a.current,
                s = o ? o.wrap : null;
            s && (n = a._getPosition(t), e && "scroll" === e.type ? (delete n.position, s.stop(!0, !0).animate(n, 200)) : (s.css(n), o.pos = i.extend({}, o.dim, n)))
        },
        update: function(e) {
            var t = e && e.originalEvent && e.originalEvent.type,
                i = !t || "orientationchange" === t;
            i && (clearTimeout(c), c = null), a.isOpen && !c && (c = setTimeout(function() {
                var n = a.current;
                n && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && a._setDimension(), "scroll" === t && n.canShrink || a.reposition(e), a.trigger("onUpdate"), c = null)
            }, i && !d ? 0 : 300))
        },
        toggle: function(e) {
            a.isOpen && (a.current.fitToView = "boolean" === i.type(e) ? e : !a.current.fitToView, d && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
        },
        hideLoading: function() {
            r.unbind(".loading"), i("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            a.hideLoading(), e = i(a.opts.tpl.loading).click(a.cancel).appendTo("body"), r.bind("keydown.loading", function(e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), a.cancel())
            }), a.defaults.fixed || (t = a.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            })), a.trigger("onLoading")
        },
        getViewport: function() {
            var t = a.current && a.current.locked || !1,
                i = {
                    x: s.scrollLeft(),
                    y: s.scrollTop()
                };
            return t && t.length ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : s.width(), i.h = d && e.innerHeight ? e.innerHeight : s.height()), i
        },
        unbindEvents: function() {
            a.wrap && u(a.wrap) && a.wrap.unbind(".fb"), r.unbind(".fb"), s.unbind(".fb")
        },
        bindEvents: function() {
            var e, t = a.current;
            t && (s.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), a.update), e = t.keys, e && r.bind("keydown.fb", function(o) {
                var s = o.which || o.keyCode,
                    r = o.target || o.srcElement;
                return 27 === s && a.coming ? !1 : void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r && (r.type || i(r).is("[contenteditable]")) || i.each(e, function(e, r) {
                    return t.group.length > 1 && r[s] !== n ? (a[e](r[s]), o.preventDefault(), !1) : i.inArray(s, r) > -1 ? (a[e](), o.preventDefault(), !1) : void 0
                }))
            }), i.fn.mousewheel && t.mouseWheel && a.wrap.bind("mousewheel.fb", function(e, n, o, s) {
                for (var r = e.target || null, l = i(r), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = f(l[0]), l = i(l).parent();
                0 === n || c || a.group.length > 1 && !t.canShrink && (s > 0 || o > 0 ? a.prev(s > 0 ? "down" : "left") : (0 > s || 0 > o) && a.next(0 > s ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function(e, t) {
            var n, o = t || a.coming || a.current;
            if (o) {
                if (i.isFunction(o[e]) && (n = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), n === !1) return !1;
                o.helpers && i.each(o.helpers, function(t, n) {
                    n && a.helpers[t] && i.isFunction(a.helpers[t][e]) && a.helpers[t][e](i.extend(!0, {}, a.helpers[t].defaults, n), o)
                })
            }
            r.trigger(e)
        },
        isImage: function(e) {
            return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(e) {
            return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t, n, o, s, r, l = {};
            if (e = g(e), t = a.group[e] || null, !t) return !1;
            if (l = i.extend(!0, {}, a.opts, t), s = l.margin, r = l.padding, "number" === i.type(s) && (l.margin = [s, s, s, s]), "number" === i.type(r) && (l.padding = [r, r, r, r]), l.modal && i.extend(!0, l, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = a.group, l.index = e, a.coming = l, !1 === a.trigger("beforeLoad")) return void(a.coming = null);
            if (o = l.type, n = l.href, !o) return a.coming = null, a.current && a.router && "jumpto" !== a.router ? (a.current.index = e, a[a.router](a.direction)) : !1;
            if (a.isActive = !0, "image" !== o && "swf" !== o || (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && d && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {
                    skin: i(".fancybox-skin", l.wrap),
                    outer: i(".fancybox-outer", l.wrap),
                    inner: i(".fancybox-inner", l.wrap)
                }), i.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                    l.skin.css("padding" + t, m(l.padding[e]))
                }), a.trigger("onReady"), "inline" === o || "html" === o) {
                if (!l.content || !l.content.length) return a._error("content")
            } else if (!n) return a._error("href");
            "image" === o ? a._loadImage() : "ajax" === o ? a._loadAjax() : "iframe" === o ? a._loadIframe() : a._afterLoad()
        },
        _error: function(e) {
            i.extend(a.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: a.coming.tpl.error
            }), a._afterLoad()
        },
        _loadImage: function() {
            var e = a.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
            }, e.onerror = function() {
                this.onload = this.onerror = null, a._error("image")
            }, e.src = a.coming.href, e.complete !== !0 && a.showLoading()
        },
        _loadAjax: function() {
            var e = a.coming;
            a.showLoading(), a.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                url: e.href,
                error: function(e, t) {
                    a.coming && "abort" !== t ? a._error("ajax", e) : a.hideLoading()
                },
                success: function(t, i) {
                    "success" === i && (e.content = t, a._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e = a.coming,
                t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
            i(e.wrap).bind("onReset", function() {
                try {
                    i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }), e.iframe.preload && (a.showLoading(), t.one("load", function() {
                i(this).data("ready", 1), d || i(this).bind("load.fb", a.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || a._afterLoad()
        },
        _preloadImages: function() {
            var e, t, i = a.group,
                n = a.current,
                o = i.length,
                s = n.preload ? Math.min(n.preload, o - 1) : 0;
            for (t = 1; s >= t; t += 1) e = i[(n.index + t) % o], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function() {
            var e, t, n, o, s, r, l = a.coming,
                c = a.current,
                d = "fancybox-placeholder";
            if (a.hideLoading(), l && a.isActive !== !1) {
                if (!1 === a.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), void(a.coming = null);
                switch (c && (a.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), e = l, t = l.content, n = l.type, o = l.scrolling, i.extend(a, {
                    wrap: e.wrap,
                    skin: e.skin,
                    outer: e.outer,
                    inner: e.inner,
                    current: e,
                    previous: c
                }), s = e.href, n) {
                    case "inline":
                    case "ajax":
                    case "html":
                        e.selector ? t = i("<div>").html(t).find(e.selector) : u(t) && (t.data(d) || t.data(d, i('<div class="' + d + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
                            i(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1)
                        }));
                        break;
                    case "image":
                        t = e.tpl.image.replace(/\{href\}/g, s);
                        break;
                    case "swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', r = "", i.each(e.swf, function(e, i) {
                            t += '<param name="' + e + '" value="' + i + '"></param>', r += " " + e + '="' + i + '"'
                        }), t += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
                }
                u(t) && t.parent().is(e.inner) || e.inner.append(t), a.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? c.prevMethod && a.transitions[c.prevMethod]() : i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? e.nextMethod : e.openMethod](), a._preloadImages()
            }
        },
        _setDimension: function() {
            var e, t, n, o, s, r, l, c, d, u, h, f, v, y, b, w = a.getViewport(),
                _ = 0,
                x = !1,
                k = !1,
                C = a.wrap,
                D = a.skin,
                T = a.inner,
                S = a.current,
                E = S.width,
                $ = S.height,
                A = S.minWidth,
                N = S.minHeight,
                M = S.maxWidth,
                P = S.maxHeight,
                O = S.scrolling,
                j = S.scrollOutside ? S.scrollbarWidth : 0,
                z = S.margin,
                L = g(z[1] + z[3]),
                I = g(z[0] + z[2]);
            if (C.add(D).add(T).width("auto").height("auto").removeClass("fancybox-tmp"), e = g(D.outerWidth(!0) - D.width()), t = g(D.outerHeight(!0) - D.height()), n = L + e, o = I + t, s = p(E) ? (w.w - n) * g(E) / 100 : E, r = p($) ? (w.h - o) * g($) / 100 : $, "iframe" === S.type) {
                if (y = S.content, S.autoHeight && 1 === y.data("ready")) try {
                    y[0].contentWindow.document.location && (T.width(s).height(9999), b = y.contents().find("body"), j && b.css("overflow-x", "hidden"), r = b.outerHeight(!0))
                } catch (F) {}
            } else(S.autoWidth || S.autoHeight) && (T.addClass("fancybox-tmp"), S.autoWidth || T.width(s), S.autoHeight || T.height(r), S.autoWidth && (s = T.width()), S.autoHeight && (r = T.height()), T.removeClass("fancybox-tmp"));
            if (E = g(s), $ = g(r), d = s / r, A = g(p(A) ? g(A, "w") - n : A), M = g(p(M) ? g(M, "w") - n : M), N = g(p(N) ? g(N, "h") - o : N), P = g(p(P) ? g(P, "h") - o : P), l = M, c = P, S.fitToView && (M = Math.min(w.w - n, M), P = Math.min(w.h - o, P)), f = w.w - L, v = w.h - I, S.aspectRatio ? (E > M && (E = M, $ = g(E / d)), $ > P && ($ = P, E = g($ * d)), A > E && (E = A, $ = g(E / d)), N > $ && ($ = N, E = g($ * d))) : (E = Math.max(A, Math.min(E, M)), S.autoHeight && "iframe" !== S.type && (T.width(E), $ = T.height()), $ = Math.max(N, Math.min($, P))), S.fitToView)
                if (T.width(E).height($), C.width(E + e), u = C.width(), h = C.height(), S.aspectRatio)
                    for (;
                        (u > f || h > v) && E > A && $ > N && !(_++ > 19);) $ = Math.max(N, Math.min(P, $ - 10)), E = g($ * d), A > E && (E = A, $ = g(E / d)), E > M && (E = M, $ = g(E / d)), T.width(E).height($), C.width(E + e), u = C.width(), h = C.height();
                else E = Math.max(A, Math.min(E, E - (u - f))), $ = Math.max(N, Math.min($, $ - (h - v)));
            j && "auto" === O && r > $ && f > E + e + j && (E += j), T.width(E).height($), C.width(E + e), u = C.width(), h = C.height(), x = (u > f || h > v) && E > A && $ > N, k = S.aspectRatio ? l > E && c > $ && s > E && r > $ : (l > E || c > $) && (s > E || r > $), i.extend(S, {
                dim: {
                    width: m(u),
                    height: m(h)
                },
                origWidth: s,
                origHeight: r,
                canShrink: x,
                canExpand: k,
                wPadding: e,
                hPadding: t,
                wrapSpace: h - D.outerHeight(!0),
                skinSpace: D.height() - $
            }), !y && S.autoHeight && $ > N && P > $ && !k && T.height("auto")
        },
        _getPosition: function(e) {
            var t = a.current,
                i = a.getViewport(),
                n = t.margin,
                o = a.wrap.width() + n[1] + n[3],
                s = a.wrap.height() + n[0] + n[2],
                r = {
                    position: "absolute",
                    top: n[0],
                    left: n[3]
                };
            return t.autoCenter && t.fixed && !e && s <= i.h && o <= i.w ? r.position = "fixed" : t.locked || (r.top += i.y, r.left += i.x), r.top = m(Math.max(r.top, r.top + (i.h - s) * t.topRatio)), r.left = m(Math.max(r.left, r.left + (i.w - o) * t.leftRatio)), r
        },
        _afterZoomIn: function() {
            var e = a.current;
            e && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0), a.update(), (e.closeClick || e.nextClick && a.group.length > 1) && a.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), a[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && i(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function(e) {
                e.preventDefault(), a.close()
            }), e.arrows && a.group.length > 1 && ((e.loop || e.index > 0) && i(e.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (e.loop || e.index < a.group.length - 1) && i(e.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play(!0)) : a.play(!1))
        },
        _afterZoomOut: function(e) {
            e = e || a.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(a, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), a.trigger("afterClose", e)
        }
    }), a.transitions = {
        getOrigPosition: function() {
            var e = a.current,
                t = e.element,
                i = e.orig,
                n = {},
                o = 50,
                s = 50,
                r = e.hPadding,
                l = e.wPadding,
                c = a.getViewport();
            return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), u(i) ? (n = i.offset(), i.is("img") && (o = i.outerWidth(), s = i.outerHeight())) : (n.top = c.y + (c.h - s) * e.topRatio, n.left = c.x + (c.w - o) * e.leftRatio), ("fixed" === a.wrap.css("position") || e.locked) && (n.top -= c.y, n.left -= c.x), n = {
                top: m(n.top - r * e.topRatio),
                left: m(n.left - l * e.leftRatio),
                width: m(o + l),
                height: m(s + r)
            }
        },
        step: function(e, t) {
            var i, n, o, s = t.prop,
                r = a.current,
                l = r.wrapSpace,
                c = r.skinSpace;
            "width" !== s && "height" !== s || (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), a.isClosing && (i = 1 - i), n = "width" === s ? r.wPadding : r.hPadding, o = e - n, a.skin[s](g("width" === s ? o : o - l * i)), a.inner[s](g("width" === s ? o : o - l * i - c * i)))
        },
        zoomIn: function() {
            var e = a.current,
                t = e.pos,
                n = e.openEffect,
                o = "elastic" === n,
                s = i.extend({
                    opacity: 1
                }, t);
            delete s.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), a.wrap.css(t).animate(s, {
                duration: "none" === n ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: o ? this.step : null,
                complete: a._afterZoomIn
            })
        },
        zoomOut: function() {
            var e = a.current,
                t = e.closeEffect,
                i = "elastic" === t,
                n = {
                    opacity: .1
                };
            i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), a.wrap.animate(n, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: i ? this.step : null,
                complete: a._afterZoomOut
            })
        },
        changeIn: function() {
            var e, t = a.current,
                i = t.nextEffect,
                n = t.pos,
                o = {
                    opacity: 1
                },
                s = a.direction,
                r = 200;
            n.opacity = .1, "elastic" === i && (e = "down" === s || "up" === s ? "top" : "left", "down" === s || "right" === s ? (n[e] = m(g(n[e]) - r), o[e] = "+=" + r + "px") : (n[e] = m(g(n[e]) + r), o[e] = "-=" + r + "px")), "none" === i ? a._afterZoomIn() : a.wrap.css(n).animate(o, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: a._afterZoomIn
            })
        },
        changeOut: function() {
            var e = a.previous,
                t = e.prevEffect,
                n = {
                    opacity: .1
                },
                o = a.direction,
                s = 200;
            "elastic" === t && (n["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + s + "px"), e.wrap.animate(n, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    i(this).trigger("onReset").remove()
                }
            })
        }
    }, a.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !d,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: i("html"),
        create: function(e) {
            var t;
            e = i.extend({}, this.defaults, e), this.overlay && this.close(), t = a.coming ? a.coming.parent : e.parent, this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(t && t.length ? t : "body"), this.fixed = !1, e.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(e) {
            var t = this;
            e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                return i(e.target).hasClass("fancybox-overlay") ? (a.isActive ? a.close() : t.close(), !1) : void 0
            }), this.overlay.css(e.css).show()
        },
        close: function() {
            s.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), s.scrollTop(this.scrollV).scrollLeft(this.scrollH)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var e, i = "100%";
            this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (i = r.width())) : r.width() > s.width() && (i = r.width()), this.overlay.width(i).height(r.height())
        },
        onReady: function(e, t) {
            var n = this.overlay;
            i(".fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(e, t) {
            t.locked && !this.el.hasClass("fancybox-lock") && (this.fixPosition !== !1 && i("*").filter(function() {
                return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = s.scrollTop(), this.scrollH = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(this.scrollV).scrollLeft(this.scrollH)), this.open(e)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(e) {
            this.overlay && !a.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
        }
    }, a.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t, n, o = a.current,
                s = o.title,
                r = e.type;
            if (i.isFunction(s) && (s = s.call(o.element, o)), h(s) && "" !== i.trim(s)) {
                switch (t = i('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + s + "</div>"), r) {
                    case "inside":
                        n = a.skin;
                        break;
                    case "outside":
                        n = a.wrap;
                        break;
                    case "over":
                        n = a.inner;
                        break;
                    default:
                        n = a.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(g(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](n)
            }
        }
    }, i.fn.fancybox = function(e) {
        var t, n = i(this),
            o = this.selector || "",
            s = function(s) {
                var r, l, c = i(this).blur(),
                    d = t;
                s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || c.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group", l = c.attr(r), l || (r = "rel", l = c.get(0)[r]), l && "" !== l && "nofollow" !== l && (c = o.length ? i(o) : n, c = c.filter("[" + r + '="' + l + '"]'), d = c.index(this)), e.index = d, a.open(c, e) !== !1 && s.preventDefault())
            };
        return e = e || {}, t = e.index || 0, o && e.live !== !1 ? r.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : n.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, r.ready(function() {
        var t, s;
        i.scrollbarWidth === n && (i.scrollbarWidth = function() {
            var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                n = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), n
        }), i.support.fixedPosition === n && (i.support.fixedPosition = function() {
            var e = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
            return e.remove(), t
        }()), i.extend(a.defaults, {
            scrollbarWidth: i.scrollbarWidth(),
            fixed: i.support.fixedPosition,
            parent: i("body")
        }), t = i(e).width(), o.addClass("fancybox-lock-test"), s = i(e).width(), o.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery),
function(e, t) {
    function i(t, i) {
        i = i || {};
        var n = this,
            o = i.query || "> :even";
        e.extend(n, {
                $el: t,
                options: i,
                sections: [],
                isAccordion: i.accordion || !1,
                db: i.persist ? jQueryCollapseStorage(t.get(0).id) : !1
            }), n.states = n.db ? n.db.read() : [], n.$el.find(o).each(function() {
                new jQueryCollapseSection(e(this), n)
            }),
            function(t) {
                n.$el.on("click", "[data-collapse-summary] " + (t.options.clickQuery || ""), e.proxy(n.handleClick, t)), n.$el.bind("toggle close open", e.proxy(n.handleEvent, t))
            }(n)
    }

    function n(t, i) {
        i.options.clickQuery || t.wrapInner('<a href="#"/>'), e.extend(this, {
            isOpen: !1,
            $summary: t.attr("data-collapse-summary", ""),
            $details: t.next(),
            options: i.options,
            parent: i
        }), i.sections.push(this);
        var n = i.states[this._index()];
        0 === n ? this.close(!0) : this.$summary.is(".open") || 1 === n ? this.open(!0) : this.close(!0)
    }
    i.prototype = {
        handleClick: function(t, i) {
            t.preventDefault(), i = i || "toggle";
            for (var n = this.sections, o = n.length; o--;)
                if (e.contains(n[o].$summary[0], t.target)) {
                    n[o][i]();
                    break
                }
        },
        handleEvent: function(e) {
            return e.target == this.$el.get(0) ? this[e.type]() : void this.handleClick(e, e.type)
        },
        open: function(e) {
            this._change("open", e)
        },
        close: function(e) {
            this._change("close", e)
        },
        toggle: function(e) {
            this._change("toggle", e)
        },
        _change: function(t, i) {
            return isFinite(i) ? this.sections[i][t]() : void e.each(this.sections, function(e, i) {
                i[t]()
            })
        }
    }, n.prototype = {
        toggle: function() {
            this.isOpen ? this.close() : this.open()
        },
        close: function(e) {
            this._changeState("close", e)
        },
        open: function(t) {
            var i = this;
            i.options.accordion && !t && e.each(i.parent.sections, function(e, t) {
                t.close()
            }), i._changeState("open", t)
        },
        _index: function() {
            return e.inArray(this, this.parent.sections)
        },
        _changeState: function(t, i) {
            var n = this;
            n.isOpen = "open" == t, e.isFunction(n.options[t]) && !i ? n.options[t].apply(n.$details) : n.$details[n.isOpen ? "show" : "hide"](), n.$summary.toggleClass("open", "close" !== t), n.$details.attr("aria-hidden", "close" === t), n.$summary.attr("aria-expanded", "open" === t), n.$summary.trigger("open" === t ? "opened" : "closed", n), n.parent.db && n.parent.db.write(n._index(), n.isOpen)
        }
    }, e.fn.extend({
        collapse: function(t, n) {
            var o = n ? e("body").find("[data-collapse]") : e(this);
            return o.each(function() {
                var o = n ? {} : t,
                    s = e(this).attr("data-collapse") || "";
                e.each(s.split(" "), function(e, t) {
                    t && (o[t] = !0)
                }), new i(e(this), o)
            })
        }
    }), t.jQueryCollapse = i, t.jQueryCollapseSection = n, e(function() {
        e.fn.collapse(!1, !0)
    })
}(window.jQuery, window),
function(e) {
    e.flexloader = function(t, i) {
        function n(t, i) {
            this.flexslider = t, this.current_slide = 0, this.next_slide = 0, this.prev_slide = 0, this.last_slide = 0, this.visible_slides = 0, this.offset = 0, this.slide_ids = [], this.$slides = e(this.flexslider.slides), this.options = e.extend({
                picturefill: !1,
                background_images: !1,
                class_name: "flexloader-background-image-loaded"
            }, i), "undefined" != typeof this.flexslider.move ? this.offset = this.flexslider.move : this.offset = 1, this.current_slide = this.flexslider.currentSlide, this.last_slide = this.flexslider.last, "undefined" != typeof this.flexslider.visible ? this.visible_slides = this.calculate_visible_items() : this.visible_slides = 0, this.get_current_slides(), this.get_next_slides(), this.get_prev_slides(), this.init()
        }
        return n.prototype = {
            init: function() {
                var e = this;
                this.options.picturefill === !0 ? (e.load_picturefill_slides(this.slide_ids), e.load_picturefill_cloned_slides()) : this.options.background_images === !0 ? (e.load_background_image_slides(this.slide_ids), e.load_background_image_clone_slides()) : (e.load_slides(this.slide_ids), e.load_cloned_slides())
            },
            calculate_visible_items: function() {
                var e, t;
                return e = void 0 === this.flexslider.viewport ? this.flexslider.width() : this.flexslider.viewport.width(), t = this.flexslider.vars.itemWidth + this.flexslider.vars.itemMargin, Math.floor(e / t)
            },
            get_current_slides: function() {
                var e, t = this.current_slide * this.offset,
                    i = t + this.visible_slides;
                for (e = t; i >= e; e++) this.slide_ids.push(e)
            },
            get_next_slides: function() {
                var e, t = this.current_slide * this.offset + this.visible_slides,
                    i = t + this.offset;
                if (this.current_slide === this.last_slide) this.slide_ids.push(0);
                else
                    for (e = i; e > t; e--) this.slide_ids.push(e)
            },
            get_prev_slides: function() {
                var e, t, i, n, o;
                if (0 === this.current_slide)
                    for (e = this.last_slide * this.offset + this.visible_slides, t = e + this.offset, o = e; t > o; o++) this.slide_ids.push(o);
                else
                    for (i = this.current_slide * this.offset, n = i - this.offset, o = n; i > o; o++) this.slide_ids.push(o)
            },
            load_slides: function(t) {
                var i = this;
                e(t).each(function(n) {
                    var o, s, r = t[n],
                        a = e(i.$slides[r]);
                    o = a.find("img").attr("src"), s = a.find("img").attr("data-original"), "undefined" !== s && o !== s && a.find("img").attr("src", s)
                })
            },
            load_cloned_slides: function() {
                e(this.flexslider).find(".clone").length > 0 && e(this.flexslider).find(".clone").each(function() {
                    var t, i, n = e(this).find("img");
                    t = n.attr("src"), i = n.attr("data-original"), "undefined" !== i && t !== i && n.attr("src", i)
                })
            },
            load_picturefill_slides: function(t) {
                var i = this;
                e(t).each(function(n) {
                    var o, s, r, a, l = t[n];
                    o = e(i.$slides[l]).find("[data-picture]"), s = e(o).find("span").attr("data-src"), r = e(o).find("span").attr("data-original"), "undefined" !== r && s !== r && (a = e(o).find("span"), e.each(a, function(t) {
                        var i = e(a[t]),
                            n = i.attr("data-original");
                        i.attr("data-src", n), i.find("img").length > 0 && i.find("img").attr("src", n)
                    }))
                })
            },
            load_picturefill_cloned_slides: function() {
                e(this.flexslider).find(".clone").length > 0 && e(this.flexslider).find(".clone").each(function() {
                    var t, i, n, o, s = e(this);
                    t = s.find("[data-picture]"), i = e(t).find("span").attr("data-src"), n = e(t).find("span").attr("data-original"), "undefined" !== n && i !== n && (o = e(t).find("span"), e.each(o, function(t) {
                        var i = e(o[t]),
                            n = i.attr("data-original");
                        i.attr("data-src", n), i.find("img").length > 0 && i.find("img").attr("src", n)
                    }))
                })
            },
            load_background_image_slides: function(t) {
                var i = this;
                e(t).each(function(t, n) {
                    e(i.$slides[n]).addClass(i.options.class_name)
                })
            },
            load_background_image_clone_slides: function() {
                var t = this;
                e(t.flexslider).find(".clone").length > 0 && e(t.flexslider).find(".clone").each(function(i, n) {
                    e(n).addClass(t.options.class_name)
                })
            }
        }, e.data(t, "plugin_flexloader") ? void 0 : (e.data(t, "plugin_flexloader"), new n(t, i))
    }
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(e) {
    function t(t) {
        var i = {},
            n = /^jQuery\d+$/;
        return e.each(t.attributes, function(e, t) {
            t.specified && !n.test(t.name) && (i[t.name] = t.value)
        }), i
    }

    function i(t, i) {
        var n = this,
            s = e(this);
        if (n.value === s.attr(a ? "placeholder-x" : "placeholder") && s.hasClass(p.customClass))
            if (n.value = "", s.removeClass(p.customClass), s.data("placeholder-password")) {
                if (s = s.hide().nextAll('input[type="password"]:first').show().attr("id", s.removeAttr("id").data("placeholder-id")), t === !0) return s[0].value = i, i;
                s.focus()
            } else n == o() && n.select()
    }

    function n(n) {
        var o, s = this,
            r = e(this),
            l = s.id;
        if (!n || "blur" !== n.type || !r.hasClass(p.customClass))
            if ("" === s.value) {
                if ("password" === s.type) {
                    if (!r.data("placeholder-textinput")) {
                        try {
                            o = r.clone().prop({
                                type: "text"
                            })
                        } catch (c) {
                            o = e("<input>").attr(e.extend(t(this), {
                                type: "text"
                            }))
                        }
                        o.removeAttr("name").data({
                            "placeholder-enabled": !0,
                            "placeholder-password": r,
                            "placeholder-id": l
                        }).bind("focus.placeholder", i), r.data({
                            "placeholder-textinput": o,
                            "placeholder-id": l
                        }).before(o)
                    }
                    s.value = "", r = r.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", r.data("placeholder-id")).show()
                } else {
                    var d = r.data("placeholder-password");
                    d && (d[0].value = "", r.attr("id", r.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                }
                r.addClass(p.customClass), r[0].value = r.attr(a ? "placeholder-x" : "placeholder")
            } else r.removeClass(p.customClass)
    }

    function o() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var s, r, a = !1,
        l = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        c = "placeholder" in document.createElement("input") && !l && !a,
        d = "placeholder" in document.createElement("textarea") && !l && !a,
        u = e.valHooks,
        h = e.propHooks,
        p = {};
    c && d ? (r = e.fn.placeholder = function() {
        return this
    }, r.input = !0, r.textarea = !0) : (r = e.fn.placeholder = function(t) {
        var o = {
            customClass: "placeholder"
        };
        return p = e.extend({}, o, t), this.filter((c ? "textarea" : ":input") + "[" + (a ? "placeholder-x" : "placeholder") + "]").not("." + p.customClass).not(":radio, :checkbox, [type=hidden]").bind({
            "focus.placeholder": i,
            "blur.placeholder": n
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
    }, r.input = c, r.textarea = d, s = {
        get: function(t) {
            var i = e(t),
                n = i.data("placeholder-password");
            return n ? n[0].value : i.data("placeholder-enabled") && i.hasClass(p.customClass) ? "" : t.value
        },
        set: function(t, s) {
            var r, a, l = e(t);
            return "" !== s && (r = l.data("placeholder-textinput"), a = l.data("placeholder-password"), r ? (i.call(r[0], !0, s) || (t.value = s), r[0].value = s) : a && (i.call(t, !0, s) || (a[0].value = s), t.value = s)), l.data("placeholder-enabled") ? ("" === s ? (t.value = s, t != o() && n.call(t)) : (l.hasClass(p.customClass) && i.call(t), t.value = s), l) : (t.value = s, l)
        }
    }, c || (u.input = s, h.value = s), d || (u.textarea = s, h.value = s), e(function() {
        e(document).delegate("form", "submit.placeholder", function() {
            var t = e("." + p.customClass, this).each(function() {
                i.call(this, !0, "")
            });
            setTimeout(function() {
                t.each(n)
            }, 10)
        })
    }), e(window).bind("beforeunload.placeholder", function() {
        var t = !0;
        try {
            "javascript:void(0)" === document.activeElement.toString() && (t = !1)
        } catch (i) {}
        t && e("." + p.customClass).each(function() {
            this.value = ""
        })
    }))
}),
function(e, t, i) {
    ! function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.qtip && e(jQuery)
    }(function(n) {
        "use strict";

        function o(e, t, i, o) {
            this.id = i, this.target = e, this.tooltip = N, this.elements = {
                target: e
            }, this._id = B + "-" + i, this.timers = {
                img: {}
            }, this.options = t, this.plugins = {}, this.cache = {
                event: {},
                target: n(),
                disabled: A,
                attr: o,
                onTooltip: A,
                lastClass: ""
            }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = A
        }

        function s(e) {
            return e === N || "object" !== n.type(e)
        }

        function r(e) {
            return !(n.isFunction(e) || e && e.attr || e.length || "object" === n.type(e) && (e.jquery || e.then))
        }

        function a(e) {
            var t, i, o, a;
            return s(e) ? A : (s(e.metadata) && (e.metadata = {
                type: e.metadata
            }), "content" in e && (t = e.content, s(t) || t.jquery || t.done ? (i = r(t) ? A : t, t = e.content = {
                text: i
            }) : i = t.text, "ajax" in t && (o = t.ajax, a = o && o.once !== A, delete t.ajax, t.text = function(e, t) {
                var s = i || n(this).attr(t.options.content.attr) || "Loading...",
                    r = n.ajax(n.extend({}, o, {
                        context: t
                    })).then(o.success, N, o.error).then(function(e) {
                        return e && a && t.set("content.text", e), e
                    }, function(e, i, n) {
                        t.destroyed || 0 === e.status || t.set("content.text", i + ": " + n)
                    });
                return a ? s : (t.set("content.text", s), r)
            }), "title" in t && (n.isPlainObject(t.title) && (t.button = t.title.button, t.title = t.title.text), r(t.title || A) && (t.title = A))), "position" in e && s(e.position) && (e.position = {
                my: e.position,
                at: e.position
            }), "show" in e && s(e.show) && (e.show = e.show.jquery ? {
                target: e.show
            } : e.show === $ ? {
                ready: $
            } : {
                event: e.show
            }), "hide" in e && s(e.hide) && (e.hide = e.hide.jquery ? {
                target: e.hide
            } : {
                event: e.hide
            }), "style" in e && s(e.style) && (e.style = {
                classes: e.style
            }), n.each(q, function() {
                this.sanitize && this.sanitize(e)
            }), e)
        }

        function l(e, t) {
            for (var i, n = 0, o = e, s = t.split("."); o = o[s[n++]];) n < s.length && (i = o);
            return [i || e, s.pop()]
        }

        function c(e, t) {
            var i, n, o;
            for (i in this.checks)
                if (this.checks.hasOwnProperty(i))
                    for (n in this.checks[i]) this.checks[i].hasOwnProperty(n) && (o = new RegExp(n, "i").exec(e)) && (t.push(o), ("builtin" === i || this.plugins[i]) && this.checks[i][n].apply(this.plugins[i] || this, t))
        }

        function d(e) {
            return V.concat("").join(e ? "-" + e + " " : " ")
        }

        function u(e, t) {
            return t > 0 ? setTimeout(n.proxy(e, this), t) : void e.call(this)
        }

        function h(e) {
            this.tooltip.hasClass(ee) || (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = u.call(this, function() {
                this.toggle($, e)
            }, this.options.show.delay))
        }

        function p(e) {
            if (!this.tooltip.hasClass(ee) && !this.destroyed) {
                var t = n(e.relatedTarget),
                    i = t.closest(K)[0] === this.tooltip[0],
                    o = t[0] === this.options.show.target[0];
                if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== t[0] && "mouse" === this.options.position.target && i || this.options.hide.fixed && /mouse(out|leave|move)/.test(e.type) && (i || o)) try {
                    e.preventDefault(), e.stopImmediatePropagation()
                } catch (s) {} else this.timers.hide = u.call(this, function() {
                    this.toggle(A, e)
                }, this.options.hide.delay, this)
            }
        }

        function f(e) {
            !this.tooltip.hasClass(ee) && this.options.hide.inactive && (clearTimeout(this.timers.inactive), this.timers.inactive = u.call(this, function() {
                this.hide(e)
            }, this.options.hide.inactive))
        }

        function g(e) {
            this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(e)
        }

        function m(e, i, o) {
            n(t.body).delegate(e, (i.split ? i : i.join("." + B + " ")) + "." + B, function() {
                var e = C.api[n.attr(this, Y)];
                e && !e.disabled && o.apply(e, arguments)
            })
        }

        function v(e, i, s) {
            var r, l, c, d, u, h = n(t.body),
                p = e[0] === t ? h : e,
                f = e.metadata ? e.metadata(s.metadata) : N,
                g = "html5" === s.metadata.type && f ? f[s.metadata.name] : N,
                m = e.data(s.metadata.name || "qtipopts");
            try {
                m = "string" == typeof m ? n.parseJSON(m) : m
            } catch (v) {}
            if (d = n.extend($, {}, C.defaults, s, "object" == typeof m ? a(m) : N, a(g || f)), l = d.position, d.id = i, "boolean" == typeof d.content.text) {
                if (c = e.attr(d.content.attr), d.content.attr === A || !c) return A;
                d.content.text = c
            }
            if (l.container.length || (l.container = h), l.target === A && (l.target = p), d.show.target === A && (d.show.target = p), d.show.solo === $ && (d.show.solo = l.container.closest("body")), d.hide.target === A && (d.hide.target = p), d.position.viewport === $ && (d.position.viewport = l.container), l.container = l.container.eq(0), l.at = new T(l.at, $), l.my = new T(l.my), e.data(B))
                if (d.overwrite) e.qtip("destroy", !0);
                else if (d.overwrite === A) return A;
            return e.attr(U, i), d.suppress && (u = e.attr("title")) && e.removeAttr("title").attr(ie, u).attr("title", ""), r = new o(e, d, i, !!c), e.data(B, r), r
        }

        function y(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function b(e, t) {
            var n, o, s = t.charAt(0).toUpperCase() + t.slice(1),
                r = (t + " " + _e.join(s + " ") + s).split(" "),
                a = 0;
            if (we[t]) return e.css(we[t]);
            for (; n = r[a++];)
                if ((o = e.css(n)) !== i) return we[t] = n, o
        }

        function w(e, t) {
            return Math.ceil(parseFloat(b(e, t)))
        }

        function _(e, t) {
            this._ns = "tip", this.options = t, this.offset = t.offset, this.size = [t.width, t.height], this.qtip = e, this.init(e)
        }

        function x(e, t) {
            this.options = t, this._ns = "-modal", this.qtip = e, this.init(e)
        }

        function k(e) {
            this._ns = "ie6", this.qtip = e, this.init(e)
        }
        var C, D, T, S, E, $ = !0,
            A = !1,
            N = null,
            M = "x",
            P = "y",
            O = "width",
            j = "height",
            z = "top",
            L = "left",
            I = "bottom",
            F = "right",
            H = "center",
            W = "flipinvert",
            R = "shift",
            q = {},
            B = "qtip",
            U = "data-hasqtip",
            Y = "data-qtip-id",
            V = ["ui-widget", "ui-tooltip"],
            K = "." + B,
            G = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
            X = B + "-fixed",
            Q = B + "-default",
            J = B + "-focus",
            Z = B + "-hover",
            ee = B + "-disabled",
            te = "_replacedByqTip",
            ie = "oldtitle",
            ne = {
                ie: function() {
                    var e, i;
                    for (e = 4, i = t.createElement("div");
                        (i.innerHTML = "<!--[if gt IE " + e + "]><i></i><![endif]-->") && i.getElementsByTagName("i")[0]; e += 1);
                    return e > 4 ? e : NaN
                }(),
                iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || A
            };
        D = o.prototype, D._when = function(e) {
            return n.when.apply(n, e)
        }, D.render = function(e) {
            if (this.rendered || this.destroyed) return this;
            var t = this,
                i = this.options,
                o = this.cache,
                s = this.elements,
                r = i.content.text,
                a = i.content.title,
                l = i.content.button,
                c = i.position,
                d = [];
            return n.attr(this.target[0], "aria-describedby", this._id), o.posClass = this._createPosClass((this.position = {
                my: c.my,
                at: c.at
            }).my), this.tooltip = s.tooltip = n("<div/>", {
                id: this._id,
                "class": [B, Q, i.style.classes, o.posClass].join(" "),
                width: i.style.width || "",
                height: i.style.height || "",
                tracking: "mouse" === c.target && c.adjust.mouse,
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": A,
                "aria-describedby": this._id + "-content",
                "aria-hidden": $
            }).toggleClass(ee, this.disabled).attr(Y, this.id).data(B, this).appendTo(c.container).append(s.content = n("<div />", {
                "class": B + "-content",
                id: this._id + "-content",
                "aria-atomic": $
            })), this.rendered = -1, this.positioning = $, a && (this._createTitle(), n.isFunction(a) || d.push(this._updateTitle(a, A))), l && this._createButton(), n.isFunction(r) || d.push(this._updateContent(r, A)), this.rendered = $, this._setWidget(), n.each(q, function(e) {
                var i;
                "render" === this.initialize && (i = this(t)) && (t.plugins[e] = i)
            }), this._unassignEvents(), this._assignEvents(), this._when(d).then(function() {
                t._trigger("render"), t.positioning = A, t.hiddenDuringWait || !i.show.ready && !e || t.toggle($, o.event, A), t.hiddenDuringWait = A
            }), C.api[this.id] = this, this
        }, D.destroy = function(e) {
            function t() {
                if (!this.destroyed) {
                    this.destroyed = $;
                    var e, t = this.target,
                        i = t.attr(ie);
                    this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), n.each(this.plugins, function() {
                        this.destroy && this.destroy()
                    });
                    for (e in this.timers) this.timers.hasOwnProperty(e) && clearTimeout(this.timers[e]);
                    t.removeData(B).removeAttr(Y).removeAttr(U).removeAttr("aria-describedby"), this.options.suppress && i && t.attr("title", i).removeAttr(ie), this._unassignEvents(), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = N, delete C.api[this.id]
                }
            }
            return this.destroyed ? this.target : (e === $ && "hide" !== this.triggering || !this.rendered ? t.call(this) : (this.tooltip.one("tooltiphidden", n.proxy(t, this)), !this.triggering && this.hide()), this.target)
        }, S = D.checks = {
            builtin: {
                "^id$": function(e, t, i, o) {
                    var s = i === $ ? C.nextid : i,
                        r = B + "-" + s;
                    s !== A && s.length > 0 && !n("#" + r).length ? (this._id = r, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : e[t] = o
                },
                "^prerender": function(e, t, i) {
                    i && !this.rendered && this.render(this.options.show.ready)
                },
                "^content.text$": function(e, t, i) {
                    this._updateContent(i)
                },
                "^content.attr$": function(e, t, i, n) {
                    this.options.content.text === this.target.attr(n) && this._updateContent(this.target.attr(i))
                },
                "^content.title$": function(e, t, i) {
                    return i ? (i && !this.elements.title && this._createTitle(), void this._updateTitle(i)) : this._removeTitle()
                },
                "^content.button$": function(e, t, i) {
                    this._updateButton(i)
                },
                "^content.title.(text|button)$": function(e, t, i) {
                    this.set("content." + t, i)
                },
                "^position.(my|at)$": function(e, t, i) {
                    "string" == typeof i && (this.position[t] = e[t] = new T(i, "at" === t))
                },
                "^position.container$": function(e, t, i) {
                    this.rendered && this.tooltip.appendTo(i)
                },
                "^show.ready$": function(e, t, i) {
                    i && (!this.rendered && this.render($) || this.toggle($))
                },
                "^style.classes$": function(e, t, i, n) {
                    this.rendered && this.tooltip.removeClass(n).addClass(i)
                },
                "^style.(width|height)": function(e, t, i) {
                    this.rendered && this.tooltip.css(t, i)
                },
                "^style.widget|content.title": function() {
                    this.rendered && this._setWidget()
                },
                "^style.def": function(e, t, i) {
                    this.rendered && this.tooltip.toggleClass(Q, !!i)
                },
                "^events.(render|show|move|hide|focus|blur)$": function(e, t, i) {
                    this.rendered && this.tooltip[(n.isFunction(i) ? "" : "un") + "bind"]("tooltip" + t, i)
                },
                "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                    if (this.rendered) {
                        var e = this.options.position;
                        this.tooltip.attr("tracking", "mouse" === e.target && e.adjust.mouse), this._unassignEvents(), this._assignEvents()
                    }
                }
            }
        }, D.get = function(e) {
            if (this.destroyed) return this;
            var t = l(this.options, e.toLowerCase()),
                i = t[0][t[1]];
            return i.precedance ? i.string() : i
        };
        var oe = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
            se = /^prerender|show\.ready/i;
        D.set = function(e, t) {
            if (this.destroyed) return this;
            var i, o = this.rendered,
                s = A,
                r = this.options;
            return "string" == typeof e ? (i = e, e = {}, e[i] = t) : e = n.extend({}, e), n.each(e, function(t, i) {
                if (o && se.test(t)) return void delete e[t];
                var a, c = l(r, t.toLowerCase());
                a = c[0][c[1]], c[0][c[1]] = i && i.nodeType ? n(i) : i, s = oe.test(t) || s, e[t] = [c[0], c[1], i, a]
            }), a(r), this.positioning = $, n.each(e, n.proxy(c, this)), this.positioning = A, this.rendered && this.tooltip[0].offsetWidth > 0 && s && this.reposition("mouse" === r.position.target ? N : this.cache.event), this
        }, D._update = function(e, t) {
            var i = this,
                o = this.cache;
            return this.rendered && e ? (n.isFunction(e) && (e = e.call(this.elements.target, o.event, this) || ""), n.isFunction(e.then) ? (o.waiting = $, e.then(function(e) {
                return o.waiting = A, i._update(e, t)
            }, N, function(e) {
                return i._update(e, t)
            })) : e === A || !e && "" !== e ? A : (e.jquery && e.length > 0 ? t.empty().append(e.css({
                display: "block",
                visibility: "visible"
            })) : t.html(e), this._waitForContent(t).then(function(e) {
                i.rendered && i.tooltip[0].offsetWidth > 0 && i.reposition(o.event, !e.length)
            }))) : A
        }, D._waitForContent = function(e) {
            var t = this.cache;
            return t.waiting = $, (n.fn.imagesLoaded ? e.imagesLoaded() : (new n.Deferred).resolve([])).done(function() {
                t.waiting = A
            }).promise()
        }, D._updateContent = function(e, t) {
            this._update(e, this.elements.content, t)
        }, D._updateTitle = function(e, t) {
            this._update(e, this.elements.title, t) === A && this._removeTitle(A)
        }, D._createTitle = function() {
            var e = this.elements,
                t = this._id + "-title";
            e.titlebar && this._removeTitle(), e.titlebar = n("<div />", {
                "class": B + "-titlebar " + (this.options.style.widget ? d("header") : "")
            }).append(e.title = n("<div />", {
                id: t,
                "class": B + "-title",
                "aria-atomic": $
            })).insertBefore(e.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(e) {
                n(this).toggleClass("ui-state-active ui-state-focus", "down" === e.type.substr(-4))
            }).delegate(".qtip-close", "mouseover mouseout", function(e) {
                n(this).toggleClass("ui-state-hover", "mouseover" === e.type)
            }), this.options.content.button && this._createButton()
        }, D._removeTitle = function(e) {
            var t = this.elements;
            t.title && (t.titlebar.remove(), t.titlebar = t.title = t.button = N, e !== A && this.reposition())
        }, D._createPosClass = function(e) {
            return B + "-pos-" + (e || this.options.position.my).abbrev()
        }, D.reposition = function(i, o) {
            if (!this.rendered || this.positioning || this.destroyed) return this;
            this.positioning = $;
            var s, r, a, l, c = this.cache,
                d = this.tooltip,
                u = this.options.position,
                h = u.target,
                p = u.my,
                f = u.at,
                g = u.viewport,
                m = u.container,
                v = u.adjust,
                y = v.method.split(" "),
                b = d.outerWidth(A),
                w = d.outerHeight(A),
                _ = 0,
                x = 0,
                k = d.css("position"),
                C = {
                    left: 0,
                    top: 0
                },
                D = d[0].offsetWidth > 0,
                T = i && "scroll" === i.type,
                S = n(e),
                E = m[0].ownerDocument,
                N = this.mouse;
            if (n.isArray(h) && 2 === h.length) f = {
                x: L,
                y: z
            }, C = {
                left: h[0],
                top: h[1]
            };
            else if ("mouse" === h) f = {
                x: L,
                y: z
            }, (!v.mouse || this.options.hide.distance) && c.origin && c.origin.pageX ? i = c.origin : !i || i && ("resize" === i.type || "scroll" === i.type) ? i = c.event : N && N.pageX && (i = N), "static" !== k && (C = m.offset()), E.body.offsetWidth !== (e.innerWidth || E.documentElement.clientWidth) && (r = n(t.body).offset()), C = {
                left: i.pageX - C.left + (r && r.left || 0),
                top: i.pageY - C.top + (r && r.top || 0)
            }, v.mouse && T && N && (C.left -= (N.scrollX || 0) - S.scrollLeft(), C.top -= (N.scrollY || 0) - S.scrollTop());
            else {
                if ("event" === h ? i && i.target && "scroll" !== i.type && "resize" !== i.type ? c.target = n(i.target) : i.target || (c.target = this.elements.target) : "event" !== h && (c.target = n(h.jquery ? h : this.elements.target)), h = c.target, h = n(h).eq(0), 0 === h.length) return this;
                h[0] === t || h[0] === e ? (_ = ne.iOS ? e.innerWidth : h.width(), x = ne.iOS ? e.innerHeight : h.height(), h[0] === e && (C = {
                    top: (g || h).scrollTop(),
                    left: (g || h).scrollLeft()
                })) : q.imagemap && h.is("area") ? s = q.imagemap(this, h, f, q.viewport ? y : A) : q.svg && h && h[0].ownerSVGElement ? s = q.svg(this, h, f, q.viewport ? y : A) : (_ = h.outerWidth(A), x = h.outerHeight(A), C = h.offset()), s && (_ = s.width, x = s.height, r = s.offset, C = s.position), C = this.reposition.offset(h, C, m), (ne.iOS > 3.1 && ne.iOS < 4.1 || ne.iOS >= 4.3 && ne.iOS < 4.33 || !ne.iOS && "fixed" === k) && (C.left -= S.scrollLeft(), C.top -= S.scrollTop()), (!s || s && s.adjustable !== A) && (C.left += f.x === F ? _ : f.x === H ? _ / 2 : 0, C.top += f.y === I ? x : f.y === H ? x / 2 : 0)
            }
            return C.left += v.x + (p.x === F ? -b : p.x === H ? -b / 2 : 0), C.top += v.y + (p.y === I ? -w : p.y === H ? -w / 2 : 0), q.viewport ? (a = C.adjusted = q.viewport(this, C, u, _, x, b, w), r && a.left && (C.left += r.left), r && a.top && (C.top += r.top), a.my && (this.position.my = a.my)) : C.adjusted = {
                left: 0,
                top: 0
            }, c.posClass !== (l = this._createPosClass(this.position.my)) && (c.posClass = l, d.removeClass(c.posClass).addClass(l)), this._trigger("move", [C, g.elem || g], i) ? (delete C.adjusted, o === A || !D || isNaN(C.left) || isNaN(C.top) || "mouse" === h || !n.isFunction(u.effect) ? d.css(C) : n.isFunction(u.effect) && (u.effect.call(d, this, n.extend({}, C)), d.queue(function(e) {
                n(this).css({
                    opacity: "",
                    height: ""
                }), ne.ie && this.style.removeAttribute("filter"), e()
            })), this.positioning = A, this) : this
        }, D.reposition.offset = function(e, i, o) {
            function s(e, t) {
                i.left += t * e.scrollLeft(), i.top += t * e.scrollTop()
            }
            if (!o[0]) return i;
            var r, a, l, c, d = n(e[0].ownerDocument),
                u = !!ne.ie && "CSS1Compat" !== t.compatMode,
                h = o[0];
            do "static" !== (a = n.css(h, "position")) && ("fixed" === a ? (l = h.getBoundingClientRect(), s(d, -1)) : (l = n(h).position(), l.left += parseFloat(n.css(h, "borderLeftWidth")) || 0, l.top += parseFloat(n.css(h, "borderTopWidth")) || 0), i.left -= l.left + (parseFloat(n.css(h, "marginLeft")) || 0), i.top -= l.top + (parseFloat(n.css(h, "marginTop")) || 0), r || "hidden" === (c = n.css(h, "overflow")) || "visible" === c || (r = n(h))); while (h = h.offsetParent);
            return r && (r[0] !== d[0] || u) && s(r, 1), i
        };
        var re = (T = D.reposition.Corner = function(e, t) {
            e = ("" + e).replace(/([A-Z])/, " $1").replace(/middle/gi, H).toLowerCase(), this.x = (e.match(/left|right/i) || e.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (e.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !!t;
            var i = e.charAt(0);
            this.precedance = "t" === i || "b" === i ? P : M
        }).prototype;
        re.invert = function(e, t) {
            this[e] = this[e] === L ? F : this[e] === F ? L : t || this[e]
        }, re.string = function(e) {
            var t = this.x,
                i = this.y,
                n = t !== i ? "center" === t || "center" !== i && (this.precedance === P || this.forceY) ? [i, t] : [t, i] : [t];
            return e !== !1 ? n.join(" ") : n
        }, re.abbrev = function() {
            var e = this.string(!1);
            return e[0].charAt(0) + (e[1] && e[1].charAt(0) || "")
        }, re.clone = function() {
            return new T(this.string(), this.forceY)
        }, D.toggle = function(e, i) {
            var o = this.cache,
                s = this.options,
                r = this.tooltip;
            if (i) {
                if (/over|enter/.test(i.type) && o.event && /out|leave/.test(o.event.type) && s.show.target.add(i.target).length === s.show.target.length && r.has(i.relatedTarget).length) return this;
                o.event = n.event.fix(i)
            }
            if (this.waiting && !e && (this.hiddenDuringWait = $), !this.rendered) return e ? this.render(1) : this;
            if (this.destroyed || this.disabled) return this;
            var a, l, c, d = e ? "show" : "hide",
                u = this.options[d],
                h = this.options.position,
                p = this.options.content,
                f = this.tooltip.css("width"),
                g = this.tooltip.is(":visible"),
                m = e || 1 === u.target.length,
                v = !i || u.target.length < 2 || o.target[0] === i.target;
            return (typeof e).search("boolean|number") && (e = !g), a = !r.is(":animated") && g === e && v, l = a ? N : !!this._trigger(d, [90]), this.destroyed ? this : (l !== A && e && this.focus(i), !l || a ? this : (n.attr(r[0], "aria-hidden", !e), e ? (this.mouse && (o.origin = n.event.fix(this.mouse)), n.isFunction(p.text) && this._updateContent(p.text, A), n.isFunction(p.title) && this._updateTitle(p.title, A), !E && "mouse" === h.target && h.adjust.mouse && (n(t).bind("mousemove." + B, this._storeMouse), E = $), f || r.css("width", r.outerWidth(A)), this.reposition(i, arguments[2]), f || r.css("width", ""), u.solo && ("string" == typeof u.solo ? n(u.solo) : n(K, u.solo)).not(r).not(u.target).qtip("hide", new n.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete o.origin, E && !n(K + '[tracking="true"]:visible', u.solo).not(r).length && (n(t).unbind("mousemove." + B), E = A), this.blur(i)), c = n.proxy(function() {
                e ? (ne.ie && r[0].style.removeAttribute("filter"), r.css("overflow", ""), "string" == typeof u.autofocus && n(this.options.show.autofocus, r).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : r.css({
                    display: "",
                    visibility: "",
                    opacity: "",
                    left: "",
                    top: ""
                }), this._trigger(e ? "visible" : "hidden")
            }, this), u.effect === A || m === A ? (r[d](), c()) : n.isFunction(u.effect) ? (r.stop(1, 1), u.effect.call(r, this), r.queue("fx", function(e) {
                c(), e()
            })) : r.fadeTo(90, e ? 1 : 0, c), e && u.target.trigger("qtip-" + this.id + "-inactive"), this))
        }, D.show = function(e) {
            return this.toggle($, e)
        }, D.hide = function(e) {
            return this.toggle(A, e)
        }, D.focus = function(e) {
            if (!this.rendered || this.destroyed) return this;
            var t = n(K),
                i = this.tooltip,
                o = parseInt(i[0].style.zIndex, 10),
                s = C.zindex + t.length;
            return i.hasClass(J) || this._trigger("focus", [s], e) && (o !== s && (t.each(function() {
                this.style.zIndex > o && (this.style.zIndex = this.style.zIndex - 1)
            }), t.filter("." + J).qtip("blur", e)), i.addClass(J)[0].style.zIndex = s), this
        }, D.blur = function(e) {
            return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(J), this._trigger("blur", [this.tooltip.css("zIndex")], e), this)
        }, D.disable = function(e) {
            return this.destroyed ? this : ("toggle" === e ? e = !(this.rendered ? this.tooltip.hasClass(ee) : this.disabled) : "boolean" != typeof e && (e = $), this.rendered && this.tooltip.toggleClass(ee, e).attr("aria-disabled", e), this.disabled = !!e, this)
        }, D.enable = function() {
            return this.disable(A)
        }, D._createButton = function() {
            var e = this,
                t = this.elements,
                i = t.tooltip,
                o = this.options.content.button,
                s = "string" == typeof o,
                r = s ? o : "Close tooltip";
            t.button && t.button.remove(), o.jquery ? t.button = o : t.button = n("<a />", {
                "class": "qtip-close " + (this.options.style.widget ? "" : B + "-icon"),
                title: r,
                "aria-label": r
            }).prepend(n("<span />", {
                "class": "ui-icon ui-icon-close",
                html: "&times;"
            })), t.button.appendTo(t.titlebar || i).attr("role", "button").click(function(t) {
                return i.hasClass(ee) || e.hide(t), A
            })
        }, D._updateButton = function(e) {
            if (!this.rendered) return A;
            var t = this.elements.button;
            e ? this._createButton() : t.remove()
        }, D._setWidget = function() {
            var e = this.options.style.widget,
                t = this.elements,
                i = t.tooltip,
                n = i.hasClass(ee);
            i.removeClass(ee), ee = e ? "ui-state-disabled" : "qtip-disabled", i.toggleClass(ee, n), i.toggleClass("ui-helper-reset " + d(), e).toggleClass(Q, this.options.style.def && !e), t.content && t.content.toggleClass(d("content"), e), t.titlebar && t.titlebar.toggleClass(d("header"), e), t.button && t.button.toggleClass(B + "-icon", !e)
        }, D._storeMouse = function(e) {
            return (this.mouse = n.event.fix(e)).type = "mousemove", this
        }, D._bind = function(e, t, i, o, s) {
            if (e && i && t.length) {
                var r = "." + this._id + (o ? "-" + o : "");
                return n(e).bind((t.split ? t : t.join(r + " ")) + r, n.proxy(i, s || this)), this
            }
        }, D._unbind = function(e, t) {
            return e && n(e).unbind("." + this._id + (t ? "-" + t : "")), this
        }, D._trigger = function(e, t, i) {
            var o = new n.Event("tooltip" + e);
            return o.originalEvent = i && n.extend({}, i) || this.cache.event || N, this.triggering = e, this.tooltip.trigger(o, [this].concat(t || [])), this.triggering = A, !o.isDefaultPrevented()
        }, D._bindEvents = function(e, t, i, o, s, r) {
            var a = i.filter(o).add(o.filter(i)),
                l = [];
            a.length && (n.each(t, function(t, i) {
                var o = n.inArray(i, e);
                o > -1 && l.push(e.splice(o, 1)[0])
            }), l.length && (this._bind(a, l, function(e) {
                var t = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1;
                (t ? r : s).call(this, e)
            }), i = i.not(a), o = o.not(a))), this._bind(i, e, s), this._bind(o, t, r)
        }, D._assignInitialEvents = function(e) {
            function t(e) {
                return this.disabled || this.destroyed ? A : (this.cache.event = e && n.event.fix(e), this.cache.target = e && n(e.target), clearTimeout(this.timers.show), void(this.timers.show = u.call(this, function() {
                    this.render("object" == typeof e || i.show.ready)
                }, i.prerender ? 0 : i.show.delay)))
            }
            var i = this.options,
                o = i.show.target,
                s = i.hide.target,
                r = i.show.event ? n.trim("" + i.show.event).split(" ") : [],
                a = i.hide.event ? n.trim("" + i.hide.event).split(" ") : [];
            this._bind(this.elements.target, ["remove", "removeqtip"], function() {
                this.destroy(!0)
            }, "destroy"), /mouse(over|enter)/i.test(i.show.event) && !/mouse(out|leave)/i.test(i.hide.event) && a.push("mouseleave"), this._bind(o, "mousemove", function(e) {
                this._storeMouse(e), this.cache.onTarget = $
            }), this._bindEvents(r, a, o, s, t, function() {
                return this.timers ? void clearTimeout(this.timers.show) : A
            }), (i.show.ready || i.prerender) && t.call(this, e)
        }, D._assignEvents = function() {
            var i = this,
                o = this.options,
                s = o.position,
                r = this.tooltip,
                a = o.show.target,
                l = o.hide.target,
                c = s.container,
                d = s.viewport,
                u = n(t),
                m = n(e),
                v = o.show.event ? n.trim("" + o.show.event).split(" ") : [],
                y = o.hide.event ? n.trim("" + o.hide.event).split(" ") : [];
            n.each(o.events, function(e, t) {
                i._bind(r, "toggle" === e ? ["tooltipshow", "tooltiphide"] : ["tooltip" + e], t, null, r)
            }), /mouse(out|leave)/i.test(o.hide.event) && "window" === o.hide.leave && this._bind(u, ["mouseout", "blur"], function(e) {
                /select|option/.test(e.target.nodeName) || e.relatedTarget || this.hide(e)
            }), o.hide.fixed ? l = l.add(r.addClass(X)) : /mouse(over|enter)/i.test(o.show.event) && this._bind(l, "mouseleave", function() {
                clearTimeout(this.timers.show)
            }), ("" + o.hide.event).indexOf("unfocus") > -1 && this._bind(c.closest("html"), ["mousedown", "touchstart"], function(e) {
                var t = n(e.target),
                    i = this.rendered && !this.tooltip.hasClass(ee) && this.tooltip[0].offsetWidth > 0,
                    o = t.parents(K).filter(this.tooltip[0]).length > 0;
                t[0] === this.target[0] || t[0] === this.tooltip[0] || o || this.target.has(t[0]).length || !i || this.hide(e)
            }), "number" == typeof o.hide.inactive && (this._bind(a, "qtip-" + this.id + "-inactive", f, "inactive"), this._bind(l.add(r), C.inactiveEvents, f)), this._bindEvents(v, y, a, l, h, p), this._bind(a.add(r), "mousemove", function(e) {
                if ("number" == typeof o.hide.distance) {
                    var t = this.cache.origin || {},
                        i = this.options.hide.distance,
                        n = Math.abs;
                    (n(e.pageX - t.pageX) >= i || n(e.pageY - t.pageY) >= i) && this.hide(e)
                }
                this._storeMouse(e)
            }), "mouse" === s.target && s.adjust.mouse && (o.hide.event && this._bind(a, ["mouseenter", "mouseleave"], function(e) {
                return this.cache ? void(this.cache.onTarget = "mouseenter" === e.type) : A
            }), this._bind(u, "mousemove", function(e) {
                this.rendered && this.cache.onTarget && !this.tooltip.hasClass(ee) && this.tooltip[0].offsetWidth > 0 && this.reposition(e)
            })), (s.adjust.resize || d.length) && this._bind(n.event.special.resize ? d : m, "resize", g), s.adjust.scroll && this._bind(m.add(s.container), "scroll", g)
        }, D._unassignEvents = function() {
            var i = this.options,
                o = i.show.target,
                s = i.hide.target,
                r = n.grep([this.elements.target[0], this.rendered && this.tooltip[0], i.position.container[0], i.position.viewport[0], i.position.container.closest("html")[0], e, t], function(e) {
                    return "object" == typeof e
                });
            o && o.toArray && (r = r.concat(o.toArray())), s && s.toArray && (r = r.concat(s.toArray())), this._unbind(r)._unbind(r, "destroy")._unbind(r, "inactive")
        }, n(function() {
            m(K, ["mouseenter", "mouseleave"], function(e) {
                var t = "mouseenter" === e.type,
                    i = n(e.currentTarget),
                    o = n(e.relatedTarget || e.target),
                    s = this.options;
                t ? (this.focus(e), i.hasClass(X) && !i.hasClass(ee) && clearTimeout(this.timers.hide)) : "mouse" === s.position.target && s.position.adjust.mouse && s.hide.event && s.show.target && !o.closest(s.show.target[0]).length && this.hide(e), i.toggleClass(Z, t)
            }), m("[" + Y + "]", G, f)
        }), C = n.fn.qtip = function(e, t, o) {
            var s = ("" + e).toLowerCase(),
                r = N,
                l = n.makeArray(arguments).slice(1),
                c = l[l.length - 1],
                d = this[0] ? n.data(this[0], B) : N;
            return !arguments.length && d || "api" === s ? d : "string" == typeof e ? (this.each(function() {
                var e = n.data(this, B);
                if (!e) return $;
                if (c && c.timeStamp && (e.cache.event = c), !t || "option" !== s && "options" !== s) e[s] && e[s].apply(e, l);
                else {
                    if (o === i && !n.isPlainObject(t)) return r = e.get(t), A;
                    e.set(t, o)
                }
            }), r !== N ? r : this) : "object" != typeof e && arguments.length ? void 0 : (d = a(n.extend($, {}, e)), this.each(function(e) {
                var t, i;
                return i = n.isArray(d.id) ? d.id[e] : d.id, i = !i || i === A || i.length < 1 || C.api[i] ? C.nextid++ : i, t = v(n(this), i, d), t === A ? $ : (C.api[i] = t, n.each(q, function() {
                    "initialize" === this.initialize && this(t)
                }), void t._assignInitialEvents(c))
            }))
        }, n.qtip = o, C.api = {}, n.each({
            attr: function(e, t) {
                if (this.length) {
                    var i = this[0],
                        o = "title",
                        s = n.data(i, "qtip");
                    if (e === o && s && s.options && "object" == typeof s && "object" == typeof s.options && s.options.suppress) return arguments.length < 2 ? n.attr(i, ie) : (s && s.options.content.attr === o && s.cache.attr && s.set("content.text", t), this.attr(ie, t))
                }
                return n.fn["attr" + te].apply(this, arguments)
            },
            clone: function(e) {
                var t = n.fn["clone" + te].apply(this, arguments);
                return e || t.filter("[" + ie + "]").attr("title", function() {
                    return n.attr(this, ie)
                }).removeAttr(ie), t
            }
        }, function(e, t) {
            if (!t || n.fn[e + te]) return $;
            var i = n.fn[e + te] = n.fn[e];
            n.fn[e] = function() {
                return t.apply(this, arguments) || i.apply(this, arguments)
            }
        }), n.ui || (n["cleanData" + te] = n.cleanData, n.cleanData = function(e) {
            for (var t, i = 0;
                (t = n(e[i])).length; i++)
                if (t.attr(U)) try {
                    t.triggerHandler("removeqtip")
                } catch (o) {}
            n["cleanData" + te].apply(this, arguments)
        }), C.version = "3.0.3", C.nextid = 0, C.inactiveEvents = G, C.zindex = 15e3, C.defaults = {
            prerender: A,
            id: A,
            overwrite: $,
            suppress: $,
            content: {
                text: $,
                attr: "title",
                title: A,
                button: A
            },
            position: {
                my: "top left",
                at: "bottom right",
                target: A,
                container: A,
                viewport: A,
                adjust: {
                    x: 0,
                    y: 0,
                    mouse: $,
                    scroll: $,
                    resize: $,
                    method: "flipinvert flipinvert"
                },
                effect: function(e, t) {
                    n(this).animate(t, {
                        duration: 200,
                        queue: A
                    })
                }
            },
            show: {
                target: A,
                event: "mouseenter",
                effect: $,
                delay: 90,
                solo: A,
                ready: A,
                autofocus: A
            },
            hide: {
                target: A,
                event: "mouseleave",
                effect: $,
                delay: 0,
                fixed: A,
                inactive: A,
                leave: "window",
                distance: A
            },
            style: {
                classes: "",
                widget: A,
                width: A,
                height: A,
                def: $
            },
            events: {
                render: N,
                move: N,
                show: N,
                hide: N,
                toggle: N,
                visible: N,
                hidden: N,
                focus: N,
                blur: N
            }
        };
        var ae, le, ce, de, ue, he = "margin",
            pe = "border",
            fe = "color",
            ge = "background-color",
            me = "transparent",
            ve = " !important",
            ye = !!t.createElement("canvas").getContext,
            be = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
            we = {},
            _e = ["Webkit", "O", "Moz", "ms"];
        ye ? (de = e.devicePixelRatio || 1, ue = function() {
            var e = t.createElement("canvas").getContext("2d");
            return e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || 1
        }(), ce = de / ue) : le = function(e, t, i) {
            return "<qtipvml:" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (t || "") + ' style="behavior: url(#default#VML); ' + (i || "") + '" />'
        }, n.extend(_.prototype, {
            init: function(e) {
                var t, i;
                i = this.element = e.elements.tip = n("<div />", {
                    "class": B + "-tip"
                }).prependTo(e.tooltip), ye ? (t = n("<canvas />").appendTo(this.element)[0].getContext("2d"), t.lineJoin = "miter", t.miterLimit = 1e5, t.save()) : (t = le("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(t + t), e._bind(n("*", i).add(i), ["click", "mousedown"], function(e) {
                    e.stopPropagation()
                }, this._ns)), e._bind(e.tooltip, "tooltipmove", this.reposition, this._ns, this), this.create()
            },
            _swapDimensions: function() {
                this.size[0] = this.options.height, this.size[1] = this.options.width
            },
            _resetDimensions: function() {
                this.size[0] = this.options.width, this.size[1] = this.options.height
            },
            _useTitle: function(e) {
                var t = this.qtip.elements.titlebar;
                return t && (e.y === z || e.y === H && this.element.position().top + this.size[1] / 2 + this.options.offset < t.outerHeight($))
            },
            _parseCorner: function(e) {
                var t = this.qtip.options.position.my;
                return e === A || t === A ? e = A : e === $ ? e = new T(t.string()) : e.string || (e = new T(e), e.fixed = $), e
            },
            _parseWidth: function(e, t, i) {
                var n = this.qtip.elements,
                    o = pe + y(t) + "Width";
                return (i ? w(i, o) : w(n.content, o) || w(this._useTitle(e) && n.titlebar || n.content, o) || w(n.tooltip, o)) || 0
            },
            _parseRadius: function(e) {
                var t = this.qtip.elements,
                    i = pe + y(e.y) + y(e.x) + "Radius";
                return ne.ie < 9 ? 0 : w(this._useTitle(e) && t.titlebar || t.content, i) || w(t.tooltip, i) || 0
            },
            _invalidColour: function(e, t, i) {
                var n = e.css(t);
                return !n || i && n === e.css(i) || be.test(n) ? A : n
            },
            _parseColours: function(e) {
                var t = this.qtip.elements,
                    i = this.element.css("cssText", ""),
                    o = pe + y(e[e.precedance]) + y(fe),
                    s = this._useTitle(e) && t.titlebar || t.content,
                    r = this._invalidColour,
                    a = [];
                return a[0] = r(i, ge) || r(s, ge) || r(t.content, ge) || r(t.tooltip, ge) || i.css(ge),
                    a[1] = r(i, o, fe) || r(s, o, fe) || r(t.content, o, fe) || r(t.tooltip, o, fe) || t.tooltip.css(o), n("*", i).add(i).css("cssText", ge + ":" + me + ve + ";" + pe + ":0" + ve + ";"), a
            },
            _calculateSize: function(e) {
                var t, i, n, o = e.precedance === P,
                    s = this.options.width,
                    r = this.options.height,
                    a = "c" === e.abbrev(),
                    l = (o ? s : r) * (a ? .5 : 1),
                    c = Math.pow,
                    d = Math.round,
                    u = Math.sqrt(c(l, 2) + c(r, 2)),
                    h = [this.border / l * u, this.border / r * u];
                return h[2] = Math.sqrt(c(h[0], 2) - c(this.border, 2)), h[3] = Math.sqrt(c(h[1], 2) - c(this.border, 2)), t = u + h[2] + h[3] + (a ? 0 : h[0]), i = t / u, n = [d(i * s), d(i * r)], o ? n : n.reverse()
            },
            _calculateTip: function(e, t, i) {
                i = i || 1, t = t || this.size;
                var n = t[0] * i,
                    o = t[1] * i,
                    s = Math.ceil(n / 2),
                    r = Math.ceil(o / 2),
                    a = {
                        br: [0, 0, n, o, n, 0],
                        bl: [0, 0, n, 0, 0, o],
                        tr: [0, o, n, 0, n, o],
                        tl: [0, 0, 0, o, n, o],
                        tc: [0, o, s, 0, n, o],
                        bc: [0, 0, n, 0, s, o],
                        rc: [0, 0, n, r, 0, o],
                        lc: [n, 0, n, o, 0, r]
                    };
                return a.lt = a.br, a.rt = a.bl, a.lb = a.tr, a.rb = a.tl, a[e.abbrev()]
            },
            _drawCoords: function(e, t) {
                e.beginPath(), e.moveTo(t[0], t[1]), e.lineTo(t[2], t[3]), e.lineTo(t[4], t[5]), e.closePath()
            },
            create: function() {
                var e = this.corner = (ye || ne.ie) && this._parseCorner(this.options.corner);
                return this.enabled = !!this.corner && "c" !== this.corner.abbrev(), this.enabled && (this.qtip.cache.corner = e.clone(), this.update()), this.element.toggle(this.enabled), this.corner
            },
            update: function(t, i) {
                if (!this.enabled) return this;
                var o, s, r, a, l, c, d, u, h = this.qtip.elements,
                    p = this.element,
                    f = p.children(),
                    g = this.options,
                    m = this.size,
                    v = g.mimic,
                    y = Math.round;
                t || (t = this.qtip.cache.corner || this.corner), v === A ? v = t : (v = new T(v), v.precedance = t.precedance, "inherit" === v.x ? v.x = t.x : "inherit" === v.y ? v.y = t.y : v.x === v.y && (v[t.precedance] = t[t.precedance])), s = v.precedance, t.precedance === M ? this._swapDimensions() : this._resetDimensions(), o = this.color = this._parseColours(t), o[1] !== me ? (u = this.border = this._parseWidth(t, t[t.precedance]), g.border && 1 > u && !be.test(o[1]) && (o[0] = o[1]), this.border = u = g.border !== $ ? g.border : u) : this.border = u = 0, d = this.size = this._calculateSize(t), p.css({
                    width: d[0],
                    height: d[1],
                    lineHeight: d[1] + "px"
                }), c = t.precedance === P ? [y(v.x === L ? u : v.x === F ? d[0] - m[0] - u : (d[0] - m[0]) / 2), y(v.y === z ? d[1] - m[1] : 0)] : [y(v.x === L ? d[0] - m[0] : 0), y(v.y === z ? u : v.y === I ? d[1] - m[1] - u : (d[1] - m[1]) / 2)], ye ? (r = f[0].getContext("2d"), r.restore(), r.save(), r.clearRect(0, 0, 6e3, 6e3), a = this._calculateTip(v, m, ce), l = this._calculateTip(v, this.size, ce), f.attr(O, d[0] * ce).attr(j, d[1] * ce), f.css(O, d[0]).css(j, d[1]), this._drawCoords(r, l), r.fillStyle = o[1], r.fill(), r.translate(c[0] * ce, c[1] * ce), this._drawCoords(r, a), r.fillStyle = o[0], r.fill()) : (a = this._calculateTip(v), a = "m" + a[0] + "," + a[1] + " l" + a[2] + "," + a[3] + " " + a[4] + "," + a[5] + " xe", c[2] = u && /^(r|b)/i.test(t.string()) ? 8 === ne.ie ? 2 : 1 : 0, f.css({
                    coordsize: d[0] + u + " " + d[1] + u,
                    antialias: "" + (v.string().indexOf(H) > -1),
                    left: c[0] - c[2] * Number(s === M),
                    top: c[1] - c[2] * Number(s === P),
                    width: d[0] + u,
                    height: d[1] + u
                }).each(function(e) {
                    var t = n(this);
                    t[t.prop ? "prop" : "attr"]({
                        coordsize: d[0] + u + " " + d[1] + u,
                        path: a,
                        fillcolor: o[0],
                        filled: !!e,
                        stroked: !e
                    }).toggle(!(!u && !e)), !e && t.html(le("stroke", 'weight="' + 2 * u + 'px" color="' + o[1] + '" miterlimit="1000" joinstyle="miter"'))
                })), e.opera && setTimeout(function() {
                    h.tip.css({
                        display: "inline-block",
                        visibility: "visible"
                    })
                }, 1), i !== A && this.calculate(t, d)
            },
            calculate: function(e, t) {
                if (!this.enabled) return A;
                var i, o, s = this,
                    r = this.qtip.elements,
                    a = this.element,
                    l = this.options.offset,
                    c = {};
                return e = e || this.corner, i = e.precedance, t = t || this._calculateSize(e), o = [e.x, e.y], i === M && o.reverse(), n.each(o, function(n, o) {
                    var a, d, u;
                    o === H ? (a = i === P ? L : z, c[a] = "50%", c[he + "-" + a] = -Math.round(t[i === P ? 0 : 1] / 2) + l) : (a = s._parseWidth(e, o, r.tooltip), d = s._parseWidth(e, o, r.content), u = s._parseRadius(e), c[o] = Math.max(-s.border, n ? d : l + (u > a ? u : -a)))
                }), c[e[i]] -= t[i === M ? 0 : 1], a.css({
                    margin: "",
                    top: "",
                    bottom: "",
                    left: "",
                    right: ""
                }).css(c), c
            },
            reposition: function(e, t, n) {
                function o(e, t, i, n, o) {
                    e === R && c.precedance === t && d[n] && c[i] !== H ? c.precedance = c.precedance === M ? P : M : e !== R && d[n] && (c[t] = c[t] === H ? d[n] > 0 ? n : o : c[t] === n ? o : n)
                }

                function s(e, t, o) {
                    c[e] === H ? g[he + "-" + t] = f[e] = r[he + "-" + t] - d[t] : (a = r[o] !== i ? [d[t], -r[t]] : [-d[t], r[t]], (f[e] = Math.max(a[0], a[1])) > a[0] && (n[t] -= d[t], f[t] = A), g[r[o] !== i ? o : t] = f[e])
                }
                if (this.enabled) {
                    var r, a, l = t.cache,
                        c = this.corner.clone(),
                        d = n.adjusted,
                        u = t.options.position.adjust.method.split(" "),
                        h = u[0],
                        p = u[1] || u[0],
                        f = {
                            left: A,
                            top: A,
                            x: 0,
                            y: 0
                        },
                        g = {};
                    this.corner.fixed !== $ && (o(h, M, P, L, F), o(p, P, M, z, I), c.string() === l.corner.string() && l.cornerTop === d.top && l.cornerLeft === d.left || this.update(c, A)), r = this.calculate(c), r.right !== i && (r.left = -r.right), r.bottom !== i && (r.top = -r.bottom), r.user = this.offset, f.left = h === R && !!d.left, f.left && s(M, L, F), f.top = p === R && !!d.top, f.top && s(P, z, I), this.element.css(g).toggle(!(f.x && f.y || c.x === H && f.y || c.y === H && f.x)), n.left -= r.left.charAt ? r.user : h !== R || f.top || !f.left && !f.top ? r.left + this.border : 0, n.top -= r.top.charAt ? r.user : p !== R || f.left || !f.left && !f.top ? r.top + this.border : 0, l.cornerLeft = d.left, l.cornerTop = d.top, l.corner = c.clone()
                }
            },
            destroy: function() {
                this.qtip._unbind(this.qtip.tooltip, this._ns), this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove()
            }
        }), ae = q.tip = function(e) {
            return new _(e, e.options.style.tip)
        }, ae.initialize = "render", ae.sanitize = function(e) {
            if (e.style && "tip" in e.style) {
                var t = e.style.tip;
                "object" != typeof t && (t = e.style.tip = {
                    corner: t
                }), /string|boolean/i.test(typeof t.corner) || (t.corner = $)
            }
        }, S.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function() {
                this.create(), this.qtip.reposition()
            },
            "^style.tip.(height|width)$": function(e) {
                this.size = [e.width, e.height], this.update(), this.qtip.reposition()
            },
            "^content.title|style.(classes|widget)$": function() {
                this.update()
            }
        }, n.extend($, C.defaults, {
            style: {
                tip: {
                    corner: $,
                    mimic: A,
                    width: 6,
                    height: 6,
                    border: $,
                    offset: 0
                }
            }
        });
        var xe, ke, Ce = "qtip-modal",
            De = "." + Ce;
        ke = function() {
            function e(e) {
                if (n.expr[":"].focusable) return n.expr[":"].focusable;
                var t, i, o, s = !isNaN(n.attr(e, "tabindex")),
                    r = e.nodeName && e.nodeName.toLowerCase();
                return "area" === r ? (t = e.parentNode, i = t.name, e.href && i && "map" === t.nodeName.toLowerCase() ? (o = n("img[usemap=#" + i + "]")[0], !!o && o.is(":visible")) : !1) : /input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || s : s
            }

            function i(e) {
                c.length < 1 && e.length ? e.not("body").blur() : c.first().focus()
            }

            function o(e) {
                if (a.is(":visible")) {
                    var t, o = n(e.target),
                        r = s.tooltip,
                        l = o.closest(K);
                    t = l.length < 1 ? A : parseInt(l[0].style.zIndex, 10) > parseInt(r[0].style.zIndex, 10), t || o.closest(K)[0] === r[0] || i(o)
                }
            }
            var s, r, a, l = this,
                c = {};
            n.extend(l, {
                init: function() {
                    return a = l.elem = n("<div />", {
                        id: "qtip-overlay",
                        html: "<div></div>",
                        mousedown: function() {
                            return A
                        }
                    }).hide(), n(t.body).bind("focusin" + De, o), n(t).bind("keydown" + De, function(e) {
                        s && s.options.show.modal.escape && 27 === e.keyCode && s.hide(e)
                    }), a.bind("click" + De, function(e) {
                        s && s.options.show.modal.blur && s.hide(e)
                    }), l
                },
                update: function(t) {
                    s = t, c = t.options.show.modal.stealfocus !== A ? t.tooltip.find("*").filter(function() {
                        return e(this)
                    }) : []
                },
                toggle: function(e, o, c) {
                    var d = e.tooltip,
                        u = e.options.show.modal,
                        h = u.effect,
                        p = o ? "show" : "hide",
                        f = a.is(":visible"),
                        g = n(De).filter(":visible:not(:animated)").not(d);
                    return l.update(e), o && u.stealfocus !== A && i(n(":focus")), a.toggleClass("blurs", u.blur), o && a.appendTo(t.body), a.is(":animated") && f === o && r !== A || !o && g.length ? l : (a.stop($, A), n.isFunction(h) ? h.call(a, o) : h === A ? a[p]() : a.fadeTo(parseInt(c, 10) || 90, o ? 1 : 0, function() {
                        o || a.hide()
                    }), o || a.queue(function(e) {
                        a.css({
                            left: "",
                            top: ""
                        }), n(De).length || a.detach(), e()
                    }), r = o, s.destroyed && (s = N), l)
                }
            }), l.init()
        }, ke = new ke, n.extend(x.prototype, {
            init: function(e) {
                var t = e.tooltip;
                return this.options.on ? (e.elements.overlay = ke.elem, t.addClass(Ce).css("z-index", C.modal_zindex + n(De).length), e._bind(t, ["tooltipshow", "tooltiphide"], function(e, i, o) {
                    var s = e.originalEvent;
                    if (e.target === t[0])
                        if (s && "tooltiphide" === e.type && /mouse(leave|enter)/.test(s.type) && n(s.relatedTarget).closest(ke.elem[0]).length) try {
                            e.preventDefault()
                        } catch (r) {} else(!s || s && "tooltipsolo" !== s.type) && this.toggle(e, "tooltipshow" === e.type, o)
                }, this._ns, this), e._bind(t, "tooltipfocus", function(e, i) {
                    if (!e.isDefaultPrevented() && e.target === t[0]) {
                        var o = n(De),
                            s = C.modal_zindex + o.length,
                            r = parseInt(t[0].style.zIndex, 10);
                        ke.elem[0].style.zIndex = s - 1, o.each(function() {
                            this.style.zIndex > r && (this.style.zIndex -= 1)
                        }), o.filter("." + J).qtip("blur", e.originalEvent), t.addClass(J)[0].style.zIndex = s, ke.update(i);
                        try {
                            e.preventDefault()
                        } catch (a) {}
                    }
                }, this._ns, this), void e._bind(t, "tooltiphide", function(e) {
                    e.target === t[0] && n(De).filter(":visible").not(t).last().qtip("focus", e)
                }, this._ns, this)) : this
            },
            toggle: function(e, t, i) {
                return e && e.isDefaultPrevented() ? this : void ke.toggle(this.qtip, !!t, i)
            },
            destroy: function() {
                this.qtip.tooltip.removeClass(Ce), this.qtip._unbind(this.qtip.tooltip, this._ns), ke.toggle(this.qtip, A), delete this.qtip.elements.overlay
            }
        }), xe = q.modal = function(e) {
            return new x(e, e.options.show.modal)
        }, xe.sanitize = function(e) {
            e.show && ("object" != typeof e.show.modal ? e.show.modal = {
                on: !!e.show.modal
            } : "undefined" == typeof e.show.modal.on && (e.show.modal.on = $))
        }, C.modal_zindex = C.zindex - 200, xe.initialize = "render", S.modal = {
            "^show.modal.(on|blur)$": function() {
                this.destroy(), this.init(), this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0)
            }
        }, n.extend($, C.defaults, {
            show: {
                modal: {
                    on: A,
                    effect: $,
                    blur: $,
                    stealfocus: $,
                    escape: $
                }
            }
        }), q.viewport = function(i, n, o, s, r, a, l) {
            function c(e, t, i, o, s, r, a, l, c) {
                var d = n[s],
                    y = w[e],
                    b = _[e],
                    x = i === R,
                    k = y === s ? c : y === r ? -c : -c / 2,
                    C = b === s ? l : b === r ? -l : -l / 2,
                    D = m[s] + v[s] - (p ? 0 : h[s]),
                    T = D - d,
                    S = d + c - (a === O ? f : g) - D,
                    E = k - (w.precedance === e || y === w[t] ? C : 0) - (b === H ? l / 2 : 0);
                return x ? (E = (y === s ? 1 : -1) * k, n[s] += T > 0 ? T : S > 0 ? -S : 0, n[s] = Math.max(-h[s] + v[s], d - E, Math.min(Math.max(-h[s] + v[s] + (a === O ? f : g), d + E), n[s], "center" === y ? d - k : 1e9))) : (o *= i === W ? 2 : 0, T > 0 && (y !== s || S > 0) ? (n[s] -= E + o, u.invert(e, s)) : S > 0 && (y !== r || T > 0) && (n[s] -= (y === H ? -E : E) + o, u.invert(e, r)), n[s] < m[s] && -n[s] > S && (n[s] = d, u = w.clone())), n[s] - d
            }
            var d, u, h, p, f, g, m, v, y = o.target,
                b = i.elements.tooltip,
                w = o.my,
                _ = o.at,
                x = o.adjust,
                k = x.method.split(" "),
                C = k[0],
                D = k[1] || k[0],
                T = o.viewport,
                S = o.container,
                E = {
                    left: 0,
                    top: 0
                };
            return T.jquery && y[0] !== e && y[0] !== t.body && "none" !== x.method ? (h = S.offset() || E, p = "static" === S.css("position"), d = "fixed" === b.css("position"), f = T[0] === e ? T.width() : T.outerWidth(A), g = T[0] === e ? T.height() : T.outerHeight(A), m = {
                left: d ? 0 : T.scrollLeft(),
                top: d ? 0 : T.scrollTop()
            }, v = T.offset() || E, "shift" === C && "shift" === D || (u = w.clone()), E = {
                left: "none" !== C ? c(M, P, C, x.x, L, F, O, s, a) : 0,
                top: "none" !== D ? c(P, M, D, x.y, z, I, j, r, l) : 0,
                my: u
            }) : E
        }, q.polys = {
            polygon: function(e, t) {
                var i, n, o, s = {
                        width: 0,
                        height: 0,
                        position: {
                            top: 1e10,
                            right: 0,
                            bottom: 0,
                            left: 1e10
                        },
                        adjustable: A
                    },
                    r = 0,
                    a = [],
                    l = 1,
                    c = 1,
                    d = 0,
                    u = 0;
                for (r = e.length; r--;) i = [parseInt(e[--r], 10), parseInt(e[r + 1], 10)], i[0] > s.position.right && (s.position.right = i[0]), i[0] < s.position.left && (s.position.left = i[0]), i[1] > s.position.bottom && (s.position.bottom = i[1]), i[1] < s.position.top && (s.position.top = i[1]), a.push(i);
                if (n = s.width = Math.abs(s.position.right - s.position.left), o = s.height = Math.abs(s.position.bottom - s.position.top), "c" === t.abbrev()) s.position = {
                    left: s.position.left + s.width / 2,
                    top: s.position.top + s.height / 2
                };
                else {
                    for (; n > 0 && o > 0 && l > 0 && c > 0;)
                        for (n = Math.floor(n / 2), o = Math.floor(o / 2), t.x === L ? l = n : t.x === F ? l = s.width - n : l += Math.floor(n / 2), t.y === z ? c = o : t.y === I ? c = s.height - o : c += Math.floor(o / 2), r = a.length; r-- && !(a.length < 2);) d = a[r][0] - s.position.left, u = a[r][1] - s.position.top, (t.x === L && d >= l || t.x === F && l >= d || t.x === H && (l > d || d > s.width - l) || t.y === z && u >= c || t.y === I && c >= u || t.y === H && (c > u || u > s.height - c)) && a.splice(r, 1);
                    s.position = {
                        left: a[0][0],
                        top: a[0][1]
                    }
                }
                return s
            },
            rect: function(e, t, i, n) {
                return {
                    width: Math.abs(i - e),
                    height: Math.abs(n - t),
                    position: {
                        left: Math.min(e, i),
                        top: Math.min(t, n)
                    }
                }
            },
            _angles: {
                tc: 1.5,
                tr: 7 / 4,
                tl: 5 / 4,
                bc: .5,
                br: .25,
                bl: .75,
                rc: 2,
                lc: 1,
                c: 0
            },
            ellipse: function(e, t, i, n, o) {
                var s = q.polys._angles[o.abbrev()],
                    r = 0 === s ? 0 : i * Math.cos(s * Math.PI),
                    a = n * Math.sin(s * Math.PI);
                return {
                    width: 2 * i - Math.abs(r),
                    height: 2 * n - Math.abs(a),
                    position: {
                        left: e + r,
                        top: t + a
                    },
                    adjustable: A
                }
            },
            circle: function(e, t, i, n) {
                return q.polys.ellipse(e, t, i, i, n)
            }
        }, q.svg = function(e, i, o) {
            for (var s, r, a, l, c, d, u, h, p, f = i[0], g = n(f.ownerSVGElement), m = f.ownerDocument, v = (parseInt(i.css("stroke-width"), 10) || 0) / 2; !f.getBBox;) f = f.parentNode;
            if (!f.getBBox || !f.parentNode) return A;
            switch (f.nodeName) {
                case "ellipse":
                case "circle":
                    h = q.polys.ellipse(f.cx.baseVal.value, f.cy.baseVal.value, (f.rx || f.r).baseVal.value + v, (f.ry || f.r).baseVal.value + v, o);
                    break;
                case "line":
                case "polygon":
                case "polyline":
                    for (u = f.points || [{
                            x: f.x1.baseVal.value,
                            y: f.y1.baseVal.value
                        }, {
                            x: f.x2.baseVal.value,
                            y: f.y2.baseVal.value
                        }], h = [], d = -1, l = u.numberOfItems || u.length; ++d < l;) c = u.getItem ? u.getItem(d) : u[d], h.push.apply(h, [c.x, c.y]);
                    h = q.polys.polygon(h, o);
                    break;
                default:
                    h = f.getBBox(), h = {
                        width: h.width,
                        height: h.height,
                        position: {
                            left: h.x,
                            top: h.y
                        }
                    }
            }
            return p = h.position, g = g[0], g.createSVGPoint && (r = f.getScreenCTM(), u = g.createSVGPoint(), u.x = p.left, u.y = p.top, a = u.matrixTransform(r), p.left = a.x, p.top = a.y), m !== t && "mouse" !== e.position.target && (s = n((m.defaultView || m.parentWindow).frameElement).offset(), s && (p.left += s.left, p.top += s.top)), m = n(m), p.left += m.scrollLeft(), p.top += m.scrollTop(), h
        }, q.imagemap = function(e, t, i) {
            t.jquery || (t = n(t));
            var o, s, r, a, l, c = (t.attr("shape") || "rect").toLowerCase().replace("poly", "polygon"),
                d = n('img[usemap="#' + t.parent("map").attr("name") + '"]'),
                u = n.trim(t.attr("coords")),
                h = u.replace(/,$/, "").split(",");
            if (!d.length) return A;
            if ("polygon" === c) a = q.polys.polygon(h, i);
            else {
                if (!q.polys[c]) return A;
                for (r = -1, l = h.length, s = []; ++r < l;) s.push(parseInt(h[r], 10));
                a = q.polys[c].apply(this, s.concat(i))
            }
            return o = d.offset(), o.left += Math.ceil((d.outerWidth(A) - d.width()) / 2), o.top += Math.ceil((d.outerHeight(A) - d.height()) / 2), a.position.left += o.left, a.position.top += o.top, a
        };
        var Te, Se = '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';
        n.extend(k.prototype, {
            _scroll: function() {
                var t = this.qtip.elements.overlay;
                t && (t[0].style.top = n(e).scrollTop() + "px")
            },
            init: function(i) {
                var o = i.tooltip;
                n("select, object").length < 1 && (this.bgiframe = i.elements.bgiframe = n(Se).appendTo(o), i._bind(o, "tooltipmove", this.adjustBGIFrame, this._ns, this)), this.redrawContainer = n("<div/>", {
                    id: B + "-rcontainer"
                }).appendTo(t.body), i.elements.overlay && i.elements.overlay.addClass("qtipmodal-ie6fix") && (i._bind(e, ["scroll", "resize"], this._scroll, this._ns, this), i._bind(o, ["tooltipshow"], this._scroll, this._ns, this)), this.redraw()
            },
            adjustBGIFrame: function() {
                var e, t, i = this.qtip.tooltip,
                    n = {
                        height: i.outerHeight(A),
                        width: i.outerWidth(A)
                    },
                    o = this.qtip.plugins.tip,
                    s = this.qtip.elements.tip;
                t = parseInt(i.css("borderLeftWidth"), 10) || 0, t = {
                    left: -t,
                    top: -t
                }, o && s && (e = "x" === o.corner.precedance ? [O, L] : [j, z], t[e[1]] -= s[e[0]]()), this.bgiframe.css(t).css(n)
            },
            redraw: function() {
                if (this.qtip.rendered < 1 || this.drawing) return this;
                var e, t, i, n, o = this.qtip.tooltip,
                    s = this.qtip.options.style,
                    r = this.qtip.options.position.container;
                return this.qtip.drawing = 1, s.height && o.css(j, s.height), s.width ? o.css(O, s.width) : (o.css(O, "").appendTo(this.redrawContainer), t = o.width(), 1 > t % 2 && (t += 1), i = o.css("maxWidth") || "", n = o.css("minWidth") || "", e = (i + n).indexOf("%") > -1 ? r.width() / 100 : 0, i = (i.indexOf("%") > -1 ? e : 1 * parseInt(i, 10)) || t, n = (n.indexOf("%") > -1 ? e : 1 * parseInt(n, 10)) || 0, t = i + n ? Math.min(Math.max(t, n), i) : t, o.css(O, Math.round(t)).appendTo(r)), this.drawing = 0, this
            },
            destroy: function() {
                this.bgiframe && this.bgiframe.remove(), this.qtip._unbind([e, this.qtip.tooltip], this._ns)
            }
        }), Te = q.ie6 = function(e) {
            return 6 === ne.ie ? new k(e) : A
        }, Te.initialize = "render", S.ie6 = {
            "^content|style$": function() {
                this.redraw()
            }
        }
    })
}(window, document),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
            var t;
            return function() {
                    if (!t || !t.requirejs) {
                        t ? i = t : t = {};
                        var e, i, n;
                        ! function(t) {
                            function o(e, t) {
                                return w.call(e, t)
                            }

                            function s(e, t) {
                                var i, n, o, s, r, a, l, c, d, u, h, p = t && t.split("/"),
                                    f = y.map,
                                    g = f && f["*"] || {};
                                if (e && "." === e.charAt(0))
                                    if (t) {
                                        for (e = e.split("/"), r = e.length - 1, y.nodeIdCompat && x.test(e[r]) && (e[r] = e[r].replace(x, "")), e = p.slice(0, p.length - 1).concat(e), d = 0; d < e.length; d += 1)
                                            if (h = e[d], "." === h) e.splice(d, 1), d -= 1;
                                            else if (".." === h) {
                                            if (1 === d && (".." === e[2] || ".." === e[0])) break;
                                            d > 0 && (e.splice(d - 1, 2), d -= 2)
                                        }
                                        e = e.join("/")
                                    } else 0 === e.indexOf("./") && (e = e.substring(2));
                                if ((p || g) && f) {
                                    for (i = e.split("/"), d = i.length; d > 0; d -= 1) {
                                        if (n = i.slice(0, d).join("/"), p)
                                            for (u = p.length; u > 0; u -= 1)
                                                if (o = f[p.slice(0, u).join("/")], o && (o = o[n])) {
                                                    s = o, a = d;
                                                    break
                                                }
                                        if (s) break;
                                        !l && g && g[n] && (l = g[n], c = d)
                                    }!s && l && (s = l, a = c), s && (i.splice(0, a, s), e = i.join("/"))
                                }
                                return e
                            }

                            function r(e, i) {
                                return function() {
                                    var n = _.call(arguments, 0);
                                    return "string" != typeof n[0] && 1 === n.length && n.push(null), p.apply(t, n.concat([e, i]))
                                }
                            }

                            function a(e) {
                                return function(t) {
                                    return s(t, e)
                                }
                            }

                            function l(e) {
                                return function(t) {
                                    m[e] = t
                                }
                            }

                            function c(e) {
                                if (o(v, e)) {
                                    var i = v[e];
                                    delete v[e], b[e] = !0, h.apply(t, i)
                                }
                                if (!o(m, e) && !o(b, e)) throw new Error("No " + e);
                                return m[e]
                            }

                            function d(e) {
                                var t, i = e ? e.indexOf("!") : -1;
                                return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
                            }

                            function u(e) {
                                return function() {
                                    return y && y.config && y.config[e] || {}
                                }
                            }
                            var h, p, f, g, m = {},
                                v = {},
                                y = {},
                                b = {},
                                w = Object.prototype.hasOwnProperty,
                                _ = [].slice,
                                x = /\.js$/;
                            f = function(e, t) {
                                var i, n = d(e),
                                    o = n[0];
                                return e = n[1], o && (o = s(o, t), i = c(o)), o ? e = i && i.normalize ? i.normalize(e, a(t)) : s(e, t) : (e = s(e, t), n = d(e), o = n[0], e = n[1], o && (i = c(o))), {
                                    f: o ? o + "!" + e : e,
                                    n: e,
                                    pr: o,
                                    p: i
                                }
                            }, g = {
                                require: function(e) {
                                    return r(e)
                                },
                                exports: function(e) {
                                    var t = m[e];
                                    return "undefined" != typeof t ? t : m[e] = {}
                                },
                                module: function(e) {
                                    return {
                                        id: e,
                                        uri: "",
                                        exports: m[e],
                                        config: u(e)
                                    }
                                }
                            }, h = function(e, i, n, s) {
                                var a, d, u, h, p, y, w = [],
                                    _ = typeof n;
                                if (s = s || e, "undefined" === _ || "function" === _) {
                                    for (i = !i.length && n.length ? ["require", "exports", "module"] : i, p = 0; p < i.length; p += 1)
                                        if (h = f(i[p], s), d = h.f, "require" === d) w[p] = g.require(e);
                                        else if ("exports" === d) w[p] = g.exports(e), y = !0;
                                    else if ("module" === d) a = w[p] = g.module(e);
                                    else if (o(m, d) || o(v, d) || o(b, d)) w[p] = c(d);
                                    else {
                                        if (!h.p) throw new Error(e + " missing " + d);
                                        h.p.load(h.n, r(s, !0), l(d), {}), w[p] = m[d]
                                    }
                                    u = n ? n.apply(m[e], w) : void 0, e && (a && a.exports !== t && a.exports !== m[e] ? m[e] = a.exports : u === t && y || (m[e] = u))
                                } else e && (m[e] = n)
                            }, e = i = p = function(e, i, n, o, s) {
                                if ("string" == typeof e) return g[e] ? g[e](i) : c(f(e, i).f);
                                if (!e.splice) {
                                    if (y = e, y.deps && p(y.deps, y.callback), !i) return;
                                    i.splice ? (e = i, i = n, n = null) : e = t
                                }
                                return i = i || function() {}, "function" == typeof n && (n = o, o = s), o ? h(t, e, i, n) : setTimeout(function() {
                                    h(t, e, i, n)
                                }, 4), p
                            }, p.config = function(e) {
                                return p(e)
                            }, e._defined = m, n = function(e, t, i) {
                                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (i = t, t = []), o(m, e) || o(v, e) || (v[e] = [e, t, i])
                            }, n.amd = {
                                jQuery: !0
                            }
                        }(), t.requirejs = e, t.require = i, t.define = n
                    }
                }(), t.define("almond", function() {}), t.define("jquery", [], function() {
                    var t = e || $;
                    return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                }), t.define("select2/utils", ["jquery"], function(e) {
                    function t(e) {
                        var t = e.prototype,
                            i = [];
                        for (var n in t) {
                            var o = t[n];
                            "function" == typeof o && "constructor" !== n && i.push(n)
                        }
                        return i
                    }
                    var i = {};
                    i.Extend = function(e, t) {
                        function i() {
                            this.constructor = e
                        }
                        var n = {}.hasOwnProperty;
                        for (var o in t) n.call(t, o) && (e[o] = t[o]);
                        return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                    }, i.Decorate = function(e, i) {
                        function n() {
                            var t = Array.prototype.unshift,
                                n = i.prototype.constructor.length,
                                o = e.prototype.constructor;
                            n > 0 && (t.call(arguments, e.prototype.constructor), o = i.prototype.constructor), o.apply(this, arguments)
                        }

                        function o() {
                            this.constructor = n
                        }
                        var s = t(i),
                            r = t(e);
                        i.displayName = e.displayName, n.prototype = new o;
                        for (var a = 0; a < r.length; a++) {
                            var l = r[a];
                            n.prototype[l] = e.prototype[l]
                        }
                        for (var c = (function(e) {
                                var t = function() {};
                                e in n.prototype && (t = n.prototype[e]);
                                var o = i.prototype[e];
                                return function() {
                                    var e = Array.prototype.unshift;
                                    return e.call(arguments, t), o.apply(this, arguments)
                                }
                            }), d = 0; d < s.length; d++) {
                            var u = s[d];
                            n.prototype[u] = c(u)
                        }
                        return n
                    };
                    var n = function() {
                        this.listeners = {}
                    };
                    return n.prototype.on = function(e, t) {
                        this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                    }, n.prototype.trigger = function(e) {
                        var t = Array.prototype.slice,
                            i = t.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), i[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, n.prototype.invoke = function(e, t) {
                        for (var i = 0, n = e.length; n > i; i++) e[i].apply(this, t)
                    }, i.Observable = n, i.generateChars = function(e) {
                        for (var t = "", i = 0; e > i; i++) {
                            var n = Math.floor(36 * Math.random());
                            t += n.toString(36)
                        }
                        return t
                    }, i.bind = function(e, t) {
                        return function() {
                            e.apply(t, arguments)
                        }
                    }, i._convertData = function(e) {
                        for (var t in e) {
                            var i = t.split("-"),
                                n = e;
                            if (1 !== i.length) {
                                for (var o = 0; o < i.length; o++) {
                                    var s = i[o];
                                    s = s.substring(0, 1).toLowerCase() + s.substring(1), s in n || (n[s] = {}), o == i.length - 1 && (n[s] = e[t]), n = n[s]
                                }
                                delete e[t]
                            }
                        }
                        return e
                    }, i.hasScroll = function(t, i) {
                        var n = e(i),
                            o = i.style.overflowX,
                            s = i.style.overflowY;
                        return o !== s || "hidden" !== s && "visible" !== s ? "scroll" === o || "scroll" === s ? !0 : n.innerHeight() < i.scrollHeight || n.innerWidth() < i.scrollWidth : !1
                    }, i.escapeMarkup = function(e) {
                        var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                            return t[e]
                        })
                    }, i.appendMany = function(t, i) {
                        if ("1.7" === e.fn.jquery.substr(0, 3)) {
                            var n = e();
                            e.map(i, function(e) {
                                n = n.add(e)
                            }), i = n
                        }
                        t.append(i)
                    }, i
                }), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                    function i(e, t, n) {
                        this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this)
                    }
                    return t.Extend(i, t.Observable), i.prototype.render = function() {
                        var t = e('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                    }, i.prototype.clear = function() {
                        this.$results.empty()
                    }, i.prototype.displayMessage = function(t) {
                        var i = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var n = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            o = this.options.get("translations").get(t.message);
                        n.append(i(o(t.args))), n[0].className += " select2-results__message", this.$results.append(n)
                    }, i.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, i.prototype.append = function(e) {
                        this.hideLoading();
                        var t = [];
                        if (null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        }));
                        e.results = this.sort(e.results);
                        for (var i = 0; i < e.results.length; i++) {
                            var n = e.results[i],
                                o = this.option(n);
                            t.push(o)
                        }
                        this.$results.append(t)
                    }, i.prototype.position = function(e, t) {
                        var i = t.find(".select2-results");
                        i.append(e)
                    }, i.prototype.sort = function(e) {
                        var t = this.options.get("sorter");
                        return t(e)
                    }, i.prototype.highlightFirstItem = function() {
                        var e = this.$results.find(".select2-results__option[aria-selected]"),
                            t = e.filter("[aria-selected=true]");
                        t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, i.prototype.setClasses = function() {
                        var t = this;
                        this.data.current(function(i) {
                            var n = e.map(i, function(e) {
                                    return e.id.toString()
                                }),
                                o = t.$results.find(".select2-results__option[aria-selected]");
                            o.each(function() {
                                var t = e(this),
                                    i = e.data(this, "data"),
                                    o = "" + i.id;
                                null != i.element && i.element.selected || null == i.element && e.inArray(o, n) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                            })
                        })
                    }, i.prototype.showLoading = function(e) {
                        this.hideLoading();
                        var t = this.options.get("translations").get("searching"),
                            i = {
                                disabled: !0,
                                loading: !0,
                                text: t(e)
                            },
                            n = this.option(i);
                        n.className += " loading-results", this.$results.prepend(n)
                    }, i.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, i.prototype.option = function(t) {
                        var i = document.createElement("li");
                        i.className = "select2-results__option";
                        var n = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        t.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == t.id && delete n["aria-selected"], null != t._resultId && (i.id = t._resultId), t.title && (i.title = t.title), t.children && (n.role = "group", n["aria-label"] = t.text, delete n["aria-selected"]);
                        for (var o in n) {
                            var s = n[o];
                            i.setAttribute(o, s)
                        }
                        if (t.children) {
                            var r = e(i),
                                a = document.createElement("strong");
                            a.className = "select2-results__group";
                            e(a);
                            this.template(t, a);
                            for (var l = [], c = 0; c < t.children.length; c++) {
                                var d = t.children[c],
                                    u = this.option(d);
                                l.push(u)
                            }
                            var h = e("<ul></ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            h.append(l), r.append(a), r.append(h)
                        } else this.template(t, i);
                        return e.data(i, "data", t), i
                    }, i.prototype.bind = function(t, i) {
                        var n = this,
                            o = t.id + "-results";
                        this.$results.attr("id", o), t.on("results:all", function(e) {
                            n.clear(), n.append(e.data), t.isOpen() && (n.setClasses(), n.highlightFirstItem())
                        }), t.on("results:append", function(e) {
                            n.append(e.data), t.isOpen() && n.setClasses()
                        }), t.on("query", function(e) {
                            n.hideMessages(), n.showLoading(e)
                        }), t.on("select", function() {
                            t.isOpen() && (n.setClasses(), n.highlightFirstItem())
                        }), t.on("unselect", function() {
                            t.isOpen() && (n.setClasses(), n.highlightFirstItem())
                        }), t.on("open", function() {
                            n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible()
                        }), t.on("close", function() {
                            n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant")
                        }), t.on("results:toggle", function() {
                            var e = n.getHighlightedResults();
                            0 !== e.length && e.trigger("mouseup")
                        }), t.on("results:select", function() {
                            var e = n.getHighlightedResults();
                            if (0 !== e.length) {
                                var t = e.data("data");
                                "true" == e.attr("aria-selected") ? n.trigger("close", {}) : n.trigger("select", {
                                    data: t
                                })
                            }
                        }), t.on("results:previous", function() {
                            var e = n.getHighlightedResults(),
                                t = n.$results.find("[aria-selected]"),
                                i = t.index(e);
                            if (0 !== i) {
                                var o = i - 1;
                                0 === e.length && (o = 0);
                                var s = t.eq(o);
                                s.trigger("mouseenter");
                                var r = n.$results.offset().top,
                                    a = s.offset().top,
                                    l = n.$results.scrollTop() + (a - r);
                                0 === o ? n.$results.scrollTop(0) : 0 > a - r && n.$results.scrollTop(l)
                            }
                        }), t.on("results:next", function() {
                            var e = n.getHighlightedResults(),
                                t = n.$results.find("[aria-selected]"),
                                i = t.index(e),
                                o = i + 1;
                            if (!(o >= t.length)) {
                                var s = t.eq(o);
                                s.trigger("mouseenter");
                                var r = n.$results.offset().top + n.$results.outerHeight(!1),
                                    a = s.offset().top + s.outerHeight(!1),
                                    l = n.$results.scrollTop() + a - r;
                                0 === o ? n.$results.scrollTop(0) : a > r && n.$results.scrollTop(l)
                            }
                        }), t.on("results:focus", function(e) {
                            e.element.addClass("select2-results__option--highlighted")
                        }), t.on("results:message", function(e) {
                            n.displayMessage(e)
                        }), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                            var t = n.$results.scrollTop(),
                                i = n.$results.get(0).scrollHeight - t + e.deltaY,
                                o = e.deltaY > 0 && t - e.deltaY <= 0,
                                s = e.deltaY < 0 && i <= n.$results.height();
                            o ? (n.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : s && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), e.preventDefault(), e.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                            var i = e(this),
                                o = i.data("data");
                            return "true" === i.attr("aria-selected") ? void(n.options.get("multiple") ? n.trigger("unselect", {
                                originalEvent: t,
                                data: o
                            }) : n.trigger("close", {})) : void n.trigger("select", {
                                originalEvent: t,
                                data: o
                            })
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(t) {
                            var i = e(this).data("data");
                            n.getHighlightedResults().removeClass("select2-results__option--highlighted"), n.trigger("results:focus", {
                                data: i,
                                element: e(this)
                            })
                        })
                    }, i.prototype.getHighlightedResults = function() {
                        var e = this.$results.find(".select2-results__option--highlighted");
                        return e
                    }, i.prototype.destroy = function() {
                        this.$results.remove()
                    }, i.prototype.ensureHighlightVisible = function() {
                        var e = this.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = this.$results.find("[aria-selected]"),
                                i = t.index(e),
                                n = this.$results.offset().top,
                                o = e.offset().top,
                                s = this.$results.scrollTop() + (o - n),
                                r = o - n;
                            s -= 2 * e.outerHeight(!1), 2 >= i ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || 0 > r) && this.$results.scrollTop(s)
                        }
                    }, i.prototype.template = function(t, i) {
                        var n = this.options.get("templateResult"),
                            o = this.options.get("escapeMarkup"),
                            s = n(t, i);
                        null == s ? i.style.display = "none" : "string" == typeof s ? i.innerHTML = o(s) : e(i).append(s)
                    }, i
                }), t.define("select2/keys", [], function() {
                    var e = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    };
                    return e
                }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, i) {
                    function n(e, t) {
                        this.$element = e, this.options = t, n.__super__.constructor.call(this)
                    }
                    return t.Extend(n, t.Observable), n.prototype.render = function() {
                        var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
                    }, n.prototype.bind = function(e, t) {
                        var n = this,
                            o = (e.id + "-container", e.id + "-results");
                        this.container = e, this.$selection.on("focus", function(e) {
                            n.trigger("focus", e)
                        }), this.$selection.on("blur", function(e) {
                            n._handleBlur(e)
                        }), this.$selection.on("keydown", function(e) {
                            n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault()
                        }), e.on("results:focus", function(e) {
                            n.$selection.attr("aria-activedescendant", e.data._resultId)
                        }), e.on("selection:update", function(e) {
                            n.update(e.data)
                        }), e.on("open", function() {
                            n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", o), n._attachCloseHandler(e)
                        }), e.on("close", function() {
                            n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.focus(), n._detachCloseHandler(e)
                        }), e.on("enable", function() {
                            n.$selection.attr("tabindex", n._tabindex)
                        }), e.on("disable", function() {
                            n.$selection.attr("tabindex", "-1")
                        })
                    }, n.prototype._handleBlur = function(t) {
                        var i = this;
                        window.setTimeout(function() {
                            document.activeElement == i.$selection[0] || e.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t)
                        }, 1)
                    }, n.prototype._attachCloseHandler = function(t) {
                        e(document.body).on("mousedown.select2." + t.id, function(t) {
                            var i = e(t.target),
                                n = i.closest(".select2"),
                                o = e(".select2.select2-container--open");
                            o.each(function() {
                                var t = e(this);
                                if (this != n[0]) {
                                    var i = t.data("element");
                                    i.select2("close")
                                }
                            })
                        })
                    }, n.prototype._detachCloseHandler = function(t) {
                        e(document.body).off("mousedown.select2." + t.id)
                    }, n.prototype.position = function(e, t) {
                        var i = t.find(".selection");
                        i.append(e)
                    }, n.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, n.prototype.update = function(e) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, n
                }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, i, n) {
                    function o() {
                        o.__super__.constructor.apply(this, arguments)
                    }
                    return i.Extend(o, t), o.prototype.render = function() {
                        var e = o.__super__.render.call(this);
                        return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                    }, o.prototype.bind = function(e, t) {
                        var i = this;
                        o.__super__.bind.apply(this, arguments);
                        var n = e.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function(e) {
                            1 === e.which && i.trigger("toggle", {
                                originalEvent: e
                            })
                        }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), e.on("focus", function(t) {
                            e.isOpen() || i.$selection.focus()
                        }), e.on("selection:update", function(e) {
                            i.update(e.data)
                        })
                    }, o.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, o.prototype.display = function(e, t) {
                        var i = this.options.get("templateSelection"),
                            n = this.options.get("escapeMarkup");
                        return n(i(e, t))
                    }, o.prototype.selectionContainer = function() {
                        return e("<span></span>")
                    }, o.prototype.update = function(e) {
                        if (0 === e.length) return void this.clear();
                        var t = e[0],
                            i = this.$selection.find(".select2-selection__rendered"),
                            n = this.display(t, i);
                        i.empty().append(n), i.prop("title", t.title || t.text)
                    }, o
                }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, i) {
                    function n(e, t) {
                        n.__super__.constructor.apply(this, arguments)
                    }
                    return i.Extend(n, t), n.prototype.render = function() {
                        var e = n.__super__.render.call(this);
                        return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                    }, n.prototype.bind = function(t, i) {
                        var o = this;
                        n.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                            o.trigger("toggle", {
                                originalEvent: e
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                            if (!o.options.get("disabled")) {
                                var i = e(this),
                                    n = i.parent(),
                                    s = n.data("data");
                                o.trigger("unselect", {
                                    originalEvent: t,
                                    data: s
                                })
                            }
                        })
                    }, n.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, n.prototype.display = function(e, t) {
                        var i = this.options.get("templateSelection"),
                            n = this.options.get("escapeMarkup");
                        return n(i(e, t))
                    }, n.prototype.selectionContainer = function() {
                        var t = e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                        return t
                    }, n.prototype.update = function(e) {
                        if (this.clear(), 0 !== e.length) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var o = e[n],
                                    s = this.selectionContainer(),
                                    r = this.display(o, s);
                                s.append(r), s.prop("title", o.title || o.text), s.data("data", o), t.push(s)
                            }
                            var a = this.$selection.find(".select2-selection__rendered");
                            i.appendMany(a, t)
                        }
                    }, n
                }), t.define("select2/selection/placeholder", ["../utils"], function(e) {
                    function t(e, t, i) {
                        this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i)
                    }
                    return t.prototype.normalizePlaceholder = function(e, t) {
                        return "string" == typeof t && (t = {
                            id: "",
                            text: t
                        }), t
                    }, t.prototype.createPlaceholder = function(e, t) {
                        var i = this.selectionContainer();
                        return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
                    }, t.prototype.update = function(e, t) {
                        var i = 1 == t.length && t[0].id != this.placeholder.id,
                            n = t.length > 1;
                        if (n || i) return e.call(this, t);
                        this.clear();
                        var o = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(o)
                    }, t
                }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
                    function i() {}
                    return i.prototype.bind = function(e, t, i) {
                        var n = this;
                        e.call(this, t, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                            n._handleClear(e)
                        }), t.on("keypress", function(e) {
                            n._handleKeyboardClear(e, t)
                        })
                    }, i.prototype._handleClear = function(e, t) {
                        if (!this.options.get("disabled")) {
                            var i = this.$selection.find(".select2-selection__clear");
                            if (0 !== i.length) {
                                t.stopPropagation();
                                for (var n = i.data("data"), o = 0; o < n.length; o++) {
                                    var s = {
                                        data: n[o]
                                    };
                                    if (this.trigger("unselect", s), s.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, i.prototype._handleKeyboardClear = function(e, i, n) {
                        n.isOpen() || i.which != t.DELETE && i.which != t.BACKSPACE || this._handleClear(i)
                    }, i.prototype.update = function(t, i) {
                        if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                            var n = e('<span class="select2-selection__clear">&times;</span>');
                            n.data("data", i), this.$selection.find(".select2-selection__rendered").prepend(n)
                        }
                    }, i
                }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, i) {
                    function n(e, t, i) {
                        e.call(this, t, i)
                    }
                    return n.prototype.render = function(t) {
                        var i = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = i, this.$search = i.find("input");
                        var n = t.call(this);
                        return this._transferTabIndex(), n
                    }, n.prototype.bind = function(e, t, n) {
                        var o = this;
                        e.call(this, t, n), t.on("open", function() {
                            o.$search.trigger("focus")
                        }), t.on("close", function() {
                            o.$search.val(""), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus")
                        }), t.on("enable", function() {
                            o.$search.prop("disabled", !1), o._transferTabIndex()
                        }), t.on("disable", function() {
                            o.$search.prop("disabled", !0)
                        }), t.on("focus", function(e) {
                            o.$search.trigger("focus")
                        }), t.on("results:focus", function(e) {
                            o.$search.attr("aria-activedescendant", e.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                            o.trigger("focus", e)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                            o._handleBlur(e)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                            e.stopPropagation(), o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented();
                            var t = e.which;
                            if (t === i.BACKSPACE && "" === o.$search.val()) {
                                var n = o.$searchContainer.prev(".select2-selection__choice");
                                if (n.length > 0) {
                                    var s = n.data("data");
                                    o.searchRemoveChoice(s), e.preventDefault()
                                }
                            }
                        });
                        var s = document.documentMode,
                            r = s && 11 >= s;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                            return r ? void o.$selection.off("input.search input.searchcheck") : void o.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                            if (r && "input" === e.type) return void o.$selection.off("input.search input.searchcheck");
                            var t = e.which;
                            t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && o.handleSearch(e)
                        })
                    }, n.prototype._transferTabIndex = function(e) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, n.prototype.createPlaceholder = function(e, t) {
                        this.$search.attr("placeholder", t.text)
                    }, n.prototype.update = function(e, t) {
                        var i = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.focus()
                    }, n.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", {
                                term: e
                            })
                        }
                        this._keyUpPrevented = !1
                    }, n.prototype.searchRemoveChoice = function(e, t) {
                        this.trigger("unselect", {
                            data: t
                        }), this.$search.val(t.text), this.handleSearch()
                    }, n.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var e = "";
                        if ("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth();
                        else {
                            var t = this.$search.val().length + 1;
                            e = .75 * t + "em"
                        }
                        this.$search.css("width", e)
                    }, n
                }), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                    function t() {}
                    return t.prototype.bind = function(t, i, n) {
                        var o = this,
                            s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            r = ["opening", "closing", "selecting", "unselecting"];
                        t.call(this, i, n), i.on("*", function(t, i) {
                            if (-1 !== e.inArray(t, s)) {
                                i = i || {};
                                var n = e.Event("select2:" + t, {
                                    params: i
                                });
                                o.$element.trigger(n), -1 !== e.inArray(t, r) && (i.prevented = n.isDefaultPrevented())
                            }
                        })
                    }, t
                }), t.define("select2/translation", ["jquery", "require"], function(e, t) {
                    function i(e) {
                        this.dict = e || {}
                    }
                    return i.prototype.all = function() {
                        return this.dict
                    }, i.prototype.get = function(e) {
                        return this.dict[e]
                    }, i.prototype.extend = function(t) {
                        this.dict = e.extend({}, t.all(), this.dict)
                    }, i._cache = {}, i.loadPath = function(e) {
                        if (!(e in i._cache)) {
                            var n = t(e);
                            i._cache[e] = n
                        }
                        return new i(i._cache[e])
                    }, i
                }), t.define("select2/diacritics", [], function() {
                    var e = {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    };
                    return e
                }), t.define("select2/data/base", ["../utils"], function(e) {
                    function t(e, i) {
                        t.__super__.constructor.call(this)
                    }
                    return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, t.prototype.query = function(e, t) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, i) {
                        var n = t.id + "-result-";
                        return n += e.generateChars(4), n += null != i.id ? "-" + i.id.toString() : "-" + e.generateChars(4)
                    }, t
                }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, i) {
                    function n(e, t) {
                        this.$element = e, this.options = t, n.__super__.constructor.call(this)
                    }
                    return t.Extend(n, e), n.prototype.current = function(e) {
                        var t = [],
                            n = this;
                        this.$element.find(":selected").each(function() {
                            var e = i(this),
                                o = n.item(e);
                            t.push(o)
                        }), e(t)
                    }, n.prototype.select = function(e) {
                        var t = this;
                        if (e.selected = !0, i(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(n) {
                            var o = [];
                            e = [e], e.push.apply(e, n);
                            for (var s = 0; s < e.length; s++) {
                                var r = e[s].id; - 1 === i.inArray(r, o) && o.push(r)
                            }
                            t.$element.val(o), t.$element.trigger("change")
                        });
                        else {
                            var n = e.id;
                            this.$element.val(n), this.$element.trigger("change")
                        }
                    }, n.prototype.unselect = function(e) {
                        var t = this;
                        if (this.$element.prop("multiple")) return e.selected = !1, i(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(n) {
                            for (var o = [], s = 0; s < n.length; s++) {
                                var r = n[s].id;
                                r !== e.id && -1 === i.inArray(r, o) && o.push(r)
                            }
                            t.$element.val(o), t.$element.trigger("change")
                        })
                    }, n.prototype.bind = function(e, t) {
                        var i = this;
                        this.container = e, e.on("select", function(e) {
                            i.select(e.data)
                        }), e.on("unselect", function(e) {
                            i.unselect(e.data)
                        })
                    }, n.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            i.removeData(this, "data")
                        })
                    }, n.prototype.query = function(e, t) {
                        var n = [],
                            o = this,
                            s = this.$element.children();
                        s.each(function() {
                            var t = i(this);
                            if (t.is("option") || t.is("optgroup")) {
                                var s = o.item(t),
                                    r = o.matches(e, s);
                                null !== r && n.push(r)
                            }
                        }), t({
                            results: n
                        })
                    }, n.prototype.addOptions = function(e) {
                        t.appendMany(this.$element, e)
                    }, n.prototype.option = function(e) {
                        var t;
                        e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                        var n = i(t),
                            o = this._normalizeItem(e);
                        return o.element = t, i.data(t, "data", o), n
                    }, n.prototype.item = function(e) {
                        var t = {};
                        if (t = i.data(e[0], "data"), null != t) return t;
                        if (e.is("option")) t = {
                            id: e.val(),
                            text: e.text(),
                            disabled: e.prop("disabled"),
                            selected: e.prop("selected"),
                            title: e.prop("title")
                        };
                        else if (e.is("optgroup")) {
                            t = {
                                text: e.prop("label"),
                                children: [],
                                title: e.prop("title")
                            };
                            for (var n = e.children("option"), o = [], s = 0; s < n.length; s++) {
                                var r = i(n[s]),
                                    a = this.item(r);
                                o.push(a)
                            }
                            t.children = o
                        }
                        return t = this._normalizeItem(t), t.element = e[0], i.data(e[0], "data", t), t
                    }, n.prototype._normalizeItem = function(e) {
                        i.isPlainObject(e) || (e = {
                            id: e,
                            text: e
                        }), e = i.extend({}, {
                            text: ""
                        }, e);
                        var t = {
                            selected: !1,
                            disabled: !1
                        };
                        return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), i.extend({}, t, e)
                    }, n.prototype.matches = function(e, t) {
                        var i = this.options.get("matcher");
                        return i(e, t)
                    }, n
                }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, i) {
                    function n(e, t) {
                        var i = t.get("data") || [];
                        n.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(i))
                    }
                    return t.Extend(n, e), n.prototype.select = function(e) {
                        var t = this.$element.find("option").filter(function(t, i) {
                            return i.value == e.id.toString()
                        });
                        0 === t.length && (t = this.option(e), this.addOptions(t)), n.__super__.select.call(this, e)
                    }, n.prototype.convertToOptions = function(e) {
                        function n(e) {
                            return function() {
                                return i(this).val() == e.id
                            }
                        }
                        for (var o = this, s = this.$element.find("option"), r = s.map(function() {
                                return o.item(i(this)).id
                            }).get(), a = [], l = 0; l < e.length; l++) {
                            var c = this._normalizeItem(e[l]);
                            if (i.inArray(c.id, r) >= 0) {
                                var d = s.filter(n(c)),
                                    u = this.item(d),
                                    h = i.extend(!0, {}, c, u),
                                    p = this.option(h);
                                d.replaceWith(p)
                            } else {
                                var f = this.option(c);
                                if (c.children) {
                                    var g = this.convertToOptions(c.children);
                                    t.appendMany(f, g)
                                }
                                a.push(f)
                            }
                        }
                        return a
                    }, n
                }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, i) {
                    function n(e, t) {
                        this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t)
                    }
                    return t.Extend(n, e), n.prototype._applyDefaults = function(e) {
                        var t = {
                            data: function(e) {
                                return i.extend({}, e, {
                                    q: e.term
                                })
                            },
                            transport: function(e, t, n) {
                                var o = i.ajax(e);
                                return o.then(t), o.fail(n), o
                            }
                        };
                        return i.extend({}, t, e, !0)
                    }, n.prototype.processResults = function(e) {
                        return e
                    }, n.prototype.query = function(e, t) {
                        function n() {
                            var n = s.transport(s, function(n) {
                                var s = o.processResults(n, e);
                                o.options.get("debug") && window.console && console.error && (s && s.results && i.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(s)
                            }, function() {
                                n.status && "0" === n.status || o.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            o._request = n
                        }
                        var o = this;
                        null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var s = i.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof s.url && (s.url = s.url.call(this.$element, e)), "function" == typeof s.data && (s.data = s.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(n, this.ajaxOptions.delay)) : n()
                    }, n
                }), t.define("select2/data/tags", ["jquery"], function(e) {
                    function t(t, i, n) {
                        var o = n.get("tags"),
                            s = n.get("createTag");
                        void 0 !== s && (this.createTag = s);
                        var r = n.get("insertTag");
                        if (void 0 !== r && (this.insertTag = r), t.call(this, i, n), e.isArray(o))
                            for (var a = 0; a < o.length; a++) {
                                var l = o[a],
                                    c = this._normalizeItem(l),
                                    d = this.option(c);
                                this.$element.append(d)
                            }
                    }
                    return t.prototype.query = function(e, t, i) {
                        function n(e, s) {
                            for (var r = e.results, a = 0; a < r.length; a++) {
                                var l = r[a],
                                    c = null != l.children && !n({
                                        results: l.children
                                    }, !0),
                                    d = l.text === t.term;
                                if (d || c) return s ? !1 : (e.data = r, void i(e))
                            }
                            if (s) return !0;
                            var u = o.createTag(t);
                            if (null != u) {
                                var h = o.option(u);
                                h.attr("data-select2-tag", !0), o.addOptions([h]), o.insertTag(r, u)
                            }
                            e.results = r, i(e)
                        }
                        var o = this;
                        return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, i) : void e.call(this, t, n)
                    }, t.prototype.createTag = function(t, i) {
                        var n = e.trim(i.term);
                        return "" === n ? null : {
                            id: n,
                            text: n
                        }
                    }, t.prototype.insertTag = function(e, t, i) {
                        t.unshift(i)
                    }, t.prototype._removeOldTags = function(t) {
                        var i = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                        i.each(function() {
                            this.selected || e(this).remove()
                        })
                    }, t
                }), t.define("select2/data/tokenizer", ["jquery"], function(e) {
                    function t(e, t, i) {
                        var n = i.get("tokenizer");
                        void 0 !== n && (this.tokenizer = n), e.call(this, t, i)
                    }
                    return t.prototype.bind = function(e, t, i) {
                        e.call(this, t, i), this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
                    }, t.prototype.query = function(t, i, n) {
                        function o(t) {
                            var i = r._normalizeItem(t),
                                n = r.$element.find("option").filter(function() {
                                    return e(this).val() === i.id
                                });
                            if (!n.length) {
                                var o = r.option(i);
                                o.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([o])
                            }
                            s(i)
                        }

                        function s(e) {
                            r.trigger("select", {
                                data: e
                            })
                        }
                        var r = this;
                        i.term = i.term || "";
                        var a = this.tokenizer(i, this.options, o);
                        a.term !== i.term && (this.$search.length && (this.$search.val(a.term), this.$search.focus()), i.term = a.term), t.call(this, i, n)
                    }, t.prototype.tokenizer = function(t, i, n, o) {
                        for (var s = n.get("tokenSeparators") || [], r = i.term, a = 0, l = this.createTag || function(e) {
                                return {
                                    id: e.term,
                                    text: e.term
                                }
                            }; a < r.length;) {
                            var c = r[a];
                            if (-1 !== e.inArray(c, s)) {
                                var d = r.substr(0, a),
                                    u = e.extend({}, i, {
                                        term: d
                                    }),
                                    h = l(u);
                                null != h ? (o(h), r = r.substr(a + 1) || "", a = 0) : a++
                            } else a++
                        }
                        return {
                            term: r
                        }
                    }, t
                }), t.define("select2/data/minimumInputLength", [], function() {
                    function e(e, t, i) {
                        this.minimumInputLength = i.get("minimumInputLength"), e.call(this, t, i)
                    }
                    return e.prototype.query = function(e, t, i) {
                        return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: t.term,
                                params: t
                            }
                        }) : void e.call(this, t, i)
                    }, e
                }), t.define("select2/data/maximumInputLength", [], function() {
                    function e(e, t, i) {
                        this.maximumInputLength = i.get("maximumInputLength"), e.call(this, t, i)
                    }
                    return e.prototype.query = function(e, t, i) {
                        return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: t.term,
                                params: t
                            }
                        }) : void e.call(this, t, i)
                    }, e
                }), t.define("select2/data/maximumSelectionLength", [], function() {
                    function e(e, t, i) {
                        this.maximumSelectionLength = i.get("maximumSelectionLength"), e.call(this, t, i)
                    }
                    return e.prototype.query = function(e, t, i) {
                        var n = this;
                        this.current(function(o) {
                            var s = null != o ? o.length : 0;
                            return n.maximumSelectionLength > 0 && s >= n.maximumSelectionLength ? void n.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: n.maximumSelectionLength
                                }
                            }) : void e.call(n, t, i)
                        })
                    }, e
                }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                    function i(e, t) {
                        this.$element = e, this.options = t, i.__super__.constructor.call(this)
                    }
                    return t.Extend(i, t.Observable), i.prototype.render = function() {
                        var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                    }, i.prototype.bind = function() {}, i.prototype.position = function(e, t) {}, i.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, i
                }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e, t) {
                    function i() {}
                    return i.prototype.render = function(t) {
                        var i = t.call(this),
                            n = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = n, this.$search = n.find("input"), i.prepend(n), i
                    }, i.prototype.bind = function(t, i, n) {
                        var o = this;
                        t.call(this, i, n), this.$search.on("keydown", function(e) {
                            o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented()
                        }), this.$search.on("input", function(t) {
                            e(this).off("keyup")
                        }), this.$search.on("keyup input", function(e) {
                            o.handleSearch(e)
                        }), i.on("open", function() {
                            o.$search.attr("tabindex", 0), o.$search.focus(), window.setTimeout(function() {
                                o.$search.focus()
                            }, 0)
                        }), i.on("close", function() {
                            o.$search.attr("tabindex", -1), o.$search.val("")
                        }), i.on("focus", function() {
                            i.isOpen() && o.$search.focus()
                        }), i.on("results:all", function(e) {
                            if (null == e.query.term || "" === e.query.term) {
                                var t = o.showSearch(e);
                                t ? o.$searchContainer.removeClass("select2-search--hide") : o.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, i.prototype.handleSearch = function(e) {
                        if (!this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {
                                term: t
                            })
                        }
                        this._keyUpPrevented = !1
                    }, i.prototype.showSearch = function(e, t) {
                        return !0
                    }, i
                }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                    function e(e, t, i, n) {
                        this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i, n)
                    }
                    return e.prototype.append = function(e, t) {
                        t.results = this.removePlaceholder(t.results), e.call(this, t)
                    }, e.prototype.normalizePlaceholder = function(e, t) {
                        return "string" == typeof t && (t = {
                            id: "",
                            text: t
                        }), t
                    }, e.prototype.removePlaceholder = function(e, t) {
                        for (var i = t.slice(0), n = t.length - 1; n >= 0; n--) {
                            var o = t[n];
                            this.placeholder.id === o.id && i.splice(n, 1)
                        }
                        return i
                    }, e
                }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                    function t(e, t, i, n) {
                        this.lastParams = {}, e.call(this, t, i, n), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return t.prototype.append = function(e, t) {
                        this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                    }, t.prototype.bind = function(t, i, n) {
                        var o = this;
                        t.call(this, i, n), i.on("query", function(e) {
                            o.lastParams = e, o.loading = !0
                        }), i.on("query:append", function(e) {
                            o.lastParams = e, o.loading = !0
                        }), this.$results.on("scroll", function() {
                            var t = e.contains(document.documentElement, o.$loadingMore[0]);
                            if (!o.loading && t) {
                                var i = o.$results.offset().top + o.$results.outerHeight(!1),
                                    n = o.$loadingMore.offset().top + o.$loadingMore.outerHeight(!1);
                                i + 50 >= n && o.loadMore()
                            }
                        })
                    }, t.prototype.loadMore = function() {
                        this.loading = !0;
                        var t = e.extend({}, {
                            page: 1
                        }, this.lastParams);
                        t.page++, this.trigger("query:append", t)
                    }, t.prototype.showLoadingMore = function(e, t) {
                        return t.pagination && t.pagination.more
                    }, t.prototype.createLoadingMore = function() {
                        var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            i = this.options.get("translations").get("loadingMore");
                        return t.html(i(this.lastParams)), t
                    }, t
                }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                    function i(t, i, n) {
                        this.$dropdownParent = n.get("dropdownParent") || e(document.body), t.call(this, i, n)
                    }
                    return i.prototype.bind = function(e, t, i) {
                        var n = this,
                            o = !1;
                        e.call(this, t, i), t.on("open", function() {
                            n._showDropdown(), n._attachPositioningHandler(t), o || (o = !0, t.on("results:all", function() {
                                n._positionDropdown(), n._resizeDropdown()
                            }), t.on("results:append", function() {
                                n._positionDropdown(), n._resizeDropdown()
                            }))
                        }), t.on("close", function() {
                            n._hideDropdown(), n._detachPositioningHandler(t)
                        }), this.$dropdownContainer.on("mousedown", function(e) {
                            e.stopPropagation()
                        })
                    }, i.prototype.destroy = function(e) {
                        e.call(this), this.$dropdownContainer.remove()
                    }, i.prototype.position = function(e, t, i) {
                        t.attr("class", i.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = i
                    }, i.prototype.render = function(t) {
                        var i = e("<span></span>"),
                            n = t.call(this);
                        return i.append(n), this.$dropdownContainer = i, i
                    }, i.prototype._hideDropdown = function(e) {
                        this.$dropdownContainer.detach()
                    }, i.prototype._attachPositioningHandler = function(i, n) {
                        var o = this,
                            s = "scroll.select2." + n.id,
                            r = "resize.select2." + n.id,
                            a = "orientationchange.select2." + n.id,
                            l = this.$container.parents().filter(t.hasScroll);
                        l.each(function() {
                            e(this).data("select2-scroll-position", {
                                x: e(this).scrollLeft(),
                                y: e(this).scrollTop()
                            })
                        }), l.on(s, function(t) {
                            var i = e(this).data("select2-scroll-position");
                            e(this).scrollTop(i.y)
                        }), e(window).on(s + " " + r + " " + a, function(e) {
                            o._positionDropdown(), o._resizeDropdown()
                        })
                    }, i.prototype._detachPositioningHandler = function(i, n) {
                        var o = "scroll.select2." + n.id,
                            s = "resize.select2." + n.id,
                            r = "orientationchange.select2." + n.id,
                            a = this.$container.parents().filter(t.hasScroll);
                        a.off(o), e(window).off(o + " " + s + " " + r)
                    }, i.prototype._positionDropdown = function() {
                        var t = e(window),
                            i = this.$dropdown.hasClass("select2-dropdown--above"),
                            n = this.$dropdown.hasClass("select2-dropdown--below"),
                            o = null,
                            s = this.$container.offset();
                        s.bottom = s.top + this.$container.outerHeight(!1);
                        var r = {
                            height: this.$container.outerHeight(!1)
                        };
                        r.top = s.top, r.bottom = s.top + r.height;
                        var a = {
                                height: this.$dropdown.outerHeight(!1)
                            },
                            l = {
                                top: t.scrollTop(),
                                bottom: t.scrollTop() + t.height()
                            },
                            c = l.top < s.top - a.height,
                            d = l.bottom > s.bottom + a.height,
                            u = {
                                left: s.left,
                                top: r.bottom
                            },
                            h = this.$dropdownParent;
                        "static" === h.css("position") && (h = h.offsetParent());
                        var p = h.offset();
                        u.top -= p.top, u.left -= p.left, i || n || (o = "below"), d || !c || i ? !c && d && i && (o = "below") : o = "above", ("above" == o || i && "below" !== o) && (u.top = r.top - p.top - a.height), null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)), this.$dropdownContainer.css(u)
                    }, i.prototype._resizeDropdown = function() {
                        var e = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                    }, i.prototype._showDropdown = function(e) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, i
                }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function e(t) {
                        for (var i = 0, n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.children ? i += e(o.children) : i++
                        }
                        return i
                    }

                    function t(e, t, i, n) {
                        this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, i, n)
                    }
                    return t.prototype.showSearch = function(t, i) {
                        return e(i.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, i)
                    }, t
                }), t.define("select2/dropdown/selectOnClose", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, i) {
                        var n = this;
                        e.call(this, t, i), t.on("close", function(e) {
                            n._handleSelectOnClose(e)
                        })
                    }, e.prototype._handleSelectOnClose = function(e, t) {
                        if (t && null != t.originalSelect2Event) {
                            var i = t.originalSelect2Event;
                            if ("select" === i._type || "unselect" === i._type) return
                        }
                        var n = this.getHighlightedResults();
                        if (!(n.length < 1)) {
                            var o = n.data("data");
                            null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                                data: o
                            })
                        }
                    }, e
                }), t.define("select2/dropdown/closeOnSelect", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, i) {
                        var n = this;
                        e.call(this, t, i), t.on("select", function(e) {
                            n._selectTriggered(e)
                        }), t.on("unselect", function(e) {
                            n._selectTriggered(e)
                        })
                    }, e.prototype._selectTriggered = function(e, t) {
                        var i = t.originalEvent;
                        i && i.ctrlKey || this.trigger("close", {
                            originalEvent: i,
                            originalSelect2Event: t
                        })
                    }, e
                }), t.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(e) {
                            var t = e.input.length - e.maximum,
                                i = "Please delete " + t + " character";
                            return 1 != t && (i += "s"), i
                        },
                        inputTooShort: function(e) {
                            var t = e.minimum - e.input.length,
                                i = "Please enter " + t + " or more characters";
                            return i
                        },
                        loadingMore: function() {
                            return "Loading more results…"
                        },
                        maximumSelected: function(e) {
                            var t = "You can only select " + e.maximum + " item";
                            return 1 != e.maximum && (t += "s"), t
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching…"
                        }
                    }
                }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, i, n, o, s, r, a, l, c, d, u, h, p, f, g, m, v, y, b, w, _, x, k, C, D, T, S, E) {
                    function $() {
                        this.reset()
                    }
                    $.prototype.apply = function(u) {
                        if (u = e.extend(!0, {}, this.defaults, u), null == u.dataAdapter) {
                            if (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = p : u.dataAdapter = h, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, m)), null != u.query) {
                                var E = t(u.amdBase + "compat/query");
                                u.dataAdapter = c.Decorate(u.dataAdapter, E)
                            }
                            if (null != u.initSelection) {
                                var $ = t(u.amdBase + "compat/initSelection");
                                u.dataAdapter = c.Decorate(u.dataAdapter, $)
                            }
                        }
                        if (null == u.resultsAdapter && (u.resultsAdapter = i, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, k)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, x)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, T))), null == u.dropdownAdapter) {
                            if (u.multiple) u.dropdownAdapter = w;
                            else {
                                var A = c.Decorate(w, _);
                                u.dropdownAdapter = A
                            }
                            if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, D)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
                                var N = t(u.amdBase + "compat/dropdownCss");
                                u.dropdownAdapter = c.Decorate(u.dropdownAdapter, N)
                            }
                            u.dropdownAdapter = c.Decorate(u.dropdownAdapter, C)
                        }
                        if (null == u.selectionAdapter) {
                            if (u.multiple ? u.selectionAdapter = o : u.selectionAdapter = n, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
                                var M = t(u.amdBase + "compat/containerCss");
                                u.selectionAdapter = c.Decorate(u.selectionAdapter, M)
                            }
                            u.selectionAdapter = c.Decorate(u.selectionAdapter, l)
                        }
                        if ("string" == typeof u.language)
                            if (u.language.indexOf("-") > 0) {
                                var P = u.language.split("-"),
                                    O = P[0];
                                u.language = [u.language, O]
                            } else u.language = [u.language];
                        if (e.isArray(u.language)) {
                            var j = new d;
                            u.language.push("en");
                            for (var z = u.language, L = 0; L < z.length; L++) {
                                var I = z[L],
                                    F = {};
                                try {
                                    F = d.loadPath(I)
                                } catch (H) {
                                    try {
                                        I = this.defaults.amdLanguageBase + I, F = d.loadPath(I)
                                    } catch (W) {
                                        u.debug && window.console && console.warn && console.warn('Select2: The language file for "' + I + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                j.extend(F)
                            }
                            u.translations = j
                        } else {
                            var R = d.loadPath(this.defaults.amdLanguageBase + "en"),
                                q = new d(u.language);
                            q.extend(R), u.translations = q
                        }
                        return u
                    }, $.prototype.reset = function() {
                        function t(e) {
                            function t(e) {
                                return u[e] || e
                            }
                            return e.replace(/[^\u0000-\u007E]/g, t)
                        }

                        function i(n, o) {
                            if ("" === e.trim(n.term)) return o;
                            if (o.children && o.children.length > 0) {
                                for (var s = e.extend(!0, {}, o), r = o.children.length - 1; r >= 0; r--) {
                                    var a = o.children[r],
                                        l = i(n, a);
                                    null == l && s.children.splice(r, 1)
                                }
                                return s.children.length > 0 ? s : i(n, s)
                            }
                            var c = t(o.text).toUpperCase(),
                                d = t(n.term).toUpperCase();
                            return c.indexOf(d) > -1 ? o : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: c.escapeMarkup,
                            language: E,
                            matcher: i,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(e) {
                                return e
                            },
                            templateResult: function(e) {
                                return e.text
                            },
                            templateSelection: function(e) {
                                return e.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, $.prototype.set = function(t, i) {
                        var n = e.camelCase(t),
                            o = {};
                        o[n] = i;
                        var s = c._convertData(o);
                        e.extend(this.defaults, s)
                    };
                    var A = new $;
                    return A
                }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, i, n) {
                    function o(t, o) {
                        if (this.options = t, null != o && this.fromElement(o), this.options = i.apply(this.options), o && o.is("input")) {
                            var s = e(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = n.Decorate(this.options.dataAdapter, s)
                        }
                    }
                    return o.prototype.fromElement = function(e) {
                        var i = ["select2"];
                        null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                        var o = {};
                        o = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                        var s = t.extend(!0, {}, o);
                        s = n._convertData(s);
                        for (var r in s) t.inArray(r, i) > -1 || (t.isPlainObject(this.options[r]) ? t.extend(this.options[r], s[r]) : this.options[r] = s[r]);
                        return this
                    }, o.prototype.get = function(e) {
                        return this.options[e]
                    }, o.prototype.set = function(e, t) {
                        this.options[e] = t
                    }, o
                }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, i, n) {
                    var o = function(e, i) {
                        null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), o.__super__.constructor.call(this);
                        var n = e.attr("tabindex") || 0;
                        e.data("old-tabindex", n), e.attr("tabindex", "-1");
                        var s = this.options.get("dataAdapter");
                        this.dataAdapter = new s(e, this.options);
                        var r = this.render();
                        this._placeContainer(r);
                        var a = this.options.get("selectionAdapter");
                        this.selection = new a(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                        var l = this.options.get("dropdownAdapter");
                        this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                        var c = this.options.get("resultsAdapter");
                        this.results = new c(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var d = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                            d.trigger("selection:update", {
                                data: e
                            })
                        }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                    };
                    return i.Extend(o, i.Observable), o.prototype._generateId = function(e) {
                        var t = "";
                        return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + i.generateChars(2) : i.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), t = "select2-" + t
                    }, o.prototype._placeContainer = function(e) {
                        e.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        null != t && e.css("width", t)
                    }, o.prototype._resolveWidth = function(e, t) {
                        var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == t) {
                            var n = this._resolveWidth(e, "style");
                            return null != n ? n : this._resolveWidth(e, "element")
                        }
                        if ("element" == t) {
                            var o = e.outerWidth(!1);
                            return 0 >= o ? "auto" : o + "px"
                        }
                        if ("style" == t) {
                            var s = e.attr("style");
                            if ("string" != typeof s) return null;
                            for (var r = s.split(";"), a = 0, l = r.length; l > a; a += 1) {
                                var c = r[a].replace(/\s/g, ""),
                                    d = c.match(i);
                                if (null !== d && d.length >= 1) return d[1]
                            }
                            return null
                        }
                        return t
                    }, o.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, o.prototype._registerDomEvents = function() {
                        var t = this;
                        this.$element.on("change.select2", function() {
                            t.dataAdapter.current(function(e) {
                                t.trigger("selection:update", {
                                    data: e
                                })
                            })
                        }), this.$element.on("focus.select2", function(e) {
                            t.trigger("focus", e)
                        }), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != n ? (this._observer = new n(function(i) {
                            e.each(i, t._syncA), e.each(i, t._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                    }, o.prototype._registerDataEvents = function() {
                        var e = this;
                        this.dataAdapter.on("*", function(t, i) {
                            e.trigger(t, i)
                        })
                    }, o.prototype._registerSelectionEvents = function() {
                        var t = this,
                            i = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            t.toggleDropdown()
                        }), this.selection.on("focus", function(e) {
                            t.focus(e)
                        }), this.selection.on("*", function(n, o) {
                            -1 === e.inArray(n, i) && t.trigger(n, o)
                        })
                    }, o.prototype._registerDropdownEvents = function() {
                        var e = this;
                        this.dropdown.on("*", function(t, i) {
                            e.trigger(t, i)
                        })
                    }, o.prototype._registerResultsEvents = function() {
                        var e = this;
                        this.results.on("*", function(t, i) {
                            e.trigger(t, i)
                        })
                    }, o.prototype._registerEvents = function() {
                        var e = this;
                        this.on("open", function() {
                            e.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            e.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            e.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            e.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            e.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(t) {
                            e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function(i) {
                                e.trigger("results:all", {
                                    data: i,
                                    query: t
                                })
                            })
                        }), this.on("query:append", function(t) {
                            this.dataAdapter.query(t, function(i) {
                                e.trigger("results:append", {
                                    data: i,
                                    query: t
                                })
                            })
                        }), this.on("keypress", function(t) {
                            var i = t.which;
                            e.isOpen() ? i === n.ESC || i === n.TAB || i === n.UP && t.altKey ? (e.close(), t.preventDefault()) : i === n.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : i === n.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : i === n.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : i === n.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (i === n.ENTER || i === n.SPACE || i === n.DOWN && t.altKey) && (e.open(), t.preventDefault())
                        })
                    }, o.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, o.prototype._syncSubtree = function(e, t) {
                        var i = !1,
                            n = this;
                        if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                            if (t)
                                if (t.addedNodes && t.addedNodes.length > 0)
                                    for (var o = 0; o < t.addedNodes.length; o++) {
                                        var s = t.addedNodes[o];
                                        s.selected && (i = !0)
                                    } else t.removedNodes && t.removedNodes.length > 0 && (i = !0);
                                else i = !0;
                            i && this.dataAdapter.current(function(e) {
                                n.trigger("selection:update", {
                                    data: e
                                })
                            })
                        }
                    }, o.prototype.trigger = function(e, t) {
                        var i = o.__super__.trigger,
                            n = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === t && (t = {}), e in n) {
                            var s = n[e],
                                r = {
                                    prevented: !1,
                                    name: e,
                                    args: t
                                };
                            if (i.call(this, s, r), r.prevented) return void(t.prevented = !0)
                        }
                        i.call(this, e, t)
                    }, o.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, o.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, o.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, o.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, o.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, o.prototype.focus = function(e) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, o.prototype.enable = function(e) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                        var t = !e[0];
                        this.$element.prop("disabled", t)
                    }, o.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var e = [];
                        return this.dataAdapter.current(function(t) {
                            e = t
                        }), e
                    }, o.prototype.val = function(t) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                        var i = t[0];
                        e.isArray(i) && (i = e.map(i, function(e) {
                            return e.toString()
                        })), this.$element.val(i).trigger("change")
                    }, o.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, o.prototype.render = function() {
                        var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                    }, o
                }), t.define("select2/compat/utils", ["jquery"], function(e) {
                    function t(t, i, n) {
                        var o, s, r = [];
                        o = e.trim(t.attr("class")), o && (o = "" + o, e(o.split(/\s+/)).each(function() {
                            0 === this.indexOf("select2-") && r.push(this)
                        })), o = e.trim(i.attr("class")), o && (o = "" + o, e(o.split(/\s+/)).each(function() {
                            0 !== this.indexOf("select2-") && (s = n(this), null != s && r.push(s))
                        })), t.attr("class", r.join(" "))
                    }
                    return {
                        syncCssClasses: t
                    }
                }), t.define("select2/compat/containerCss", ["jquery", "./utils"], function(e, t) {
                    function i(e) {
                        return null
                    }

                    function n() {}
                    return n.prototype.render = function(n) {
                        var o = n.call(this),
                            s = this.options.get("containerCssClass") || "";
                        e.isFunction(s) && (s = s(this.$element));
                        var r = this.options.get("adaptContainerCssClass");
                        if (r = r || i, -1 !== s.indexOf(":all:")) {
                            s = s.replace(":all:", "");
                            var a = r;
                            r = function(e) {
                                var t = a(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var l = this.options.get("containerCss") || {};
                        return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(o, this.$element, r), o.css(l), o.addClass(s), o
                    }, n
                }), t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(e, t) {
                    function i(e) {
                        return null
                    }

                    function n() {}
                    return n.prototype.render = function(n) {
                        var o = n.call(this),
                            s = this.options.get("dropdownCssClass") || "";
                        e.isFunction(s) && (s = s(this.$element));
                        var r = this.options.get("adaptDropdownCssClass");
                        if (r = r || i, -1 !== s.indexOf(":all:")) {
                            s = s.replace(":all:", "");
                            var a = r;
                            r = function(e) {
                                var t = a(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var l = this.options.get("dropdownCss") || {};
                        return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(o, this.$element, r), o.css(l), o.addClass(s), o
                    }, n
                }), t.define("select2/compat/initSelection", ["jquery"], function(e) {
                    function t(e, t, i) {
                        i.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = i.get("initSelection"), this._isInitialized = !1, e.call(this, t, i)
                    }
                    return t.prototype.current = function(t, i) {
                        var n = this;
                        return this._isInitialized ? void t.call(this, i) : void this.initSelection.call(null, this.$element, function(t) {
                            n._isInitialized = !0, e.isArray(t) || (t = [t]), i(t)
                        })
                    }, t
                }), t.define("select2/compat/inputData", ["jquery"], function(e) {
                    function t(e, t, i) {
                        this._currentData = [], this._valueSeparator = i.get("valueSeparator") || ",", "hidden" === t.prop("type") && i.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, i)
                    }
                    return t.prototype.current = function(t, i) {
                        function n(t, i) {
                            var o = [];
                            return t.selected || -1 !== e.inArray(t.id, i) ? (t.selected = !0, o.push(t)) : t.selected = !1, t.children && o.push.apply(o, n(t.children, i)), o
                        }
                        for (var o = [], s = 0; s < this._currentData.length; s++) {
                            var r = this._currentData[s];
                            o.push.apply(o, n(r, this.$element.val().split(this._valueSeparator)))
                        }
                        i(o)
                    }, t.prototype.select = function(t, i) {
                        if (this.options.get("multiple")) {
                            var n = this.$element.val();
                            n += this._valueSeparator + i.id, this.$element.val(n), this.$element.trigger("change")
                        } else this.current(function(t) {
                            e.map(t, function(e) {
                                e.selected = !1
                            })
                        }), this.$element.val(i.id), this.$element.trigger("change")
                    }, t.prototype.unselect = function(e, t) {
                        var i = this;
                        t.selected = !1, this.current(function(e) {
                            for (var n = [], o = 0; o < e.length; o++) {
                                var s = e[o];
                                t.id != s.id && n.push(s.id)
                            }
                            i.$element.val(n.join(i._valueSeparator)), i.$element.trigger("change")
                        })
                    }, t.prototype.query = function(e, t, i) {
                        for (var n = [], o = 0; o < this._currentData.length; o++) {
                            var s = this._currentData[o],
                                r = this.matches(t, s);
                            null !== r && n.push(r)
                        }
                        i({
                            results: n
                        })
                    }, t.prototype.addOptions = function(t, i) {
                        var n = e.map(i, function(t) {
                            return e.data(t[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, n)
                    }, t
                }), t.define("select2/compat/matcher", ["jquery"], function(e) {
                    function t(t) {
                        function i(i, n) {
                            var o = e.extend(!0, {}, n);
                            if (null == i.term || "" === e.trim(i.term)) return o;
                            if (n.children) {
                                for (var s = n.children.length - 1; s >= 0; s--) {
                                    var r = n.children[s],
                                        a = t(i.term, r.text, r);
                                    a || o.children.splice(s, 1)
                                }
                                if (o.children.length > 0) return o
                            }
                            return t(i.term, n.text, n) ? o : null
                        }
                        return i
                    }
                    return t
                }), t.define("select2/compat/query", [], function() {
                    function e(e, t, i) {
                        i.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, i)
                    }
                    return e.prototype.query = function(e, t, i) {
                        t.callback = i;
                        var n = this.options.get("query");
                        n.call(null, t)
                    }, e
                }), t.define("select2/dropdown/attachContainer", [], function() {
                    function e(e, t, i) {
                        e.call(this, t, i)
                    }
                    return e.prototype.position = function(e, t, i) {
                        var n = i.find(".dropdown-wrapper");
                        n.append(t), t.addClass("select2-dropdown--below"), i.addClass("select2-container--below")
                    }, e
                }), t.define("select2/dropdown/stopPropagation", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, i) {
                        e.call(this, t, i);
                        var n = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$dropdown.on(n.join(" "), function(e) {
                            e.stopPropagation()
                        })
                    }, e
                }), t.define("select2/selection/stopPropagation", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, i) {
                        e.call(this, t, i);
                        var n = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$selection.on(n.join(" "), function(e) {
                            e.stopPropagation()
                        })
                    }, e
                }),
                function(i) {
                    "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], i) : "object" == typeof exports ? module.exports = i : i(e)
                }(function(e) {
                    function t(t) {
                        var r = t || window.event,
                            a = l.call(arguments, 1),
                            c = 0,
                            u = 0,
                            h = 0,
                            p = 0,
                            f = 0,
                            g = 0;
                        if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), c = 0 === h ? u : h, "deltaY" in r && (h = -1 * r.deltaY, c = h), "deltaX" in r && (u = r.deltaX, 0 === h && (c = -1 * u)), 0 !== h || 0 !== u) {
                            if (1 === r.deltaMode) {
                                var m = e.data(this, "mousewheel-line-height");
                                c *= m, h *= m, u *= m
                            } else if (2 === r.deltaMode) {
                                var v = e.data(this, "mousewheel-page-height");
                                c *= v, h *= v, u *= v
                            }
                            if (p = Math.max(Math.abs(h), Math.abs(u)), (!s || s > p) && (s = p, n(r, p) && (s /= 40)), n(r, p) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), d.settings.normalizeOffset && this.getBoundingClientRect) {
                                var y = this.getBoundingClientRect();
                                f = t.clientX - y.left, g = t.clientY - y.top
                            }
                            return t.deltaX = u, t.deltaY = h, t.deltaFactor = s, t.offsetX = f, t.offsetY = g, t.deltaMode = 0, a.unshift(t, c, u, h), o && clearTimeout(o), o = setTimeout(i, 200), (e.event.dispatch || e.event.handle).apply(this, a)
                        }
                    }

                    function i() {
                        s = null
                    }

                    function n(e, t) {
                        return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
                    }
                    var o, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        l = Array.prototype.slice;
                    if (e.event.fixHooks)
                        for (var c = r.length; c;) e.event.fixHooks[r[--c]] = e.event.mouseHooks;
                    var d = e.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                            if (this.addEventListener)
                                for (var i = a.length; i;) this.addEventListener(a[--i], t, !1);
                            else this.onmousewheel = t;
                            e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var i = a.length; i;) this.removeEventListener(a[--i], t, !1);
                            else this.onmousewheel = null;
                            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function(t) {
                            var i = e(t),
                                n = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                            return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function(t) {
                            return e(t).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };
                    e.fn.extend({
                        mousewheel: function(e) {
                            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(e) {
                            return this.unbind("mousewheel", e)
                        }
                    })
                }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, i, n) {
                    if (null == e.fn.select2) {
                        var o = ["open", "close", "destroy"];
                        e.fn.select2 = function(t) {
                            if (t = t || {}, "object" == typeof t) return this.each(function() {
                                var n = e.extend(!0, {}, t);
                                new i(e(this), n)
                            }), this;
                            if ("string" == typeof t) {
                                var n, s = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var i = e(this).data("select2");
                                    null == i && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = i[t].apply(i, s)
                                }), e.inArray(t, o) > -1 ? this : n
                            }
                            throw new Error("Invalid arguments for Select2: " + t)
                        }
                    }
                    return null == e.fn.select2.defaults && (e.fn.select2.defaults = n), i
                }), {
                    define: t.define,
                    require: t.require
                }
        }(),
        i = t.require("jquery.select2");
    return e.fn.select2.amd = t, i
}),
function(e) {
    var t = !0;
    e.flexslider = function(i, n) {
        var o = e(i);
        o.vars = e.extend({}, e.flexslider.defaults, n);
        var s, r = o.vars.namespace,
            a = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            l = ("ontouchstart" in window || a || window.DocumentTouch && document instanceof DocumentTouch) && o.vars.touch,
            c = "click touchend MSPointerUp keyup",
            d = "",
            u = "vertical" === o.vars.direction,
            h = o.vars.reverse,
            p = o.vars.itemWidth > 0,
            f = "fade" === o.vars.animation,
            g = "" !== o.vars.asNavFor,
            m = {};
        e.data(i, "flexslider", o), m = {
            init: function() {
                o.animating = !1, o.currentSlide = parseInt(o.vars.startAt ? o.vars.startAt : 0, 10), isNaN(o.currentSlide) && (o.currentSlide = 0), o.animatingTo = o.currentSlide, o.atEnd = 0 === o.currentSlide || o.currentSlide === o.last, o.containerSelector = o.vars.selector.substr(0, o.vars.selector.search(" ")), o.slides = e(o.vars.selector, o), o.container = e(o.containerSelector, o), o.count = o.slides.length, o.syncExists = e(o.vars.sync).length > 0, "slide" === o.vars.animation && (o.vars.animation = "swing"), o.prop = u ? "top" : "marginLeft", o.args = {}, o.manualPause = !1, o.stopped = !1, o.started = !1, o.startTimeout = null, o.transitions = !o.vars.video && !f && o.vars.useCSS && function() {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in t)
                        if (void 0 !== e.style[t[i]]) return o.pfx = t[i].replace("Perspective", "").toLowerCase(), o.prop = "-" + o.pfx + "-transform", !0;
                    return !1
                }(), o.ensureAnimationEnd = "", "" !== o.vars.controlsContainer && (o.controlsContainer = e(o.vars.controlsContainer).length > 0 && e(o.vars.controlsContainer)), "" !== o.vars.manualControls && (o.manualControls = e(o.vars.manualControls).length > 0 && e(o.vars.manualControls)), "" !== o.vars.customDirectionNav && (o.customDirectionNav = 2 === e(o.vars.customDirectionNav).length && e(o.vars.customDirectionNav)), o.vars.randomize && (o.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), o.container.empty().append(o.slides)), o.doMath(), o.setup("init"), o.vars.controlNav && m.controlNav.setup(), o.vars.directionNav && m.directionNav.setup(), o.vars.keyboard && (1 === e(o.containerSelector).length || o.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
                    var t = e.keyCode;
                    if (!o.animating && (39 === t || 37 === t)) {
                        var i = 39 === t ? o.getTarget("next") : 37 === t ? o.getTarget("prev") : !1;
                        o.flexAnimate(i, o.vars.pauseOnAction)
                    }
                }), o.vars.mousewheel && o.bind("mousewheel", function(e, t, i, n) {
                    e.preventDefault();
                    var s = 0 > t ? o.getTarget("next") : o.getTarget("prev");
                    o.flexAnimate(s, o.vars.pauseOnAction)
                }), o.vars.pausePlay && m.pausePlay.setup(), o.vars.slideshow && o.vars.pauseInvisible && m.pauseInvisible.init(), o.vars.slideshow && (o.vars.pauseOnHover && o.hover(function() {
                    o.manualPlay || o.manualPause || o.pause()
                }, function() {
                    o.manualPause || o.manualPlay || o.stopped || o.play()
                }), o.vars.pauseInvisible && m.pauseInvisible.isHidden() || (o.vars.initDelay > 0 ? o.startTimeout = setTimeout(o.play, o.vars.initDelay) : o.play())), g && m.asNav.setup(), l && o.vars.touch && m.touch(), (!f || f && o.vars.smoothHeight) && e(window).bind("resize orientationchange focus", m.resize), o.find("img").attr("draggable", "false"), setTimeout(function() {
                    o.vars.start(o)
                }, 200)
            },
            asNav: {
                setup: function() {
                    o.asNav = !0, o.animatingTo = Math.floor(o.currentSlide / o.move), o.currentItem = o.currentSlide, o.slides.removeClass(r + "active-slide").eq(o.currentItem).addClass(r + "active-slide"), a ? (i._slider = o, o.slides.each(function() {
                        var t = this;
                        t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), t.addEventListener("MSGestureTap", function(t) {
                            t.preventDefault();
                            var i = e(this),
                                n = i.index();
                            e(o.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (o.direction = o.currentItem < n ? "next" : "prev", o.flexAnimate(n, o.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : o.slides.on(c, function(t) {
                        t.preventDefault();
                        var i = e(this),
                            n = i.index(),
                            s = i.offset().left - e(o).scrollLeft();
                        0 >= s && i.hasClass(r + "active-slide") ? o.flexAnimate(o.getTarget("prev"), !0) : e(o.vars.asNavFor).data("flexslider").animating || i.hasClass(r + "active-slide") || (o.direction = o.currentItem < n ? "next" : "prev", o.flexAnimate(n, o.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    o.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var t, i, n = "thumbnails" === o.vars.controlNav ? "control-thumbs" : "control-paging",
                        s = 1;
                    if (o.controlNavScaffold = e('<ol class="' + r + "control-nav " + r + n + '"></ol>'), o.pagingCount > 1)
                        for (var a = 0; a < o.pagingCount; a++) {
                            if (i = o.slides.eq(a), void 0 === i.attr("data-thumb-alt") && i.attr("data-thumb-alt", ""), altText = "" !== i.attr("data-thumb-alt") ? altText = ' alt="' + i.attr("data-thumb-alt") + '"' : "", t = "thumbnails" === o.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + s + "</a>", "thumbnails" === o.vars.controlNav && !0 === o.vars.thumbCaptions) {
                                var l = i.attr("data-thumbcaption");
                                "" !== l && void 0 !== l && (t += '<span class="' + r + 'caption">' + l + "</span>")
                            }
                            o.controlNavScaffold.append("<li>" + t + "</li>"), s++
                        }
                    o.controlsContainer ? e(o.controlsContainer).append(o.controlNavScaffold) : o.append(o.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), o.controlNavScaffold.delegate("a, img", c, function(t) {
                        if (t.preventDefault(), "" === d || d === t.type) {
                            var i = e(this),
                                n = o.controlNav.index(i);
                            i.hasClass(r + "active") || (o.direction = n > o.currentSlide ? "next" : "prev", o.flexAnimate(n, o.vars.pauseOnAction))
                        }
                        "" === d && (d = t.type), m.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    o.controlNav = o.manualControls, m.controlNav.active(), o.controlNav.bind(c, function(t) {
                        if (t.preventDefault(), "" === d || d === t.type) {
                            var i = e(this),
                                n = o.controlNav.index(i);
                            i.hasClass(r + "active") || (n > o.currentSlide ? o.direction = "next" : o.direction = "prev", o.flexAnimate(n, o.vars.pauseOnAction))
                        }
                        "" === d && (d = t.type), m.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var t = "thumbnails" === o.vars.controlNav ? "img" : "a";
                    o.controlNav = e("." + r + "control-nav li " + t, o.controlsContainer ? o.controlsContainer : o)
                },
                active: function() {
                    o.controlNav.removeClass(r + "active").eq(o.animatingTo).addClass(r + "active")
                },
                update: function(t, i) {
                    o.pagingCount > 1 && "add" === t ? o.controlNavScaffold.append(e('<li><a href="#">' + o.count + "</a></li>")) : 1 === o.pagingCount ? o.controlNavScaffold.find("li").remove() : o.controlNav.eq(i).closest("li").remove(), m.controlNav.set(), o.pagingCount > 1 && o.pagingCount !== o.controlNav.length ? o.update(i, t) : m.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = e('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + o.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + o.vars.nextText + "</a></li></ul>");
                    o.customDirectionNav ? o.directionNav = o.customDirectionNav : o.controlsContainer ? (e(o.controlsContainer).append(t), o.directionNav = e("." + r + "direction-nav li a", o.controlsContainer)) : (o.append(t), o.directionNav = e("." + r + "direction-nav li a", o)), m.directionNav.update(), o.directionNav.bind(c, function(t) {
                        t.preventDefault();
                        var i;
                        "" !== d && d !== t.type || (i = e(this).hasClass(r + "next") ? o.getTarget("next") : o.getTarget("prev"), o.flexAnimate(i, o.vars.pauseOnAction)), "" === d && (d = t.type), m.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = r + "disabled";
                    1 === o.pagingCount ? o.directionNav.addClass(e).attr("tabindex", "-1") : o.vars.animationLoop ? o.directionNav.removeClass(e).removeAttr("tabindex") : 0 === o.animatingTo ? o.directionNav.removeClass(e).filter("." + r + "prev").addClass(e).attr("tabindex", "-1") : o.animatingTo === o.last ? o.directionNav.removeClass(e).filter("." + r + "next").addClass(e).attr("tabindex", "-1") : o.directionNav.removeClass(e).removeAttr("tabindex");
                }
            },
            pausePlay: {
                setup: function() {
                    var t = e('<div class="' + r + 'pauseplay"><a href="#"></a></div>');
                    o.controlsContainer ? (o.controlsContainer.append(t), o.pausePlay = e("." + r + "pauseplay a", o.controlsContainer)) : (o.append(t), o.pausePlay = e("." + r + "pauseplay a", o)), m.pausePlay.update(o.vars.slideshow ? r + "pause" : r + "play"), o.pausePlay.bind(c, function(t) {
                        t.preventDefault(), "" !== d && d !== t.type || (e(this).hasClass(r + "pause") ? (o.manualPause = !0, o.manualPlay = !1, o.pause()) : (o.manualPause = !1, o.manualPlay = !0, o.play())), "" === d && (d = t.type), m.setToClearWatchedEvent()
                    })
                },
                update: function(e) {
                    "play" === e ? o.pausePlay.removeClass(r + "pause").addClass(r + "play").html(o.vars.playText) : o.pausePlay.removeClass(r + "play").addClass(r + "pause").html(o.vars.pauseText)
                }
            },
            touch: function() {
                function e(e) {
                    e.stopPropagation(), o.animating ? e.preventDefault() : (o.pause(), i._gesture.addPointer(e.pointerId), x = 0, c = u ? o.h : o.w, g = Number(new Date), l = p && h && o.animatingTo === o.last ? 0 : p && h ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : p && o.currentSlide === o.last ? o.limit : p ? (o.itemW + o.vars.itemMargin) * o.move * o.currentSlide : h ? (o.last - o.currentSlide + o.cloneOffset) * c : (o.currentSlide + o.cloneOffset) * c)
                }

                function t(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        var n = -e.translationX,
                            o = -e.translationY;
                        return x += u ? o : n, d = x, b = u ? Math.abs(x) < Math.abs(-n) : Math.abs(x) < Math.abs(-o), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            i._gesture.stop()
                        }) : void((!b || Number(new Date) - g > 500) && (e.preventDefault(), !f && t.transitions && (t.vars.animationLoop || (d = x / (0 === t.currentSlide && 0 > x || t.currentSlide === t.last && x > 0 ? Math.abs(x) / c + 2 : 1)), t.setProps(l + d, "setTouch"))))
                    }
                }

                function n(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !b && null !== d) {
                            var i = h ? -d : d,
                                n = i > 0 ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(n) && (Number(new Date) - g < 550 && Math.abs(i) > 50 || Math.abs(i) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : f || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        s = null, r = null, d = null, l = null, x = 0
                    }
                }
                var s, r, l, c, d, g, m, v, y, b = !1,
                    w = 0,
                    _ = 0,
                    x = 0;
                a ? (i.style.msTouchAction = "none", i._gesture = new MSGesture, i._gesture.target = i, i.addEventListener("MSPointerDown", e, !1), i._slider = o, i.addEventListener("MSGestureChange", t, !1), i.addEventListener("MSGestureEnd", n, !1)) : (m = function(e) {
                    o.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (o.pause(), c = u ? o.h : o.w, g = Number(new Date), w = e.touches[0].pageX, _ = e.touches[0].pageY, l = p && h && o.animatingTo === o.last ? 0 : p && h ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : p && o.currentSlide === o.last ? o.limit : p ? (o.itemW + o.vars.itemMargin) * o.move * o.currentSlide : h ? (o.last - o.currentSlide + o.cloneOffset) * c : (o.currentSlide + o.cloneOffset) * c, s = u ? _ : w, r = u ? w : _, i.addEventListener("touchmove", v, !1), i.addEventListener("touchend", y, !1))
                }, v = function(e) {
                    w = e.touches[0].pageX, _ = e.touches[0].pageY, d = u ? s - _ : s - w, b = u ? Math.abs(d) < Math.abs(w - r) : Math.abs(d) < Math.abs(_ - r);
                    var t = 500;
                    (!b || Number(new Date) - g > t) && (e.preventDefault(), !f && o.transitions && (o.vars.animationLoop || (d /= 0 === o.currentSlide && 0 > d || o.currentSlide === o.last && d > 0 ? Math.abs(d) / c + 2 : 1), o.setProps(l + d, "setTouch")))
                }, y = function(e) {
                    if (i.removeEventListener("touchmove", v, !1), o.animatingTo === o.currentSlide && !b && null !== d) {
                        var t = h ? -d : d,
                            n = t > 0 ? o.getTarget("next") : o.getTarget("prev");
                        o.canAdvance(n) && (Number(new Date) - g < 550 && Math.abs(t) > 50 || Math.abs(t) > c / 2) ? o.flexAnimate(n, o.vars.pauseOnAction) : f || o.flexAnimate(o.currentSlide, o.vars.pauseOnAction, !0)
                    }
                    i.removeEventListener("touchend", y, !1), s = null, r = null, d = null, l = null
                }, i.addEventListener("touchstart", m, !1))
            },
            resize: function() {
                !o.animating && o.is(":visible") && (p || o.doMath(), f ? m.smoothHeight() : p ? (o.slides.width(o.computedW), o.update(o.pagingCount), o.setProps()) : u ? (o.viewport.height(o.h), o.setProps(o.h, "setTotal")) : (o.vars.smoothHeight && m.smoothHeight(), o.newSlides.width(o.computedW), o.setProps(o.computedW, "setTotal")))
            },
            smoothHeight: function(e) {
                if (!u || f) {
                    var t = f ? o : o.viewport;
                    e ? t.animate({
                        height: o.slides.eq(o.animatingTo).height()
                    }, e) : t.height(o.slides.eq(o.animatingTo).height())
                }
            },
            sync: function(t) {
                var i = e(o.vars.sync).data("flexslider"),
                    n = o.animatingTo;
                switch (t) {
                    case "animate":
                        i.flexAnimate(n, o.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        i.playing || i.asNav || i.play();
                        break;
                    case "pause":
                        i.pause()
                }
            },
            uniqueID: function(t) {
                return t.filter("[id]").add(t.find("[id]")).each(function() {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone")
                }), t
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = m.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function() {
                            m.pauseInvisible.isHidden() ? o.startTimeout ? clearTimeout(o.startTimeout) : o.pause() : o.started ? o.play() : o.vars.initDelay > 0 ? setTimeout(o.play, o.vars.initDelay) : o.play()
                        })
                    }
                },
                isHidden: function() {
                    var e = m.pauseInvisible.getHiddenProp();
                    return e ? document[e] : !1
                },
                getHiddenProp: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(s), s = setTimeout(function() {
                    d = ""
                }, 3e3)
            }
        }, o.flexAnimate = function(t, i, n, s, a) {
            if (o.vars.animationLoop || t === o.currentSlide || (o.direction = t > o.currentSlide ? "next" : "prev"), g && 1 === o.pagingCount && (o.direction = o.currentItem < t ? "next" : "prev"), !o.animating && (o.canAdvance(t, a) || n) && o.is(":visible")) {
                if (g && s) {
                    var c = e(o.vars.asNavFor).data("flexslider");
                    if (o.atEnd = 0 === t || t === o.count - 1, c.flexAnimate(t, !0, !1, !0, a), o.direction = o.currentItem < t ? "next" : "prev", c.direction = o.direction, Math.ceil((t + 1) / o.visible) - 1 === o.currentSlide || 0 === t) return o.currentItem = t, o.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), !1;
                    o.currentItem = t, o.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), t = Math.floor(t / o.visible)
                }
                if (o.animating = !0, o.animatingTo = t, i && o.pause(), o.vars.before(o), o.syncExists && !a && m.sync("animate"), o.vars.controlNav && m.controlNav.active(), p || o.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), o.atEnd = 0 === t || t === o.last, o.vars.directionNav && m.directionNav.update(), t === o.last && (o.vars.end(o), o.vars.animationLoop || o.pause()), f) l ? (o.slides.eq(o.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), o.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), o.wrapup(b)) : (o.slides.eq(o.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, o.vars.animationSpeed, o.vars.easing), o.slides.eq(t).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, o.vars.animationSpeed, o.vars.easing, o.wrapup));
                else {
                    var d, v, y, b = u ? o.slides.filter(":first").height() : o.computedW;
                    p ? (d = o.vars.itemMargin, y = (o.itemW + d) * o.move * o.animatingTo, v = y > o.limit && 1 !== o.visible ? o.limit : y) : v = 0 === o.currentSlide && t === o.count - 1 && o.vars.animationLoop && "next" !== o.direction ? h ? (o.count + o.cloneOffset) * b : 0 : o.currentSlide === o.last && 0 === t && o.vars.animationLoop && "prev" !== o.direction ? h ? 0 : (o.count + 1) * b : h ? (o.count - 1 - t + o.cloneOffset) * b : (t + o.cloneOffset) * b, o.setProps(v, "", o.vars.animationSpeed), o.transitions ? (o.vars.animationLoop && o.atEnd || (o.animating = !1, o.currentSlide = o.animatingTo), o.container.unbind("webkitTransitionEnd transitionend"), o.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(o.ensureAnimationEnd), o.wrapup(b)
                    }), clearTimeout(o.ensureAnimationEnd), o.ensureAnimationEnd = setTimeout(function() {
                        o.wrapup(b)
                    }, o.vars.animationSpeed + 100)) : o.container.animate(o.args, o.vars.animationSpeed, o.vars.easing, function() {
                        o.wrapup(b)
                    })
                }
                o.vars.smoothHeight && m.smoothHeight(o.vars.animationSpeed)
            }
        }, o.wrapup = function(e) {
            f || p || (0 === o.currentSlide && o.animatingTo === o.last && o.vars.animationLoop ? o.setProps(e, "jumpEnd") : o.currentSlide === o.last && 0 === o.animatingTo && o.vars.animationLoop && o.setProps(e, "jumpStart")), o.animating = !1, o.currentSlide = o.animatingTo, o.vars.after(o)
        }, o.animateSlides = function() {
            !o.animating && t && o.flexAnimate(o.getTarget("next"))
        }, o.pause = function() {
            clearInterval(o.animatedSlides), o.animatedSlides = null, o.playing = !1, o.vars.pausePlay && m.pausePlay.update("play"), o.syncExists && m.sync("pause")
        }, o.play = function() {
            o.playing && clearInterval(o.animatedSlides), o.animatedSlides = o.animatedSlides || setInterval(o.animateSlides, o.vars.slideshowSpeed), o.started = o.playing = !0, o.vars.pausePlay && m.pausePlay.update("pause"), o.syncExists && m.sync("play")
        }, o.stop = function() {
            o.pause(), o.stopped = !0
        }, o.canAdvance = function(e, t) {
            var i = g ? o.pagingCount - 1 : o.last;
            return t ? !0 : g && o.currentItem === o.count - 1 && 0 === e && "prev" === o.direction ? !0 : g && 0 === o.currentItem && e === o.pagingCount - 1 && "next" !== o.direction ? !1 : e !== o.currentSlide || g ? o.vars.animationLoop ? !0 : o.atEnd && 0 === o.currentSlide && e === i && "next" !== o.direction ? !1 : !o.atEnd || o.currentSlide !== i || 0 !== e || "next" !== o.direction : !1
        }, o.getTarget = function(e) {
            return o.direction = e, "next" === e ? o.currentSlide === o.last ? 0 : o.currentSlide + 1 : 0 === o.currentSlide ? o.last : o.currentSlide - 1
        }, o.setProps = function(e, t, i) {
            var n = function() {
                var i = e ? e : (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo,
                    n = function() {
                        if (p) return "setTouch" === t ? e : h && o.animatingTo === o.last ? 0 : h ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : o.animatingTo === o.last ? o.limit : i;
                        switch (t) {
                            case "setTotal":
                                return h ? (o.count - 1 - o.currentSlide + o.cloneOffset) * e : (o.currentSlide + o.cloneOffset) * e;
                            case "setTouch":
                                return h ? e : e;
                            case "jumpEnd":
                                return h ? e : o.count * e;
                            case "jumpStart":
                                return h ? o.count * e : e;
                            default:
                                return e
                        }
                    }();
                return -1 * n + "px"
            }();
            o.transitions && (n = u ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", o.container.css("-" + o.pfx + "-transition-duration", i), o.container.css("transition-duration", i)), o.args[o.prop] = n, (o.transitions || void 0 === i) && o.container.css(o.args), o.container.css("transform", n)
        }, o.setup = function(t) {
            if (f) o.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (l ? o.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + o.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(o.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == o.vars.fadeFirstSlide ? o.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(o.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : o.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(o.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, o.vars.animationSpeed, o.vars.easing)), o.vars.smoothHeight && m.smoothHeight();
            else {
                var i, n;
                "init" === t && (o.viewport = e('<div class="' + r + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(o).append(o.container), o.cloneCount = 0, o.cloneOffset = 0, h && (n = e.makeArray(o.slides).reverse(), o.slides = e(n), o.container.empty().append(o.slides))), o.vars.animationLoop && !p && (o.cloneCount = 2, o.cloneOffset = 1, "init" !== t && o.container.find(".clone").remove(), o.container.append(m.uniqueID(o.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(o.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), o.newSlides = e(o.vars.selector, o), i = h ? o.count - 1 - o.currentSlide + o.cloneOffset : o.currentSlide + o.cloneOffset, u && !p ? (o.container.height(200 * (o.count + o.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    o.newSlides.css({
                        display: "block"
                    }), o.doMath(), o.viewport.height(o.h), o.setProps(i * o.h, "init")
                }, "init" === t ? 100 : 0)) : (o.container.width(200 * (o.count + o.cloneCount) + "%"), o.setProps(i * o.computedW, "init"), setTimeout(function() {
                    o.doMath(), o.newSlides.css({
                        width: o.computedW,
                        marginRight: o.computedM,
                        "float": "left",
                        display: "block"
                    }), o.vars.smoothHeight && m.smoothHeight()
                }, "init" === t ? 100 : 0))
            }
            p || o.slides.removeClass(r + "active-slide").eq(o.currentSlide).addClass(r + "active-slide"), o.vars.init(o)
        }, o.doMath = function() {
            var e = o.slides.first(),
                t = o.vars.itemMargin,
                i = o.vars.minItems,
                n = o.vars.maxItems;
            o.w = void 0 === o.viewport ? o.width() : o.viewport.width(), o.h = e.height(), o.boxPadding = e.outerWidth() - e.width(), p ? (o.itemT = o.vars.itemWidth + t, o.itemM = t, o.minW = i ? i * o.itemT : o.w, o.maxW = n ? n * o.itemT - t : o.w, o.itemW = o.minW > o.w ? (o.w - t * (i - 1)) / i : o.maxW < o.w ? (o.w - t * (n - 1)) / n : o.vars.itemWidth > o.w ? o.w : o.vars.itemWidth, o.visible = Math.floor(o.w / o.itemW), o.move = o.vars.move > 0 && o.vars.move < o.visible ? o.vars.move : o.visible, o.pagingCount = Math.ceil((o.count - o.visible) / o.move + 1), o.last = o.pagingCount - 1, o.limit = 1 === o.pagingCount ? 0 : o.vars.itemWidth > o.w ? o.itemW * (o.count - 1) + t * (o.count - 1) : (o.itemW + t) * o.count - o.w - t) : (o.itemW = o.w, o.itemM = t, o.pagingCount = o.count, o.last = o.count - 1), o.computedW = o.itemW - o.boxPadding, o.computedM = o.itemM
        }, o.update = function(e, t) {
            o.doMath(), p || (e < o.currentSlide ? o.currentSlide += 1 : e <= o.currentSlide && 0 !== e && (o.currentSlide -= 1), o.animatingTo = o.currentSlide), o.vars.controlNav && !o.manualControls && ("add" === t && !p || o.pagingCount > o.controlNav.length ? m.controlNav.update("add") : ("remove" === t && !p || o.pagingCount < o.controlNav.length) && (p && o.currentSlide > o.last && (o.currentSlide -= 1, o.animatingTo -= 1), m.controlNav.update("remove", o.last))), o.vars.directionNav && m.directionNav.update()
        }, o.addSlide = function(t, i) {
            var n = e(t);
            o.count += 1, o.last = o.count - 1, u && h ? void 0 !== i ? o.slides.eq(o.count - i).after(n) : o.container.prepend(n) : void 0 !== i ? o.slides.eq(i).before(n) : o.container.append(n), o.update(i, "add"), o.slides = e(o.vars.selector + ":not(.clone)", o), o.setup(), o.vars.added(o)
        }, o.removeSlide = function(t) {
            var i = isNaN(t) ? o.slides.index(e(t)) : t;
            o.count -= 1, o.last = o.count - 1, isNaN(t) ? e(t, o.slides).remove() : u && h ? o.slides.eq(o.last).remove() : o.slides.eq(t).remove(), o.doMath(), o.update(i, "remove"), o.slides = e(o.vars.selector + ":not(.clone)", o), o.setup(), o.vars.removed(o)
        }, m.init()
    }, e(window).blur(function(e) {
        t = !1
    }).focus(function(e) {
        t = !0
    }), e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, e.fn.flexslider = function(t) {
        if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
            var i = e(this),
                n = t.selector ? t.selector : ".slides > li",
                o = i.find(n);
            1 === o.length && t.allowOneSlide === !0 || 0 === o.length ? (o.fadeIn(400), t.start && t.start(i)) : void 0 === i.data("flexslider") && new e.flexslider(this, t)
        });
        var i = e(this).data("flexslider");
        switch (t) {
            case "play":
                i.play();
                break;
            case "pause":
                i.pause();
                break;
            case "stop":
                i.stop();
                break;
            case "next":
                i.flexAnimate(i.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                i.flexAnimate(i.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof t && i.flexAnimate(t, !0)
        }
    }
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(e) {
        for (var t = e.css("visibility");
            "inherit" === t;) e = e.parent(), t = e.css("visibility");
        return "hidden" !== t
    }

    function i(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function n() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = o(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function o(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", i, function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", i, s)
    }

    function s() {
        e.datepicker._isDisabledDatepicker(u.inline ? u.dpDiv.parent()[0] : u.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function r(t, i) {
        e.extend(t, i);
        for (var n in i) null == i[n] && (t[n] = i[n]);
        return t
    }
    e.ui = e.ui || {};
    var a = (e.ui.version = "1.12.1", 0),
        l = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var n, o, s;
            for (s = 0; null != (o = i[s]); s++) try {
                n = e._data(o, "events"), n && n.remove && e(o).triggerHandler("remove")
            } catch (r) {}
            t(i)
        }
    }(e.cleanData), e.widget = function(t, i, n) {
        var o, s, r, a = {},
            l = t.split(".")[0];
        t = t.split(".")[1];
        var c = l + "-" + t;
        return n || (n = i, i = e.Widget), e.isArray(n) && (n = e.extend.apply(null, [{}].concat(n))), e.expr[":"][c.toLowerCase()] = function(t) {
            return !!e.data(t, c)
        }, e[l] = e[l] || {}, o = e[l][t], s = e[l][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new s(e, t)
        }, e.extend(s, o, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(n, function(t, n) {
            return e.isFunction(n) ? void(a[t] = function() {
                function e() {
                    return i.prototype[t].apply(this, arguments)
                }

                function o(e) {
                    return i.prototype[t].apply(this, e)
                }
                return function() {
                    var t, i = this._super,
                        s = this._superApply;
                    return this._super = e, this._superApply = o, t = n.apply(this, arguments), this._super = i, this._superApply = s, t
                }
            }()) : void(a[t] = n)
        }), s.prototype = e.widget.extend(r, {
            widgetEventPrefix: o ? r.widgetEventPrefix || t : t
        }, a, {
            constructor: s,
            namespace: l,
            widgetName: t,
            widgetFullName: c
        }), o ? (e.each(o._childConstructors, function(t, i) {
            var n = i.prototype;
            e.widget(n.namespace + "." + n.widgetName, s, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(s), e.widget.bridge(t, s), s
    }, e.widget.extend = function(t) {
        for (var i, n, o = l.call(arguments, 1), s = 0, r = o.length; r > s; s++)
            for (i in o[s]) n = o[s][i], o[s].hasOwnProperty(i) && void 0 !== n && (e.isPlainObject(n) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n) : t[i] = n);
        return t
    }, e.widget.bridge = function(t, i) {
        var n = i.prototype.widgetFullName || t;
        e.fn[t] = function(o) {
            var s = "string" == typeof o,
                r = l.call(arguments, 1),
                a = this;
            return s ? this.length || "instance" !== o ? this.each(function() {
                var i, s = e.data(this, n);
                return "instance" === o ? (a = s, !1) : s ? e.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r), i !== s && void 0 !== i ? (a = i && i.jquery ? a.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
            }) : a = void 0 : (r.length && (o = e.widget.extend.apply(null, [o].concat(r))), this.each(function() {
                var t = e.data(this, n);
                t ? (t.option(o || {}), t._init && t._init()) : e.data(this, n, new i(o, this))
            })), a
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            var t = this;
            this._destroy(), e.each(this.classesElementLookup, function(e, i) {
                t._removeClass(i, e)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var n, o, s, r = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (r = {}, n = t.split("."), t = n.shift(), n.length) {
                    for (o = r[t] = e.widget.extend({}, this.options[t]), s = 0; s < n.length - 1; s++) o[n[s]] = o[n[s]] || {}, o = o[n[s]];
                    if (t = n.pop(), 1 === arguments.length) return void 0 === o[t] ? null : o[t];
                    o[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    r[t] = i
                }
            return this._setOptions(r), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
        },
        _setOptionClasses: function(t) {
            var i, n, o;
            for (i in t) o = this.classesElementLookup[i], t[i] !== this.options.classes[i] && o && o.length && (n = e(o.get()), this._removeClass(o, i), n.addClass(this._classes({
                element: n,
                keys: i,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function(e) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(t) {
            function i(i, s) {
                var r, a;
                for (a = 0; a < i.length; a++) r = o.classesElementLookup[i[a]] || e(), r = e(t.add ? e.unique(r.get().concat(t.element.get())) : r.not(t.element).get()), o.classesElementLookup[i[a]] = r, n.push(i[a]), s && t.classes[i[a]] && n.push(t.classes[i[a]])
            }
            var n = [],
                o = this;
            return t = e.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, t), this._on(t.element, {
                remove: "_untrackClassesElement"
            }), t.keys && i(t.keys.match(/\S+/g) || [], !0), t.extra && i(t.extra.match(/\S+/g) || []), n.join(" ")
        },
        _untrackClassesElement: function(t) {
            var i = this;
            e.each(i.classesElementLookup, function(n, o) {
                -1 !== e.inArray(t.target, o) && (i.classesElementLookup[n] = e(o.not(t.target).get()))
            })
        },
        _removeClass: function(e, t, i) {
            return this._toggleClass(e, t, i, !1)
        },
        _addClass: function(e, t, i) {
            return this._toggleClass(e, t, i, !0)
        },
        _toggleClass: function(e, t, i, n) {
            n = "boolean" == typeof n ? n : i;
            var o = "string" == typeof e || null === e,
                s = {
                    extra: o ? t : i,
                    keys: o ? e : t,
                    element: o ? this.element : e,
                    add: n
                };
            return s.element.toggleClass(this._classes(s), n), this
        },
        _on: function(t, i, n) {
            var o, s = this;
            "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = o = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), e.each(n, function(n, r) {
                function a() {
                    return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || e.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/),
                    c = l[1] + s.eventNamespace,
                    d = l[2];
                d ? o.on(c, d, a) : i.on(c, a)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(i).off(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? n[e] : e).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, n) {
            var o, s, r = this.options[t];
            if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
                for (o in s) o in i || (i[o] = s[o]);
            return this.element.trigger(i, n), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(n, o, s) {
            "string" == typeof o && (o = {
                effect: o
            });
            var r, a = o ? o === !0 || "number" == typeof o ? i : o.effect || i : t;
            o = o || {}, "number" == typeof o && (o = {
                duration: o
            }), r = !e.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), r && e.effects && e.effects.effect[a] ? n[t](o) : a !== t && n[a] ? n[a](o.duration, o.easing, s) : n.queue(function(i) {
                e(this)[t](), s && s.call(n[0]), i()
            })
        }
    });
    e.widget;
    ! function() {
        function t(e, t, i) {
            return [parseFloat(e[0]) * (u.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (u.test(e[1]) ? i / 100 : 1)]
        }

        function i(t, i) {
            return parseInt(e.css(t, i), 10) || 0
        }

        function n(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : e.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        var o, s = Math.max,
            r = Math.abs,
            a = /left|center|right/,
            l = /top|center|bottom/,
            c = /[\+\-]\d+(\.[\d]+)?%?/,
            d = /^\w+/,
            u = /%$/,
            h = e.fn.position;
        e.position = {
            scrollbarWidth: function() {
                if (void 0 !== o) return o;
                var t, i, n = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    s = n.children()[0];
                return e("body").append(n), t = s.offsetWidth, n.css("overflow", "scroll"), i = s.offsetWidth, t === i && (i = n[0].clientWidth), n.remove(), o = t - i
            },
            getScrollInfo: function(t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    o = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                    s = "scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight;
                return {
                    width: s ? e.position.scrollbarWidth() : 0,
                    height: o ? e.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var i = e(t || window),
                    n = e.isWindow(i[0]),
                    o = !!i[0] && 9 === i[0].nodeType,
                    s = !n && !o;
                return {
                    element: i,
                    isWindow: n,
                    isDocument: o,
                    offset: s ? e(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        }, e.fn.position = function(o) {
            if (!o || !o.of) return h.apply(this, arguments);
            o = e.extend({}, o);
            var u, p, f, g, m, v, y = e(o.of),
                b = e.position.getWithinInfo(o.within),
                w = e.position.getScrollInfo(b),
                _ = (o.collision || "flip").split(" "),
                x = {};
            return v = n(y), y[0].preventDefault && (o.at = "left top"), p = v.width, f = v.height, g = v.offset, m = e.extend({}, g), e.each(["my", "at"], function() {
                var e, t, i = (o[this] || "").split(" ");
                1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", e = c.exec(i[0]), t = c.exec(i[1]), x[this] = [e ? e[0] : 0, t ? t[0] : 0], o[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
            }), 1 === _.length && (_[1] = _[0]), "right" === o.at[0] ? m.left += p : "center" === o.at[0] && (m.left += p / 2), "bottom" === o.at[1] ? m.top += f : "center" === o.at[1] && (m.top += f / 2), u = t(x.at, p, f), m.left += u[0], m.top += u[1], this.each(function() {
                var n, a, l = e(this),
                    c = l.outerWidth(),
                    d = l.outerHeight(),
                    h = i(this, "marginLeft"),
                    v = i(this, "marginTop"),
                    k = c + h + i(this, "marginRight") + w.width,
                    C = d + v + i(this, "marginBottom") + w.height,
                    D = e.extend({}, m),
                    T = t(x.my, l.outerWidth(), l.outerHeight());
                "right" === o.my[0] ? D.left -= c : "center" === o.my[0] && (D.left -= c / 2), "bottom" === o.my[1] ? D.top -= d : "center" === o.my[1] && (D.top -= d / 2), D.left += T[0], D.top += T[1], n = {
                    marginLeft: h,
                    marginTop: v
                }, e.each(["left", "top"], function(t, i) {
                    e.ui.position[_[t]] && e.ui.position[_[t]][i](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: c,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: k,
                        collisionHeight: C,
                        offset: [u[0] + T[0], u[1] + T[1]],
                        my: o.my,
                        at: o.at,
                        within: b,
                        elem: l
                    })
                }), o.using && (a = function(e) {
                    var t = g.left - D.left,
                        i = t + p - c,
                        n = g.top - D.top,
                        a = n + f - d,
                        u = {
                            target: {
                                element: y,
                                left: g.left,
                                top: g.top,
                                width: p,
                                height: f
                            },
                            element: {
                                element: l,
                                left: D.left,
                                top: D.top,
                                width: c,
                                height: d
                            },
                            horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                            vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                        };
                    c > p && r(t + i) < p && (u.horizontal = "center"), d > f && r(n + a) < f && (u.vertical = "middle"), s(r(t), r(i)) > s(r(n), r(a)) ? u.important = "horizontal" : u.important = "vertical", o.using.call(this, e, u)
                }), l.offset(e.extend(D, {
                    using: a
                }))
            })
        }, e.ui.position = {
            fit: {
                left: function(e, t) {
                    var i, n = t.within,
                        o = n.isWindow ? n.scrollLeft : n.offset.left,
                        r = n.width,
                        a = e.left - t.collisionPosition.marginLeft,
                        l = o - a,
                        c = a + t.collisionWidth - r - o;
                    t.collisionWidth > r ? l > 0 && 0 >= c ? (i = e.left + l + t.collisionWidth - r - o, e.left += l - i) : c > 0 && 0 >= l ? e.left = o : l > c ? e.left = o + r - t.collisionWidth : e.left = o : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = s(e.left - a, e.left)
                },
                top: function(e, t) {
                    var i, n = t.within,
                        o = n.isWindow ? n.scrollTop : n.offset.top,
                        r = t.within.height,
                        a = e.top - t.collisionPosition.marginTop,
                        l = o - a,
                        c = a + t.collisionHeight - r - o;
                    t.collisionHeight > r ? l > 0 && 0 >= c ? (i = e.top + l + t.collisionHeight - r - o, e.top += l - i) : c > 0 && 0 >= l ? e.top = o : l > c ? e.top = o + r - t.collisionHeight : e.top = o : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = s(e.top - a, e.top)
                }
            },
            flip: {
                left: function(e, t) {
                    var i, n, o = t.within,
                        s = o.offset.left + o.scrollLeft,
                        a = o.width,
                        l = o.isWindow ? o.scrollLeft : o.offset.left,
                        c = e.left - t.collisionPosition.marginLeft,
                        d = c - l,
                        u = c + t.collisionWidth - a - l,
                        h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                        p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                        f = -2 * t.offset[0];
                    0 > d ? (i = e.left + h + p + f + t.collisionWidth - a - s, (0 > i || i < r(d)) && (e.left += h + p + f)) : u > 0 && (n = e.left - t.collisionPosition.marginLeft + h + p + f - l, (n > 0 || r(n) < u) && (e.left += h + p + f))
                },
                top: function(e, t) {
                    var i, n, o = t.within,
                        s = o.offset.top + o.scrollTop,
                        a = o.height,
                        l = o.isWindow ? o.scrollTop : o.offset.top,
                        c = e.top - t.collisionPosition.marginTop,
                        d = c - l,
                        u = c + t.collisionHeight - a - l,
                        h = "top" === t.my[1],
                        p = h ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                        f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                        g = -2 * t.offset[1];
                    0 > d ? (n = e.top + p + f + g + t.collisionHeight - a - s, (0 > n || n < r(d)) && (e.top += p + f + g)) : u > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + g - l, (i > 0 || r(i) < u) && (e.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }();
    e.ui.position, e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, n) {
            return !!e.data(t, n[3])
        }
    }), e.fn.extend({
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    e.ui.focusable = function(i, n) {
        var o, s, r, a, l, c = i.nodeName.toLowerCase();
        return "area" === c ? (o = i.parentNode, s = o.name, i.href && s && "map" === o.nodeName.toLowerCase() ? (r = e("img[usemap='#" + s + "']"), r.length > 0 && r.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(c) ? (a = !i.disabled, a && (l = e(i).closest("fieldset")[0], l && (a = !l.disabled))) : a = "a" === c ? i.href || n : n, a && e(i).is(":visible") && t(e(i)))
    }, e.extend(e.expr[":"], {
        focusable: function(t) {
            return e.ui.focusable(t, null != e.attr(t, "tabindex"))
        }
    });
    var c = (e.ui.focusable, e.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : e(this[0].form)
    }, e.ui.formResetMixin = {
        _formResetHandler: function() {
            var t = e(this);
            setTimeout(function() {
                var i = t.data("ui-form-reset-instances");
                e.each(i, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var e = this.form.data("ui-form-reset-instances") || [];
                e.length || this.form.on("reset.ui-form-reset", this._formResetHandler), e.push(this), this.form.data("ui-form-reset-instances", e)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var t = this.form.data("ui-form-reset-instances");
                t.splice(e.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, e.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, e.ui.escapeSelector = function() {
        var e = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function(t) {
            return t.replace(e, "\\$1")
        }
    }(), e.fn.labels = function() {
        var t, i, n, o, s;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (o = this.eq(0).parents("label"), n = this.attr("id"), n && (t = this.eq(0).parents().last(), s = t.add(t.length ? t.siblings() : this.siblings()), i = "label[for='" + e.ui.escapeSelector(n) + "']", o = o.add(s.find(i).addBack(i))), this.pushStack(o))
    }, e.fn.scrollParent = function(t) {
        var i = this.css("position"),
            n = "absolute" === i,
            o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            s = this.parents().filter(function() {
                var t = e(this);
                return n && "static" === t.css("position") ? !1 : o.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
        return "fixed" !== i && s.length ? s : e(this[0].ownerDocument || document)
    }, e.extend(e.expr[":"], {
        tabbable: function(t) {
            var i = e.attr(t, "tabindex"),
                n = null != i;
            return (!n || i >= 0) && e.ui.focusable(t, n)
        }
    }), e.fn.extend({
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), !1);
    e(document).on("mouseup", function() {
        c = !1
    });
    e.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).on("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!c) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this,
                    n = 1 === t.which,
                    o = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return n && !o && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), c = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, c = !1, t.preventDefault()
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), e.ui.plugin = {
        add: function(t, i, n) {
            var o, s = e.ui[t].prototype;
            for (o in n) s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([i, n[o]])
        },
        call: function(e, t, i, n) {
            var o, s = e.plugins[t];
            if (s && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (o = 0; o < s.length; o++) e.options[s[o][0]] && s[o][1].apply(e.element, i)
        }
    }, e.ui.safeActiveElement = function(e) {
        var t;
        try {
            t = e.activeElement
        } catch (i) {
            t = e.body
        }
        return t || (t = e.body), t.nodeName || (t = e.body), t
    }, e.ui.safeBlur = function(t) {
        t && "body" !== t.nodeName.toLowerCase() && e(t).trigger("blur")
    };
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(e, t) {
            this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blurActiveElement(t), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = e(this);
                return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var i = e.ui.safeActiveElement(this.document[0]),
                n = e(t.target);
            n.closest(i).length || e.ui.safeBlur(i)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === e(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function(e) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", t, n) === !1) return this._mouseUp(new e.Event("mouseup", t)), !1;
                this.position = n.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var i = this,
                n = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new e.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(t) {
            var i = this.options,
                n = e.isFunction(i.helper),
                o = n ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return o.parents("body").length || o.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && o[0] === this.element[0] && this._setPositionRelative(), o[0] === this.element[0] || /(fixed|absolute)/.test(o.css("position")) || o.css("position", "absolute"), o
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(e) {
            return /(html|body)/i.test(e.tagName) || e === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var e = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, n, o = this.options,
                s = this.document[0];
            return this.relativeContainer = null, o.containment ? "window" === o.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === o.containment ? void(this.containment = [0, 0, e(s).width() - this.helperProportions.width - this.margins.left, (e(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : o.containment.constructor === Array ? void(this.containment = o.containment) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), i = e(o.containment), n = i[0], void(n && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(e, t) {
            t || (t = this.position);
            var i = "absolute" === e ? 1 : -1,
                n = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(e, t) {
            var i, n, o, s, r = this.options,
                a = this._isRootNode(this.scrollParent[0]),
                l = e.pageX,
                c = e.pageY;
            return a && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), r.grid && (o = r.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, c = i ? o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3] ? o : o - this.offset.click.top >= i[1] ? o - r.grid[1] : o + r.grid[1] : o, s = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? s - this.offset.click.left >= i[0] || s - this.offset.click.left > i[2] ? s : s - this.offset.click.left >= i[0] ? s - r.grid[0] : s + r.grid[0] : s), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (c = this.originalPageY)), {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function(t, i, n) {
            return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, n)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i, n) {
            var o = e.extend({}, i, {
                item: n.element
            });
            n.sortables = [], e(n.options.connectToSortable).each(function() {
                var i = e(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, o))
            })
        },
        stop: function(t, i, n) {
            var o = e.extend({}, i, {
                item: n.element
            });
            n.cancelHelperRemoval = !1, e.each(n.sortables, function() {
                var e = this;
                e.isOver ? (e.isOver = 0, n.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                    position: e.placeholder.css("position"),
                    top: e.placeholder.css("top"),
                    left: e.placeholder.css("left")
                }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, o))
            })
        },
        drag: function(t, i, n) {
            e.each(n.sortables, function() {
                var o = !1,
                    s = this;
                s.positionAbs = n.positionAbs, s.helperProportions = n.helperProportions, s.offset.click = n.offset.click, s._intersectsWith(s.containerCache) && (o = !0, e.each(n.sortables, function() {
                    return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== s && this._intersectsWith(this.containerCache) && e.contains(s.element[0], this.element[0]) && (o = !1), o
                })), o ? (s.isOver || (s.isOver = 1, n._parent = i.helper.parent(), s.currentItem = i.helper.appendTo(s.element).data("ui-sortable-item", !0), s.options._helper = s.options.helper, s.options.helper = function() {
                    return i.helper[0]
                }, t.target = s.currentItem[0], s._mouseCapture(t, !0), s._mouseStart(t, !0, !0), s.offset.click.top = n.offset.click.top, s.offset.click.left = n.offset.click.left, s.offset.parent.left -= n.offset.parent.left - s.offset.parent.left, s.offset.parent.top -= n.offset.parent.top - s.offset.parent.top, n._trigger("toSortable", t), n.dropped = s.element, e.each(n.sortables, function() {
                    this.refreshPositions()
                }), n.currentItem = n.element, s.fromOutside = n), s.currentItem && (s._mouseDrag(t), i.position = s.position)) : s.isOver && (s.isOver = 0, s.cancelHelperRemoval = !0, s.options._revert = s.options.revert, s.options.revert = !1, s._trigger("out", t, s._uiHash(s)), s._mouseStop(t, !0), s.options.revert = s.options._revert, s.options.helper = s.options._helper, s.placeholder && s.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(t), i.position = n._generatePosition(t, !0), n._trigger("fromSortable", t), n.dropped = !1, e.each(n.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function(t, i, n) {
            var o = e("body"),
                s = n.options;
            o.css("cursor") && (s._cursor = o.css("cursor")), o.css("cursor", s.cursor)
        },
        stop: function(t, i, n) {
            var o = n.options;
            o._cursor && e("body").css("cursor", o._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i, n) {
            var o = e(i.helper),
                s = n.options;
            o.css("opacity") && (s._opacity = o.css("opacity")), o.css("opacity", s.opacity)
        },
        stop: function(t, i, n) {
            var o = n.options;
            o._opacity && e(i.helper).css("opacity", o._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function(e, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, i, n) {
            var o = n.options,
                s = !1,
                r = n.scrollParentNotHidden[0],
                a = n.document[0];
            r !== a && "HTML" !== r.tagName ? (o.axis && "x" === o.axis || (n.overflowOffset.top + r.offsetHeight - t.pageY < o.scrollSensitivity ? r.scrollTop = s = r.scrollTop + o.scrollSpeed : t.pageY - n.overflowOffset.top < o.scrollSensitivity && (r.scrollTop = s = r.scrollTop - o.scrollSpeed)), o.axis && "y" === o.axis || (n.overflowOffset.left + r.offsetWidth - t.pageX < o.scrollSensitivity ? r.scrollLeft = s = r.scrollLeft + o.scrollSpeed : t.pageX - n.overflowOffset.left < o.scrollSensitivity && (r.scrollLeft = s = r.scrollLeft - o.scrollSpeed))) : (o.axis && "x" === o.axis || (t.pageY - e(a).scrollTop() < o.scrollSensitivity ? s = e(a).scrollTop(e(a).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(a).scrollTop()) < o.scrollSensitivity && (s = e(a).scrollTop(e(a).scrollTop() + o.scrollSpeed))), o.axis && "y" === o.axis || (t.pageX - e(a).scrollLeft() < o.scrollSensitivity ? s = e(a).scrollLeft(e(a).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(a).scrollLeft()) < o.scrollSensitivity && (s = e(a).scrollLeft(e(a).scrollLeft() + o.scrollSpeed)))), s !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function(t, i, n) {
            var o = n.options;
            n.snapElements = [], e(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function() {
                var t = e(this),
                    i = t.offset();
                this !== n.element[0] && n.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, i, n) {
            var o, s, r, a, l, c, d, u, h, p, f = n.options,
                g = f.snapTolerance,
                m = i.offset.left,
                v = m + n.helperProportions.width,
                y = i.offset.top,
                b = y + n.helperProportions.height;
            for (h = n.snapElements.length - 1; h >= 0; h--) l = n.snapElements[h].left - n.margins.left, c = l + n.snapElements[h].width, d = n.snapElements[h].top - n.margins.top, u = d + n.snapElements[h].height, l - g > v || m > c + g || d - g > b || y > u + g || !e.contains(n.snapElements[h].item.ownerDocument, n.snapElements[h].item) ? (n.snapElements[h].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                snapItem: n.snapElements[h].item
            })), n.snapElements[h].snapping = !1) : ("inner" !== f.snapMode && (o = Math.abs(d - b) <= g, s = Math.abs(u - y) <= g, r = Math.abs(l - v) <= g, a = Math.abs(c - m) <= g, o && (i.position.top = n._convertPositionTo("relative", {
                top: d - n.helperProportions.height,
                left: 0
            }).top), s && (i.position.top = n._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l - n.helperProportions.width
            }).left), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: c
            }).left)), p = o || s || r || a, "outer" !== f.snapMode && (o = Math.abs(d - y) <= g, s = Math.abs(u - b) <= g, r = Math.abs(l - m) <= g, a = Math.abs(c - v) <= g, o && (i.position.top = n._convertPositionTo("relative", {
                top: d,
                left: 0
            }).top), s && (i.position.top = n._convertPositionTo("relative", {
                top: u - n.helperProportions.height,
                left: 0
            }).top), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: c - n.helperProportions.width
            }).left)), !n.snapElements[h].snapping && (o || s || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                snapItem: n.snapElements[h].item
            })), n.snapElements[h].snapping = o || s || r || a || p)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function(t, i, n) {
            var o, s = n.options,
                r = e.makeArray(e(s.stack)).sort(function(t, i) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                });
            r.length && (o = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function(t) {
                e(this).css("zIndex", o + t)
            }), this.css("zIndex", o + r.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i, n) {
            var o = e(i.helper),
                s = n.options;
            o.css("zIndex") && (s._zIndex = o.css("zIndex")), o.css("zIndex", s.zIndex)
        },
        stop: function(t, i, n) {
            var o = n.options;
            o._zIndex && e(i.helper).css("zIndex", o._zIndex)
        }
    });
    e.ui.draggable;
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(e) {
            return parseFloat(e) || 0
        },
        _isNumber: function(e) {
            return !isNaN(parseFloat(e))
        },
        _hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                o = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, o = t[n] > 0, t[n] = 0, o)
        },
        _create: function() {
            var t, i = this.options,
                n = this;
            this._addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), i.autoHide && e(this.element).on("mouseenter", function() {
                i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
            }).on("mouseleave", function() {
                i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
            }), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                e(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _setOption: function(e, t) {
            switch (this._super(e, t), e) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var t, i, n, o, s, r = this.options,
                a = this;
            if (this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) t = e.trim(n[i]), o = "ui-resizable-" + t, s = e("<div>"), this._addClass(s, "ui-resizable-handle " + o), s.css({
                    zIndex: r.zIndex
                }), this.handles[t] = ".ui-resizable-" + t, this.element.append(s);
            this._renderAxis = function(t) {
                var i, n, o, s;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {
                    mousedown: a._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = e(this.handles[i], this.element), s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(o, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                a.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = s && s[1] ? s[1] : "se")
            }), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(t) {
            var i, n, o = !1;
            for (i in this.handles) n = e(this.handles[i])[0], (n === t.target || e.contains(n, t.target)) && (o = !0);
            return !this.options.disabled && o
        },
        _mouseStart: function(t) {
            var i, n, o, s = this.options,
                r = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), s.containment && (i += e(s.containment).scrollLeft() || 0, n += e(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: n
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: r.width(),
                height: r.height()
            }, this.originalSize = this._helper ? {
                width: r.outerWidth(),
                height: r.outerHeight()
            } : {
                width: r.width(),
                height: r.height()
            }, this.sizeDiff = {
                width: r.outerWidth() - r.width(),
                height: r.outerHeight() - r.height()
            }, this.originalPosition = {
                left: i,
                top: n
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var i, n, o = this.originalMousePosition,
                s = this.axis,
                r = t.pageX - o.left || 0,
                a = t.pageY - o.top || 0,
                l = this._change[s];
            return this._updatePrevProperties(), l ? (i = l.apply(this, [t, r, a]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var i, n, o, s, r, a, l, c = this.options,
                d = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), o = n && this._hasScroll(i[0], "left") ? 0 : d.sizeDiff.height, s = n ? 0 : d.sizeDiff.width, r = {
                width: d.helper.width() - s,
                height: d.helper.height() - o
            }, a = parseFloat(d.element.css("left")) + (d.position.left - d.originalPosition.left) || null, l = parseFloat(d.element.css("top")) + (d.position.top - d.originalPosition.top) || null, c.animate || this.element.css(e.extend(r, {
                top: l,
                left: a
            })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !c.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var e = {};
            return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"),
                this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
        },
        _updateVirtualBoundaries: function(e) {
            var t, i, n, o, s, r = this.options;
            s = {
                minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = s.minHeight * this.aspectRatio, n = s.minWidth / this.aspectRatio, i = s.maxHeight * this.aspectRatio, o = s.maxWidth / this.aspectRatio, t > s.minWidth && (s.minWidth = t), n > s.minHeight && (s.minHeight = n), i < s.maxWidth && (s.maxWidth = i), o < s.maxHeight && (s.maxHeight = o)), this._vBoundaries = s
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position,
                i = this.size,
                n = this.axis;
            return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries,
                i = this.axis,
                n = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                o = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                s = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                r = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                a = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                c = /sw|nw|w/.test(i),
                d = /nw|ne|n/.test(i);
            return s && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), o && (e.height = t.maxHeight), s && c && (e.left = a - t.minWidth), n && c && (e.left = a - t.maxWidth), r && d && (e.top = l - t.minHeight), o && d && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _getPaddingPlusBorderDimensions: function(e) {
            for (var t = 0, i = [], n = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], o = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseFloat(n[t]) || 0, i[t] += parseFloat(o[t]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var e, t = 0, i = this.helper || this.element; t < this._proportionallyResizeElements.length; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var i = this.originalSize,
                    n = this.originalPosition;
                return {
                    left: n.left + t,
                    width: i.width - t
                }
            },
            n: function(e, t, i) {
                var n = this.originalSize,
                    o = this.originalPosition;
                return {
                    top: o.top + i,
                    height: n.height - i
                }
            },
            s: function(e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, n) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
            },
            sw: function(t, i, n) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
            },
            ne: function(t, i, n) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
            },
            nw: function(t, i, n) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
            }
        },
        _propagate: function(t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = e(this).resizable("instance"),
                n = i.options,
                o = i._proportionallyResizeElements,
                s = o.length && /textarea/i.test(o[0].nodeName),
                r = s && i._hasScroll(o[0], "left") ? 0 : i.sizeDiff.height,
                a = s ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - a,
                    height: i.size.height - r
                },
                c = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                d = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(l, d && c ? {
                top: d,
                left: c
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    o && o.length && e(o[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, i, n, o, s, r, a, l = e(this).resizable("instance"),
                c = l.options,
                d = l.element,
                u = c.containment,
                h = u instanceof e ? u.get(0) : /parent/.test(u) ? d.parent().get(0) : u;
            h && (l.containerElement = e(h), /document/.test(u) || u === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(h), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                i[e] = l._num(t.css("padding" + n))
            }), l.containerOffset = t.offset(), l.containerPosition = t.position(), l.containerSize = {
                height: t.innerHeight() - i[3],
                width: t.innerWidth() - i[1]
            }, n = l.containerOffset, o = l.containerSize.height, s = l.containerSize.width, r = l._hasScroll(h, "left") ? h.scrollWidth : s, a = l._hasScroll(h) ? h.scrollHeight : o, l.parentData = {
                element: h,
                left: n.left,
                top: n.top,
                width: r,
                height: a
            }))
        },
        resize: function(t) {
            var i, n, o, s, r = e(this).resizable("instance"),
                a = r.options,
                l = r.containerOffset,
                c = r.position,
                d = r._aspectRatio || t.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                h = r.containerElement,
                p = !0;
            h[0] !== document && /static/.test(h.css("position")) && (u = l), c.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), d && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), c.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), d && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), o = r.containerElement.get(0) === r.element.parent().get(0), s = /relative|absolute/.test(r.containerElement.css("position")), o && s ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - u.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - u.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, d && (r.size.height = r.size.width / r.aspectRatio, p = !1)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, d && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
        },
        stop: function() {
            var t = e(this).resizable("instance"),
                i = t.options,
                n = t.containerOffset,
                o = t.containerPosition,
                s = t.containerElement,
                r = e(t.helper),
                a = r.offset(),
                l = r.outerWidth() - t.sizeDiff.width,
                c = r.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(s.css("position")) && e(this).css({
                left: a.left - o.left - n.left,
                width: l,
                height: c
            }), t._helper && !i.animate && /static/.test(s.css("position")) && e(this).css({
                left: a.left - o.left - n.left,
                width: l,
                height: c
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).resizable("instance"),
                i = t.options;
            e(i.alsoResize).each(function() {
                var t = e(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            })
        },
        resize: function(t, i) {
            var n = e(this).resizable("instance"),
                o = n.options,
                s = n.originalSize,
                r = n.originalPosition,
                a = {
                    height: n.size.height - s.height || 0,
                    width: n.size.width - s.width || 0,
                    top: n.position.top - r.top || 0,
                    left: n.position.left - r.left || 0
                };
            e(o.alsoResize).each(function() {
                var t = e(this),
                    n = e(this).data("ui-resizable-alsoresize"),
                    o = {},
                    s = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                e.each(s, function(e, t) {
                    var i = (n[t] || 0) + (a[t] || 0);
                    i && i >= 0 && (o[t] = i || null)
                }), t.css(o)
            })
        },
        stop: function() {
            e(this).removeData("ui-resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).resizable("instance"),
                i = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), t._addClass(t.ghost, "ui-resizable-ghost"), e.uiBackCompat !== !1 && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, i = e(this).resizable("instance"),
                n = i.options,
                o = i.size,
                s = i.originalSize,
                r = i.originalPosition,
                a = i.axis,
                l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                c = l[0] || 1,
                d = l[1] || 1,
                u = Math.round((o.width - s.width) / c) * c,
                h = Math.round((o.height - s.height) / d) * d,
                p = s.width + u,
                f = s.height + h,
                g = n.maxWidth && n.maxWidth < p,
                m = n.maxHeight && n.maxHeight < f,
                v = n.minWidth && n.minWidth > p,
                y = n.minHeight && n.minHeight > f;
            n.grid = l, v && (p += c), y && (f += d), g && (p -= c), m && (f -= d), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - h) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - u) : ((0 >= f - d || 0 >= p - c) && (t = i._getPaddingPlusBorderDimensions(this)), f - d > 0 ? (i.size.height = f, i.position.top = r.top - h) : (f = d - t.height, i.size.height = f, i.position.top = r.top + s.height - f), p - c > 0 ? (i.size.width = p, i.position.left = r.left - u) : (p = c - t.width, i.size.width = p, i.position.left = r.left + s.width - p))
        }
    });
    var d = (e.ui.resizable, /ui-corner-([a-z]){2,6}/g);
    e.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var t = this,
                i = [];
            e.each(this.options.items, function(n, o) {
                var s, r = {};
                return o ? "controlgroupLabel" === n ? (s = t.element.find(o), s.each(function() {
                    var t = e(this);
                    t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), t._addClass(s, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(s.get()))) : void(e.fn[n] && (r = t["_" + n + "Options"] ? t["_" + n + "Options"]("middle") : {
                    classes: {}
                }, t.element.find(o).each(function() {
                    var o = e(this),
                        s = o[n]("instance"),
                        a = e.widget.extend({}, r);
                    if ("button" !== n || !o.parent(".ui-spinner").length) {
                        s || (s = o[n]()[n]("instance")), s && (a.classes = t._resolveClassesValues(a.classes, s)), o[n](a);
                        var l = o[n]("widget");
                        e.data(l[0], "ui-controlgroup-data", s ? s : o[n]("instance")), i.push(l[0])
                    }
                }))) : void 0
            }), this.childWidgets = e(e.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(t) {
            this.childWidgets.each(function() {
                var i = e(this),
                    n = i.data("ui-controlgroup-data");
                n && n[t] && n[t]()
            })
        },
        _updateCornerClass: function(e, t) {
            var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                n = this._buildSimpleOptions(t, "label").classes.label;
            this._removeClass(e, null, i), this._addClass(e, null, n)
        },
        _buildSimpleOptions: function(e, t) {
            var i = "vertical" === this.options.direction,
                n = {
                    classes: {}
                };
            return n.classes[t] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[e], n
        },
        _spinnerOptions: function(e) {
            var t = this._buildSimpleOptions(e, "ui-spinner");
            return t.classes["ui-spinner-up"] = "", t.classes["ui-spinner-down"] = "", t
        },
        _buttonOptions: function(e) {
            return this._buildSimpleOptions(e, "ui-button")
        },
        _checkboxradioOptions: function(e) {
            return this._buildSimpleOptions(e, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(e) {
            var t = "vertical" === this.options.direction;
            return {
                width: t ? "auto" : !1,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": t ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[e]
            }
        },
        _resolveClassesValues: function(t, i) {
            var n = {};
            return e.each(t, function(o) {
                var s = i.options.classes[o] || "";
                s = e.trim(s.replace(d, "")), n[o] = (s + " " + t[o]).replace(/\s+/g, " ")
            }), n
        },
        _setOption: function(e, t) {
            return "direction" === e && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(e, t), "disabled" === e ? void this._callChildMethod(t ? "disable" : "enable") : void this.refresh()
        },
        refresh: function() {
            var t, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), t = this.childWidgets, this.options.onlyVisible && (t = t.filter(":visible")), t.length && (e.each(["first", "last"], function(e, n) {
                var o = t[n]().data("ui-controlgroup-data");
                if (o && i["_" + o.widgetName + "Options"]) {
                    var s = i["_" + o.widgetName + "Options"](1 === t.length ? "only" : n);
                    s.classes = i._resolveClassesValues(s.classes, o), o.element[o.widgetName](s)
                } else i._updateCornerClass(t[n](), n)
            }), this._callChildMethod("refresh"))
        }
    });
    e.widget("ui.checkboxradio", [e.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var t, i, n = this,
                o = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = e(i[i.length - 1]), this.label.length || e.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
                n.originalLabel += 3 === this.nodeType ? e(this).text() : this.outerHTML
            }), this.originalLabel && (o.label = this.originalLabel), t = this.element[0].disabled, null != t && (o.disabled = t), o
        },
        _create: function() {
            var e = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), e && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || e.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var t, i = this.element[0].name,
                n = "input[name='" + e.ui.escapeSelector(i) + "']";
            return i ? (t = this.form.length ? e(this.form[0].elements).filter(n) : e(n).filter(function() {
                return 0 === e(this).form().length
            }), t.not(this.element)) : e([])
        },
        _toggleClasses: function() {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function() {
                var t = e(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function(e, t) {
            return "label" !== e || t ? (this._super(e, t), "disabled" === e ? (this._toggleClass(this.label, null, "ui-state-disabled", t), void(this.element[0].disabled = t)) : void this.refresh()) : void 0
        },
        _updateIcon: function(t) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = e("<span>"), this.iconSpace = e("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() {
            var e = this.label.contents().not(this.element[0]);
            this.icon && (e = e.not(this.icon[0])), this.iconSpace && (e = e.not(this.iconSpace[0])), e.remove(), this.label.append(this.options.label)
        },
        refresh: function() {
            var e = this.element[0].checked,
                t = this.element[0].disabled;
            this._updateIcon(e), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), null !== this.options.label && this._updateLabel(), t !== this.options.disabled && this._setOptions({
                disabled: t
            })
        }
    }]);
    e.ui.checkboxradio;
    e.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var e, t = this._super() || {};
            return this.isInput = this.element.is("input"), e = this.element[0].disabled, null != e && (t.disabled = e), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (t.label = this.originalLabel), t
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function(t) {
                    t.keyCode === e.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(t, i) {
            var n = "iconPosition" !== t,
                o = n ? this.options.iconPosition : i,
                s = "top" === o || "bottom" === o;
            this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = e("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(o), s ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = e("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(o))
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(e) {
            this.icon[/^(?:end|bottom)/.test(e) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(e) {
            this.element[/^(?:end|bottom)/.test(e) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(e) {
            var t = void 0 === e.showLabel ? this.options.showLabel : e.showLabel,
                i = void 0 === e.icon ? this.options.icon : e.icon;
            t || i || (e.showLabel = !0), this._super(e)
        },
        _setOption: function(e, t) {
            "icon" === e && (t ? this._updateIcon(e, t) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === e && this._updateIcon(e, t), "showLabel" === e && (this._toggleClass("ui-button-icon-only", null, !t), this._updateTooltip()), "label" === e && (this.isInput ? this.element.val(t) : (this.element.html(t), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(e, t), "disabled" === e && (this._toggleClass(null, "ui-state-disabled", t), this.element[0].disabled = t, t && this.element.blur())
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOptions({
                disabled: e
            }), this._updateTooltip()
        }
    }), e.uiBackCompat !== !1 && (e.widget("ui.button", e.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        },
        _setOption: function(e, t) {
            return "text" === e ? void this._super("showLabel", t) : ("showLabel" === e && (this.options.text = t), "icon" === e && (this.options.icons.primary = t), "icons" === e && (t.primary ? (this._super("icon", t.primary), this._super("iconPosition", "beginning")) : t.secondary && (this._super("icon", t.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
        }
    }), e.fn.button = function(t) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (e.ui.checkboxradio || e.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
    }(e.fn.button), e.fn.buttonset = function() {
        return e.ui.controlgroup || e.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments))
    });
    e.ui.button;
    e.extend(e.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var u;
    e.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return r(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, i) {
            var n, o, s;
            n = t.nodeName.toLowerCase(), o = "div" === n || "span" === n, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), o), s.settings = e.extend({}, i || {}), "input" === n ? this._connectDatepicker(t, s) : o && this._inlineDatepicker(t, s)
        },
        _newInst: function(t, i) {
            var n = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? o(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var n = e(t);
            i.append = e([]), i.trigger = e([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var n, o, s, r = this._get(i, "appendText"),
                a = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[a ? "before" : "after"](i.append)), t.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), "focus" !== n && "both" !== n || t.on("focus", this._showDatepicker), "button" !== n && "both" !== n || (o = this._get(i, "buttonText"), s = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: s,
                alt: o,
                title: o
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                src: s,
                alt: o,
                title: o
            }) : o)), t[a ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, n, o, s = new Date(2009, 11, 20),
                    r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) {
                    for (i = 0, n = 0, o = 0; o < e.length; o++) e[o].length > i && (i = e[o].length, n = o);
                    return n
                }, s.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var n = e(t);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, n, o, s) {
            var a, l, c, d, u, h = this._dialogInst;
            return h || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), e("body").append(this._dialogInput), h = this._dialogInst = this._newInst(this._dialogInput, !1), h.settings = {}, e.data(this._dialogInput[0], "datepicker", h)), r(h.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(h, i) : i, this._dialogInput.val(i), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, d = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + d, c / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", h), this
        },
        _destroyDatepicker: function(t) {
            var i, n = e(t),
                o = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (o.append.remove(), o.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty(), u === o && (u = null))
        },
        _enableDatepicker: function(t) {
            var i, n, o = e(t),
                s = e.data(t, "datepicker");
            o.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, s.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== i && "span" !== i || (n = o.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var i, n, o = e(t),
                s = e.data(t, "datepicker");
            o.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, s.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== i && "span" !== i || (n = o.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, i, n) {
            var o, s, a, l, c = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : c ? "all" === i ? e.extend({}, c.settings) : this._get(c, i) : null : (o = i || {}, "string" == typeof i && (o = {}, o[i] = n), void(c && (this._curInst === c && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), a = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), r(c.settings, o), null !== a && void 0 !== o.dateFormat && void 0 === o.minDate && (c.settings.minDate = this._formatDate(c, a)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), c), this._autoSize(c), this._setDate(c, s), this._updateAlternate(c), this._updateDatepicker(c))))
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i, n, o, s = e.datepicker._getInst(t.target),
                r = !0,
                a = s.dpDiv.is(".ui-datepicker-rtl");
            if (s._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return o = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), o[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, o[0]), i = e.datepicker._get(s, "onSelect"), i ? (n = e.datepicker._formatDate(s), i.apply(s.input ? s.input[0] : null, [n, s])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, a ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, a ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, n, o = e.datepicker._getInst(t.target);
            return e.datepicker._get(o, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(o, "dateFormat")), n = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var i, n = e.datepicker._getInst(t.target);
            if (n.input.val() !== n.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, e.datepicker._getFormatConfig(n)), i && (e.datepicker._setDateFromField(n), e.datepicker._updateAlternate(n), e.datepicker._updateDatepicker(n))
            } catch (o) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var n, o, s, a, l, c, d;
                n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), o = e.datepicker._get(n, "beforeShow"), s = o ? o.apply(t, [t, n]) : {}, s !== !1 && (r(n.settings, s), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), a = !1, e(t).parents().each(function() {
                    return a |= "fixed" === e(this).css("position"), !a
                }), l = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(n), l = e.datepicker._checkOffset(n, l, a), n.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : a ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), n.inline || (c = e.datepicker._get(n, "showAnim"), d = e.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[c] ? n.dpDiv.show(c, e.datepicker._get(n, "showOptions"), d) : n.dpDiv[c || "show"](c ? d : null), e.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), e.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, u = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, n = this._getNumberOfMonths(t),
                o = n[1],
                r = 17,
                a = t.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && s.apply(a.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", r * o + "em"), t.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, i, n) {
            var o = t.dpDiv.outerWidth(),
                s = t.dpDiv.outerHeight(),
                r = t.input ? t.input.outerWidth() : 0,
                a = t.input ? t.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : e(document).scrollLeft()),
                c = document.documentElement.clientHeight + (n ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? o - r : 0, i.left -= n && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= n && i.top === t.input.offset().top + a ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + o > l && l > o ? Math.abs(i.left + o - l) : 0), i.top -= Math.min(i.top, i.top + s > c && c > s ? Math.abs(s + a) : 0), i
        },
        _findPos: function(t) {
            for (var i, n = this._getInst(t), o = this._get(n, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[o ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var i, n, o, s, r = this._curInst;
            !r || t && r !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), o = function() {
                e.datepicker._tidyDialog(r)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), n, o) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, o), i || o(), this._datepickerShowing = !1, s = this._get(r, "onClose"), s && s.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    n = e.datepicker._getInst(i[0]);
                (i[0].id === e.datepicker._mainDivId || 0 !== i.parents("#" + e.datepicker._mainDivId).length || i.hasClass(e.datepicker.markerClassName) || i.closest("." + e.datepicker._triggerClass).length || !e.datepicker._datepickerShowing || e.datepicker._inDialog && e.blockUI) && (!i.hasClass(e.datepicker.markerClassName) || e.datepicker._curInst === n) || e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, n) {
            var o = e(t),
                s = this._getInst(o[0]);
            this._isDisabledDatepicker(o[0]) || (this._adjustInstDate(s, i + ("M" === n ? this._get(s, "showCurrentAtPos") : 0), n), this._updateDatepicker(s))
        },
        _gotoToday: function(t) {
            var i, n = e(t),
                o = this._getInst(n[0]);
            this._get(o, "gotoCurrent") && o.currentDay ? (o.selectedDay = o.currentDay, o.drawMonth = o.selectedMonth = o.currentMonth, o.drawYear = o.selectedYear = o.currentYear) : (i = new Date, o.selectedDay = i.getDate(), o.drawMonth = o.selectedMonth = i.getMonth(), o.drawYear = o.selectedYear = i.getFullYear()), this._notifyChange(o), this._adjustDate(n)
        },
        _selectMonthYear: function(t, i, n) {
            var o = e(t),
                s = this._getInst(o[0]);
            s["selected" + ("M" === n ? "Month" : "Year")] = s["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(o)
        },
        _selectDay: function(t, i, n, o) {
            var s, r = e(t);
            e(o).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (s = this._getInst(r[0]), s.selectedDay = s.currentDay = e("a", o).html(), s.selectedMonth = s.currentMonth = i, s.selectedYear = s.currentYear = n, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var n, o = e(t),
                s = this._getInst(o[0]);
            i = null != i ? i : this._formatDate(s), s.input && s.input.val(i), this._updateAlternate(s), n = this._get(s, "onSelect"), n ? n.apply(s.input ? s.input[0] : null, [i, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, n, o, s = this._get(t, "altField");
            s && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), n = this._getDate(t), o = this.formatDate(i, n, this._getFormatConfig(t)), e(s).val(o))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, n) {
            if (null == t || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
            var o, s, r, a, l = 0,
                c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                d = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                h = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                v = -1,
                y = -1,
                b = !1,
                w = function(e) {
                    var i = o + 1 < t.length && t.charAt(o + 1) === e;
                    return i && o++, i
                },
                _ = function(e) {
                    var t = w(e),
                        n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        o = "y" === e ? n : 1,
                        s = new RegExp("^\\d{" + o + "," + n + "}"),
                        r = i.substring(l).match(s);
                    if (!r) throw "Missing number at position " + l;
                    return l += r[0].length, parseInt(r[0], 10)
                },
                x = function(t, n, o) {
                    var s = -1,
                        r = e.map(w(t) ? o : n, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(r, function(e, t) {
                            var n = t[1];
                            return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (s = t[0], l += n.length, !1) : void 0
                        }), -1 !== s) return s + 1;
                    throw "Unknown name at position " + l
                },
                k = function() {
                    if (i.charAt(l) !== t.charAt(o)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (o = 0; o < t.length; o++)
                if (b) "'" !== t.charAt(o) || w("'") ? k() : b = !1;
                else switch (t.charAt(o)) {
                    case "d":
                        v = _("d");
                        break;
                    case "D":
                        x("D", u, h);
                        break;
                    case "o":
                        y = _("o");
                        break;
                    case "m":
                        m = _("m");
                        break;
                    case "M":
                        m = x("M", p, f);
                        break;
                    case "y":
                        g = _("y");
                        break;
                    case "@":
                        a = new Date(_("@")), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "!":
                        a = new Date((_("!") - this._ticksTo1970) / 1e4), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "'":
                        w("'") ? k() : b = !0;
                        break;
                    default:
                        k()
                }
            if (l < i.length && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= g ? 0 : -100)), y > -1)
                for (m = 1, v = y;;) {
                    if (s = this._getDaysInMonth(g, m - 1), s >= v) break;
                    m++, v -= s
                }
            if (a = this._daylightSavingAdjust(new Date(g, m - 1, v)), a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw "Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(e, t, i) {
            if (!t) return "";
            var n, o = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(t) {
                    var i = n + 1 < e.length && e.charAt(n + 1) === t;
                    return i && n++, i
                },
                c = function(e, t, i) {
                    var n = "" + t;
                    if (l(e))
                        for (; n.length < i;) n = "0" + n;
                    return n
                },
                d = function(e, t, i, n) {
                    return l(e) ? n[t] : i[t]
                },
                u = "",
                h = !1;
            if (t)
                for (n = 0; n < e.length; n++)
                    if (h) "'" !== e.charAt(n) || l("'") ? u += e.charAt(n) : h = !1;
                    else switch (e.charAt(n)) {
                        case "d":
                            u += c("d", t.getDate(), 2);
                            break;
                        case "D":
                            u += d("D", t.getDay(), o, s);
                            break;
                        case "o":
                            u += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += c("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += d("M", t.getMonth(), r, a);
                            break;
                        case "y":
                            u += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                            break;
                        case "@":
                            u += t.getTime();
                            break;
                        case "!":
                            u += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : h = !0;
                            break;
                        default:
                            u += e.charAt(n)
                    }
            return u
        },
        _possibleChars: function(e) {
            var t, i = "",
                n = !1,
                o = function(i) {
                    var n = t + 1 < e.length && e.charAt(t + 1) === i;
                    return n && t++, n
                };
            for (t = 0; t < e.length; t++)
                if (n) "'" !== e.charAt(t) || o("'") ? i += e.charAt(t) : n = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        o("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    n = e.lastVal = e.input ? e.input.val() : null,
                    o = this._getDefaultDate(e),
                    s = o,
                    r = this._getFormatConfig(e);
                try {
                    s = this.parseDate(i, n, r) || o
                } catch (a) {
                    n = t ? "" : n
                }
                e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = n ? s.getDate() : 0, e.currentMonth = n ? s.getMonth() : 0, e.currentYear = n ? s.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, n) {
            var o = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                s = function(i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (n) {}
                    for (var o = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = o.getFullYear(), r = o.getMonth(), a = o.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(i); c;) {
                        switch (c[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(c[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(c[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(c[1], 10), a = Math.min(a, e.datepicker._getDaysInMonth(s, r));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(c[1], 10), a = Math.min(a, e.datepicker._getDaysInMonth(s, r))
                        }
                        c = l.exec(i)
                    }
                    return new Date(s, r, a)
                },
                r = null == i || "" === i ? n : "string" == typeof i ? s(i) : "number" == typeof i ? isNaN(i) ? n : o(i) : new Date(i.getTime());
            return r = r && "Invalid Date" === r.toString() ? n : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, i) {
            var n = !t,
                o = e.selectedMonth,
                s = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), o === e.selectedMonth && s === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                n = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(n)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                e(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, n, o, s, r, a, l, c, d, u, h, p, f, g, m, v, y, b, w, _, x, k, C, D, T, S, E, $, A, N, M, P, O, j, z, L, I, F, H = new Date,
                W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
                R = this._get(e, "isRTL"),
                q = this._get(e, "showButtonPanel"),
                B = this._get(e, "hideIfNoPrevNext"),
                U = this._get(e, "navigationAsDateFormat"),
                Y = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"),
                K = this._get(e, "stepMonths"),
                G = 1 !== Y[0] || 1 !== Y[1],
                X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(e, "min"),
                J = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - V,
                ee = e.drawYear;
            if (0 > Z && (Z += 12, ee--), J)
                for (t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - Y[0] * Y[1] + 1, J.getDate())), t = Q && Q > t ? Q : t; this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, ee--);
            for (e.drawMonth = Z, e.drawYear = ee, i = this._get(e, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(ee, Z - K, 1)), this._getFormatConfig(e)) : i, n = this._canAdjustMonth(e, -1, ee, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>", o = this._get(e, "nextText"), o = U ? this.formatDate(o, this._daylightSavingAdjust(new Date(ee, Z + K, 1)), this._getFormatConfig(e)) : o, s = this._canAdjustMonth(e, 1, ee, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + o + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + o + "</span></a>", r = this._get(e, "currentText"), a = this._get(e, "gotoCurrent") && e.currentDay ? X : W, r = U ? this.formatDate(r, a, this._getFormatConfig(e)) : r, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (R ? l : "") + (this._isInRange(e, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (R ? "" : l) + "</div>" : "", d = parseInt(this._get(e, "firstDay"), 10), d = isNaN(d) ? 0 : d, u = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), g = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", x = 0; x < Y[0]; x++) {
                for (k = "", this.maxRows = 4, C = 0; C < Y[1]; C++) {
                    if (D = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay)), T = " ui-corner-all", S = "", G) {
                        if (S += "<div class='ui-datepicker-group", Y[1] > 1) switch (C) {
                            case 0:
                                S += " ui-datepicker-group-first", T = " ui-corner-" + (R ? "right" : "left");
                                break;
                            case Y[1] - 1:
                                S += " ui-datepicker-group-last", T = " ui-corner-" + (R ? "left" : "right");
                                break;
                            default:
                                S += " ui-datepicker-group-middle", T = ""
                        }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? R ? s : n : "") + (/all|right/.test(T) && 0 === x ? R ? n : s : "") + this._generateMonthYearHeader(e, Z, ee, Q, J, x > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", E = u ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", _ = 0; 7 > _; _++) $ = (_ + d) % 7, E += "<th scope='col'" + ((_ + d + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[$] + "'>" + p[$] + "</span></th>";
                    for (S += E + "</tr></thead><tbody>", A = this._getDaysInMonth(ee, Z), ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), N = (this._getFirstDayOfMonth(ee, Z) - d + 7) % 7, M = Math.ceil((N + A) / 7), P = G && this.maxRows > M ? this.maxRows : M, this.maxRows = P, O = this._daylightSavingAdjust(new Date(ee, Z, 1 - N)), j = 0; P > j; j++) {
                        for (S += "<tr>", z = u ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(O) + "</td>" : "", _ = 0; 7 > _; _++) L = m ? m.apply(e.input ? e.input[0] : null, [O]) : [!0, ""], I = O.getMonth() !== Z, F = I && !y || !L[0] || Q && Q > O || J && O > J, z += "<td class='" + ((_ + d + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (I ? " ui-datepicker-other-month" : "") + (O.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === O.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (I && !v ? "" : " " + L[1] + (O.getTime() === X.getTime() ? " " + this._currentClass : "") + (O.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (I && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (I && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === W.getTime() ? " ui-state-highlight" : "") + (O.getTime() === X.getTime() ? " ui-state-active" : "") + (I ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                        S += z + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, ee++), S += "</tbody></table>" + (G ? "</div>" + (Y[0] > 0 && C === Y[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += S
                }
                w += k
            }
            return w += c, e._keyEvent = !1, w
        },
        _generateMonthYearHeader: function(e, t, i, n, o, s, r, a) {
            var l, c, d, u, h, p, f, g, m = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                w = "";
            if (s || !m) w += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, c = o && o.getFullYear() === i, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", d = 0; 12 > d; d++)(!l || d >= n.getMonth()) && (!c || d <= o.getMonth()) && (w += "<option value='" + d + "'" + (d === t ? " selected='selected'" : "") + ">" + a[d] + "</option>");
                w += "</select>"
            }
            if (y || (b += w + (!s && m && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", s || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? h : t
                        }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = o ? Math.min(g, o.getFullYear()) : g, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"), y && (b += (!s && m && v ? "" : "&#xa0;") + w), b += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var n = e.selectedYear + ("Y" === i ? t : 0),
                o = e.selectedMonth + ("M" === i ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(n, o)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, o, s)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                o = i && i > t ? i : t;
            return n && o > n ? n : o
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, i, n) {
            var o = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : o[0] * o[1]), 1));
            return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var i, n, o = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                r = null,
                a = null,
                l = this._get(e, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!o || t.getTime() >= o.getTime()) && (!s || t.getTime() <= s.getTime()) && (!r || t.getFullYear() >= r) && (!a || t.getFullYear() <= a)
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, i, n) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var o = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), o, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).on("mousedown", e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.12.1";
    e.datepicker;
    e.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || e.ui.safeBlur(e.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", t)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, i) {
            var n = !1,
                o = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +e(this).css("z-index")
                }).get(),
                s = Math.max.apply(null, o);
            return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), n = !0), n && !i && this._trigger("focus", t), n
        },
        open: function() {
            var t = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = e(e.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).trigger("focus")
        },
        _keepFocus: function(t) {
            function i() {
                var t = e.ui.safeActiveElement(this.document[0]),
                    i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            o = i.filter(":last");
                        t.target !== o[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== n[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                            o.trigger("focus")
                        }), t.preventDefault()) : (this._delay(function() {
                            n.trigger("focus")
                        }), t.preventDefault())
                    }
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: e("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title ? e.text(this.options.title) : e.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function() {
            var t = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (e.each(i, function(i, n) {
                var o, s;
                n = e.isFunction(n) ? {
                    click: n,
                    text: i
                } : n, n = e.extend({
                    type: "button"
                }, n), o = n.click, s = {
                    icon: n.icon,
                    iconPosition: n.iconPosition,
                    showLabel: n.showLabel,
                    icons: n.icons,
                    text: n.text
                }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, e("<button></button>", n).button(s).appendTo(t.uiButtonSet).on("click", function() {
                    o.apply(t.element[0], arguments)
                })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, o) {
                    i._addClass(e(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, t(o))
                },
                drag: function(e, n) {
                    i._trigger("drag", e, t(n))
                },
                stop: function(o, s) {
                    var r = s.offset.left - i.document.scrollLeft(),
                        a = s.offset.top - i.document.scrollTop();
                    n.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a,
                        of: i.window
                    }, i._removeClass(e(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", o, t(s))
                }
            })
        },
        _makeResizable: function() {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var i = this,
                n = this.options,
                o = n.resizable,
                s = this.uiDialog.css("position"),
                r = "string" == typeof o ? o : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function(n, o) {
                    i._addClass(e(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, t(o))
                },
                resize: function(e, n) {
                    i._trigger("resize", e, t(n))
                },
                stop: function(o, s) {
                    var r = i.uiDialog.offset(),
                        a = r.left - i.document.scrollLeft(),
                        l = r.top - i.document.scrollTop();
                    n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                        of: i.window
                    }, i._removeClass(e(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", o, t(s))
                }
            }).css("position", s)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget(), this._focusedElement = e(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                i = e.inArray(this, t); - 1 !== i && t.splice(i, 1)
        },
        _trackingInstances: function() {
            var e = this.document.data("ui-dialog-instances");
            return e || (e = [], this.document.data("ui-dialog-instances", e)), e
        },
        _minHeight: function() {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                n = !1,
                o = {};
            e.each(t, function(e, t) {
                i._setOption(e, t), e in i.sizeRelatedOptions && (n = !0), e in i.resizableRelatedOptions && (o[e] = t)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function(t, i) {
            var n, o, s = this.uiDialog;
            "disabled" !== t && (this._super(t, i), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                label: e("<a>").text("" + this.options.closeText).html()
            }), "draggable" === t && (n = s.is(":data(ui-draggable)"), n && !i && s.draggable("destroy"), !n && i && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (o = s.is(":data(ui-resizable)"), o && !i && s.resizable("destroy"), o && "string" == typeof i && s.resizable("option", "handles", i), o || i === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var e, t, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), t = Math.max(0, n.minHeight - e), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - e) : "none", "auto" === n.height ? this.element.css({
                minHeight: t,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() {
                    t = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(e) {
                        t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = e("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var e = this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(e, t) {
            "dialogClass" === e && this.uiDialog.removeClass(this.options.dialogClass).addClass(t), this._superApply(arguments)
        }
    });
    e.ui.dialog
}),
function(e, t, i) {
    function n(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, i, o, s, r, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (i = 0; i < t.options.aliases.length; i++) e.push(t.options.aliases[i].toLowerCase());
                for (o = n(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) r = e[s], a = r.split("."), 1 === a.length ? _[a[0]] = o : (!_[a[0]] || _[a[0]] instanceof Boolean || (_[a[0]] = new Boolean(_[a[0]])), _[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function s(e) {
        var t = x.className,
            i = _._config.classPrefix || "";
        if (k && (t = t.baseVal), _._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            t = t.replace(n, "$1" + i + "js$2")
        }
        _._config.enableClasses && (t += " " + i + e.join(" " + i), k ? x.className.baseVal = t : x.className = t)
    }

    function r() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : k ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a() {
        var e = t.body;
        return e || (e = r(k ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, i, n, o) {
        var s, l, c, d, u = "modernizr",
            h = r("div"),
            p = a();
        if (parseInt(n, 10))
            for (; n--;) c = r("div"), c.id = o ? o[n] : u + (n + 1), h.appendChild(c);
        return s = r("style"), s.type = "text/css", s.id = "s" + u, (p.fake ? p : h).appendChild(s), p.appendChild(h), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), h.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), l = i(h, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = d, x.offsetHeight) : h.parentNode.removeChild(h), !!l
    }

    function c(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function d(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, i) {
            return t + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function h(e, t, i) {
        var o;
        for (var s in e)
            if (e[s] in t) return i === !1 ? e[s] : (o = t[e[s]], n(o, "function") ? u(o, i || t) : o);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f(t, n) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(p(t[o]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var s = []; o--;) s.push("(" + p(t[o]) + ":" + n + ")");
            return s = s.join(" or "), l("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return i
    }

    function g(e, t, o, s) {
        function a() {
            u && (delete $.style, delete $.modElem)
        }
        if (s = n(s, "undefined") ? !1 : s, !n(o, "undefined")) {
            var l = f(e, o);
            if (!n(l, "undefined")) return l
        }
        for (var u, h, p, g, m, v = ["modernizr", "tspan", "samp"]; !$.style && v.length;) u = !0, $.modElem = r(v.shift()), $.style = $.modElem.style;
        for (p = e.length, h = 0; p > h; h++)
            if (g = e[h], m = $.style[g], c(g, "-") && (g = d(g)), $.style[g] !== i) {
                if (s || n(o, "undefined")) return a(), "pfx" == t ? g : !0;
                try {
                    $.style[g] = o
                } catch (y) {}
                if ($.style[g] != m) return a(), "pfx" == t ? g : !0
            }
        return a(), !1
    }

    function m(e, t, i, o, s) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + T.join(r + " ") + r).split(" ");
        return n(t, "string") || n(t, "undefined") ? g(a, t, o, s) : (a = (e + " " + S.join(r + " ") + r).split(" "), h(a, t, i))
    }

    function v(e, t, n) {
        return m(e, i, i, t, n)
    }
    var y = [],
        b = [],
        w = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var i = this;
                setTimeout(function() {
                    t(i[e])
                }, 0)
            },
            addTest: function(e, t, i) {
                b.push({
                    name: e,
                    fn: t,
                    options: i
                })
            },
            addAsyncTest: function(e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        _ = function() {};
    _.prototype = w, _ = new _;
    var x = t.documentElement,
        k = "svg" === x.nodeName.toLowerCase(),
        C = w.testStyles = l;
    _.addTest("checked", function() {
        return C("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function(e) {
            var t = r("input");
            return t.setAttribute("type", "checkbox"), t.setAttribute("checked", "checked"), e.appendChild(t), 20 === t.offsetLeft
        })
    });
    var D = "Moz O ms Webkit",
        T = w._config.usePrefixes ? D.split(" ") : [];
    w._cssomPrefixes = T;
    var S = w._config.usePrefixes ? D.toLowerCase().split(" ") : [];
    w._domPrefixes = S;
    var E = {
        elem: r("modernizr")
    };
    _._q.push(function() {
        delete E.elem
    });
    var $ = {
        style: E.elem.style
    };
    _._q.unshift(function() {
        delete $.style
    }), w.testAllProps = m, w.testAllProps = v, _.addTest("flexbox", v("flexBasis", "1px", !0)), o(), s(y), delete w.addTest, delete w.addAsyncTest;
    for (var A = 0; A < _._q.length; A++) _._q[A]();
    e.Modernizr = _
}(window, document),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        var i, n = document.createElement(e || "div");
        for (i in t) n[i] = t[i];
        return n
    }

    function t(e) {
        for (var t = 1, i = arguments.length; i > t; t++) e.appendChild(arguments[t]);
        return e
    }

    function i(e, t, i, n) {
        var o = ["opacity", t, ~~(100 * e), i, n].join("-"),
            s = .01 + i / n * 100,
            r = Math.max(1 - (1 - e) / t * (100 - s), e),
            a = c.substring(0, c.indexOf("Animation")).toLowerCase(),
            l = a && "-" + a + "-" || "";
        return h[o] || (d.insertRule("@" + l + "keyframes " + o + "{0%{opacity:" + r + "}" + s + "%{opacity:" + e + "}" + (s + .01) + "%{opacity:1}" + (s + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + r + "}}", d.cssRules.length), h[o] = 1), o
    }

    function n(e, t) {
        var i, n, o = e.style;
        if (t = t.charAt(0).toUpperCase() + t.slice(1), void 0 !== o[t]) return t;
        for (n = 0; n < u.length; n++)
            if (i = u[n] + t, void 0 !== o[i]) return i
    }

    function o(e, t) {
        for (var i in t) e.style[n(e, i) || i] = t[i];
        return e
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) void 0 === e[n] && (e[n] = i[n])
        }
        return e
    }

    function r(e, t) {
        return "string" == typeof e ? e : e[t % e.length]
    }

    function a(e) {
        this.opts = s(e || {}, a.defaults, p)
    }

    function l() {
        function i(t, i) {
            return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
        }
        d.addRule(".spin-vml", "behavior:url(#default#VML)"), a.prototype.lines = function(e, n) {
            function s() {
                return o(i("group", {
                    coordsize: d + " " + d,
                    coordorigin: -c + " " + -c
                }), {
                    width: d,
                    height: d
                })
            }

            function a(e, a, l) {
                t(h, t(o(s(), {
                    rotation: 360 / n.lines * e + "deg",
                    left: ~~a
                }), t(o(i("roundrect", {
                    arcsize: n.corners
                }), {
                    width: c,
                    height: n.scale * n.width,
                    left: n.scale * n.radius,
                    top: -n.scale * n.width >> 1,
                    filter: l
                }), i("fill", {
                    color: r(n.color, e),
                    opacity: n.opacity
                }), i("stroke", {
                    opacity: 0
                }))))
            }
            var l, c = n.scale * (n.length + n.width),
                d = 2 * n.scale * c,
                u = -(n.width + n.length) * n.scale * 2 + "px",
                h = o(s(), {
                    position: "absolute",
                    top: u,
                    left: u
                });
            if (n.shadow)
                for (l = 1; l <= n.lines; l++) a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= n.lines; l++) a(l);
            return t(e, h)
        }, a.prototype.opacity = function(e, t, i, n) {
            var o = e.firstChild;
            n = n.shadow && n.lines || 0, o && t + n < o.childNodes.length && (o = o.childNodes[t + n], o = o && o.firstChild, o = o && o.firstChild, o && (o.opacity = i))
        }
    }
    var c, d, u = ["webkit", "Moz", "ms", "O"],
        h = {},
        p = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            scale: 1,
            corners: 1,
            color: "#000",
            opacity: .25,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 100,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "50%",
            left: "50%",
            shadow: !1,
            hwaccel: !1,
            position: "absolute"
        };
    if (a.defaults = {}, s(a.prototype, {
            spin: function(t) {
                this.stop();
                var i = this,
                    n = i.opts,
                    s = i.el = e(null, {
                        className: n.className
                    });
                if (o(s, {
                        position: n.position,
                        width: 0,
                        zIndex: n.zIndex,
                        left: n.left,
                        top: n.top
                    }), t && t.insertBefore(s, t.firstChild || null), s.setAttribute("role", "progressbar"), i.lines(s, i.opts), !c) {
                    var r, a = 0,
                        l = (n.lines - 1) * (1 - n.direction) / 2,
                        d = n.fps,
                        u = d / n.speed,
                        h = (1 - n.opacity) / (u * n.trail / 100),
                        p = u / n.lines;
                    ! function f() {
                        a++;
                        for (var e = 0; e < n.lines; e++) r = Math.max(1 - (a + (n.lines - e) * p) % u * h, n.opacity), i.opacity(s, e * n.direction + l, r, n);
                        i.timeout = i.el && setTimeout(f, ~~(1e3 / d))
                    }()
                }
                return i
            },
            stop: function() {
                var e = this.el;
                return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
            },
            lines: function(n, s) {
                function a(t, i) {
                    return o(e(), {
                        position: "absolute",
                        width: s.scale * (s.length + s.width) + "px",
                        height: s.scale * s.width + "px",
                        background: t,
                        boxShadow: i,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / s.lines * d + s.rotate) + "deg) translate(" + s.scale * s.radius + "px,0)",
                        borderRadius: (s.corners * s.scale * s.width >> 1) + "px"
                    })
                }
                for (var l, d = 0, u = (s.lines - 1) * (1 - s.direction) / 2; d < s.lines; d++) l = o(e(), {
                    position: "absolute",
                    top: 1 + ~(s.scale * s.width / 2) + "px",
                    transform: s.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: s.opacity,
                    animation: c && i(s.opacity, s.trail, u + d * s.direction, s.lines) + " " + 1 / s.speed + "s linear infinite"
                }), s.shadow && t(l, o(a("#000", "0 0 4px #000"), {
                    top: "2px"
                })), t(n, t(l, a(r(s.color, d), "0 0 1px rgba(0,0,0,.1)")));
                return n
            },
            opacity: function(e, t, i) {
                t < e.childNodes.length && (e.childNodes[t].style.opacity = i)
            }
        }), "undefined" != typeof document) {
        d = function() {
            var i = e("style", {
                type: "text/css"
            });
            return t(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet
        }();
        var f = o(e("group"), {
            behavior: "url(#default#VML)"
        });
        !n(f, "transform") && f.adj ? l() : c = n(f, "animation")
    }
    return a
});
var ClientRoute = {
    btnEko: ".js-Btn_eko",
    btnTopp: ".js-Btn_topp",
    btnBack: ".js-Btn_back",
    container: ".sf-ClientRoute__container",
    slideHome: ".js-Slide_home",
    slideEko: ".js-Slide_eko",
    slideTopp: ".js-Slide_topp",
    init: function() {
        $(this.slideHome).fadeIn();
        var e = $(this.slideHome).height(),
            t = $(this.slideEko).height(),
            i = $(this.slideTopp).height(),
            n = Math.max(e, i, t) - 20;
        $(this.slideHome).height(n), $(this.slideEko).height(n), $(this.slideTopp).height(n), this._bindEkoEvent(), this._bindToppEvent(), this._bindBackEvent(), this._openSlide()
    },
    _bindEkoEvent: function() {
        $(this.btnEko).on("click", function() {
            ClientRoute._ekoEvent()
        })
    },
    _bindToppEvent: function() {
        $(this.btnTopp).on("click", function() {
            ClientRoute._toppEvent()
        })
    },
    _bindBackEvent: function() {
        $(this.btnBack).on("click", function() {
            ClientRoute._backEvent()
        })
    },
    _ekoEvent: function() {
        $(this.slideHome).fadeOut("100"), $(this.slideEko).fadeIn("100"), $(this.slideTopp).fadeOut("100")
    },
    _toppEvent: function() {
        $(this.slideHome).fadeOut("100"), $(this.slideEko).fadeOut("100"), $(this.slideTopp).fadeIn("100")
    },
    _backEvent: function() {
        $(this.slideHome).fadeIn("100"), $(this.slideEko).fadeOut("100"), $(this.slideTopp).fadeOut("100")
    },
    _openSlide: function() {
        var e = new RegExp(/(f)=(\w*)/).exec(window.location.href);
        null != e && null != e[2] && null != document.getElementsByClassName("js-Slide_" + e[2]) && ("topp" === e[2] ? ClientRoute._toppEvent() : "eko" === e[2] && ClientRoute._ekoEvent(), ClientRoute._scrollTo())
    },
    _scrollTo: function() {
        var e = new RegExp(/(f)=(\w*)/).exec(window.location.href),
            t = new RegExp(/(o)=(\w*)/).exec(window.location.href);
        null != t && null != t[2] && null != document.getElementsByClassName("js-Slide_" + t[2]) && $("html, body").scrollTop($(".js-Slide_" + e[2] + "_" + t[2]).offset().top - 50)
    }
};
ClientRoute.init();
var dialogbox = {
    init: function(e) {
        this._bindOpenEvent(), this._bindCloseEvent(), this._bindResetPwdBtnEvent(), this._bindBackLoginBoxEvent()
    },
    _bindOpenEvent: function() {
        $(".js-BtnLogin").on("click", function() {
            dialogbox._openDialogBox()
        })
    },
    _bindCloseEvent: function() {
        $(".js-boxOverlay").on("click", function(e) {
            ($(e.target).hasClass("js-boxOverlay") || $(e.target).hasClass("js-boxBg")) && ($(".js-boxOverlay").removeClass("js-box--open"), $("body").css("overflow", "visible"), dialogbox._showLogBox())
        })
    },
    _bindResetPwdBtnEvent: function() {
        $(".js-forgotPwd").each(function() {
            $(this).on("click", function() {
                $(".js-boxOverlay").addClass("js-box--open"), $("body").css("overflow", "hidden"), dialogbox._showResetPwdBox(), $(".sf-LogBox__input[name=em]").focus()
            })
        })
    },
    _bindBackLoginBoxEvent: function() {
        $(".js-backBtn").on("click", function() {
            dialogbox._showLogBox()
        })
    },
    _showLogBox: function() {
        $(".js-resetPwdBox").css("display", "none"), $(".js-loginBox").css("display", "block"), $("input[name=em]").focus()
    },
    _showResetPwdBox: function() {
        $(".js-loginBox").css("display", "none"), $(".js-resetPwdBox").css("display", "block"), $("input[name=em]").focus()
    },
    _openDialogBox: function() {
        $(".js-boxOverlay").addClass("js-box--open"), $("body").css("overflow", "hidden"), $(".sf-LogBox__input[name=em]").focus()
    }
};
dialogbox.init();
var CgvMandatory = {
    mainContainer: "#main-content",
    overlayCGV: ".js-popup_cgv",
    overlayConfirm: ".js-popup_confirm",
    overlayPayment: ".js-popup_paymentPending",
    overlayPaymentClassNname: "js-popup_paymentPending",
    selector: ".js-cgv_accept",
    btnOk: ".js-popup_ok",
    btnPayment: ".js-popup_payment",
    btnCancel: ".js-popup_cancel",
    init: function() {
        this._bindCgvEvent(), this._bindCloseEvent()
    },
    _bindCgvEvent: function() {
        $(CgvMandatory.mainContainer).delegate(CgvMandatory.selector, "click", function(e) {
            if ($("#cgv_accept").is(":checked")) {
                if ("A" === this.tagName) {
                    e.preventDefault();
                    var t;
                    t = this.href, $(CgvMandatory.overlayConfirm).css({
                        display: "block"
                    }), $(CgvMandatory.btnPayment).on("click", function() {
                        $(CgvMandatory.overlayConfirm).css({
                            display: "none"
                        }), window.location = t, $(CgvMandatory.overlayPayment).css({
                            display: "block"
                        });
                        var e = {
                                color: "#fff",
                                top: "55%"
                            },
                            i = new Spinner(e).spin();
                        $(CgvMandatory.overlayPayment).append(i.el)
                    }), $(CgvMandatory.btnCancel).on("click", function() {
                        return $(CgvMandatory.overlayConfirm).css({
                            display: "none"
                        }), !1
                    })
                }
            } else e.preventDefault(), $(CgvMandatory.overlayCGV).css({
                display: "block"
            })
        }), $(CgvMandatory.btnOk).on("click", function() {
            $(CgvMandatory.overlayCGV).css({
                display: "none"
            })
        })
    },
    _bindCloseEvent: function() {
        $(".SF201608-PopUp__overlay").on("click", function(e) {
            ($(e.target).hasClass("js-popup_cgv") || $(e.target).hasClass("js-popup_confirm")) && $(".SF201608-PopUp__overlay").css({
                display: "none"
            })
        })
    }
};
CgvMandatory.init(),
    function(e) {
        "undefined" == typeof WSDEBUG && (window.WSDEBUG = !0);
        var t = function() {
                window.asyncWebshims || (window.asyncWebshims = {
                    cfg: [],
                    ready: []
                })
            },
            i = function() {
                window.jQuery && (e(jQuery), e = function() {
                    return window.webshims
                })
            };
        window.webshims = {
            setOptions: function() {
                t(), window.asyncWebshims.cfg.push(arguments)
            },
            ready: function() {
                t(), window.asyncWebshims.ready.push(arguments)
            },
            activeLang: function(e) {
                t(), window.asyncWebshims.lang = e
            },
            polyfill: function(e) {
                t(), window.asyncWebshims.polyfill = e
            },
            _curScript: function() {
                var e, t, i, n, o, s = document.currentScript;
                if (WSDEBUG && (s = !1), !s) {
                    try {
                        throw new Error("")
                    } catch (r) {
                        for (i = (r.sourceURL || r.stack || "").split("\n"), o = /(?:fil|htt|wid|abo|app|res)(.)+/i, t = 0; t < i.length; t++)
                            if (n = i[t].match(o)) {
                                i = n[0].replace(/[\:\s\(]+[\d\:\)\(\s]+$/, "");
                                break
                            }
                    }
                    for (e = document.scripts || document.getElementsByTagName("script"), t = 0; t < e.length; t++)
                        if (e[t].getAttribute("src") && (s = e[t], "interactive" == e[t].readyState || i == e[t].src)) {
                            WSDEBUG && (s.wsFoundCurrent = !0);
                            break
                        }
                }
                return s
            }()
        }, window.webshim = window.webshims, window.webshims.timer = setInterval(i, 0), i(), "function" == typeof define && define.amd && define("polyfiller", ["jquery"], e)
    }(function(e) {
        "use strict";

        function t(e) {
            return document.createElement(e)
        }
        var i, n, o = window.navigator,
            s = window.webshims,
            r = "dom-support",
            a = e.event.special,
            l = e([]),
            c = window.asyncWebshims,
            d = {},
            u = window.Object,
            h = function(e) {
                return e + "\n//# sourceURL=" + this.url
            },
            p = function(e) {
                return m.enhanceAuto || "auto" != e ? e : !1
            },
            f = {
                matchmedia: "matchMedia",
                xhr2: "filereader",
                promise: "es6",
                URL: "url"
            },
            g = "capture" in t("input");
        clearInterval(s.timer), d.advancedObjectProperties = d.objectAccessor = d.ES5 = !!("create" in u && "seal" in u), !d.ES5 || "toJSON" in Date.prototype || (d.ES5 = !1), n = e.support.hrefNormalized === !1 ? s._curScript.getAttribute("src", 4) : s._curScript.src, n = n.split("?")[0].slice(0, n.lastIndexOf("/") + 1) + "shims/", e.extend(s, {
            version: "1.15.10",
            cfg: {
                enhanceAuto: window.Audio && (!window.matchMedia || matchMedia("(min-device-width: 721px)").matches),
                waitReady: !0,
                loadStyles: !0,
                wsdoc: document,
                wspopover: {
                    appendTo: "auto",
                    hideOnBlur: !0
                },
                ajax: {
                    crossDomain: !0
                },
                loadScript: function(t, i) {
                    e.ajax(e.extend({}, m.ajax, {
                        url: t,
                        success: i,
                        dataType: "script",
                        cache: !0,
                        global: !1,
                        dataFilter: h
                    }))
                },
                basePath: n
            },
            support: d,
            bugs: {},
            modules: {},
            features: {},
            featureList: [],
            setOptions: function(t, i) {
                "string" == typeof t && arguments.length > 1 ? m[t] = e.isPlainObject(i) ? e.extend(!0, m[t] || {}, i) : i : "object" == typeof t && e.extend(!0, m, t)
            },
            _getAutoEnhance: p,
            addPolyfill: function(t, i) {
                i = i || {};
                var n = i.f || t;
                v[n] || (v[n] = [], s.featureList.push(n), m[n] = {}), v[n].push(t), i.options = e.extend(m[n], i.options), C(t, i), i.methodNames && e.each(i.methodNames, function(e, t) {
                    s.addMethodName(t)
                })
            },
            polyfill: function() {
                var e = {};
                return function(t) {
                    if (t || (t = s.featureList, WSDEBUG && s.warn("loading all features without specifing might be bad for performance")), "string" == typeof t && (t = t.split(" ")), WSDEBUG)
                        for (var i = 0; i < t.length; i++) e[t[i]] && s.error(t[i] + " already loaded, you might want to use updatePolyfill instead? see: afarkas.github.io/webshim/demos/#Shiv-dynamic-html5"), e[t[i]] = !0;
                    return s._polyfill(t)
                }
            }(),
            _polyfill: function(t) {
                var n, o, r = [];
                i.run || (n = -1 !== e.inArray("forms-ext", t), i(), o = n && !_["form-number-date-ui"].test() || !g && -1 !== e.inArray("mediacapture", t), n && -1 == e.inArray("forms", t) && (t.push("forms"), WSDEBUG && s.warn("need to load forms feature to use forms-ext feature.")), m.loadStyles && x.loadCSS("styles/shim" + (o ? "-ext" : "") + ".css")), m.waitReady && (e.readyWait++, b(t, function() {
                    e.ready(!0)
                })), e.each(t, function(e, t) {
                    return t = f[t] || t, v[t] ? (t !== v[t][0] && b(v[t], function() {
                        y(t, !0)
                    }), void(r = r.concat(v[t]))) : (WSDEBUG && s.error("could not find webshims-feature (aborted): " + t), void y(t, !0))
                }), k(r), e.each(t, function(e, t) {
                    var i = m[t];
                    i && ("mediaelement" == t && (i.replaceUI = p(i.replaceUI)) && i.plugins.unshift("mediacontrols"), i.plugins && i.plugins.length && k(m[t].plugins))
                })
            },
            reTest: function() {
                var t, i = function(i, n) {
                    var o = _[n],
                        s = n + "Ready";
                    !o || o.loaded || (o.test && e.isFunction(o.test) ? o.test([]) : o.test) || (a[s] && delete a[s], v[o.f], t.push(n))
                };
                return function(n) {
                    "string" == typeof n && (n = n.split(" ")), t = [], e.each(n, i), k(t)
                }
            }(),
            isReady: function(t, i) {
                if (t += "Ready", i) {
                    if (a[t] && a[t].add) return !0;
                    a[t] = e.extend(a[t] || {}, {
                        add: function(e) {
                            e.handler.call(this, t)
                        }
                    }), e(document).triggerHandler(t)
                }
                return !(!a[t] || !a[t].add) || !1
            },
            ready: function(t, i) {
                var n = arguments[2];
                if ("string" == typeof t && (t = t.split(" ")), n || (t = e.map(e.grep(t, function(e) {
                        return !y(e)
                    }), function(e) {
                        return e + "Ready"
                    })), !t.length) return void i(e, s, window, document);
                var o = t.shift(),
                    r = function() {
                        b(t, i, !0)
                    };
                e(document).one(o, r)
            },
            capturingEvents: function(t, i) {
                document.addEventListener && ("string" == typeof t && (t = [t]), e.each(t, function(t, n) {
                    var o = function(t) {
                        return t = e.event.fix(t), i && s.capturingEventPrevented && s.capturingEventPrevented(t), e.event.dispatch.call(this, t)
                    };
                    a[n] = a[n] || {}, a[n].setup || a[n].teardown || e.extend(a[n], {
                        setup: function() {
                            this.addEventListener(n, o, !0)
                        },
                        teardown: function() {
                            this.removeEventListener(n, o, !0)
                        }
                    })
                }))
            },
            register: function(t, i) {
                var n = _[t];
                if (!n) return void s.error("can't find module: " + t);
                n.loaded = !0;
                var o = function() {
                    i(e, s, window, document, void 0, n.options), y(t, !0)
                };
                n.d && n.d.length ? b(n.d, o) : o()
            },
            c: {},
            loader: {
                addModule: function(t, i) {
                    _[t] = i, i.name = i.name || t, i.c || (i.c = []), e.each(i.c, function(e, i) {
                        s.c[i] || (s.c[i] = []), s.c[i].push(t)
                    })
                },
                loadList: function() {
                    var t = [],
                        i = function(i, n) {
                            "string" == typeof n && (n = [n]), e.merge(t, n), x.loadScript(i, !1, n)
                        },
                        n = function(i, n) {
                            if (y(i) || -1 != e.inArray(i, t)) return !0;
                            var o, s = _[i];
                            return s ? (o = s.test && e.isFunction(s.test) ? s.test(n) : s.test, o ? (y(i, !0), !0) : !1) : !0
                        },
                        o = function(t, i) {
                            if (t.d && t.d.length) {
                                var o = function(t, o) {
                                    n(o, i) || -1 != e.inArray(o, i) || i.push(o)
                                };
                                e.each(t.d, function(t, i) {
                                    _[i] ? _[i].loaded || o(t, i) : v[i] && (e.each(v[i], o), b(v[i], function() {
                                        y(i, !0)
                                    }))
                                }), t.noAutoCallback || (t.noAutoCallback = !0)
                            }
                        };
                    return function(r) {
                        var a, l, c, d, u = [],
                            h = function(n, o) {
                                return d = o, e.each(s.c[o], function(i, n) {
                                    return -1 == e.inArray(n, u) || -1 != e.inArray(n, t) ? (d = !1, !1) : void 0
                                }), d ? (i("combos/" + d, s.c[d]), !1) : void 0
                            };
                        for (l = 0; l < r.length; l++) a = _[r[l]], a && !n(a.name, r) ? (a.css && m.loadStyles && x.loadCSS(a.css), a.loadInit && a.loadInit(), o(a, r), a.loaded || u.push(a.name), a.loaded = !0) : WSDEBUG && !a && s.warn("could not find: " + r[l]);
                        for (l = 0, c = u.length; c > l; l++) d = !1, a = u[l], -1 == e.inArray(a, t) && ("noCombo" != m.debug && e.each(_[a].c, h), d || i(_[a].src || a, a))
                    }
                }(),
                makePath: function(e) {
                    return -1 != e.indexOf("//") || 0 === e.indexOf("/") ? e : (-1 == e.indexOf(".") && (e += ".js"), m.addCacheBuster && (e += m.addCacheBuster), m.basePath + e)
                },
                loadCSS: function() {
                    var t, i = {};
                    return function(n) {
                        n = this.makePath(n), i[n] || (t = t || e("link, style")[0] || e("script")[0], i[n] = 1, e('<link rel="stylesheet" />').insertBefore(t).attr({
                            href: n
                        }))
                    }
                }(),
                loadScript: function() {
                    var t = {};
                    return function(i, n, o, s) {
                        if (s || (i = x.makePath(i)), !t[i]) {
                            var r = function() {
                                n && n(), o && ("string" == typeof o && (o = o.split(" ")), e.each(o, function(e, t) {
                                    _[t] && (_[t].afterLoad && _[t].afterLoad(), y(_[t].noAutoCallback ? t + "FileLoaded" : t, !0))
                                }))
                            };
                            t[i] = 1, m.loadScript(i, r, e.noop)
                        }
                    }
                }()
            }
        });
        var m = s.cfg,
            v = s.features,
            y = s.isReady,
            b = s.ready,
            w = s.addPolyfill,
            _ = s.modules,
            x = s.loader,
            k = x.loadList,
            C = x.addModule,
            D = s.bugs,
            T = [],
            S = {
                warn: 1,
                error: 1
            },
            E = e.fn,
            $ = t("video");
        s.addMethodName = function(e) {
                e = e.split(":");
                var t = e[1];
                1 == e.length ? (t = e[0], e = e[0]) : e = e[0], E[e] = function() {
                    return this.callProp(t, arguments)
                }
            }, E.callProp = function(t, i) {
                var n;
                return i || (i = []), this.each(function() {
                    var o = e.prop(this, t);
                    if (o && o.apply) {
                        if (n = o.apply(this, i), void 0 !== n) return !1
                    } else s.warn(t + " is not a method of " + this)
                }), void 0 !== n ? n : this
            }, s.activeLang = function() {
                "language" in o || (o.language = o.browserLanguage || "");
                var t = e.attr(document.documentElement, "lang") || o.language;
                return b("webshimLocalization", function() {
                        s.activeLang(t)
                    }),
                    function(e) {
                        if (e)
                            if ("string" == typeof e) t = e;
                            else if ("object" == typeof e) {
                            var i = arguments,
                                n = this;
                            b("webshimLocalization", function() {
                                s.activeLang.apply(n, i)
                            })
                        }
                        return t
                    }
            }(), s.errorLog = [], e.each(["log", "error", "warn", "info"], function(e, t) {
                s[t] = function(e) {
                    (S[t] && m.debug !== !1 || m.debug) && (s.errorLog.push(e), window.console && console.log && console[console[t] ? t : "log"](e))
                }
            }), WSDEBUG && (s._curScript.wsFoundCurrent || s.error("Could not detect currentScript! Use basePath to set script path.")),
            function() {
                e.isDOMReady = e.isReady;
                var t = function() {
                    e.isDOMReady = !0, y("DOM", !0), setTimeout(function() {
                        y("WINDOWLOAD", !0)
                    }, 9999)
                };
                i = function() {
                    if (!i.run) {
                        if (WSDEBUG && e.mobile && (e.mobile.textinput || e.mobile.rangeslider || e.mobile.button) && (s.info('jQM textinput/rangeslider/button detected waitReady was set to false. Use webshims.ready("featurename") to script against polyfilled methods/properties'), m.readyEvt || s.error('in a jQuery mobile enviroment: you should change the readyEvt to "pageinit".'), m.waitReady && s.error("in a jQuery mobile enviroment: you should change the waitReady to false.")), WSDEBUG && m.waitReady && e.isReady && s.warn("Call webshims.polyfill before DOM-Ready or set waitReady to false."), !e.isDOMReady && m.waitReady) {
                            var n = e.ready;
                            e.ready = function(e) {
                                return e !== !0 && document.body && t(), n.apply(this, arguments)
                            }, e.ready.promise = n.promise
                        }
                        m.readyEvt ? e(document).one(m.readyEvt, t) : e(t)
                    }
                    i.run = !0
                }, e(window).on("load", function() {
                    t(), setTimeout(function() {
                        y("WINDOWLOAD", !0)
                    }, 9)
                });
                var n = [],
                    o = function() {
                        1 == this.nodeType && s.triggerDomUpdate(this)
                    };
                e.extend(s, {
                    addReady: function(e) {
                        var t = function(t, i) {
                            s.ready("DOM", function() {
                                e(t, i)
                            })
                        };
                        n.push(t), m.wsdoc && t(m.wsdoc, l)
                    },
                    triggerDomUpdate: function(t) {
                        if (!t || !t.nodeType) return void(t && t.jquery && t.each(function() {
                            s.triggerDomUpdate(this)
                        }));
                        var i = t.nodeType;
                        if (1 == i || 9 == i) {
                            var o = t !== document ? e(t) : l;
                            e.each(n, function(e, i) {
                                i(t, o)
                            })
                        }
                    }
                }), E.clonePolyfill = E.clone, E.htmlPolyfill = function(t) {
                    if (!arguments.length) return e(this.clonePolyfill()).html();
                    var i = E.html.call(this, t);
                    return i === this && e.isDOMReady && this.each(o), i
                }, E.jProp = function() {
                    return this.pushStack(e(E.prop.apply(this, arguments) || []))
                }, e.each(["after", "before", "append", "prepend", "replaceWith"], function(t, i) {
                    E[i + "Polyfill"] = function(t) {
                        return t = e(t), E[i].call(this, t), e.isDOMReady && t.each(o), this
                    }
                }), e.each(["insertAfter", "insertBefore", "appendTo", "prependTo", "replaceAll"], function(t, i) {
                    E[i.replace(/[A-Z]/, function(e) {
                        return "Polyfill" + e
                    })] = function() {
                        return E[i].apply(this, arguments), e.isDOMReady && s.triggerDomUpdate(this), this
                    }
                }), E.updatePolyfill = function() {
                    return e.isDOMReady && s.triggerDomUpdate(this), this
                }, e.each(["getNativeElement", "getShadowElement", "getShadowFocusElement"], function(e, t) {
                    E[t] = function() {
                        return this.pushStack(this)
                    }
                })
            }(), WSDEBUG && (m.debug = !0), u.create && (s.objectCreate = function(t, i, n) {
                WSDEBUG && i && s.error("second argument for webshims.objectCreate is only available with DOM support");
                var o = u.create(t);
                return n && (o.options = e.extend(!0, {}, o.options || {}, n), n = o.options), o._create && e.isFunction(o._create) && o._create(n), o
            }), C("swfmini", {
                test: function() {
                    return window.swfobject && !window.swfmini && (window.swfmini = window.swfobject), "swfmini" in window
                },
                c: [16, 7, 2, 8, 1, 12, 23]
            }), _.swfmini.test(), C("sizzle", {
                test: e.expr.filters
            }), w("es5", {
                test: !(!d.ES5 || !Function.prototype.bind),
                d: ["sizzle"]
            }), w("dom-extend", {
                f: r,
                noAutoCallback: !0,
                d: ["es5"],
                c: [16, 7, 2, 15, 30, 3, 8, 4, 9, 10, 25, 31, 34]
            }), t("picture"), w("picture", {
                test: "picturefill" in window || !!window.HTMLPictureElement || "respimage" in window,
                d: ["matchMedia"],
                c: [18],
                loadInit: function() {
                    y("picture", !0)
                }
            }), w("matchMedia", {
                test: !(!window.matchMedia || !matchMedia("all").addListener),
                c: [18]
            }), w("sticky", {
                test: -1 != (e(t("b")).attr("style", "position: -webkit-sticky; position: sticky").css("position") || "").indexOf("sticky"),
                d: ["es5", "matchMedia"]
            }), w("es6", {
                test: !!(Math.imul && Number.MIN_SAFE_INTEGER && u.is && window.Promise && Promise.all),
                d: ["es5"]
            }), w("geolocation", {
                test: "geolocation" in o,
                options: {
                    destroyWrite: !0
                },
                c: [21]
            }),
            function() {
                w("canvas", {
                    src: "excanvas",
                    test: "getContext" in t("canvas"),
                    options: {
                        type: "flash"
                    },
                    noAutoCallback: !0,
                    loadInit: function() {
                        var e = this.options.type;
                        !e || -1 === e.indexOf("flash") || _.swfmini.test() && !swfmini.hasFlashPlayerVersion("9.0.0") || (this.src = "flash" == e ? "FlashCanvas/flashcanvas" : "FlashCanvasPro/flashcanvas")
                    },
                    methodNames: ["getContext"],
                    d: [r]
                })
            }();
        var A = "getUserMedia" in o;
        w("usermedia-core", {
                f: "usermedia",
                test: A && window.URL,
                d: ["url", r]
            }), w("usermedia-shim", {
                f: "usermedia",
                test: !!(A || o.webkitGetUserMedia || o.mozGetUserMedia || o.msGetUserMedia),
                d: ["url", "mediaelement", r]
            }), w("mediacapture", {
                test: g,
                d: ["swfmini", "usermedia", r, "filereader", "forms", "canvas"]
            }),
            function() {
                var i, n, a = "form-shim-extend",
                    l = "formvalidation",
                    c = "form-number-date-api",
                    u = !1,
                    h = !1,
                    f = !1,
                    g = {},
                    v = t("progress"),
                    y = t("output"),
                    b = function() {
                        var n, s, r = "1(",
                            c = t("input");
                        if (s = e('<fieldset><textarea required="" /></fieldset>')[0], d.inputtypes = g, e.each(["range", "date", "datetime-local", "month", "color", "number"], function(e, t) {
                                c.setAttribute("type", t), g[t] = c.type == t && (c.value = r) && c.value != r
                            }), d.datalist = !!("options" in t("datalist") && window.HTMLDataListElement), d[l] = "checkValidity" in c, d.fieldsetelements = "elements" in s, d.fieldsetdisabled = "disabled" in s) {
                            try {
                                s.querySelector(":invalid") && (s.disabled = !0, n = !s.querySelector(":invalid") && s.querySelector(":disabled"))
                            } catch (p) {}
                            d.fieldsetdisabled = !!n
                        }
                        if (d[l] && (h = !(d.fieldsetdisabled && d.fieldsetelements && "value" in v && "value" in y), f = h && /Android/i.test(o.userAgent), u = window.opera || D.bustedValidity || h || !d.datalist, !u && g.number)) {
                            u = !0;
                            try {
                                c.type = "number", c.value = "", c.stepUp(), u = "1" != c.value
                            } catch (m) {}
                        }
                        return D.bustedValidity = u, i = d[l] && !u ? "form-native-extend" : a, b = e.noop, !1
                    },
                    x = function(t) {
                        var i = !0;
                        return t._types || (t._types = t.types.split(" ")),
                            e.each(t._types, function(e, t) {
                                return t in g && !g[t] ? (i = !1, !1) : void 0
                            }), i
                    };
                s.validationMessages = s.validityMessages = {
                    langSrc: "i18n/formcfg-",
                    availableLangs: "ar bg ca cs el es fa fi fr he hi hu it ja lt nl no pl pt pt-BR pt-PT ru sv zh-CN zh-TW".split(" ")
                }, s.formcfg = e.extend({}, s.validationMessages), s.inputTypes = {}, w("form-core", {
                    f: "forms",
                    test: b,
                    d: ["es5"],
                    options: {
                        placeholderType: "value",
                        messagePopover: {},
                        list: {
                            popover: {
                                constrainWidth: !0
                            }
                        },
                        iVal: {
                            sel: ".ws-validate",
                            handleBubble: "hide",
                            recheckDelay: 400
                        }
                    },
                    methodNames: ["setCustomValidity", "checkValidity", "setSelectionRange"],
                    c: [16, 7, 2, 8, 1, 15, 30, 3, 31]
                }), n = m.forms, w("form-native-extend", {
                    f: "forms",
                    test: function(t) {
                        return b(), !d[l] || u || -1 == e.inArray(c, t || []) || _[c].test()
                    },
                    d: ["form-core", r, "form-message"],
                    c: [6, 5, 14, 29]
                }), w(a, {
                    f: "forms",
                    test: function() {
                        return b(), d[l] && !u
                    },
                    d: ["form-core", r, "sizzle"],
                    c: [16, 15, 28]
                }), w(a + "2", {
                    f: "forms",
                    test: function() {
                        return b(), d[l] && !h
                    },
                    d: [a],
                    c: [27]
                }), w("form-message", {
                    f: "forms",
                    test: function(e) {
                        return b(), !(n.customMessages || !d[l] || u || !_[i].test(e))
                    },
                    d: [r],
                    c: [16, 7, 15, 30, 3, 8, 4, 14, 28]
                }), w(c, {
                    f: "forms-ext",
                    options: {
                        types: "date time range number"
                    },
                    test: function() {
                        b();
                        var e = !u;
                        return e && (e = x(this.options)), e
                    },
                    methodNames: ["stepUp", "stepDown"],
                    d: ["forms", r],
                    c: [6, 5, 17, 14, 28, 29, 33]
                }), C("range-ui", {
                    options: {},
                    noAutoCallback: !0,
                    test: function() {
                        return !!E.rangeUI
                    },
                    d: ["es5"],
                    c: [6, 5, 9, 10, 17, 11]
                }), w("form-number-date-ui", {
                    f: "forms-ext",
                    test: function() {
                        var e = this.options;
                        return e.replaceUI = p(e.replaceUI), b(), !e.replaceUI && f && (e.replaceUI = !0), !e.replaceUI && x(e)
                    },
                    d: ["forms", r, c, "range-ui"],
                    options: {
                        widgets: {
                            calculateWidth: !0,
                            animate: !0
                        }
                    },
                    c: [6, 5, 9, 10, 17, 11]
                }), w("form-datalist", {
                    f: "forms",
                    test: function() {
                        return b(), f && (n.customDatalist = !0), d.datalist && !n.fD
                    },
                    d: ["form-core", r],
                    c: [16, 7, 6, 2, 9, 15, 30, 31, 28, 33]
                })
            }();
        var N = "FileReader" in window && "FormData" in window;
        return w("filereader-xhr", {
                f: "filereader",
                test: N,
                d: [r, "swfmini"],
                c: [25, 27]
            }), w("canvas-blob", {
                f: "filereader",
                methodNames: ["toBlob"],
                test: !(N && !t("canvas").toBlob)
            }), w("details", {
                test: "open" in t("details"),
                d: [r],
                options: {
                    text: "Details"
                },
                c: [21, 22]
            }), w("url", {
                test: function() {
                    var e = !1;
                    try {
                        e = new URL("b", "http://a"), e = !(!e.searchParams || "http://a/b" != e.href)
                    } catch (t) {}
                    return e
                },
                d: ["es5"]
            }),
            function() {
                s.mediaelement = {};
                var i = t("track");
                if (d.mediaelement = "canPlayType" in $, d.texttrackapi = "addTextTrack" in $, d.track = "kind" in i, t("audio"), !(D.track = !d.texttrackapi)) try {
                    D.track = !("oncuechange" in $.addTextTrack("metadata"))
                } catch (n) {}
                w("mediaelement-core", {
                    f: "mediaelement",
                    noAutoCallback: !0,
                    options: {
                        jme: {},
                        plugins: [],
                        vars: {},
                        params: {},
                        attrs: {},
                        changeSWF: e.noop
                    },
                    methodNames: ["play", "pause", "canPlayType", "mediaLoad:load"],
                    d: ["swfmini"],
                    c: [16, 7, 2, 8, 1, 12, 13, 23]
                }), w("mediaelement-jaris", {
                    f: "mediaelement",
                    d: ["mediaelement-core", r],
                    test: function() {
                        var e = this.options;
                        return !d.mediaelement || s.mediaelement.loadSwf ? !1 : (e.preferFlash && !_.swfmini.test() && (e.preferFlash = !1), !(e.preferFlash && swfmini.hasFlashPlayerVersion("11.3")))
                    },
                    c: [21, 25]
                }), w("track", {
                    options: {
                        positionDisplay: !0,
                        override: D.track
                    },
                    test: function() {
                        var e = this.options;
                        return e.override = p(e.override), !e.override && !D.track
                    },
                    d: ["mediaelement", r],
                    methodNames: ["addTextTrack"],
                    c: [21, 12, 13, 22, 34]
                }), C("jmebase", {
                    src: "jme/base",
                    c: [98, 99, 97]
                }), e.each([
                    ["mediacontrols", {
                        c: [98, 99],
                        css: "jme/controls.css"
                    }],
                    ["playlist", {
                        c: [98, 97]
                    }],
                    ["alternate-media"]
                ], function(t, i) {
                    C(i[0], e.extend({
                        src: "jme/" + i[0],
                        d: ["jmebase"]
                    }, i[1]))
                }), C("track-ui", {
                    d: ["track", r]
                })
            }(), w("feature-dummy", {
                test: !0,
                loaded: !0,
                c: T
            }), s.$ = e, e.webshims = s, e.webshim = webshim, s.callAsync = function() {
                s.callAsync = e.noop, c && (c.cfg && (c.cfg.length || (c.cfg = [
                    [c.cfg]
                ]), e.each(c.cfg, function(e, t) {
                    s.setOptions.apply(s, t)
                })), c.ready && e.each(c.ready, function(e, t) {
                    s.ready.apply(s, t)
                }), c.lang && s.activeLang(c.lang), "polyfill" in c && s.polyfill(c.polyfill)), s.isReady("jquery", !0)
            }, s.callAsync(), s
    }), webshims.register("form-core", function(e, t, i, n, o, s) {
        "use strict";
        t.capturingEventPrevented = function(t) {
            if (!t._isPolyfilled) {
                var i = t.isDefaultPrevented,
                    n = t.preventDefault;
                t.preventDefault = function() {
                    return clearTimeout(e.data(t.target, t.type + "DefaultPrevented")), e.data(t.target, t.type + "DefaultPrevented", setTimeout(function() {
                        e.removeData(t.target, t.type + "DefaultPrevented")
                    }, 30)), n.apply(this, arguments)
                }, t.isDefaultPrevented = function() {
                    return !(!i.apply(this, arguments) && !e.data(t.target, t.type + "DefaultPrevented"))
                }, t._isPolyfilled = !0
            }
        };
        var r = t.modules,
            a = t.support,
            l = function(t) {
                return (e.prop(t, "validity") || {
                    valid: 1
                }).valid
            },
            c = function() {
                var i = ["form-validation"];
                e(n).off(".lazyloadvalidation"), s.lazyCustomMessages && (s.customMessages = !0, i.push("form-message")), t._getAutoEnhance(s.customDatalist) && (s.fD = !0, i.push("form-datalist")), s.addValidators && i.push("form-validators"), t.reTest(i)
            },
            d = function() {
                var i, o, r = e.expr[":"],
                    c = /^(?:form|fieldset)$/i,
                    d = function(t) {
                        var i = !1;
                        return e(t).jProp("elements").each(function() {
                            return !c.test(this.nodeName || "") && (i = r.invalid(this)) ? !1 : void 0
                        }), i
                    };
                if (e.extend(r, {
                        "valid-element": function(t) {
                            return c.test(t.nodeName || "") ? !d(t) : !(!e.prop(t, "willValidate") || !l(t))
                        },
                        "invalid-element": function(t) {
                            return c.test(t.nodeName || "") ? d(t) : !(!e.prop(t, "willValidate") || l(t))
                        },
                        "required-element": function(t) {
                            return !(!e.prop(t, "willValidate") || !e.prop(t, "required"))
                        },
                        "user-error": function(t) {
                            return e.prop(t, "willValidate") && e(t).getShadowElement().hasClass(s.iVal.errorClass || "user-error")
                        },
                        "optional-element": function(t) {
                            return !(!e.prop(t, "willValidate") || e.prop(t, "required") !== !1)
                        }
                    }), ["valid", "invalid", "required", "optional"].forEach(function(t) {
                        r[t] = e.expr[":"][t + "-element"]
                    }), a.fieldsetdisabled && !e('<fieldset disabled=""><input /><input /></fieldset>').find(":disabled").filter(":disabled").is(":disabled") && (i = e.find.matches, o = {
                        ":disabled": 1,
                        ":enabled": 1
                    }, e.find.matches = function(e, t) {
                        return o[e] ? i.call(this, "*" + e, t) : i.apply(this, arguments)
                    }, e.extend(r, {
                        enabled: function(t) {
                            return "disabled" in t && t.disabled === !1 && !e.find.matchesSelector(t, "fieldset[disabled] *")
                        },
                        disabled: function(t) {
                            return t.disabled === !0 || "disabled" in t && e.find.matchesSelector(t, "fieldset[disabled] *")
                        }
                    })), "unknown" == typeof n.activeElement) {
                    var u = r.focus;
                    r.focus = function() {
                        try {
                            return u.apply(this, arguments)
                        } catch (e) {
                            t.error(e)
                        }
                        return !1
                    }
                }
            },
            u = {
                noAutoCallback: !0,
                options: s
            },
            h = t.loader.addModule,
            p = function(e, i, n) {
                c(), t.ready("form-validation", function() {
                    e[i].apply(e, n)
                })
            },
            f = "transitionDelay" in n.documentElement.style ? "" : " no-transition",
            g = t.cfg.wspopover;
        h("form-validation", e.extend({
            d: ["form-message"]
        }, u)), h("form-validators", e.extend({}, u)), a.formvalidation && !t.bugs.bustedValidity && t.capturingEvents(["invalid"], !0), e.expr.filters ? d() : t.ready("sizzle", d), t.triggerInlineForm = function(t, i) {
            e(t).trigger(i)
        }, g.position || g.position === !1 || (g.position = {
            at: "left bottom",
            my: "left top",
            collision: "fit flip"
        }), t.wsPopover = {
            id: 0,
            _create: function() {
                this.options = e.extend(!0, {}, g, this.options), this.id = t.wsPopover.id++, this.eventns = ".wsoverlay" + this.id, this.timers = {}, this.element = e('<div class="ws-popover' + f + '" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'), this.contentElement = e(".ws-po-box", this.element), this.lastElement = e([]), this.bindElement(), this.element.data("wspopover", this)
            },
            options: {},
            content: function(e) {
                this.contentElement.html(e)
            },
            bindElement: function() {
                var e = this,
                    t = function() {
                        e.stopBlur = !1
                    };
                this.preventBlur = function(i) {
                    e.stopBlur = !0, clearTimeout(e.timers.stopBlur), e.timers.stopBlur = setTimeout(t, 9)
                }, this.element.on({
                    mousedown: this.preventBlur
                })
            },
            show: function() {
                p(this, "show", arguments)
            }
        }, t.validityAlert = {
            showFor: function() {
                p(this, "showFor", arguments)
            }
        }, t.getContentValidationMessage = function(i, n, o) {
            var s;
            t.errorbox && t.errorbox.initIvalContentMessage && t.errorbox.initIvalContentMessage(i);
            var r = (t.getOptions && t.errorbox ? t.getOptions(i, "errormessage", !1, !0) : e(i).data("errormessage")) || i.getAttribute("x-moz-errormessage") || "";
            return o && r[o] ? r = r[o] : r && (n = n || e.prop(i, "validity") || {
                valid: 1
            }, n.valid && (r = "")), "object" == typeof r && (n = n || e.prop(i, "validity") || {
                valid: 1
            }, n.customError && (s = e.data(i, "customMismatchedRule")) && r[s] && "string" == typeof r[s] ? r = r[s] : n.valid || (e.each(n, function(e, t) {
                return t && "valid" != e && r[e] ? (r = r[e], !1) : void 0
            }), "object" == typeof r && (n.typeMismatch && r.badInput && (r = r.badInput), n.badInput && r.typeMismatch && (r = r.typeMismatch)))), "object" == typeof r && (r = r.defaultMessage), t.replaceValidationplaceholder && (r = t.replaceValidationplaceholder(i, r)), r || ""
        }, t.refreshCustomValidityRules = e.noop, e.fn.getErrorMessage = function(i) {
            var n = "",
                o = this[0];
            return o && (n = t.getContentValidationMessage(o, !1, i) || e.prop(o, "customValidationMessage") || e.prop(o, "validationMessage") || ""), n
        }, e.event.special.valuevalidation = {
            setup: function() {
                t.error("valuevalidation was renamed to validatevalue!")
            }
        }, e.event.special.validatevalue = {
            setup: function() {
                var t = e(this).data() || e.data(this, {});
                "validatevalue" in t || (t.validatevalue = !0)
            }
        }, e(n).on("focusin.lazyloadvalidation mousedown.lazyloadvalidation touchstart.lazyloadvalidation", function(e) {
            "form" in e.target && c()
        }), t.ready("WINDOWLOAD", c), r["form-number-date-ui"].loaded && !s.customMessages && (r["form-number-date-api"].test() || a.inputtypes.range && a.inputtypes.color) && t.isReady("form-number-date-ui", !0), t.ready("DOM", function() {
            n.querySelector(".ws-custom-file") && t.reTest(["form-validation"])
        }), s.addValidators && s.fastValidators && t.reTest(["form-validators", "form-validation"]), "complete" == n.readyState && t.isReady("WINDOWLOAD", !0)
    });
var toggleTool = function(e) {
    var t = e,
        i = t.data("tool");
    return t.hasClass("toggled") ? (t.removeClass("toggled"), $("." + i).hide(), !0) : ($(".toggle-tool.toggled").each(function(e) {
        $(this).data("tool") !== i && ($(this).removeClass("toggled"), $("." + $(this).data("tool")).hide())
    }), t.addClass("toggled"), void $("." + i).show("fast", function() {
        if ($("HTML, BODY").hasClass("lt-ie9")) $("input").placeholder(), $('input[type="password"]').blur(), $('input[type="text"]').blur(), "signin" == i && setTimeout(function() {
            document.getElementById("submit-signin").focus()
        }, 10);
        else {
            var e = document.all && document.addEventListener && !window.atob;
            e && $("input[placeholder]").each(function() {
                "" == $(this).val() && $(this).val($(this).attr("placeholder")), $(this).focus(function() {
                    "" != $(this).val() && $(this).val() != $(this).attr("placeholder") || $(this).val("")
                }), $(this).blur(function() {
                    "" == $(this).val() && $(this).val($(this).attr("placeholder"))
                })
            })
        }
        "quick-search" == i && setTimeout(function() {
            $('.quick-search input[type="text"]').focus()
        }, 10)
    }))
};
$(function() {
    var e = document.all && document.addEventListener && !window.atob;
    $("HTML, BODY").hasClass("lt-ie9") ? $("input").placeholder() : e && $("input[placeholder]").each(function() {
        "" == $(this).val() && $(this).val($(this).attr("placeholder")), $(this).focus(function() {
            "" != $(this).val() && $(this).val() != $(this).attr("placeholder") || $(this).val("")
        }), $(this).blur(function() {
            "" == $(this).val() && $(this).val($(this).attr("placeholder"))
        })
    }), $(".toggle-tool").click(function() {
        toggleTool($(this))
    }), $(document).on("mousedown", function(e) {
        0 === $(e.target).closest(".tool").length && 0 === $(e.target).closest(".toggle-tool").length && ($(".toggle-tool").removeClass("toggled"), $(".tool").hide())
    }), $(document).on("touchstart", function(e) {
        0 === $(e.target).closest(".tool").length && 0 === $(e.target).closest(".toggle-tool").length && ($(".toggle-tool").removeClass("toggled"), $(".tool").hide())
    }), $(".js-Banner--home").flexslider({
        namespace: "sf-Banner__",
        animation: "fade",
        directionNav: !1,
        slideshow: !0,
        slideshowSpeed: 7e3,
        controlNav: !0
    }), $(".SF201701-HomeSliderIntensity .flexslider").flexslider({
        animation: "slide",
        itemWidth: 230,
        itemMargin: 5,
        controlNav: !1,
        minItems: 1,
        maxItems: 3
    }), $(".js-SliderIntensite").flexslider({
        controlNav: !0,
        animationLoop: !1,
        slideshow: !1,
        controlsContainer: ".SF201701-SliderIntensite",
        manualControls: ".js-SliderIntensite__nav ul li",
        startAt: linkToSlide("slide")
    }), $(".fancy").fancybox({
        maxWidth: 800,
        autoHeight: !0,
        fitToView: !0,
        autoSize: !1,
        closeClick: !1,
        openEffect: "none",
        closeEffect: "none"
    }), $("#flexslider_paper_press").flexslider({
        animation: "slide",
        animationLoop: !0,
        slideshow: !1,
        itemWidth: 497,
        animationSpeed: 2200,
        minItems: 3,
        maxItems: 3,
        move: 3,
        controlNav: !1,
        video: !0,
        start: function(e) {
            $.flexloader(e)
        },
        after: function(e) {
            $.flexloader(e)
        }
    }), $(".fancypress").fancybox({
        autoHeight: !1,
        fitToView: !1,
        autoSize: !1,
        closeClick: !1,
        openEffect: "none",
        closeEffect: "none"
    }), $("#carousel").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !0,
        slideshow: !1,
        slideshowSpeed: 9e3,
        animationSpeed: 2200,
        itemWidth: 210,
        itemMargin: 40,
        asNavFor: "#slider",
        pauseOnHover: !0
    }), $("#slider").flexslider({
        animation: "slide",
        controlNav: !1,
        directionNav: !1,
        animationLoop: !1,
        slideshow: !1,
        video: !0,
        sync: "#carousel"
    }), $(".slider-classrooms").flexslider({
        animation: "slide",
        controlNav: !0,
        directionNav: !1,
        slideshow: !0,
        controlsContainer: ".slider-classrooms",
        manualControls: ".slider-classrooms-nav li"
    }), $(".zoom").fancybox({
        openEffect: "elastic",
        closeEffect: "elastic"
    }), $(".innertip").qtip({
        content: {
            text: function(e, t) {
                return $(this).find(".tip-content").html()
            }
        },
        position: {
            my: "left bottom",
            viewport: $(window),
            adjust: {
                x: 1
            }
        },
        hide: {
            fixed: !0
        }
    }), $('[data-tooltip-text!=""]').qtip({
        content: {
            attr: "data-tooltip-text"
        },
        position: {
            my: "left bottom",
            viewport: $(window),
            adjust: {
                x: 1
            }
        },
        hide: {
            fixed: !0
        }
    }), $("select").select2({
        minimumResultsForSearch: 12,
        dropdownCssClass: "Greyselect-dropdown"
    }), $(".Greyselect").select2({
        minimumResultsForSearch: 12
    }), $(".sf-Form__select2").select2({
        dropdownCssClass: "sf-Form__dropdown"
    }), openCollapse(), new jQueryCollapse($("#faq-collapse"), {
        open: function() {
            this.slideDown(250)
        },
        close: function() {
            this.slideUp(250)
        },
        query: "h3"
    }), setTimeout(scrollToCollapse(), 300)
}), $('.intensite-nav img[alt!=""]').each(function() {
    $(this).qtip({
        content: {
            text: $(this).attr("alt")
        },
        position: {
            my: "bottom center",
            at: "top center"
        },
        style: {
            classes: "qtip-intensite",
            def: !1,
            tip: {
                corner: !1
            }
        },
        show: {
            delay: 0
        }
    })
}), $(".flexslider-forfaits").flexslider({
    animation: "fade",
    animationSpeed: 200,
    controlNav: !0,
    slideshow: !1,
    controlsContainer: ".flexslider-forfaits",
    manualControls: "#flexslider-forfaits-nav li",
    startAt: linkToSlide("slide")
}), $.datepicker.setDefaults($.datepicker.regional.fr = {
    closeText: "Fermer",
    prevText: "Précédent",
    nextText: "Suivant",
    currentText: "Aujourd'hui",
    monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    monthNamesShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
    weekHeader: "Sem.",
    dateFormat: "yy-mm-dd",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ""
}), $("#datepickerBirthdate").datepicker({
    changeMonth: !0,
    changeYear: !0,
    minDate: "-100Y",
    maxDate: "-10Y",
    yearRange: "-100:+0"
}), $(".sf-js-videoPass").fancybox({
    maxWidth: 800,
    autoHeight: !0,
    fitToView: !0,
    autoSize: !1,
    closeClick: !1,
    openEffect: "none",
    closeEffect: "none"
}), $("#quick-search__open").click(function() {
    var e = $(".sf-NavBar__search form")[0];
    "block" === $(e).css("display") ? closeSearchField() : openSearchField()
}), $(document).on("mousedown", function(e) {
    "quick-search__submit" != $(e.target).attr("id") && "quick-search__open" != $(e.target).attr("id") && "quick-search__input" != $(e.target).attr("id") && closeSearchField()
}), $(document).scroll(function() {
    $(document).scrollTop() >= "132" ? ($(".sf-Header__logoGS").hasClass("sf-Header__logoGS") ? ($(".sf-Header__logoGS").addClass("sf-Header__logoGS--scrolled"), $(".sf-Header__logoGS--scrolled").removeClass("sf-Header__logoGS")) : $(".sf-Header__logoSF").hasClass("sf-Header__logoSF") && ($(".sf-Header__logoSF").addClass("sf-Header__logoSF--scrolled"), $(".sf-Header__logoSF--scrolled").removeClass("sf-Header__logoSF")), $(".sf-NavBar").css({
        height: "39px",
        left: "65px",
        bottom: "7px"
    }), $(".js-BtnLogin").css("display", "none"), $(".js-AccountLink").css("display", "none"), $(".js-BtnSearchBlock").css("margin-right", "0"), $(".sf-Btn__subscribe").css({
        "margin-right": "-105px",
        "margin-top": "4px"
    }), $(".sf-Header").css({
        padding: "7px",
        position: "fixed"
    }), $(".js-AccountOverlay").css({
        bottom: "-92px",
        right: "220px"
    }), $(".sf-NavBar__search form").css({
        top: "43px",
        left: "-276px"
    }), $(".sf-Btn--account").css({
        "margin-right": "2px"
    })) : ($(".sf-Header__logoGS--scrolled").hasClass("sf-Header__logoGS--scrolled") ? ($(".sf-Header__logoGS--scrolled").addClass("sf-Header__logoGS"), $(".sf-Header__logoGS").removeClass("sf-Header__logoGS--scrolled")) : $(".sf-Header__logoSF--scrolled").hasClass("sf-Header__logoSF--scrolled") && ($(".sf-Header__logoSF--scrolled").addClass("sf-Header__logoSF"), $(".sf-Header__logoSF").removeClass("sf-Header__logoSF--scrolled")), $(".sf-NavBar").css({
        height: "43px",
        bottom: "14px",
        left: "inherit"
    }), $(".js-BtnLogin").css("display", "block"), $(".js-AccountLink").css("display", "block"), $(".js-BtnSearchBlock").css("margin-right", "7px"), $(".sf-Btn__subscribe").css({
        "margin-right": "9px",
        "margin-top": "0"
    }), $(".sf-NavBar__search form").css({
        top: "54px",
        left: "-391px"
    }), $(".js-AccountOverlay").css({
        bottom: "-92px",
        right: "225px"
    }), $(".sf-Header").css({
        padding: "14px",
        position: "relative"
    }), $(".sf-Btn--account").css({
        "margin-right": "0"
    }))
}), $(".js-BtnAccount").hover(function() {
    $(".js-AccountOverlay").css({
        display: "block"
    })
}, function() {
    $(".js-AccountOverlay").css({
        display: "none"
    })
}), $(".js-AccountOverlay").hover(function() {
    $(".js-AccountOverlay").css({
        display: "block"
    })
}, function() {
    $(".js-AccountOverlay").css({
        display: "none"
    })
}), $(".SF201610-Form__container").length > 0 && (webshim.activeLang("fr"), webshim.setOptions({
    basePath: "https://design.gymsuedoise.com/static/js-webshim/",
    loadStyles: !1,
    debug: !1,
    forms: {
        addValidators: !0,
        replaceValidationUI: !0,
        iVal: {
            errorBoxClass: "sf-Form__errorbox",
            handleBubble: "false",
            fieldWrapper: ".sf-Form__input__wrapper",
            fx: "slide"
        }
    }
}), webshim.polyfill("forms"), webshim.ready("form-validators", function() {
    webshim.customErrorMessages.dependent[""] = "Les champs ne sont pas identiques"
})), $(".resa-confirm").dialog({
    dialogClass: "SF201704-UserDialog",
    autoOpen: !1,
    modal: !0,
    resizable: !1,
    draggable: !1,
    closeOnEscape: !0,
    title: "confirmer ma réservation",
    width: "500px",
    buttons: [{
        text: "RESERVER",
        click: function() {
            $(this).dialog("close"), window.location = $(document).data("href")
        }
    }, {
        text: "ANNULER",
        click: function() {
            $(this).dialog("close"), $(".SF201704-UserDialog tbody tr").remove()
        }
    }]
}), $(".js-btn-resa-confirm").on("click", function(e) {
    e.preventDefault();
    for (var t = $(this)[0];
        "TR" !== t.tagName;) t = t.parentNode;
    for ($(t).clone().appendTo(".resa-confirm tbody"); 3 !== $(".resa-confirm .schedule tbody tr").children().length;) $(".resa-confirm .schedule tbody tr td:first-child").remove();
    $(".resa-confirm .schedule thead tr th:last-child").css("border-right", "none"), $(".resa-confirm .schedule tbody tr td:last-child").css("border-right", "none"), $(".resa-confirm .schedule tbody tr td").css("display", "table-cell"), $(document).data("href", this.href), $(".resa-confirm").dialog("open")
}), $(".resa-cancel").dialog({
    dialogClass: "SF201704-UserDialog",
    autoOpen: !1,
    modal: !0,
    resizable: !1,
    draggable: !1,
    closeOnEscape: !0,
    title: "confirmer mon annulation",
    width: "500px",
    buttons: [{
        text: "CONFIRMER",
        click: function() {
            $(this).dialog("close"), window.location = $(document).data("href")
        }
    }, {
        text: "ANNULER",
        click: function() {
            $(this).dialog("close"), $(".SF201704-UserDialog tbody tr").remove()
        }
    }]
}), $(".js-btn-resa-cancel").on("click", function(e) {
    e.preventDefault();
    for (var t = $(this)[0];
        "TR" !== t.tagName;) t = t.parentNode;
    for ($(t).clone().appendTo(".resa-cancel tbody"); 3 !== $(".resa-cancel .schedule tbody tr").children().length;) $(".resa-cancel .schedule tbody tr td:first-child").remove();
    $(".resa-cancel .schedule thead tr th:last-child").css("border-right", "none"), $(".resa-cancel .schedule tbody tr td:last-child").css("border-right", "none"), $(".resa-cancel .schedule tbody tr td").css("display", "table-cell"), $(document).data("href", this.href), $(".resa-cancel").dialog("open")
}), $(".resa-klass").dialog({
    dialogClass: "SF201704-UserDialog",
    autoOpen: !1,
    modal: !0,
    resizable: !1,
    draggable: !1,
    closeOnEscape: !0,
    title: "Acheter une KLASS",
    width: "500px",
    buttons: [{
        text: "CONFIRMER",
        click: function() {
            $(this).dialog("close"), window.location = $(document).data("href")
        }
    }, {
        text: "ANNULER",
        click: function() {
            $(this).dialog("close"), $(".SF201704-UserDialog tbody tr").remove()
        }
    }]
}), $(".js-btn-resa-klass").on("click", function(e) {
    e.preventDefault();
    for (var t = $(this)[0];
        "TR" !== t.tagName;) t = t.parentNode;
    for ($(t).clone().appendTo(".resa-klass tbody"); 3 !== $(".resa-klass .schedule tbody tr").children().length;) $(".resa-klass .schedule tbody tr td:first-child").remove();
    $(".resa-klass .schedule thead tr th:last-child").css("border-right", "none"), $(".resa-klass .schedule tbody tr td:last-child").css("border-right", "none"), $(".resa-klass .schedule tbody tr td").css("display", "table-cell"), $(document).data("href", this.href), $(".resa-klass").dialog("open")
}), $(".resa-wrongcolor").dialog({
    dialogClass: "SF201704-UserDialog",
    autoOpen: !1,
    modal: !0,
    resizable: !1,
    draggable: !1,
    closeOnEscape: !0,
    title: "Acheter une KLASS",
    width: "500px",
    buttons: [{
        text: "CONFIRMER",
        click: function() {
            $(this).dialog("close"), window.location = $(document).data("href")
        }
    }, {
        text: "ANNULER",
        click: function() {
            $(this).dialog("close"), $(".SF201704-UserDialog tbody tr").remove()
        }
    }]
}), $(".js-btn-resa-wrongcolor").on("click", function(e) {
    e.preventDefault();
    for (var t = $(this)[0];
        "TR" !== t.tagName;) t = t.parentNode;
    for ($(t).clone().appendTo(".resa-wrongcolor tbody"); 3 !== $(".resa-wrongcolor .schedule tbody tr").children().length;) $(".resa-wrongcolor .schedule tbody tr td:first-child").remove();
    $(".resa-wrongcolor .schedule thead tr th:last-child").css("border-right", "none"), $(".resa-wrongcolor .schedule tbody tr td:last-child").css("border-right", "none"), $(".resa-wrongcolor .schedule tbody tr td").css("display", "table-cell"), $(document).data("href", this.href), $(".resa-wrongcolor").dialog("open")
}), $(".js-CheckboxRebate").on("click", function() {
    var e = $(this).attr("data-id");
    $("#" + e).prop("checked") ? ($(this).css("border-color", "#bebebe"), $("#" + e).prop("checked", !1)) : ($(this).css("border-color", "#223c8a"), $("#" + e).prop("checked", !0))
});
