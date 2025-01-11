import { Link, Outlet } from "react-router";

export default function CourseLayout() {
  return (
    <div id="course-layout">
      <h1>Course List</h1>
      <p>
        <Link to={"create"}>New Course</Link>
      </p>
      <Outlet />
    </div>
  );
}
