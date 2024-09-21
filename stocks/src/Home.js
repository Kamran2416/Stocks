import React from 'react';

import Graph from './components/Graph';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="content p-4">
        <h1>Home page</h1>
        <Graph/>
      </div>
    </div>
  );
};

export default Home;
