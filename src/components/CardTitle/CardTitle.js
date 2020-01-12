/* eslint-disable react/prop-types */
import React from 'react';
import s from './CardTitle.module.css';

const CardTitle = ({ title }) => (
  <div>
    <span className={s.card_title}>{title}</span>
  </div>
);

export default CardTitle;
