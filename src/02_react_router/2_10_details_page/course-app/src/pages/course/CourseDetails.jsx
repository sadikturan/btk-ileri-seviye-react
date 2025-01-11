import { useLoaderData } from "react-router";

export default function CourseDetailsPage() {
  const course = useLoaderData();
  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <div className="course-desc">
        <img src={`http://localhost:5000/images/${course.image}`} alt="" />
        <div>
          <div>{course.description}</div>
          <div className="icons">
            <span>
              <i className="fa-regular fa-user"></i> {course.users}
            </span>
            <span>
              <i className="fa-regular fa-thumbs-up"></i> {course.likes}
            </span>
            <span>
              <i className="fa-regular fa-comment"></i> {course.comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function courseDetailsLoader({ params }) {
  const { courseid } = params;
  const res = await fetch("http://localhost:5000/courses/" + courseid);
  return res.json();
}
