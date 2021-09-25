import { TODO_ID } from '../constants/TodoTypes';

export default (updateTodoId = null, action) => {
    switch (action.type) {
        case TODO_ID:
                return action.payload;
        default:
            return updateTodoId;
    }
}