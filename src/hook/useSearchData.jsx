import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API URL
// const API_URL = "http://localhost:3000/";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY; 

// 定義異步 thunk 來取得搜尋資料
export const fetchSearchData = createAsyncThunk(
  "search/fetchSearchData",
  async ({ filters, page = 1 }, { rejectWithValue }) => {
    try {
      const { regionId, category, keyWord, start_date, end_date } = filters;
      const response = await axios.get(
        `${API_URL}/api/exhibitions?_page=${page}&_limit=6&startDate=${start_date}&endDate=${end_date}&exhibitions_categoriesId=${category}&search=${keyWord}&regionId=${regionId}&_expand=region,exhibitions_categories&userId=${localStorage.getItem("userId")}`,{
          headers: { "api-key": `${API_KEY}` }
      });

      return {
        data: response.data.data,
        totalPages: response.data.meta.totalPages,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching search data");
    }
  }
);

// 建立 slice
const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchData: [],
    totalPages: 1,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {}, // 目前不需要額外 reducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchData = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default searchSlice.reducer;
