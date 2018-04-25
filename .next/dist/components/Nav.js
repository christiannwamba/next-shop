'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _Auth = require('../services/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chrisnwamba/Projects/Books/hands-on-nextjs/mern-demo-v0/next-shop/components/Nav.js';


var auth = new _Auth2.default();
var Nav = exports.Nav = function Nav(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-3384355531',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('nav', (0, _extends3.default)({}, props, {
    className: 'jsx-3384355531' + ' ' + (props.className != null && props.className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_index.Container, { width: '95%', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_index.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_index.Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_index.H1, { isbrand: 'true', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Universal Shop')), _react2.default.createElement(_index.Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_index.Row, { justifyContent: 'flex-end', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_index.Column, { width: '60px', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_index.Link, { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Sign up')), _react2.default.createElement(_index.Column, { width: '60px', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('span', { onClick: function onClick() {
      return auth.login();
    }, className: 'jsx-3384355531',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Log in'))))), _react2.default.createElement(_index.Row, { justifyContent: 'flex-end', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_index.Column, { width: '50%', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_index.Search, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), _react2.default.createElement(_index.Column, { width: '20%', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_index.CartButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }))))), _react2.default.createElement(_style2.default, {
    styleId: '3384355531',
    css: 'nav.jsx-3384355531{padding:2rem;margin-bottom:5rem;background:#F8CB00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDZ0IsQUFHc0IsYUFDTSxtQkFDQSxtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9OYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzbndhbWJhL1Byb2plY3RzL0Jvb2tzL2hhbmRzLW9uLW5leHRqcy9tZXJuLWRlbW8tdjAvbmV4dC1zaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgQ29sdW1uLCBSb3csIExpbmssIEgxLCBTZWFyY2gsIENhcnRCdXR0b24gfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBBdXRoIGZyb20gJy4uL3NlcnZpY2VzL0F1dGgnO1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGgoKTtcbmV4cG9ydCBjb25zdCBOYXYgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPG5hdiB7Li4ucHJvcHN9PlxuICAgICAgPENvbnRhaW5lciB3aWR0aD1cIjk1JVwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8SDEgaXNicmFuZD1cInRydWVcIj5Vbml2ZXJzYWwgU2hvcDwvSDE+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxSb3cganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiNjBweFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+U2lnbiB1cDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI2MHB4XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gYXV0aC5sb2dpbigpfT5Mb2cgaW48L3NwYW4+XG4gICAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiNTAlXCI+XG4gICAgICAgICAgPFNlYXJjaD48L1NlYXJjaD5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMjAlXCI+XG4gICAgICAgICAgPENhcnRCdXR0b24+PC9DYXJ0QnV0dG9uPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvbmF2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICNGOENCMDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiXX0= */\n/*@ sourceURL=components/Nav.js */'
  }));
};

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiQ29sdW1uIiwiUm93IiwiTGluayIsIkgxIiwiU2VhcmNoIiwiQ2FydEJ1dHRvbiIsIkF1dGgiLCJhdXRoIiwiTmF2IiwicHJvcHMiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBVyxBQUFRLEFBQUssQUFBTSxBQUFJLEFBQVEsQUFBa0I7O0FBQ3JFLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLElBQU0sT0FBTixBQUFhLEFBQUksQUFDakI7QUFBTyxJQUFNLG9CQUFNLFNBQU4sQUFBTSxXQUFBO3lCQUNqQixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQSxrQ0FBQSxBQUFTO3VGQUFUOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxzQkFDRSxBQUFDLGtDQUFVLE9BQVgsQUFBaUI7Z0JBQWpCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLDJCQUFHLFNBQUosQUFBWTtnQkFBWjtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBRUYsb0NBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyw0QkFBSSxnQkFBTCxBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsK0JBQU8sT0FBUixBQUFjO2dCQUFkO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLDZCQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBRUYsNkJBQUEsQUFBQywrQkFBTyxPQUFSLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsVUFBTSxTQUFTLG1CQUFBO2FBQU0sS0FBTixBQUFNLEFBQUs7QUFBMUIsa0JBQUE7O2dCQUFBO2tCQUFBO0FBQUE7S0FYVixBQUNFLEFBSUUsQUFDRSxBQUlFLEFBQ0UsQUFLUiwrQkFBQSxBQUFDLDRCQUFJLGdCQUFMLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQywrQkFBTyxPQUFSLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDQTtBQURBO3FCQUNBLEFBQUM7O2dCQUFEO2tCQUZGLEFBQ0UsQUFDQSxBQUVBO0FBRkE7QUFBQSx1QkFFQSxBQUFDLCtCQUFPLE9BQVIsQUFBYztnQkFBZDtrQkFBQSxBQUNBO0FBREE7cUJBQ0EsQUFBQzs7Z0JBQUQ7a0JBdkJSLEFBQ0UsQUFDRSxBQWdCRSxBQUlFLEFBQ0E7QUFBQTtBQUFBO2FBdkJSO1NBRGlCLEFBQ2pCO0FBQUE7QUFESyxBQXVDUDs7a0JBQUEsQUFBZSIsImZpbGUiOiJOYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzbndhbWJhL1Byb2plY3RzL0Jvb2tzL2hhbmRzLW9uLW5leHRqcy9tZXJuLWRlbW8tdjAvbmV4dC1zaG9wIn0=