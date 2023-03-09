import { useCallback } from 'react';

import {
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Badge,
  Text,
} from '@chakra-ui/react';

import { useProduct } from '../hooks';

export default function DetailModal({ isOpen, onClose, product }) {
  const {
    idx,
    name,
    price,
    mainImage,
    isReserved,
    description,
    spaceCategory,
    maximumPurchases,
    registrationDate,
  } = product;

  const [, { makeReservation, cancelReservation }] = useProduct();

  const onClickReserve = useCallback(
    () => makeReservation(idx),
    [idx, makeReservation],
  );

  const onClickCancel = useCallback(
    () => cancelReservation(idx),
    [idx, cancelReservation],
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="2xl">{`#${idx} ${name}`}</ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody display="flex" gap="20px">
          <Image src={mainImage} />
          <Box display="flex" flexDir="column">
            <Box>
              <Badge colorScheme="blue" flexGrow="0">
                {`@${spaceCategory}`}
              </Badge>
            </Box>
            <Text flexGrow="1">{description}</Text>
            <Box>
              <Text textAlign="end">
                최대 구매 가능 갯수: {maximumPurchases}개
              </Text>
              <Text fontSize="lg" fontWeight="bold" textAlign="end">
                {`${price.toLocaleString()}원`}
              </Text>
            </Box>
          </Box>
        </ModalBody>

        <ModalFooter display="flex" justifyContent="space-between">
          <Text>상품 등록일: {registrationDate}</Text>
          {isReserved ? (
            <Button colorScheme="red" onClick={onClickCancel}>
              취소
            </Button>
          ) : (
            <Button colorScheme="green" onClick={onClickReserve}>
              예약
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
