import React, { Component } from 'react';
import './App.css';
import About from './components/about'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page" >
        <div id="container-wrap">
          <div id="colorlib-main">
            <About />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
