import React, { useState, useEffect } from 'react'
import Stack from 'react-bootstrap/Stack'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { todoDataUpdateId, createTodo, updateTodo } from '../../store/actions/TodoActions';

const TodoForm = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({
        list_id: null,
        title: '',
        date: '',
        status:false
    });

    const currentUpdateTodoId = useSelector((state) => state.TodoUpdateId);

    //update data of todos    
    const currentTodoDataUpdateId = useSelector((state) => state.TodoDataUpdateId);
    const todoDataUpdate = useSelector((state) => currentTodoDataUpdateId!==null ? state.todos.find((todo) => todo._id === currentTodoDataUpdateId) : null);
    
    //set local todo update data 
    useEffect(() => {
        if(todoDataUpdate) setTodo(todoDataUpdate);
    }, [todoDataUpdate]);

    useEffect(() => {
        setTodo({...todo, list_id: currentUpdateTodoId});
    }, [currentUpdateTodoId])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.title && todo.date){
            if(currentTodoDataUpdateId!==null){
                dispatch(updateTodo(currentTodoDataUpdateId, todo));
            }else{
                dispatch(createTodo(todo));
            }
            clear();
        }
    }
    
    const clear = () => {
        dispatch(todoDataUpdateId(null));
        setTodo({
            list_id: null,
            title: '',
            date: '',
            status:false
        });
    }
    return (
        <React.Fragment>
            <div className="ms-4">
                {currentUpdateTodoId &&
                <Form method="post" onSubmit={handleSubmit}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" value={todo.title} onChange={ (e) => setTodo({...todo, title: e.target.value})} placeholder="Enter Title" />
                        {!currentTodoDataUpdateId && <Form.Control className="me-auto" value={todo.date} onChange={ (e) => setTodo({...todo, date: e.target.value})} type="date" /> }
                        <Button variant="primary w-2" className="todo-btn" type="submit">{currentTodoDataUpdateId ? 'Update' : 'Add' } Todo</Button>
                    </Stack>
                </Form>
                }
            </div>
        </React.Fragment>
    )
}

export default TodoForm
