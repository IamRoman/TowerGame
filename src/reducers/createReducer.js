import { combineReducers } from 'redux';

import simpleReducer from './simpleReducer';

const reducers = {
  simpleData: simpleReducer,
};

export default combineReducers(reducers);
