import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deletetodo} from './store/todoSlice'

function Viewtodo() {
    const [title, settitle] = useState('')
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log('.....',state)
    const handleDelete = (id)=>{
         dispatch(deletetodo(id))
    }
    return (
        <div>{title}
            {
                state.map((item)=>(
                    <div key={item.id}>
                        {item.title}
                    <button onClick={()=>handleDelete(item.id)}>X</button>
                     </div>
                ))
                //sdadas
            }
        </div>
    )
}

export default Viewtodo
