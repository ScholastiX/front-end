import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllSchools from "./app/AllSchools.tsx";
import Home from "./app/Home.tsx";
import "./styles/main.scss";
import School from "./app/School.tsx";
import Student from "./app/Student.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/all-schools",
    element: <AllSchools />,
  },
  {
    path: "/school/:schoolId",
    element: <School params={{ school: "" }} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
)
