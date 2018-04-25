import React from 'react';
import { Container, Column, Row, Link, H1, Search, CartButton } from './index';
import Auth from '../services/Auth';

const auth = new Auth();
export const Nav = props => (
  <div>
    <nav {...props}>
      <Container width="95%">
        <Row>
          <Column>
            <H1 isbrand="true">Universal Shop</H1>
          </Column>
          <Column>
            <Row justifyContent="flex-end">
              <Column width="60px">
                <Link href="#">Sign up</Link>
              </Column>
              <Column width="60px">
                <span onClick={() => auth.login()}>Log in</span>
              </Column>
            </Row>
          </Column>
        </Row>
        <Row justifyContent="flex-end">
          <Column width="50%">
          <Search></Search>
          </Column>
          <Column width="20%">
          <CartButton></CartButton>
          </Column>
        </Row>
      </Container>
    </nav>
    <style jsx>{`
      nav {
        padding: 2rem;
        margin-bottom: 5rem;
        background: #F8CB00;
      }
    `}</style>
  </div>
);

export default Nav;