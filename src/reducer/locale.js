import { CHANGE_LANG } from '../constants'

const defaultState = {
    lang: 'ENG'
}

export default (state = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_LANG:
            return {...state, ...{lang: payload.lang}}
    }

    return state
}