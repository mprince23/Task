import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import Oauth from './GoogleOauth';
import AzureOauth from './AzureOauth';
import FacebookOauth from './FacebookOauth';

const Login = () => {
    const [userdata, setUserdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [googleUserId, setGoogleUserId] = useState(null);
    const [azureUserData, setAzureUserData] = useState(null);
    const [facebookUserData, setFacebookUserData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userdata.password !== userdata.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log(userdata);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserdata({
            ...userdata,
            [name]: value,
        });
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log(response);
        setGoogleUserId(response.credential);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: 400,
                mx: 'auto',
                mt: 8,
                p: 4,
                border: '1px solid #ccc',
                borderRadius: '8px',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Sign Up
            </Typography>

            <TextField
                label="First Name"
                name="firstName"
                value={userdata.firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />

            <TextField
                label="Last Name"
                name="lastName"
                value={userdata.lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />

            <TextField
                label="Email"
                type="email"
                name="email"
                value={userdata.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />

            <TextField
                label="Password"
                type="password"
                name="password"
                value={userdata.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />

            <TextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={userdata.confirmPassword}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
                Sign Up
            </Button>

            <Typography mt={2}>Or</Typography>

            <Box mt={1}>
                <Oauth onSuccess={handleGoogleLoginSuccess} />
                {googleUserId && (
                    <Typography mt={2} variant="body1">
                        Google User ID: {googleUserId}
                    </Typography>
                )}
            </Box>

            <Box mt={1}>
                <FacebookOauth onSuccess={setFacebookUserData} />
                {facebookUserData && (
                    <Typography mt={2} variant="body1">
                        Facebook User Data: {JSON.stringify(facebookUserData)}
                    </Typography>
                )}
            </Box>

            <Box mt={1}>
                <AzureOauth onSuccess={setAzureUserData} />
                {azureUserData && (
                    <Button mt={2} variant="body1">
                        Azure User Data: {JSON.stringify(azureUserData)}
                    </Button>
                )}
            </Box>

        </Box>
    );
};

export default Login;