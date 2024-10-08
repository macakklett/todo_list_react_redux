import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateTaskInput = ({ addTask }) => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button className="btn create-task__btn" onClick={() => addTask(inputText)}>
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  addTask: PropTypes.func,
};

export default CreateTaskInput;
