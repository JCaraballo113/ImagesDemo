import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ImageDropZone from './components/ImageDropZone';
import { Images } from './components/Images';
import ImageSlider from './components/ImageSlider';
import Nav from './components/Nav';

import config from './firebase';
 
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Initialize Firebase
firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Nav/>
          <div className="container">
            <ImageSlider />
            <ImageDropZone />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
