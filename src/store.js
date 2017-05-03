import {createStore, compose} from 'redux';
import rootReducer from './rootReducer';
export default function configureStore(initialState = {
  uiControl:{
    modalRegisterPlayer:true
  }
}){
  const store  = createStore(rootReducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
