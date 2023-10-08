'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

export const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData muts used within a provider');
  return context;
};

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const originalUsers = useRef([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results);
        originalUsers.current = res.results;
      });
  }, []);

  return (
    <DataContext.Provider value={{ users, setUsers, originalUsers }}>
      {children}
    </DataContext.Provider>
  );
};
