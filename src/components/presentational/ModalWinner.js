import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import object from 'lodash/object';
import Snackbar from 'material-ui/Snackbar';

class ModalWinner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: props.status,
      winners: []
    };
  }

  handleClose = () => {
    this.props.dispatch({type:'MODAL_WINNER_CLOSE'});
    this.props.dispatch({type:'MODAL_PLAYER_OPEN'});
  };

  componentWillReceiveProps(props){
    let players = props.players.players;
    let lastWinner = props.players.last;
    this.setState({
      open: props.status,
      lastWinner,
      winners: object.values(players).sort().reverse(),
      winnerNames: Object.keys(players).sort(function(a,b){return players[a]-players[b]}).reverse()
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          {
            this.props.status ?
            <Snackbar open={this.state.open} message={this.state.lastWinner} autoHideDuration={2000} /> : null
          }
          <List>
            {this.state.winners.map((playerWins, index) =>
                <ListItem
                key={index}
                primaryText={
                  <p>{this.state.winnerNames[index]} - {playerWins}</p>
                }
                />
            )}
          </List>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playerNames,
  uiControl: state.uiControl
});

export {ModalWinner};
export default (connect(mapStateToProps)(ModalWinner));
