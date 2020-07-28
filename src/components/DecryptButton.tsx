import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';

const StyledPrimaryButtonGroup = styled(Button)`
  && {
    background: #0065ff;
    border-radius: 3px;
    text-align: center;
    color: #ffffff;
    width: 168px;
    height: 48px;
  }
`;

export default function DecryptButton() {
  const disabled = true;
  return (
    <div>
      <StyledPrimaryButtonGroup disabled={disabled} variant="contained">
        Decrypt
      </StyledPrimaryButtonGroup>
    </div>
  );
}
