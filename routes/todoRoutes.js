import express from 'express';
import { getTodos, createTodos, updateTodo, updateTodoStatus, deleteTodo } from '../controllers/todos.js';

const router = express.Router();

router.get('/:id', getTodos);

router.post('/', createTodos);

router.patch('/:id', updateTodo);

router.patch('/status/:id', updateTodoStatus);

router.delete('/:id', deleteTodo);

export default router;