'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = require('react-apollo');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _initApollo = require('./initApollo');

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chrisnwamba/Projects/Books/hands-on-nextjs/mern-demo-v0/next-shop/lib/withData.js';


// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);

    (0, _createClass3.default)(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Initial serverState with apollo (empty)
                  serverState = {
                    apollo: {
                      data: {}

                      // Evaluate the composed component's getInitialProps()
                    } };
                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 17;
                    break;
                  }

                  apollo = (0, _initApollo2.default)();
                  _context.prev = 8;
                  _context.next = 11;
                  return (0, _reactApollo.getDataFromTree)(_react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    }
                  }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    }
                  }))), {
                    router: {
                      asPath: ctx.asPath,
                      pathname: ctx.pathname,
                      query: ctx.query
                    }
                  });

                case 11:
                  _context.next = 15;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](8);

                case 15:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  _head2.default.rewind();

                  // Extract query data from the Apollo store
                  serverState = {
                    apollo: {
                      data: apollo.cache.extract()
                    }
                  };

                case 17:
                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 13]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)(_this.props.serverState.apollo.data);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        })));
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi93aXRoRGF0YS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkFwb2xsb1Byb3ZpZGVyIiwiZ2V0RGF0YUZyb21UcmVlIiwiSGVhZCIsImluaXRBcG9sbG8iLCJnZXRDb21wb25lbnREaXNwbGF5TmFtZSIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwibmFtZSIsImN0eCIsInNlcnZlclN0YXRlIiwiYXBvbGxvIiwiZGF0YSIsImNvbXBvc2VkSW5pdGlhbFByb3BzIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9jZXNzIiwiYnJvd3NlciIsInJvdXRlciIsImFzUGF0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJyZXdpbmQiLCJjYWNoZSIsImV4dHJhY3QiLCJwcm9wcyIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWdCOztBQUN6QixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFnQjs7Ozs7Ozs7O0FBRXZCO0FBQ0EsU0FBQSxBQUFTLHdCQUFULEFBQWlDLFdBQVcsQUFDMUM7U0FBTyxVQUFBLEFBQVUsZUFBZSxVQUF6QixBQUFtQyxRQUExQyxBQUFrRCxBQUNuRDtBQUVEOztrQkFBZSw2QkFBcUI7Y0FDbEM7O3NEQUFBO3NDQUFBOzs7V0FBQTt5QkFBQTs2R0FBQSxBQVErQixLQVIvQjtpREFBQTt3RUFBQTtzQkFBQTsrQ0FBQTtxQkFTSTtBQUNJO0FBVlI7OzRCQVdjLEFBQ0EsQUFJVjs7QUFoQkosQUFVc0IsQUFPZDtBQU5NLEFBQ04scUJBRmMsQUFDaEI7QUFYTix5Q0FBQSxBQWlCK0I7O3VCQUN2QixrQkFsQlIsQUFrQjBCLGlCQWxCMUI7b0NBQUE7QUFBQTtBQUFBOztrQ0FBQTt5QkFtQm1DLGtCQUFBLEFBQWtCLGdCQW5CckQsQUFtQm1DLEFBQWtDOztxQkFBL0Q7QUFuQk4sa0RBQUE7O3FCQUFBO3NCQXdCUyxRQXhCVCxBQXdCaUIsU0F4QmpCO29DQUFBO0FBQUE7QUF5Qlk7O0FBekJaLDJCQUFBLEFBeUJxQjtrQ0F6QnJCO2tDQUFBOzJFQThCVSxBQUFDLDZDQUFlLFFBQWhCLEFBQXdCO2dDQUF4QjtrQ0FBQSxBQUNFO0FBREY7bUJBQUEsZ0NBQ0UsQUFBQyw4Q0FBRCxBQUF1Qjs7Z0NBQXZCO2tDQUZFLEFBQ0osQUFDRTtBQUFBO0FBQUE7OzhCQUlVLElBREYsQUFDTSxBQUNaO2dDQUFVLElBRkosQUFFUSxBQUNkOzZCQUFPLElBckNyQixBQTZCYyxBQUlKLEFBQ1UsQUFHSztBQUhMLEFBQ047QUFGSixBQUNFLG1CQUxFOztxQkE3QmQ7a0NBQUE7QUFBQTs7cUJBQUE7a0NBQUE7a0RBQUE7O3FCQThDTTtBQUNBO0FBQ0E7aUNBQUEsQUFBSyxBQUVMOztBQUNBOzs7NEJBRVUsT0FBQSxBQUFPLE1BckR2QixBQW1ETSxBQUFjLEFBQ0osQUFDQSxBQUFhO0FBRGIsQUFDTjtBQUZVLEFBQ1o7O3FCQXBEUjs7aUNBQUE7QUEyRE0scUJBM0ROLEFBNERTOztxQkE1RFQ7cUJBQUE7a0NBQUE7O0FBQUE7aUNBQUE7QUFBQTs7cUNBQUE7a0NBQUE7QUFBQTs7ZUFBQTtBQUFBLEFBZ0VFO0FBaEVGOztzQkFnRUUsQUFBWSxPQUFPOzBDQUFBOzs0SUFBQSxBQUNYLEFBQ047O1lBQUEsQUFBSyxTQUFTLDBCQUFXLE1BQUEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixPQUYvQixBQUVqQixBQUFjLEFBQXlDO2FBQ3hEO0FBbkVIOzs7V0FBQTsrQkFxRVcsQUFDUDsrQkFDRSxBQUFDLDZDQUFlLFFBQVEsS0FBeEIsQUFBNkI7c0JBQTdCO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGdDQUNFLEFBQUMsOENBQXNCLEtBQXZCLEFBQTRCOztzQkFBNUI7d0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISztBQUFBO0FBeEVSO0FBQUE7O1dBQUE7SUFBOEIsZ0JBQTlCLEFBQW9DLG1CQUFwQyxBQUNTLDRCQUEwQix3QkFEbkMsQUFDbUMsQUFDL0IsaUNBRkosQUFJUztpQkFDUSxvQkFBQSxBQUFVLE9BTDNCLEFBSXFCLEFBQ2E7QUFEYixBQUNqQixLQXdFTDtBQTlFRCIsImZpbGUiOiJ3aXRoRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXNud2FtYmEvUHJvamVjdHMvQm9va3MvaGFuZHMtb24tbmV4dGpzL21lcm4tZGVtby12MC9uZXh0LXNob3AifQ==