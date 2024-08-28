import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../tasks.selectors';
import * as actions from '../tasks.actions';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const TasksList = ({ tasks, fetchTasksList, addTask, changeIsCompletedTask, deleteTask }) => {
  if (!tasks) return null;

  useEffect(() => {
    fetchTasksList();
  }, []);

  return (
    <>
      <CreateTaskInput addTask={addTask} />
      <ul className="list">
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            changeIsCompletedTask={changeIsCompletedTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape),
  fetchTasksList: PropTypes.func,
  addTask: PropTypes.func,
  changeIsCompletedTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

const mapState = state => {
  return {
    tasks: selectors.sortedTasksListSelector(state),
  };
};

const mapDispatch = {
  fetchTasksList: actions.fetchTasksList,
  addTask: actions.addTask,
  changeIsCompletedTask: actions.changeIsCompletedTask,
  deleteTask: actions.deleteTask,
};

export default connect(mapState, mapDispatch)(TasksList);
