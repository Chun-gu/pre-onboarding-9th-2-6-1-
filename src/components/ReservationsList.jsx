import { useMemo } from 'react';

import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { useProduct } from '../hooks';
import ReservationCard from './ReservationCard';

export default function ReservationsList() {
  const [products] = useProduct();
  const reservations = useMemo(
    () => products.filter((product) => product.isReserved),
    [products],
  );

  return (
    <>
      {!reservations.length && <Text>예약한 상품이 없습니다.</Text>}

      <UnorderedList display="flex" flexDir="column" gap="20px">
        {!!reservations &&
          reservations.map((reservation) => (
            <ListItem key={reservation.idx} listStyleType="none">
              <ReservationCard product={reservation} />
            </ListItem>
          ))}
      </UnorderedList>
    </>
  );
}
