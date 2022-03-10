import { Reducer } from "redux";

const initialState = {
  taskDisplay: [],
};

const TaskDisplayReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TASKDISPLAY":
      return { ...state, taskDisplay: payload };
    default:
      return state;
  }
};

export default TaskDisplayReducer;
