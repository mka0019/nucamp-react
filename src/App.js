import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';



class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Main />
            {/* We moved the visual content to another component > MainComponent.js
                so that this file will just have the essential container that will pull the content/files in */}
          </div>
        </BrowserRouter>
      );
  }
}


export default App;
