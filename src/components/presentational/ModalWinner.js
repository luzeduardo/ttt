import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import object from 'lodash/object';

class ModalWinner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: props.status,
      winners: []
    };
  }

  handleClose = () => {
    this.setState({open: false});
  };

  componentWillReceiveProps(props){
    this.setState({
      open: props.status,
      winners: object.values(props.players.players),
      winnerNames: Object.keys(props.players.players)
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

const mapStateToProps = (state) => ({
  players: state.playerNames,
  uiControl: state.uiControl
});

export {ModalWinner};
export default (connect(mapStateToProps)(ModalWinner));
