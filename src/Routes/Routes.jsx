import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductsCategory from "../Pages/ProductsCategory/ProductsCategory";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import SingleProductPage from "../Pages/SingleProductPage/SingleProductPage";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "mensSneaker",
        element: <ProductsCategory category="Men's Sneaker"></ProductsCategory>,
      },
      {
        path: "mensPants",
        element: <ProductsCategory category="Men's Pants"></ProductsCategory>,
      },
      {
        path: "mensBoot",
        element: <ProductsCategory category="Men's Boot"></ProductsCategory>,
      },
      {
        path: "bag",
        element: <ProductsCategory category="Bag"></ProductsCategory>,
      },
      {
        path: "cap",
        element: <ProductsCategory category="Cap"></ProductsCategory>,
      },
      {
        path: "earphones",
        element: <ProductsCategory category="Earphones"></ProductsCategory>,
      },
      {
        path: "bottle",
        element: <ProductsCategory category="Bottle"></ProductsCategory>,
      },
      {
        path: "productDetails/:id",
        element: <SingleProductPage></SingleProductPage>,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
]);

export default router;
