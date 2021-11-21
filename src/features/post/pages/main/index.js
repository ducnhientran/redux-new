import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PagingPost from '../../components/paging';
import PostList from '../../components/postlist';
import { getAllPosts } from '../../postSlice';

const MainPost = () => {  
    const posts = useSelector(state => state.posts.data);  
    const [paramSearch, setParamSearch] = useState( {
            _page: 1,
            _limit: 5,
    });
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(getAllPosts(paramSearch));
    },[paramSearch]);
   
    const handlePrevClick = () => {

        setParamSearch({
            _page: +paramSearch._page - 1,
            _limit: paramSearch._limit,
        })
    }

    const handleNextClick = () => {
        setParamSearch({
            _page: +paramSearch._page + 1,
            _limit: paramSearch._limit,
        })
    }

    const handlePageNumClick = (pageNum) =>{
        setParamSearch({
            _page: pageNum,
            _limit: paramSearch._limit,
        })
    }   

    return (
        <div>
            <PostList postList={posts}/>
            <PagingPost
                paramSearch = {paramSearch}
                onPrev = {handlePrevClick}
                onNext = {handleNextClick}
                onPageNum = {handlePageNumClick}
            />
        </div>
    );
}

export default MainPost;