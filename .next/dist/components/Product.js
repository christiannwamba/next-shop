'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = undefined;

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chrisnwamba/Projects/Books/hands-on-nextjs/mern-demo-v0/next-shop/components/Product.js';
var Product = exports.Product = function Product(props) {
  return _react2.default.createElement(_Column2.default, { width: '25%', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-580585316' + ' ' + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-580585316' + ' ' + 'img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('img', { src: props.product.imgUrl, alt: props.product.name, className: 'jsx-580585316',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), _react2.default.createElement('p', {
    className: 'jsx-580585316' + ' ' + 'name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.product.name), _react2.default.createElement('p', {
    className: 'jsx-580585316' + ' ' + 'price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, '$', props.product.price), _react2.default.createElement('button', {
    className: 'jsx-580585316',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Add to cart')), _react2.default.createElement(_style2.default, {
    styleId: '580585316',
    css: '.product.jsx-580585316{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;margin-bottom:20px;background:#FFFFFF;border:1px solid #E4E4E4;box-shadow:0 4px 14px 7px rgba(121,121,121,0.05);border-radius:4px;height:350px;padding:15px 20px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}button.jsx-580585316{margin:-15px -20px;height:40px;background:#6364D8;color:#fff;font-weight:200;border:none;}p.price.jsx-580585316{color:#F8CB00;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHc0IsQUFhTSxBQVFMLGNBQ0MsS0FSSixVQVNiLEVBUnFCLG1CQUNSLFdBQ0ssYUFoQk0sR0FpQlYsWUFDZCwrREFqQm9CLGtCQUNDLG1CQUNBLG1CQUNNLHlCQUN3QixpREFDL0Isa0JBQ0wsYUFDSyxrQkFDWSxtSEFDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc253YW1iYS9Qcm9qZWN0cy9Cb29rcy9oYW5kcy1vbi1uZXh0anMvbWVybi1kZW1vLXYwL25leHQtc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9Db2x1bW4nO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9IHByb3BzID0+IChcbiAgPENvbHVtbiB3aWR0aD1cIjI1JVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgIDxpbWcgc3JjPXtwcm9wcy5wcm9kdWN0LmltZ1VybH0gYWx0PXtwcm9wcy5wcm9kdWN0Lm5hbWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj57cHJvcHMucHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JHtwcm9wcy5wcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgIDxidXR0b24+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucHJvZHVjdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U0RTRFNDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTRweCA3cHggcmdiYSgxMjEsMTIxLDEyMSwwLjA1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogLTE1cHggLTIwcHg7XG4gICAgICAgIGhlaWdodCA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNjM2NEQ4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuICAgICAgcC5wcmljZSB7XG4gICAgICAgIGNvbG9yOiAjRjhDQjAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0NvbHVtbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXX0= */\n/*@ sourceURL=components/Product.js */'
  }));
};

exports.default = Product;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbHVtbiIsIlByb2R1Y3QiLCJwcm9wcyIsInByb2R1Y3QiLCJpbWdVcmwiLCJuYW1lIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU8sQUFBWSxBQUVuQjs7Ozs7OztBQUFPLElBQU0sNEJBQVUsU0FBVixBQUFVLGVBQUE7eUJBQ3JCLEFBQUMsa0NBQU8sT0FBUixBQUFjO2dCQUFkO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUE7dUNBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt1Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNBO0FBREE7QUFBQSw0Q0FDSyxLQUFLLE1BQUEsQUFBTSxRQUFoQixBQUF3QixRQUFRLEtBQUssTUFBQSxBQUFNLFFBQTNDLEFBQW1ELGlCQUFuRDs7Z0JBQUE7a0JBRkYsQUFDRSxBQUNBLEFBRUE7QUFGQTt1QkFFQSxjQUFBO3VDQUFBLEFBQWE7O2dCQUFiO2tCQUFBLEFBQXFCO0FBQXJCO0FBQUEsV0FBcUIsQUFBTSxRQUo3QixBQUlFLEFBQW1DLEFBQ25DLHVCQUFBLGNBQUE7dUNBQUEsQUFBYTs7Z0JBQWI7a0JBQUE7QUFBQTtBQUFBLEtBQXVCLFdBQUEsQUFBTSxRQUwvQixBQUtFLEFBQXFDLEFBQ3JDLHdCQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBUEosQUFDRSxBQU1FO2FBUEo7U0FEcUIsQUFDckI7QUFBQTtBQURLLEFBd0NQOztrQkFBQSxBQUFlIiwiZmlsZSI6IlByb2R1Y3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzbndhbWJhL1Byb2plY3RzL0Jvb2tzL2hhbmRzLW9uLW5leHRqcy9tZXJuLWRlbW8tdjAvbmV4dC1zaG9wIn0=