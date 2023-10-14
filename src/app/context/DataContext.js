'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

export const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData muts used within a provider');
  return context;
};

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const originalPosts = useRef([]);

  useEffect(() => {
    fetch('https://entelgy-docs-cms.up.railway.app/api/posts/')
      .then(async (res) => await res.json())
      .then((res) => {
        setPosts(res.docs);
        originalPosts.current = res.docs;
      });
  }, []);

  return (
    <DataContext.Provider value={{ posts, setPosts, originalPosts }}>
      {children}
    </DataContext.Provider>
  );
};
