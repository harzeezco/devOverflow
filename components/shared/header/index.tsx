import { SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react';
import Theme from '../theme';

import MobileDrawer from './mobile-drawer';
import Logo from './logo';
import GlobalSearch from '../search';

function Header() {
  return (
    <header className='background-light900_dark200 fixed z-50 flex w-full justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12'>
      <Logo className='text-dark-100 dark:text-light-900 max-sm:hidden' />
      <GlobalSearch />
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

        <MobileDrawer />
      </div>
    </header>
  );
}

export default Header;
