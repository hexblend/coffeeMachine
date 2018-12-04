import React from 'react';
import machinePic from '../../Assets/img/features_machine.png';
import Fade from 'react-reveal/Fade';

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2>Top Features</h2>
        <div className="row">
          <Fade left>
            <div className="col-4">
              <h4>Powerful</h4>
              <p>Espresso machine with max. 1,470 watts of power and 15 bar of pressure.</p>
              <h4>Elegant</h4>
              <p>Stylish design for modern kitchens.</p>
              <h4>Multifunctional</h4>
              <p>Steam nozzle for frothing milk and preparing hot drinks.</p>
            </div>
          </Fade>
          <div className="col-4">
            <img src={machinePic} alt="Coffee Machine 2"/>
          </div>
          <Fade right>
            <div className="col-4">
              <h4>Small, yet powerful package</h4>
              <p>Compact housing with cup tray and stainless steel components.</p>
              <h4>Always ready</h4>
              <p>Large water tank with a volume of approx. 1.25 liters.</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Features;
