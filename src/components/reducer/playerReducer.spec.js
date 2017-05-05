import _ from 'lodash';
import {expect} from 'chai';
import playerNames from './playerReducer';

describe('playerReducer', () => {
  it('Should handle REGISTER_WINNER', () => {
    let expectedState = {
      "A":1
    }

    let action = {type: 'REGISTER_WINNER', player: expectedState};
    const newState = playerNames({
      players:{"A":0, "B":"0"}
    }, action);
    console.log(newState);
    console.log(expectedState);
    expect(newState).to.eql(expectedState);
  });
});
