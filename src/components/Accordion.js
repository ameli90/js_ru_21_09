import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Accordion extends Component {
    state = {
        openArticleId: null
    }

    toggleArticle = (openArticleId) => () => {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        })
    }

    render() {
    }
}

Accordion.defaultProps = {
    openArticleId: PropTypes.string,
    toggleArticle: PropTypes.func.isRequired,
}

Accordion.propTypes = {
    openArticleId: PropTypes.string,
    toggleArticle: PropTypes.func.isRequired,
}

export default Accordion