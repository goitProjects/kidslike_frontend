/* eslint-disable no-underscore-dangle */
import types from '../types';
import awards from '../../utils/awards';

const updateTotalPoints = updateAwards =>
  updateAwards.reduce(
    (acc, el) => (el.isSelected && acc + el.taskPoints) || acc,
    0,
  );

const awardsReducer = (
  state = { arrayAwards: awards, totalPoints: 0 },
  { type, payload },
) => {
  switch (type) {
    case types.ADD_AWARDS_SELECTED: {
      const updateAwards = [...state.arrayAwards, payload.awards];

      return {
        ...state,
        arrayAwards: updateAwards,
        totalPoints: updateTotalPoints(updateAwards),
      };
    }

    case types.REMOVE_AWARDS_SELECTED:
      return {
        ...state,
        arrayAwards: state.arrayAwards.filter(el => el.id !== payload.id),
      };

    case types.AWARDS_CHANGES_TOGGLE_SELECTED: {
      const updateAwards = state.arrayAwards.map(el =>
        el._id === payload.id ? { ...el, isSelected: !el.isSelected } : el,
      );
      return {
        ...state,
        arrayAwards: updateAwards,
        totalPoints: updateTotalPoints(updateAwards),
      };
    }

    case types.SUCCESS_REMOVE_POINTS_USER:
    case types.SUCCESS_REFRESH_USER:
    case types.SUCCESS_LOGOUT:
      return { arrayAwards: awards, totalPoints: 0 };

    default:
      return state;
  }
};

export default awardsReducer;
