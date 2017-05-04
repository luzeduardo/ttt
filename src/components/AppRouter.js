import React from 'react'
import AppBar from 'material-ui/AppBar';
import TicTacToeBoard from './container/TicTacToeBoard'
import configureStore from '../store';
import { Provider } from 'react-redux';

const store = configureStore();

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class AppRouter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      /*Provide the store to the component tree*/
      <Provider store={store}>
        <Router>
          <div>
            <AppBar
              title="TicTacToe"
            />
            <Route exact path="/" component={TicTacToeBoard}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppRouter;
