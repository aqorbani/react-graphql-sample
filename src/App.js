import CreateUser from "./components/CreateUser";
import User from "./components/User";
import UserOnClick from "./components/UserOnClick";
import Users from "./components/Users";

function App() {
  return (
    <>
      <CreateUser />
      <hr />
      <UserOnClick />
      <hr />
      <User />
      <hr />
      <Users />
    </>
  );
}

export default App;
