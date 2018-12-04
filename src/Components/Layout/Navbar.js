import React, { Component } from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
import logo from '../../Assets/img/logo-nav.png';

class Navbar extends Component {
	// Initial State
	state = {
		isTop: true,
		isOpened: false
	};

	// Check if user have started scrolling
  componentDidMount(){
    document.addEventListener('scroll', () =>{
      const isTop = window.scrollY < 100;
      if(isTop !== this.state.isTop) {
        this.setState({isTop})
      }
		});
	}

	// Change state when mobile nav button is clicked
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
					{/* Custom Styling if the user have started scrolling */}
					<nav 
						style={this.state.isTop ? 
									{background: 'transparent'} : 
									{background: '#1c1c1c', 
									 position: 'fixed', 
									 top: 0, 
									 height: 45,
									 border: 'none'
									}}
						// If user clicked the nav button toggle class .mobile-nav-open
						className={this.state.isOpened ? 'mobile-nav-open' : ''}>

            <div className="container">
              <div className="row">
                <div className="col-12">
									<div className="mobile-visible">
										<span className="open-slide" onClick={this.toggleNav}>
											<i className="fas fa-bars"></i>
										</span>
										<a href="#landing" className="logo"><img src={logo} alt="logo" /></a>
									</div>
									{/* If user clicked the nav button toggle class .mobile-links-visible */}
                  <ul className={this.state.isOpened ? 'links mobile-links-visible' : 'links'}>
										{/* onClick event on every link to close the navbar after click */}
                    <li><a href="#landing" onClick={this.toggleNav}>Home</a></li>
										<li><a href="#about" onClick={this.toggleNav}>Description</a></li>
										<li><a href="#features" onClick={this.toggleNav}>Top features</a></li>
										<li><a href="#details" onClick={this.toggleNav}>Technical details</a></li>
										<li><a href="#included" onClick={this.toggleNav}>What's included</a></li>
										<li><a href="#buy" onClick={this.toggleNav}>Buy</a></li>
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