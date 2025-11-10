import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import About from "../pages/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact",element: <Contact /> },
      { path: "/services",element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/services/:slug", element: <ServiceDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
