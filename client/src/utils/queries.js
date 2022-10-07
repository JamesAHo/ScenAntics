import { gql } from '@apollo/client';

export const USER_QUERY = gql`
query User {
  user {
    name
    email
    comment {
      _id
      CommentText
      createdAt
    }
  }
}
  
`;
export const COMMENT_QUERY = gql` 
query Comment {
  comment {
    _id
    CommentText
    createdAt
  }
}

`

export const QUERY_ME = gql`
query Me {
  me {
    _id
    name
    email
    comment {
      _id
      CommentText
      createdAt
    }
  }
}

`
