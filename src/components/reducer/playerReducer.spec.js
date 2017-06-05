import _ from 'lodash';
import {expect} from 'chai';
import playerNames from './playerReducer';

describe('playerReducer', () => {
  it('Should handle REGISTER_WINNER', () => {
    let state = {"players":{"A":0}};
    let action = {type: 'REGISTER_WINNER', "player":"A"};

    expect(
      playerNames(state, action)
    ).to.eql(
      {
        "players":{
          "A":1
        },
        "last":"A"
      }
    )
  });

  it('Should handle REGISTER_PLAYERS FOR 1', () => {
    let action = {type: 'REGISTER_PLAYERS', 'players':['A']};
    expect(
      playerNames({}, action)
    ).to.eql(
      {
        "players":{
          '0':'A'
        }
      }
    )
  });

  it('Should handle REGISTER_PLAYERS FOR THE SECOND PLAYER', () => {
    let action = {type: 'REGISTER_PLAYERS', 'players':['A','B']};
    expect(
      playerNames({}, action)
    ).to.eql(
      {
        'players':{
          '0':'A',
          '1':'B'
        }
      }
    )
  });
});
