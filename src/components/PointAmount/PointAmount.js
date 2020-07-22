/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import s from './PointAmount.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const PointAmount = ({ point }) => {
  const IsShowLengRu = useSelector(getIsShowLengRu);

  if (!IsShowLengRu) {
    return (
      <div className={s.point_amount}>
        <p className={s.point_amount_p}>{`${point} баллiв`}</p>
        {/* <p className={s.point_amount_p}>{`${point} баллов`}</p> */}
      </div>
    );
  }

  return (
    <div className={s.point_amount}>
      {/* <p className={s.point_amount_p}>{`${point} баллiв`}</p> */}
      <p className={s.point_amount_p}>{`${point} баллов`}</p>
    </div>
  );
};

export default PointAmount;
