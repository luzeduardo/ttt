import _ from 'lodash';
import {expect} from 'chai';
import uiControl from './uiReducer';

describe('uiReducer', () => {
  it('Should handle MODAL_PLAYER_OPEN', () => {
    let action = {type: 'MODAL_PLAYER_OPEN'};
    expect(
      uiControl({}, action)
    ).to.eql(
      { "modalRegisterPlayer":true }
    )
  });

  it('Should handle MODAL_PLAYER_CLOSE', () => {
    let action = {type: 'MODAL_PLAYER_CLOSE'};
    expect(
      uiControl({}, action)
    ).to.eql(
      { "modalRegisterPlayer":false }
    )
  });

  it('Should handle MODAL_WINNER_OPEN', () => {
    let action = {type: 'MODAL_WINNER_OPEN'};
    expect(
      uiControl({}, action)
    ).to.eql(
      { "modalWinnerList":true }
    )
  });

  it('Should handle MODAL_WINNER_CLOSE', () => {
    let action = {type: 'MODAL_WINNER_CLOSE'};
    expect(
      uiControl({}, action)
    ).to.eql(
      { "modalWinnerList":false }
    )
  });

  it('Should NOT change State on MODAL_WRONG_TYPE', () => {
    let action = {type: 'MODAL_WRONG_TYPE'};
    expect(
      uiControl({}, action)
    ).to.eql({})
  });
});
