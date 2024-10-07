import React, { useState } from 'react';
import { toast } from "react-toastify";

const LoginForm = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        emailError: '',
        passwordError: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleOnClick = (e) => {
        e.preventDefault();
        let message = true;

        setError({ emailError: '', passwordError: '' });

        if (!data.email) {
            setError((prevError) => ({ ...prevError, emailError: 'Email is required' }));
            message = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            setError((prevError) => ({ ...prevError, emailError: 'Please enter a valid email' }));
            message = false;
        }

        if (!data.password) {
            setError((prevError) => ({ ...prevError, passwordError: 'Password is required' }));
            message = false;
        } else if (data.password.length < 6) {
            setError((prevError) => ({ ...prevError, passwordError: 'Password must be at least 6 characters long' }));
            message = false;
        }

        if (message) {
            toast.success("Login successful!")
        }
    };

    return (
        <div className="container p-5 col-md-5">
            <h2>Login Form</h2>
            <form onSubmit={handleOnClick}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className={`form-control ${error.emailError ? 'is-invalid' : ''}`}
                    />
                    {error.emailError && <div className="invalid-feedback">{error.emailError}</div>}
                </div>

                <div className="form-group mt-3">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        className={`form-control ${error.passwordError ? 'is-invalid' : ''}`}
                    />
                    {error.passwordError && <div className="invalid-feedback">{error.passwordError}</div>}
                </div>

                <div className="form-group mt-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
