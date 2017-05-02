import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class RegisterWinner extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        modalName: "",
        results: [],
        modalOpen: false
    }
  }

  componentWillReceiveProps(props){
    this.setState({open: props.status});
  }

  _modalhandleChange = (event) => {
      this.setState({[event.target.id] : event.target.value});
  };

  _modalhandleOpen = () => {
      this.setState({modalOpen: true});
  };

  _modalhandleClose = () => {
      let modalName = this.state.modalName;

      let idx = this.state.results.length - 1;
      let results = this.state.results;
      let newResult = results[idx];

      newResult = Object.assign(newResult, {
          'name': modalName,
      });
      results[idx] = newResult;
      this.setState({
          modalOpen: false,
          results
      });
  };

  render(){
    const modalActions = [
        <FlatButton
            label="Ok"
            primary={true}
            disabled={this.state.modalName === ""}
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
              id="modalName"
              hintText="Name"
              fullWidth={true}
              type="text"
              onChange={this._modalhandleChange}/>
      </Dialog>
    );
  }
}

export default RegisterWinner;
