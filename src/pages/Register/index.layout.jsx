import React from 'react';
import * as H from './index.styled';
import { Link } from 'react-router-dom';

export default function RegisterLayout({ handleChange, handleRegister }) {
  return (
    <H.RegisterWrapper>
      <H.RegisterForm onSubmit={handleRegister}>
      <h1>Sign Up</h1>
        <label htmlFor="email">email</label>
        <input onChange={handleChange} type="text" id="email" placeholder="user@email.com"maxLength='40' />
        <label htmlFor="firstname">first name</label>
        <input onChange={handleChange} type="text" id="firstname" placeholder="Ricardo" maxLength='30'/>
        <label htmlFor="lastname">last name</label>
        <input onChange={handleChange} type="text" id="lastname" placeholder="Milos" maxLength='30'/>
        <label htmlFor="password">password</label>
        <input onChange={handleChange} type="password" id="password" placeholder="1Ge23Garik" maxLength='30' />
        <H.BtnContainer>
          <Link to="/">Back</Link>
          <button>Register</button>
        </H.BtnContainer>
      </H.RegisterForm>
    </H.RegisterWrapper>
  );
}
