import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppRouter from './components/AppRouter';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
/* improvement of click for PWA made with react*/
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <AppRouter />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
