import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { url: "https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg", text: "Fitness & Peace", desc: "Join yoga, meditation, and wellness events near you." },
  { url: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg", text: "Sports", desc: "Play, compete, and enjoy sports with your community." },
  { url: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg", text: "Entertainment", desc: "Experience music, comedy nights, and live shows." },
  { url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg", text: "Workshop", desc: "Learn new skills in interactive workshops." },
  { url: "https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg", text: "Meetup", desc: "Connect with like-minded people and share ideas." },
  { url: "https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg", text: "Social", desc: "Be part of meaningful social impact activities." },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Animated Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current].url})` }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated Text */}
      <div className="relative z-10 max-w-2xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current + "-text"}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">{images[current].text}</h2>
            <p className="text-sm sm:text-base md:text-lg opacity-90">{images[current].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 flex space-x-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full transition ${idx === current ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
