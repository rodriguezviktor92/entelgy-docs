import { Badge, Box, Flex, Heading, Separator } from '@radix-ui/themes';
import Link from 'next/link';
import { RichText } from '../components/RichText';

async function getPost(slug) {
  const res = await fetch(
    `https://entelgy-docs-cms.up.railway.app/api/posts/slug/${slug}`,
    { cache: 'no-store' }
  );
  const {
    videoUrl,
    description,
    title,
    category: { title: categoryTitle, color: categoryColor },
  } = await res.json();

  return { videoUrl, description, title, categoryTitle, categoryColor };
}

export default async function Category({ params: { slug } }) {
  const { videoUrl, description, title, categoryTitle, categoryColor } =
    await getPost(slug);

  return (
    <Box className='w-full'>
      <div className='w-full flex items-start'>
        <Link className='hover:underline' href='/'>
          ← Back
        </Link>
      </div>
      <Flex direction='column' gap='4' py='6'>
        <Flex justify='between' className=' items-center'>
          <Heading as='h1'>{title}</Heading>
          <Badge size='1' color={categoryColor} style={{ height: 20 }}>
            {categoryTitle}
          </Badge>
        </Flex>

        <Separator orientation='horizontal' size='4' />
      </Flex>

      {videoUrl && (
        <iframe
          className='py-4 h-[90vh]'
          src={videoUrl}
          allow='autoplay'
          height='90vh'
          width='100%'
          display='block'
        ></iframe>
      )}
      {description && <RichText description={description} />}
    </Box>
  );
}
