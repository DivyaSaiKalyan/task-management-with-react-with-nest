import { Reducer } from "redux";

const initialState = {
  task: "",
};

const AddReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDTASK":
      return { ...state, task: payload };
    case "RESETADDTASK":
      return { ...state, task: "" };
    default:
      return state;
  }
};

export default AddReducer;
