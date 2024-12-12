import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "@/config";
import { useNavigate } from "react-router-dom";

export const createUser = async (data: {}): Promise<{}> => {
  const response = await axios.post(`${API_URL}/api/v1/user/sign-up`, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const useCreateUser = () => {
  const navigate = useNavigate();
  return useMutation(createUser, {
    onSuccess: () => {
      navigate("/lesson");
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });
};
