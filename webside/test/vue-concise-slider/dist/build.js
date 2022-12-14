!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("vue-concise-slider", [], e) : "object" == typeof exports ? exports["vue-concise-slider"] = e() : t["vue-concise-slider"] = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var s = i[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0)
    }([function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var s = i(1), r = n(s), o = i(14), a = n(o), l = i(19), d = n(l), c = i(24), u = n(c), p = i(29), h = n(p);
        new Vue(r.default), new Vue(a.default), new Vue(d.default), new Vue(u.default), new Vue(h.default)
    }, function (t, e, i) {
        var n, s, r = {};
        i(2), n = i(6), s = i(13), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var o = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        s && (o.template = s), o.computed || (o.computed = {}), Object.keys(r).forEach(function (t) {
            var e = r[t];
            o.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, i) {
        var n = i(3);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(5)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(4)(), e.push([t.id, ".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}", ""])
    }, function (t, e) {
        t.exports = function () {
            var t = [];
            return t.toString = function () {
                for (var t = [], e = 0; e < this.length; e++) {
                    var i = this[e];
                    i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1])
                }
                return t.join("")
            }, t.i = function (e, i) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var n = {}, s = 0; s < this.length; s++) {
                    var r = this[s][0];
                    "number" == typeof r && (n[r] = !0)
                }
                for (s = 0; s < e.length; s++) {
                    var o = e[s];
                    "number" == typeof o[0] && n[o[0]] || (i && !o[2] ? o[2] = i : i && (o[2] = "(" + o[2] + ") and (" + i + ")"), t.push(o))
                }
            }, t
        }
    }, function (t, e, i) {
        function n(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i], s = u[n.id];
                if (s) {
                    s.refs++;
                    for (var r = 0; r < s.parts.length; r++) s.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) s.parts.push(l(n.parts[r], e))
                } else {
                    for (var o = [], r = 0; r < n.parts.length; r++) o.push(l(n.parts[r], e));
                    u[n.id] = {id: n.id, refs: 1, parts: o}
                }
            }
        }

        function s(t) {
            for (var e = [], i = {}, n = 0; n < t.length; n++) {
                var s = t[n], r = s[0], o = s[1], a = s[2], l = s[3], d = {css: o, media: a, sourceMap: l};
                i[r] ? i[r].parts.push(d) : e.push(i[r] = {id: r, parts: [d]})
            }
            return e
        }

        function r(t, e) {
            var i = f(), n = m[m.length - 1];
            if ("top" === t.insertAt) n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), m.push(e); else {
                if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                i.appendChild(e)
            }
        }

        function o(t) {
            t.parentNode.removeChild(t);
            var e = m.indexOf(t);
            e >= 0 && m.splice(e, 1)
        }

        function a(t) {
            var e = document.createElement("style");
            return e.type = "text/css", r(t, e), e
        }

        function l(t, e) {
            var i, n, s;
            if (e.singleton) {
                var r = b++;
                i = g || (g = a(e)), n = d.bind(null, i, r, !1), s = d.bind(null, i, r, !0)
            } else i = a(e), n = c.bind(null, i), s = function () {
                o(i)
            };
            return n(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    n(t = e)
                } else s()
            }
        }

        function d(t, e, i, n) {
            var s = i ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = x(e, s); else {
                var r = document.createTextNode(s), o = t.childNodes;
                o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(r, o[e]) : t.appendChild(r)
            }
        }

        function c(t, e) {
            var i = e.css, n = e.media, s = e.sourceMap;
            if (n && t.setAttribute("media", n), s && (i += "\n/*# sourceURL=" + s.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"), t.styleSheet) t.styleSheet.cssText = i; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(i))
            }
        }

        var u = {}, p = function (t) {
            var e;
            return function () {
                return "undefined" == typeof e && (e = t.apply(this, arguments)), e
            }
        }, h = p(function () {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }), f = p(function () {
            return document.head || document.getElementsByTagName("head")[0]
        }), g = null, b = 0, m = [];
        t.exports = function (t, e) {
            e = e || {}, "undefined" == typeof e.singleton && (e.singleton = h()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
            var i = s(t);
            return n(i, e), function (t) {
                for (var r = [], o = 0; o < i.length; o++) {
                    var a = i[o], l = u[a.id];
                    l.refs--, r.push(l)
                }
                if (t) {
                    var d = s(t);
                    n(d, e)
                }
                for (var o = 0; o < r.length; o++) {
                    var l = r[o];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete u[l.id]
                    }
                }
            }
        };
        var x = function () {
            var t = [];
            return function (e, i) {
                return t[e] = i, t.filter(Boolean).join("\n")
            }
        }()
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(7), r = n(s);
        e.default = {
            el: "#sliderbasic", data: function () {
                return {
                    someList: [{title: "slide1", style: {background: "#1bbc9b"}}, {
                        title: "slide2",
                        style: {background: "#4bbfc3"}
                    }, {title: "slide3", style: {background: "#7baabe"}}],
                    sliderinit: {currentPage: 0, thresholdTime: 500, thresholdDistance: 100}
                }
            }, components: {slider: r.default}, methods: {
                turnTo: function (t) {
                    this.$children[0].$emit("slideTo", t)
                }, slideNext: function () {
                    this.$children[0].$emit("slideNext")
                }, slidePre: function () {
                    this.$children[0].$emit("slidePre")
                }, appendslider: function () {
                    this.someList.push({title: "slidernew", style: {background: "#333", color: "#fff"}})
                }, slide: function (t) {
                    console.log("currentPage:" + t)
                }
            }
        }
    }, function (t, e, i) {
        var n, s, r = {};
        i(8), n = i(10), s = i(12), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var o = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        s && (o.template = s), o.computed || (o.computed = {}), Object.keys(r).forEach(function (t) {
            var e = r[t];
            o.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, i) {
        var n = i(9);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(5)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(4)(), e.push([t.id, ".slider-container{margin:0 auto;overflow:hidden;z-index:1;height:400px;margin:20px auto;width:70%;position:relative;white-space:nowrap}.slider-center-center{margin:auto;z-index:1;position:absolute;top:0;left:0;right:0;bottom:0}.slider-wrapper{box-sizing:content-box;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;position:relative;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;width:100%;z-index:1}.swiper-container-vertical>.slider-wrapper{-webkit-box-orient:vertical;-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;flex-direction:column}.slider-item{-ms-flex-negative:0;flex-shrink:0;height:100%;position:relative;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff none repeat scroll 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#fff;background-position:50%!important;background-size:cover!important}.slider-pagination{position:absolute;text-align:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.slider-pagination-bullets{bottom:10px;left:0;width:100%}.slider-pagination-bullet{background:#000 none repeat scroll 0 0;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px;cursor:pointer;margin:0 5px}.swiper-container-vertical>.slider-pagination-bullets{bottom:auto;left:auto;width:auto;right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical .slider-pagination-bullet{display:block;margin:5px 0}.slider-pagination-bullet-active{background:#fff none repeat scroll 0 0;opacity:1}.slider-button-next,.slider-button-prev{background-position:50%;background-repeat:no-repeat;background-size:27px 44px;cursor:pointer;height:44px;margin-top:-22px;position:absolute;top:50%;width:27px;z-index:10}.slider-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\");left:10px;right:auto}.slider-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\");left:auto;right:10px}@media screen and (max-width:414px){.slider-container{height:200px;margin:20px auto;width:90%}}", ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(11), r = n(s);
        e.default = {
            props: ["sliderinit", "pages"], data: function () {
                return {
                    basicdata: {
                        poswidth: "0",
                        posheight: "0",
                        start: {},
                        end: {},
                        tracking: !1,
                        animation: !1,
                        containerClass: {"swiper-container-vertical": !1},
                        setIntervalid: "",
                        prefixes: (0, r.default)(),
                        transitionEnding: !1
                    }
                }
            }, computed: {
                styleobj: function () {
                    var t = {};
                    return t.transform = "translate3D(" + this.basicdata.poswidth + "," + this.basicdata.posheight + ",0)", t[this.basicdata.prefixes.transition + "TimingFunction"] = "ease", t[this.basicdata.prefixes.transition + "Duration"] = (this.basicdata.animation ? this.sliderinit.slideSpeed || 300 : 0) + "ms", t
                }, pagenums: function () {
                    return this.pages.length
                }, currentWidth: {
                    get: function () {
                        var t = void 0, e = this.sliderinit.currentPage;
                        this.sliderinit.loop && (e = this.sliderinit.infinite ? this.sliderinit.currentPage + (this.sliderinit.infinite <= this.pages.length ? this.sliderinit.infinite : this.pages.length) : this.sliderinit.currentPage + 1);
                        for (var i in this.$el.children) /slider-wrapper/gi.test(this.$el.children[i].className) && (t = this.$el.children[i]);
                        var n = t.children, s = n[e].offsetLeft;
                        return this.sliderinit.loop && (s = n[e].offsetLeft), s
                    }, set: function (t) {
                        return t
                    }
                }, currentHeight: function () {
                    var t = 0, e = void 0, i = this.sliderinit.currentPage - 1;
                    this.sliderinit.loop && (i = this.sliderinit.infinite ? this.sliderinit.currentPage + (this.sliderinit.infinite <= this.pages.length ? this.sliderinit.infinite : this.pages.length) - 1 : this.sliderinit.currentPage + 1);
                    for (var n in this.$el.children) /slider-wrapper/gi.test(this.$el.children[n].className) && (e = this.$el.children[n]);
                    var s = e.children;
                    for (var r in s) r <= i && (t += s[r].offsetHeight, t += parseInt(s[r].style.marginTop || 0), t += parseInt(s[r].style.marginBottom || 0));
                    return t
                }
            }, mounted: function () {
                var t = this, e = this;
                e.slide(this.sliderinit.currentPage, "animationnone"), e.$on("slideTo", function (e) {
                    t.slide(e)
                }), e.$on("slideNext", function () {
                    t.next()
                }), e.$on("slidePre", function () {
                    t.pre()
                }), e.clock().begin(e), "vertical" === this.sliderinit.direction && (this.basicdata.containerClass["swiper-container-vertical"] = !0)
            }, methods: {
                swipeStart: function (t) {
                    var e = this;
                    if (!this.basicdata.transitionEnding) {
                        if (this.basicdata.animation = !1, this.sliderinit.autoplay) {
                            var i = this;
                            this.clock().stop(i)
                        }
                        if (document.addEventListener("touchmove", e.preventDefault(t)), "touchstart" === t.type) {
                            if (t.touches.length > 1) return void (this.basicdata.tracking = !1);
                            this.basicdata.tracking = !0, this.basicdata.start.t = (new Date).getTime(), this.basicdata.start.x = t.targetTouches[0].clientX, this.basicdata.start.y = t.targetTouches[0].clientY, this.basicdata.end.x = t.targetTouches[0].clientX, this.basicdata.end.y = t.targetTouches[0].clientY
                        } else this.basicdata.tracking = !0, this.basicdata.start.t = (new Date).getTime(), this.basicdata.start.x = t.clientX, this.basicdata.start.y = t.clientY, this.basicdata.end.x = t.clientX, this.basicdata.end.y = t.clientY
                    }
                }, swipeMove: function (t) {
                    if (this.basicdata.tracking) {
                        if ("touchmove" === t.type ? (t.preventDefault(), this.basicdata.end.x = t.targetTouches[0].clientX, this.basicdata.end.y = t.targetTouches[0].clientY) : (t.preventDefault(), this.basicdata.end.x = t.clientX, this.basicdata.end.y = t.clientY), "vertical" === this.sliderinit.direction) return void (this.basicdata.posheight = -this.currentHeight + this.basicdata.end.y - this.basicdata.start.y + "px");
                        this.basicdata.poswidth = -this.currentWidth + this.basicdata.end.x - this.basicdata.start.x + "px"
                    }
                }, swipeEnd: function (t) {
                    this.basicdata.tracking = !1;
                    var e = (new Date).getTime(), i = e - this.basicdata.start.t,
                        n = this.basicdata.end.x - this.basicdata.start.x,
                        s = this.basicdata.end.y - this.basicdata.start.y;
                    if (this.sliderinit.autoplay) {
                        var r = this;
                        setTimeout(function () {
                            r.clock().begin(r)
                        }, this.sliderinit.autoplay)
                    }
                    return document.removeEventListener("touchmove", this.preventDefault(t)), i > this.sliderinit.thresholdTime ? void this.slide(this.sliderinit.currentPage) : "vertical" !== this.sliderinit.direction ? n > this.sliderinit.thresholdDistance && Math.abs(s) < this.sliderinit.thresholdDistance ? void this.pre() : -n > this.sliderinit.thresholdDistance && Math.abs(s) < this.sliderinit.thresholdDistance ? void this.next() : void this.slide(this.sliderinit.currentPage) : s > this.sliderinit.thresholdDistance && Math.abs(n) < this.sliderinit.thresholdDistance ? void this.pre() : -s > this.sliderinit.thresholdDistance && Math.abs(n) < this.sliderinit.thresholdDistance ? void this.next() : void this.slide(this.sliderinit.currentPage)
                }, pre: function () {
                    this.sliderinit.currentPage >= 1 ? (this.sliderinit.currentPage -= this.sliderinit.slidesToScroll || 1, this.slide()) : this.sliderinit.loop && 0 === this.sliderinit.currentPage ? (this.sliderinit.currentPage -= this.sliderinit.slidesToScroll || 1, this.basicdata.transitionEnding = !0, this.slide()) : this.slide()
                }, next: function () {
                    this.sliderinit.currentPage < this.pagenums - 1 ? (this.sliderinit.currentPage += this.sliderinit.slidesToScroll || 1, this.slide()) : this.sliderinit.loop && this.sliderinit.currentPage === this.pagenums - 1 ? (this.sliderinit.currentPage += this.sliderinit.slidesToScroll || 1, this.basicdata.transitionEnding = !0, this.slide()) : this.slide()
                }, slide: function (t, e) {
                    var i = this;
                    i.basicdata.animation = !0, "animationnone" === e && (i.basicdata.animation = !1), (t || 0 === t) && (i.sliderinit.currentPage = t), "vertical" === i.sliderinit.direction ? i.basicdata.posheight = -i.currentHeight + "px" : i.basicdata.poswidth = -i.currentWidth + "px", i.sliderinit.currentPage < 0 || i.sliderinit.currentPage >= i.pagenums || i.$emit("slide", i.sliderinit.currentPage)
                }, clock: function () {
                    return {
                        begin: function (t) {
                            if (t.sliderinit.autoplay) {
                                if (t.basicdata.setIntervalid) return;
                                t.basicdata.setIntervalid = setInterval(function () {
                                    t.next(), t.sliderinit.currentPage !== t.pagenums - 1 || t.sliderinit.loop || (clearInterval(t.basicdata.setIntervalid), t.basicdata.setIntervalid = 0)
                                }, t.sliderinit.autoplay)
                            }
                        }, stop: function (t) {
                            clearInterval(t.basicdata.setIntervalid), t.basicdata.setIntervalid = 0
                        }
                    }
                }, preventDefault: function (t) {
                    t.preventDefault()
                }, onTransitionEnd: function () {
                    this.sliderinit.loop && (this.basicdata.transitionEnding = !1, this.sliderinit.currentPage < 0 ? this.slide(this.pagenums + this.sliderinit.currentPage, "animationnone") : this.sliderinit.currentPage >= this.pagenums && this.slide(0 + this.sliderinit.currentPage - this.pagenums, "animationnone"))
                }
            }
        }
    }, function (t, e) {
        (function (t) {
            "use strict";

            function i() {
                var e = void 0, i = void 0, n = void 0, s = void 0;
                return function () {
                    var r = document.createElement("_"), o = r.style, a = void 0;
                    "" === o[a = "webkitTransition"] && (n = "webkitTransitionEnd", i = a), "" === o[a = "transition"] && (n = "transitionend", i = a), "" === o[a = "webkitTransform"] && (e = a), "" === o[a = "msTransform"] && (e = a), "" === o[a = "transform"] && (e = a), document.body.insertBefore(r, null), o[e] = "translate3d(0, 0, 0)", s = !!t.getComputedStyle(r).getPropertyValue(e), document.body.removeChild(r)
                }(), {transform: e, transition: i, transitionEnd: n, hasTranslate3d: s}
            }

            Object.defineProperty(e, "__esModule", {value: !0}), e.default = i
        }).call(e, function () {
            return this
        }())
    }, function (t, e) {
        t.exports = ' <div class=slider-container :class=basicdata.containerClass> <div class=slider-wrapper :style=styleobj @touchmove=swipeMove @touchstart=swipeStart @touchend=swipeEnd @mousedown=swipeStart @mouseup=swipeEnd @mousemove=swipeMove @webkit-transition-end=onTransitionEnd @transitionend=onTransitionEnd> <template v-if=!sliderinit.loop> <template v-for="item in pages"> <div class=slider-item :style=item.style> {{item.title}} </div> </template> </template> <template v-if=sliderinit.loop> <template v-if=sliderinit.infinite v-for="(item, index) in pages"> <div v-if="index+sliderinit.infinite-pages.length>=0" class=slider-item :style=" item.style">{{item.title}}</div> </template> <template v-if=!sliderinit.infinite> <div class=slider-item :style=pages[pages.length-1].style>{{pages[pages.length-1].title}}</div> </template> <template v-for="item in pages"> <div class=slider-item :style=item.style>{{item.title}}</div> </template> <template v-if=sliderinit.infinite v-for="(item, index) in pages"> <div v-if="index-sliderinit.infinite<0" class=slider-item :style=" item.style">{{item.title}}</div> </template> <template v-if=!sliderinit.infinite> <div class=slider-item :style=pages[0].style>{{pages[0].title}}</div> </template> </template> </div> <div class="slider-pagination slider-pagination-bullets"> <template v-for="n in pagenums"> <span @click=slide(n-1) class=slider-pagination-bullet :class="n-1 === sliderinit.currentPage? \'slider-pagination-bullet-active\':\'\'"></span> </template> </div> </div> '
    }, function (t, e) {
        t.exports = " <div> <slider :pages=someList :sliderinit=sliderinit @slide=slide> </slider> <div class=sliderButton> <button @click=slidePre>?????????</button> <button @click=slideNext>?????????</button> <button @click=appendslider>????????????</button> <button @click=turnTo(2)>??????????????????</button> </div> </div> "
    }, function (t, e, i) {
        var n, s, r = {};
        i(15), n = i(17), s = i(18), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var o = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        s && (o.template = s), o.computed || (o.computed = {}), Object.keys(r).forEach(function (t) {
            var e = r[t];
            o.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, i) {
        var n = i(16);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(5)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(4)(), e.push([t.id, ".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}", ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(7), r = n(s);
        e.default = {
            el: "#slidervariableWidth", data: function () {
                return {
                    someList: [{
                        title: "slide1",
                        style: {background: "#1bbc9b", width: "80%", "margin-right": "20px"}
                    }, {
                        title: "slide2",
                        style: {background: "#4bbfc3", width: "60%", "margin-right": "20px"}
                    }, {title: "slide3", style: {background: "#7baabe", width: "40%", "margin-right": "20px"}}],
                    sliderinit: {currentPage: 1, tracking: !1, thresholdTime: 500, thresholdDistance: 100}
                }
            }, components: {slider: r.default}, methods: {
                turnTo: function (t) {
                    this.$children[0].$emit("slideTo", t)
                }, slideNext: function () {
                    this.$children[0].$emit("slideNext")
                }, slidePre: function () {
                    this.$children[0].$emit("slidePre")
                }, appendslider: function () {
                    this.someList.push({title: "slidernew", style: {background: "#333", color: "#fff"}})
                }, slide: function (t) {
                    console.log("currentPage:" + t)
                }
            }
        }
    }, function (t, e) {
        t.exports = " <div> <slider :pages=someList :sliderinit=sliderinit @slide=slide> </slider> <div class=sliderButton> <button @click=slidePre>?????????</button> <button @click=slideNext>?????????</button> <button @click=appendslider>????????????</button> <button @click=turnTo(2)>??????????????????</button> </div> </div> "
    }, function (t, e, i) {
        var n, s, r = {};
        i(20), n = i(22), s = i(23), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var o = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        s && (o.template = s), o.computed || (o.computed = {}), Object.keys(r).forEach(function (t) {
            var e = r[t];
            o.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, i) {
        var n = i(21);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(5)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(4)(), e.push([t.id, ".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}", ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(7), r = n(s);
        e.default = {
            el: "#sliderbasicloop", data: function () {
                return {
                    someList: [{title: "slide1", style: {background: "#1bbc9b"}}, {
                        title: "slide2",
                        style: {background: "#4bbfc3"}
                    }, {title: "slide3", style: {background: "#7baabe"}}],
                    sliderinit: {currentPage: 1, tracking: !1, thresholdTime: 500, thresholdDistance: 100, loop: !0}
                }
            }, components: {slider: r.default}, methods: {
                turnTo: function (t) {
                    this.$children[0].$emit("slideTo", t)
                }, slideNext: function () {
                    this.$children[0].$emit("slideNext")
                }, slidePre: function () {
                    this.$children[0].$emit("slidePre")
                }, appendslider: function () {
                    this.someList.push({title: "slidernew", style: {background: "#333", color: "#fff"}})
                }, slide: function (t) {
                    console.log(t)
                }
            }
        }
    }, function (t, e) {
        t.exports = " <div> <slider :pages=someList :sliderinit=sliderinit @slide=slide> </slider> <div class=sliderButton> <button @click=slidePre>?????????</button> <button @click=slideNext>?????????</button> <button @click=appendslider>????????????</button> <button @click=turnTo(2)>??????????????????</button> </div> </div> "
    }, function (t, e, i) {
        var n, s, r = {};
        i(25), n = i(27), s = i(28), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var o = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        s && (o.template = s), o.computed || (o.computed = {}), Object.keys(r).forEach(function (t) {
            var e = r[t];
            o.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, i) {
        var n = i(26);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(5)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(4)(), e.push([t.id, ".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}", ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(7), r = n(s);
        e.default = {
            el: "#slidervertical", data: function () {
                return {
                    someList: [{title: "slide1", style: {background: "#1bbc9b"}}, {
                        title: "slide2",
                        style: {background: "#4bbfc3"}
                    }, {title: "slide3", style: {background: "#7baabe"}}],
                    sliderinit: {
                        currentPage: 1,
                        tracking: !1,
                        thresholdTime: 300,
                        thresholdDistance: 100,
                        direction: "vertical",
                        loop: !0,
                        infinite: 4
                    }
                }
            }, components: {slider: r.default}, methods: {
                turnTo: function (t) {
                    this.$children[0].$emit("slideTo", t)
                }, slideNext: function () {
                    this.$children[0].$emit("slideNext")
                }, slidePre: function () {
                    this.$children[0].$emit("slidePre")
                }, appendslider: function () {
                    this.someList.push({title: "slidernew", style: {background: "#333", color: "#fff"}})
                }, slide: function (t) {
                    console.log("currentPage:" + t)
                }
            }
        }
    }, function (t, e) {
        t.exports = " <div> <slider :pages=someList :sliderinit=sliderinit @slide=slide> </slider> <div class=sliderButton> <button @click=slidePre>?????????</button> <button @click=slideNext>?????????</button> <button @click=appendslider>????????????</button> <button @click=turnTo(2)>??????????????????</button> </div> </div>"
    }, function (t, e, i) {
        var n, s, r = {};
        i(30), n = i(32), s = i(33), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default);
        var o = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
        s && (o.template = s), o.computed || (o.computed = {}), Object.keys(r).forEach(function (t) {
            var e = r[t];
            o.computed[t] = function () {
                return e
            }
        })
    }, function (t, e, i) {
        var n = i(31);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(5)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(4)(), e.push([t.id, ".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}", ""])
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(7), r = n(s);
        e.default = {
            el: "#slidermultipleSlide", data: function () {
                return {
                    someList: [{
                        title: "slide1",
                        style: {background: "#1bbc9b", width: "23.5%", "margin-right": "2%"}
                    }, {
                        title: "slide2",
                        style: {background: "#4bbfc3", width: "23.5%", "margin-right": "2%"}
                    }, {
                        title: "slide3",
                        style: {background: "#7baabe", width: "23.5%", "margin-right": "2%"}
                    }, {
                        title: "slide4",
                        style: {background: "#7caabe", width: "23.5%", "margin-right": "2%"}
                    }, {
                        title: "slide5",
                        style: {background: "#1bbc9b", width: "23.5%", "margin-right": "2%"}
                    }, {
                        title: "slide6",
                        style: {background: "#4bbfc3", width: "23.5%", "margin-right": "2%"}
                    }, {
                        title: "slide7",
                        style: {background: "#7baabe", width: "23.5%", "margin-right": "2%"}
                    }, {title: "slide8", style: {background: "#7caabe", width: "23.5%", "margin-right": "2%"}}],
                    sliderinit: {
                        currentPage: 0,
                        tracking: !1,
                        thresholdTime: 500,
                        thresholdDistance: 100,
                        infinite: 4,
                        slidesToScroll: 4,
                        loop: !0
                    }
                }
            }, components: {slider: r.default}, methods: {
                turnTo: function (t) {
                    this.$children[0].$emit("slideTo", t)
                }, slideNext: function () {
                    this.$children[0].$emit("slideNext")
                }, slidePre: function () {
                    this.$children[0].$emit("slidePre")
                }, appendslider: function () {
                    this.someList.push({
                        title: "slidernew",
                        style: {background: "#333", color: "#fff", width: "23.5%", "margin-right": "2%"}
                    })
                }, slide: function (t) {
                    console.log("currentPage:" + t)
                }
            }
        }
    }, function (t, e) {
        t.exports = " <div> <slider :pages=someList :sliderinit=sliderinit @slide=slide> </slider> <div class=sliderButton> <button @click=slidePre>?????????</button> <button @click=slideNext>?????????</button> <button @click=appendslider>????????????</button> <button @click=turnTo(2)>??????????????????</button> </div> </div> "
    }])
});
