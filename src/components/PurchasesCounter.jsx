import { useCallback } from 'react';

import { HStack, Button, Input, useNumberInput } from '@chakra-ui/react';

import { useProduct } from '../hooks';

export default function PurchasesCounter({ idx, max }) {
  const [, { incrementPurchase, decrementPurchase }] = useProduct();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const onClickIncrement = useCallback(
    () => incrementPurchase(idx),
    [idx, incrementPurchase],
  );

  const onClickDecrement = useCallback(
    () => decrementPurchase(idx),
    [idx, decrementPurchase],
  );

  return (
    <HStack width="150px">
      <Button onClick={onClickDecrement} {...dec}>
        -
      </Button>
      <Input {...input} textAlign="center" />
      <Button onClick={onClickIncrement} {...inc}>
        +
      </Button>
    </HStack>
  );
}
