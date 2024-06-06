// src/components/Play.js

import React from 'react';
import '../App.css'; // Assuming you have a separate CSS file for the Play component

// Import images from the src/images directory
import guitarImage from '../images/guitar1.png';
import artImage from '../images/art1.png';
import puzzleImage from '../images/puzzle1.png';
import chessImage from '../images/chess1.png';

const Play = () => {
  return (
    <div className="index-page">
      <main>
        <section id="play">
          <h2>Play:</h2>
          <div className="project-gallery">
            <a href="guitar.html" className="project-item">
              <img src={guitarImage} alt="3D Printed Guitar" />
              <div className="project-title">3D Printed Guitar</div>
            </a>
            <a href="art.html" className="project-item">
              <img src={artImage} alt="Art" />
              <div className="project-title">Art</div>
            </a>
            <a href="puzzles.html" className="project-item">
              <img src={puzzleImage} alt="Puzzles" />
              <div className="project-title">3D Printed Puzzles</div>
            </a>
            <a href="chess.html" className="project-item">
              <img src={chessImage} alt="Chess Robot" />
              <div className="project-title">Chess Playing Robot</div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Play;
