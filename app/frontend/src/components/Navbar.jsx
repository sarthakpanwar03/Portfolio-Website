import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Diamond } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/work-experience", label: "EXPERIENCE" },
    { path: "/technical-skills", label: "SKILLS" },
    { path: "/positions", label: "LEADERSHIP" },
    { path: "/certifications", label: "CERTIFICATIONS" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
              <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                <Diamond className="h-5 w-5" />
              </div>
              <span className="text-xl font-light tracking-widest">SARTHAK PANWAR</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-light tracking-wider transition-all duration-300 border ${
                    location.pathname === item.path
                      ? "border-white text-white bg-white/10"
                      : "border-transparent text-gray-300 hover:text-white hover:border-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-sm font-light tracking-wider transition-all duration-300 border ${
                  location.pathname === item.path
                    ? "border-white text-white bg-white/10"
                    : "border-transparent text-gray-300 hover:text-white hover:border-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;