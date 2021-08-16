import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation authenticate($input: AuthenticateInput!) {
    authenticate(input: $input) {
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation createProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
      owner {
        firstname
        lastname
      }
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation ($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      name
      description
      owner {
        id
        firstname
        lastname
        emailAddress
      }
    }
  }
`;
