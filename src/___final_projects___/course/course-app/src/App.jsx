import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage, {
  courseDeleteAction,
  coursesLoader,
} from "./pages/course/Courses";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/help/Contact";
import FaqPage from "./pages/help/Faq";
import HelpLayout from "./layouts/HelpLayout";
import CourseDetailsPage, {
  courseDetailsLoader,
} from "./pages/course/CourseDetails";
import CourseLayout from "./layouts/CourseLayout";
import CourseCreatePage from "./pages/course/CourseCreate";
import CourseEditPage from "./pages/course/CourseEdit";
import { courseAction } from "./pages/course/CourseForm";
import NotFoundPage from "./pages/error/NotFoundPage";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "courses",
        element: <CourseLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <CoursesPage />, loader: coursesLoader },
          {
            id: "course-details",
            path: ":courseid",
            loader: courseDetailsLoader,
            children: [
              {
                index: true,
                element: <CourseDetailsPage />,
              },
              {
                path: "edit",
                element: <CourseEditPage />,
                action: courseAction,
              },
              {
                path: "delete",
                action: courseDeleteAction,
              },
            ],
          },
          {
            path: "create",
            element: <CourseCreatePage />,
            action: courseAction,
          },
        ],
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <FaqPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
