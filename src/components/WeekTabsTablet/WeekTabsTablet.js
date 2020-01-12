import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CurrentWeekRange from '../CurrentWeekRange/CurrentWeekRange';
import windowWidth from '../../utils/windowWidth';
import s from './WeekTabsTablet.module.css';

const WeekTabsTablet = ({ days }) => (
  <div className={s.weekDays}>
    {windowWidth >= 768 && windowWidth < 1280 && <CurrentWeekRange />}
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

WeekTabsTablet.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default WeekTabsTablet;
