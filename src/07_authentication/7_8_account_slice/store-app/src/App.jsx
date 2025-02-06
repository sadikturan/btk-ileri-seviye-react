import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/Main";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/cart/Cart";
import LoginPage from "./pages/account/Login";
import RegisterPage from "./pages/account/Register";
import ProductDetailsPage from "./pages/ProductDetails";
import ErrorPage from "./pages/errors/Error";
import ServerErrorPage from "./pages/errors/ServerError";
import NotFoundPage from "./pages/errors/NotFound";
import { useEffect } from "react";
import requests from "./api/apiClient";
import { useCartContext } from "./context/CartContext";
import { setCart } from "./pages/cart/cartSlice";
import { useDispatch } from "react-redux";

export const router = createBrowserRouter([
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
      {
        path: "errors",
        children: [
          { index: true, element: <ErrorPage /> },
          { path: "server-error", element: <ServerErrorPage /> },
          { path: "not-found", element: <NotFoundPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    requests.cart
      .get()
      .then((cart) => dispatch(setCart(cart)))
      .catch((error) => console.log(error));
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
