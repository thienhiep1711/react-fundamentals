import React, { Component } from 'react';
import PageBase from './pages/PageBase';
import './assets/scss/main.scss';
class App extends Component {
  render() {
    return (
      <div className="app">
          <PageBase />
      </div>
    );
  }
}

export default App;
