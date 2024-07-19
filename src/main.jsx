import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Team from "./page/team/Team.jsx";
import Home from "./page/home/Home.jsx";
import Services from "./page/services/Services.jsx";
import Contact from "./page/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "our-team",
        element: <Team />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
