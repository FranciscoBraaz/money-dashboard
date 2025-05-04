import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Home from "./containers/Home";

// Styles
import "./styles/index.scss";
import { ConfigProvider } from "antd";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./containers/SignIn";

function App() {
  const queryClient = new QueryClient();

  return (
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
            <Route path="/" element={<SignIn />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
