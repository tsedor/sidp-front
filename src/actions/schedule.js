import axios from 'axios';
import { message } from 'antd';
import { logout } from './auth';
import { serverURL } from '../cfg';

export const SCHEDULE_REQUEST = 'SCHEDULE_REQUEST';
export const SCHEDULE_REQUEST_FAILED = 'SCHEDULE_REQUEST_FAILED';
export const SCHEDULE_REQUEST_SUCCESS = 'SCHEDULE_REQUEST_SUCCESS';

export const SCHEDULE_SET_DATE = 'SCHEDULE_SET_DATE';

export const schedulePreviousMonth = () => {
  return (dispatch, getState) => {
    const month = getState().scheduleReducer.date.month;
    const year = getState().scheduleReducer.date.year;
    dispatch(scheduleSetDate(month === 1 ? 12 : month-1, month === 1 ? year-1 : year));
    dispatch(scheduleRequestStart());
  }
}

export const scheduleNextMonth = () => {
  return (dispatch, getState) => {
    const month = getState().scheduleReducer.date.month;
    const year = getState().scheduleReducer.date.year;
    dispatch(scheduleSetDate(month === 12 ? 1 : month+1, month === 12 ? year+1 : year));
    dispatch(scheduleRequestStart());
  }
}

const scheduleSetDate = (month, year) => ({
  type: SCHEDULE_SET_DATE,
  month,
  year
})

export const scheduleRequestStart = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().authReducer.token;
      const month = getState().scheduleReducer.date.month;
      const year = getState().scheduleReducer.date.year;
      dispatch(scheduleRequest());
      const response = await axios.get(`${serverURL}/schedule/month/${year}/${month}?token=${token}`);
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