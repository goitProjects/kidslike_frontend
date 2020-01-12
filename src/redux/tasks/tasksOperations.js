/* eslint-disable no-underscore-dangle */
// import axios from 'axios';
import { toast } from 'react-toastify';
import {
  startCreateTaskAction,
  successCreateTaskAction,
  errorCreateTaskAction,
} from './tasksActions';
import { postTask, taskUpdate } from '../../services/api';
import { fetchingTask } from '../../components/CardsList/CardsListModule';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from '../auth/authSelectors';
import { getTasks } from './tasksSelector';

toast.configure();

export const createTaskOperation = task => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  dispatch(startCreateTaskAction());

  postTask(task, token)
    .then(res => {
      dispatch(successCreateTaskAction(res.data.tasks));
      toast.info('🦄 Завдання додано!', {
        autoClose: 2000,
      });
    })
    .catch(() => {
      toast.error('🙈 Завдання не додано! Помилка!');
      return dispatch(errorCreateTaskAction());
    });
};

export const changeTaskTodayOperation = id => (dispatch, getState) => {
  const token = getToken(getState());
  const items = getTasks(getState());
  const taskToUpdate = fetchingTask(id, items);

  if (token) {
    taskUpdate(id, taskToUpdate, token);
  }
};

export const changeTasksPlanningOperation = id => (dispatch, getState) => {
  const token = getToken(getState());
  const items = getTasks(getState());
  const taskToUpdate = fetchingTask(id, items);

  taskUpdate(id, taskToUpdate, token);
};
