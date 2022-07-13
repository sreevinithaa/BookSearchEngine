import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query getBooks {
    Books {
        _id
        bookId
        image
        link
        title
        description
        authors
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getuser($username: String!) {
    user(username: $username) {
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