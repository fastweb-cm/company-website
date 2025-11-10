import React from 'react'
import { navLinks, socialLinks, contactInfo, services } from '../utils/data'
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-2">
            <img src="/logo.png" alt="fastweb-logo" width={54} height={54} />
            <h2 className="text-2xl font-bold text-white">Fast<span className="text-primary">Web</span></h2>
          </Link>
          <p className="text-sm text-footer-text">
            We provide cutting-edge IT solutions, web & mobile applications,
            networking, and IT consulting services.
          </p>
          <Link to="/about"><Button  icon={ArrowRight} iconPosition='right' className='rounded-md py-4 my-6 hover:text-text' >Discover More</Button></Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-secondary font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name} >
                <NavLink
                  to={link.href}
                  className="relative
                text-footer-text
                  transition-colors duration-300 ease-in-out
                  after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 after:ease-in-out
                hover:text-secondary hover:after:w-full"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* services */}
        <div>
          <h3 className="text-xl text-secondary font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((service,index) => (
              <li key={index} >
                <Link
                  to={`/services/${service.slug}`}
                  className="relative
                text-footer-text
                  transition-colors duration-300 ease-in-out
                  after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 after:ease-in-out
                hover:text-secondary hover:after:w-full"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact info */}
        <div>
          <h3 className="text-xl text-secondary font-semibold mb-4">Contact</h3>
          <p className="text-footer-text">{contactInfo.location.value}</p>
          <div className="flex flex-col mt-4">
            <div className="flex flex-row items-center gap-2">
              <p className="text-primary">{contactInfo.email.icon}</p>
              <p className="text-secondary">{contactInfo.email.value}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="text-primary">{contactInfo.phone.icon}</p>
              <p className="text-secondary">{contactInfo.phone.value}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-muted/40 mx-6 px-4  py-8 flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-center md:justify-between text-sm text-background/70">
        <p>© {year} FastWeb. All rights reserved.</p>
        <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary h-8 w-8  rounded-full flex items-center justify-center bg-muted text-secondary transition-colors duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer