import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  // меняется короткое название редьюсера
  name: 'auth',
  initialState: {
    // меняется начальное состояние редьюсера
    isAuth: !!localStorage.getItem('token'),
  },
  reducers: {
    // меняется набор редьюсеров
    login(state) {
      state.isAuth = true;
    },
    logOut(state) {
      state.isAuth = false;
    },
  },
});

// меняются только названия переменных
const authReducer = authSlice.reducer;
// экспорт экшенов в компоненты
export const { login, logOut } = authSlice.actions;
// из слайса мы забираем редьюсер чтобы его экспортировать в стор
export default authReducer;
