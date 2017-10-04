import React, {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    state = {
        from: null,
        to: null,
    };

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    render() {
        // TODO got an error: Uncaught Error: Objects are not valid as a React child (found: Wed Oct 11 2017 12:00:00 GMT+0300 (EEST)). If you meant to render a collection of children, use an array instead.
        const { from, to } = this.state;
        return (
          <div className="RangeExample">
              {from &&
              to &&
              <p>
                  {from} to {to}
              </p>}
              <DayPicker
                numberOfMonths={2}
                selectedDays={[from, { from, to }]}
                onDayClick={this.handleDayClick}
                fixedWeeks
              />
          </div>
        );
    }
}

export default DateRange