import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ModalInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillReceiveProps(props){
    this.setState({open: props.status});
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
          Stalemate
        </Dialog>
      </div>
    );
  }
}
