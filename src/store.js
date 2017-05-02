import {createStore, compose} from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}){
  const store  = createStore(rootReducer, initialState, compose(
    (window.devToolsExtension && process.env.REACT_APP_NODE_ENV !== "production") ? window.devToolsExtension() : f => f
  ));
  return store;
}
