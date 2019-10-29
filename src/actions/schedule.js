import axios from 'axios';
import { message } from 'antd';
import { logout } from './auth';

export const SCHEDULE_REQUEST = 'SCHEDULE_REQUEST';
export const SCHEDULE_REQUEST_FAILED = 'SCHEDULE_REQUEST_FAILED';
export const SCHEDULE_REQUEST_SUCCESS = 'SCHEDULE_REQUEST_SUCCESS';

export const scheduleRequestStart = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().authReducer.token;
      dispatch(scheduleRequest());
      const response = await axios.get(`http://192.168.0.73:3050/schedule?token=${token}`);
      const { data } = response;
      dispatch(scheduleRequestSuccess(data));
    } catch(e) {
      if (e.response.status === 401) {
        dispatch(logout());
        localStorage.removeItem('token');
        message.info('Zostałeś automatycznie wylogowany')
      } else {
        dispatch(scheduleRequestFailed())
      }
    }
  }
}

const scheduleRequest = () => ({
  type: SCHEDULE_REQUEST
})

const scheduleRequestFailed = () => ({
  type: SCHEDULE_REQUEST_FAILED
})

const scheduleRequestSuccess = schedule => ({
  type: SCHEDULE_REQUEST_SUCCESS,
  schedule
})