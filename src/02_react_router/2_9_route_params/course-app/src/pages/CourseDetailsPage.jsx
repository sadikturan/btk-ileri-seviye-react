import { useLoaderData } from "react-router";

export default function CourseDetailsPage() {
  const course = useLoaderData();
  return <h1>Course Details: {course.title}</h1>;
}

export async function courseDetailsLoader({ params }) {
  const { courseid } = params;
  const res = await fetch("http://localhost:5000/courses/" + courseid);
  return res.json();
}
