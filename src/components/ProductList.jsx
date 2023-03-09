import { useEffect } from 'react';

import { UnorderedList, ListItem } from '@chakra-ui/react';

import { useProduct } from '../hooks';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, { initProducts }] = useProduct();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./travelProductData.json');
      const data = await response.json();
      initProducts(data);
    }

    if (!products.length) fetchData();
  }, [initProducts, products]);

  return (
    <UnorderedList
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap="20px">
      {products &&
        products.map((product) => (
          <ListItem key={product.idx} listStyleType="none">
            <ProductCard product={product} />
          </ListItem>
        ))}
    </UnorderedList>
  );
}
