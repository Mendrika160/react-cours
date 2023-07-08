import React,{useState} from "react"

export const useToggle = (isToggle = true) => {
    const [compteurVisible,setcompteurVisible] = useState(isToggle)

    const toggleCompteur = () => {
        setcompteurVisible(previousState => !previousState)

    }

    return [
        compteurVisible,
        toggleCompteur
    ]

}