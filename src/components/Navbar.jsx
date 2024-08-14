import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import LOGO from "../assets/LOGO.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 p-2 border-b backdrop-blur-lg bg-sky-600/40">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={LOGO} alt="LOGO" />
          </div>
          <ul className="hidden lg:flex space-x-12">
            <li><Link to="/" className='hover:text-black'>Home</Link></li>
            <li><Link to="/about" className='hover:text-black'>About</Link></li>
            <li><Link to="/certificate" className='hover:text-black'>Certificate</Link></li>
            <li><Link to="/price" className='hover:text-black'>Price</Link></li>
            <li><Link to="/contact" className='hover:text-black'>Contact</Link></li>
          </ul>
          <div className="flex justify-center space-x-12 items-center">
            <Link to="/login" className="border-2 border px-6 py-2 ml-10 mr-4 hover:bg-sky-900 text-white">
              Get Start
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-blue-700 w-full p-12 flex flex-col justify-center items-center gap-5 lg:hidden">
            <ul>
              <li><Link to="/" className='hover:text-black'>Home</Link></li>
              <li><Link to="/about" className='hover:text-black'>About</Link></li>
              <li><Link to="/certificate" className='hover:text-black'>Certificate</Link></li>
              <li><Link to="/price" className='hover:text-black'>Price</Link></li>
              <li><Link to="/contact" className='hover:text-black'>Contact</Link></li>
            </ul>
            <div className="flex space-x-6">
              <Link to="/login" className="py-3 px-6 border rounded-full hover:bg-slate-800">
                Get Start
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;