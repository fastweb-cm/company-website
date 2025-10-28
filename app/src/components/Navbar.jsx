import { useState } from 'react';
import { navLinks } from '../utils/data'
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-primary text-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Fast <span className="text-secondary">Web</span>
        </h1>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.name} className='hover:text-secondary transition-colors duration-300'>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-primary text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 md:hidden`}>
        <div className="flex justify-between px-6 py-4 border-b border-secondary">
          <h2 className="text-xl font-semibold">FastWeb</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col mt-6 space-y-6 px-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-lg hover:text-secondary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </nav>
  )
}

export default Navbar