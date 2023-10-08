import { Search } from '@/app/components/Search';
import { Box, Card, Container, Grid, Section, Text } from '@radix-ui/themes';
import Link from 'next/link';

const data = [
  1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
];

export default function Post() {
  return (
    <Container
      className=''
      size='4'
      p='4'
      style={{
        background: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
      }}
    >
      {data ? (
        <Grid columns='3' gap='6' pt='6'>
          {data.map((e, index) => (
            <Box key={index}>
              <Card asChild>
                <Link href={`${index}`}>
                  <Text as='div' size='2' weight='bold'>
                    Quick start
                  </Text>
                  <Text as='div' color='gray' size='2'>
                    Start building your next project in minutes
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
      {/* <iframe
        className='p-4'
        src='https://drive.google.com/file/d/199hPCkOfxgXWFO5DlrEtzDVaivGPshdm/preview'
        allow='autoplay'
        height='100%'
        width='100%'
        display='block'
      ></iframe> */}
    </Container>
  );
}
