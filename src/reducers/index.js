import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { scheduleReducer } from './schedule'

export default combineReducers({
  authReducer,
  scheduleReducer
});