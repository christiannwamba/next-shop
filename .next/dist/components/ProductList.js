'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductList = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _Product = require('./Product');

var _Product2 = _interopRequireDefault(_Product);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chrisnwamba/Projects/Books/hands-on-nextjs/mern-demo-v0/next-shop/components/ProductList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  # 2\n  query AllProductsQuery {\n    allProducts {\n      id\n      name\n      imgUrl\n      price\n    }\n  }\n'], ['\n  # 2\n  query AllProductsQuery {\n    allProducts {\n      id\n      name\n      imgUrl\n      price\n    }\n  }\n']);

var ProductList = exports.ProductList = function ProductList(props) {
  // 1
  if (props.allProductsQuery && props.allProductsQuery.loading) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, 'Loading');
  }

  // 2
  if (props.allProductsQuery && props.allProductsQuery.error) {
    console.log(props.allProductsQuery.error);
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, 'Error');
  }

  // 3
  var productsToRender = props.allProductsQuery.allProducts;
  return _react2.default.createElement(_Row2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, productsToRender.map(function (product) {
    return _react2.default.createElement(_Product2.default, { product: product, key: product.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  }));
};

// 1
var ALL_PRODUCTS_QUERY = (0, _graphqlTag2.default)(_templateObject);

// 3
exports.default = (0, _reactApollo.graphql)(ALL_PRODUCTS_QUERY, { name: 'allProductsQuery' })(ProductList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJncmFwaHFsIiwiZ3FsIiwiUHJvZHVjdCIsIlJvdyIsIlByb2R1Y3RMaXN0IiwicHJvcHMiLCJhbGxQcm9kdWN0c1F1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzVG9SZW5kZXIiLCJhbGxQcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJpZCIsIkFMTF9QUk9EVUNUU19RVUVSWSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUVQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVMsQUFFaEI7Ozs7Ozs7Ozs7QUFBTyxJQUFNLG9DQUFjLFNBQWQsQUFBYyxtQkFBUyxBQUNsQztBQUNBO01BQUksTUFBQSxBQUFNLG9CQUFvQixNQUFBLEFBQU0saUJBQXBDLEFBQXFELFNBQVMsQUFDNUQ7MkJBQU8sY0FBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLEtBQUEsRUFBUCxBQUFPLEFBQ1I7QUFFRDs7QUFDQTtNQUFJLE1BQUEsQUFBTSxvQkFBb0IsTUFBQSxBQUFNLGlCQUFwQyxBQUFxRCxPQUFPLEFBQzFEO1lBQUEsQUFBUSxJQUFJLE1BQUEsQUFBTSxpQkFBbEIsQUFBbUMsQUFDbkM7MkJBQU8sY0FBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLEtBQUEsRUFBUCxBQUFPLEFBQ1I7QUFFRDs7QUFDQTtNQUFNLG1CQUFtQixNQUFBLEFBQU0saUJBQS9CLEFBQWdELEFBQ2hEO3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsbUJBQ0csQUFBaUIsSUFBSSxtQkFBQTsyQkFDcEIsQUFBQyxtQ0FBUSxTQUFULEFBQWtCLFNBQVMsS0FBSyxRQUFoQyxBQUF3QztrQkFBeEM7b0JBRG9CLEFBQ3BCO0FBQUE7S0FBQTtBQUhOLEFBQ0UsQUFDRyxBQUtOO0FBckJNOztBQXVCUDtBQUNBLElBQU0scUJBQUEsQUFBcUIsMEJBQTNCOztBQVlBLEFBQ0E7a0JBQWUsMEJBQUEsQUFBUSxvQkFBb0IsRUFBRSxNQUE5QixBQUE0QixBQUFRLHNCQUFuRCxBQUFlLEFBQ2IiLCJmaWxlIjoiUHJvZHVjdExpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzbndhbWJhL1Byb2plY3RzL0Jvb2tzL2hhbmRzLW9uLW5leHRqcy9tZXJuLWRlbW8tdjAvbmV4dC1zaG9wIn0=