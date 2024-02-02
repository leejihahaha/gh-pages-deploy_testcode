import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";

const basename = process.env.PUBLIC_URL;
const root = ReactDOM.createRoot(document.getElementById("root"));
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      { path: "/about", element: <About /> },
    ],
  },
];
const router = createBrowserRouter(routes, { basename: basename });

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
