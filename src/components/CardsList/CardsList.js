/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card';
import s from './CardsList.module.css';

const CardsList = ({ tasks }) => {
  return (
    <ul className={s.cards_list}>
      {tasks.map(el => {
        const { _id: id } = el;
        return (
          <li key={id} className={s.card}>
            <Card {...el} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardsList;
