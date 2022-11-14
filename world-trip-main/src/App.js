import "./index.css";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
}
