import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { renderIf } from 'Client/utils/render-if';
import classnames from 'classnames';

const weekday = date => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getUTCDay()];
const day = date => date.getUTCDate().toString().padStart(2, '0');
const month = date => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getUTCMonth()];
const year = date => date.getUTCFullYear();

const format = date => `${weekday(date)}, ${day(date)} ${month(date)} ${year(date)}`;

const isValid = date => !isNaN(date);

const DateDisplay = ({ date, className }) =>
  renderIf(isValid(date), () =>
    <time className={classnames(className)} dateTime={date.toISOString()}>{format(date)}</time>
  );

DateDisplay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string
};

export default DateDisplay;