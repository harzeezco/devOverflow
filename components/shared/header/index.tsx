import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Theme from '../theme';

function Header() {
  return (
    <header className='background-light900_dark200 fixed z-50 flex w-full justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12'>
      <Link href='/' className='flex-between gap-2'>
        <Image
          src='/assets/images/site-logo.svg'
          alt='devFlow'
          width={33}
          height={23}
        />
        <p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
          <span>Dev</span>
          <span className='text-primary-500'>Flow</span>
        </p>
      </Link>
      GlobalSearch
      <div className='flex-between gap-5'>
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              },
              variables: {
                colorPrimary: '#ff7000',
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
