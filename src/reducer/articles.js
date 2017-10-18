import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = normalizedArticles.reduce((acc, article) => {
    return {...acc, [article.id]: article}
}, {})

export default (articleState = articlesMap, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id)
        case ADD_COMMENT:
            const {articleId, id} = payload.data;
            let articles = {...articleState};
            articles[articleId]['comments'].push(id);
            return articles
    }
    return articleState
}