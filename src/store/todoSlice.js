import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fetchPost = createAsyncThunk(
    'fetchposts',
    async (data, thunkAPI)=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.json()
    }
);

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{title:'buy milk', id:1}],
        posts: []
    }
   ,
    reducers: {
        addtodo: {
        reducer(state, action){
            console.log(action.payload)
            let newObj = action.payload
            // let {id, title} = newObj
             state.todos =  [...state.todos, newObj]
            return state

        },
        prepare(title){
            return { payload:{title:title, id:uuidv4()}}
        }
    },
    deletetodo: {
        reducer(state, action){
            console.log(action.payload.id)
             state.todos = state.todos.filter(item=>item.id!=action.payload.id)
            return state

        },
        prepare(id){
            return {payload: {id}}
        }
    }

        // deletetodo(state,action){
        //     console.log(action.payload)
        //     let newState1 = state.filter(
        //         (item)=> item.id !== action.payload
        //     )
        //     return newState1
        // }
    },
    extraReducers: {
        [fetchPost.fulfilled] : (state, action) =>{
            console.log(action.payload.slice(0,10))
             state.posts=action.payload.slice(0,10)
        }
    }
})
export const { addtodo, deletetodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer