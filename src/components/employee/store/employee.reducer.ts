import { TodoState, TodoActions, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from "./employee.types";

  
  const initialState: TodoState = {
    pending: false,
    data: [],
    error: null,
  };
  
  
  export default (state = initialState, action: TodoActions) => {
    switch (action.type) {
      case FETCH_TODO_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_TODO_SUCCESS:
        return {
          ...state,
          pending: false,
          data: action.payload.data,
          error: null,
        };
      case FETCH_TODO_FAILURE:
        return {
          ...state,
          pending: false,
          data: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };