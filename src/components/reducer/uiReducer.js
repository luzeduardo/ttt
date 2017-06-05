const uiControl = (state = {}, action) => {
  switch (action.type) {
    case 'MODAL_PLAYER_OPEN':
      return Object.assign({}, state, {
        modalRegisterPlayer: true
      });
    case 'MODAL_PLAYER_CLOSE':
      return Object.assign({}, state, {
        modalRegisterPlayer: false
      });
    case 'MODAL_WINNER_OPEN':
      return Object.assign({}, state, {
        modalWinnerList: true
      });
    case 'MODAL_WINNER_CLOSE':
      return Object.assign({}, state, {
        modalWinnerList: false
      });
    default:
      return state;
  }
}

export default uiControl;
