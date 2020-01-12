import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import ProgressBar from '../ProgressBar/ProgressBar';
import ContainerList from '../CardsList/index';
import CurrentWeekRange from '../CurrentWeekRange/CurrentWeekRange';
import CurrentDay from '../CurrentDay/CurrentDay';
import windowWidth from '../../utils/windowWidth';
import days from '../../utils/days.json';
import s from './WeekTabsContent.module.css';

let dayName = null;
let date = null;

const momentObj = moment();

const WeekTabsContent = () => {
  const { search } = useLocation();
  const tasks = useSelector(state => state.tasks.items);

  const getWeekDay = () => {
    let url;
    const urlDay = new URLSearchParams(search).get('day');

    if (urlDay) {
      url = momentObj.day(urlDay).isoWeekday();
      dayName = days[url - 1].name;
      date = moment()
        .day(url)
        .format('DD-MM-YYYY');
    }
  };

  getWeekDay();

  return (
    <div className={s.body}>
      {(windowWidth < 768 || windowWidth >= 1280) && <CurrentWeekRange />}
      <div className={s.div2}>
        {windowWidth >= 768 && <ProgressBar />}
        {dayName && date && <CurrentDay day={dayName} date={date} />}
      </div>
      <div className={s.cardWrapper}>
        {tasks && <ContainerList arr={tasks} />}
        {windowWidth < 768 && <ProgressBar />}
      </div>
    </div>
  );
};

export default WeekTabsContent;
