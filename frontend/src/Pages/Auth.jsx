import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import  './Auth.css';

const AuthPage = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Perform login logic here
  };

  return (
    <div className="auth.form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input type="text" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit">Login Now</button>
      </form>
    </div>
  );
}
export default AuthPage;