import types from '../types';

// register
export const startRegister = () => ({
  type: types.START_REGISTER,
});
export const successRegister = data => ({
  type: types.SUCCESS_REGISTER,
  payload: { data },
});
export const errorRegister = error => ({
  type: types.ERROR_REGISTER,
  payload: { error },
});

// login
export const startLogin = () => ({
  type: types.START_LOGIN,
});
export const successLogin = data => ({
  type: types.SUCCESS_LOGIN,
  payload: { data },
});
export const errorLogin = error => ({
  type: types.ERROR_LOGIN,
  payload: { error },
});

// logout
export const startLogout = () => ({
  type: types.START_LOGOUT,
});
export const successLogout = () => ({
  type: types.SUCCESS_LOGOUT,
});
export const errorLogout = error => ({
  type: types.ERROR_LOGOUT,
  payload: { error },
});

// refresh user
export const startRefreshUser = () => ({
  type: types.START_REFRESH_USER,
});
export const successRefreshUser = data => ({
  type: types.SUCCESS_REFRESH_USER,
  payload: { data },
});
export const errorRefreshUser = error => ({
  type: types.ERROR_REFRESH_USER,
  payload: { error },
});

// set token to redux
export const googleToken = userToken => ({
  type: types.SET_TOKEN_IN_STORE,
  payload: { token: userToken },
});

// set name to redux store
export const setName = name => ({
  type: types.SET_USER_NAME_TO_STORE,
  payload: { name },
});

// set avatar to redux store
export const setAvatar = avatar => ({
  type: types.SET_USER_AVATAR_TO_STORE,
  payload: { avatar },
});
