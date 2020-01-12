import React from 'react';
import * as moment from 'moment';
// import 'moment/locale/uk';
import PropTypes from 'prop-types';
import s from './CurrentWeekRange.module.css';

const CurrentWeekRange = () => {
  const startOfWeek = moment()
    .startOf('week')
    .format('DD');
  const endOfWeek = moment()
    .endOf('week')
    .format('DD');

  // функция получения месяца, из того что в сторе
  function getThisMonth() {
    const monthes = [
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

    return monthes[moment().get('M')];
  }
  const month = getThisMonth(moment().get('M'));

  return (
    <div className={s.wrapper}>
      <p className={s.week}>
        Тиждень: {Number(startOfWeek)}-{Number(endOfWeek)} {month}
      </p>
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
