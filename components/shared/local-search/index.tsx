import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import cn from '@/lib/utils';

function LocalSearch({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}) {
  return (
    <div
      className={cn(
        'background-light800_darkgradient relative flex min-h-[50px] grow items-center gap-3 rounded-[10px] px-4 w-full',
        otherClasses,
      )}
    >
      {iconPosition === 'left' && (
        <Image
          src={imgSrc}
          alt='search'
          width={24}
          height={24}
          className='cursor-pointer'
        />
      )}
      <Input
        type='text'
        placeholder={placeholder}
        value=''
        className='paragraph-regular placeholder text-dark400_light700 background-light800_darkgradient no-focus border-none shadow-none outline-none'
      />

      {iconPosition === 'right' && (
        <Image
          src={imgSrc}
          alt='search icon'
          width={24}
          height={24}
          className='cursor-pointer'
        />
      )}
    </div>
  );
}

export default LocalSearch;
