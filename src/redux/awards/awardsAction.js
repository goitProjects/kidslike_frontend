import types from '../types';

export const addAwardsCardAction = awards => ({
  type: types.ADD_AWARDS_SELECTED,
  payload: { awards },
});

export const removeAwardsCardAction = id => ({
  type: types.REMOVE_AWARDS_SELECTED,
  payload: {
    id,
  },
});

// export const sumAwardsCardAction = value => ({
//   type: types.SUM_AWARDS_SELECTED,
//   payload: {
//     value,
//   },
// });

export const toggleSelectedCardAction = (id, points, isSelected) => ({
  type: types.AWARDS_CHANGES_TOGGLE_SELECTED,
  payload: {
    id,
    points,
    isSelected,
  },
});

export const startRemoveUserPointsAction = () => ({
  type: types.START_REMOVE_POINTS_USER,
});

export const successRemoveUserPointsAction = newPoints => ({
  type: types.SUCCESS_REMOVE_POINTS_USER,
  payload: { newPoints },
});

export const errorRemoveUserPointsAction = () => ({
  type: types.ERROR_REMOVE_POINTS_USER,
});
