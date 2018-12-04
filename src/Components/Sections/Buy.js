import React from 'react'
import amazonBtn from '../../Assets/img/amazon-buy-btn.png';
import storeBtn from '../../Assets/img/store-buy-btn.png';
import machinePic from '../../Assets/img/buy_machine.jpg';
import Fade from 'react-reveal/Fade';

const Buy = () => {
  return (
    <section className="buy-section" id="buy">
      <div className="container">
        <h2>Fancy to have it? See the options.</h2>
        <div className="row">
          <div className="col-6">
            <a href="https://www.amazon.co.uk/Klarstein-Passionata-Espresso-Capuccino-Preparing/dp/B077B3Z8SY/ref=sr_1_2?ie=UTF8&qid=1543360763&sr=8-2&keywords=klarstein+passionata"><img src={amazonBtn} alt="Amazon Buy Button" /></a>
            <a href="https://www.klarstein.co.uk/Kitchen-appliances/Coffee/Coffee-machines/Passionata-20-Espresso-Machine-20-Bar-Capuccino-Milk-Foam-Silver-Silver.html?utm_source=connexity&utm_medium=psm&utm_term=10031702&utm_campaign=Kitchen%20appliances"><img src={storeBtn} alt="Official Store Buy Button" /></a>
          </div>
          <div className="col-6">
            <Fade right>
              <img src={machinePic} alt="Coffe Machine 6" />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buy;
