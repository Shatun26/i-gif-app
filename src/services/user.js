import API from './api';

export const SignInService = async (body) => {
  try {
    const response = await API.post('/user/login', body);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const SignUpService = async (body) => {
  try {
    const response = await API.post('/user/registration', body);
    return response;
  } catch (error) {
    return error.response;
  }
};
