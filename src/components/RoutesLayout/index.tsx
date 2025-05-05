import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "antd";

// Components
import Header from "../Header";

interface RoutesLayoutProps {
  isPublic?: boolean;
  isNotFound?: boolean;
}

export function RoutesLayout({
  isPublic = false,
  isNotFound = false,
}: RoutesLayoutProps) {
  const loggedUserLocalStorage = localStorage.getItem("money-user");
  const userIsLogged = loggedUserLocalStorage;

  if (isPublic) {
    if (userIsLogged || isNotFound) return <Navigate to="/" />;
    return <Outlet />;
  }

  if (!userIsLogged || isNotFound) return <Navigate to="/login" />;

  if (isNotFound) return <Navigate to="/" />;

  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}
