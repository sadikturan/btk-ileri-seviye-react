import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}
