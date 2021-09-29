import React from 'react';
import { Link } from 'react-router-dom';
import * as H from './index.styled';
export default function HomeLayout() {
  
  return (
    <H.HomeWrapper>
      <h1>I GIF</h1>
      <H.LinksWrapper>
        <Link to="/login">Sign In</Link>
        <Link to="/register">Sign Up</Link>
      </H.LinksWrapper>
    </H.HomeWrapper>
  );
}
