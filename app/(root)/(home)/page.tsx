import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/lib/filters';
import LocalSearch from '@/components/shared/local-search';
import FilterSearch from '@/components/shared/filter-search';
import Filters from '@/components/home/filter';
import NoResultFound from '@/components/shared/no-result-found';
import QuestionCard from '@/components/cards/question-card';

const Questions = [
  {
    id: '1',
    title: 'Cascading Deletes in  SQLAlchemy',
    tags: [
      { _id: '1', value: 'python' },
      { _id: '2', value: 'sql' },
    ],
    author: { _id: '1', name: 'John Doe', picture: 'john.png' },
    upvotes: '10',
    views: '100',
    answers: [],
    createdAt: new Date('2021-09-01T12:00:00.000Z'),
  },
  {
    id: '2',
    title: 'Cascading Deletes in  SQLAlchemy',
    tags: [
      { _id: '1', value: 'python' },
      { _id: '2', value: 'sql' },
    ],
    author: { _id: '1', name: 'John Doe', picture: 'john.png' },
    upvotes: '10',
    views: '100',
    answers: [],
    createdAt: new Date('2021-09-01T12:00:00.000Z'),
  },
  {
    id: '3',
    title: 'Cascading Deletes in  SQLAlchemy',
    tags: [
      { _id: '1', value: 'python' },
      { _id: '2', value: 'sql' },
    ],
    author: { _id: '1', name: 'John Doe', picture: 'john.png' },
    upvotes: '10',
    views: '100',
    answers: [],
    createdAt: new Date('2021-09-01T12:00:00.000Z'),
  },
];

export default function Home() {
  return (
    <div className=''>
      <div className='mb-5 flex w-full flex-col-reverse justify-between gap-4 overflow-y-auto sm:flex-row sm:items-center'>
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
      <div className='mt-10 flex w-full flex-col gap-6'>
        {Questions.length > 0 ? (
          Questions.map((details) => (
            <QuestionCard key={details.id} {...details} />
          ))
        ) : (
          <NoResultFound
            title='There’s no question to show'
            desc='Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡'
            link='/'
            linkTitle='Ask a Question'
          />
        )}
      </div>
    </div>
  );
}
