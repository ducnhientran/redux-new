import { configureStore } from "@reduxjs/toolkit";
import photosReducer from '../features/photo/photoSlice'
import postsReducer from "../features/post/postSlice";
import todosReducer from '../features/todos/todosSlice'

const rootReducer = {
    photos: photosReducer,
    posts: postsReducer,
    todosReducer: todosReducer,
 
  }
  
const store = configureStore({
    reducer : rootReducer,
})

export default store;