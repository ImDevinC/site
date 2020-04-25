import React, { Component } from 'react';
import './App.css';
import ProgressBar from './components/progressBar'
import Page from './components/page'

class App extends Component {
  render() {
    return (
      <div>
        <ProgressBar />
        <div className="page">
          <Page />
        </div>
      </div>
    );
  }
}

export default App;
