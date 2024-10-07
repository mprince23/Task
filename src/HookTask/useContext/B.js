import React, { useContext } from 'react'
import { notification } from '../../App'

const B = () => {

    const alertNotification = useContext(notification)

    return (
        <div>
            <p>B</p>
            <button onClick={alertNotification}>Click</button>
        </div>
    )
}

export default B