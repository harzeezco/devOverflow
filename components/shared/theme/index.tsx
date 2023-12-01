'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/theme-context';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { themes } from '@/lib/data';
import ImageWrapper from '../image-wrapper';

function Theme() {
  const themeState = useTheme();

  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'>
          <ImageWrapper
            src='/assets/icons/sun.svg'
            srcForDarkMode='/assets/icons/moon.svg'
            alt='mode switch icon'
            width={20}
            height={20}
            className='active-theme'
          />
        </MenubarTrigger>
        <MenubarContent className='absolute right-[-3rem] z-50 mt-3 min-w-[120px] rounded border bg-light-800 py-2 dark:border-dark-400 dark:bg-dark-300'>
          {themes.map((details) => (
            <MenubarItem
              key={details.value}
              className='flex cursor-pointer items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400'
              onClick={() => {
                themeState?.setTheme(details.value);

                if (details.value !== 'system') {
                  localStorage.theme = details.value;
                } else {
                  localStorage.removeItem('theme');
                }
              }}
            >
              <Image
                src={`/assets/icons${details.icon}`}
                alt={details.value}
                width={16}
                height={16}
                className={`${
                  themeState?.theme === details.value && 'active-theme'
                }`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  themeState?.theme === details.value
                    ? 'text-primary-500'
                    : 'text-dark100_light900'
                }`}
              >
                {details.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default Theme;
