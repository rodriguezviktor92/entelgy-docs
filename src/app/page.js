import { Box, Card, Container, Grid, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { Search } from './components/Search';

function searchQuestion() {
  return fetch('https://randomuser.me/api/?results=50').then((res) =>
    res.json()
  );
}

export default async function Post() {
  const { results } = await searchQuestion();

  return (
    <Box className='w-full'>
      <Container className='items-start'>
        <Search />
      </Container>
      {results ? (
        <Grid
          columns='3'
          gap='6'
          pt='6'
          className='sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        >
          {results.map(({ gender, email }, index) => (
            <Box key={index}>
              <Card asChild>
                <Link href={`${index}`}>
                  <Text as='div' size='2' weight='bold'>
                    {gender}
                  </Text>
                  <Text as='div' color='gray' size='2'>
                    {email}
                  </Text>
                </Link>
              </Card>
            </Box>
          ))}
        </Grid>
      ) : (
        <div className='relative h-screen flex-col flex justify-center items-center'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            Sorry
          </h1>
          <p className=' mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
            Post Not Found
          </p>
        </div>
      )}
    </Box>
  );
}
