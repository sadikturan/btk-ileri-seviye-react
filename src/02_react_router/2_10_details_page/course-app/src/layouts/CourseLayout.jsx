import { Outlet } from "react-router";

export default function CourseLayout() {
  return (
    <div id="course-layout">
      <h1>Course List</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, optio
        eum quis, iure delectus atque corrupti dolores nam maxime quo officia
        repudiandae accusamus necessitatibus deserunt vel dolorem, fugiat ipsam
        molestias?
      </p>
      <Outlet />
    </div>
  );
}
