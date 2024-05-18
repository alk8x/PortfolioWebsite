import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';  // Your global styles

// Import images from the src/images directory
import baseImage from './images/base1.png';
import mathMosaicImage from './images/mathmosaic_clip_cropped.gif';
import imsImage from './images/ims_clip_cropped.gif';
import algorealmImage from './images/algorealm1.png';
import windEnergyImage from './images/wind1.png';

function App() {
  return (
    <div className="App index-page">
      <Header />
      <main>
        <section id="work">
          <h1>From prototyping to boundless creativity, I'm a multi-faceted engineer with a passion for design.</h1>
          <h2>Work:</h2>
          <div className="project-gallery">
            <a href="base.html" className="project-item">
              <img src={baseImage} alt="Base" />
              <div className="project-title">BASE Water Sensor</div>
            </a>
            <a href="mathmosaic.html" className="project-item">
              <img src={mathMosaicImage} alt="MathMosaic" />
              <div className="project-title">MathMosaic</div>
            </a>
            <a href="ims.html" className="project-item">
              <img src={imsImage} alt="IMS" />
              <div className="project-title">Interactive Music Systems</div>
            </a>
            <a href="algorealm.html" className="project-item">
              <img src={algorealmImage} alt="algorealm" />
              <div className="project-title">Informal Learning for Children</div>
            </a>
            <a href="windenergy.html" className="project-item">
              <img src={windEnergyImage} alt="wind energy" />
              <div className="project-title">Wind Energy Research</div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;



