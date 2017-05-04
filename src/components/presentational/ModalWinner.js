import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';

class ModalWinner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: props.status
    };
  }

  handleClose = () => {
    this.setState({open: false});
  };

  componentWillReceiveProps(props){
    this.setState({modalOpen: props.status});
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
        {this.props.players.length && this.props.players.players.map((x) =>
          {x}
        )}
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
