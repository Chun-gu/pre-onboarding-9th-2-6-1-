import useProduct from '../hooks/useProduct';

export default function ProductCard({ product }) {
  const { idx, name, mainImage, price, spaceCategory, isReserved } = product;

  const { makeReservation, cancelReservation } = useProduct();

  function onClickReserve() {
    makeReservation(idx);
  }

  function onClickCancel() {
    cancelReservation(idx);
  }

  return (
    <div>
      <img src={mainImage} alt="여행 상품 대표 이미지" />
      <span>{idx}</span>
      <span>{name}</span>
      <span>{price}</span>
      <span>{spaceCategory}</span>
      {isReserved ? (
        <button type="button" onClick={onClickCancel}>
          취소
        </button>
      ) : (
        <button type="button" onClick={onClickReserve}>
          예약
        </button>
      )}
    </div>
  );
}
