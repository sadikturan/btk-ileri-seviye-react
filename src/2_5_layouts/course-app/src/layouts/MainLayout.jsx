import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div id="main-layout">
      <h1>Main Layout</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/courses">Courses</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
