import React from 'react';
import logo from '../../Assets/img/logo.png';

const Landing = () => {
  return (
    <section className="landing-section" id="landing">
      <div className="container">
        <div className="row">
          <div className="col-12 middle-elements">
            <div className="logo">
              <img src={logo} alt="Company logo" />
              <h1>Passionata 20</h1>
            </div>
            <h2>Passion showed in every coffee.</h2>
            <a href="#" className="transparent-button">Explore</a>
          </div> {/* end of .col-12 */}
        </div> {/* end of .row */}
        <span className="arrow"><i class="fas fa-caret-down"></i></span>
      </div> {/* end of .container */}
    </section>
  );
}

export default Landing;