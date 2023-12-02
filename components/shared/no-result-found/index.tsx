import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ImageWrapper from '../image-wrapper';

function NoResultFound({
  title,
  desc,
  link,
  linkTitle,
}: {
  title: string;
  desc: string;
  link: string;
  linkTitle: string;
}) {
  return (
    <div className='mt-4 flex w-full flex-col items-center justify-center'>
      <ImageWrapper
        src='/assets/images/light-illustration.png'
        srcForDarkMode='/assets/images/dark-illustration.png'
        alt='no result illustration'
        width={270}
        height={270}
      />

      <h2 className='h2-bold text-dark200_light900 mt-7'>{title}</h2>
      <p className='body-regular text-dark500_light700 mt-5 max-w-md text-center'>
        {desc}
      </p>

      <Link href={link}>
        <Button className='paragraph-medium mt-5 min-h-[45px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900'>
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
}

export default NoResultFound;
