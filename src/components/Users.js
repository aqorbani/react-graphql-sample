import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  # Write your query or mutation here
  query {
    users {
      data {
        id
        name
        email
        phone
        todos {
          data {
            title
            completed
          }
        }
      }
    }
  }
`;

const Users = () => {
  const { loading, data, error } = useQuery(GET_USERS);
  console.log(data);

  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>something has wrong</h3>;
  return (
    <div>
      {data.users.data.map((item) => (
        <div key={item.id} style={{ backgroundColor: "#eee" }}>
          <h3>{item.name}</h3>
          <h4>
            {item.email} - {item.phone}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Users;
