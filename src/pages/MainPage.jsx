import { Heading } from '@chakra-ui/react';

import { PriceFilter, ProductList, SpaceFilter } from '../components';

export default function MainPage() {
  return (
    <>
      <Heading pt="72px" pb="40px">
        여행 상품 목록
      </Heading>
      <SpaceFilter />
      <PriceFilter />
      <ProductList />
    </>
  );
}
