import lists from './reducers/ListReducer' 
import todos from './reducers/TodoReducer' 
import listUpdateId from './reducers/ListIdReducer' 
import TodoUpdateId from './reducers/TodoIdReducer' 
import TodoDataUpdateId from './reducers/TodoDataUpdateId' 
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    lists,
    todos,
    TodoUpdateId,
    TodoDataUpdateId,
    listUpdateId
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store 
