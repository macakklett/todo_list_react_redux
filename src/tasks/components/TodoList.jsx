import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../tasks.selectors';
import * as actions from '../tasks.actions';
import TasksList from './TasksList';

const TodoList = ({ tasks, fetchTasksList, addTask, changeIsCompletedTask, deleteTask }) => {
  useEffect(() => {
    fetchTasksList();
  }, []);

  return (
    <div className="todo-list">
      <h1 className="title">Todo List</h1>
      <TasksList
        tasks={tasks}
        addTask={addTask}
        changeIsCompletedTask={changeIsCompletedTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

const mapState = state => {
  return {
    tasks: selectors.tasksListSelector(state),
  };
};

const mapDispatch = {
  fetchTasksList: actions.fetchTasksList,
  addTask: actions.addTask,
  changeIsCompletedTask: actions.changeIsCompletedTask,
  deleteTask: actions.deleteTask,
};

export default connect(mapState, mapDispatch)(TodoList);
