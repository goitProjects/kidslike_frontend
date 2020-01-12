/* eslint-disable react/prop-types */
import React from 'react';
import s from './TaskStatus.module.css';
import { ReactComponent as CheckSymbol } from '../../assets/icons/card/check-symbol.svg';
import { ReactComponent as Attention } from '../../assets/icons/card/attention.svg';

const TaskStatus = ({ mainValue }) => {
  return mainValue ? (
    <div className={s.task_status_done}>
      <CheckSymbol className={s.check_symbol} width="12" height="12" />
    </div>
  ) : (
    <div className={s.task_status_attention}>
      <Attention className={s.attention} width="12" height="12" />
    </div>
  );
};

export default TaskStatus;
