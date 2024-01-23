import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../graphql/mutations";
import { useState } from "react";

const DeleteUser = () => {
  const [id, setId] = useState(1);
  const [deleteUser, { loading, data, error, called }] = useMutation(
    DELETE_USER,
    { variables: { id: id } }
  );
  console.log(data);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="id"
      />
      <br />
      <button onClick={() => deleteUser()}>delete</button>
    </div>
  );
};

export default DeleteUser;
