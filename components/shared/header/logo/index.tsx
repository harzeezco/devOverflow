import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from '@/lib/utils';

function Logo({ className }: { className: string }) {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        src='/assets/images/logo.svg'
        alt='devFlow'
        width={33}
        height={23}
      />
      <p className={cn('h2-bold font-spaceGrotesk', className)}>
        <span>NewDev</span>
      </p>
    </Link>
  );
}

export default Logo;
