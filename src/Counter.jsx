import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus, reset } from './redux/slices/counterSlice'

const Counter = () => {
    const { counterData } = useSelector((state)=>state.counter)
    const dispach=useDispatch()

    const increment=()=>{
        dispach(plus())
    }
  return (
    <div>
        <h1>{ counterData}</h1>
        <button onClick={increment}>+</button>
        <button onClick={()=>{ dispach(minus())}}>-</button>
        <button onClick={()=>{ dispach(reset())}}>reset</button>
    </div>
  )
}

export default Counter