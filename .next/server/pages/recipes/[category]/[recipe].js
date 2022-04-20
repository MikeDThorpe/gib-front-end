"use strict";
(() => {
var exports = {};
exports.id = 611;
exports.ids = [611];
exports.modules = {

/***/ 6299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _recipe_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/global/BreadCrumbs.tsx



const BreadCrumbs = ({ data  })=>{
    const router = (0,router_.useRouter)();
    const formatBreadCrumbs = ()=>{
        return data.map((breadCrumb, index)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: `${router.basePath}${breadCrumb.url.toLowerCase()}`,
                        children: breadCrumb.title
                    }),
                    index != data.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "px-2",
                        children: "/"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                ]
            }, index));
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: formatBreadCrumbs()
    }));
};
/* harmony default export */ const global_BreadCrumbs = (BreadCrumbs);

// EXTERNAL MODULE: ./components/page/Recipe/RecipeThumbnail.tsx
var RecipeThumbnail = __webpack_require__(9428);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/page/Recipe/RecipeMeta.tsx




const RecipeMeta = ({ recipe  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "recipe_meta",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "bold",
                children: recipe.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "recipe_meta_title_underline mt-3 mb-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "mb-4",
                children: recipe.description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "recipe_meta_grid",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/assets/icons/utensils-solid.svg",
                                height: 20,
                                width: 20,
                                alt: "kitchen utensils icon"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                className: "px-2 bold",
                                children: [
                                    recipe.category.title.toUpperCase(),
                                    " RECIPE"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/assets/icons/tags-solid.svg",
                                height: 20,
                                width: 20,
                                alt: "shopping tags icon"
                            }),
                            recipe.tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `/recipes/tags/${tag.slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                            className: "mx-1 my-0 bold",
                                            children: [
                                                tag.title.toUpperCase(),
                                                index === recipe.tags.length - 1 ? "" : ","
                                            ]
                                        })
                                    })
                                }, tag.id)
                            )
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/assets/icons/user-solid.svg",
                                height: 20,
                                width: 20,
                                alt: "a person icon"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                className: "px-2 bold",
                                children: [
                                    "FEEDS ",
                                    recipe.serves,
                                    " ",
                                    recipe.serves == 1 ? "PERSON" : "PEOPLE"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/assets/icons/clock-solid.svg",
                                height: 20,
                                width: 20,
                                alt: "a clock icon"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                className: "px-2 bold",
                                children: [
                                    "READY IN ",
                                    recipe.cook_time,
                                    " MINUTES"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Recipe_RecipeMeta = (RecipeMeta);

;// CONCATENATED MODULE: ./components/page/Recipe/RecipeHeader.tsx



const RecipeHeader = ({ recipe  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "mt-4 recipe_header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "recipe_header_image",
                children: /*#__PURE__*/ jsx_runtime_.jsx(RecipeThumbnail/* default */.Z, {
                    src: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Recipe_RecipeMeta, {
                recipe: recipe
            })
        ]
    }));
};
/* harmony default export */ const Recipe_RecipeHeader = (RecipeHeader);

;// CONCATENATED MODULE: ./components/page/Recipe/RecipeIngredients.tsx


const RecipeIngredients = ({ ingredients  })=>{
    const outputIngredients = ()=>{
        return ingredients.split("-").map((ingredient, index)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: ingredient.trim()
            }, index));
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-bottom pb-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "What You'll Need"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "pt-3",
                children: outputIngredients()
            })
        ]
    }));
};
/* harmony default export */ const Recipe_RecipeIngredients = (RecipeIngredients);

;// CONCATENATED MODULE: ./components/page/Recipe/RecipeInstructions.tsx


const RecipeInstructions = ({ instructions  })=>{
    // data is send with markdown syntax - split the instructions string on every new lin character i.e \n
    const outputInstructions = ()=>{
        return instructions.split("\n").map((instruction, index)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-5 d-flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "me-3",
                        children: index + 1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: instruction
                    })
                ]
            }, index));
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-bottom pb-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "How To Make It"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("article", {
                className: "pt-4",
                children: outputInstructions()
            })
        ]
    }));
};
/* harmony default export */ const Recipe_RecipeInstructions = (RecipeInstructions);

;// CONCATENATED MODULE: ./components/page/Recipe/RecipeBody.tsx



const RecipeBody = ({ recipe  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "mt-5 recipe_body",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Recipe_RecipeIngredients, {
                ingredients: recipe.ingredients
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Recipe_RecipeInstructions, {
                instructions: recipe.instructions
            })
        ]
    }));
};
/* harmony default export */ const Recipe_RecipeBody = (RecipeBody);

;// CONCATENATED MODULE: ./hooks/useLinkedRecipes.ts

const useLinkedRecipes = (contentTitle, focusRecipeId // ensures recipe isn't suggested on its own page
)=>{
    const { 0: recipes1 , 1: setRecipes  } = (0,external_react_.useState)([]);
    const { 0: fetchingData , 1: setFetchingData  } = (0,external_react_.useState)(false);
    const fetchRecipesByCategory = async ()=>{
        const res = await fetch(`${"https://giveitbeans-cms.herokuapp.com/"}recipes?category.title=${contentTitle}`);
        const recipes = await res.json();
        let filteredRecipes = recipes.filter((recipe)=>recipe.id !== focusRecipeId
        ).slice(recipes.length - 6, recipes.length);
        setRecipes(filteredRecipes);
    };
    (0,external_react_.useEffect)(()=>{
        setFetchingData(true);
        fetchRecipesByCategory();
        setFetchingData(false);
    }, [
        contentTitle
    ]);
    return {
        recipes: recipes1,
        fetchingData
    };
};
/* harmony default export */ const hooks_useLinkedRecipes = (useLinkedRecipes);

// EXTERNAL MODULE: ./components/features/RecipeCard.tsx + 1 modules
var RecipeCard = __webpack_require__(9797);
;// CONCATENATED MODULE: ./components/features/LinkedCategoryRecipes.tsx





const LinkedCategoryRecipes = ({ categoryTitle , focusRecipeId  })=>{
    const { recipes , fetchingData  } = hooks_useLinkedRecipes(categoryTitle, focusRecipeId);
    console.log(recipes);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "border-top",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "my-4",
                children: [
                    "More ",
                    categoryTitle,
                    " Recipes"
                ]
            }),
            fetchingData ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Loading..."
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "recipe_card_grid",
                children: recipes.map((recipe, index)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(RecipeCard/* default */.Z, {
                            recipe: recipe,
                            displayMeta: [
                                RecipeCard/* recipeMeta.TAGS */.F.TAGS
                            ]
                        })
                    }, index));
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/recipes/${categoryTitle.toLowerCase()}`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "button button-main d-block mx-auto mt-5",
                        children: "More Vegetarian Recipes"
                    })
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/global/PageSEO.tsx
var PageSEO = __webpack_require__(5391);
;// CONCATENATED MODULE: ./pages/recipes/[category]/[recipe].tsx







