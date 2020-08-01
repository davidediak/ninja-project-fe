import React, {Fragment, Dispatch} from 'react';
import logo from '../assets/logo.svg';

//MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {DO_RESET, UiActionTypes, ReducersStates, MainUIState, SWITCH_I18N} from '../redux/types';
import useTranslation from '../hooks/useTranslation';

type Language = 'Encrypted' | `W"y {'z`;
const languages: Language[] = ['Encrypted', `W"y {'z`];
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
  const [selectedLangauge, setSelectedLanguage] = React.useState(languages[0]);
  const mainUI = useSelector<ReducersStates, MainUIState>(state => state.UI.mainUI);
  const t = useTranslation();

  const handleLanguage = (event: any, newLanguage: any) => {
    if (newLanguage !== null) {
      setSelectedLanguage(newLanguage);

      if (newLanguage === languages[1]) {
        dispatch({type: SWITCH_I18N, payload: {...mainUI, isI18nEnabled: true}});
      } else {
        dispatch({type: SWITCH_I18N, payload: {...mainUI, isI18nEnabled: false}});
      }
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
          <StyledToggleButtonGroup value={selectedLangauge} exclusive onChange={handleLanguage}>
            <StyledToggleButton value={languages[0]}>{languages[0]}</StyledToggleButton>
            <StyledToggleButton value={languages[1]}>{t(languages[1])}</StyledToggleButton>
          </StyledToggleButtonGroup>
        </Fragment>
      </Toolbar>
    </AppBar>
  );
}
