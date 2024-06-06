// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Work from './components/Work'; // Assuming you have a Work component
import Play from './components/Play'; // Import the Play component
// import About from './components/About'; // Assuming you have an About component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/play" element={<Play />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




