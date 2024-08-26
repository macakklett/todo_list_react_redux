import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import {
  getTasks,
  addTaskToBD,
  setCompleted,
  deleteTask,
} from './tasksGateway';

class TasksList extends Component {
  state = {
    tasks: null,
  };

  componentDidMount = () => {
    this.fetchData();
  };

  addTask = (text) => {
    addTaskToBD({ text, done: false }).then(() => this.fetchData());
  };

  handleChangeStatusTask = (id) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );

    this.setState({ tasks: updatedTasks });

    setCompleted(
      id,
      updatedTasks.find((task) => task.id === id)
    ).catch((error) => {
      console.error('Error updating task:', error);
    });
  };

  handleDeleteTask = (id) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== id);

    this.setState({ tasks: updatedTasks });

    deleteTask(id).catch((error) => {
      console.error('Error deleting task:', error);
    });
  };

  fetchData = () =>
    getTasks().then((data) =>
      this.setState({
        tasks: data,
      })
    );

  render() {
    return (
      <>
        <CreateTaskInput addTask={this.addTask} />
        {this.state.tasks && (
          <ul className="list">
            {this.state.tasks
              .slice()
              .sort((a, b) => a.done - b.done)
              .map((task) => (
                <Task
                  key={task.id}
                  {...task}
                  setDone={this.handleChangeStatusTask}
                  onDelete={this.handleDeleteTask}
                />
              ))}
          </ul>
        )}
      </>
    );
  }
}

export default TasksList;
