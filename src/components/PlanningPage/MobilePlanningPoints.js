import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MobilePlanningPoints.module.css';
import getWeekPlanPoints from '../../redux/tasks/taskSelector';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const PlanningPoints = ({ countPoints }) => {
  const isShowLangRu = useSelector(getIsShowLengRu);

  return (
    <p className={styles.pointsText}>
      <span className={styles.pointsAmount}>{countPoints}</span>
      {!isShowLangRu ? 'бали' : 'баллы'}
    </p>
  );
};

const MSTP = state => ({
  countPoints: getWeekPlanPoints(state),
});

PlanningPoints.propTypes = {
  countPoints: PropTypes.number.isRequired,
};

export default connect(MSTP)(PlanningPoints);
