/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import s from './PointAmount.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const PointAmount = ({ point }) => {
  const isShowLangRu = useSelector(getIsShowLengRu);

  const textPointsUa = () => (point <= 4 ? 'бали' : 'баллiв');
  const textPointsRu = () => (point <= 4 ? 'балла' : 'баллов');

  return (
    <div className={s.point_amount}>
      {/* <p className={s.point_amount_p}>
        {point} {!isShowLangRu ? 'баллiв' : 'баллов'}
      </p> */}

      <p className={s.point_amount_p}>
        {point} {!isShowLangRu ? textPointsUa() : textPointsRu()}
      </p>
    </div>
  );
};

export default PointAmount;
