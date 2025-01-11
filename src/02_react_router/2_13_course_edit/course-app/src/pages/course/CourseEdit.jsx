import { useRouteLoaderData } from "react-router";
import CourseForm from "./CourseForm";

export default function CourseEditPage() {
  const course = useRouteLoaderData("course-details");
  return <CourseForm method="PUT" data={course} />;
}
