import styled from 'styled-components';
import {Button, TextField} from '@material-ui/core';

export const StyledSection = styled.section`
  && {
    display: flex;
    justify-content: center;
  }
`;

export const StyledSectionColFlex = styled(StyledSection)`
  && {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonContainer = styled(StyledSection)`
  && {
    margin-top: 56px;

    & > div {
      padding: 0 12px 0 12px;
    }
  }
`;

export const StyledBasedButton = styled(Button)`
  && {
    color: #ffffff;
    border-radius: 3px;
    text-align: center;
    text-transform: none;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const StyledPrimaryButtonGroup = styled(StyledBasedButton)`
  && {
    min-width: 168px;
    height: 48px;
  }
`;

export const TextFieldContainer = styled.div`
  && {
    width: 100%;
    max-width: 540px;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    background: #292929;
    border: 1px solid #363636;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;

    & > div {
      padding: 0px;
      color: #ffffff;
      height: 48px;
      & > input {
        font-size: 14px;
        line-height: 23px;
      }

      & > fieldset {
        border: 0px;
      }
    }
  }
`;
