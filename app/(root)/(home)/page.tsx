import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/lib/filters';
import LocalSearch from '@/components/shared/local-search';
import FilterSearch from '@/components/shared/filter-search';
import Filters from '@/components/home/filter';

export default function Home() {
  return (
    <div>
      <div className='mb-5 flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>Ask Questions</h1>

        <Link href='/ask-question' className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-[46px] px-4 py-2 font-medium !text-light-900'>
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className='mt-11 grid w-full gap-5 sm:grid-cols-[1fr_auto] md:grid-cols-1'>
        <LocalSearch
          placeholder='Search for questions'
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          otherClasses='flex-1'
        />
        <FilterSearch
          filters={HomePageFilters}
          otherClasses='min-h-[56px] sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />

        <Filters />
      </div>
    </div>
  );
}
