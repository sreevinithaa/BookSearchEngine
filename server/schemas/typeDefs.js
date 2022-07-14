const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type BookSchema {
    _id: ID!
    authors: [String]
    description:String!
    bookId:String!
    image:String
    link:String
    title:String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    savedBooks: [BookSchema]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
     user(_id:ID,username: String): User
  }

  type Mutation {
    createUser(username: String!, email: String!,password:String!): Auth
    login(username: String!, password:String!): Auth
    saveBook(_id:ID!, bookId:String!,authors:String!,description:String!,title:String!,link :String ): User
    deleteBook( _id:ID!, bookId:String!): User
  }
`;

module.exports = typeDefs;
