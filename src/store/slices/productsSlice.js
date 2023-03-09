import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    set(state, action) {
      const products = action.payload.products.map((product) => ({
        ...product,
        isReserved: false,
        purchases: 0,
      }));
      state.products.push(...products);
    },
    reserve(state, action) {
      const targetProduct = state.products.find(
        (product) => product.idx === action.payload.idx,
      );
      if (targetProduct) {
        targetProduct.isReserved = !targetProduct.isReserved;
      }
    },
    cancel(state, action) {
      const targetProduct = state.products.find(
        (product) => product.idx === action.payload.idx,
      );
      if (targetProduct) {
        targetProduct.isReserved = !targetProduct.isReserved;
      }
    },
  },
});

const { actions, reducer: productsReducer } = productsSlice;

export default productsReducer;
export const { set, reserve, cancel } = actions;
