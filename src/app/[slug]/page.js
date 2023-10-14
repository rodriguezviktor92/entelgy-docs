import { Box } from '@radix-ui/themes';
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
    category: { title: categoryTitle },
  } = await res.json();

  return { videoUrl, description, title, categoryTitle };
}

export default async function Category({ params: { slug } }) {
  const { videoUrl, description, title, categoryTitle } = await getPost(slug);

  return (
    <Box className='w-full'>
      <div className='w-full flex items-start'>
        <Link className='hover:underline' href='/'>
          ← Back
        </Link>
      </div>
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
      <RichText description={description} />
    </Box>
  );
}
