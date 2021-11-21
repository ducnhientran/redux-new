import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import todosApi from '../../api/todosApi';


// The second way: get jobs using api: must be in head of page
export const getTodos = createAsyncThunk('todos/getTodos',
    async (params) => {
       const response = await todosApi.getAll(params);
        // const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        return response
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos:[]
    },
    reducers: {
        // fetchJobs(state, action){
        //     state.allTodos = action.payload;
        // },
        addJob:{
            reducer(state, action){
                state.allTodos = [...state.allTodos, action.payload]
            },
            prepare(title){
               return {
                   payload: {
                    id: nanoid(),
                    title,
                    completed: false
                   }
               }     
            }
        },
        deleteJob(state, action){
            state.allTodos = state.allTodos.filter(job => job.id !== action.payload)
        },
		markComplete(state, action) {
            const id = action.payload;
            state.allTodos = state.allTodos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;    
                }
                return todo;
            }) 
        }
    },
    extraReducers: {
        [getTodos.pending]: (state, action) => {
            console.log("getTodos pending.....");
        },
        [getTodos.fulfilled]: (state, action) => {
            console.log("getTodos fulfilled.....");
            state.allTodos =  action.payload
        },
        [getTodos.rejected]: (state, action) => {
            console.log("getTodos rejected.....");
        }
    },
    
});


// First way: get jobs using api
// export const getTodos = () => async dispatch => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');    
//         dispatch(fetchJobs(response.data))
//     } catch (error) {
//         console.log(error);
//     }
// }




// Reducer
const todosReducer = todosSlice.reducer;

// Selector
export const todosSelector = state =>  state.todosReducer.allTodos;

// Action export
 export const {fetchJobs, markComplete, addJob, deleteJob} = todosSlice.actions;


export default todosReducer;
