import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config";

export const getPurchases = async (): Promise<{}> => {
  const response = await axios.get(`${API_URL}/api/v1/purchase/get-purchases`);
  return response.data.data;
};

export const useOrders = () => {
  return useQuery({
    queryFn: getPurchases,
    queryKey: ["orders"],
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
