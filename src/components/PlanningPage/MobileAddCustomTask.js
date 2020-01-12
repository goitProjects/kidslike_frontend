import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { NewTaskModalOpen } from '../../redux/global/globalActions';
import styles from './MobileAddCustomTask.module.css';
import NewTaskModal from '../NewTaskModal/NewTaskModal';

const AddCustomTask = ({ isNewTaskModalOpen, openModal }) => {
  return (
    <>
      <div className={styles.customWrapper}>
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
