import React, {Fragment, Dispatch} from 'react';
import logo from '../assets/logo.svg';

//MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {DO_RESET, UiActionTypes} from '../redux/types';
type Language = 'Encrypted' | `W"y {'z`;
const StyledToggleButton = styled(ToggleButton)`
  && {
    color: white;
    text-transform: none;
    border-radius: 2px;
    min-width: 120px;
    min-height: 40px;
    font-size: 14px;
    padding: 8px 0 8px 0;
    &.Mui-selected {
      border-color: #009eff;
    }
    &:not(.Mui-selected) {
      background-color: #009eff;
    }
  }
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  && {
    margin-left: auto;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-right: 11.1111111111%;
  }
`;

const StyledLogo = styled.img`
  && {
    cursor: pointer;
  }
`;
export default function Navbar() {
  const dispatch: Dispatch<UiActionTypes> = useDispatch();
  const langauges: Language[] = ['Encrypted', `W"y {'z`];
  const [langauge, setLanguage] = React.useState(langauges[0]);

  const handleLanguage = (event: any, newLanguage: any) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
    }
  };

  const doReset = () => {
    dispatch({type: DO_RESET});
  };

  return (
    <AppBar style={{background: '#292929'}}>
      <Toolbar className="nav-container">
        <Fragment>
          <StyledLogo onClick={doReset} src={logo} alt="" />
          <StyledToggleButtonGroup value={langauge} exclusive onChange={handleLanguage}>
            <StyledToggleButton value={langauges[0]}>{langauges[0]}</StyledToggleButton>
            <StyledToggleButton value={langauges[1]}>{langauges[1]}</StyledToggleButton>
          </StyledToggleButtonGroup>
        </Fragment>
      </Toolbar>
    </AppBar>
  );
}
