import { gql } from '@apollo/client';

export const USER_QUERY = gql`
query User($name: String!) {
  user(name: $name) {
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
export const REVIEW_QUERY = gql` 
query Comment {
  comment {
    _id
    CommentText
    createdAt
  }
}
`
export const SINGLE_REVIEW_QUERY = gql`
query Comments($commentId: ID) {
  comments(CommentId: $commentId) {
    _id
    CommentText
    createdAt
    CommentAuthor
  }
}`

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
