import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { tasksMove, displayTask } from "./../Actions/actions";
import FunctionButtons from "./FunctionButtons";

const TaskOperation = (props: any) => {
  const { tasksName, tasksMove, taskDisplay, displayTask } = props;
  const [countName, setColuntname] = useState<string[]>([]);
  const [updateTasks, setUpdatetasks] = useState<string[]>([]);

  useEffect(() => {
    displayTask();
    setColuntname(taskDisplay);
  }, [displayTask, taskDisplay]);

  useEffect(() => {
    if (countName.length === taskDisplay.length) {
      setUpdatetasks(countName);
    } else {
      setUpdatetasks(taskDisplay);
    }
  }, [countName, taskDisplay]);

  //const names = ["kalyan", "sai", "divya", "yarramsetti"];
  const isActive = "btn btn-outline-success active";
  const inActive = "btn btn-outline-success";

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-around">
          <div className="col-3">
            {updateTasks
              .filter((status: any) => status.status === 1)
              .map((element: any) => (
                <div className="card mt-2" key={element.id}>
                  <div className="card-body">
                    <div className="card-text">
                      <input
                        type="button"
                        className={
                          tasksName === element.task ? isActive : inActive
                        }
                        value={element.task}
                        onClick={() => tasksMove(element.task)}
                        id="taskbtn"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-3">
            <FunctionButtons />
          </div>
          <div className="col-3">
            {updateTasks
              .filter((status: any) => status.status === 0)
              .map((element: any) => (
                <div className="card mt-2" key={element.id}>
                  <div className="card-body">
                    <div className="card-text">
                      <input
                        type="button"
                        className={
                          tasksName === element.task ? isActive : inActive
                        }
                        value={element.task}
                        onClick={() => tasksMove(element.task)}
                        id="taskbtn"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  tasksName: state.TaskMoveReducer.tasksName,
  taskDisplay: state.TaskDisplayReducer.taskDisplay,
});

export default connect(mapStateToProps, { tasksMove, displayTask })(
  TaskOperation
);
