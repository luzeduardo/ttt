const winnerList = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_WINNER':
      let results = action.results;
      return Object.assign({}, state, {
        results
      });
    default:
      return state;
  }
}

export default winnerList;
