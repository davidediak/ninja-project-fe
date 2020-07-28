import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import InputDrop from './components/InputDrop';
import EncryptButton from './components/EncryptButton';
import {Provider} from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <InputDrop />
        <EncryptButton />
      </div>
    </Provider>
  );
}

export default App;
