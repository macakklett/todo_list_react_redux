import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const TasksList = ({ tasks, addTask, changeIsCompletedTask, deleteTask }) => {
  if (!tasks) return null;
  return (
    <>
      <CreateTaskInput addTask={addTask} />
      <ul className="list">
        {tasks
          .slice()
          .sort((a, b) => a.done - b.done)
          .map(task => (
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

export default TasksList;
