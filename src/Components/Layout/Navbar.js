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
          scrollTargetIds={["about", "features", "details", "included", "buy"]}
          activeNavClass="is-active"
          scrollDuration="650"
          headerBackground="true"
        >
          {/* ES6 Styling Depending on the navbar position */}
          <nav style={this.state.isTop ? { background: 'transparent' } : 
                    { background: '#181818',
                      position: 'fixed',
                      top: 0
                    }}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <a href="/" className="logo"><img src={logo} alt="logo" /></a>
                  <ul>
                    <li><a href="/"><span>Home</span></a></li>
                    <li><a href="#about"><span>Description</span></a></li>
                    <li><a href="#features"><span>Top features</span></a></li>
                    <li><a href="#details"><span>Technical details</span></a></li>
                    <li><a href="#included"><span>What's included</span></a></li>
                    <li><a href="#buy"><span>Buy</span></a></li>
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