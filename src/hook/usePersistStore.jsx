///Users/nicole_jiang/Documents/myGithub/E.A.G-primary/src/hook/usePersistStore.jsx
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 使用 localStorage 或 sessionStorage
import filtersReducer from './useFilter'; // 引入 reducers
import searchReducer from './useSearchData';

const persistConfig = {
  key: 'root',
  storage, // 默认是使用 localStorage，也可以选择 sessionStorage
};
const persistedSearchReducer = persistReducer(persistConfig, searchReducer);

const persistedReducer = persistReducer(persistConfig, filtersReducer);

export const store = configureStore({
  reducer: {
    filters: persistedReducer, // 使用持久化的 reducers
    search: searchReducer,
  },
});

export const persistor = persistStore(store);
