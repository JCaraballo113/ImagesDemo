import React from 'react';

export default ({ handleDelete, image, index }) => {
  return (
    <div className="image_box">
      <span className="image_delete" onClick={() => handleDelete(image, index)}>X</span>
      <img  className="dropzone__image" src={image.url} />
    </div>
  )
};