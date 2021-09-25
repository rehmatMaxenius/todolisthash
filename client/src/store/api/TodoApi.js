
import axios from 'axios';

const url = 'http://localhost:5000/todos';

export const fetchTodos = (id) => axios.get(`${url}/${id}`);

export const createTodo = (newTodo) => axios.post(url, newTodo);

export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);

export const updateTodoStatus = (id) => axios.patch(`${url}/status/${id}`);

export const deleteTodo = (id) => axios.delete(`${url}/${id}`);

