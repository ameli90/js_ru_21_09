import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeLang} from '../../AC'
import PropTypes from 'prop-types'

class CommentForm extends Component {

    static propTypes = {
        lang: PropTypes.string.isRequired,
        changeLang: PropTypes.func.isRequired,
    }

    static contextTypes = {
        dictionary: PropTypes.object,
    }

    switchLang = e => {
        e.preventDefault();
        this.props.changeLang(e.target.id);
    }

    render() {
        const {dictionary} = this.context;
        const {lang} = this.props;
        return (
            <div>
                <div>{dictionary['CURRENT_LANGUAGE']} {lang}</div>
                <a id="ENG" href="" onClick={this.switchLang} style={{color: lang == 'ENG' ? 'red' : ''}}>{dictionary['LANG_ENG']}</a>
                <a id="RU" href="" onClick={this.switchLang}  style={{color: lang == 'RU' ? 'red' : ''}}>{dictionary['LANG_RU']}</a>
            </div>
        )
    }
}

export default connect(state => {
    return {
        lang: state.locale.lang,
    }
}, dispatch => ({
    changeLang: lang => dispatch(changeLang(lang))
}))(CommentForm)
