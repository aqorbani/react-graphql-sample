import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_USER } from "../graphql/mutations";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const [updateUser, { loading, data, error }] = useMutation(UPDATE_USER, {
    variables: {
      id: id,
      name: name,
    },
  });

  console.log(data);
  return (
    <div>
      <input
        type="text"
        value={id}
        placeholder="user id"
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={() => updateUser()}>update</button>
    </div>
  );
};

export default UpdateUser;
