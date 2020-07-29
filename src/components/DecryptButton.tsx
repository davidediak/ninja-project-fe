import Button from '@material-ui/core/Button';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {DO_DECRYPT, ReducersStates} from '../redux/types';

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
  const dispatch = useDispatch();
  const disabled = useSelector<ReducersStates, boolean>(state => state.UI.disabled);
  const fileUploaded = useSelector<ReducersStates, File>(state => state.UI.fileUploaded);

  const handleClick = () => {
    if (fileUploaded) {
      dispatch({type: DO_DECRYPT, payload: {decryption: {fileToDecrypt: fileUploaded}}});
    }
  };

  return (
    <div>
      <div>
        <StyledPrimaryButtonGroup disabled={disabled} onClick={handleClick} variant="contained">
          Decrypt
        </StyledPrimaryButtonGroup>
      </div>
    </div>
  );
}
