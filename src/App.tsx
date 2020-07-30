import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Home from './Pages/Home';
import store from './redux/store';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './assets/theme';

const theme = createMuiTheme(themeFile);
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Home />
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
