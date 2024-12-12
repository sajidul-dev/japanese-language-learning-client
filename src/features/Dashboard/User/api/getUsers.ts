import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "@/config";
import Cookies from "js-cookie";

export const getUsers = async (): Promise<{}> => {
  const token = Cookies.get("token");
  const response = await axios.get(`${API_URL}/api/v1/user?searchTerm=`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  console.log(response);
  return response.data.data;
};

export const useGetUsers = () => {
  return useQuery({
    queryFn: getUsers,
    queryKey: ["users"],
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
