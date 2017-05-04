const playerNames = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_WINNER':
      let player = action.player;
      let winners = state.players;
      let qty = winners[player]
      winners[player] = ++qty
      return Object.assign({}, state, {
        players:winners
      });
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
