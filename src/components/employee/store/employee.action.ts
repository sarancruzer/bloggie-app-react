import { FetchTodoRequest, FETCH_TODO_REQUEST, FetchTodoSuccessPayload, FetchTodoSuccess, FETCH_TODO_SUCCESS, FetchTodoFailurePayload, FetchTodoFailure, FETCH_TODO_FAILURE } from "./employee.types";

  
  export const fetchTodoRequest = (): FetchTodoRequest => ({
    type: FETCH_TODO_REQUEST,
  });
  
  export const fetchTodoSuccess = (payload: FetchTodoSuccessPayload): FetchTodoSuccess => ({
    type: FETCH_TODO_SUCCESS,
    payload,
  });
  
  export const fetchTodoFailure = (payload: FetchTodoFailurePayload): FetchTodoFailure => ({
    type: FETCH_TODO_FAILURE,
    payload,
  });