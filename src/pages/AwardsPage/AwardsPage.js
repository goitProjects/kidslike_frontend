import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ModalCongratsOpen,
  ModalCongratsClosed,
} from '../../redux/global/globalActions';
import style from './AwardsPage.module.css';
import AwardsTitle from '../../components/AwardsTitle/AwardsTitle';
import ContainerList from '../../components/CardsList';
import AwardsSubmitButton from '../../components/AwardsSubmitButton/AwardsSubmitButton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
import { submitAwardOperation } from '../../redux/awards/awardsOperation';

//= =
const arrT = [
  'сладости',
  'Поход в кино',
  'подарок',
  'вечер пиццы',
  'Вечеринка с друзьями',
  'Поход в Макдональдс',
  'желание',
  'Поход на каток',
];

// const arr = [
//   'Солодощі',
//   'Похід у кіно',
//   'Подарунок',
//   'Вечір піцци',
//   'Вечірка з друзями',
//   'Похід у Макдональдс',
//   'Бажання',
//   'Похід на ковзанку',
// ];

//= =

const AwardsPage = ({ isOpen, modalOpen, onClose, userPoints }) => {
  // const awards = useSelector(state => state.awards.arrayAwards);

  //= =
  // const aaa = awards.map(item => item.title);
  // console.log('aaa', aaa);
  let awards = useSelector(state => state.awards.arrayAwards);
  // console.log('awards000', awards);
  awards = awards.map((item, idx) => ({ ...item, title: arrT[idx] }));
  // console.log('awards111', awards);

  //= =

  const activeButton = useSelector(state => state.awards.totalPoints);

  return (
    <div className={style.wrapper_awards}>
      {isOpen && (
        <ModalCongrats
          onClose={onClose}
          awards={awards}
          userPoints={userPoints}
        />
      )}
      <div className={style.present_cards}>
        <div className={style.present_items}>
          <AwardsTitle />
          <ProgressBar />
        </div>
        <div className={style.card_list_wrapper}>
          {awards && <ContainerList arr={awards} />}
        </div>
        {activeButton > 0 && <AwardsSubmitButton onClick={modalOpen} />}
      </div>
    </div>
  );
};

AwardsPage.propTypes = {
  userPoints: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: state.global.isModalCongratsOpen,
});

const mapDispatchToProps = dispatch => ({
  modalOpen: () => dispatch(ModalCongratsOpen()),
  onClose: () => dispatch(ModalCongratsClosed()),
  userPoints: () => dispatch(submitAwardOperation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AwardsPage);
