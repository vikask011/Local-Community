// Join.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { events } from "../services/events"; // your events array

const Join = () => {
  const [formData, setFormData] = useState({
    eventId: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    reason: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.eventId) newErrors.eventId = "Please select an event";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.reason.trim()) {
      newErrors.reason = "Reason is required";
    } else if (formData.reason.length > 200) {
      newErrors.reason = "Reason cannot exceed 200 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({
        eventId: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        reason: "",
      });
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/80 p-8 rounded-3xl w-full max-w-xl    text-white backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 text-center">Join Event</h2>

        {success && (
          <motion.div
            className="mb-6 p-4 bg-green-600 text-white rounded-md text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Joined successfully!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Event Selection */}
          <select
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select Event</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title} ({event.date} - {event.location})
              </option>
            ))}
          </select>
          {errors.eventId && <p className="text-red-500 text-sm">{errors.eventId}</p>}

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

          <textarea
            name="reason"
            placeholder="Why do you want to join? (max 200 chars)"
            value={formData.reason}
            onChange={handleChange}
            maxLength={200}
            className="p-3 rounded-xl bg-black/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white resize-none h-24"
          />
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}

          <motion.button
            type="submit"
            className="mt-2 w-full bg-black/80 text-white px-5 py-2 rounded-full font-semibold border border-gray-600"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Join
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Join;
