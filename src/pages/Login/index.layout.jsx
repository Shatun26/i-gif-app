import React from 'react';
import { Link } from 'react-router-dom';
import * as H from './index.styled';

export default function LoginLayout({ handleLogin, handleChange }) {
  return (
    <H.LoginWrapper>
      <H.LoginForm onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <label htmlFor="email">email</label>
        <input
          onChange={handleChange}
          type="text"
          id="email"
          placeholder="user@email.com"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="1Ge23Garik"
        />
        <H.BtnContainer>
          <Link to="/">Back</Link>
          <button>Login</button>
        </H.BtnContainer>
      </H.LoginForm>
    </H.LoginWrapper>
  );
}
