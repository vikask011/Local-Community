import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icons
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 px-6 py-8 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">EventHub</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link
            to="/"
            className="relative group transition-transform duration-300 hover:scale-105"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/events"
            className="relative group transition-transform duration-300 hover:scale-105"
          >
            Explore Events 
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Create Event Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/create"
              className="bg-gray-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-400 transition-colors duration-300"
            >
              Create Event
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
{isOpen && (
  <div className="flex flex-col mt-6 space-y-4 md:hidden text-white px-6">
    <Link
      to="/"
      onClick={() => setIsOpen(false)}
      className="hover:pl-2 transition-all duration-300"
    >
      Home
    </Link>
    <Link
      to="/events"
      onClick={() => setIsOpen(false)}
      className="hover:pl-2 transition-all duration-300"
    >
      Explore Events
    </Link>
    <Link
      to="/create"
      onClick={() => setIsOpen(false)}
      className="hover:pl-2 transition-all duration-300"
    >
      Create Event
    </Link>
  </div>
)}
</nav>
  );
};

export default Navbar;
