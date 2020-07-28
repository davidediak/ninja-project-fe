import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledPrimaryButtonGroup = styled(Button)`
  && {
   backgrould-color: red;
  }
`;

export default function EncryptButton() {
  return (
    <div>
      <StyledPrimaryButtonGroup variant="contained">
        Encrypt
      </StyledPrimaryButtonGroup>
    </div>
  );
}
