import { string } from "yup";

export const username =  string('Enter your username please')
    .max(15, 'Must be 15 characters or less')
    .required('Username is required')

export const email = string('Enter your email please').email('Invalid email address').required('Email is required')

export const password = string('Enter your password')
    .min(8,'Your password should be minimum of 8 characters length')
    .required('Password is required')