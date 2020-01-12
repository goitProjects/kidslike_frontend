import React from 'react';
import PropTypes from 'prop-types';
import s from './CurrentDay.module.css';

const CurrentDay = ({ day, date }) => (
  <div className={s.wrapper}>
    <h2 className={s.task}>Мoї завдання:</h2>
    <p className={s.day}>
      {`${day}`}, {`${date}`}
    </p>
  </div>
);

export default CurrentDay;

CurrentDay.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
