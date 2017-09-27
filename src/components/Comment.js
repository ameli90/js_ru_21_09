import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
    static defaultProps = {
    }

    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.string,
            text: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        const {comment} = this.props

        return (
            <div>
                <div className="comment-user">User: {comment.user}</div>
                <div className="comment-text">Text: {comment.text}</div>
            </div>
        )
    }
}
