/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTasksPlanningOperation } from '../../redux/tasks/tasksOperations';
import DaysList from '../DaysList/DaysList';
import s from './SelectDays.module.css';
import { ReactComponent as AddPlusButton } from '../../assets/icons/card/add-plus-button.svg';

const SelectDays = props => {
  const [showDayList, setShowDayList] = useState(false);
  const dispatch = useDispatch();
  const { id } = props;

  const toggleDayList = () => {
    setShowDayList(ps => !ps);
  };

  const onHandleClick = taskId => {
    toggleDayList();
    dispatch(changeTasksPlanningOperation(taskId));
  };

  return (
    <>
      {!showDayList ? (
        <button onClick={toggleDayList} type="button" className={s.select_days}>
          <AddPlusButton className={s.addPlusButton} width="12" height="12" />
        </button>
      ) : (
        <button
          onClick={() => onHandleClick(id)}
          type="submit"
          className={s.select_days}
        >
          <span className={s.select_days_span}>OK</span>
        </button>
      )}
      {showDayList && <DaysList {...props} />}
    </>
  );
};

export default SelectDays;
