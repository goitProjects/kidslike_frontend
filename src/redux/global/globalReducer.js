import { combineReducers } from 'redux';
import types from '../types';
// ----------------Loader----------------------------------------

const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case types.LOADER_START:
    case types.START_CREATE_TASK:
    case types.START_REMOVE_POINTS_USER:
    case types.START_LOGOUT:
      return true;
    case types.LOADER__STOP:
    case types.SUCCESS_CREATE_TASK:
    case types.ERROR_CREATE_TASK:
    case types.SUCCESS_REMOVE_POINTS_USER:
    case types.ERROR_REMOVE_POINTS_USER:
    case types.SUCCESS_LOGOUT:
    case types.ERROR_LOGOUT:
      return false;

    default:
      return state;
  }
};

// -----------NewTaskModalReducer ------------------

const newTaskModalReducer = (state = false, action) => {
  switch (action.type) {
    case types.NEW_TASK_MODAL_OPEN:
      return true;
    case types.NEW_TASK_MODAL_CLOSED:
      return false;

    default:
      return state;
  }
};

// ----------ModalCongratsReducer -----------------

const ModalCongratsReducer = (state = false, action) => {
  switch (action.type) {
    case types.MODAL_CONGRATS_OPEN:
      return true;
    case types.MODAL_CONGRATS_CLOSED:
      return false;

    default:
      return state;
  }
};

// ----------ModalLogoutReducer -------------------

const ModalLogoutReducer = (state = false, action) => {
  switch (action.type) {
    case types.MODAL_LOGOUT_OPEN:
      return true;
    case types.MODAL_LOGOUT_CLOSED:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  isLoading: loaderReducer,
  isNewTaskModalOpen: newTaskModalReducer,
  isModalCongratsOpen: ModalCongratsReducer,
  isModalLogoutOpen: ModalLogoutReducer,
});
