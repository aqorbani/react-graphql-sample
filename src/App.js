import CreateUser from "./components/CreateUser";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";
import User from "./components/User";
import UserOnClick from "./components/UserOnClick";
import Users from "./components/Users";

function App() {
  return (
    <>
      <DeleteUser />
      <hr />
      <UpdateUser />
      <hr />
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
