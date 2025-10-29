import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      {/* Header */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 px-4 md:px-8 py-8 my-10">
        <Outlet /> {/* This is where Home (and other pages) will render */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
