import React from 'react'
import Fade from 'react-reveal/Fade';

const WhatsIncluded = () => {
  return (
    <section className="whats_included-section" id="included">
      <div className="container">
        <h2>What's Included</h2>
        <div className="row">
          <Fade left>
            <div className="col-12">
              <h4>Included</h4>
              <p>1x device</p>
              <p>1x measuring spoon</p>
              <p>User manual in English (other languages: German)</p>
            </div>
          <div className="col-12">
            <h4>Dimensions</h4>
            <p>Dimensions: approx. 20x30x35 cm (WxHxD)</p>
            <p>Cable length: approx. 100 cm</p>
            <p>Weight: approx. 3.7 kg</p>
          </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default WhatsIncluded;
