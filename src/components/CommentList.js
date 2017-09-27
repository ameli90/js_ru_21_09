import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

export default class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  static propTypes = {
    comments: PropTypes.array.isRequired
  }

  render() {
    const {comments} = this.props

    return (
      <div>
        <ul>
          {
            comments.map(comment => 
              <li key={comment.id}>
                <Comment comment={comment}/>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
