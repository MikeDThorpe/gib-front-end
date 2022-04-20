"use strict";
(() => {
var exports = {};
exports.id = 804;
exports.ids = [804];
exports.modules = {

/***/ 4847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RecipeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9797);




const RecipesGrid = ({ recipes , limit , displayAll  })=>{
    const { 0: recipesToShow , 1: setRecipesToShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const filteredRecipes = displayAll ? recipes : recipes.reverse().slice(0, limit);
        setRecipesToShow(filteredRecipes);
    }, [
        displayAll,
        recipes,
        limit
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "recipe_card_grid",
        children: recipesToShow.map((recipe)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RecipeCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                recipe: recipe,
                displayMeta: [
                    _RecipeCard__WEBPACK_IMPORTED_MODULE_2__/* .recipeMeta.DATE */ .F.DATE
                ]
            }, recipe.id));
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipesGrid);


/***/ }),

/***/ 4413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_RecipesGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4847);
/* harmony import */ var _components_global_PageSEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5391);



const CategoryPage = ({ categoryTitle , categoryRecipes  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_global_PageSEO__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: `${categoryTitle} Recipes`,
                description: `A collection of ${categoryTitle.toLowerCase()} recipes from giveitbeans.co.uk. Declicious and easy to make ${categoryTitle.toLowerCase()} recipes. Read online and make at home.`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "my-5 text-center bold",
                children: [
                    categoryTitle,
                    " Recipes"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_RecipesGrid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                recipes: categoryRecipes,
                displayAll: true
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryPage);
async function getStaticPaths() {
    const res = await fetch(`${process.env.CMS_HOST}categories`);
    const categoryData = await res.json();
    const paths = categoryData.map((category)=>{
        return {
            params: {
                category: category.slug
            }
        };
    });
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps(context) {
    const categoryTitle = context.params.category[0].toUpperCase() + context.params.category.substring(1);
    const res = await fetch(`${process.env.CMS_HOST}recipes/?category.title=${categoryTitle}`);
    const recipes = await res.json();
    return {
        props: {
            categoryTitle: categoryTitle,
            categoryRecipes: recipes
        }
    };
}


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,391,797], () => (__webpack_exec__(4413)));
module.exports = __webpack_exports__;

})();