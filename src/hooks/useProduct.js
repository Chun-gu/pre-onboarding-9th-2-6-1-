import { useDispatch, useSelector } from 'react-redux';

import {
  set,
  cancel,
  reserve,
  increment,
  decrement,
} from '../store/slices/productsSlice';

export default function useProduct() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function initProducts(data) {
    dispatch(set({ products: data }));
  }

  function makeReservation(idx) {
    dispatch(reserve({ idx }));
  }

  function cancelReservation(idx) {
    dispatch(cancel({ idx }));
  }

  function incrementPurchase(idx) {
    dispatch(increment({ idx }));
  }

  function decrementPurchase(idx) {
    dispatch(decrement({ idx }));
  }

  return [
    products,
    {
      initProducts,
      makeReservation,
      cancelReservation,
      incrementPurchase,
      decrementPurchase,
    },
  ];
}
