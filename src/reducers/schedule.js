import { SCHEDULE_REQUEST, SCHEDULE_REQUEST_FAILED, SCHEDULE_REQUEST_SUCCESS, SCHEDULE_SET_DATE } from "../actions/schedule"

const initialState = {
  date: {
    month: new Date().getMonth()+1,
    year: new Date().getFullYear()
  },
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
    case SCHEDULE_SET_DATE:
      return {...state, date: { month: action.month, year: action.year }}
    default:
      return state;
  }
}