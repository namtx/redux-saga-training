import { takeLatest } from 'redux-saga/effects'
import { ActionTypes } from "../constants";
import loginSaga from "./loginSaga";

export default function* rootSaga() {
  yield takeLatest(ActionTypes.REQUEST_LOGIN, loginSaga)
}
