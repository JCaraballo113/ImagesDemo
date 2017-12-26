import { FETCH_IMAGES, SET_IMAGES, REMOVE_IMAGE, SET_MULTIPLE_IMAGES } from '../actions/actionTypes';

export default (state=[], action) => {
  switch(action.type) {
    case SET_IMAGES:
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    case SET_MULTIPLE_IMAGES:
      return [...state, ...action.payload];
    case REMOVE_IMAGE:
      const stateCopy = state;
      return stateCopy.filter((image, index) => index !== action.payload);
    default:
      return state;
  }
};