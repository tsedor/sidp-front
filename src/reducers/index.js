import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { dashboardReducer } from './dashboard';
import { scheduleReducer } from './schedule';

export default combineReducers({
  authReducer,
  dashboardReducer,
  scheduleReducer
});