import React, { Component } from 'react';
import './Assets/scss/main.scss';

import Landing from './Components/Sections/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
