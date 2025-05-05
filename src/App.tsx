import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Pages
import { SignUp } from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Home from "./containers/Home";

// Components
import { RoutesLayout } from "./components/RoutesLayout";

// Reducers
import reducer from "./reducers/reducer";

// Styles
import "./styles/index.scss";

function App() {
  const queryClient = new QueryClient();

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
          {/* <Header /> */}
          <Router>
            <Routes>
              <Route path="/login" element={<RoutesLayout isPublic />}>
                <Route path="" element={<SignIn />} />
              </Route>
              <Route path="/cadastro" element={<RoutesLayout isPublic />}>
                <Route path="" element={<SignUp />} />
              </Route>
              <Route path="/" element={<RoutesLayout />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </ConfigProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
