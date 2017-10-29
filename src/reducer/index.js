import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import counterReducer from './counter'
import localeReducer from './locale'
import articles from './articles'
import comments from './comments'
import filters from './filters'

export default combineReducers({
    counter: counterReducer,
    locale: localeReducer,
    articles, comments, filters, router
})