import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Box } from '../../assets/icons/present box/gift-box.svg';
import style from './AwardsTitle.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const AwardsTitle = () => {
  const isShowLengRu = useSelector(getIsShowLengRu);

  if (!isShowLengRu) {
    return (
      <div className={style.present_item}>
        <Box className={style.box} />
        <h2 className={style.title}>Мої призи</h2>
        {/* <h2 className={style.title}>Мои призы</h2> */}
      </div>
    );
  }

  return (
    <div className={style.present_item}>
      <Box className={style.box} />
      {/* <h2 className={style.title}>Мої призи</h2> */}
      <h2 className={style.title}>Мои призы</h2>
    </div>
  );
};

export default AwardsTitle;
