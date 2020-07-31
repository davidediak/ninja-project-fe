import React, {ChangeEvent, Fragment, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {ReducersStates} from '../redux/types';
import {
  ButtonContainer,
  StyledPrimaryButtonGroup,
  StyledTextField,
  StyledSectionColFlex,
} from './styled-components';
import {Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
const aes256 = require('aes256');

const CustStyledPrimaryButtonGroup = styled(StyledPrimaryButtonGroup)`
  && {
    padding: 20px;
    background: #ffa047;
  }
`;

export default function PostDecryption() {
  const {fileToDecrypt} = useSelector<ReducersStates, {fileToDecrypt: File}>(
    state => state.UI.decryption
  );
  const [key, setKey] = useState('');
  const [error, setError] = React.useState({open: false, message: ''});

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  const handleDownloadClick = () => {
    if (fileToDecrypt && key) {
      try {
        const keyDecoded = atob(key);
        decrypt(fileToDecrypt, keyDecoded);
      } catch (error) {
        setError({open: true, message: `😢 There is some problems with the key you provided 🔑`});
      }
    }
  };

  const decrypt = (file: File, keyDecoded: string) => {
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = evt => {
      let decrypted;
      try {
        decrypted = aes256.decrypt(keyDecoded, evt.target.result);
        const fileToDecrypt = new File([decrypted], file.name, {type: file.type});
        download(fileToDecrypt);
      } catch (error) {
        setError({open: true, message: `😢 There is some problems with the file you uploaded 📁`});
      }
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
      <StyledSectionColFlex>
        <p>Insert your key:</p>
        <StyledTextField variant="outlined" id="key" value={key} onChange={onChange} />
      </StyledSectionColFlex>
      <ButtonContainer>
        <CustStyledPrimaryButtonGroup onClick={handleDownloadClick}>
          Decrypt and download
        </CustStyledPrimaryButtonGroup>
      </ButtonContainer>
      <Snackbar
        open={error.open}
        autoHideDuration={4000}
        onClose={() => {
          setError({...error, open: false});
        }}>
        <Alert severity="error">{error.message}</Alert>
      </Snackbar>
    </Fragment>
  );
}
