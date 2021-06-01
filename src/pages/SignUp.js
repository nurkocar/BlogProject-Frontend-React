import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom'

import { username, email, password } from "../utils/validations";
import { postData } from '../services/postData';
import { Container, TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";

const validationSchema = yup.object({
    username,
    email,
    password,
    password2: password
})

export const SignUp = () => {
    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            password2: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log('values', values);
            try {
                const response = await postData(
                    'https://recipe-blog-django-backend.herokuapp.com/api/users/register/',
                    values
                );
                //toastify
                console.log(response?.data);
                history.push('/login')

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
                    id="username"
                    name="username"
                    label='Username'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />

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
                    type='password'
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    fullWidth
                    margin='normal'
                    variant="outlined"
                    id="password2"
                    name="password2"
                    label='Confirm Password'
                    onChange={formik.handleChange}
                    type='password'
                    value={formik.values.password2}
                    error={formik.touched.password2 && Boolean(formik.errors.password2)}
                    helperText={formik.touched.password2 && formik.errors.password2}
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