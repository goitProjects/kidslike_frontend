import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import routes from '../../routes/routes';
import { ModalLogoutOpen } from '../../redux/global/globalActions';
import styles from './HeaderModal.module.css';

const HeaderModal = ({ isAuth, onClose, isModalLogoutOpen }) => {
  const handleMenuClose = () => {
    isModalLogoutOpen();
    onClose();
  };

  const currentDay = moment().format('dddd');
  const menuItemsArr = [
    {
      path: {
        pathname: '/',
        search: `?day=${currentDay}&unix-date=${Date.now()}`,
      },
      // name: 'Головна',
      name: 'Главная',
      protected: true,
    },
    {
      path: routes.AUTH_PAGE.path,
      // name: 'Авторизація',
      name: 'Авторизация',
      protected: false,
    },
    { path: routes.PLANNING_PAGE.path, name: 'Планирование', protected: true },
    { path: routes.AWARDS_PAGE.path, name: 'Награды', protected: true },
    { path: routes.CONTACTS_PAGE.path, name: 'Контакты', protected: false },
  ];
  const renderLinks = menuItemsArr.filter(el =>
    isAuth ? el.path !== routes.AUTH_PAGE.path && true : !el.protected,
  );

  const menuItemsRender = renderLinks.map(el => (
    <li key={el.path} className={styles.navigationItem}>
      <NavLink
        onClick={onClose}
        exact
        className={styles.widgetListNav}
        activeStyle={{ color: 'black' }}
        to={el.path}
      >
        {el.name}
      </NavLink>
    </li>
  ));
  const closeModalOverlay = e => {
    if (e.currentTarget && e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };
  return (
    <div
      onClick={closeModalOverlay}
      role="presentation"
      className={styles.overlay}
    >
      <div className={styles.widget}>
        <button className={styles.close} onClick={onClose} type="button" />
        <ul className={styles.widgetList}>{menuItemsRender}</ul>
        {isAuth && (
          <button
            className={styles.exitButton}
            type="button"
            onClick={handleMenuClose}
          >
            {/* Вийти */}
            Выйти
          </button>
        )}
      </div>
    </div>
  );
};

HeaderModal.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isModalLogoutOpen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = dispatch => ({
  isModalLogoutOpen: () => dispatch(ModalLogoutOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderModal);
