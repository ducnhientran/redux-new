import React from 'react';
import './PostCard.scss'


function PostCard(props) {
    
    const {data} = props;

    return (
        <div className='news'>
            <p className='news__title'>{data.title}</p>
            <p>{data.body}</p>
        </div>
    );
}

export default PostCard;