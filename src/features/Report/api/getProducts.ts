import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config";

export const getProducts = async (): Promise<{}> => {
  const response = await axios.get(`${API_URL}/api/v1/products/get-products`);
  return response.data.data;
};

export const useProducts = () => {
  return useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
