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
      <StyledSectionColFlex>
        <p>Insert your key:</p>
        <StyledTextField variant="outlined" id="key" value={key} onChange={onChange} />
      </StyledSectionColFlex>
      <ButtonContainer>
        <CustStyledPrimaryButtonGroup onClick={handleDownloadClick}>
          Decrypt and download
        </CustStyledPrimaryButtonGroup>
      </ButtonContainer>
    </Fragment>
  );
}
