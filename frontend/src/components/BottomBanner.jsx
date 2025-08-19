import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BottomBanner = () => {
  return (
    <section
      className="relative text-white py-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg"
          alt="Event Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <h3 className="text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
        Want to host your own event?
      </h3>

      {/* Paragraph */}
      <p className="mb-8 max-w-xl text-base sm:text-lg">
        Create and share your event with the community. Reach more people and make your event memorable.
      </p>

      {/* Button */}
      <Link to="/create">
        <motion.button
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(255,255,255,0.6)" }}
          whileTap={{ scale: 0.95 }}
        >
          Create Event
        </motion.button>
      </Link>
    </section>
  );
};

export default BottomBanner;
