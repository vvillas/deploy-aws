"use strict";
exports.id = 4848;
exports.ids = [4848];
exports.modules = {

/***/ 4848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(2455);
;// CONCATENATED MODULE: ./src/common/navbar.js

const handleDropdown = (e)=>{
    (0,customFunctions/* getSiblings */.m7)(e.target.parentElement).filter((item)=>item.classList.contains("show")
    ).map((item)=>{
        item.classList.remove("show");
        if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
            item.childNodes[1].classList.remove("show");
        }
    });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
};
const handleMobileDropdown = (e)=>{
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
};
const handleSearch = ()=>{
    let searchForm = document.querySelector(".navbar .search .search-form");
    document.querySelector(".navbar .search .icon").addEventListener("click", function() {
        searchForm.style.display = "block";
        (0,customFunctions/* fadeIn */.Ji)(searchForm, 200);
    });
    document.querySelector(".navbar .search .search-form .close").addEventListener("click", function() {
        searchForm.style.display = "none";
        (0,customFunctions/* fadeOut */.U6)(searchForm, 200);
    });
};

;// CONCATENATED MODULE: ./src/components/Navbar/index.jsx

/* eslint-disable @next/next/no-img-element */ 




const Navbar = ({ lr , nr , theme  })=>{
    external_react_default().useEffect(()=>{
        handleSearch();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ref: nr,
        className: `navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "logo",
                        children: theme ? theme === "themeL" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            ref: lr,
                            src: `${app/* darkLogo */.Q1}`,
                            alt: "logo"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            ref: lr,
                            src: `${app/* lightLogo */.E8}`,
                            alt: "logo"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            ref: lr,
                            src: `${app/* lightLogo */.E8}`,
                            alt: "logo"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    onClick: handleMobileDropdown,
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "icon-bar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-bars"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav ml-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: handleDropdown,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "nav-link dropdown-toggle",
                                            "data-toggle": "dropdown",
                                            role: "button",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "dropdown-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/home/home1-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Main Home"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/home/home2-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Creative Studio"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/home/home3-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Business Startup"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/home/home4-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "One Page"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/home/home5-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Freelancer"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: handleDropdown,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "nav-link dropdown-toggle",
                                            "data-toggle": "dropdown",
                                            role: "button",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            children: "Showcases"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "dropdown-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase/showcase-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Full Screen"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase2/showcase2-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Creative Carousel"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase3/showcase3-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Radius Carousel"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase4/showcase4-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Columns Carousel"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase5/showcase5-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Boxed Carousel"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            children: "About"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: handleDropdown,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "nav-link dropdown-toggle",
                                            "data-toggle": "dropdown",
                                            role: "button",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            children: "portfolio"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "dropdown-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/works/works-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Mouse Info"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/works2/works2-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Masonry 3 Columns"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/works3/works3-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Masonry 2 Columns"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/works4/works4-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Pinterest List"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/contact/contact-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            children: "Contact"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "search",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon pe-7s-search cursor-pointer"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "search-form text-center custom-font",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                                            initialValues: {
                                                search: ""
                                            },
                                            onSubmit: async (values)=>{
                                                alert(JSON.stringify(values, null, 2));
                                                // Reset the values
                                                values.search = "";
                                            },
                                            children: ({ errors , touched  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Form, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                        type: "text",
                                                        name: "search",
                                                        placeholder: "Search"
                                                    })
                                                })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "close pe-7s-close cursor-pointer"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);


/***/ })

};
;