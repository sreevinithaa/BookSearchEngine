import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!,$password:String!) {
    createUser(username: $username, email: $email,password:$password) {
      _id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!,$password:String!) {
    login(username: $username, password: $password) {
      _id
      username
      email
     
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook( $_id:ID!, $bookId:String!,$authors:String!,$description:String!,$title:String!,$link:String) {
    saveBook(_id:$_id, bookId:$bookId,authors:$authors,description:$description,title:$title,link:$link) {
      _id
      username
      email
      savedBooks{
_id
bookId
image
link
title
description
authors
      }
    }
  }
`;
export const DELETE_BOOK = gql`
  mutation deleteBook( $_id:ID!, $bookId:String!) {
    deleteBook( _id:$_id, bookId:$bookId) {
      _id
      username
      email
      savedBooks{
        _id
        bookId
        image
        link
        title
        description
        authors
              }
    }
  }
`;