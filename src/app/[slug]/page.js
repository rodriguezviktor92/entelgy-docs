import { Box } from '@radix-ui/themes';
import Link from 'next/link';
import { RichText } from '../components/RichText';
async function searchQuestion() {}

export default async function Category({ params }) {
  const { slug } = params;

  return (
    <Box className='w-full'>
      <div className='w-full flex items-start'>
        <Link className='hover:underline' href='/'>
          ← Back
        </Link>
      </div>
      <iframe
        className='py-4 h-[90vh]'
        src='https://drive.google.com/file/d/199hPCkOfxgXWFO5DlrEtzDVaivGPshdm/preview'
        allow='autoplay'
        height='90vh'
        width='100%'
        display='block'
      ></iframe>
      <RichText />
    </Box>
  );
}
