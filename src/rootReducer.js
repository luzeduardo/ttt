import {combineReducers} from 'redux';
import winnerList from './components/reducer/winnerReducer';

const reducers = {
  winnerList
}
const rootReducer = combineReducers(reducers);
export default rootReducer;
