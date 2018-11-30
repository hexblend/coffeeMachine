import React, { Component } from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
import logo from '../../Assets/img/logo-nav.png';

class Navbar extends Component {
  // Check if user has started to scroll
  state = {
    isTop: true
  };

  componentDidMount(){
    document.addEventListener('scroll', () =>{
      const isTop = window.scrollY < 100;
      if(isTop !== this.state.isTop) {
        this.setState({isTop})
      }
    });
  }

  render() {
    return (
      <div>
        <ScrollspyNav
          scrollTargetIds={["landing", "about", "features", "details", "included", "buy"]}
          activeNavClass="is-active"
          scrollDuration="650"
          headerBackground="true"
        >
          {/* ES6 Styling Depending on the navbar position */}
          <nav style={this.state.isTop ? { background: 'transparent' } : 
                    { background: '#1c1c1c',
                      position: 'fixed',
                      top: 0,
                      height: 45,
                      border: 'none'
                    }}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <a href="/" className="logo"><img src={logo} alt="logo" /></a>
                  <ul>
                    <li><a href="#landing">Home</a></li>
                    <li><a href="#about">Description</a></li>
                    <li><a href="#features">Top features</a></li>
                    <li><a href="#details">Technical details</a></li>
                    <li><a href="#included">What's included</a></li>
                    <li><a href="#buy">Buy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </ScrollspyNav>
      </div>
    );
  }
}

export default Navbar;