import React from 'react';
import logo from '../../Assets/img/logo.png';
import Navbar from '../Layout/Navbar';
// Reveal Animation
import Zoom from 'react-reveal/Zoom';

const Landing = () => {
  return (
      <section className="landing-section" id="landing">
        <div className="container">
          <div className="row">
            <Navbar />
            <div className="col-12 middle-elements" id="startchange">
              <Zoom>
                <div className="logo">
                  <img src={logo} alt="Company logo" />
                  <h1>Passionata 20</h1>
                </div>
                <h2>Passion showed in every coffee.</h2>
              </Zoom>
              <a href="#about" className="transparent-button">Explore</a>
            </div> {/* end of .col-12 */}
          </div> {/* end of .row */}
          <span className="arrow"><i className="fas fa-caret-down"></i></span>
        </div> {/* end of .container */}
      </section>
  );
}

export default Landing;