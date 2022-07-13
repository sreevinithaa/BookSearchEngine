const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type BookSchema {
    _id: ID!
    authors: [String]
    description:string!
    bookId:string!
    image:string
    link:string
    title:string!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    savedBooks: [BookSchema]
  }

  type Query {
    Books: [BookSchema]
    user(username: String!): User
  }

  type Mutation {
    createUser(username: String!, email: String!,password:String!): User
    login(username: String!, password:String!): User
    saveBook(_id:ID!, bookId:String!,authors:String!,description:String!,title:String!,link :String ): User
    deleteBook( _id:ID!, bookId:String!): User
  }
`;

module.exports = typeDefs;
