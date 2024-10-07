import React, { useState } from 'react';

const Form1 = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.username) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted successfully:', formData);

            setFormData({
                username: '',
                password: ''
            });
            setErrors({
                username: '',
                password: ''
            });
        }
    };

    return (
        <div className='container col-md-4 mt-5'>
            <h3 className='mb-3 text-center border-bottom'>Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && (
                        <div className="invalid-feedback">{errors.username}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                    )}
                </div>
                <button className='btn btn-primary w-100' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form1;
