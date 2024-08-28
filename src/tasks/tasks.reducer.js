import {
  SET_TASKS_LIST,
  ADD_TASK_TO_STATE,
  CHANGE_DONE,
  DELETE_TASK_FROM_STATE,
} from './actionTypes';

const initialState = {
  tasksList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS_LIST:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };

    case ADD_TASK_TO_STATE:
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload.task],
      };

    case CHANGE_DONE:
      return {
        ...state,
        tasksList: state.tasksList.map(task =>
          task.id === action.payload.taskId ? { ...task, done: !task.done } : task,
        ),
      };

    case DELETE_TASK_FROM_STATE:
      return {
        ...state,
        tasksList: state.tasksList.filter(task => task.id !== action.payload.taskId),
      };

    default:
      return state;
  }
};

export default tasksReducer;
