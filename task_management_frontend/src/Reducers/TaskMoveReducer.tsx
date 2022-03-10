import { Reducer } from "redux";

const initialState = {
  tasksName: "",
  tasklefttoright: "",
  taskrighttoleft: "",
  allleft: [],
  allright: [],
};

const TaskMoveReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SETTASKMOVE":
      return { ...state, tasksName: payload };
    case "RESETMOVE":
      return { ...state, tasksName: "" };
    case "TRANSFERLEFTTORIGHT":
      return { ...state, tasklefttoright: payload };
    case "TRANSFERRIGHTTOLEFT":
      return { ...state, taskrighttoleft: payload };
    case "TRANSFERALLLEFT":
      return { ...state, allleft: payload };
    case "TRANSFERALLRIGHT":
      return { ...state, allright: payload };
    default:
      return state;
  }
};

export default TaskMoveReducer;
