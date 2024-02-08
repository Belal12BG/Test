import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./componant/About";
import Portofolio from "./componant/Portofolio";
import Contatct from "./componant/Contatct";
import Layout from "./componant/Layout";
import Home from "./componant/Home";
import NotFound from "./componant/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "about", element: <About></About> },
        { path: "portfolio", element: <Portofolio></Portofolio> },
        { path: "contact", element: <Contatct></Contatct> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);

  return (
    <RouterProvider router={routes}>
      <Layout></Layout>
    </RouterProvider>
  );
}
export default App;
