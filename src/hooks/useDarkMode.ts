'use client';
import { useEffect } from 'react';

const useDarkMode = () => {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Apply theme based on the user's preference at first load
    if (darkModeMediaQuery.matches) {
      document.documentElement.classList.add('dark');
    }

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
};

export default useDarkMode;
