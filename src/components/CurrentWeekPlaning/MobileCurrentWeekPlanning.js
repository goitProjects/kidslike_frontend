import React from 'react';
import * as moment from 'moment';
import 'moment/locale/uk';
import { useSelector } from 'react-redux';
import s from './MobileCurrentWeekPlanning.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const CurrentWeekPlaning = () => {
  const startOfWeek = moment()
    .startOf('week')
    .format('DD');
  const endOfWeek = moment()
    .endOf('week')
    .format('DD.MM.YYYY');

  const isShowLangRu = useSelector(getIsShowLengRu);

  return (
    <>
      <p className={s.wrapper}>
        {!isShowLangRu ? 'План на тиждень:' : 'План на неделю:'}

        <span className={s.week}>
          {' '}
          {startOfWeek} - {endOfWeek}{' '}
        </span>
      </p>
    </>
  );
};

export default CurrentWeekPlaning;
