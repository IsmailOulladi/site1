// src/components/Home.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`home-container ${theme}`}>
      <div className="home-content">
        <h1 className="page-title">Welcome to the National Association of Sciences and Sustainable Development</h1>
        <p>Our mission is to promote science and sustainable development...</p>
        <Link to="/about">
          <button className="btn-primary">Learn More</button>
        </Link>
        <div>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;