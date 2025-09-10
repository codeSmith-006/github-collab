import { Component } from "react";
// import { createBrowserRouter } from "react-router";
// import Home from "../Page/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Rehan from "../Page/Rehan/Rehan";
import Bayzid from "../Page/Bayzid/Bayzid";

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
        Component: Bayzid
      }
    ],
  },
]);

export default router;
