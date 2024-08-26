import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ id, text, done, setDone, onDelete }) => {
  const classList = done ? 'list-item list-item_done' : 'list-item';
  return (
    <li className={classList}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => setDone(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool,
  setDone: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Task;
