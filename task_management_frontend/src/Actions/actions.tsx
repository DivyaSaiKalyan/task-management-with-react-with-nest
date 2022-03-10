import { Dispatch } from "redux";
import axios from "axios";

export const tasksMove = (value: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: "SETTASKMOVE",
    payload: value,
  });
};

export const resettasksMove = () => async (dispatch: Dispatch) => {
  dispatch({
    type: "RESETMOVE",
  });
};

export const displayTask = () => async (dispatch: Dispatch) => {
  const res = await axios.get("http://localhost:3009/gettasks");
  dispatch({
    type: "TASKDISPLAY",
    payload: res.data,
  });
};

export const AddTaskAction = (value: string) => async (dispatch: Dispatch) => {
  await axios.post(`http://localhost:3009/addtask/${value}`);
  dispatch({
    type: "ADDTASK",
    payload: value,
  });
};

export const ResetAddTaskAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: "RESETADDTASK",
  });
};

export const TaskLeftToRight =
  (value: string) => async (disptach: Dispatch) => {
    axios.put(`http://localhost:3009/change/${value}`);
    disptach({
      type: "TRANSFERLEFTTORIGHT",
      payload: value,
    });
  };

export const TaskAllLeft = () => async (disptach: Dispatch) => {
  const res = await axios.put(`http://localhost:3009/changeallleft/`);
  disptach({
    type: "TRANSFERALLLEFT",
    payload: res.data,
  });
  console.log(res.data);
};

export const TaskRightToLeft =
  (value: string) => async (disptach: Dispatch) => {
    axios.put(`http://localhost:3009/changeright/${value}`);
    disptach({
      type: "TRANSFERRIGHTTOLEFT",
      payload: value,
    });
  };

export const TaskAllRight = () => async (disptach: Dispatch) => {
  const res = await axios.put(`http://localhost:3009/changeallright/`);
  disptach({
    type: "TRANSFERALLRIGHT",
    payload: res.data,
  });
  console.log(res.data);
};
