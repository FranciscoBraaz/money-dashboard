import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    localStorage.removeItem("money-user");
    dispatch({ type: "CHANGE_USER", payload: null });
    navigate("/login");
  }

  return { logout };
}

export default useLogout;
