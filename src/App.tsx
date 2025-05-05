import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import axios from "axios";

// Pages
import { SignUp } from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Home from "./containers/Home";

// Components
import { RoutesLayout } from "./components/RoutesLayout";

// Styles
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();
  const dispatch = useDispatch();

  useEffect(() => {
    const userStringified = localStorage.getItem("money-user");
    let loggedUser = null;
    if (userStringified) {
      loggedUser = JSON.parse(userStringified);
    }

    if (loggedUser) {
      dispatch({
        type: "CHANGE_USER",
        payload: loggedUser,
      });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${loggedUser.accessToken}`;
    }
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer theme="colored" draggable={false} />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5429cc",
            colorLink: "#6933ff",
            colorText: "#363f5f",
            colorTextHeading: "#363f5f",
            colorPrimaryHover: "#6933ff",
            fontFamily: "Roboto, sans-serif",
          },
        }}
      >
        <Router>
          <Routes>
            <Route path="/login" element={<RoutesLayout isPublic />}>
              <Route path="" element={<SignIn />} />
            </Route>
            <Route path="/cadastro" element={<RoutesLayout isPublic />}>
              <Route path="" element={<SignUp />} />
            </Route>
            <Route path="/" element={<RoutesLayout />}>
              <Route path="" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
