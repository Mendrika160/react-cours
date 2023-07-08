import React,{ useState } from "react";

export const useIncrement = (intialValue = 0,step = 1) => {
    const [count,setCount] = useState(intialValue)

    const increment = () => {
        setCount((prevState)=> prevState + step);
    }

    return [
        count,
        increment
    ]

}

