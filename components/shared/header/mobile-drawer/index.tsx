import React from 'react';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from '../logo';

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
        className='background-light900_dark200 border-none'
      >
        <Logo className='h2-bold text-dark100_light900 font-spaceGrotesk' />
      </SheetContent>
    </Sheet>
  );
}

export default MobileDrawer;
