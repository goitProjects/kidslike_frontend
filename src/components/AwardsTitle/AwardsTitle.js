import React from 'react';
import { ReactComponent as Box } from '../../assets/icons/present box/gift-box.svg';
import style from './AwardsTitle.module.css';

const AwardsTitle = () => {
  return (
    <div className={style.present_item}>
      <Box className={style.box} />
      <h2 className={style.title}>Мої призи</h2>
    </div>
  );
};

export default AwardsTitle;
