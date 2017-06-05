const playerNames = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_WINNER':
      let player = action.player;
      let winners = state.players;
      let qty = winners[player]
      winners[player] = ++qty
      return Object.assign({}, state, {
        players:winners,
        last: player
      });
    case 'REGISTER_PLAYERS':
      let newPlayers = action.players;
      let oldPlayers = state.players;
      var players = Object.assign({}, newPlayers, oldPlayers);
      return Object.assign({}, state, {
        players
      });
    default:
      return state;
  }
}

export default playerNames;
