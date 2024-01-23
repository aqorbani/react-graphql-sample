import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      input: { name: $name, username: $username, email: $email, phone: $phone }
    ) {
      id
      name
      email
    }
  }
`;

export { CREATE_USER };
