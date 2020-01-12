import AuthPage from '../pages/AuthPage/AuthPage';
import MainPage from '../pages/MainPage/MainPage';
import PlanningPage from '../pages/PlanningPage/PlanningPage';
import AwardsPage from '../pages/AwardsPage/AwardsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';

export default {
  AUTH_PAGE: {
    path: '/auth',
    component: AuthPage,
  },
  MAIN_PAGE: {
    path: '/',
    component: MainPage,
  },
  PLANNING_PAGE: {
    path: '/planning',
    component: PlanningPage,
  },
  AWARDS_PAGE: {
    path: '/awards',
    component: AwardsPage,
  },
  CONTACTS_PAGE: {
    path: '/contact-us',
    component: ContactsPage,
  },
};
