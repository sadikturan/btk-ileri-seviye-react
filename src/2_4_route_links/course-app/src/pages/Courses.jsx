import { NavLink } from "react-router";

export default function CoursesPage() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/courses">Courses</NavLink>
      </nav>
      <div>
        <h1>Courses</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          dignissimos eaque ab aliquam consequatur veritatis perspiciatis
          numquam exercitationem saepe accusantium vel fugiat eos maxime,
          molestias iste quam non tempore. Ea.
        </p>
      </div>
    </>
  );
}
