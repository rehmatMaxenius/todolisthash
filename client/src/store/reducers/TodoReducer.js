import { GET_TODO, CREATE_TODO, UPDATE_TODO_STATUS, UPDATE_TODO, DELETE_TODO } from '../constants/TodoTypes';

export default (state = [], action) => {
    switch (action.type) {
        case GET_TODO:
            return action.payload;
        case CREATE_TODO:
            return [...state, action.payload];
        case UPDATE_TODO:
            return state.map((todo) => todo._id === action.payload._id ? action.payload : todo);
        case UPDATE_TODO_STATUS:
            return state.map((todo) => todo._id === action.payload._id ? {...todo, status:!todo.status} : todo);
        case DELETE_TODO:
            return state.filter((todo) => todo._id !== action.payload);
        default:
            return state;
    }
}