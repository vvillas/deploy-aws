"use strict";
exports.id = 3781;
exports.ids = [3781];
exports.modules = {

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    if (document.querySelector(".swiper-pagination")) {
        document.querySelector(".swiper-pagination").innerHTML = document.querySelector(".swiper-pagination").innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 3781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(265);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _common_tooltipEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5217);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Mousewheel
]);
const ShowcasesGrid = ()=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
            (0,_common_tooltipEffect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        });
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "slider showcase-grid",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "content-carousel-container-unq-1",
                className: "swiper-container",
                children: !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    speed: 1000,
                    mousewheel: true,
                    autoplay: true,
                    loop: true,
                    spaceBetween: 30,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 4
                        }
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 4,
                    children: _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_4__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                passHref: true,
                                href: "/project-details2/project-details2-dark",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-img",
                                    style: {
                                        backgroundImage: `url(${slide.image})`
                                    },
                                    "data-tooltip-tit": slide.title.first + " " + slide.title.second,
                                    "data-tooltip-sub": slide.sub
                                })
                            })
                        }, slide.id)
                    )
                }) : null
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "txt-botm",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: navigationNextRef,
                        className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Next Slide"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fas fa-chevron-right"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: navigationPrevRef,
                        className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fas fa-chevron-left"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Prev Slide"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "swiper-pagination dots",
                        ref: paginationRef
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowcasesGrid);

});

/***/ })

};
;