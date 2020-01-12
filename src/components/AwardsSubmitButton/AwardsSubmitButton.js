import React from 'react';
import PropTypes from 'prop-types';
import style from './AwardsSubmitButton.module.css';

const AwardsSubmitButton = ({ onClick, buttonText }) => {
  return (
    <div className={style.present_button}>
      <button onClick={onClick} className={style.button} type="submit">
        {buttonText}
      </button>
    </div>
  );
};

AwardsSubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

AwardsSubmitButton.defaultProps = {
  buttonText: 'OK',
};

export default AwardsSubmitButton;
