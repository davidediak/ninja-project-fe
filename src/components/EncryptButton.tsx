import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {ReducersStates, DO_ENCRYPT} from '../redux/types';
import {StyledPrimaryButtonGroup} from './styled-components';
const aes256 = require('aes256');

const CustStyledPrimaryButtonGroup = styled(StyledPrimaryButtonGroup)`
  && {
    background: #009eff;
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
      <CustStyledPrimaryButtonGroup disabled={disabled} onClick={handleClick} variant="contained">
        Encrypt
      </CustStyledPrimaryButtonGroup>
    </div>
  );
}
