import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

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

const User = () => {
  const [id, setId] = useState(2);
  const { loading, data, error } = useQuery(GET_USER, {
    variables: { id: id },
  });

  return (
    <div>
      {data ? <p>{data.user.name}</p> : ""}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
    </div>
  );
};

export default User;
