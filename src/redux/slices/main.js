import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  // меняется короткое название редьюсера
  name: 'main',
  initialState: {
    // меняется начальное состояние редьюсера
    GifCards: [],
  },
  reducers: {
    // меняется набор редьюсеров
    deleteGif: (state, { payload }) => {
      state.GifCards = state.GifCards.filter((card) => card.id !== payload);
    },
    addGif: (state, { payload }) => {
      state.GifCards.push(payload);
    },
    setGifCards: (state, { payload }) => {
      state.GifCards = payload;
    },
  },
});

// меняются только названия переменных
const MainReducer = mainSlice.reducer;
// экспорт экшенов в компоненты

export const { deleteGif, addGif, setGifCards } = mainSlice.actions;
// из слайса мы забираем редьюсер чтобы его экспортировать в стор
export default MainReducer;
