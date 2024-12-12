import axios, { isAxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "@/config";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

// Define the expected response structure
interface LoginResponse {
  data: {
    accessToken: string;
  };
}

export const loginUser = async (data: {}): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/api/v1/auth/login`, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data; // TypeScript now knows this returns LoginResponse
};

export const useLoginUser = () => {
  const navigate = useNavigate();

  return useMutation<LoginResponse, unknown, {}>(loginUser, {
    onSuccess: (data) => {
      const token = data?.data?.accessToken; // Type-safe access
      console.log(token);

      if (token) {
        Cookies.set("token", token, { expires: 7 }); // Save token with a 7-day expiration
      }
      navigate("/");
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
      console.error("Error logging in user:", error);
    },
  });
};
