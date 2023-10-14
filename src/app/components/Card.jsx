import { Badge, Box, Card, Flex, Text, Tooltip } from '@radix-ui/themes';
import Link from 'next/link';

export function CardDocs({ category, categoryColor, title, slug }) {
  return (
    <Box>
      <Card asChild style={{ height: 100 }}>
        <Link href={`${slug}`}>
          <Flex justify='end'>
            <Badge size='1' color={categoryColor}>
              {category}
            </Badge>
          </Flex>
          <Tooltip content={title}>
            <Text as='p' color='gray' size='3' className='pt-1 line-clamp-2'>
              {title}
            </Text>
          </Tooltip>
        </Link>
      </Card>
    </Box>
  );
}
