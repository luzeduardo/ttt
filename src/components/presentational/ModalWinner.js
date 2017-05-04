import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import object from 'lodash/object';

/**
  Will display the winners inside a modal
*/
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

  /*
    Receives an object that contain the players with the number of
    victories and sort in descending order
  */
  componentWillReceiveProps(props){
    let players = props.players.players;
    this.setState({
      open: props.status,
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
/*
  Get the props from the store and share inside the component
*/
const mapStateToProps = (state) => ({
  players: state.playerNames,
  uiControl: state.uiControl
});

/*export the plain component that will be used for unittest without store*/
export {ModalWinner};
/*connects the component to the store*/
export default (connect(mapStateToProps)(ModalWinner));
