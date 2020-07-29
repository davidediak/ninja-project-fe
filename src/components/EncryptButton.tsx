import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {ReducersStates, DO_ENCRYPT} from '../redux/types';
const aes256 = require('aes256');

const StyledPrimaryButtonGroup = styled(Button)`
  && {
    background: #009eff;
    border-radius: 3px;
    text-align: center;
    color: #ffffff;
    width: 168px;
    height: 48px;
  }
`;

export default function EncryptButton() {
  const dispatch = useDispatch();
  const disabled = useSelector<ReducersStates, boolean>(state => state.UI.disabled);
  const fileUploaded = useSelector<ReducersStates, File>(state => state.UI.fileUploaded);

  const encrypt = (file: File) => {
    const key = Math.random().toString();
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = evt => {
      const encrypted = aes256.encrypt(key, evt.target.result);
      const fileEncrypted = new File([encrypted], file.name, {type: file.type});
      dispatch({type: DO_ENCRYPT, payload: {encryption: {fileEncrypted, key}}});
    };
  };

  const handleClick = () => {
    if (fileUploaded) {
      encrypt(fileUploaded);
    }
  };
  return (
    <div>
      <StyledPrimaryButtonGroup disabled={disabled} onClick={handleClick} variant="contained">
        Encrypt
      </StyledPrimaryButtonGroup>
    </div>
  );
}
