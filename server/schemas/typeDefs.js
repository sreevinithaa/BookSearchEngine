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
    bookCount:Int
    savedBooks: [BookSchema]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!,password:String!): Auth
    login(username: String!, password:String!): Auth
    saveBook( bookId:String!,authors: [String],description:String!,title:String!,image :String ): User
    removeBook( bookId:String!): User
  }
`;

module.exports = typeDefs;
