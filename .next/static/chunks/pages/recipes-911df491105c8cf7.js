(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[241],{3333:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recipes",function(){return r(4208)}])},9797:function(e,t,r){"use strict";r.d(t,{Z:function(){return l},F:function(){return n}});var n,i=r(5893),s=r(5675),a=r(1664),c=r(9428),o=function(e){var t=new Date(e),r=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],n=t.getDate(),i=t.getFullYear();return"".concat(n," ").concat(r," ").concat(i)};!function(e){e[e.DATE=0]="DATE",e[e.TAGS=1]="TAGS",e[e.CATEGORY=2]="CATEGORY",e[e.COOK_TIME=3]="COOK_TIME",e[e.PEOPLE_SERVED=4]="PEOPLE_SERVED"}(n||(n={}));var l=function(e){var t,r=e.recipe,l=e.displayMeta;return(0,i.jsx)(a.default,{href:"/recipes/".concat(r.category.title.toLowerCase(),"/").concat(r.slug),passHref:!0,children:(0,i.jsxs)("div",{className:"recipe_card",children:[(0,i.jsx)("div",{className:"recipe_card_image",children:(0,i.jsx)(c.Z,{src:""})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{className:"my-2",children:r.title}),(0,i.jsx)("div",{className:"d-flex",children:(0,i.jsx)("div",{className:"d-flex align-items-center",children:(t=l,t.map((function(e){switch(e){case n.DATE:return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("small",{children:["Added ",o(r.created_at)]})});case n.TAGS:return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{src:"/assets/icons/tags-solid.svg",height:18,width:18,alt:"shopping tags icon"}),r.tags.map((function(e,t){return(0,i.jsx)(a.default,{href:"/recipes/tags/".concat(e.title),children:(0,i.jsx)("a",{children:(0,i.jsxs)("h5",{className:"mx-1 my-0 link",children:[e.title,t===r.tags.length-1?"":","]})})},e.id)}))]});case n.CATEGORY:case n.COOK_TIME:case n.PEOPLE_SERVED:return(0,i.jsx)("div",{})}})))})})]})]})})}},4847:function(e,t,r){"use strict";var n=r(5893),i=r(7294),s=r(9797);t.Z=function(e){var t=e.recipes,r=e.limit,a=e.displayAll,c=(0,i.useState)([]),o=c[0],l=c[1];return(0,i.useEffect)((function(){var e=a?t:t.reverse().slice(0,r);l(e)}),[a,t,r]),(0,n.jsx)("section",{className:"recipe_card_grid",children:o.map((function(e){return(0,n.jsx)(s.Z,{recipe:e,displayMeta:[s.F.DATE]},e.id)}))})}},5391:function(e,t,r){"use strict";var n=r(5893),i=r(9008),s=r(1163);t.Z=function(e){var t=e.title,r=e.description,a=e.recipeCategory,c=(0,s.useRouter)();return(0,n.jsxs)(i.default,{children:[(0,n.jsxs)("title",{children:[t," | Giveitbeans.co.uk"]}),(0,n.jsx)("meta",{name:"title",property:"og:title",content:"".concat(t," | Giveitbeans.co.uk")},"title"),(0,n.jsx)("meta",{name:"description",property:"og:description",content:"".concat(r," ").concat(a?"Find more ".concat(a.toLowerCase()," at giveitbeans.co.uk."):void 0)},"description"),(0,n.jsx)("meta",{name:"url",property:"og:url",content:"https://www.giveitbeans.co.uk".concat(c.pathname)},"url"),(0,n.jsx)("meta",{name:"type",property:"og:type",content:"blog"},"type")]})}},9428:function(e,t,r){"use strict";var n=r(5893),i=(r(7294),r(5675));t.Z=function(e){var t=e.src;return t?(0,n.jsx)(i.default,{src:t,alt:"Image of recipe.",layout:"fill",priority:!0}):(0,n.jsx)(i.default,{src:"/assets/images/no-image-thumbnail.jpg",alt:"Image unavailable for this recipe.",layout:"fill",priority:!0})}},4208:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return a}});var n=r(5893),i=r(4847),s=r(5391),a=!0;t.default=function(e){var t=e.recipes;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{title:"All Recipes",description:"Search all recipes from giveitbeans.co.uk. Includes meat, seafood, vegetarian and vegan recipes that are delicious and easy to make at home."}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"bold text-center my-5",children:"Recipes"}),(0,n.jsx)(i.Z,{recipes:t})]})]})}}},function(e){e.O(0,[873,774,888,179],(function(){return t=3333,e(e.s=t);var t}));var t=e.O();_N_E=t}]);