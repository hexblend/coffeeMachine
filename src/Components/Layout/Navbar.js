import React, { Component } from 'react';
import ScrollspyNav from 'react-scrollspy-nav';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ScrollspyNav
          scrollTargetIds={["about", "features", "details", "included", "buy"]}
          activeNavClass="is-active"
          scrollDuration="650"
          headerBackground="true"
        >
          <ul>
            <li><a href="/"><span>Home</span></a></li>
            <li><a href="#about"><span>Description</span></a></li>
            <li><a href="#features"><span>Top Features</span></a></li>
            <li><a href="#details"><span>Technical Details</span></a></li>
            <li><a href="#included"><span>What's Included</span></a></li>
            <li><a href="#buy"><span>Buy</span></a></li>
          </ul>
        </ScrollspyNav>
      </div>
    );
  }
}

export default Navbar;