export default function ProductCard({ product }) {
  const { idx, name, mainImage, price, spaceCategory } = product;

  return (
    <div>
      <img src={mainImage} alt="여행 상품 대표 이미지" />
      <span>{idx}</span>
      <span>{name}</span>
      <span>{price}</span>
      <span>{spaceCategory}</span>
      <button type="button">예약</button>
    </div>
  );
}
