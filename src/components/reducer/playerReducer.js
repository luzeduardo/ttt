/*
  Reducer to control register players and winners inside the storeto be shared
  to connected components
*/
const playerNames = (state = {}, action) => {
  switch (action.type) {
    /*
      Will get from the store the registered player
      check the number of victories and add one more
    */
    case 'REGISTER_WINNER':
      let player = action.player;
      let winners = state.players;
      let qty = winners[player]
      winners[player] = ++qty
      return Object.assign({}, state, {
        players:winners
      });
    /*
      Will mix the new players to the store
    */
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
