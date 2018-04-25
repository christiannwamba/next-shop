import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import redirect from '../services/redirect';
import Auth from '../services/Auth';

const auth = new Auth();

class Callback extends React.Component {
  static async getInitialProps (context) {
    auth.handleAuthentication((err, authResult) => {
      if(err) return console.log(err);
      const result = await this.props.authMutation();
      localStorage.setItem('next_shop_gcool_token', result.token);
      localStorage.setItem('next_shop_gcool_id', result.id);
      redirect(context, '/')
    })
    
  }
}

// 1
const AUTH_MUTATION = gql`
  # 2
  mutation authMutation($accessToken: String) {
    authenticateUser(accessToken: $accessToken)) {
      id
      token
    }
  }
`;

// 3
export default graphql(AUTH_MUTATION, { name: 'authMutation' })(
  Callback
);
