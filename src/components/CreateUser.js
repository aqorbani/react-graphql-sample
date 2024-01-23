import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USER } from "../graphql/mutations";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [createUser, { loading, data, error }] = useMutation(CREATE_USER, {
    variables: {
      name: name,
      username: userName,
      email: email,
      phone: phone,
    },
  });

  console.log(data);
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={userName}
        placeholder="user name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={phone}
        placeholder="phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <button onClick={() => createUser()}>create</button>
    </div>
  );
};

export default CreateUser;
