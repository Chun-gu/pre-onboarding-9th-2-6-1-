import { useEffect, useState } from 'react';

import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./travelProductData.json');
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.idx}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
