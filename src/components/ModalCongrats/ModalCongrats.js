/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import CardBody from '../CardBody/CardBody';
import catTop from '../../assets/images/Modal/catTransparent.png';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import styleModalCongrats from './ModalCongrats.module.css';
import AwardsSubmitButton from '../AwardsSubmitButton/AwardsSubmitButton';

const ModalCongrats = ({ onClose, awards, userPoints }) => {
  // console.log(awards);
  const filteredAwards = awards.filter(award => award.isSelected);
  const result = filteredAwards.reduce((acc, el) => acc + el.taskPoints, 0);

  return (
    <>
      <ModalBackdrop onClose={onClose}>
        <div className={styleModalCongrats.modalSize}>
          <img className={styleModalCongrats.catTop} src={catTop} alt="" />
          <h2 className={styleModalCongrats.modalTitleText}>
            Вітаємо! Ти отримуєш:
          </h2>
          <div className={styleModalCongrats.prizeContainer}>
            <ul className={styleModalCongrats.prizeContainerList}>
              {filteredAwards.map(el => (
                <li
                  key={el._id}
                  className={styleModalCongrats.prizeContainerItem}
                >
                  {/* {el.title} */}
                  {/* <img src={`.${el.imgName}`} alt="" /> */}
                  <CardBody
                    img={el.imgName}
                    alt={el.title}
                    addClass={styleModalCongrats.imagePrize}
                  />

                  <p className={styleModalCongrats.prizeContainerItemText}>
                    {el.taskPoints} балів
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p className={styleModalCongrats.prizeContainerItemText}>
            Сумарна кількість балів: {result}
          </p>

          <div className={styleModalCongrats.buttonContainer}>
            {/* <button className={styleModalLogout.point_amount_long}>
              <p className={styleModalLogout.point_amount_p}>Підтвердити!</p>
            </button> */}
            <AwardsSubmitButton buttonText="Підтвердити" onClick={userPoints} />
          </div>
        </div>
      </ModalBackdrop>
    </>
  );
};

ModalCongrats.propTypes = {
  onClose: PropTypes.func.isRequired,
  userPoints: PropTypes.func.isRequired,
  awards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ModalCongrats;
