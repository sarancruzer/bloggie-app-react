import axios from "axios";
import { all, call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { fetchTodoSuccess, fetchTodoFailure } from "./employee.action";
import { ITodo, FETCH_TODO_REQUEST } from "./employee.types";


const getTodos = () => axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* employeeListSaga() {
    yield takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga);
    // yield takeEvery(FETCH_TODO_REQUEST, fetchTodoSaga);

  }
  
  
/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga(): Generator<any> {
  console.log("🚀 ~ file: sagas.ts ~ line 15 ~ function*fetchTodoSaga ~ fetchTodoSaga", fetchTodoSaga)
  try {
    const response: any = yield call(getTodos);
    yield put(fetchTodoSuccess({data: response.data})
    );
  } catch (e) {
    yield put(fetchTodoFailure({error: e.message})
    );
  }
}


export default function* employeeSaga() {
    yield all([
        employeeListSaga(),
    ])
    console.log('employee saga')
  }

