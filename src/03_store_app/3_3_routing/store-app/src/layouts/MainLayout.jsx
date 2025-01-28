import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="container">
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  );
}
