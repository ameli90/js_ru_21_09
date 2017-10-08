import {INCREMENT, DELETE_ARTICLE, UPDATE_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function updateFilter(data) {
    return {
        type: UPDATE_FILTER,
        data,
    }
}