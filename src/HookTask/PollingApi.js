import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PollingApi = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        setInterval(() => {
            axios.get("https://6620a4483bf790e070b02da3.mockapi.io/User")
                .then((res) => setData(res.data))
                .catch((err) => console.log(err))
        },5000)
    }, [])

    return (
        <div>
            <div className="container mt-3">
                <table className='w-100'>
                    <tr>
                        <th>Sr No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact</th>
                    </tr>
                    {
                        data.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.contact}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default PollingApi