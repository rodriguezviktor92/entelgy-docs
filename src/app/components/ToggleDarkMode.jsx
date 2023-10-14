'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Tooltip } from '@radix-ui/themes';

export function ToggleDarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className='flex justify-center'>
      {currentTheme === 'dark' ? (
        <Tooltip content='Light Mode'>
          <SunIcon
            onClick={() => setTheme('light')}
            className='cursor-pointer'
          />
        </Tooltip>
      ) : (
        <Tooltip content='Dark Mode'>
          <MoonIcon
            onClick={() => setTheme('dark')}
            className='cursor-pointer'
          />
        </Tooltip>
      )}
    </div>
  );
}
