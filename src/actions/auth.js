import axios from 'axios';
import { message } from 'antd';
import { serverURL } from '../cfg';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGOUT = 'LOGOUT';

export const PASSWORD_FIELD_UPDATE = 'PASSWORD_FIELD_UPDATE';
export const USERNAME_FIELD_UPDATE = 'USERNAME_FIELD_UPDATE';


export const loginRequestStart = () => {
  return async (dispatch, getState) => {
    dispatch(loginRequest());
    const state = getState().authReducer;
    try {
      const response = await axios.post(`${serverURL}/login`, { username: state.usernameValue, password: state.passwordValue });
      const { data } = response;
      if (data.login === 'ok') {
        message.success("Poprawnie się zalogowano");
        localStorage.setItem('token', data.token);
        dispatch(loginSuccess(data.token));
      } else {
        message.error('Podano błędne dane');
        dispatch(loginError())
      }
    } catch (e) {
      console.log(e)
      message.error("Błąd połączenia, spróbuj ponownie później");
      dispatch(loginError())
    }
  }
}

export const logout = () => {
  return ({
    type: LOGOUT
  })
}

const loginRequest = () => ({
  type: LOGIN_REQUEST
})

const loginError = () => ({
  type: LOGIN_ERROR
})

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token
})

export const passwordFieldUpdate = value => ({
  type: PASSWORD_FIELD_UPDATE,
  value
})

export const usernameFieldUpdate = value => ({
  type: USERNAME_FIELD_UPDATE,
  value
})