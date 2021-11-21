import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PhotoList from '../../components/photolist';
import { removePhoto } from '../../photoSlice';
import './Main.scss'

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos);
  const navigate = useNavigate();

  const handlePhotoEditClick = (photo) => {
    console.log('Edit: ', photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    navigate(editPhotoUrl);
  }

  const handlePhotoRemoveClick = (photo) => {
    console.log('Remove: ', photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  }

  return (
    <div className="photo-main" >
           <PhotoList
            photoList={photos}
            onPhotoEditClick={handlePhotoEditClick}
            onPhotoRemoveClick={handlePhotoRemoveClick}
        />
        
    </div>
  );
}

export default MainPage;