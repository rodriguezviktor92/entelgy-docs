import Link from 'next/link';

export default function LayoutSlut({ children }) {
  return (
    <>
      {/* <div className='w-full flex items-start pt-6'>
        <Link className='hover:underline' href='/'>
          ← Home Page
        </Link>
      </div> */}
      {children}
    </>
  );
}
