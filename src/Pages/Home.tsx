import React, {Fragment} from 'react';
import DecryptButton from '../components/DecryptButton';
import Navbar from '../components/Navbar';
import InputDrop from '../components/InputDrop';
import EncryptButton from '../components/EncryptButton';
import {useSelector} from 'react-redux';
import {ReducersStates} from '../redux/types';
import styled from 'styled-components';

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
  const fileEncrypted = useSelector<ReducersStates, File>(state => state.UI.fileEncrypted);
  return (
    <div>
      <Navbar />
      {!fileEncrypted ? (
        <Fragment>
          <InputDrop />
          <ButtonContainer>
            <EncryptButton />
            <DecryptButton />
          </ButtonContainer>
        </Fragment>
      ) : (
        <Fragment>{fileEncrypted?.name}</Fragment>
      )}
    </div>
  );
}
