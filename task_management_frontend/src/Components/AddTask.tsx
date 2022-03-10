import React, { useState } from "react";
import { connect } from "react-redux";
import { AddTaskAction, ResetAddTaskAction } from "../Actions/actions";

const AddTask: React.FC = (props: any) => {
  const { task, AddTaskAction, ResetAddTaskAction } = props;
  const [taskName, setTask] = useState<string>("");

  const submitHandler = () => {
    if (taskName === "") {
      alert("please enter the task.....!");
    } else {
      AddTaskAction(taskName);
      alert("task added succsfully");
      setTask("");
      ResetAddTaskAction();
    }
  };

  return (
    <div>
      <h5 className="text-center" style={{ fontFamily: "cursive" }}>
        Add task here
      </h5>
      <div className="col col-3" style={{ margin: "auto" }}>
        <label>enter the task name:</label>
        <form className="d-flex">
          <input
            type="text"
            placeholder="enter the name"
            className="form-control"
            value={taskName}
            name="task"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button
            type="button"
            className="btn btn-success btn-sm m-2"
            onClick={submitHandler}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  task: state.AddReducer.task,
});

export default connect(mapStateToProps, { AddTaskAction, ResetAddTaskAction })(
  AddTask
);
