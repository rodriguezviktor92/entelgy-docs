'use client';
import { Box, Container, Grid, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { Search } from './components/Search';
import { useState } from 'react';
import { useData } from './context/DataContext';
import { CardDocs } from './components/Card';

export default function Post() {
  const [searchValue, setSearchValue] = useState('');
  const { users } = useData();

  const filteredList = searchValue
    ? users.filter((user) => {
        return user.name.first
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      })
    : users;

  return (
    <Box className='w-full'>
      <Container className='items-start'>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </Container>
      {filteredList.length ? (
        <Grid
          columns='3'
          gap='6'
          pt='6'
          className='sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        >
          {filteredList.map(({ gender, email }, index) => (
            <CardDocs
              key={index}
              gender={gender}
              email={email}
              index={index}
            ></CardDocs>
          ))}
        </Grid>
      ) : (
        <div className='relative h-screen flex-col flex justify-center items-center'>
          <Text as='span' size='6' weight='bold'>
            {searchValue ? 'Post Not Found' : 'Loading...'}
          </Text>
        </div>
      )}
    </Box>
  );
}
