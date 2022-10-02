const {gql} = require('apollo-server-express')


const typeDefs = gql `
    type User {
        _id: ID
        name: String
        email: String
        password: String
        comment: [Comment]
    }
    type Comment {
        _id: ID
        CommentText: String
        
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(name: String): User
        comment(name: String) : [Comment]
        comments(CommentId: ID): Comment
        me: User
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String): Auth
        login(email: String!, password: String!): Auth
        addComment(CommentText: String): Comment
    }
`
module.exports = typeDefs;