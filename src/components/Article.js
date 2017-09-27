import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList';

class Article extends Component {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired,
            comments: PropTypes.array,
        }).isRequired,
        isOpen: PropTypes.bool,
        onButtonClick: PropTypes.func
    }

    state = {
        isCommentsShown: false
    }

    toggleComments = () => {
        this.setState({isCommentsShown: !this.state.isCommentsShown});
    }
  
    showComments = () => {
      const {article} = this.props
      const {isCommentsShown} = this.state
      
      return <div>
        <button onClick={this.toggleComments}>
          {isCommentsShown ? 'Hide comments' : 'Show comments'}
        </button>
        {isCommentsShown && <CommentList comments={article.comments}/>}
      </div>
    }
    
    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                {article.comments ? this.showComments() : <span>No comments...</span>}
            </div>
        )
    }
}


export default Article