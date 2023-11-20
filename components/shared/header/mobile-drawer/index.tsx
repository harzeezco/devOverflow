import React from 'react';
import Image from 'next/image';
import { SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
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
        className='background-light900_dark200  border-none'
      >
        <Logo className='h2-bold text-dark100_light900 font-spaceGrotesk' />
        <SheetClose asChild>
          <NavContent />
        </SheetClose>

        <SignedOut>
          <div className='mt-1 flex flex-col gap-3'>
            <SheetClose asChild>
              <Link href='/sign-in'>
                <Button className='small-medium  btn-secondary min-h-[41px] w-full rounded-lg px-4 py-2'>
                  <span className='primary-text-gradient'>Log In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href='/sign-up'>
                <Button className='small-medium  btn-secondary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg border-2 px-4 py-3 shadow-none'>
                  <span>Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
}

export default MobileDrawer;
