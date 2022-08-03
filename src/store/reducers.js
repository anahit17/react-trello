import { combineReducers } from "redux";
import { taskReducer } from "./task/reducer";

export const reducers = combineReducers({
  tasksData: taskReducer,
});
