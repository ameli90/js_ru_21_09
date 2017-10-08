import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateFilter } from '../../AC/index'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        from: PropTypes.string,
        to: PropTypes.string,
        selected: PropTypes.array,
        updateFilter: PropTypes.func.isRequired,
    };

    render() {
        const { from, to, selected, articles, updateFilter } = this.props;

        return (
            <div>
                <SelectFilter articles = {articles} selected={selected} onFilter={(selected) => updateFilter({selected})}/>
                <DateRange from={from} to={to} onFilter={updateFilter}/>
            </div>
        )
    }
}

const mapStateToProps = ({ filters: { from, to, selected }, articles }) => ({
    from, to, selected, articles
})

function mapDispatchToProps(dispatch) {
    return {
        updateFilter: bindActionCreators(updateFilter, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)