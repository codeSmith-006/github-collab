import { Component } from "react";
// import { createBrowserRouter } from "react-router";
// import Home from "../Page/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Rehan from "../Page/Rehan/Rehan";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/rehan',
        Component: Rehan
      },
      {
        path: '/bayzid',
        Component: Bay
      }
    ],
  },
]);

export default router;
