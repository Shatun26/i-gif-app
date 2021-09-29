import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/slices/auth';
import { addGif, deleteGif, setGifCards } from '../../redux/slices/main';
import {
  CreateCardService,
  DeleteCardService,
  GetAllUserCardsService,
} from '../../services/gifcards';
import MainLayout from './index.layout';

export default function Main() {
  const { GifCards } = useSelector((state) => state.main);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCardCategory, setNewCardCategory] = useState('Choose category');
  const [deleteIdCard, setdeleteIdCard] = useState();
  const [filterCategory, setfilterCategory] = useState('All');
  const [newGif, setNewGif] = useState({});
  const [gifFile, setGifFile] = useState();
  const [IsLoading, setIsLoading] = useState(false);

  const inputfiles = useRef();
  const handleGetAllCards = async () => {
    setIsLoading(true)
    const res = await GetAllUserCardsService();
    if (res.status === 401) {
      dispatch(logOut());
      localStorage.removeItem('token');
    } else {
    setIsLoading(false)

      dispatch(setGifCards(res.data));
    }
  };

  const handleAddGif = (e) => {
    setNewGif((props) => {
      return {
        ...props,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handlelDispathGif = async (formData) => {
    setIsLoading(true);
    const res = await CreateCardService(formData);
    if (res.status === 200) {
      dispatch(addGif(res.data));
    }
    setIsLoading(false);
    setNewGif({});
    setGifFile();
    inputfiles.current.value = '';
  };

  const handleChooseCategory = (category) => {
    setNewCardCategory(category);
    setNewGif((props) => {
      return {
        ...props,
        category,
      };
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (newGif.name && newGif.category && gifFile) {
      setIsModalVisible(false);
      const formData = new FormData();
      formData.append('file', gifFile[0]);
      formData.append('name', newGif.name);
      formData.append('category', newGif.category);
      handlelDispathGif(formData);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewGif({});
    setGifFile();
    inputfiles.current.value = '';
  };
  const [isModalDeleteVisible, setIsModaDeletelVisible] = useState(false);

  const showDeleteModal = (id) => {
    setdeleteIdCard(id);
    setIsModaDeletelVisible(true);
  };

  const handleDeleteOk = async () => {
    setIsModaDeletelVisible(false);
    const res = await DeleteCardService(deleteIdCard);
    if (res.status === 204) {
      dispatch(deleteGif(deleteIdCard));
    }
  };

  const handleDeleteCancel = () => {
    setIsModaDeletelVisible(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if (isAuth) handleGetAllCards();
  }, []);

  return (
    <MainLayout
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
      GifCards={GifCards}
      handleLogout={handleLogout}
      isModalDeleteVisible={isModalDeleteVisible}
      showDeleteModal={showDeleteModal}
      handleDeleteOk={handleDeleteOk}
      handleDeleteCancel={handleDeleteCancel}
      deleteIdCard={deleteIdCard}
      newCardCategory={newCardCategory}
      setfilterCategory={setfilterCategory}
      filterCategory={filterCategory}
      handleAddGif={handleAddGif}
      newGif={newGif}
      handleChooseCategory={handleChooseCategory}
      gifFile={gifFile}
      setGifFile={setGifFile}
      IsLoading={IsLoading}
      inputfiles={inputfiles}
    />
  );
}
