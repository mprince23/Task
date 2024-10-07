import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

const FormikForm = () => {
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
        startDate: '',
        endDate: '',
    });

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Enter a valid email address').required('Email is required'),
        contact: Yup.string().matches(/^[0-9]{10}$/, 'Enter a valid contact number (10 digits)').required('Contact is required'),
        aadharno: Yup.string().matches(/^[0-9]{12}$/, 'Enter a valid Aadhar number (12 digits)').required('Aadhar No is required'),
        panno: Yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Enter a valid PAN number').required('PAN No is required'),
        gstno: Yup.string().matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Enter a valid GST number').required('GST No is required'),
        age: Yup.string().required('Age is required'),
        gender: Yup.string().required('Gender is required'),
        bod: Yup.string().required('Date of Birth is required'),
        startDate: Yup.date().required('Start Date is required').nullable(),
        endDate: Yup.date().required('End Date is required').nullable().min(Yup.ref('startDate'), 'End Date cannot be earlier than Start Date'),
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, backgroundColor: "#fafafa" }}>
            <Box sx={{ padding: "30px", width: { md: "40pc", sm: "30pc", xs: "15pc" }, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
                <Typography variant='h4' sx={{ mb: 3, textAlign: "center" }}>Formik Form</Typography>

                <Formik
                    initialValues={Deta}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, errors, touched, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit} noValidate>
                            <Box sx={{ mb: 3, display: { md: 'flex', xs: "grid" }, gap: 2 }}>
                                <Field
                                    as={TextField}
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.firstName && touched.firstName}
                                    helperText={<ErrorMessage name="firstName" />}
                                    onChange={handleChange}
                                    value={values.firstName}
                                />
                                <Field
                                    as={TextField}
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.lastName && touched.lastName}
                                    helperText={<ErrorMessage name="lastName" />}
                                    onChange={handleChange}
                                    value={values.lastName}
                                />
                            </Box>

                            <Box sx={{ mb: 3, display: { md: 'flex', xs: "grid" }, gap: 2 }}>
                                <Field
                                    as={TextField}
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.email && touched.email}
                                    helperText={<ErrorMessage name="email" />}
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                <Field
                                    as={TextField}
                                    id="contact"
                                    name="contact"
                                    label="Contact"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.contact && touched.contact}
                                    helperText={<ErrorMessage name="contact" />}
                                    onChange={handleChange}
                                    value={values.contact}
                                />
                            </Box>

                            <Box sx={{ mb: 3, display: { md: 'flex', xs: "grid" }, gap: 2 }}>
                                <Field
                                    as={TextField}
                                    id="aadharno"
                                    name="aadharno"
                                    label="Aadhar No."
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.aadharno && touched.aadharno}
                                    helperText={<ErrorMessage name="aadharno" />}
                                    onChange={handleChange}
                                    value={values.aadharno}
                                />
                                <Field
                                    as={TextField}
                                    id="panno"
                                    name="panno"
                                    label="PAN No."
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.panno && touched.panno}
                                    helperText={<ErrorMessage name="panno" />}
                                    onChange={handleChange}
                                    value={values.panno}
                                />
                            </Box>

                            <Box sx={{ mb: 3, display: { md: 'flex', xs: "grid" }, gap: 2 }}>
                                <Field
                                    as={TextField}
                                    id="gstno"
                                    name="gstno"
                                    label="GST No."
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.gstno && touched.gstno}
                                    helperText={<ErrorMessage name="gstno" />}
                                    onChange={handleChange}
                                    value={values.gstno}
                                />
                                <Field
                                    as={TextField}
                                    id="age"
                                    name="age"
                                    label="Age"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.age && touched.age}
                                    helperText={<ErrorMessage name="age" />}
                                    onChange={handleChange}
                                    value={values.age}
                                />
                            </Box>

                            <Box sx={{ mb: 3 }}>
                                <Field
                                    as={TextField}
                                    id="bod"
                                    name="bod"
                                    label="Date of Birth"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    error={!!errors.bod && touched.bod}
                                    helperText={<ErrorMessage name="bod" />}
                                    onChange={handleChange}
                                    value={values.bod}
                                />
                            </Box>

                            <Box sx={{ mb: 3, display: { md: 'flex', xs: "grid" }, gap: 2 }}>
                                <Field
                                    as={TextField}
                                    id="startDate"
                                    name="startDate"
                                    label="Start Date"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    error={!!errors.startDate && touched.startDate}
                                    helperText={<ErrorMessage name="startDate" />}
                                    onChange={handleChange}
                                    value={values.startDate}
                                />
                                <Field
                                    as={TextField}
                                    id="endDate"
                                    name="endDate"
                                    label="End Date"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    error={!!errors.endDate && touched.endDate}
                                    helperText={<ErrorMessage name="endDate" />}
                                    onChange={handleChange}
                                    value={values.endDate}
                                />
                            </Box>

                            <Box sx={{ mb: 3 }}>
                                <FormControl component="fieldset" error={!!errors.gender && touched.gender}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                        name="gender"
                                        onChange={handleChange}
                                        value={values.gender}
                                        row
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                    <Typography color="error"><ErrorMessage name="gender" /></Typography>
                                </FormControl>
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Button type="submit" sx={{ backgroundColor: "black", color: "white", width: "50%", borderRadius: "50px" }}>
                                    Submit
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default FormikForm;