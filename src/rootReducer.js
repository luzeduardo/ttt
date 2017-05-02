import {combineReducers} from 'redux';
import winnerReducer from './components/reducer/winnerReducer';

const reducers = {
  winnerReducer
}

const rootReducer = combineReducers(reducers);
export default rootReducer;
