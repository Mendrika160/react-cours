import React,{useReducer} from 'react'
import { reducer } from './reduce'

const init = (initialValue) => {
    return {count : initialValue}
}

const Reducer = () => {

    const defaultValue = 0;
    const [count, dispatch] = useReducer(reducer,defaultValue,init)
    
   
    return (
        <div>
            <p>Reducer : {JSON.stringify(count)}</p> 
            <button onClick={() => dispatch({type : "increment",payload: 10})}>increment by 10</button>
            <button onClick={() => dispatch({type : "decrement"})}>decrement</button>
        </div>
    )
}

export default Reducer