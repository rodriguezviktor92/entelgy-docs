import { MoonIcon } from '@radix-ui/react-icons';
import { Flex, Heading } from '@radix-ui/themes';

export function Header() {
  return (
    <Flex align='center' justify='between'>
      <Heading>Entelgy Docs</Heading>
      <MoonIcon />
    </Flex>
  );
}
