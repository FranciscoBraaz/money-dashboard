import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  function logout() {
    localStorage.removeItem("money-user");
    dispatch({ type: "CHANGE_USER", payload: null });
    queryClient.clear()
    navigate("/login");
  }

  return { logout };
}

export default useLogout;
