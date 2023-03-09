import { useState } from 'react';

import { Checkbox, Stack } from '@chakra-ui/react';

export default function SpaceFilter() {
  // const spaces = ['서울', '강원', '대구', '부산', '제주'];
  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}>
        전체
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) =>
            setCheckedItems([e.target.checked, checkedItems[1]])
          }>
          서울
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) =>
            setCheckedItems([checkedItems[0], e.target.checked])
          }>
          강원
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[2]}
          onChange={(e) =>
            setCheckedItems([checkedItems[0], e.target.checked])
          }>
          대구
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[3]}
          onChange={(e) =>
            setCheckedItems([checkedItems[0], e.target.checked])
          }>
          부산
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[4]}
          onChange={(e) =>
            setCheckedItems([checkedItems[0], e.target.checked])
          }>
          제주
        </Checkbox>
      </Stack>
    </>
  );
}
