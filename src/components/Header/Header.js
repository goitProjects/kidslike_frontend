import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import * as moment from 'moment';
import { connect } from 'react-redux';
import slideTransition from '../../transitions/fade.module.css';
import Navigation from '../Navigation/Navigation';
import HeaderModal from '../HeaderModal/HeaderModal';
import ModalLogout from '../ModalLogout/ModalLogout';
import UserInfo from '../UserInfo/UserInfo';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/header-icons/burger.svg';
import logoMobile from '../../assets/icons/header-icons/Logo_mobile.png';

class Header extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    isModalLogoutOpen: PropTypes.bool.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    const unixDate = Date.now();
    const currentDay = moment().format('dddd');
    const { isAuth } = this.props;
    const { isModalLogoutOpen } = this.props;

    return (
      <>
        <CSSTransition
          in={isModalOpen}
          timeout={1000}
          unmountOnExit
          classNames={slideTransition}
        >
          <HeaderModal onClose={this.closeModal} />
        </CSSTransition>
        <header className={styles.header}>
          <Link
            to={{
              pathname: '/',
              search: `?day=${currentDay}&unix-date=${unixDate}`,
            }}
          >
            <img className={styles.siteLogo} alt="SiteLogo" src={logoMobile} />
          </Link>
          <div className={styles.navControls}>
            <Navigation />
            <div className={styles.authModule}>
              {isAuth && <UserInfo />}
              <button
                onClick={this.openModal}
                className={styles.button}
                type="button"
              >
                <Logo />
              </button>
            </div>
          </div>
        </header>
        {isModalLogoutOpen && <ModalLogout />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  isModalLogoutOpen: state.global.isModalLogoutOpen,
});

export default connect(mapStateToProps)(Header);
