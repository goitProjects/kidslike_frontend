import { combineReducers } from 'redux';
import types from '../types';

const user = (state = { points: 0 }, { type, payload }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
      return {
        // eslint-disable-next-line no-underscore-dangle
        userId: payload.data.user._id,
        email: payload.data.user.email,
        points: payload.data.user.points,
      };

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.SUCCESS_LOGOUT:
    case types.ERROR_REFRESH_USER:
      return { points: 0 };

    case types.SUCCESS_REFRESH_USER:
      return {
        // eslint-disable-next-line no-underscore-dangle
        userId: payload.data._id,
        email: payload.data.email,
        points: payload.data.points,
      };

    case types.SET_USER_NAME_TO_STORE:
      return { ...state, name: payload.name };

    case types.SET_USER_AVATAR_TO_STORE:
      return { ...state, avatar: payload.avatar };

    case types.SUCCESS_REMOVE_POINTS_USER:
      return { ...state, points: payload.newPoints };

    case types.AWARDS_CHANGES_TOGGLE_SELECTED:
      return {
        ...state,
        points: payload.isSelected
          ? state.points + payload.points
          : state.points - payload.points,
      };
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
      return payload.data.token;

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.SUCCESS_LOGOUT:
      return null;

    case types.SET_TOKEN_IN_STORE:
      return payload.token;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.ERROR_LOGOUT:
    case types.ERROR_REFRESH_USER:
      return payload.error;

    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
    case types.SUCCESS_LOGOUT:
    case types.SUCCESS_REFRESH_USER:
      return null;

    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.START_REGISTER:
    case types.START_LOGIN:
    case types.START_REFRESH_USER:
      return true;

    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.SUCCESS_REFRESH_USER:
    case types.ERROR_REFRESH_USER:
      return false;

    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
    case types.SUCCESS_REFRESH_USER:
      return true;

    case types.SUCCESS_LOGOUT:
    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.ERROR_LOGOUT:
    case types.ERROR_REFRESH_USER:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  error,
  isLoading,
  isAuth,
});