const RecipePage = ({ recipe  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageSEO/* default */.Z, {
                title: recipe.title,
                description: recipe.description,
                recipeCategory: recipe.category.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(global_BreadCrumbs, {
                    data: [
                        {
                            title: "Recipes",
                            url: "/recipes"
                        },
                        {
                            title: `${recipe.category.title}`,
                            url: `/recipes/${recipe.category.title}`
                        },
                        {
                            title: `${recipe.title}`,
                            url: `/recipes/${recipe.category.title}/${recipe.slug}`
                        }, 
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Recipe_RecipeHeader, {
                recipe: recipe
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Recipe_RecipeBody, {
                recipe: recipe
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LinkedCategoryRecipes, {
                categoryTitle: recipe.category.title,
                focusRecipeId: recipe.id
            })
        ]
    }));
};
/* harmony default export */ const _recipe_ = (RecipePage);
const getStaticPaths = async ()=>{
    const apiResponse = await fetch(`${process.env.CMS_HOST}recipes`);
    const recipeData = await apiResponse.json();
    const paths = recipeData.map((recipe)=>{
        return {
            params: {
                category: recipe.category.slug,
                recipe: recipe.slug
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const apiResponse = await fetch(`${process.env.CMS_HOST}recipes/${context.params.recipe}`);
    const recipeData = await apiResponse.json();
    return {
        props: {
            recipe: recipeData
        }
    };
};


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,391,797], () => (__webpack_exec__(6299)));
module.exports = __webpack_exports__;

})();