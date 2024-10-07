import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

const ReactHookForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const [Deta, setDeta] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        aadharno: '',
        panno: '',
        gstno: '',
        age: '',
        gender: '',
        bod: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeta({ ...Deta, [name]: value });
    };

    const onSubmit = (data) => {
        console.log({ ...data, ...Deta });
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Box sx={{ boxShadow: "0 0 5px #000", padding: "30px", width: { md: "40pc", sm: "30pc", xs: "15pc" }, }}>
                <Typography variant='h4' sx={{ mb: 3, textAlign: "center" }}>Form</Typography>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Box sx={{ mb: 3, display: { md: 'flex', xs: "grid" }, gap: 2 }}>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'First Name is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.firstName}
                                    helperText={errors.firstName ? errors.firstName.message : ''}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleChange(e);
                                    }}
                                    value={Deta.firstName}
                                />
                            )}
                        />
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Last Name is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.lastName}
                                    helperText={errors.lastName ? errors.lastName.message : ''}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleChange(e);
                                    }}
                                    value={Deta.lastName}
                                />
                            )}
                        />
                    </Box>

                    <Box sx={{ mb: 3, display: { md: 'flex', xs: "grid" }, gap: 2 }}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Enter a valid email address',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ''}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleChange(e);
                                    }}
                                    value={Deta.email}
                                />
                            )}
                        />
                        <Controller
                            name="contact"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Contact is required',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Enter a valid contact number (10 digits)',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="contact"
                                    label="Contact"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.contact}
                                    helperText={errors.contact ? errors.contact.message : ''}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleChange(e);
                                    }}
                                    value={Deta.contact}
                                />
                            )}
                        />
                    </Box>

                    <Box sx={{ mb: 3, display: { md: 'flex', xs: "grid" }, gap: 2 }}>
                        <Controller
                            name="aadharno"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Aadhar No is required',
                                pattern: {
                                    value: /^[0-9]{12}$/,
                                    message: 'Enter a valid Aadhar number (12 digits)',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="aadharno"
                                    label="Aadhar No."
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.aadharno}
                                    helperText={errors.aadharno ? errors.aadharno.message : ''}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleChange(e);
                                    }}
                                    value={Deta.aadharno}
                                />
                            )}
                        />
                        <Controller
                            name="panno"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'PAN No is required',
                                pattern: {
                                    value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                                    message: 'Enter a valid PAN number',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="panno"
                                    label="PAN No."
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.panno}
                                    helperText={errors.panno ? errors.panno.message : ''}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleChange(e);
                                    }}
                                    value={Deta.panno}
                                />
                            )}
                        />
                    </Box>

                    <Box sx={{ mb: 3, display: { md: 'flex', xs: "grid" }, gap: 2 }}>
                        <Controller
                            name="gstno"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'GST No is required',
                                pattern: {
                                    value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                                    message: 'Enter a valid GST number',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="gstno"
                                    label="GST No."
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.gstno}
                                    helperText={errors.gstno ? errors.gstno.message : ''}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleChange(e);
                                    }}
                                    value={Deta.gstno}
                                />
                            )}
                        />
                        <Controller
                            name="age"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Age is required',
                                pattern: {
                                    value: /^[0-9]{1,3}$/,
                                    message: 'Enter a valid age',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="age"
                                    label="Age"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.age}
                                    helperText={errors.age ? errors.age.message : ''}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleChange(e);
                                    }}
                                    value={Deta.age}
                                />
                            )}
                        />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Controller
                            name="bod"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Date of Birth is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="bod"
                                    label="Date of Birth"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.bod}
                                    helperText={errors.bod ? errors.bod.message : ''}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleChange(e);
                                    }}
                                    value={Deta.bod}
                                />
                            )}
                        />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Controller
                            name="gender"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Gender is required' }}
                            render={({ field }) => (
                                <FormControl component="fieldset" error={!!errors.gender}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                        {...field}
                                        row
                                        onChange={(e) => {
                                            field.onChange(e);
                                            handleChange(e);
                                        }}
                                        value={Deta.gender}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                    {errors.gender && <Typography color="error">{errors.gender.message}</Typography>}
                                </FormControl>
                            )}
                        />
                    </Box>


                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button type="submit" sx={{ backgroundColor: "black", color: "white", width: "50%" }}>
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default ReactHookForm;
