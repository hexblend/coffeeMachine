import React, { Component } from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
import logo from '../../Assets/img/logo-nav.png';

class Navbar extends Component {
	state = {
		isTop: true,
		isOpened: false
	};

  componentDidMount(){
    document.addEventListener('scroll', () =>{
      const isTop = window.scrollY < 100;
      if(isTop !== this.state.isTop) {
        this.setState({isTop})
      }
		});
	}

	toggleNav = () => {
		this.setState({
			isOpened: !this.state.isOpened
		})
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
					<nav 
						style={this.state.isTop ? 
									{background: 'transparent'} : 
									{background: '#1c1c1c', 
									 position: 'fixed', 
									 top: 0, 
									 height: 45,
									 border: 'none'
									}}
						className={this.state.isOpened ? 'mobile-nav-open' : ''}>

            <div className="container">
              <div className="row">
                <div className="col-12">
									<div className="mobile-visible">
										<span className="open-slide" onClick={this.toggleNav}>
											<i className="fas fa-bars"></i>
										</span>
										<a href="/" className="logo"><img src={logo} alt="logo" /></a>
									</div>
                  <ul className={this.state.isOpened ? 'links mobile-links-visible' : 'links'}>
                    <li><a href="#landing">Home</a></li>
                    <li><a href="#about">Description</a></li>
                    <li><a href="#features">Top features</a></li>
                    <li><a href="#details">Technical details</a></li>
                    <li><a href="#included">What's included</a></li>
                    <li><a href="#buy">Buy</a></li>
                  </ul>
                </div> {/* end of .col-12 */}
							</div> {/* end of .row */}
						</div> {/* end of .container */}
          </nav>
        </ScrollspyNav>
      </div>
    );
  }
}

export default Navbar;