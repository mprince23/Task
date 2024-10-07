import React, { useState } from 'react';

const Form2 = () => {
    const [step, setStep] = useState(1);
    
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        cardnumber: '',
        expirydate: '',
        cvv: '',
    });

    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        cardnumber: '',
        expirydate: '',
        cvv: '',
    });

    function handleNext() {
        const newErrors = {};
        let isValid = true;

        if (step === 1) {
            if (!userData.firstName) {
                newErrors.firstName = 'First Name is required';
                isValid = false;
            }
            if (!userData.lastName) {
                newErrors.lastName = 'Last Name is required';
                isValid = false;
            }
        }

        if (step === 2) {
            if (!userData.address) {
                newErrors.address = 'Address is required';
                isValid = false;
            }
            if (!userData.city) {
                newErrors.city = 'City is required';
                isValid = false;
            }
            if (!userData.zip) {
                newErrors.zip = 'Zip Code is required';
                isValid = false;
            }
        }

        if (step === 3) {
            if (!userData.cardnumber) {
                newErrors.cardnumber = 'Card number is required';
                isValid = false;
            }
            if (!userData.expirydate) {
                newErrors.expirydate = 'Expiry date is required';
                isValid = false;
            }
            if (!userData.cvv) {
                newErrors.cvv = 'CVV is required';
                isValid = false;
            }
        }

        setError(newErrors);

        if (isValid) {
            setStep(step + 1);
        }
    }

    function handleBack() {
        setStep(step - 1);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setError({ ...error, [name]: '' });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userData);
    }

    return (
        <div className='container col-md-4 mt-5'>
            <h2 className='mb-4 border-bottom text-center'>Form</h2>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="">
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                                id="firstName"
                                name='firstName'
                                value={userData.firstName}
                                onChange={handleChange}
                            />
                            {error.firstName && <div className="invalid-feedback">{error.firstName}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                                id="lastName"
                                name='lastName'
                                value={userData.lastName}
                                onChange={handleChange}
                            />
                            {error.lastName && <div className="invalid-feedback">{error.lastName}</div>}
                        </div>
                        <button type="button" className='btn btn-primary' onClick={handleNext}>Next</button>
                    </div>
                )}
                {step === 2 && (
                    <div className="">
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                className={`form-control ${error.address ? 'is-invalid' : ''}`}
                                id="address"
                                name='address'
                                value={userData.address}
                                onChange={handleChange}
                            />
                            {error.address && <div className="invalid-feedback">{error.address}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                                type="text"
                                className={`form-control ${error.city ? 'is-invalid' : ''}`}
                                id="city"
                                name='city'
                                value={userData.city}
                                onChange={handleChange}
                            />
                            {error.city && <div className="invalid-feedback">{error.city}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="zip" className="form-label">Zip Code</label>
                            <input
                                type="number"
                                className={`form-control ${error.zip ? 'is-invalid' : ''}`}
                                id="zip"
                                name='zip'
                                value={userData.zip}
                                onChange={handleChange}
                            />
                            {error.zip && <div className="invalid-feedback">{error.zip}</div>}
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="button" className='btn btn-danger' onClick={handleBack}>Back</button>
                            <button type="button" className='btn btn-primary mx-2' onClick={handleNext}>Next</button>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="">
                        <div className="mb-3">
                            <label htmlFor="cardnumber" className="form-label">Credit Card Number</label>
                            <input
                                type="text"
                                className={`form-control ${error.cardnumber ? 'is-invalid' : ''}`}
                                id="cardnumber"
                                name='cardnumber'
                                value={userData.cardnumber}
                                onChange={handleChange}
                            />
                            {error.cardnumber && <div className="invalid-feedback">{error.cardnumber}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="expirydate" className="form-label">Expiry Date</label>
                            <input
                                type="date"
                                className={`form-control ${error.expirydate ? 'is-invalid' : ''}`}
                                id="expirydate"
                                name='expirydate'
                                value={userData.expirydate}
                                onChange={handleChange}
                            />
                            {error.expirydate && <div className="invalid-feedback">{error.expirydate}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cvv" className="form-label">CVV</label>
                            <input
                                type="number"
                                className={`form-control ${error.cvv ? 'is-invalid' : ''}`}
                                id="cvv"
                                name='cvv'
                                value={userData.cvv}
                                onChange={handleChange}
                            />
                            {error.cvv && <div className="invalid-feedback">{error.cvv}</div>}
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="button" className='btn btn-danger' onClick={handleBack}>Back</button>
                            <button type='submit' className='btn btn-success mx-2'>Submit</button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Form2;