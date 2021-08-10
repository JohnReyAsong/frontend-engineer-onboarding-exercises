import { gql } from "@apollo/client";

export const FETCH_PRODUCTS_QUERY = gql`
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
