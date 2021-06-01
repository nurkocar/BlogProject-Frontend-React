import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom'

import { email, password } from "../utils/validations";
import { postData } from '../services/postData';
import { Container, TextField } from '@material-ui/core';
import { appContext } from '../context/AppContext';
import Button from "@material-ui/core/Button";

const validationSchema = yup.object({
    email,
    password
})

export const SignIn = () => {
    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.
    const history = useHistory();
    const { token, setToken } = useContext(appContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log('values', values);
            try {
                const response = await postData(
                    'https://recipe-blog-django-backend.herokuapp.com/auth/login/',
                    values
                );
                setToken(response?.data?.key);
                localStorage.setItem('token', response?.data?.key);

                console.log(response?.data);
                history.push('/')

            } catch ({ response }) {
                if (response) {
                    console.log(response.data.non_field_errors[0]);
                } else {
                    console.log('Something went wrong')
                }
            }
        },
    });
    return (
        <Container maxWidth='sm'>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    margin='normal'
                    variant="outlined"
                    id="email"
                    name="email"
                    label='Email Address'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                    fullWidth
                    margin='normal'
                    variant="outlined"
                    id="password"
                    name="password"
                    label='Password'
                    onChange={formik.handleChange}
                    type = 'password'
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />

                <Button 
                    color='primary'
                    variant='contained'
                    type="submit"  
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};