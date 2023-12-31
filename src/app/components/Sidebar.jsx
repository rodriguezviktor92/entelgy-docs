'use client';
import React from 'react';
import '@radix-ui/themes/styles.css';
import { Container, Text } from '@radix-ui/themes';
import { useData } from '../context/DataContext';

export function Sidebar({ categories }) {
  const { currentCategory, setCurrentCategory } = useData();

  return (
    <Container size='1' className=' w-[15rem]'>
      <aside className='h-screen border-r-[1px] border-gray-500/75'>
        <nav className='h-full flex flex-col shadow-sm pr-5'>
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
  const expanded = true;

  const { setPosts, originalPosts } = useData();

  function handlerCategory(category) {
    const initialValue = originalPosts.current;
    const currentCategoryLower = category.toLowerCase();

    if (category === currentCategory) {
      setPosts(initialValue);
      setCurrentCategory('');
    } else {
      const filteredData = initialValue.filter(({ category: { title } }) => {
        return title.toLowerCase() === currentCategoryLower;
      });

      setPosts(filteredData);
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
