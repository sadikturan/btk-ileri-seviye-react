import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function AuthGuard() {
  const { user } = useSelector((state) => state.account);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
