import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    static propTypes = {
        from: PropTypes.string,
        to: PropTypes.string,
        onFilter: PropTypes.func.isRequired,
    };

    handleDayClick = (day) => this.props.onFilter({ ...DateUtils.addDayToRange(day, this.props) })

    render() {
        const { from, to } = this.props
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

export default DateRange