import React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar";
import Header from "./Components/Layout/Header";

import "./css/App.css";
import "./css/index.css";
import "./css/layout.css";

import "./css/home.css";
import Appointment from "./Pages/appointments";
import Chat from "./Pages/chat";
import Labs from "./Pages/labs";
import MyAccount from "./Pages/my-account";
import Home from "./Pages";
const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/appointments" element={<Appointment />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/labs" element={<Labs />}></Route>
          <Route path="/my-account" element={<MyAccount />}></Route>
        </Routes>
        <Navbar />
      </div>
    </>
  );
};

export default App;
