import {Button, TextField} from '@material-ui/core';
import React, {ChangeEvent, Fragment, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {ReducersStates} from '../redux/types';
const aes256 = require('aes256');

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

export default function PostDecryption() {
  const {fileToDecrypt} = useSelector<ReducersStates, {fileToDecrypt: File}>(
    state => state.UI.decryption
  );
  const [key, setKey] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  const handleDownloadClick = () => {
    if (fileToDecrypt && key) {
      decrypt(fileToDecrypt, atob(key));
    }
  };

  const decrypt = (file: File, keyDecoded: string) => {
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = evt => {
      const decrypted = aes256.decrypt(keyDecoded, evt.target.result);
      const fileToDecrypt = new File([decrypted], file.name, {type: file.type});
      download(fileToDecrypt);
    };
  };

  const download = (fileDecrypted: File) => {
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(fileDecrypted);
    a.download = fileDecrypted.name;
    a.style.display = 'none';
    const el = document.body.appendChild(a);
    a.click();
    document.body.removeChild(el);
  };

  return (
    <Fragment>
      <ButtonContainer>
        <StyledTextField variant="outlined" id="key" value={key} onChange={onChange} />
      </ButtonContainer>
      <ButtonContainer>
        <StyledPrimaryButtonGroup onClick={handleDownloadClick}>
          Decrypt and download
        </StyledPrimaryButtonGroup>
      </ButtonContainer>
    </Fragment>
  );
}
