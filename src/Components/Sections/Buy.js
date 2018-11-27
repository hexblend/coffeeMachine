import React from 'react'
import amazonBtn from '../../Assets/img/amazon-buy-btn.png';
import storeBtn from '../../Assets/img/store-buy-btn.png';
import machinePic from '../../Assets/img/buy_machine.jpg';

const Buy = () => {
  return (
    <section className="buy-section" id="buy">
      <div className="container">
        <h2>Fancy to have it? See the options.</h2>
        <div className="row">
          <div className="col-6">
            <img src={amazonBtn} alt="Amazon Buy Button"/>
            <img src={storeBtn} alt="Official Store Buy Button"/>
          </div>
          <div className="col-6">
            <img src={machinePic} alt="Coffe Machine 6"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Buy;
