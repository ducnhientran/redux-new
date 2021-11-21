import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../photocard';

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onPhotoEditClick: null,
  onPhotoRemoveClick: null,
};

function PhotoList(props) {
  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

  return (
    <>
      {photoList.map(photo => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
      ))}
    </>
  );
}

export default PhotoList;