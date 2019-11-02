import axios from 'axios';
import { message } from 'antd';
import { logout } from './auth';
import { serverURL } from '../cfg';

export const DASHBOARD_REQUEST = 'DASHBOARD_REQUEST';
export const DASHBOARD_REQUEST_FAILED = 'DASHBOARD_REQUEST_FAILED';
export const DASHBOARD_REQUEST_SUCCESS = 'DASHBOARD_REQUEST_SUCCESS';

export const dashboardRequestStart = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().authReducer.token;
      dispatch(dashboardRequest());
      const response = await axios.get(`${serverURL}/dashboard?token=${token}`);
      const { data } = response;
      dispatch(dashboardRequestSuccess(data));
    } catch(e) {
      console.log(e)
      if (e.response.status === 401) {
        dispatch(logout());
        localStorage.removeItem('token');
        message.info('Zostałeś automatycznie wylogowany')
      } else {
        dispatch(dashboardRequestFailed())
      }
    }
  }
}

const dashboardRequest = () => ({
  type: DASHBOARD_REQUEST
})

const dashboardRequestFailed = () => ({
  type: DASHBOARD_REQUEST_FAILED
})

const dashboardRequestSuccess = data => ({
  type: DASHBOARD_REQUEST_SUCCESS,
  data
})