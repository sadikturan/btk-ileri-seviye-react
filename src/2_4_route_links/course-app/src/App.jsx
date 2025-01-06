// / => <Home />
// /about => <About />
// /courses => <Courses />

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage from "./pages/Courses";

const routes_1 = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/courses" element={<CoursesPage />} />
  </Route>
);

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/courses", element: <CoursesPage /> },
];

const router = createBrowserRouter(routes_1);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
