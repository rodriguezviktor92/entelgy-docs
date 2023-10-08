'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';

export function Search({ inputValue, setInputValue }) {
  return (
    <TextField.Root>
      <TextField.Slot>
        <MagnifyingGlassIcon height='16' width='16' />
      </TextField.Slot>
      <TextField.Input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder='Search the docs…'
      />
    </TextField.Root>
  );
}
