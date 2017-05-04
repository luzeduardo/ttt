import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
/* improvement of click for PWA made with react*/
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
