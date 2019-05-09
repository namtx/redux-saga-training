import { ActionTypes } from "../constants";

const initialState = { username: undefined, isLoggedIn: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      console.log(action.payload)
      return { ...state, ...action.payload, isLoggedIn: true }
    case ActionTypes.LOGIN_FAILURE:
      return { ...state, isLoggedIn: false }
    default:
      return state;
  }
}
