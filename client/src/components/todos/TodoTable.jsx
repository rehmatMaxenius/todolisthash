import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Table } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../../store/actions/TodoActions';
import { todoDataUpdateId, deleteTodo, updateTodoStatus } from '../../store/actions/TodoActions';

const TodoTable = ({todos}) => {
    const dispatch = useDispatch();
    const [todoDataUpdateIdState, setTodoDataUpdateIdState] = useState(null)    
    const currentUpdateTodoId = useSelector((state) => state.TodoUpdateId);

    //update todo date update id
    useEffect(() => {
        dispatch(todoDataUpdateId(todoDataUpdateIdState));
    }, [dispatch, todoDataUpdateIdState]);
    
    useEffect(() => {
        if(currentUpdateTodoId) {
            dispatch(getTodo(currentUpdateTodoId));
        }
    }, [dispatch, currentUpdateTodoId])
    return (
        <React.Fragment>
            {currentUpdateTodoId &&
            <Table className="list-table mx-4" striped hover size="sm">
                <thead>
                <tr>
                    <th>Status</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                
                {todos && todos.map((todo) => (
                    <tr key={todo._id}>
                    <td onClick={() => dispatch(updateTodoStatus(todo._id))}>{todo.status ? <FaCheck className="cursor-pointer success" /> : <FaTimes className="cursor-pointer delete-btn" />}</td>
                    <td>{todo.title}</td>
                    <td>{moment(todo.date).format('MMM DD, YYYY')}</td>
                    <td><FaEdit onClick={ () => setTodoDataUpdateIdState(todo._id) } className="edit-btn cursor-pointer" /></td>
                    <td><FaTimes onClick={() => dispatch(deleteTodo(todo._id)) } className="delete-btn cursor-pointer" /></td>
                    </tr>
                ))}
                </tbody>
            </Table>            
            }
        </React.Fragment>
    )
}

export default TodoTable
