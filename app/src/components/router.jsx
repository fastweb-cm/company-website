import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import About from "../pages/About";
import Project from "../pages/Project";
import ProjectDetails from "../pages/ProjectDetails";
<<<<<<< Blog
import Blogpost from "../pages/Blogpost";
import BlogDetails from "../pages/BlogDetails";

=======
import AuthLayout from "../layouts/AuthLayout";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
>>>>>>> main

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact",element: <Contact /> },
      { path: "/services",element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Project /> },
      { path: "/services/:slug", element: <ServiceDetails /> },
      { path: "/projects/:slug", element: <ProjectDetails /> },
      { path: "/blog", element: <Blogpost />},
      { path: "/blog/:id", element: <BlogDetails />},
      { path: "*", element: <NotFound /> },
    ],
  },{
    path: "/auth",
    element: <AuthLayout />,
    children: [
     {index: true, element: <Login />},
      {path: "forgot-password",element: <ForgotPassword />},
      {path: "login", element: <Login />},
    ],
  }
]);

export default router;
