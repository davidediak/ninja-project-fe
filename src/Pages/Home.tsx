import React, {Fragment} from 'react';
import DecryptButton from '../components/DecryptButton';
import Navbar from '../components/Navbar';
import InputDrop from '../components/InputDrop';
import EncryptButton from '../components/EncryptButton';
import {useSelector} from 'react-redux';
import {ReducersStates} from '../redux/types';
import styled from 'styled-components';
import {Button, TextField} from '@material-ui/core';

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

const StyledPrimaryButtonGroup = styled(Button)`
  && {
    background: #ffa047;
    border-radius: 3px;
    text-align: center;
    width: 168px;
    height: 48px;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    background: #292929;
    border: 1px solid #363636;
    box-sizing: border-box;
    border-radius: 3px;

    & > div {
      padding: 0px;
      color: #ffffff;

      & > fieldset {
        border: 0px;
      }
    }
  }
`;

const StyledCopyButton = styled(Button)`
  && {
    background: #009eff;
    border-radius: 3px;
    text-align: center;
    color: #ffffff;
  }
`;
export default function Home() {
  const {fileEncrypted, key} = useSelector<ReducersStates, {fileEncrypted: File; key: string}>(
    state => state.UI.encryption
  );

  const handleDownloadClick = () => {
    if (fileEncrypted) {
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(fileEncrypted);
      a.download = fileEncrypted.name;
      a.style.display = 'none';
      const el = document.body.appendChild(a);
      a.click();
      document.body.removeChild(el);
    }
  };
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
        <Fragment>
          <ButtonContainer>
            <StyledTextField
              variant="outlined"
              id="key"
              value={key}
              disabled={true}
              InputProps={{endAdornment: <StyledCopyButton>Copy</StyledCopyButton>}}
            />
          </ButtonContainer>
          <ButtonContainer>
            <StyledPrimaryButtonGroup onClick={handleDownloadClick}>
              Download
            </StyledPrimaryButtonGroup>
          </ButtonContainer>
        </Fragment>
      )}
    </div>
  );
}
