import {Button} from '@material-ui/core';
import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {ReducersStates} from '../redux/types';
import CopyToClipboard from 'react-copy-to-clipboard';
import {ButtonContainer, StyledPrimaryButtonGroup, StyledTextField} from './styled-components';

const CustStyledPrimaryButtonGroup = styled(StyledPrimaryButtonGroup)`
&& {
  background: #ffa047;
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
      <ButtonContainer>
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
      </ButtonContainer>
      <ButtonContainer>
        <CustStyledPrimaryButtonGroup onClick={handleDownloadClick}>
          Download
        </CustStyledPrimaryButtonGroup>
      </ButtonContainer>
    </Fragment>
  );
}
