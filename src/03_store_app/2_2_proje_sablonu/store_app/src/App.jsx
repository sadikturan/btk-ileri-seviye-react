import { createBrowserRouter, RouterProvider } from "react-router";
import ProductsPage from "./pages/Products";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import MainLayout from "./layouts/Main";
import "./index.css";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProductDetailsPage from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      {
        path: "products",
        children: [
          { index: true, element: <ProductsPage /> },
          { path: ":id", element: <ProductDetailsPage /> },
        ],
      },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
