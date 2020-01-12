/* eslint-disable react/prop-types */
import React from 'react';
import s from './TaskToggle.module.css';
import { ReactComponent as CheckSymbol } from '../../assets/icons/card/check-symbol.svg';
import { ReactComponent as Attention } from '../../assets/icons/card/attention.svg';

const TaskToggle = ({ id, onChange, value }) => {
  return (
    <label htmlFor={id} className={s.switch}>
      <input
        id={id}
        className={s.checkbox}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <span className={`${s.slider} ${s.round}`}>
        <CheckSymbol className={s.check_symbol} width="12" height="12" />
        <Attention className={s.attention} width="12" height="12" />
      </span>
    </label>
  );
};
export default TaskToggle;
