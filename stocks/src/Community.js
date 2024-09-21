import React from 'react';
// import Navbar from './components/Navbar';
import Graph from './components/Graph';

const Community = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="content p-4">
        <h1>Community Page</h1>
        <Graph/>
      </div>
    </div>
  );
};

export default Community;
