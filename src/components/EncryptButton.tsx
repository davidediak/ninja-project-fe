import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {ReducersStates} from '../redux/types';

const StyledPrimaryButtonGroup = styled(Button)`
  && {
    backgrould-color: red;
  }
`;

export default function EncryptButton() {
  const disabled = useSelector<ReducersStates, boolean>(state => state.UI.disabled);
  return (
    <div>
      <StyledPrimaryButtonGroup disabled={disabled} variant="contained">
        Encrypt
      </StyledPrimaryButtonGroup>
    </div>
  );
}
