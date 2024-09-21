import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home'; // Create these components
// import Features from './Features';
// import Pricing from './Pricing';
import AboutUs from './AboutUs';
import Dashboard from './Dashboard';
import Community from './Community';
import Help from './Help';
import Invest from './Invest';
import Graph from './components/Graph';

function App() {
  return (
    <>
      <Router>
        <div style={{ display: 'flex' }}>
          <Navbar />
          <div className="content p-4">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/community" element={<Community />} />
              <Route path="/help" element={<Help />} />
              <Route path="/" element={<Home />} /> {/* Default route */}
            </Routes>
          </div>
        </div>
      </Router>

      <Graph />
    </>
  );
}

export default App;
