/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import shortid from 'shortid';
import style from './DaysList.module.css';
import { ReactComponent as Done } from '../../assets/icons/done/check-mark-black-outline.svg';

const dayObj = moment();
const today = dayObj.isoWeekday();

const DaysList = ({ id, days, onChange }) => {
  const isDisabled = currentDate => {
    const currentDay = dayObj.day(currentDate).isoWeekday();

    return today > currentDay;
  };

  const renderDays = days.map(day => {
    const key = `${id}_${day.date}`;

    return (
      <li key={key}>
        <label className={style.container_checkbox} htmlFor={`${key}`}>
          <input
            id={`${key}`}
            type="checkbox"
            className={style.input}
            name={`${day.name}`}
            checked={day.isActive}
            onChange={onChange}
            disabled={isDisabled(day.name)}
          />
          {day.title}
          <span className={style.checkmark}>
            <Done className={style.checkmark_icon} width="15px" height="15px" />
          </span>
        </label>
      </li>
    );
  });
  return (
    <form className={style.form}>
      <ul className={style.DayList} id={shortid.generate()}>
        {renderDays}
      </ul>
    </form>
  );
};

export default DaysList;
