import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'
import PropTypes from 'prop-types'

class ArticlesPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        dictionary: PropTypes.object,
    }

    render() {
        console.log('---', 2)
        const {dictionary} = this.context
        return (
            <div>
                <h3>{dictionary['ARTICLE_LIST']}</h3>
                <ArticleList />
                <Route path = '/articles/:id' children = {this.getArticleView}/>
            </div>
        )
    }

    getArticleView = ({ match }) => {
        if (!match) return <h2>Select some article</h2>

        return <Article isOpen id = {match.params.id} key = {match.params.id} />
    }
}

export default ArticlesPage