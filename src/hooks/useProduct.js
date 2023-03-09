import { useDispatch, useSelector } from 'react-redux';

import { set, reserve, cancel } from '../store/slices/productsSlice';

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

  return [products, { initProducts, makeReservation, cancelReservation }];
}
