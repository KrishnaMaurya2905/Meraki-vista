import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agency from "./pages/Agency";
import Contact from "./pages/Contact";
import Experties from "./pages/Experties";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route } from "react-router-dom";
const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div className="relative overflow-x-hidden max-md:bg-contain max-sm:bg-contain  bg-Glitch ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experties" element={<Experties />} />
      </Routes>
    </div>
  );
};

export default App;
