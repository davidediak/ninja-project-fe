import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {DO_DECRYPT, ReducersStates} from '../redux/types';
import { StyledPrimaryButtonGroup } from './styled-components';

const CustStyledPrimaryButtonGroup = styled(StyledPrimaryButtonGroup)`
  && {
    background: #0065ff;
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
        <CustStyledPrimaryButtonGroup disabled={disabled} onClick={handleClick} variant="contained">
          Decrypt
        </CustStyledPrimaryButtonGroup>
      </div>
    </div>
  );
}
