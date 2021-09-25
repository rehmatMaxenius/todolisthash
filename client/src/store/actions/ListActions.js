import * as api from '../api/ListApi';

import { GET_LIST, CREATE_LIST, UPDATE_LIST, DELETE_LIST, UPDATE_LIST_ID } from '../constants/ListTypes';

//action creators
    //get lists
    export const getList = () => async (dispatch) => {
        try{
            const { data } = await api.fetchLists();
            dispatch({ type: GET_LIST, payload: data });
        }catch(error){
            console.log(error);
        }
    }

    export const createList = (newList) => async (dispatch) => {
        try{
            const { data } = await api.createList(newList);
            dispatch({ type: CREATE_LIST, payload: data });
        }catch(error){
            console.log(error);
        }
    }

    export const updateList = (id, updatedList) => async (dispatch) => {
        try{
            const { data } = await api.updateList(id, updatedList);
            dispatch({ type: UPDATE_LIST, payload: data });
        }catch(error){
            console.log(error);
        }
    }

    export const deleteList = (id) => async (dispatch) => {
        try{
            await api.deleteList(id);
            dispatch({ type: DELETE_LIST, payload: id });
        }catch(error){
            console.log(error);
        }
    }

    //update list edit id
    export const updateListId = (id) => {
        return { 
            type: UPDATE_LIST_ID, 
            payload: id 
        }
    }   