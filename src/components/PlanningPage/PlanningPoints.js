import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../pages/PlanningPage/Planning.module.css';
import getWeekPlanPoints from '../../redux/tasks/taskSelector';

const PlanningPoints = ({ countPoints }) => (
  <p className={styles.pointsText}>
    <span className={styles.hiddenSpan}>Визначено завдань на</span>
    <span className={styles.pointsAmount}>{countPoints}</span>
    бали
  </p>
);

const MSTP = state => ({
  countPoints: getWeekPlanPoints(state),
});

PlanningPoints.propTypes = {
  countPoints: PropTypes.number.isRequired,
};

export default connect(MSTP)(PlanningPoints);
