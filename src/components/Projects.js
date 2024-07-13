import React from 'react';

const Projects = () => {
  return (
    <div className="container">
      <h2>Our Projects</h2>
      <div className="card">
        <img src="path/to/your/image1.jpg" alt="Project 1" />
        <div className="card-content">
          <h3>Project Title 1</h3>
          <p>Description of project 1</p>
        </div>
      </div>
      <div className="card">
        <img src="path/to/your/image2.jpg" alt="Project 2" />
        <div className="card-content">
          <h3>Project Title 2</h3>
          <p>Description of project 2</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;