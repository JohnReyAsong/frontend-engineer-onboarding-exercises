import { gql } from '@apollo/client';

export const PRODUCT_LIST = gql`
  query {
    products(first: 16) {
      edges {
        node {
          id
          name
          description
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const PRODUCT_DETAILS = gql`
  query products($filter: ProductsFilter) {
    products(filter: $filter) {
      edges {
        node {
          id
          name
          description
          owner {
            id
          }
        }
      }
    }
  }
`;
