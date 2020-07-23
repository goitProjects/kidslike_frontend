/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';
import styles from './CardsList.module.css';
import CardsList from './CardsList';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const momentObj = moment();
const dayNow = momentObj.isoWeekday();
let url;

const ContainerList = ({ arr }) => {
  const { search, pathname } = useLocation();

  const isShowLangRu = useSelector(getIsShowLengRu);

  const currentCards = cardsArr => {
    if (pathname === '/') {
      const result = [];
      const urlDay = new URLSearchParams(search).get('day');

      if (urlDay) {
        url = momentObj.day(urlDay).isoWeekday();

        cardsArr.forEach(el => {
          const { _id, title, imgName, taskPoints } = el;
          const day = el.days[url - 1];
          const transit = { ...day, _id, title, imgName, taskPoints };

          day.isActive && result.push(transit);
        });
      }
      return result;
    }
    return cardsArr;
  };

  const cards = currentCards(arr);
  return cards.length ? (
    <CardsList tasks={cards} />
  ) : (
    <div className={styles.cards_list_planer}>
      {dayNow <= url && (
        <>
          <h2 className={styles.no_tasks}>
            {!isShowLangRu
              ? 'На сьогоднi завдань немає'
              : 'На сегодняшний день задач нет'}
          </h2>

          <NavLink to="/planning">
            <button type="button" className={styles.redirect_to_planer}>
              {!isShowLangRu
                ? 'Запланувати новi задачi'
                : 'Запланировать новые задачи'}
            </button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default ContainerList;
