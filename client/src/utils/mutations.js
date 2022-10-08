import { gql } from '@apollo/client';

export const SIGN_UP = gql`
mutation createUser($name: String!, $email: String!, $password: String) {
  createUser(name: $name, email: $email,password: $password) {
    token
    user {
      _id
      name
    }
  }
}

`

export const LOGIN_QUERY = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;
