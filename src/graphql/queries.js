import { gql } from "@apollo/client";

const GET_USERS = gql`
  # Write your query or mutation here
  query {
    users {
      data {
        id
        name
        email
        phone
        todos {
          data {
            title
            completed
          }
        }
      }
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      phone
      email
    }
  }
`;

export { GET_USERS, GET_USER };
