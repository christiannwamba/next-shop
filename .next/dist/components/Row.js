'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chrisnwamba/Projects/Books/hands-on-nextjs/mern-demo-v0/next-shop/components/Row.js';
var Row = exports.Row = function Row(props) {
  return _react2.default.createElement('div', (0, _extends3.default)({}, props, {
    className: _style2.default.dynamic([['8401064', [props.justifyContent || 'flex-start', props.alignItems || 'stretch']]]) + ' ' + (props.className != null && props.className || 'row'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), props.children, _react2.default.createElement(_style2.default, {
    styleId: '8401064',
    css: '.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-0.5rem;margin-left:-0.5rem;-webkit-box-pack:' + (props.justifyContent || 'flex-start') + ';-webkit-justify-content:' + (props.justifyContent || 'flex-start') + ';-ms-flex-pack:' + (props.justifyContent || 'flex-start') + ';justify-content:' + (props.justifyContent || 'flex-start') + ';-webkit-align-items:' + (props.alignItems || 'stretch') + ';-webkit-box-align:' + (props.alignItems || 'stretch') + ';-ms-flex-align:' + (props.alignItems || 'stretch') + ';align-items:' + (props.alignItems || 'stretch') + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUU2QixzQkFDVCwwRUFDQyxzREFDQyx5REFDTSxxQkFDRCxvQkFDeUIsMkxBQ0oscUxBQzNDIiwiZmlsZSI6ImNvbXBvbmVudHMvUm93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc253YW1iYS9Qcm9qZWN0cy9Cb29rcy9oYW5kcy1vbi1uZXh0anMvbWVybi1kZW1vLXYwL25leHQtc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBSb3cgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgey4uLnByb3BzfT5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAwIDEgYXV0bztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgICAganVzdGlmeS1jb250ZW50OiAke3Byb3BzLmp1c3RpZnlDb250ZW50IHx8ICdmbGV4LXN0YXJ0J307XG4gICAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zIHx8ICdzdHJldGNoJ307XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiJdfQ== */\n/*@ sourceURL=components/Row.js */',
    dynamic: [props.justifyContent || 'flex-start', props.alignItems || 'stretch']
  }));
};

exports.default = Row;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUm93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm93IiwicHJvcHMiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUVQOzs7Ozs7O0FBQU8sSUFBTSxvQkFBTSxTQUFOLEFBQU0sV0FBQTt5QkFDakIsY0FBQSxrQ0FBQSxBQUF5QjtxREFTRixNQUFBLEFBQU0sa0JBVDdCLEFBUytDLGNBQzVCLE1BQUEsQUFBTSxjQVZ6QixBQVV1QyxxRUFWdkMsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRztBQURIO0FBQUEsSUFBQSxRQUFBLEFBQ1M7YUFEVDtzVEFTdUIsTUFBQSxBQUFNLGtCQVQ3QixBQVMrQywrQ0FBeEIsTUFBQSxBQUFNLGtCQVQ3QixBQVMrQyxxQ0FBeEIsTUFBQSxBQUFNLGtCQVQ3QixBQVMrQyx1Q0FBeEIsTUFBQSxBQUFNLGtCQVQ3QixBQVMrQywyQ0FDNUIsTUFBQSxBQUFNLGNBVnpCLEFBVXVDLHNDQUFwQixNQUFBLEFBQU0sY0FWekIsQUFVdUMsbUNBQXBCLE1BQUEsQUFBTSxjQVZ6QixBQVV1QyxnQ0FBcEIsTUFBQSxBQUFNLGNBVnpCLEFBVXVDLGFBVnZDO2NBU3VCLE1BQUEsQUFBTSxrQkFUN0IsQUFTK0MsY0FDNUIsTUFBQSxBQUFNLGNBWFIsQUFDakIsQUFVdUM7QUFWdkM7QUFESyxBQWdCUDs7a0JBQUEsQUFBZSIsImZpbGUiOiJSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzbndhbWJhL1Byb2plY3RzL0Jvb2tzL2hhbmRzLW9uLW5leHRqcy9tZXJuLWRlbW8tdjAvbmV4dC1zaG9wIn0=