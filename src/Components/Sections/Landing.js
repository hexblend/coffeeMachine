import React from 'react';
import logo from '../../Assets/img/logo.png';

const Landing = () => {
    return (
        <section className="landing-section">
            <div className="container">
                <div className="row">
                    <div className="middle-text">
                        <div className="col-12">
                            <img src={logo} alt="Company logo"/>
                            <h1>Passionata 20</h1>
                        </div>
                        <div className="col-12">
                            <h2>Passion showed in every coffee.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;