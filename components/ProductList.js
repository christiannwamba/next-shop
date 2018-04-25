import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Product from './Product'
import Row from './Row'

export const ProductList = props => {
  // 1
  if (props.allProductsQuery && props.allProductsQuery.loading) {
    return <div>Loading</div>
  }

  // 2
  if (props.allProductsQuery && props.allProductsQuery.error) {
    console.log(props.allProductsQuery.error)
    return <div>Error</div>
  }

  // 3
  const productsToRender = props.allProductsQuery.allProducts
  return (
    <Row>
      {productsToRender.map(product => 
        <Product product={product} key={product.id} />
      )}
    </Row>
  );
};

// 1
const ALL_PRODUCTS_QUERY = gql`
  # 2
  query AllProductsQuery {
    allProducts {
      id
      name
      imgUrl
      price
    }
  }
`;

// 3
export default graphql(ALL_PRODUCTS_QUERY, { name: 'allProductsQuery' })(
  ProductList
);
