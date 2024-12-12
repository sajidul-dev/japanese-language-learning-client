import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "@/config";
import { useNavigate } from "react-router-dom";

export const loginUser = async (data: {}): Promise<{}> => {
  const response = await axios.post(`${API_URL}/api/v1/auth/login`, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const useLoginUser = () => {
  const navigate = useNavigate();
  return useMutation(loginUser, {
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });
};
