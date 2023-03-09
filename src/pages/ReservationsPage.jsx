import { Heading } from '@chakra-ui/react';

import { ReservationsList, TotalPrice } from '../components';

export default function ReservationsPage() {
  return (
    <>
      <Heading pt="72px" pb="40px">
        예약 상품 목록
      </Heading>
      <ReservationsList />
      <TotalPrice />
    </>
  );
}
