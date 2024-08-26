const baseURL = 'https://668e5a7bbf9912d4c92dedb5.mockapi.io/api/v1/tasks';

export const getTasks = () => fetch(baseURL).then(response => response.json());

export const addTaskToBD = task =>
  fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  });

export const setCompleted = (id, task) =>
  fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  });

export const deleteTask = id =>
  fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  });
