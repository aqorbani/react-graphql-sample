import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

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
