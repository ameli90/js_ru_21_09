import { UPDATE_FILTER } from '../constants'

const defaultState = {
    from: null,
    to: null,
    selected: [],
}

export default function filters(state = defaultState, action) {
    return action.type === UPDATE_FILTER ? { ...state, ...action.data } : state
}