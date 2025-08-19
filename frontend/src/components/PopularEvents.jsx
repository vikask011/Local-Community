import { events } from "../services/events";
import { motion } from "framer-motion";

const PopularEvents = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      {/* Title */}
      <motion.h3
        className="text-3xl font-bold mb-12 text-center tracking-wide"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        Popular Events
      </motion.h3>

      {/* Grid Wrapper */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.slice(0, 6).map((event, index) => (
            <motion.div
              key={event.id}
              className="relative border border-white/20 rounded-2xl p-8 shadow-lg 
                         bg-white/5 backdrop-blur-sm transition-all overflow-hidden group 
                         flex flex-col"
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0., delay: index * 0.0 }}
              whileHover={{
                scale: 1.06,
                boxShadow:
                  "0 0 25px rgba(255,255,255,0.7), 0 0 60px rgba(255,255,255,0.35)",
              }}
            >
              {/* Content */}
              <div className="relative z-10 flex flex-col flex-grow">
                {/* Title */}
                <h4 className="text-2xl font-semibold mb-3">{event.title}</h4>

                {/* Date + Location */}
                <p className="text-gray-300 text-sm mb-3">
                  {event.date} • {event.location}
                </p>

                {/* Description */}
                <p className="text-gray-200 text-base leading-relaxed flex-grow">
                  {event.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="mt-6 w-full relative px-5 py-3 
                             border border-white text-white rounded-xl
                             hover:border-white hover:bg-white hover:text-black 
                             transition-all duration-200"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularEvents;
