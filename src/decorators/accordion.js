import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {
    state = {
        openArticleId: null
    }

    toggleArticle = (openArticleId) => () => {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        })
    }

    render() {
        return <OriginalComponent {...this.props} openArticleId = {this.state.openArticleId} toggleArticle = {this.toggleArticle}/>
    }
}