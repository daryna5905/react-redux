import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Homework1/slices/productSlice';
import usersReducer from '../Homework2/slices/usersSlices';

export const store = configureStore({
  reducer: {
    product: productReducer,
    users: usersReducer,
  },
});
