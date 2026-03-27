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

import Blogpost from "../pages/Blogpost";
import BlogDetails from "../pages/BlogDetails";


import AuthLayout from "../layouts/AuthLayout";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";


import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";
import ContactUs from "../pages/ContactUs";
import Projects from "../pages/Projects";
import Team from "../pages/Team";
import Testimonials from "../pages/Testimonials";
import SeoMetaForm from "../pages/SeoMetaForm";



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
  },{
    path: "/admin",
    element: <AdminLayout />,
    children: [
     {index: true, element: <Dashboard />},
      {path: "users", element: <Users />},
      {path: "blog", element: <Blog />},
      {path: "faqs", element: <FAQ />},
      {path: "contact", element: <ContactUs />},
      {path: "projects", element: <Projects />},
      {path: "team", element: <SeoMetaForm />},
      {path: "testimonials", element: <Testimonials />},
    ],
  }
]);

export default router;
