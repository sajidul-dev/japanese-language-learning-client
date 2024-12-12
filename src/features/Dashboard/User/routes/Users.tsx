import { useGetUsers } from "../api/getUsers";

const AllUsers = () => {
  const getUsersMutation = useGetUsers();

  console.log(getUsersMutation.data, "usere");

  return <div></div>;
};

export default AllUsers;
