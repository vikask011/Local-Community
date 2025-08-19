// CreateEvent.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Fitness", "Sports", "Music", "Meetup", "Workshop", "Entertainment", "Social"];
const locations = [
  "Bangalore", "Pune", "Goa", "Chennai", "Kolkata", "Mumbai",
  "Rishikesh", "Jaipur", "Chandigarh", "Ahmedabad", "Kochi", "Delhi", "Hyderabad"
];

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    location: "",
    host: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.type.trim()) newErrors.type = "Type is required";
    if (!formData.date.trim()) newErrors.date = "Date is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.host.trim()) newErrors.host = "Host is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Event Created:", formData);
      setSuccess(true);
      setFormData({ title: "", type: "", date: "", location: "", host: "", description: "" });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/80 p-8 rounded-3xl w-full max-w-xl text-white backdrop-blur-sm shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Create Event</h2>

        {success && (
          <motion.div
            className="mb-6 p-4 bg-green-600 text-white rounded-md text-center font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            Event created successfully!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

          {/* Category Select */}
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

          {/* Location Select */}
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}

          <input
            type="text"
            name="host"
            placeholder="Host Name"
            value={formData.host}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.host && <p className="text-red-500 text-sm">{errors.host}</p>}

          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white resize-none h-24"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}

          <motion.button
            type="submit"
            className="mt-2 w-full bg-black text-white px-5 py-2 rounded-full font-semibold border border-gray-600"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Create Event
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default CreateEvent;
