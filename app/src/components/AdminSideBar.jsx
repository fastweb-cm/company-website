import React, { useState } from "react";
import {
  LucideMenu,
  X,
  LayoutDashboard,
  FileText,
  FolderKanban,
  Users,
  MessageSquareQuote,
  HelpCircle,
  Phone,
  UserCog
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function AdminSideBar() {
  const location = useLocation();
  const [sideBarShowing, setSideBarShowing] = useState(false);

  const menuItems = [
    { id: 1, name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { id: 2, name: "Blog", icon: FileText, path: "/admin/blog" },
    { id: 3, name: "Projects", icon: FolderKanban, path: "/admin/projects" },
    { id: 4, name: "Team", icon: Users, path: "/admin/team" },
    { id: 5, name: "Testimonial", icon: MessageSquareQuote, path: "/admin/testimonials" },
    { id: 6, name: "FAQ", icon: HelpCircle, path: "/admin/faqs" },
    { id: 7, name: "Contact Info", icon: Phone, path: "/admin/contact" },
    { id: 8, name: "Users", icon: UserCog, path: "/admin/users" }
  ];

  const toggleSideBar = () => {
    setSideBarShowing(prev => !prev);
  };

  return (
    <div className="sidenav bg-accent w-fit p-4 h-screen">
      <div className="top">
        <div className="logo flex items-center justify-between mb-10">
          <img
            src="/logo.png"
            alt=""
            className={`max-h-10 rounded ${
              !sideBarShowing ? "hidden" : "block"
            }`}
          />
          {sideBarShowing ? (
            <X onClick={toggleSideBar} />
          ) : (
            <LucideMenu onClick={toggleSideBar} />
          )}
        </div>

        <div className={`${!sideBarShowing ? "hidden" : "block"}`}>
          <ul className="flex flex-col w-fit">
            {menuItems.map((item) => {
              const isActive =
                location.pathname === item.path 
                // location.pathname.startsWith(item.path + "/");
                // this change causeed the dashboard to stay selected regardless of the path we're on

              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 text-white font-bold text-lg p-3 rounded hover:cursor-pointer ${
                      isActive ? "bg-primary text-text" : ""
                    }`}
                  >
                    <item.icon />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;