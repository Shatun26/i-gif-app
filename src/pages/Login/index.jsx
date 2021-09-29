import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/auth';
import { SignInService } from '../../services/user';
import LoginLayout from './index.layout';
import { isEmail } from 'validator';
import { message } from 'antd';

export default function Login() {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      errorMessage('Email of password is empty!');
    } else if (!isEmail(credentials.email)) {
      errorMessage('Email invalid');
    } else {
      const res = await SignInService(credentials);
      if (res) {
        if (res.status !== 200) {
          errorMessage(res.data.message);
        } else {
          localStorage.setItem('token', res.data);
          dispatch(login());
        }
      }
    }
  };
  return <LoginLayout handleLogin={handleLogin} handleChange={handleChange} />;
}
