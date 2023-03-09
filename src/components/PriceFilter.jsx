import { useMemo } from 'react';

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';

import { useProduct } from '../hooks';

export default function PriceFilter() {
  const [products] = useProduct();
  const maxPrice = useMemo(
    () => products.reduce((currPrice, product) => currPrice + product.price, 0),
    [products],
  );

  return (
    <RangeSlider
      defaultValue={[0, maxPrice]}
      min={0}
      max={maxPrice}
      step={1000}>
      <RangeSliderTrack bg="red.100">
        <RangeSliderFilledTrack bg="tomato" />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0} />
      <RangeSliderThumb boxSize={6} index={1} />
    </RangeSlider>
  );
}
