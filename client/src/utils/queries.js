import { gql } from "@apollo/client";

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

export const QUERY_GET_USER = gql`
  query getuser($_id:ID,$username: String!) {
    user(_id:#_id,username: $username) {
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
