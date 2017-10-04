import React, {Component} from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import './style.css'

class AddComment extends Component {

    state = {
        name: '',
        text: '',
        errors: {
          name: '',
          text: '',
        }
    }

    handleSubmit = e => {
      e.preventDefault();

      console.log(this.isValid());
      if (this.isValid()) {
        // TODO add comment
        this.setState({ name: '', text: '' })
      }
    }

    isValid = () => {
      const { name, text } = this.state

      const errors = {
        text: (text.length < 10 || text.length > 50) ? 'Text length must be >= 10 and <= 50' : '',
        name: (!name.length) ? 'Name must not be empty' : ''
      };
      
      this.setState({ errors: errors });
      
      return !errors.text && !errors.name
    }

    handleChange = field => event => {
      this.setState({ [field]: event.target.value });
    }
    
    getForm = () => {
        const { errors } = this.state
        const { name, text } = this.state
      
        return <form onSubmit={this.handleSubmit}>
            <div className="comment__add_row">
                <label htmlFor="text">Name:</label>
                <input className={errors.name.length ? 'error' : ''} value={name} id="text" type="text" onChange={this.handleChange('name')}/>
                <span className="error-message">{errors.name}</span>
            </div>
            <div className="comment__add_row">
                <label htmlFor="comment">Comment:</label>
                <textarea className={errors.text.length ? 'error' : ''} id="comment" cols="30" rows="10" value={text} onChange={this.handleChange('text')}/>
                <span className="error-message">{errors.text}</span>
            </div>
            <div className="comment__add_row">
                <input type="submit" value="Submit" />
            </div>
        </form>
    }

    
    render() {
        const { isOpen, toggleOpen} = this.props
        const text = isOpen ? 'Hide Add Comment Form' : 'Add Comment'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                { isOpen && this.getForm() }
            </div>
        )
    }
}

AddComment.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

export default toggleOpen(AddComment)