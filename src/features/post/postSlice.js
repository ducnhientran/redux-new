import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postsApi from '../../api/postsApi';

export const getAllPosts = createAsyncThunk('posts/getAllPosts',
    async (params) => {
       const response = await postsApi.getAll(params);
        return response
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data:[]

    },
    reducers: {
       
    },
    extraReducers: {
        [getAllPosts.pending]: (state, action) => { 
            
        },
        [getAllPosts.fulfilled]: (state, action) => { 
           state.data = action.payload;
        },
        [getAllPosts.rejected]: (state, action) => { 
          
        }
    },
    
});

const postsReducer = postsSlice.reducer;

export default postsReducer;