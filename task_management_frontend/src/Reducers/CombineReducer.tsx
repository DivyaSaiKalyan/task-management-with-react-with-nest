import { combineReducers } from "redux";
import AddReducer from "./AddReducer";
import TaskMoveReducer from "./TaskMoveReducer";
import TaskDisplayReducer from "./TaskDisplayReducer";

const reducer = combineReducers({
  TaskMoveReducer: TaskMoveReducer,
  AddReducer: AddReducer,
  TaskDisplayReducer: TaskDisplayReducer,
});

export default reducer;
