import React, { Component } from 'react';
// Style File
import './Assets/scss/main.scss';
// Components
import Landing from './Components/Sections/Landing';
import About from './Components/Sections/About';
import Features from './Components/Sections/Features';
import TechnicalDetails from './Components/Sections/TechnicalDetails';
import WhatsIncluded from './Components/Sections/WhatsIncluded';
import Buy from './Components/Sections/Buy';
import Footer from './Components/Layout/Footer';

class App extends Component {
  render() {
    return (
      // Display all components 
      <div className="App">
        <Landing />
        <About />
        <Features />
        <TechnicalDetails />
        <WhatsIncluded />
        <Buy />
        <Footer />
      </div>
    );
  }
}

export default App;
