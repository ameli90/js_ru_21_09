export default store => next => action => {
    if (action.type == 'ADD_COMMENT') {
        action.payload.data.id = Date.now()
    }
    next(action)
}