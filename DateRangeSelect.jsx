import React from 'react';
import ReactDatePicker from 'react-datepicker';
import classes from './DateRangeSelect.module.css';
import { ReactComponent as CalendarIcon } from '../../img/ui/calendar_icon.svg';

export const DateRangeSelect = ({
  label,
  startDate,
  endDate,
  changeFromDate,
  changeToDate,
  minDate,
  maxDate,
  isMonthPicker,
  includeDates
}) => {
  const handleChange = ([newStartDate, newEndDate]) => {
    changeFromDate(newStartDate);
    changeToDate(newEndDate);
  };

  return (
    <div>
      {isMonthPicker ? (
        <ReactDatePicker
          selected={startDate}
          onChange={handleChange}
          maxDate={maxDate}
          minDate={minDate}
          includeDates={includeDates}
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
          className={classes.datepickerMonth}
          selectsRange
          showIcon
          icon={<CalendarIcon className={classes.datepickerIcon} />}
        />
      ) : (
        <ReactDatePicker
          selected={startDate}
          includeDates={includeDates}
          onChange={handleChange}
          startDate={startDate}
          endDate={endDate}
          maxDate={maxDate}
          minDate={minDate}
          className={classes.datepicker}
          selectsRange
          showIcon
          icon={<CalendarIcon className={classes.datepickerIcon} />}
        />
      )}
    </div>
  );
};
