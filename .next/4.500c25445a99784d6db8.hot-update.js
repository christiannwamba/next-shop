webpackHotUpdate(4,{

/***/ "./components/ProductList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export ProductList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Product__ = __webpack_require__("./components/Product.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Row__ = __webpack_require__("./components/Row.js");
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/ProductList.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  # 2\n  query AllProductsQuery {\n    allProducts {\n      id\n      name\n      imgUrl\n      price\n    }\n  }\n"]);

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ProductList = function ProductList(props) {
  // 1
  if (props.allProductsQuery && props.allProductsQuery.loading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, "Loading");
  } // 2


  if (props.allProductsQuery && props.allProductsQuery.error) {
    console.log(props.allProductsQuery.error);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, "Error");
  } // 3


  var productsToRender = props.allProductsQuery.allProducts;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Row__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, productsToRender.map(function (product) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Product__["a" /* ProductComponent */], {
      product: product,
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  }));
}; // 1

var ALL_PRODUCTS_QUERY = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject); // 3

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(ALL_PRODUCTS_QUERY, {
  name: 'allProductsQuery'
})(ProductList);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductList, "ProductList", "/Users/ore/work/chris/next-shop/components/ProductList.js");
  reactHotLoader.register(ALL_PRODUCTS_QUERY, "ALL_PRODUCTS_QUERY", "/Users/ore/work/chris/next-shop/components/ProductList.js");
  reactHotLoader.register(_default, "default", "/Users/ore/work/chris/next-shop/components/ProductList.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.500c25445a99784d6db8.hot-update.js.map