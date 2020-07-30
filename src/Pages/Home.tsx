import React, {Fragment} from 'react';
import DecryptButton from '../components/DecryptButton';
import Navbar from '../components/Navbar';
import InputDrop from '../components/InputDrop';
import EncryptButton from '../components/EncryptButton';
import {useSelector} from 'react-redux';
import {ReducersStates} from '../redux/types';
import PostEncryption from '../components/PostEncryption';
import PostDecryption from '../components/PostDecryption';
import {ButtonContainer} from '../components/styled-components';

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
