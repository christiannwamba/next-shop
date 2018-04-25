import React from 'react';
import Head from 'next/head';
import withData from '../lib/withData'

import {
  Container,
  Column,
  Layout,
  Row,
  Link,
  Nav,
  H1,
  H3,
  ProductList
} from '../components';

class Index extends React.Component {

  render() {
    console.log(this.props.url.asPath)
    return (
      <div>
        <Layout>
          <Nav />
          <Container>
            
          </Container>
        </Layout>
        <Container width="80%">
          <div className="items">
            <H3>Creams and Gels</H3>
            <ProductList />
          </div>
        </Container>
        <style jsx>{`
          .items {
            margin-top: 30px;
          }
        `}</style>
      </div>
    );
  }
}
// const Index = props => (
//   <div>
//     <Layout>
//       <Nav />
//       <Container>
        
//       </Container>
//     </Layout>
//     <Container width="80%">
//       <div className="items">
//         <H3>Creams and Gels</H3>
//         <ProductList />
//       </div>
//     </Container>
//     <style jsx>{`
//       .items {
//         margin-top: 30px;
//       }
//     `}</style>
//   </div>
// );
console.log(withData(Index))
export default withData(Index);
