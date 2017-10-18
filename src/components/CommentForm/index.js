import React, { Component } from 'react'
import './style.css'
import { addComment } from '../../AC';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CommentForm extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        addComment: PropTypes.func.isRequired,
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <textarea value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit" disabled = {!this.isValidForm()}/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { text, user } = this.state;
        const { article } = this.props;

        this.props.addComment({
            text,
            user,
            articleId: article.id
        });
        this.setState({
            user: '',
            text: ''
        })
    }

    isValidForm = () => ['user', 'text'].every(this.isValidField)

    isValidField = type => this.state[type].length >= limits[type].min

    getClassName = type => this.isValidField(type) ? '' : 'form-input__error'

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 10,
        max: 50
    },
    text: {
        min: 10,
        max: 50
    }
}

export default connect(state => ({
}), { addComment })(CommentForm)
