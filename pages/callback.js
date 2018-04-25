import React from 'react';
import withData from '../lib/withData';

import { Layout, Nav, Container } from '../components';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import redirect from '../services/redirect';
import Auth from '../services/Auth';

const auth = new Auth();

class Callback extends React.Component {
  componentDidMount() {
    auth.handleAuthentication( async (err, authResult) => {
      if (err) redirect({}, '/login');
      const result = await this.props.authMutation({
        variables: {
          accessToken: authResult.idToken
        }
      });
      auth.storeGraphCoolCred(result.data.authenticateUser)
      this.props.history.push('/')
    });
  }

  render() {
    return (
      <div>
        <Layout>
          <Nav />
          <Container>
          </Container>
        </Layout>
      </div>
    );
  }
}

// 1
const AUTH_MUTATION = gql`
  # 2
  mutation authMutation($accessToken: String!) {
    authenticateUser(accessToken: $accessToken) {
      id
      token
    }
  }
`;

// 3
export default withData(
  graphql(AUTH_MUTATION, { name: 'authMutation' })(Callback)
);

// export default withData(PageCallback);
