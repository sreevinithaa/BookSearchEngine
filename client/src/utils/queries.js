import { gql } from "@apollo/client";



export const QUERY_GET_USER = gql`
  query getUser($_id:ID,$username: String) {
    getUser(_id:$_id,username: $username) {
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
