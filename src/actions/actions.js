import { SET_IMAGES, SET_MULTIPLE_IMAGES, REMOVE_IMAGE } from './actionTypes';
import firebase from 'firebase';

export const setImages = (imageFile) => {
  return {
    type: SET_IMAGES,
    payload: imageFile
  }
}

export const setMultiImages = (imagesArray) => {
  return {
    type: SET_MULTIPLE_IMAGES,
    payload:imagesArray
  }
}

export const removeImage = (index) => {
  return {
    type: REMOVE_IMAGE,
    payload: index
  }
}

export const removeImageAsync = (image, index) => {
  return (dispatch) => {
    firebase.storage().ref().child(image.fullPath).delete().then(() => {
      firebase.database().ref(`images/${image.imagePath}`).remove().then(() => {
        dispatch(removeImage(index));
      })
    });
  }
}