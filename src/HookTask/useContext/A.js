import React, { useContext } from 'react'
import { notification } from '../../App'
import B from './B'

const A = () => {

    const alertNotification = useContext(notification)

    return (
        <div>
            <p>A</p>
            <button onClick={alertNotification}>Click</button>
            <B />
        </div>
    )
}

export default A