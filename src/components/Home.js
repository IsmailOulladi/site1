// src/components/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  const [ count , setCount] = useState(0);

  return (
    <div className={`home-container`}>
      <div className="home-content">
        <h1 className="page-title">Welcome to the National Association of Sciences and Sustainable Development</h1>
        <p>Our mission is to promote science and sustainable development...</p>
        <Link to="/about">
          <button className="btn-primary">Learn More</button>
        </Link>
        <div>
          <button onClick={() => setCount(count + 1)}>
            Count {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;