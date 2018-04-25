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
    if(!auth.isAuthenticated()) redirect({}, '/');
  }

  render() {
    return (
      <div>
        <Layout>
          <Nav />
          <Container>
            Yo I am authenticated
          </Container>
        </Layout>
      </div>
    );
  }
}

export default Callback;