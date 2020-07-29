import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Home from './Pages/Home';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
