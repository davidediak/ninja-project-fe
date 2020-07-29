import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import InputDrop from './components/InputDrop';
import EncryptButton from './components/EncryptButton';
import {Provider} from 'react-redux';
import store from './redux/store';
import styled from 'styled-components';
import DecryptButton from './components/DecryptButton';

const ButtonContainer = styled.section`
  && {
    display: flex;
    justify-content: center;
    margin-top: 56px;

    & > div {
      padding: 0 12px 0 12px;
    }
  }
`;
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <InputDrop />
        <ButtonContainer>
          <EncryptButton />
          <DecryptButton />
        </ButtonContainer>
      </div>
    </Provider>
  );
}

export default App;
