import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_USER = gql`
  mutation {
    createUser(
      input: {
        name: "Amir Hossein"
        username: "aqorbani"
        email: "a@a.com"
        phone: "09120000000"
      }
    ) {
      id
      name
      email
    }
  }
`;

const CreateUser = () => {
  const [createUser, { loading, data, error }] = useMutation(CREATE_USER);

  console.log(data);
  return (
    <div>
      <button onClick={() => createUser()}>create</button>
    </div>
  );
};

export default CreateUser;
