import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
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
          </Routes>
        </div>
    </Router>
  );
}

export default App;
