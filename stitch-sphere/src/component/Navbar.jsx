import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Updated imports for Heroicons v2
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeOut" } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-14 w-auto"
              src="/public/logo.png"
              alt="Logo"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">Stitch Sphere</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/registration"
              className="ml-4 px-4 py-2 bg-orange-600 text-white 
              rounded-lg hover:bg-orange-700 transition font-medium hidden md:inline-block"
            >
              Tailor  Registration
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <Link
              to="/registration"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-sm mr-3"
            >
              Tailor Registration
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              className="inline-flex items-center justify-center p-2
               rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none
               transition"
              title={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              {menuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
