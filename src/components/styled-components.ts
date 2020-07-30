import styled from 'styled-components';
import {Button, TextField} from '@material-ui/core';

export const ButtonContainer = styled.section`
  && {
    display: flex;
    justify-content: center;
    margin-top: 56px;

    & > div {
      padding: 0 12px 0 12px;
    }
  }
`;

export const StyledPrimaryButtonGroup = styled(Button)`
  && {
    color: #ffffff;
    border-radius: 3px;
    text-align: center;
    width: 168px;
    height: 48px;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    background: #292929;
    border: 1px solid #363636;
    box-sizing: border-box;
    border-radius: 3px;

    & > div {
      padding: 0px;
      color: #ffffff;

      & > fieldset {
        border: 0px;
      }
    }
  }
`;