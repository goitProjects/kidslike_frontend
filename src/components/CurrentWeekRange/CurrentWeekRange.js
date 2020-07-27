import React from 'react';
import * as moment from 'moment';
// import 'moment/locale/uk';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import s from './CurrentWeekRange.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const CurrentWeekRange = () => {
  const startOfWeek = moment()
    .startOf('week')
    .format('DD');
  const endOfWeek = moment()
    .endOf('week')
    .format('DD');

  const isShowLangRu = useSelector(getIsShowLengRu);

  // функция получения месяца, из того что в сторе
  function getThisMonth() {
    let monthes;
    if (!isShowLangRu) {
      monthes = [
        'сiчня',
        'лютого',
        'березеня',
        'квiтня',
        'травня',
        'червня',
        'липня',
        'серпня',
        'вересеня',
        'жовтня',
        'листопадя',
        'грудня',
      ];
    } else {
      monthes = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'октября',
        'Ноября',
        'Декабря',
      ];
    }

    return monthes[moment().get('M')];
  }
  const month = getThisMonth(moment().get('M'));

  return (
    <div className={s.wrapper}>
      {!isShowLangRu ? (
        <p className={s.week}>
          Тиждень: {Number(startOfWeek)}-{Number(endOfWeek)} {month}
        </p>
      ) : (
        <p className={s.week}>
          Неделя: {Number(startOfWeek)}-{Number(endOfWeek)} {month}
        </p>
      )}
    </div>
  );
};

CurrentWeekRange.propTypes = {
  // dateStart: PropTypes.string.isRequired,
  // dateTo: PropTypes.string.isRequired,
  dayTo: PropTypes.string,
  dayFrom: PropTypes.string,
}.isRequired;

export default CurrentWeekRange;
