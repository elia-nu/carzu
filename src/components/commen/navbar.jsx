import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-red-500 to-red-700 text-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold">
            <span className="text-yellow-300">Car</span>
            <span className="text-white">Zu</span>
          </Link>
          
          {/* Hamburger menu for mobile */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-6">
            <NavLink to="/rent-your-car">Rent Your Car</NavLink>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <NavLink to="/rent-your-car" mobile>Rent Your Car</NavLink>
            <NavLink to="/help" mobile>Help</NavLink>
            <NavLink to="/signup" mobile>Sign Up</NavLink>
            <NavLink to="/login" mobile>Log In</NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, children, mobile }) => (
  <Link
    to={to}
    className={`font-medium transition duration-300 ease-in-out
      ${mobile ? 'block py-2 hover:bg-red-600 px-4 rounded' : 'hover:text-yellow-300'}`}
  >
    {children}
  </Link>
);

export default Navbar;
