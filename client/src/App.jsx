import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';


import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-900 text-white font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
