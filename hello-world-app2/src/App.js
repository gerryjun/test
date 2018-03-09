import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterReducers from './reducers/CounterReducers';
import Counter from './containers/Counter';


const store = createStore(CounterReducers);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
           <br/>
           <Provider store={store}>
                <Counter />
            </Provider>
        </div>
      </div>
    );
  }
}

export default App;
