import React from 'react'
import { useToggle } from '../../hooks/useToggle';

const Toggle = () => {

    const [compteurVisible, toggleCompteur] = useToggle(true)

    return (
        <div>
            Toggle
            <input type="checkbox" checked={compteurVisible} onChange={toggleCompteur}/>
        </div>
    )
}

export default Toggle