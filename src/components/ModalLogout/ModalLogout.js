/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import styleModalLogout from './ModalLogout.module.css';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import { ModalLogoutClosed } from '../../redux/global/globalActions';
import { logout } from '../../redux/auth/authOperation';

const ModalLogout = ({ onCloseModalLogout, onLogout }) => {
  const handleLogout = () => {
    onLogout();
    onCloseModalLogout();
  };
  return (
    <>
      <ModalBackdrop onClose={onCloseModalLogout}>
        <div className={styleModalLogout.modalSize}>
          <h2 className={styleModalLogout.modalTitleText}>
            Ви дійсно бажаєте вийти?
          </h2>

          <div className={styleModalLogout.prizeContainer} />
          <div className={styleModalLogout.buttonContainer}>
            <button
              className={styleModalLogout.point_amount}
              onClick={handleLogout}
            >
              Так
            </button>
            <button
              onClick={onCloseModalLogout}
              className={styleModalLogout.point_amount}
            >
              Ні
            </button>
          </div>
        </div>
      </ModalBackdrop>
    </>
  );
};
const mapDispatchToProps = dispatch => ({
  onCloseModalLogout: () => dispatch(ModalLogoutClosed()),
  onLogout: () => dispatch(logout()),
});
export default connect(null, mapDispatchToProps)(ModalLogout);
