import React,{useState} from 'react'
import { useIncrement } from '../../hooks/useIncrement';




const Compteur = () => {
    const [count,increment] = useIncrement(0,2);

    return (
        <div>
            <button onClick={increment}>increment {count}</button>
        </div>
  )
}

export default Compteur