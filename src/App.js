import React from "react";
import Home from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Product from "./components/Product";
import { productData } from "./api/Api";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header></Header>
      <ScrollRestoration></ScrollRestoration>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productData,
      },

      {
        path: "/product/:id",
        element: <Product />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
