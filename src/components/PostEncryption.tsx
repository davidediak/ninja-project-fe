import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {ReducersStates} from '../redux/types';
import CopyToClipboard from 'react-copy-to-clipboard';
import {
  ButtonContainer,
  StyledPrimaryButtonGroup,
  StyledTextField,
  TextFieldContainer,
  StyledBasedButton,
  StyledSectionColFlex,
} from './styled-components';

const CustStyledPrimaryButtonGroup = styled(StyledPrimaryButtonGroup)`
  && {
    background: #ffa047;
  }
`;

const StyledCopyButton = styled(StyledBasedButton)`
  && {
    background: #009eff;
    max-width: 116px;
    height: 36px;
    margin: 6px;
  }
`;

export default function PostEncryption() {
  const {fileEncrypted, key} = useSelector<ReducersStates, {fileEncrypted: File; key: string}>(
    state => state.UI.encryption
  );
  const keyEncoded = btoa(key);

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
    <Fragment>
      <StyledSectionColFlex>
        <p>Your encryption key:</p>
        <TextFieldContainer>
          <StyledTextField
            variant="outlined"
            id="key"
            value={keyEncoded}
            disabled={true}
            InputProps={{
              endAdornment: (
                <CopyToClipboard text={keyEncoded}>
                  <StyledCopyButton>Copy</StyledCopyButton>
                </CopyToClipboard>
              ),
            }}
          />
        </TextFieldContainer>
      </StyledSectionColFlex>
      <ButtonContainer>
        <CustStyledPrimaryButtonGroup onClick={handleDownloadClick}>
          Download
        </CustStyledPrimaryButtonGroup>
      </ButtonContainer>
    </Fragment>
  );
}
