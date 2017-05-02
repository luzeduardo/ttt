const winnerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_WINNER':
      let results = action.data;
      return Object.assign({}, state, {
        results
      });
    default:
      return state;
  }
}

export default winnerReducer;
