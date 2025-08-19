import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { events as allEvents } from "../services/events";
import { motion } from "framer-motion";

const categories = ["Fitness", "Sports", "Music", "Meetup", "Workshop", "Entertainment", "Social"];
const locations = [
  "Bangalore", "Pune", "Goa", "Chennai", "Kolkata", "Mumbai",
  "Rishikesh", "Jaipur", "Chandigarh", "Ahmedabad", "Kochi", "Delhi", "Hyderabad"
];

const EventPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Filtered events
  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      const query = search.toLowerCase();
      const matchSearch = 
        event.title.toLowerCase().includes(query) ||
        event.type.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.host.toLowerCase().includes(query);

      const matchCategory = selectedCategory ? event.type === selectedCategory : true;
      const matchLocation = selectedLocation ? event.location === selectedLocation : true;

      return matchSearch && matchCategory && matchLocation;
    });
  }, [search, selectedCategory, selectedLocation]);

  return (
    <section className="py-16 px-4 bg-black min-h-screen text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Explore Events</h2>

      {/* Search & Filters */}
{/* Search & Filters */}
<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 mb-12">
  <input
    type="text"
    placeholder="Search by title, location, host or category..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-grow p-3 rounded-full bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white text-sm"
  />
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="p-3 rounded-full bg-black border border-gray-700 text-white text-sm"
  >
    <option value="">All Categories</option>
    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
  </select>
  <select
    value={selectedLocation}
    onChange={(e) => setSelectedLocation(e.target.value)}
    className="p-3 rounded-full bg-black border border-gray-700 text-white text-sm"
  >
    <option value="">All Locations</option>
    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
  </select>
</div>


      {/* Event Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex flex-col justify-between border border-white/20 rounded-2xl p-6 shadow-lg bg-white/5 backdrop-blur-sm transition-all overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.5)" }}
              transition={{ duration: 0, delay: index * 0.00 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{event.date} • {event.location}</p>
                <p className="text-gray-300 text-sm mb-2">Hosted by: {event.host}</p>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">{event.description}</p>
                <p className="text-gray-400 text-xs">Category: {event.type}</p>
              </div>
              <Link to="/join">
                <motion.button
                  className="mt-4 w-full bg-gray-800 text-white px-4 py-2 rounded-full font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.7)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join
                </motion.button>
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">No events found.</p>
        )}
      </div>
    </section>
  );
};

export default EventPage;
