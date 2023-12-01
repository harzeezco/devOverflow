'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedOut } from '@clerk/nextjs';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Logo from '../logo';
import NavContent from '../nav-content';

function MobileDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild className='cursor-pointer'>
        <Image
          src='/assets/icons/hamburger.svg'
          alt='Menu'
          width={30}
          height={30}
          className='invert-colors sm:hidden'
        />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='background-light900_dark200 custom-scrollbar overflow-y-auto border-none'
      >
        <Logo className='h2-bold text-dark100_light900 font-spaceGrotesk' />
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className='grid gap-3'>
              <SheetClose asChild>
                <Link href='/sign-in'>
                  <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                    <span className='primary-text-gradient '>Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href='/sign-upm'>
                  <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                    <span className='primary-text-gradient '>Sign up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileDrawer;
