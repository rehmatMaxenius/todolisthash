export default (updateListId = null, action) => {
    switch (action.type) {
        case 'UPDATE_LIST_ID':
                return action.payload;
        default:
            return updateListId;
    }
}