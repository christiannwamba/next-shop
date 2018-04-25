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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _components = require('../components');

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _redirect = require('../services/redirect');

var _redirect2 = _interopRequireDefault(_redirect);

var _Auth = require('../services/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chrisnwamba/Projects/Books/hands-on-nextjs/mern-demo-v0/next-shop/pages/protected.js?entry';


var auth = new _Auth2.default();

var Callback = function (_React$Component) {
  (0, _inherits3.default)(Callback, _React$Component);

  function Callback() {
    (0, _classCallCheck3.default)(this, Callback);

    return (0, _possibleConstructorReturn3.default)(this, (Callback.__proto__ || (0, _getPrototypeOf2.default)(Callback)).apply(this, arguments));
  }

  (0, _createClass3.default)(Callback, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!auth.isAuthenticated()) (0, _redirect2.default)({}, '/');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_components.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_components.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement(_components.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Yo I am authenticated')));
    }
  }]);

  return Callback;
}(_react2.default.Component);

exports.default = Callback;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb3RlY3RlZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhEYXRhIiwiTGF5b3V0IiwiTmF2IiwiQ29udGFpbmVyIiwiZ3JhcGhxbCIsImdxbCIsInJlZGlyZWN0IiwiQXV0aCIsImF1dGgiLCJDYWxsYmFjayIsImlzQXV0aGVudGljYXRlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBRXJCLEFBQVMsQUFBUSxBQUFLLEFBQWlCOztBQUV2QyxBQUFTOztBQUNULEFBQU87Ozs7QUFFUCxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFFakIsSUFBTSxPQUFOLEFBQWEsQUFBSTs7SUFFWCxBOzs7Ozs7Ozs7Ozt3Q0FDZ0IsQUFDbEI7VUFBRyxDQUFDLEtBQUosQUFBSSxBQUFLLG1CQUFtQix3QkFBQSxBQUFTLElBQVQsQUFBYSxBQUMxQzs7Ozs2QkFFUSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FKTixBQUNFLEFBQ0UsQUFFRSxBQU1QOzs7OztFQWhCb0IsZ0JBQU0sQSxBQW1CN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHJvdGVjdGVkLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc253YW1iYS9Qcm9qZWN0cy9Cb29rcy9oYW5kcy1vbi1uZXh0anMvbWVybi1kZW1vLXYwL25leHQtc2hvcCJ9