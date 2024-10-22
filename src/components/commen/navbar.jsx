import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header className={` ${isHomePage ? 'bg-black/50 pt-8' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold  bg-blur-sm bg-white/10 backdrop-blur-sm rounded-lg px-2 pb-1">
            <span className="text-red-700">Car</span>
            <span className="text-red-300">Zu</span>
          </Link>
          
          {/* Hamburger menu for mobile */}
          <button
            className="lg:hidden text-red-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className={` ${isHomePage ? 'text-red-100' : 'text-red-500'} hidden lg:flex pr-2 0 space-x-6  `}>
             <NavLink to="/help">Help</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/rent-your-car" className="bg-red-500 text-white -mt-2 font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300 ml-10">Rent Your Car</Link>
        
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4 bg-white/60 border border-red-200 rounded-lg">
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
      ${mobile ? 'block py-2 hover:bg-red-600 px-4 rounded' : 'hover:text-red-300'}`}
  >
    {children}
  </Link>
);

export default Navbar;
