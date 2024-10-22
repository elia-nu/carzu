import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const navigate = useNavigate();
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-red-500">CarZu</Link>
          <div className="space-x-6">
            <Link to="/rent-your-car" className="font-medium">Rent Your Car</Link>
            <Link to="/help" className="font-medium">Help</Link>
            <Link to="/signup" className="font-medium">Sign Up</Link>
            <Link to="/login" className="font-medium">Log In</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
