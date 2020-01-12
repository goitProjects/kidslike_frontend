import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from './WeekTabsDesktop.module.css';

const WeekTabsDesktop = ({ days }) => (
  <div className={s.weekDays}>
    <ul className={s.weekDaysList}>
      {days.map(el => (
        <li key={`${el.id}`} className={s.weekDaysListItem}>
          <NavLink
            exact
            isActive={(match, location) => {
              if (location.search.includes(`${el.url}`)) {
                return true;
              }
              return false;
            }}
            activeClassName={s.active}
            className={s.weekDaysListLink}
            to={location => `${location.pathname}?day=${el.url}`}
          >
            {el.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

WeekTabsDesktop.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default WeekTabsDesktop;
