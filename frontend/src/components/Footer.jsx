import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);

    // Hide the success message after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-8">
        
        {/* Branding & Socials */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold tracking-wide">EventHub</h2>
          <p className="text-gray-400 text-sm">
            Discover, create, and share amazing events. Your journey to unforgettable experiences starts here.
          </p>
          <div className="flex items-center gap-4 mt-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social Icon"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="/events" className="text-gray-400 hover:text-white transition-colors">Explore Events</a></li>
            <li><a href="/create" className="text-gray-400 hover:text-white transition-colors">Create Event</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest updates and event news straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white text-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-gray-900 hover:bg-gray-900 transition-colors text-white py-3 px-6 rounded-r-md text-sm font-semibold"
            >
              Subscribe
            </button>
          </form>

          {/* Success Message */}
          <AnimatePresence>
            {subscribed && (
              <motion.div
                key="footer-success"
                className="mt-3 px-4 py-2 bg-green-600 rounded-full text-white font-semibold text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                Subscribed successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center md:text-center pt-8">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} EventHub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
