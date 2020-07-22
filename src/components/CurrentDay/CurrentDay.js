import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import s from './CurrentDay.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const CurrentDay = ({ day, date }) => {
  const isShowRu = useSelector(getIsShowLengRu);

  if (!isShowRu) {
    return (
      <div className={s.wrapper}>
        <h2 className={s.task}>Мoї завдання:</h2>
        {/* <h2 className={s.task}>Мoи задачи:</h2> */}
        <p className={s.day}>
          {`${day}`}, {`${date}`}
        </p>
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      {/* <h2 className={s.task}>Мoї завдання:</h2> */}
      <h2 className={s.task}>Мoи задачи:</h2>
      <p className={s.day}>
        {`${day}`}, {`${date}`}
      </p>
    </div>
  );
};

export default CurrentDay;

CurrentDay.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
