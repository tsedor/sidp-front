import { SCHEDULE_REQUEST, SCHEDULE_REQUEST_FAILED, SCHEDULE_REQUEST_SUCCESS } from "../actions/schedule"

const initialState = {
  request: false,
  schedule: []
}

export const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCHEDULE_REQUEST:
      return {...state, request: true}
    case SCHEDULE_REQUEST_FAILED:
      return {...state, request: false}
    case SCHEDULE_REQUEST_SUCCESS:
      return {...state, request: false, schedule: action.schedule}
    default:
      return state;
  }
}