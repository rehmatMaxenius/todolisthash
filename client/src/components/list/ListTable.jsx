import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { deleteList, updateListId } from '../../store/actions/ListActions';
import { updateTodoId } from '../../store/actions/TodoActions';

const ListTable = () => {
    const [listId, setListId] = useState(null);
    const [todoId, setTodoId] = useState(null);
    const dispatch = useDispatch();
    
    const lists = useSelector((state) => state.lists);

    
    //update list edit id
    useEffect(() => {
        dispatch(updateListId(listId));
    }, [listId, dispatch]);
    
    useEffect(() => {
        dispatch(updateTodoId(todoId))
    }, [todoId, dispatch]);

    return (
        <React.Fragment>
            <Table className="list-table" striped hover size="sm">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {lists && lists.map((list) => (
                    <tr key={list._id} className={todoId===list._id ? 'selectedList' : ''}>
                        <td onClick={() => setTodoId(list._id) } className="cursor-pointer">{list.name}</td>
                        <td><FaEdit className="cursor-pointer edit-btn" onClick={ () => setListId(list._id) } /></td>
                        <td><FaTimes className="cursor-pointer delete-btn" onClick={() => dispatch(deleteList(list._id)) }/></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default ListTable
