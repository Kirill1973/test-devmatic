import { combineReducers } from 'redux';

import { usersDataReducer } from '../saga/dataUsers/reducer';
import { userDataReducer } from '../saga/dataUser/reducer';

export const rootReducers = () => combineReducers({
  usersDataReducer,
  userDataReducer,
});
