import types from '../types';
// -------------LOADER------------------
export const LoaderStart = () => ({
  type: types.LOADER_START,
});

export const LoaderStop = () => ({
  type: types.LOADER__STOP,
});

// -----------NewTaskModal------------------
export const NewTaskModalOpen = () => ({
  type: types.NEW_TASK_MODAL_OPEN,
});

export const NewTaskModalClosed = () => ({
  type: types.NEW_TASK_MODAL_CLOSED,
});

// ----------ModalCongrats-----------------
export const ModalCongratsOpen = () => ({
  type: types.MODAL_CONGRATS_OPEN,
});

export const ModalCongratsClosed = () => ({
  type: types.MODAL_CONGRATS_CLOSED,
});

// ----------ModalLogout-------------------
export const ModalLogoutOpen = () => ({
  type: types.MODAL_LOGOUT_OPEN,
  payload: true,
});

export const ModalLogoutClosed = () => ({
  type: types.MODAL_LOGOUT_CLOSED,
  payload: false,
});
