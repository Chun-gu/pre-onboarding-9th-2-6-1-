// import { useStatStyles } from '@chakra-ui/react';
// import { useState } from 'react';

import { useDisclosure } from '@chakra-ui/react';

export default function useModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [detail, setDetail] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    // console.log(detail);
    onOpen();
    // setIsOpen(() => true);
  }

  function closeModal() {
    onClose();
    // setIsOpen(() => false);
  }

  return { isOpen, openModal, closeModal };
}
