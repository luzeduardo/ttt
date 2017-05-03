const winnerList = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_WINNER':
      let players = action.players;
      return Object.assign({}, state, {
        players
      });
    default:
      return state;
  }
}

export default winnerList;
