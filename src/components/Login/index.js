import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Paper, Avatar, Button, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormHelperText } from '@material-ui/core';

const SignIn = () => {
    const [home, setHome] = useState(false)
    const paperStyle = { padding: 20, height: "70vh", width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: "#1bbd7e" }
    const btnStyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validateYupSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required"),
        remember: Yup.string().oneOf(["true"], "Accept remember")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    return (<>
        {home && <Redirect to="/" />}
        <Grid style={{ marginTop: "100px" }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOpenOutlined /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateYupSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter Username' type='text' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                            />
                            <Field as={TextField} label='Paddword' name="password"
                                placeholder='Enter Password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />}
                            />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <FormHelperText><ErrorMessage name="remember" /></FormHelperText>
                            <Button
                                type="'submit"
                                color="primary"
                                variant="contained"
                                style={btnStyle}
                                fullWidth
                                disabled={props.isSubmitting}
                            // onClick={() => setHome(true)}
                            >{props.isSubmitting ? "Loading" : "Sign In"}</Button>
                        </Form>
                    )}
                </Formik>
                <Typography>
                    <Link style={{ textDecoration: "none" }} href="#">Forogot Password ?</Link>
                </Typography>
                <Typography> Do you have an account ?
                    <Link style={{ textDecoration: "none" }} to="/signup">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    </>
    );
}

export default SignIn;