import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ModalInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      text: ""
    };
  }

  componentWillReceiveProps(props){
    this.setState({open: props.status, text: props.text});
  }

  handleClose = () => {
    this.setState({open: false});
  };

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
          {this.state.text}
        </Dialog>
      </div>
    );
  }
}
