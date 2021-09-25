import React, { useState, useEffect } from 'react'
import Stack from 'react-bootstrap/Stack'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import { updateListId, createList, updateList } from '../../store/actions/ListActions';

const TodoListForm = () => {
    const dispatch = useDispatch();

    const [list, setList] = useState({
        name: '',
        todos: [],
    });

    const currentUpdateListId = useSelector((state) => state.listUpdateId);
    const updateListData = useSelector((state) => currentUpdateListId!==null ? state.lists.find((list) => list._id === currentUpdateListId) : null);

    //set local state list 
    useEffect(() => {
        if(updateListData) setList(updateListData);
    }, [updateListData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(list.name){
            if(currentUpdateListId!==null){
                dispatch(updateList(currentUpdateListId, list));
            }else{
                dispatch(createList(list));
            }
            clear();
        }
    }
    
    const clear = () => {
        dispatch(updateListId(null));
        setList({
            name: '',
            todos: [],
        });
    }
        
    return (
        <React.Fragment>
            <Form method="post" onSubmit={handleSubmit}>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" value={list.name} onChange={(e) => setList({...list, name: e.target.value})} placeholder="Enter The Name of List" />
                    <Button variant="primary" type="submit">{ currentUpdateListId ? 'Update' : 'Add' }</Button>
                </Stack>
            </Form>
        </React.Fragment>
    )
}

export default TodoListForm
