import React from 'react'
import machinePic from '../../Assets/img/details_machine.png';
import Fade from 'react-reveal/Fade';

const TechnicalDetails = () => {
  return (
    <section className="technical_details-section" id="details">
      <div className="container">
        <h2 className="mobile-title">Technical Details</h2>
        <div className="row">
            <div className="col-6">
              <h2>Technical Details</h2>
            <p>Power: <Fade right><span>max. 1,470 watts</span></Fade></p>
            <p>Pump pressure: <Fade right><span>15 bar</span></Fade></p>
            <p>Volume of water tank: <Fade right><span>1.25 liters(6 cups)</span></Fade></p>
              <p>Automatic pressure release</p>
              <p>Removable drip tray with stainless steel grid</p>
              <p>Removable nozzle attachment</p>
              <p>Non-slip rubber pads</p>
              <p>Power supply: <Fade right><span>220-240 V - | 50/60 Hz</span></Fade></p>
            </div>
          <div className="col-6">
            <img src={machinePic} alt="Coffee Machine 3"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalDetails;
