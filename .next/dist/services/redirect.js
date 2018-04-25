'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (context, target) {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    _index2.default.replace(target);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3JlZGlyZWN0LmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsImNvbnRleHQiLCJ0YXJnZXQiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQVUsQUFBVixRQUFxQixBQUNsQztNQUFJLFFBQVEsQUFBWixLQUFpQixBQUNmO0FBQ0E7QUFDQTtZQUFRLEFBQVIsSUFBWSxBQUFaLFVBQXNCLEFBQXRCLEtBQTJCLEVBQUUsVUFBVSxBQUFaLEFBQTNCLEFBQ0E7WUFBUSxBQUFSLElBQVksQUFBWixBQUNEO0FBTEQsU0FLTyxBQUNMO0FBQ0E7b0JBQU8sQUFBUCxRQUFlLEFBQWYsQUFDRDtBQUNGO0FBVkQiLCJmaWxlIjoicmVkaXJlY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzbndhbWJhL1Byb2plY3RzL0Jvb2tzL2hhbmRzLW9uLW5leHRqcy9tZXJuLWRlbW8tdjAvbmV4dC1zaG9wIn0=