import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';

class RegisterPlayer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        modalPlayerName1: "",
        modalPlayerName2: "",
        modalOpen: props.status
    }
  }

  componentWillReceiveProps(props){
    this.setState({modalOpen: props.status});
  }

  _modalhandleChange = (event) => {
      this.setState({[event.target.id] : event.target.value});
  };

  _modalhandleOpen = () => {
      this.setState({modalOpen: true});
  };

  _modalhandleClose = () => {
      let modalPlayerName1 = this.state.modalPlayerName1;
      let modalPlayerName2 = this.state.modalPlayerName2;
      let players = {[modalPlayerName1]:0, [modalPlayerName2]:0};
      this.props.dispatch({type:'REGISTER_PLAYERS', players});
      this.props.dispatch({type:'MODAL_PLAYER_CLOSE'});

      this.setState({
          modalOpen: false,
      });
  };

  render(){
    const modalActions = [
        <FlatButton
            label="Ok"
            primary={true}
            disabled={this.state.modalPlayerName1 === "" || this.state.modalPlayerName2 === ""}
            keyboardFocused={true}
            onTouchTap={this._modalhandleClose}
        />,
    ];

    return(
      <Dialog
          title="Inform your names"
          actions={modalActions}
          modal={true}
          open={this.state.modalOpen}
          onRequestClose={this._modalhandleClose}>

          <TextField
              id="modalPlayerName1"
              hintText="Player 1"
              fullWidth={true}
              type="text"
              onChange={this._modalhandleChange}/>
          <TextField
              id="modalPlayerName2"
              hintText="Player 2"
              fullWidth={true}
              type="text"
              onChange={this._modalhandleChange}/>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playerNames,
  uiControl: state.uiControl
});

export {RegisterPlayer};
export default (connect(mapStateToProps)(RegisterPlayer));
