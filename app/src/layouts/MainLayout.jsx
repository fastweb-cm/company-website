
const MainLayout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
        {/* header */}

        {/* page content */}
        <main className="flex-1 px-4 md:px-8 py-8">
            {children}
        </main>
        {/* footer */}
    </div>
  )
}

export default MainLayout