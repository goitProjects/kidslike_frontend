/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import s from './PointAmount.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const PointAmount = ({ point }) => {
  const isShowLangRu = useSelector(getIsShowLengRu);

  const textPointsUa = () => {
    if (point === 1) return 'бал';
    if (point > 1 && point <= 4) return 'бали';
    return 'баллiв';
  };
  const textPointsRu = () => {
    if (point === 1) return 'балл';
    if (point > 1 && point <= 4) return 'балла';
    return 'баллов';
  };

  return (
    <div className={s.point_amount}>
      <p className={s.point_amount_p}>
        {point} {!isShowLangRu ? textPointsUa() : textPointsRu()}
      </p>
    </div>
  );
};

export default PointAmount;
