import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

// import days from '../../utils/days.json';
import { useSelector } from 'react-redux';
import daysRu from '../../utils/days.json';
import daysUa from '../../utils/daysUkr.json';

import WeekTabsMobile from '../../components/WeekTabsMobile/WeekTabsMobile';
import WeekTabsTablet from '../../components/WeekTabsTablet/WeekTabsTablet';
import WeekTabsDesktop from '../../components/WeekTabsDesktop/WeekTabsDesktop';
import windowWidth from '../../utils/windowWidth';
import WeekTabsContent from '../../components/WeekTabsContent/WeekTabsContent';
import s from './MainPage.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

// export default class MainPage extends Component {
//   static propTypes = {
//     history: PropTypes.string.isRequired,
//   };

//   componentDidMount() {
//     const { history } = this.props;
//     const weekDay = moment().format('dddd');

//     history.replace({
//       pathname: '/',
//       search: `?day=${weekDay.toLowerCase()}`,
//     });
//   }

//   render() {
//     return (
//       <div className={s.mainDiv}>
//         {windowWidth < 768 && <WeekTabsMobile days={days} />}
//         {windowWidth >= 768 && windowWidth < 1280 && (
//           <WeekTabsTablet days={days} />
//         )}
//         {windowWidth >= 1280 && <WeekTabsDesktop days={days} />}
//         <WeekTabsContent />
//       </div>
//     );
//   }
// }

const setMainPath = () => {
  const weekDay = moment().get('day') || 7;
  if (weekDay >= 0) {
    // const stringDay = days[weekDay - 1].url;
    const stringDay = daysRu[weekDay - 1].url;
    return `?day=${stringDay}`;
  }
  return '';
};

const MainPage = () => {
  const IsShowLengRu = useSelector(getIsShowLengRu);

  const history = useHistory();
  const day = setMainPath();

  let days;
  if (!IsShowLengRu) {
    days = daysUa;
  } else {
    days = daysRu;
  }

  useEffect(() => {
    history.push(day);
  }, [day, history]);

  return (
    <div className={s.mainDiv}>
      {windowWidth < 768 && <WeekTabsMobile days={days} />}
      {windowWidth >= 768 && windowWidth < 1280 && (
        <WeekTabsTablet days={days} />
      )}
      {windowWidth >= 1280 && <WeekTabsDesktop days={days} />}
      <WeekTabsContent />
    </div>
  );
};

export default MainPage;
