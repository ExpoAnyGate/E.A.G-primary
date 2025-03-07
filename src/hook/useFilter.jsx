// src/reducers/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  regionId: '',
  category: '',
  keyWord: '',
  start_date: '',
  end_date: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload }; // 更新过滤条件
    },
    resetFilters: () => initialState, // 重置过滤条件
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
