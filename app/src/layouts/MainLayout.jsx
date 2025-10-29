import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const MainLayout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
        {/* header */}
        <Navbar />

        {/* page content */}
        <main className="flex-1 px-4 md:px-8 py-8">
            {children}
        </main>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default MainLayout