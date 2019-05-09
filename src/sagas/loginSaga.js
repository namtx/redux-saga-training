import { call, put } from 'redux-saga/effects'
import { loginApi } from "../mockApi";
import { ActionTypes } from "../constants";


export default function* loginSaga({ payload }) {
  try {
    const response = yield call(loginApi, payload)
    yield put({ type: ActionTypes.LOGIN_SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: ActionTypes.LOGIN_FAILURE, error })
  }
}
