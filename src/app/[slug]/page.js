import { Box, Container } from '@radix-ui/themes';
async function searchQuestion() {}

export default async function Category({ params }) {
  const { slug } = params;
  const post = await searchQuestion(slug);

  return (
    <Box className='w-full'>
      <iframe
        className='py-4 h-[90vh]'
        src='https://drive.google.com/file/d/199hPCkOfxgXWFO5DlrEtzDVaivGPshdm/preview'
        allow='autoplay'
        height='90vh'
        width='100%'
        display='block'
      ></iframe>
    </Box>
  );
}
