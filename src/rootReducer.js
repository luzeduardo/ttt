import {combineReducers} from 'redux';
import playerNames from './components/reducer/playerReducer';
import uiControl from './components/reducer/uiReducer';

const reducers = {
  playerNames,
  uiControl
}
const rootReducer = combineReducers(reducers);
export default rootReducer;
