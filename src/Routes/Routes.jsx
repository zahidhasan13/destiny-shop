import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductsCategory from "../Pages/ProductsCategory/ProductsCategory";

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
    ],
  },
]);

export default router;
