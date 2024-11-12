import { useEffect,useState } from "react";
import { fetchUsers } from "../api/usersApi";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  const initFetchUsers = async () => {
    const response = await fetchUsers();
    setUsers(response.data);
  };

  return {
    users,
    initFetchUsers,
  };
};

const Users = () => {
  const { users, initFetchUsers } = useFetchUsers();

  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <div>{users ? users.map((user) => <div>{user.name}</div>) : null}</div>
  );
};

export default Users;
