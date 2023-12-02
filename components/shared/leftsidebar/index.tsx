'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { sidebarLinks } from '@/lib/data';
import cn from '@/lib/utils';

function LeftSideNav() {
  const pathname = usePathname();

  return (
    <aside className='background-light900_dark200 custom-scrollbar sticky z-10 flex h-screen flex-col gap-4 overflow-y-auto px-6 pb-8 pt-32 shadow-light-300 dark:shadow-none max-sm:hidden md:max-w-[266px]'>
      <div>
        {sidebarLinks.map((details) => {
          const isActive =
            (pathname.includes(details.route) && details.route.length > 1) ||
            pathname === details.route;

          return (
            <div key={details.label}>
              <Link
                href={details.route}
                className={cn(
                  isActive
                    ? 'primary-gradient rounded-lg text-light-900'
                    : 'text-dark300_light900',
                  'flex items-center justify-start gap-3 bg-transparent p-4 px-7 ',
                )}
              >
                <Image
                  src={details.imgURL}
                  alt={details.label}
                  width={20}
                  height={20}
                  className={cn(isActive ? '' : 'invert-colors')}
                />
                <p
                  className={
                    (cn(isActive ? 'font-bold' : 'font-medium'),
                    'max-lg:hidden')
                  }
                >
                  {details.label}
                </p>
              </Link>
            </div>
          );
        })}
      </div>

      <SignedOut>
        <div className='grid gap-3'>
          <Link href='/sign-in'>
            <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
              <Image
                src='/assets/icons/account.svg'
                alt='sign up'
                width={20}
                height={20}
                className='invert-colors lg:hidden'
              />
              <span className='primary-text-gradient max-lg:hidden'>
                Log In
              </span>
            </Button>
          </Link>
          <Link href='/sign-up'>
            <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
              <Image
                src='/assets/icons/sign-up.svg'
                alt='sign up'
                width={20}
                height={20}
                className='invert-colors lg:hidden'
              />
              <span className='primary-text-gradient  max-lg:hidden'>
                Sign up
              </span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </aside>
  );
}

export default LeftSideNav;
