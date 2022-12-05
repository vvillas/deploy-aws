"use strict";
exports.id = 5217;
exports.ids = [5217];
exports.modules = {

/***/ 5217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _customFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2455);

const tooltipEffect = ()=>{
    let template1 = document.createElement("div");
    template1.classList.add("div-tooltip-tit");
    document.body.appendChild(template1);
    let template2 = document.createElement("div");
    template2.classList.add("div-tooltip-sub");
    document.body.appendChild(template2);
    document.querySelectorAll("[data-tooltip-tit]").forEach((item)=>{
        template1 = document.querySelector(".div-tooltip-tit");
        item.addEventListener("mouseover", ()=>{
            template1.innerText = item.getAttribute("data-tooltip-tit");
        });
        item.addEventListener("mousemove", (e)=>{
            (0,_customFunctions__WEBPACK_IMPORTED_MODULE_0__/* .fadeIn */ .Ji)(template1, 800);
            template1.style.top = e.pageY + 10 + "px";
            template1.style.left = e.pageX + 20 + "px";
            template1.style.padding = "0px 10px";
        });
        item.addEventListener("mouseleave", ()=>{
            (0,_customFunctions__WEBPACK_IMPORTED_MODULE_0__/* .fadeOut */ .U6)(template1, 800);
            template1.style.padding = 0;
        });
    });
    document.querySelectorAll("[data-tooltip-sub]").forEach((item)=>{
        template2 = document.querySelector(".div-tooltip-sub");
        item.addEventListener("mouseover", ()=>{
            template2.innerText = item.getAttribute("data-tooltip-sub");
        });
        item.addEventListener("mousemove", (e)=>{
            (0,_customFunctions__WEBPACK_IMPORTED_MODULE_0__/* .fadeIn */ .Ji)(template2, 800);
            template2.style.top = e.pageY - 15 + "px";
            template2.style.left = e.pageX + 30 + "px";
            template2.style.padding = "5px 10px";
        });
        item.addEventListener("mouseleave", ()=>{
            (0,_customFunctions__WEBPACK_IMPORTED_MODULE_0__/* .fadeOut */ .U6)(template2, 800);
            template2.style.padding = 0;
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltipEffect);


/***/ })

};
;