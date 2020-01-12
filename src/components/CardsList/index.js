/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import moment from 'moment';
import styles from './CardsList.module.css';
import CardsList from './CardsList';

const momentObj = moment();
const dayNow = momentObj.isoWeekday();
let url;
const ContainerList = ({ arr }) => {
  const { search, pathname } = useLocation();

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
          <h2 className={styles.no_tasks}>На сьогоднi завдань немає</h2>
          <NavLink to="/planning">
            <button type="button" className={styles.redirect_to_planer}>
              Запланувати новi задачi
            </button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default ContainerList;
