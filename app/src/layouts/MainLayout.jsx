import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      {/* Header */}
      <Navbar />

      {/* Page Content px-4 md:px-8 */}
      <main className="flex-1 py-8">
        <Outlet /> {/* This is where Home (and other pages) will render */}
      </main>

      {/* Footer */}
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default MainLayout;
