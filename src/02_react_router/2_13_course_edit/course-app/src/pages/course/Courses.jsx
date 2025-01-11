import { Link, useLoaderData } from "react-router";

export default function CoursesPage() {
  const courses = useLoaderData();
  return (
    <>
      <div id="courses">
        {courses.map((item) => (
          <div key={item.id} className="card">
            <img src={`http://localhost:5000/images/${item.image}`} alt="" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link to={"/courses/" + item.id}>Detay</Link>
              <Link to={item.id + "/edit"}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function coursesLoader() {
  const res = await fetch("http://localhost:5000/courses");
  return res.json();
}
