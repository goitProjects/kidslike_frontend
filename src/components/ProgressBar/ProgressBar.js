import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress } from 'react-sweet-progress';
import getWeekPlanPoints from '../../redux/tasks/taskSelector';
import 'react-sweet-progress/lib/style.css';
import style from './ProgressBar.module.css';

const ProgressBar = ({ userPoints, countPoints }) => {
  let percent = 100;
  if (countPoints) {
    percent = parseFloat((userPoints / countPoints) * 100);
  }
  if (userPoints === 0) {
    percent = 0;
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.info}>
          <p className={style.progressText}>
            Зароблено балів за весь період:
            <span className={style.points}>{userPoints}</span>
          </p>
          <p className={style.progressText}>
            Заплановано балів на цей тиждень:
            <span className={style.points}>{countPoints}</span>
          </p>
        </div>
        <div className={style.progressLibrary_container}>
          <span className={style.secondPoints}>
            {userPoints}/{countPoints}
          </span>
          <Progress percent={percent > 100 ? 100 : percent} />
        </div>
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  userPoints: PropTypes.number.isRequired,
  countPoints: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  userPoints: state.auth.user.points,
  countPoints: getWeekPlanPoints(state),
});

export default connect(mapStateToProps, null)(ProgressBar);
