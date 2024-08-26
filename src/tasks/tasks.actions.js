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

export const addTask = task => dispatch => {
  addTaskToBD(task).then(response => dispatch(addTaskToState(response)));
};

export const changeIsCompletedTask = taskId => dispatch => {
  changeCompleted(taskId).then(() => dispatch(changeDone(taskId)));
};

export const deleteTask = taskId => dispatch => {
  deleteTaskFromDB(taskId).then(() => dispatch(deleteTaskFromState(taskId)));
};
