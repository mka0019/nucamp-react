import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';


//to capture that return value from Configure store, we will put inside a local variable 
const store = ConfigureStore();

class App extends Component {

  render() {
      return (
        <Provider store={store}>
          {/* This will make the redux store avilable to all connected components that are children of App */}
          <BrowserRouter>
            <div className="App">
              <Main />
              {/* We moved the visual content to another component > MainComponent.js
                  so that this file will just have the essential container that will pull the content/files in */}
            </div>
          </BrowserRouter>
        </Provider>
      );
  }
}


export default App;
