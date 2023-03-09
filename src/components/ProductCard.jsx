import { useCallback } from 'react';

import {
  Badge,
  Box,
  Button,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useProduct } from '../hooks';
import DetailModal from './DetailModal';

export default function ProductCard({ product }) {
  const { idx, name, mainImage, price, spaceCategory, isReserved } = product;

  const [, { makeReservation, cancelReservation }] = useProduct();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickReserve = useCallback(
    (e) => {
      e.stopPropagation();
      makeReservation(idx);
    },
    [idx, makeReservation],
  );

  const onClickCancel = useCallback(
    (e) => {
      e.stopPropagation();
      cancelReservation(idx);
    },
    [idx, cancelReservation],
  );

  return (
    <>
      <Box
        width="410px"
        height="96px"
        display="flex"
        flexGrow="1"
        borderRadius="10px"
        overflow="hidden"
        boxShadow="base"
        onClick={onOpen}
        tabIndex="0"
        role="button">
        <Image
          role="button"
          boxSize="100px"
          objectFit="cover"
          src={mainImage}
          alt="여행 상품 대표 이미지"
        />
        <Box
          p="8px"
          display="flex"
          flexDir="column"
          flexGrow="1"
          justifyContent="space-between">
          <Box display="flex" justifyContent="space-between">
            <Text fontSize="md">{`#${idx}`}</Text>
            <Badge colorScheme="blue">{`@${spaceCategory}`}</Badge>
          </Box>
          <Text size="md" fontWeight="bold">
            {name}
          </Text>
          <Box display="flex" justifyContent="space-between">
            <Text size="md">{price.toLocaleString()}원</Text>
            {isReserved ? (
              <Button size="xs" colorScheme="red" onClick={onClickCancel}>
                취소
              </Button>
            ) : (
              <Button size="xs" colorScheme="green" onClick={onClickReserve}>
                예약
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      {isOpen && (
        <DetailModal isOpen={isOpen} onClose={onClose} product={product} />
      )}
    </>
  );
}
