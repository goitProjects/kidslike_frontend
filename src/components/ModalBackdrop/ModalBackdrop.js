/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalBackdrop.module.css';

export default class ModalBackdrop extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode !== 27) {
      return;
    }

    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className={styles.backdrop}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}
