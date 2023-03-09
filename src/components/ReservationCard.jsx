import { Box } from '@chakra-ui/react';

import ProductCard from './ProductCard';
import PurchasesCounter from './PurchasesCounter';

export default function ReservationCard({ product }) {
  return (
    <Box display="flex" gap="20px">
      <ProductCard product={product} />
      <PurchasesCounter idx={product.idx} max={product.maximumPurchases} />
    </Box>
  );
}
