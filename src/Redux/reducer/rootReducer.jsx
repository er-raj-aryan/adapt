import {combineReducers } from'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
    shop: Reducer,
  });
  
  export default rootReducer;
  