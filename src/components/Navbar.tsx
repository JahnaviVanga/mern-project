import { useState } from 'react';
import { Car, LogOut, Menu, User, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Cars', path: 'cars' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">LuxeWheels</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className={`text-gray-600 hover:text-blue-600 transition-colors ${
                  currentPage === link.path ? 'text-blue-600' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleNavigation('profile')}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <User className="h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    handleNavigation('home');
                  }}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavigation('login')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className={`block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 ${
                  currentPage === link.path ? 'text-blue-600' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => handleNavigation('profile')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    handleNavigation('home');
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavigation('login')}
                className="block w-full text-left px-3 py-2 text-blue-600 hover:text-blue-700"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}