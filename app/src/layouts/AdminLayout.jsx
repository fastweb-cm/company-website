import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function AdminLayout() {
    return (
        <main>
            <Navbar />
            <div className="flex mt-[5em]">
                <AdminSideBar />
                <div className="content grow ">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default AdminLayout