import API from './api';

export const GetAllUserCardsService = async () => {
  try {
    const response = await API.get('/gifcard');
    return response;
  } catch (error) {
    return error.response;
  }
};

export const CreateCardService = async (formData) => {
  try {
    const response = await API.post('/gifcard', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const DeleteCardService = async (id) => {
  try {
    const response = await API.delete(`/gifcard/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
