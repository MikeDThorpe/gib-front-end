"use strict";
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 9797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ features_RecipeCard),
  "F": () => (/* binding */ recipeMeta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/page/Recipe/RecipeThumbnail.tsx
var RecipeThumbnail = __webpack_require__(9428);
;// CONCATENATED MODULE: ./js/utils.ts
const parseDate = (dateString)=>{
    const date = new Date(dateString);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December", 
    ];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return `${day} ${month} ${year}`;
};

;// CONCATENATED MODULE: ./components/features/RecipeCard.tsx





var recipeMeta;
(function(recipeMeta) {
    recipeMeta[recipeMeta["DATE"] = 0] = "DATE";
    recipeMeta[recipeMeta["TAGS"] = 1] = "TAGS";
    recipeMeta[recipeMeta["CATEGORY"] = 2] = "CATEGORY";
    recipeMeta[recipeMeta["COOK_TIME"] = 3] = "COOK_TIME";
    recipeMeta[recipeMeta["PEOPLE_SERVED"] = 4] = "PEOPLE_SERVED";
})(recipeMeta || (recipeMeta = {}));
const RecipeCard = ({ recipe , displayMeta  })=>{
    const buildMetaInfo = (recipeMetaArr)=>{
        return recipeMetaArr.map((meta)=>{
            switch(meta){
                case recipeMeta.DATE:
                    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                            children: [
                                "Added ",
                                parseDate(recipe.created_at)
                            ]
                        })
                    }));
                case recipeMeta.TAGS:
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/assets/icons/tags-solid.svg",
                                height: 18,
                                width: 18,
                                alt: "shopping tags icon"
                            }),
                            recipe.tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `/recipes/tags/${tag.title}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                            className: "mx-1 my-0 link",
                                            children: [
                                                tag.title,
                                                index === recipe.tags.length - 1 ? "" : ","
                                            ]
                                        })
                                    })
                                }, tag.id)
                            )
                        ]
                    }));
                case recipeMeta.CATEGORY:
                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {}));
                case recipeMeta.COOK_TIME:
                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {}));
                case recipeMeta.PEOPLE_SERVED:
                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {}));
            }
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/recipes/${recipe.category.title.toLowerCase()}/${recipe.slug}`,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "recipe_card",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "recipe_card_image",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(RecipeThumbnail/* default */.Z, {
                        src: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "my-2",
                            children: recipe.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "d-flex",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "d-flex align-items-center",
                                children: buildMetaInfo(displayMeta)
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const features_RecipeCard = (RecipeCard);


/***/ }),

/***/ 9428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);



const RecipeThumbnail = ({ src  })=>{
    if (!src) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
            src: "/assets/images/no-image-thumbnail.jpg",
            alt: "Image unavailable for this recipe.",
            layout: "fill",
            priority: true
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: src,
        alt: "Image of recipe.",
        layout: "fill",
        priority: true
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeThumbnail);


/***/ })

};
;