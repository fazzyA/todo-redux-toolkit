import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const todoSlice = createSlice({
    name: 'todo',
    initialState: [{title:'buy milk', id:1}],
    reducers: {
        addtodo: {
        reducer(state, action){
            console.log(action.payload)
            let newObj = action.payload
            // let {id, title} = newObj
            let newState =  [...state, newObj]
            return newState

        },
        prepare(title){
            return { payload:{title:title, id:uuidv4()}}
        }
    },
    deletetodo: {
        reducer(state, action){
            console.log(action.payload.id)
            let newState1 = state.filter(item=>item.id!=action.payload.id)
            return newState1

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
    }
})
export const { addtodo, deletetodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer