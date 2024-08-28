import {
  SET_TASKS_LIST,
  ADD_TASK_TO_STATE,
  CHANGE_DONE,
  DELETE_TASK_FROM_STATE,
} from './actionTypes';
import { getTasks, addTaskToBD, changeCompleted, deleteTaskFromDB } from './tasks.gateway';

const setTasksList = tasksList => {
  return {
    type: SET_TASKS_LIST,
    payload: { tasksList },
  };
};

const addTaskToState = task => {
  return {
    type: ADD_TASK_TO_STATE,
    payload: { task },
  };
};

const changeDone = taskId => {
  return {
    type: CHANGE_DONE,
    payload: { taskId },
  };
};

const deleteTaskFromState = taskId => {
  return {
    type: DELETE_TASK_FROM_STATE,
    payload: { taskId },
  };
};

export const fetchTasksList = () => dispatch => {
  getTasks().then(tasks => dispatch(setTasksList(tasks)));
};

export const addTask = text => dispatch => {
  const task = {
    text,
    createdAt: new Date().toISOString(),
    done: false,
  };

  addTaskToBD(task)
    .then(response => response.json())
    .then(data => dispatch(addTaskToState(data)));
};

export const changeIsCompletedTask = taskId => (dispatch, getState) => {
  const task = getState().tasks.tasksList.find(el => el.id === taskId);
  changeCompleted(taskId, { ...task, done: !task.done }).then(() => dispatch(changeDone(taskId)));
};

export const deleteTask = taskId => dispatch => {
  deleteTaskFromDB(taskId).then(() => dispatch(deleteTaskFromState(taskId)));
};
