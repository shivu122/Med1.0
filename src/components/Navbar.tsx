import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pill, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Pill className="h-8 w-8" />
            <span className="font-bold text-xl">MedIdentify</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-purple-200">Home</Link>
            <Link to="/identify" className="hover:text-purple-200">Identify Medicine</Link>
            <Link to="/about" className="hover:text-purple-200">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/identify" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Identify Medicine</Link>
            <Link to="/about" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/privacy" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Privacy</Link>
            <Link to="/terms" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Terms</Link>
            <Link to="/disclaimer" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Medical Disclaimer</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;