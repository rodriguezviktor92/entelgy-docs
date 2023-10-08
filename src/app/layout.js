import './globals.css';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import { Box, Container, Flex, Theme } from '@radix-ui/themes';
import { Header } from './components/Header';
import { Sidebar, SidebarItem } from '@/app/components/Sidebar';
import { Search } from './components/Search';
import { PinLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Theme appearance='dark'>
          <main className=' p-6'>
            <Header />
            <div
              className='w-full flex flex-col items-start mt-9 p-5'
              style={{
                background: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
              }}
            >
              <Flex width='100%' className='pt-4 gap-14'>
                <Container size='1' className=' max-w-[15rem]'>
                  <div className='flex gap-2 justify-start'>
                    <button className='p-1.5 rounded-lg'>
                      <PinLeftIcon />
                    </button>
                    <Search />
                  </div>
                </Container>
                <Container className='items-start'>
                  <div className='w-full flex items-start'>
                    <Link className='hover:underline' href='/'>
                      ← Back
                    </Link>
                  </div>
                  <Search />
                </Container>
              </Flex>
              <Flex width='100%' className='gap-14'>
                <Sidebar>
                  <SidebarItem text='Cells' alert />
                  <SidebarItem text='ASO & APX' alert />
                </Sidebar>
                {children}
              </Flex>
            </div>
          </main>
        </Theme>
      </body>
    </html>
  );
}
