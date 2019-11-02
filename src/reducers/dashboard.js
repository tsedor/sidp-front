import { DASHBOARD_REQUEST, DASHBOARD_REQUEST_FAILED, DASHBOARD_REQUEST_SUCCESS } from "../actions/dashboard";

const initialState = {
  request: false,
  dashboard: []
}

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_REQUEST:
      return {...state, request: true}
    case DASHBOARD_REQUEST_FAILED:
      return {...state, request: false}
    case DASHBOARD_REQUEST_SUCCESS:
      return {...state, request: false, dashboard: action.data}
    default:
      return state;
  }
}