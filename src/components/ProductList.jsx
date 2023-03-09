import { useEffect } from 'react';

import useProduct from '../hooks/useProduct';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, { initProducts }] = useProduct();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./travelProductData.json');
      const data = await response.json();
      initProducts(data);
    }

    if (products.length === 0) fetchData();
  }, [initProducts, products.length]);

  return (
    <ul>
      {products &&
        products.map((product) => (
          <li key={product.idx}>
            <ProductCard product={product} />
          </li>
        ))}
    </ul>
  );
}
