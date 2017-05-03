const uiControl = (state = {}, action) => {
  switch (action.type) {
    case 'MODAL_PLAYER_CLOSE':
      return Object.assign({}, state, {
        modalRegisterPlayer: false
      });
    default:
      return state;
  }
}

export default uiControl;
