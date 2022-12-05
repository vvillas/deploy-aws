"use strict";
exports.id = 1671;
exports.ids = [1671];
exports.modules = {

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 1671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Testimonials1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/common/removeOverlay.js
const removeOverlay = ()=>{
    let sectionWithOutOverlay = document.querySelectorAll("section.noOverlay");
    if (sectionWithOutOverlay) {
        sectionWithOutOverlay.forEach((section)=>section.removeAttribute("data-overlay-dark")
        );
    }
};
/* harmony default export */ const common_removeOverlay = (removeOverlay);

;// CONCATENATED MODULE: ./src/common/parallaxie.js
function parallaxie(selector) {
    let elementBg = document.querySelector(selector);
    if (elementBg) {
        let position = elementBg.getBoundingClientRect().top * 0.75;
        elementBg.style.backgroundSize = 'cover';
        elementBg.style.backgroundRepeat = 'no-repeat';
        elementBg.style.backgroundAttachment = 'fixed';
        elementBg.style.backgroundPosition = `center ${position}px`;
        window.addEventListener('scroll', ()=>{
            let element = document.querySelector(selector);
            position = element.getBoundingClientRect().top * 0.75;
            element.style.backgroundPosition = `center ${position}px`;
        });
    }
};

;// CONCATENATED MODULE: ./src/components/Testimonials1/index.jsx

/* eslint-disable @next/next/no-img-element */ 






class Testimonials1 extends (external_react_default()).Component {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "arrows",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>this.slider.slickNext()
                    ,
                    className: "next cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pe-7s-angle-right"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>this.slider.slickPrev()
                    ,
                    className: "prev cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pe-7s-angle-left"
                    })
                })
            ]
        }));
    };
    componentDidMount() {
        common_removeOverlay();
        parallaxie('.testimonials.bg-img.parallaxie');
    }
    render() {
        return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: `testimonials section-padding ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.withBG ? "bg-img" : ""} ${this.props.parallaxie ? "parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`,
            style: {
                backgroundImage: `${this.props.withBG && !this.props.imgSrc ? "url(/img/slid/3.jpg)" : this.props.imgSrc ? `url(${this.props.imgSrc})` : "none"}`
            },
            "data-overlay-dark": `${this.props.overlay ? "9" : "0"}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container position-re",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "What Peapole Says?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Testimonials."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "tbg",
                                children: "Testimonials"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center wow fadeInUp",
                        "data-wow-delay": ".5s",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                className: "slic-item",
                                ref: (c)=>this.slider = c
                                ,
                                dots: true,
                                infinite: true,
                                arrows: true,
                                autoplay: true,
                                rows: 1,
                                slidesToScroll: 1,
                                slidesToShow: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Working with Avo digital agency to support our organic and paid social media activity has extended the marketing activities we are able to achieve platform has made collaboration easy."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/clients/1.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Alex Regelman"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Co-founder, Colabrio"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Avo started out managing our SEO efforts, but their scientific approach to digital marketing and the results they have achieved made it an easy decision for us to handover the management."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/clients/1.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Alex Regelman"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Co-founder, Colabrio"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "I would highly recommend Avo Digital. I worked with the team on an animation for our U+2018 Click & Collect U+2019 service. This team is different from any other agency I have worked with in the past."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/clients/1.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Alex Regelman"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Co-founder, Colabrio"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    this.renderArrows()
                ]
            })
        }));
    }
}
/* harmony default export */ const components_Testimonials1 = (Testimonials1);


/***/ })

};
;