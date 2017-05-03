import {combineReducers} from 'redux';
import winnerList from './components/reducer/winnerReducer';
import playerNames from './components/reducer/playerReducer';
import uiControl from './components/reducer/uiReducer';

const reducers = {
  playerNames,
  winnerList,
  uiControl
}
const rootReducer = combineReducers(reducers);
export default rootReducer;
