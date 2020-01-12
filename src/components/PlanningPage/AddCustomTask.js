import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { NewTaskModalOpen } from '../../redux/global/globalActions';
import styles from '../../pages/PlanningPage/Planning.module.css';
import NewTaskModal from '../NewTaskModal/NewTaskModal';

const AddCustomTask = ({ isNewTaskModalOpen, openModal }) => {
  return (
    <>
      <div className={styles.customWrapper}>
        <p className={styles.hiddenText}>
          Хочеш отримати більше призів - додай завдання
          <span role="img" aria-label="	SMILING FACE WITH SMILING EYES">
            &#128522;
          </span>
        </p>
        <button className={styles.addTaskBtn} type="button" onClick={openModal}>
          &#43;
        </button>
      </div>
      {isNewTaskModalOpen && <NewTaskModal />}
    </>
  );
};

const MSTP = store => ({
  isNewTaskModalOpen: store.global.isNewTaskModalOpen,
});

const MDTP = dispatch => ({
  openModal: () => dispatch(NewTaskModalOpen()),
});

AddCustomTask.propTypes = {
  openModal: propTypes.func.isRequired,
  isNewTaskModalOpen: propTypes.bool.isRequired,
};

export default connect(MSTP, MDTP)(AddCustomTask);
