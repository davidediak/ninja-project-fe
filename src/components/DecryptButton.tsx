import React, {useState, ChangeEvent, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {ReducersStates, DO_DECRYPT} from '../redux/types';
import {TextField} from '@material-ui/core';
const aes256 = require('aes256');

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

const StyledTextField = styled(TextField)`
  && {
    background: #292929;
    border: 1px solid #363636;
    box-sizing: border-box;
    border-radius: 3px;

    & > div {
      padding: 0px;
      color: #ffffff;
    }
  }
`;

export default function DecryptButton() {
  const dispatch = useDispatch();
  const disabled = useSelector<ReducersStates, boolean>(state => state.UI.disabled);
  const fileUploaded = useSelector<ReducersStates, File>(state => state.UI.fileUploaded);
  const [key, setKey] = useState('');

  const decrypt = (file: File, key: string) => {
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = evt => {
      const decrypted = aes256.decrypt(key, evt.target.result);
      const fileDecrypted = new File([decrypted], file.name, {type: file.type});
      console.log(decrypted);
      dispatch({type: DO_DECRYPT, payload: {decryption: {fileDecrypted, key}}});
    };
  };

  const handleClick = () => {
    if (fileUploaded && key?.length > 0) {
       decrypt(fileUploaded, key);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  return (
    <div>
      <div>
        <StyledPrimaryButtonGroup disabled={disabled} onClick={handleClick} variant="contained">
          Decrypt
        </StyledPrimaryButtonGroup>
      </div>
      {fileUploaded ? (
        <div>
          <StyledTextField variant="outlined" id="key" value={key} onChange={onChange} />
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
}
