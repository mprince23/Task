import React from 'react'

const Form3 = () => {
    return (
        <div className='container my-5 col-md-4'>
            <h3 className='border-bottom text-center pb-2'>Dynamic Field</h3>
            <div className="">
                <input type="radio" />
                <label htmlFor="" className='mx-2'>Yes</label>
            </div>
            <div className="mt-2">
                <input type="radio" />
                <label htmlFor="" className='mx-2'>No</label>
            </div>
            <button className='btn btn-primary w-50 mt-2'>Submit</button>
        </div>
    )
}

export default Form3