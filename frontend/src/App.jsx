// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import EventPage from "./pages/Event";
import Join from "./pages/Join";
import CreateEvent from "./pages/Create";

function App() {
  return (
    <Router>
      {/* Constant Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>

      {/* Constant Footer */}
      
    </Router>
  );
}

export default App;
