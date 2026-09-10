import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [
      { id: 1, name: 'Ноутбук' },
      { id: 2, name: 'Смартфон' },
      { id: 3, name: 'Навушники' },
    ],
  },
  reducers: {
    addNewProduct: (state, action) => {
      state.products.push({
        id: new Date().getTime(),
        name: action.payload,
      });
    },
  },
});

export const { addNewProduct } = productSlice.actions;
export default productSlice.reducer;
