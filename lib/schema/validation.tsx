import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  emailAddress: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const SignupSchema = yup.object().shape({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  emailAddress: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must be the same'),
});

export const AddProduct = yup.object().shape({
  name: yup.string().required('Product name is required'),
  description: yup.string().required('Product description is required'),
});

export const EditProduct = yup.object().shape({
  name: yup.string().required('Product name is required'),
  description: yup.string().required('Product description is required'),
});
