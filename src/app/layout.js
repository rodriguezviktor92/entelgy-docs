import './globals.css';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import { Flex, Theme } from '@radix-ui/themes';
import { Header } from './components/Header';
import { Sidebar } from '@/app/components/Sidebar';
import { DataProvider } from './context/DataContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Entelgy Docs',
  description: 'Generated by create next app',
};

const data = [
  // { id: 1, title: 'Cells' },
  // { id: 2, title: 'ASO & APX' },
  { id: 1, title: 'male' },
  { id: 2, title: 'female' },
];
export default function RootLayout({ children }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={inter.className}>
        <Theme appearance='dark'>
          <DataProvider>
            <main className=' p-6'>
              <Header />
              <div
                className='w-full flex items-start mt-9 p-5'
                style={{
                  background: 'var(--gray-a2)',
                  borderRadius: 'var(--radius-3)',
                }}
              >
                <Flex width='100%' className='gap-14'>
                  <Sidebar categories={data}></Sidebar>
                  {children}
                </Flex>
              </div>
            </main>
          </DataProvider>
        </Theme>
      </body>
    </html>
  );
}
