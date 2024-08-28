const baseURL = 'https://668e5a7bbf9912d4c92dedb5.mockapi.io/api/v1/tasks';

const handleResponse = response => {
  if (!response.ok) {
    alert(`Error: ${response.status} - ${response.statusText}`);
    throw new Error('Failed to fetch');
  }
  return response.json();
};

export const getTasks = () => fetch(baseURL).then(handleResponse);

export const addTaskToBD = task =>
  fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  }).then(handleResponse);

export const changeCompleted = (id, task) =>
  fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  }).then(handleResponse);

export const deleteTaskFromDB = id =>
  fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  }).then(handleResponse);
