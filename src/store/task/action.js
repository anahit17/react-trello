import { ADD_TASKS } from "./type";

export const setTasks = (value) => {
  return { type: ADD_TASKS, value: value };
};
