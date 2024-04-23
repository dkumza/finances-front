import * as yup from 'yup';

export const loginValSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email()
    .matches(/.+@.+\..+/, 'Email must valid email address')
    .required('Email is required'),
  password: yup.string().trim().required('Password is required'),
});

export const signUpValSchema = yup.object({
  email: yup.string().trim().email().required('Email is required'),
  password: yup.string().trim().required('Password is required'),
  repeatPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password'), undefined], 'Passwords do not match')
    .required('Repeat password is required'),
});
