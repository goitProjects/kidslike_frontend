/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect, useSelector } from 'react-redux';
import styleModalLogout from './ModalLogout.module.css';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import { ModalLogoutClosed } from '../../redux/global/globalActions';
import { logout } from '../../redux/auth/authOperation';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const ModalLogout = ({ onCloseModalLogout, onLogout }) => {
  const handleLogout = () => {
    onLogout();
    onCloseModalLogout();
  };

  const isShowLangRu = useSelector(getIsShowLengRu);

  return (
    <>
      <ModalBackdrop onClose={onCloseModalLogout}>
        <div className={styleModalLogout.modalSize}>
          <h2 className={styleModalLogout.modalTitleText}>
            {!isShowLangRu
              ? 'Ви дійсно бажаєте вийти?'
              : 'Вы действительно хотите выйти?'}
          </h2>

          <div className={styleModalLogout.prizeContainer} />

          <div className={styleModalLogout.buttonContainer}>
            <button
              className={styleModalLogout.point_amount}
              onClick={handleLogout}
            >
              {!isShowLangRu ? 'Так' : 'Да'}
            </button>
            <button
              onClick={onCloseModalLogout}
              className={styleModalLogout.point_amount}
            >
              {!isShowLangRu ? 'Ні' : 'Нет'}
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
