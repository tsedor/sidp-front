import { PASSWORD_FIELD_UPDATE, USERNAME_FIELD_UPDATE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actions/auth";

const token = localStorage.getItem('token') || '';

const initialState = {
  auth: token === '' ? false : true,
  loginRequest: false,
  passwordValue: '',
  token,
  usernameValue: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, loginRequest: true}
    case LOGIN_SUCCESS:
      return {...state, loginRequest: false, token: action.token, auth: true}
    case LOGIN_ERROR:
      return {...state, loginRequest: false}
    case LOGOUT:
      return {...state, token: '', auth: false}
    case PASSWORD_FIELD_UPDATE:
      return {...state, passwordValue: action.value}
    case USERNAME_FIELD_UPDATE:
      return {...state, usernameValue: action.value}
    default:
      return state;
  }
}