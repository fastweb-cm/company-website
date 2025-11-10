import { useState } from 'react';
import { navLinks, contactInfo, socialLinks } from '../utils/data';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Clock } from "lucide-react";
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-secondary text-white shadow-md fixed top-0 left-0 z-50">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" width={32} height={32} />
          <h1 className="font-bold tracking-wide">
            Fast<span className="text-primary">Web</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ease-in-out 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 
                  after:w-0 after:bg-text after:transition-all after:duration-300 after:ease-in-out
                  hover:text-text hover:after:w-full 
                  ${
                    isActive
                      ? "text-text after:w-full font-semibold" // active styles
                      : "text-header-text"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link to="/contact" className="hidden md:block">
          <Button hoverBg="black" className="rounded-none py-3 px-10 font-extrabold hover:text-secondary">
            Get A Quote
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden cursor-pointer focus:outline-none focus:ring-0 bg-transparent border-none p-0 hover:bg-transparent active:bg-transparent"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className="text-primary" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary/90 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden flex flex-col`}
      >
        <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col">
          {/* Header */}
          <div className="flex justify-between px-6 py-4 border-b border-secondary">
            <Link className="flex items-center gap-2">
              <img src="/logo.png" alt="logo" width={32} height={32} />
              <h2 className="text-xl font-semibold text-white">FastWeb</h2>
            </Link>
            <button
              aria-label="close"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer focus:outline-none bg-transparent"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Navigation */}
          <ul className="flex flex-col mt-6 space-y-3 px-6 grow">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `relative transition-colors duration-300 ease-in-out text-secondary 
                    after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 
                    after:w-0 after:bg-text after:transition-all after:duration-300 after:ease-in-out
                    hover:text-text hover:after:w-full 
                    ${
                      isActive
                        ? "text-text after:w-full font-semibold" // active styles
                        : "text-header-text"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="px-6 py-4 border-t border-gray-700">
            <div className="flex flex-row gap-4 items-center mb-3">
              <p>{contactInfo.phone.icon}</p>
              <div>
                <p className="text-footer-text">Call Now</p>
                <p className="text-secondary">{contactInfo.phone.value}</p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center mb-3">
              <p>{contactInfo.email.icon}</p>
              <div>
                <p className="text-footer-text">Email Us</p>
                <p className="text-secondary">{contactInfo.email.value}</p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <Clock size={24} className="text-secondary" />
              <div>
                <p className="text-footer-text">Opening Hours</p>
                <p className="text-secondary">Mon - Sat 8:00 - 6:30</p>
                <p className="text-secondary">Sunday - CLOSED</p>
              </div>
            </div>
          </div>

          {/* Social Links at Bottom */}
          <div className="mt-auto flex justify-center border-t border-gray-700 pt-4 pb-6">
            <div className="flex gap-0.5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 text-secondary border-r border-gray-700 last:border-r-0 
                     hover:text-black transition-all duration-300 ease-in-out hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
