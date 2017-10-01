import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../components/Accordion'

class ArticleListInheritance extends Accordion {

    render() {
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openArticleId}
                     onButtonClick={this.toggleArticle(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleListInheritance.defaultProps = {
    articles: []
}

ArticleListInheritance.propTypes = {
    articles: PropTypes.array.isRequired,
}

export default ArticleListInheritance