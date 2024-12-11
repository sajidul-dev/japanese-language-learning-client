import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config";

export const getUsers = async (): Promise<{}> => {
  const response = await axios.get(`${API_URL}/api/v1/users/get-users`);
  return response.data.data;
};

export const useUsers = () => {
  return useQuery({
    queryFn: getUsers,
    queryKey: ["users"],
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
