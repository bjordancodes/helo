import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './route';
import {Provider} from 'react-redux';
import store from './dux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <HashRouter>
      <div className="App">
        <Nav/>
        {routes}
      </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
