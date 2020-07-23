/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import windowWidth from '../../utils/windowWidth';
import styles from './Planning.module.css';
import mobileStyles from './PlanningMobile.module.css';
import PlanningPoints from '../../components/PlanningPage/PlanningPoints';
import MobilePlanningPoints from '../../components/PlanningPage/MobilePlanningPoints';
import ContainerList from '../../components/CardsList';
import CurrentWeekPlaning from '../../components/CurrentWeekPlaning/CurrentWeekPlaning';
import MobileCurrentWeekPlaning from '../../components/CurrentWeekPlaning/MobileCurrentWeekPlanning';
import AddCustomTask from '../../components/PlanningPage/AddCustomTask';
import MobileAddCustomTask from '../../components/PlanningPage/MobileAddCustomTask';
import { changeTasksPlanningOperation } from '../../redux/tasks/tasksOperations';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

import daysRu from '../../utils/days.json';

//= =
const arrT = [
  'Застелить кровать',
  'Пропилососить',
  'Полить цветы',
  'Почитать книгу',
  'Выкинуть мусор',
  'Почистить зубы',
  'Подмести',
  'Собрать игрушки',
];
//= =

const PlanningPage = () => {
  const IsShowLengRu = useSelector(getIsShowLengRu);

  // const tasks = useSelector(state => state.tasks.items);

  //= =
  let tasks = useSelector(state => state.tasks.items);

  if (IsShowLengRu) {
    // tasks = tasks.map((item, idx) => ({
    //   ...item,
    //   title: arrT[idx] ? arrT[idx] : item.title,
    // }));

    tasks = tasks.map((item, idx) => ({
      ...item,
      days: IsShowLengRu
        ? item.days.map((day, idxD) => ({
            ...day,
            title: daysRu[idxD].shortName,
          }))
        : item.days,
      title: arrT[idx] ? arrT[idx] : item.title,
    }));
  }

  //= =

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      tasks.forEach(({ _id }) => {
        dispatch(changeTasksPlanningOperation(_id));
      });
    };
  }, [history]);

  return (
    <div className={styles.planningContainer}>
      {windowWidth < 768 && <MobileCurrentWeekPlaning />}
      {windowWidth >= 768 && (
        <div className={styles.pointsTaskContainer}>
          <CurrentWeekPlaning />
          <div className={styles.secondTaskContainer}>
            <>
              <PlanningPoints />
              <AddCustomTask />
            </>
          </div>
        </div>
      )}
      <div className={styles.list}>
        {tasks && <ContainerList arr={tasks} />}
      </div>
      {windowWidth < 768 && (
        <div className={mobileStyles.MobilePointsTaskContainer}>
          <MobilePlanningPoints />
          <MobileAddCustomTask />
        </div>
      )}
    </div>
  );
};

export default PlanningPage;
