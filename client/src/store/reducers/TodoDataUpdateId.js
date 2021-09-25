import { TODO_DATA_UPDATE_ID } from '../constants/TodoTypes';

export default (todoDataUpdateId = null, action) => {
    switch (action.type) {
        case TODO_DATA_UPDATE_ID:
                return action.payload;
        default:
            return todoDataUpdateId;
    }
}