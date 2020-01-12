import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from './WeekTabsMobile.module.css';

const WeekTabsMobile = ({ days }) => (
  <div className={s.weekDays}>
    <ul className={s.weekDaysList}>
      {days.map(el => (
        <li key={`${el.id}`} className={s.weekDaysListItem}>
          <NavLink
            exact
            isActive={(match, location) => {
              if (location.search === `?day=${el.url}`) {
                return true;
              }
              return false;
            }}
            activeClassName={s.active}
            className={s.weekDaysListLink}
            to={location => `${location.pathname}?day=${el.url}`}
          >
            {el.shortName}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

WeekTabsMobile.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default WeekTabsMobile;
