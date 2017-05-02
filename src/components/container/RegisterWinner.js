import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class RegisterWinner extends React.Component {

  constructor(props){
    super(props);
    let results = new Map();

    this.state = {
        modalPlayerName: "",
        results,
        modalOpen: false,
        onFinish: props.onFinish
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
      let modalPlayerName = this.state.modalPlayerName;
      let results = this.state.results;
      let qty = results.get(modalPlayerName);
      if(!qty){
        results.set(modalPlayerName, 1);
      } else {
        results.set(modalPlayerName, qty++);
      }
      this.setState({
          modalOpen: false,
          results
      });
      this.state.onFinish();
  };

  render(){
    const modalActions = [
        <FlatButton
            label="Ok"
            primary={true}
            disabled={this.state.modalPlayerName === ""}
            keyboardFocused={true}
            onTouchTap={this._modalhandleClose}
        />,
    ];

    return(
      <Dialog
          title="Inform"
          actions={modalActions}
          modal={true}
          open={this.state.modalOpen}
          onRequestClose={this._modalhandleClose}>

          <TextField
              id="modalPlayerName"
              hintText="Name"
              fullWidth={true}
              type="text"
              onChange={this._modalhandleChange}/>
      </Dialog>
    );
  }
}

export default RegisterWinner;
