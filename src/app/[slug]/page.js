import { Card, Grid, Text, Container, Box, Flex } from '@radix-ui/themes';
import { Search } from '../components/Search';
import Link from 'next/link';
async function searchQuestion(slug) {}
const data = [
  1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
];

export default async function Category({ params }) {
  const { slug } = params;
  const post = await searchQuestion(slug);

  return (
    <Flex
      direction='column'
      width='100%'
      style={{
        background: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
      }}
    >
      <iframe
        className='py-4 px-16 h-[90vh]'
        src='https://drive.google.com/file/d/199hPCkOfxgXWFO5DlrEtzDVaivGPshdm/preview'
        allow='autoplay'
        height='90vh'
        width='100%'
        display='block'
      ></iframe>
    </Flex>
  );
}
