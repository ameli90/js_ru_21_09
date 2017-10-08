import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array,
        onFilter: PropTypes.func.isRequired,
    };

    render() {
        const { articles, selected, onFilter } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={onFilter}
        />
    }
}

export default SelectFilter