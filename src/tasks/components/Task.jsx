import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ id, text, done, changeIsCompletedTask, deleteTask }) => {
  const classList = done ? 'list-item list-item_done' : 'list-item';

  return (
    <li className={classList}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => changeIsCompletedTask(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => deleteTask(id)}></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  changeIsCompletedTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default Task;
