import { all, fork } from "redux-saga/effects";
import employeeSaga from "../components/employee/store/employee.sagas";


export function* rootSaga() {
  yield all([fork(employeeSaga)]);
}