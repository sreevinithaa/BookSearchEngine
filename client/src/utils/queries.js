import { gql } from "@apollo/client";



export const QUERY_GET_USER = gql`
  query user($_id:ID,$username: String!) {
    user(_id:$_id,username: $username) {
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
