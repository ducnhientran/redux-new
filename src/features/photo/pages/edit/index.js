import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams , useNavigate} from 'react-router-dom';
import { updatePhoto } from '../../photoSlice';

function EditPhoto(props) {
    const [title, setTitle] = useState('');
    
    const { photoId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    console.log('photoId edit', photoId);
    const editPhoto = useSelector(state => {
        return state.photos.find(x => x.id === +photoId);
    })
    const initPhoto = editPhoto;
    

    useEffect(()=>{
        setTitle(editPhoto.title)
    },[])

    const handleCancelEditPhoto = () => {
        navigate('/photos');
    }
    const handleUpdateEditPhoto = () => {
        const photo =  {
            id: initPhoto.id,
            categoryId: initPhoto.categoryId,
            photo: initPhoto.photo,
            title: title
          }
        dispatch(updatePhoto(photo))
        navigate('/photos');
    }
    
    return (
        <div>
             <img src={editPhoto.photo} alt={editPhoto.title} />
             <input 
                type='text' 
                value={title} 
                onChange = {e => setTitle(e.target.value)}
            
             /> 
             <button type='button'  onClick = {() => handleUpdateEditPhoto()} >Save</button>
             <button type='button' onClick = {() => handleCancelEditPhoto()}>Cancel</button>
        </div>
    );
}

export default EditPhoto;