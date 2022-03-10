import React from "react";
import { connect } from "react-redux";
import {
  tasksMove,
  TaskLeftToRight,
  TaskRightToLeft,
  TaskAllLeft,
  TaskAllRight,
  resettasksMove,
} from "./../Actions/actions";

const FunctionButtons: React.FC = (props: any) => {
  const {
    tasksName,
    TaskLeftToRight,
    TaskRightToLeft,
    TaskAllLeft,
    TaskAllRight,
    resettasksMove,
  } = props;

  const liftonclickHandler = () => {
    TaskLeftToRight(tasksName);
    resettasksMove();
  };

  const rightonclickHandler = () => {
    TaskRightToLeft(tasksName);
    resettasksMove();
  };

  const leftallOnclickHandler = () => {
    TaskAllLeft();
    resettasksMove();
  };

  const rightallOnclickHandler = () => {
    TaskAllRight();
    resettasksMove();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success mt-5"
        id="buttonleft"
        onClick={rightonclickHandler}
      >
        move to left
      </button>
      <br />
      <button
        type="button"
        className="btn btn-success mt-5"
        id="buttonleft"
        onClick={leftallOnclickHandler}
      >
        move all to left
      </button>
      <br />
      <button
        type="button"
        className="btn btn-success mt-5"
        id="buttonrigth"
        onClick={liftonclickHandler}
      >
        move to rigth
      </button>
      <br />
      <button
        type="button"
        className="btn btn-success mt-5"
        id="buttonrigth"
        onClick={rightallOnclickHandler}
      >
        move all to right
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  tasksName: state.TaskMoveReducer.tasksName,
});

export default connect(mapStateToProps, {
  tasksMove,
  TaskLeftToRight,
  TaskRightToLeft,
  TaskAllLeft,
  TaskAllRight,
  resettasksMove,
})(FunctionButtons);
