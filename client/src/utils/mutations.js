import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: String!
    $authors: [String]
    $description: String!
    $title: String!
    $image: String
  ) {
    saveBook(
       bookId: $bookId
      authors: $authors
      description: $description
      title: $title
      image: $image
    ) {
      _id
      username
      email
      bookCount
      savedBooks {
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
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
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
