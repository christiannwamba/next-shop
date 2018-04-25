'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _auth0Js = require('auth0-js');

var _auth0Js2 = _interopRequireDefault(_auth0Js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = function () {
  function Auth() {
    (0, _classCallCheck3.default)(this, Auth);

    this.auth0 = new _auth0Js2.default.WebAuth({
      domain: 'chris92.auth0.com',
      clientID: '5NSAZYKiZYRRrPvT0T0v6PdjyxM3rhXF',
      redirectUri: 'http://localhost:3000/callback',
      audience: 'https://chris92.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid profile email'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  (0, _createClass3.default)(Auth, [{
    key: 'handleAuthentication',
    value: function handleAuthentication(cb) {
      var _this = this;

      // const hash = process.browser ? window.location.hash : context.asPath;

      this.auth0.parseHash({ hash: window.location.hash }, function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            _this.storeAuth0Cred(authResult, profile);
            cb(false, (0, _extends3.default)({}, authResult, profile));
          });
        } else if (err) {
          console.log(err);
          cb(true, err);
        }
      });
    }
  }, {
    key: 'storeAuth0Cred',
    value: function storeAuth0Cred(authResult, profile) {
      // Set the time that the access token will expire at
      var expiresAt = (0, _stringify2.default)(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem('next_shop_access_token', authResult.accessToken);
      localStorage.setItem('next_shop_id_token', authResult.idToken);
      localStorage.setItem('next_shop_expires_at', expiresAt);
      localStorage.setItem('next_shop_profile', (0, _stringify2.default)(profile));

      // navigate to the home route
      // history.replace('/dashboard');
    }
  }, {
    key: 'storeGraphCoolCred',
    value: function storeGraphCoolCred(authResult) {
      localStorage.setItem('next_shop_gcool_token', authResult.token);
      localStorage.setItem('next_shop_gcool_id', authResult.id);
    }
  }, {
    key: 'login',
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: 'logout',
    value: function logout() {
      // Clear access token and ID token from local storage
      localStorage.removeItem('next_shop_access_token');
      localStorage.removeItem('next_shop_id_token');
      localStorage.removeItem('next_shop_expires_at');
      localStorage.removeItem('next_shop_profile');
      // navigate to the home route
      history.replace('/');
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      // Check whether the current time is past the
      // access token's expiry time
      var expiresAt = JSON.parse(localStorage.getItem('next_shop_expires_at'));
      return new Date().getTime() < expiresAt;
    }
  }, {
    key: 'getProfile',
    value: function getProfile() {
      return JSON.parse(localStorage.getItem('next_shop_profile'));
    }
  }]);

  return Auth;
}();

exports.default = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0F1dGguanMiXSwibmFtZXMiOlsiYXV0aDAiLCJBdXRoIiwiV2ViQXV0aCIsImRvbWFpbiIsImNsaWVudElEIiwicmVkaXJlY3RVcmkiLCJhdWRpZW5jZSIsInJlc3BvbnNlVHlwZSIsInNjb3BlIiwibG9naW4iLCJiaW5kIiwibG9nb3V0IiwiaGFuZGxlQXV0aGVudGljYXRpb24iLCJpc0F1dGhlbnRpY2F0ZWQiLCJjYiIsInBhcnNlSGFzaCIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImVyciIsImF1dGhSZXN1bHQiLCJhY2Nlc3NUb2tlbiIsImlkVG9rZW4iLCJjbGllbnQiLCJ1c2VySW5mbyIsInByb2ZpbGUiLCJzdG9yZUF1dGgwQ3JlZCIsImNvbnNvbGUiLCJsb2ciLCJleHBpcmVzQXQiLCJleHBpcmVzSW4iLCJEYXRlIiwiZ2V0VGltZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsImlkIiwiYXV0aG9yaXplIiwicmVtb3ZlSXRlbSIsImhpc3RvcnkiLCJyZXBsYWNlIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7OztJLEFBRWMsbUJBV25CO2tCQUFjO3dDQUFBOztTQVZkLEFBVWMsWUFWRixrQkFBSixBQUFVO2NBQVEsQUFDaEIsQUFDUjtnQkFGd0IsQUFFZCxBQUNWO21CQUh3QixBQUdYLEFBQ2I7Z0JBSndCLEFBSWQsQUFDVjtvQkFMd0IsQUFLVixBQUNkO2FBTk0sQUFBa0IsQUFPdEIsQUFHVSxBQUNaO0FBWHdCLEFBQ3hCLEtBRE07O1NBV04sQUFBSyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBeEIsQUFBYSxBQUFnQixBQUM3QjtTQUFBLEFBQUssU0FBUyxLQUFBLEFBQUssT0FBTCxBQUFZLEtBQTFCLEFBQWMsQUFBaUIsQUFDL0I7U0FBQSxBQUFLLHVCQUF1QixLQUFBLEFBQUsscUJBQUwsQUFBMEIsS0FBdEQsQUFBNEIsQUFBK0IsQUFDM0Q7U0FBQSxBQUFLLGtCQUFrQixLQUFBLEFBQUssZ0JBQUwsQUFBcUIsS0FBNUMsQUFBdUIsQUFBMEIsQUFDbEQ7Ozs7O3lDLEFBRW9CLElBQUk7a0JBQ3ZCOztBQUVBOztXQUFBLEFBQUssTUFBTCxBQUFXLFVBQVUsRUFBQyxNQUFNLE9BQUEsQUFBTyxTQUFuQyxBQUFxQixBQUF1QixRQUFPLFVBQUEsQUFBQyxLQUFELEFBQU0sWUFBZSxBQUN0RTtZQUFJLGNBQWMsV0FBZCxBQUF5QixlQUFlLFdBQTVDLEFBQXVELFNBQVMsQUFDOUQ7Z0JBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQUFTLFdBQTNCLEFBQXNDLGFBQWEsVUFBQSxBQUFDLEtBQUQsQUFBTSxTQUFZLEFBQ25FO2tCQUFBLEFBQUssZUFBTCxBQUFvQixZQUFwQixBQUFnQyxBQUNoQztlQUFBLEFBQUcsa0NBQUgsQUFBYyxZQUFkLEFBQTZCLEFBQzlCO0FBSEQsQUFJRDtBQUxELGVBS08sSUFBQSxBQUFJLEtBQUssQUFDZDtrQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2FBQUEsQUFBRyxNQUFILEFBQVMsQUFDVjtBQUNGO0FBVkQsQUFXRDs7OzttQyxBQUVjLFksQUFBWSxTQUFTLEFBQ2xDO0FBQ0E7VUFBSSxZQUFZLHlCQUNkLFdBQUEsQUFBVyxZQUFYLEFBQXVCLE9BQU8sSUFBQSxBQUFJLE9BRHBDLEFBQWdCLEFBQ2dCLEFBQVcsQUFFM0M7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLDBCQUEwQixXQUEvQyxBQUEwRCxBQUMxRDttQkFBQSxBQUFhLFFBQWIsQUFBcUIsc0JBQXNCLFdBQTNDLEFBQXNELEFBQ3REO21CQUFBLEFBQWEsUUFBYixBQUFxQix3QkFBckIsQUFBNkMsQUFDN0M7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLHFCQUFxQix5QkFBMUMsQUFBMEMsQUFBZSxBQUV6RDs7QUFDQTtBQUNEOzs7O3VDLEFBRWtCLFlBQVksQUFDN0I7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLHlCQUF5QixXQUE5QyxBQUF5RCxBQUN6RDttQkFBQSxBQUFhLFFBQWIsQUFBcUIsc0JBQXNCLFdBQTNDLEFBQXNELEFBQ3ZEOzs7OzRCQUVPLEFBQ047V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7OzZCQUVRLEFBQ1A7QUFDQTttQkFBQSxBQUFhLFdBQWIsQUFBd0IsQUFDeEI7bUJBQUEsQUFBYSxXQUFiLEFBQXdCLEFBQ3hCO21CQUFBLEFBQWEsV0FBYixBQUF3QixBQUN4QjttQkFBQSxBQUFhLFdBQWIsQUFBd0IsQUFDeEI7QUFDQTtjQUFBLEFBQVEsUUFBUixBQUFnQixBQUNqQjs7OztzQ0FFaUIsQUFDaEI7QUFDQTtBQUNBO1VBQU0sWUFBWSxLQUFBLEFBQUssTUFBTSxhQUFBLEFBQWEsUUFBMUMsQUFBa0IsQUFBVyxBQUFxQixBQUNsRDthQUFPLElBQUEsQUFBSSxPQUFKLEFBQVcsWUFBbEIsQUFBOEIsQUFDL0I7Ozs7aUNBRVksQUFDWDthQUFPLEtBQUEsQUFBSyxNQUFNLGFBQUEsQUFBYSxRQUEvQixBQUFPLEFBQVcsQUFBcUIsQUFDeEM7Ozs7Ozs7a0JBNUVrQixBIiwiZmlsZSI6IkF1dGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzbndhbWJhL1Byb2plY3RzL0Jvb2tzL2hhbmRzLW9uLW5leHRqcy9tZXJuLWRlbW8tdjAvbmV4dC1zaG9wIn0=