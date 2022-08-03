import { taskState } from "./state";
import { ADD_TASKS } from "./type";

export const taskReducer = (state = taskState, action) => {
  switch (action.type) {
    case ADD_TASKS:
      state.tasks = action.value;
      break;
    default:
      break;
  }
  return { ...state };
};
