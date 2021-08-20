import { combineReducers } from "redux";

import employeeReducer from "../components/employee/store/employee.reducer";

const rootReducer = combineReducers({
  employee: employeeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;