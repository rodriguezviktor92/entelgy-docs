import { Badge, Box, Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

export function CardDocs({ gender, email, index }) {
  return (
    <Box>
      <Card asChild>
        <Link href={`${index}`}>
          <Flex justify='end'>
            <Badge color={gender === 'male' ? 'indigo' : 'cyan'}>
              {gender}
            </Badge>
          </Flex>
          <Text as='div' color='gray' size='2'>
            {email}
          </Text>
        </Link>
      </Card>
    </Box>
  );
}
