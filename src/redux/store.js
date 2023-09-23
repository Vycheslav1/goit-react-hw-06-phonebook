import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  contacts: tasksReducer,
  filters: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filters'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
