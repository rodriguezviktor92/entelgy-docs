'use client';
import React from 'react';
import '@radix-ui/themes/styles.css';
import { createContext, useState } from 'react';
import { Container, Text } from '@radix-ui/themes';
import { PinLeftIcon } from '@radix-ui/react-icons';
import { Search } from './Search';
import { useData } from '../context/DataContext';

// const SidebarContext = createContext();

export function Sidebar({ categories }) {
  const [expanded, setExpanded] = useState(true);
  const [currentCategory, setCurrentCategory] = useState('');

  return (
    <Container size='1' className=' w-[15rem]'>
      <div className='flex gap-2 justify-start'>
        <button className='p-1.5 rounded-lg'>
          <PinLeftIcon />
        </button>
        <Search />
      </div>

      <aside className='h-screen'>
        <nav className='h-full flex flex-col  shadow-sm pt-8'>
          <ul className='flex-1'>
            {categories.map((category, index) => (
              <SidebarItem
                key={index}
                text={category.title}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                alert
              />
            ))}
          </ul>
        </nav>
      </aside>
    </Container>
  );
}

export function SidebarItem({
  icon,
  text,
  currentCategory,
  setCurrentCategory,
  alert,
}) {
  // const { expanded } = useContext(SidebarContext);
  const expanded = true;

  const { setUsers, originalUsers } = useData();

  function handlerCategory(category) {
    const initialValue = originalUsers.current;
    const currentCategoryLower = category.toLowerCase();

    if (category === currentCategory) {
      setUsers(initialValue);
      setCurrentCategory('');
    } else {
      const filteredData = initialValue.filter((user) => {
        return user.gender.toLowerCase() === currentCategoryLower;
      });

      setUsers(filteredData);
      setCurrentCategory(category);
    }
  }

  return (
    <li
      onClick={() => handlerCategory(text)}
      className={`
        relative flex items-center py-2 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${currentCategory === text ? 'bg-gray-600' : 'hover:bg-gray-600'}
        `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-1.5' : 'w-0'
        }`}
      >
        <Text as='div' size='2' weight='bold'>
          {text}
        </Text>
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-slate-100 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
