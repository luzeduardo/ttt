const playerNames = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_PLAYERS':
      let players = action.players;
      return Object.assign({}, state, {
        players
      });
    default:
      return state;
  }
}

export default playerNames;
