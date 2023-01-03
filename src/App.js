import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Pricing from './pages/Pricing';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Navigation from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
        </div>
    </Router>
  );
}

export default App;
