import React, { Component } from 'react';

class CreateTaskInput extends Component {
  state = {
    inputText: '',
  };

  handleInputText = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputText}
        />
        <button
          className="btn create-task__btn"
          onClick={() => this.props.addTask(this.state.inputText)}
        >
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;
