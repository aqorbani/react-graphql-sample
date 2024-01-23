import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const UserOnClick = () => {
  const [id, setId] = useState(2);

  const [getUser, { loading, data, error, called }] = useLazyQuery(GET_USER, {
    variables: { id: id },
  });

  const clickHandler = () => {
    getUser();
  };

  return (
    <div>
      {data ? <p>{data.user.name}</p> : ""}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={clickHandler}>get</button>
    </div>
  );
};

export default UserOnClick;
