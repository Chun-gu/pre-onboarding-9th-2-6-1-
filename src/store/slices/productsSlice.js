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
      state.products = products;
    },
    reserve(state, action) {
      const targetProduct = state.products.find(
        (product) => product.idx === action.payload.idx,
      );
      if (targetProduct) {
        targetProduct.isReserved = !targetProduct.isReserved;
        targetProduct.purchases += 1;
      }
    },
    cancel(state, action) {
      const targetProduct = state.products.find(
        (product) => product.idx === action.payload.idx,
      );
      if (targetProduct) {
        targetProduct.isReserved = !targetProduct.isReserved;
        targetProduct.purchases = 0;
      }
    },
    increment(state, action) {
      const targetProduct = state.products.find(
        (product) => product.idx === action.payload.idx,
      );
      if (
        targetProduct &&
        targetProduct.purchases !== targetProduct.maximumPurchases
      ) {
        targetProduct.purchases += 1;
      }
    },
    decrement(state, action) {
      const targetProduct = state.products.find(
        (product) => product.idx === action.payload.idx,
      );
      if (targetProduct && targetProduct.purchases !== 0) {
        targetProduct.purchases -= 1;
      }
    },
  },
});

const { actions, reducer: productsReducer } = productsSlice;

export default productsReducer;
export const { set, reserve, cancel, increment, decrement } = actions;
