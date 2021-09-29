import RegisterLayout from './index.layout';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/auth';
import { SignUpService } from '../../services/user';
import { isEmail } from 'validator';
import { message } from 'antd';

export default function Register() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({});
  const handleChange = (e) => {
    setCredentials((props) => {
      return {
        ...props,
        [e.target.id]: e.target.value,
      };
    });
  };
  const errorMessage = (title) => {
    message.error({
      content: title,
      className: 'custom-error-message',
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !credentials.email ||
      !credentials.password ||
      !credentials.firstname ||
      !credentials.lastname
    ) {
      errorMessage('All fields must be filled!');
    } else if (credentials.password.length < 6) {
      errorMessage('Password too short!');
    } else if (!isEmail(credentials.email)) {
      errorMessage('Email invalid');
    } else if (!/^[a-zA-Zа-яА-Я]+$/.test(credentials.firstname)) {
      errorMessage(
        'The first name must only contain letters and must not contain spaces.'
      );
    } else if (!/^[a-zA-Zа-яА-Я]+$/.test(credentials.lastname)) {
      errorMessage(
        'The last name must only contain letters and must not contain spaces.'
      );
    } else if (credentials.password.includes(' ')) {
      errorMessage('Password must not contain spaces');
    } else {
      const res = await SignUpService({
        ...credentials,
        firstname: credentials.firstname.trim(),
        lastname: credentials.lastname.trim(),
      });
      if (res.status !== 203) {
        errorMessage(res.data.message);
      } else {
        localStorage.setItem('token', res.data.token);
        dispatch(login());
      }
    }
  };
  return (
    <RegisterLayout
      handleChange={handleChange}
      handleRegister={handleRegister}
    />
  );
}
