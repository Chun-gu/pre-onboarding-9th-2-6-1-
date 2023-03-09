import { useMemo } from 'react';

import { Text } from '@chakra-ui/react';

import { useProduct } from '../hooks';

export default function TotalPrice() {
  const [products] = useProduct();
  const totalPrice = useMemo(
    () =>
      products.reduce((currPrice, product) => {
        if (product.isReserved) {
          return currPrice + product.price * product.purchases;
        }

        return currPrice;
      }, 0),
    [products],
  );

  return (
    <Text fontSize="xl" fontWeight="bold" mt="40px">
      총 결제액: {totalPrice.toLocaleString()}원
    </Text>
  );
}
