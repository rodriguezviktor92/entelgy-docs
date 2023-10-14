import { Badge, Box, Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

export function CardDocs({ category, categoryColor, title, slug }) {
  return (
    <Box>
      <Card asChild>
        <Link href={`${slug}`}>
          <Flex justify='end'>
            <Badge color={categoryColor}>{category}</Badge>
          </Flex>
          <Text as='div' color='gray' size='2'>
            {title}
          </Text>
        </Link>
      </Card>
    </Box>
  );
}
