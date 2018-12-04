import React from 'react';

const Footer = () => {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Copyright &copy; {(new Date().getFullYear())} Klarstein. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;