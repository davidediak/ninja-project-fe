import React, {Fragment} from 'react';
import DecryptButton from '../components/DecryptButton';
import Navbar from '../components/Navbar';
import InputDrop from '../components/InputDrop';
import EncryptButton from '../components/EncryptButton';
import {useSelector} from 'react-redux';
import {ReducersStates} from '../redux/types';
import styled from 'styled-components';
import PostEncryption from '../components/PostEncryption';
import PostDecryption from '../components/PostDecryption';

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

export default function Home() {
  const {fileEncrypted} = useSelector<ReducersStates, {fileEncrypted: File}>(
    state => state.UI.encryption
  );

  const {fileToDecrypt} = useSelector<ReducersStates, {fileToDecrypt: File}>(
    state => state.UI.decryption
  );

  return (
    <div>
      <Navbar />
      {!fileEncrypted && !fileToDecrypt && (
        <Fragment>
          <InputDrop />
          <ButtonContainer>
            <EncryptButton />
            <DecryptButton />
          </ButtonContainer>
        </Fragment>
      )}
      {fileEncrypted && <PostEncryption />}
      {fileToDecrypt && <PostDecryption />}
    </div>
  );
}
