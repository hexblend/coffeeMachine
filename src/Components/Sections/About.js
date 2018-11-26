import React from 'react';
import previewPic from '../../Assets/img/description_machine.jpg';


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="vertical-center">
            <div className="col-5">
              <img src={previewPic} alt="Coffee Machine Picture 1" />
            </div>
            <div className="col-7">
              <h2>Description</h2>
              <p>The Klarstein Passionata 15 is an elegant espresso machine with a pronounced sense of functionality and design. With a powerful 1,470 watts of power and 15 bar pressure level, it pushes hot water through the ground coffee, unleashing its full aroma. With the Klarstein Passionata 15  ground coffee or espresso powder as well as coffee and espresso pods can be used.</p>
              <p>The removable water tank holds a volume of 1.25 litres. That's enough for about 6 cups, and two cups can be prepared at the same time. While more cups are being prepared, a hot plate on the lid keeps finished drinks warm.</p>
              <p>The Klarstein Passionata 20 is easy to use and, thanks to its partially detachable construction with stainless steel elements, it is extremely easy to clean. Its elegant design fits seamlessly into any kitchen ambience and makes you want to drink a hot espresso just by looking at it. Another highlight is the steam nozzle, which can be used to quickly froth milk to enjoy a cappuccino or other hot drinks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

