'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chrisnwamba/Projects/Books/hands-on-nextjs/mern-demo-v0/next-shop/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      console.log(this.props.url.asPath);
      return _react2.default.createElement('div', {
        className: 'jsx-1732077524',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_components.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_components.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(_components.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement(_components.Container, { width: '80%', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1732077524' + ' ' + 'items',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_components.H3, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Creams and Gels'), _react2.default.createElement(_components.ProductList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: '1732077524',
        css: '.items.jsx-1732077524{margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHNkIsZ0JBQ2xCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc253YW1iYS9Qcm9qZWN0cy9Cb29rcy9oYW5kcy1vbi1uZXh0anMvbWVybi1kZW1vLXYwL25leHQtc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSdcblxuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBDb2x1bW4sXG4gIExheW91dCxcbiAgUm93LFxuICBMaW5rLFxuICBOYXYsXG4gIEgxLFxuICBIMyxcbiAgUHJvZHVjdExpc3Rcbn0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy51cmwuYXNQYXRoKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8Q29udGFpbmVyIHdpZHRoPVwiODAlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxuICAgICAgICAgICAgPEgzPkNyZWFtcyBhbmQgR2VsczwvSDM+XG4gICAgICAgICAgICA8UHJvZHVjdExpc3QgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaXRlbXMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbi8vIGNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICA8TmF2IC8+XG4vLyAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICBcbi8vICAgICAgIDwvQ29udGFpbmVyPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICAgIDxDb250YWluZXIgd2lkdGg9XCI4MCVcIj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cbi8vICAgICAgICAgPEgzPkNyZWFtcyBhbmQgR2VsczwvSDM+XG4vLyAgICAgICAgIDxQcm9kdWN0TGlzdCAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9Db250YWluZXI+XG4vLyAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgLml0ZW1zIHtcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbi8vICAgICAgIH1cbi8vICAgICBgfTwvc3R5bGU+XG4vLyAgIDwvZGl2PlxuLy8gKTtcbmNvbnNvbGUubG9nKHdpdGhEYXRhKEluZGV4KSlcbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKEluZGV4KTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return Index;
}(_react2.default.Component);
// const Index = props => (
//   <div>
//     <Layout>
//       <Nav />
//       <Container>

//       </Container>
//     </Layout>
//     <Container width="80%">
//       <div className="items">
//         <H3>Creams and Gels</H3>
//         <ProductList />
//       </div>
//     </Container>
//     <style jsx>{`
//       .items {
//         margin-top: 30px;
//       }
//     `}</style>
//   </div>
// );


console.log((0, _withData2.default)(Index));
exports.default = (0, _withData2.default)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIndpdGhEYXRhIiwiQ29udGFpbmVyIiwiQ29sdW1uIiwiTGF5b3V0IiwiUm93IiwiTGluayIsIk5hdiIsIkgxIiwiSDMiLCJQcm9kdWN0TGlzdCIsIkluZGV4IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwidXJsIiwiYXNQYXRoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBYzs7OztBQUVyQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNLOzs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7NkJBRUssQUFDUDtjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLElBQXZCLEFBQTJCLEFBQzNCOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFISixBQUNFLEFBRUUsQUFJRjtBQUpFO0FBQUEsMkJBSUYsQUFBQyx1Q0FBVSxPQUFYLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esb0NBQUEsQUFBQzs7b0JBQUQ7c0JBVk4sQUFPRSxBQUNFLEFBRUU7QUFBQTtBQUFBO2lCQVZOO2FBREYsQUFDRSxBQW9CSDtBQXBCRzs7Ozs7RUFMYyxnQkFBTSxBO0FBMkIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBQSxBQUFRLElBQUksd0JBQVosQUFBWSxBQUFTLEFBQ3JCO2tCQUFlLHdCQUFmLEFBQWUsQUFBUyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXNud2FtYmEvUHJvamVjdHMvQm9va3MvaGFuZHMtb24tbmV4dGpzL21lcm4tZGVtby12MC9uZXh0LXNob3AifQ==