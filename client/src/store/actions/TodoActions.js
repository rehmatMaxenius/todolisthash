import * as api from '../api/TodoApi';

import { GET_TODO, CREATE_TODO, UPDATE_TODO, UPDATE_TODO_STATUS, DELETE_TODO, TODO_ID, TODO_DATA_UPDATE_ID } from '../constants/TodoTypes';

//get todos
export const getTodo = (id) => async (dispatch) => {
    try{
        const { data } = await api.fetchTodos(id);
        dispatch({ type: GET_TODO, payload: data });
    }catch(error){
        console.log(error);
    }
}

export const createTodo = (newTodo) => async (dispatch) => {
    try{
        const { data } = await api.createTodo(newTodo);
        dispatch({ type: CREATE_TODO, payload: data });
    }catch(error){
        console.log(error);
    }
}

export const updateTodo = (id, updatedTodo) => async (dispatch) => {
    try{
        const { data } = await api.updateTodo(id, updatedTodo);
        dispatch({ type: UPDATE_TODO, payload: data });
    }catch(error){
        console.log(error);
    }
}

export const updateTodoStatus = (id) => async (dispatch) => {
    try{
        const { data } = await api.updateTodoStatus(id);
        dispatch({ type: UPDATE_TODO_STATUS, payload: data });
    }catch(error){
        console.log(error);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try{
        await api.deleteTodo(id);
        dispatch({ type: DELETE_TODO, payload: id });
    }catch(error){
        console.log(error);
    }
}

//update todo edit id
export const updateTodoId = (id) => {
    return { 
        type: TODO_ID, 
        payload: id 
    }
}   


//update todo data id
export const todoDataUpdateId = (id) => {
    return { 
        type: TODO_DATA_UPDATE_ID, 
        payload: id 
    }
}   