import React from 'react';
// import Navbar from './components/Navbar';
import Graph from './components/Graph';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* <Navbar /> */}
      <div className="content p-4">
        <h1>About us page</h1>
        <Graph/>
      </div>
    </div>
  );
};

export default AboutUs;
