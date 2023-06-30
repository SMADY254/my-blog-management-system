import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './book.css';

const schema = yup.object().shape({
  destination: yup.string().required('Destination is required'),
  departure: yup.string().required('Departure is required'),
  customers: yup
    .number()
    .typeError('Number of customers must be a valid number')
    .positive('Number of customers must be positive')
    .integer('Number of customers must be an integer')
    .required('Number of customers is required'),
});

const bookPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(' /api/book' , data);
      console.log(response.data);
    }catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div className='book.form'>
      <h2>Book Now</h2>
      <form  className=".frm"onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Destination</label>
          <input type="text" {...register('destination')} />
          {errors.destination && <p>{errors.destination.message}</p>}
        </div>

        <div>
          <label>Departure</label>
          <input type="text" {...register('departure')} />
          {errors.departure && <p>{errors.departure.message}</p>}
        </div>

        <div>
          <label>Number of Customers</label>
          <input type="number" {...register('customers')} />
          {errors.customers && <p>{errors.customers.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default bookPage;