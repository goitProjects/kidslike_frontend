/* eslint-disable react/prop-types */
import React from 'react';
import s from './PointAmount.module.css';

const PointAmount = ({ point }) => {
  return (
    <div className={s.point_amount}>
      <p className={s.point_amount_p}>{`${point} баллiв`}</p>
    </div>
  );
};

export default PointAmount;
