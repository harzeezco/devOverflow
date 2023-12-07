import Image from 'next/image';
import React from 'react';

const POPULAR_QUESTIONS = [
  {
    id: 0,
    title:
      'Would it be appropriate to point out an error in another paper during a referee report?',
  },
  {
    id: 1,
    title: 'How can an airconditioning machine exist?',
  },
  {
    id: 2,
    title: 'Interrogated every time crossing UK Border as citizen',
  },
  {
    id: 3,
    title: 'Low digit addition generator',
  },
  {
    id: 4,
    title: 'Low digit addition generator',
  },
];

const POPULAR_TAGS = [
  {
    id: 0,
    tag: 'Javascript',
    tagCount: '20152+',
  },
  {
    id: 1,
    tag: 'Next.js',
    tagCount: '18493+',
  },
  {
    id: 0,
    tag: 'React.js',
    tagCount: '16269+',
  },
  {
    id: 0,
    tag: 'Node.js',
    tagCount: '15121+',
  },
  {
    id: 0,
    tag: 'Python',
    tagCount: '14431+',
  },
  {
    id: 0,
    tag: 'Microsoft Azure',
    tagCount: '9429+',
  },
  {
    id: 0,
    tag: 'PostgreSql',
    tagCount: '9429+',
  },
  {
    id: 0,
    tag: 'Machine Learning',
    tagCount: '9429+',
  },
];

function RightSidebar() {
  return (
    <div className='background-light900_dark200 custom-scrollbar sticky inset-y-0 right-0 hidden h-screen max-w-[330px] flex-col gap-4 overflow-y-auto px-6 pt-32 shadow-light-300 dark:shadow-none lg:flex'>
      <div>
        <h2 className='text-dark400_light900 mb-3 font-inter text-xl font-bold'>
          Popular Questions
        </h2>
        <ul className='grid gap-4 pb-8'>
          {POPULAR_QUESTIONS.map((details) => (
            <li
              key={details.id}
              className='text-dark500_light700 line-clamp-1 flex items-center gap-3'
            >
              {details.title}
              <Image
                src='/assets/icons/chevron-right.svg'
                alt='right arrow'
                width={20}
                height={20}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className='text-dark400_light900 mb-3 font-inter text-xl font-bold'>
          Popular Tag
        </h2>
        <ul className='grid gap-4 pb-10'>
          {POPULAR_TAGS.map((details) => (
            <li className='flex items-center justify-between rounded-lg'>
              <button
                type='button'
                className='btn-tertiary text-dark500_light500 rounded-md px-3 py-2 text-sm font-medium'
              >
                {details.tag}
              </button>
              <span className='text-dark400_light700 text-sm'>
                {details.tagCount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RightSidebar;
