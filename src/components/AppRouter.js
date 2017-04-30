import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

import Layout from './Layout';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class AppRouter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <Router>
        <div>

          <AppBar
            title="TTT X#O"
            onTouchTap={this.handleToggle}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />

          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={this.handleClose}><Link to="/">New Game</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/">Best PLayers</Link></MenuItem>
          </Drawer>

          <Route exact path="/" component={Layout}/>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
