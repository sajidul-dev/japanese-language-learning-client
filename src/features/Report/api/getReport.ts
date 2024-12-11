import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../../lib/react-query";
import { API_URL } from "../../../config";

export const getData = async (): Promise<{}> => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json"
  );
  return response.data;
};

const createReport = async (data: {}) => {
  const response = await axios.post(
    `${API_URL}/api/v1/report/insert-data`,
    data
  );
  return response.data;
};

export const useData = () => {
  return useQuery({
    queryFn: getData,
    queryKey: ["alldata"],
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

export const useInsertDataMutation = () => {
  return useMutation(createReport, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.fetchQuery({ queryKey: ["orders"] });
      console.log("Report created successfully");
    },
    onError: (error) => {
      console.error("Error creating report:", error);
    },
  });
};
