import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Viewtodo from './Viewtodo'
import { addtodo, fetchPost } from './store/todoSlice'
import { v4 as uuidv4 } from 'uuid'
function AddTodo() {
    const dispatch = useDispatch()
    const [task, settask] = useState({})
    const [title, settitle] = useState()
    const handleChange = (e) => {
        settitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // settask({
        //     title: title,
        //     id: uuidv4()
        // })
        dispatch(addtodo(title))
        console.log(e.target[0].value)
        e.target[0].value=''

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            <button onClick={()=>dispatch(fetchPost())}>Post</button>
            <Viewtodo />
        </div>
    )
}

export default AddTodo
