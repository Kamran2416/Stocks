import React from 'react';
// import Navbar from './components/Navbar';
import Graph from './components/Graph';

const Help = () => {
  return (
    <div style={{ display: 'flex' }}>

      <div className="content p-4">
        <h1>Help page</h1>
        <Graph/>
      </div>
    </div>
  );
};

export default Help;
