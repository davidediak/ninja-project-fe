import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import InputDrop from './components/InputDrop';
import EncryptButton from './components/EncryptButton';
function App() {
  return (
    <div>
      <Navbar/>
      <InputDrop/>
      <EncryptButton/>
    </div>
  );
}

export default App;
