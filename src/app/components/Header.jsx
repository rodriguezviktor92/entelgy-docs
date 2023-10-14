import { Flex, Heading } from '@radix-ui/themes';
import { ToggleDarkMode } from './ToggleDarkMode';

export function Header() {
  return (
    <Flex align='center' justify='between'>
      <Heading>Entelgy Docs</Heading>
      <ToggleDarkMode />
    </Flex>
  );
}
