import React from 'react';
import { Grid, Paper, Avatar, Button, Typography } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormHelperText } from '@material-ui/core';

const SignUp = () => {
    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const [value, setValue] = React.useState('female');

    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termAndConditions: false
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Redured"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid phone number").required("Redured"),
        password: Yup.string().min(8, "Password min length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not Matched").required("Required"),
        termAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })

    const onSubmit = (values, props) => {
        console.log(values)
        localStorage.setItem('UserData', JSON.stringify(values));
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    return (
        <Grid style={{ marginTop: "100px" }}>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption">Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Name' name="name" fullWidth
                                placeholder="Enter you name" type="text" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} label='Email' name="email" fullWidth type="email"
                                placeholder="Enter you email" helperText={<ErrorMessage name="email" />} />
                            <FormControl component="fieldset" style={{ marginTop: "8px" }}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} label='Phone Number' name="phoneNumber" fullWidth type="number"
                                placeholder="Enter you phnon no." helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField} label='Password' name="password" fullWidth type="password"
                                placeholder="Enter password" helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} label='Confirm Password' name="confirmPassword" fullWidth type="password"
                                placeholder="Conform password" helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel
                                control={
                                    <Field as={Checkbox}
                                        name="termAndConditions"
                                        color="secondary"
                                    />
                                }
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termAndConditions" /></FormHelperText>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={props.isSubmitting}
                            >{props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
}

export default SignUp;