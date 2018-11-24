import React, { Component } from 'react';
import './Assets/scss/main.scss';

import Landing from './Components/Sections/Landing';
import About from './Components/Sections/About';
import Features from './Components/Sections/Features';
import TechnicalDetails from './Components/Sections/TechnicalDetails';
import WhatsIncluded from './Components/Sections/WhatsIncluded';
import Buy from './Components/Sections/Buy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
        <Features />
        <TechnicalDetails />
        <WhatsIncluded />
        <Buy />
      </div>
    );
  }
}

export default App;
