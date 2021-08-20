

export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE";
  
  export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface TodoState {
    pending: boolean;
    data: ITodo[];
    error: string | null;
  }
  
  export interface FetchTodoSuccessPayload {
    data: ITodo[];
  }
  
  export interface FetchTodoFailurePayload {
    error: string;
  }
  
  export interface FetchTodoRequest {
    type: typeof FETCH_TODO_REQUEST;
  }
  
  export type FetchTodoSuccess = {
    type: typeof FETCH_TODO_SUCCESS;
    payload: FetchTodoSuccessPayload;
  };
  
  export type FetchTodoFailure = {
    type: typeof FETCH_TODO_FAILURE;
    payload: FetchTodoFailurePayload;
  };
  
  export type TodoActions =
    | FetchTodoRequest
    | FetchTodoSuccess
    | FetchTodoFailure;