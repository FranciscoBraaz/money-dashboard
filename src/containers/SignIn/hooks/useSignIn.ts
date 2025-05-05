import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

// Services
import { login } from "../../../services/auth";
import { api } from "../../../services/api";

interface SignInData {
  email: string;
  password: string;
  remember: boolean;
}

export function useSignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSignIn({ email, password }: SignInData) {
    try {
      setIsLoading(true);

      const { data } = await login({
        email,
        password,
      });

      localStorage.setItem("money-user", JSON.stringify(data));
      dispatch({ type: "CHANGE_USER", payload: data });
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setIsLoading(false);

      navigate("/");
    } catch (error) {
      setIsLoading(false);
      if (error instanceof AxiosError) {
        if (error?.response?.data.data) {
          const dataError = error.response.data.data;
          const objKeys = Object.keys(dataError);
          toast.error(dataError[objKeys[0]][0]);
          return;
        }

        if (error?.response?.data.message) {
          toast.error(error.response.data.message);
          return;
        }
      }

      toast.error("Erro ao realizar login, tente novamente mais tarde");
    }
  }

  return {
    isLoading,
    handleSignIn,
  };
}
