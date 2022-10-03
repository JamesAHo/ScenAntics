import { gql } from '@apollo/client';

export const USER = gql`
query Users {
  users {
    name
    _id
    comment {
      _id
    CommentText  
    }
  }
}
  
`;
