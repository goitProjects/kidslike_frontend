import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import s from './CurrentDay.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const CurrentDay = ({ day, date }) => {
  const isShowLangRu = useSelector(getIsShowLengRu);

  return (
    <div className={s.wrapper}>
      <h2 className={s.task}>
        {!isShowLangRu ? 'Мoї завдання:' : 'Мoи задачи:'}
      </h2>
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
