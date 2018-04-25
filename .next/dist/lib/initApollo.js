'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _apolloClient = require('apollo-client');

var _apolloLinkHttp = require('apollo-link-http');

var _apolloCacheInmemory = require('apollo-cache-inmemory');

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicUnfetch2.default;
}

function create(initialState) {
  return new _apolloClient.ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new _apolloLinkHttp.HttpLink({
      uri: ' https://api.graph.cool/simple/v1/cjbybqj371erj0126784988vd', // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new _apolloCacheInmemory.InMemoryCache().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbml0QXBvbGxvLmpzIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImZldGNoIiwiYXBvbGxvQ2xpZW50IiwicHJvY2VzcyIsImJyb3dzZXIiLCJnbG9iYWwiLCJjcmVhdGUiLCJpbml0aWFsU3RhdGUiLCJjb25uZWN0VG9EZXZUb29scyIsInNzck1vZGUiLCJsaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsInJlc3RvcmUiLCJpbml0QXBvbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBTzs7Ozs7O0FBRVAsSUFBSSxlQUFKLEFBQW1COztBQUVuQjtBQUNBLElBQUksQ0FBQyxRQUFMLEFBQWEsU0FBUyxBQUNwQjtTQUFBLEFBQU8sQUFBUSxBQUNoQjs7O0FBRUQsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsY0FBYyxBQUM1Qjs7dUJBQ3FCLFFBREcsQUFDSyxBQUMzQjthQUFTLENBQUMsUUFGWSxBQUVKLFNBQVMsQUFDM0I7O1dBQW1CLEFBQ1osK0RBQStELEFBQ3BFO21CQUZpQixBQUVKLGNBTE8sQUFHaEIsQUFBYSxBQUVVLEFBRTdCO0FBSm1CLEFBQ2pCLEtBREksQUFBSTtXQUlILEFBQUkseUNBQUosQUFBb0IsUUFBUSxnQkFQckMsQUFBTyxBQUFpQixBQU9mLEFBQTRDLEFBRXREO0FBVHlCLEFBQ3RCLEdBREssQUFBSTtBQVdiOztBQUFlLFNBQUEsQUFBUyxXQUFULEFBQW9CLGNBQWMsQUFDL0M7QUFDQTtBQUNBO01BQUksQ0FBQyxRQUFMLEFBQWEsU0FBUyxBQUNwQjtXQUFPLE9BQVAsQUFBTyxBQUFPLEFBQ2Y7QUFFRDs7QUFDQTtNQUFJLENBQUosQUFBSyxjQUFjLEFBQ2pCO21CQUFlLE9BQWYsQUFBZSxBQUFPLEFBQ3ZCO0FBRUQ7O1NBQUEsQUFBTyxBQUNSIiwiZmlsZSI6ImluaXRBcG9sbG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzbndhbWJhL1Byb2plY3RzL0Jvb2tzL2hhbmRzLW9uLW5leHRqcy9tZXJuLWRlbW8tdjAvbmV4dC1zaG9wIn0=