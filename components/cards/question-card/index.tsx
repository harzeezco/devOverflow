/* eslint-disable no-underscore-dangle */
import TagsFilter from '@/components/home/tags-filter';
import Metric from '@/components/shared/metric';
import { getTimestamp } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type QuestionProps = {
  id: string;
  title: string;
  tags: {
    _id: string;
    value: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
};

function QuestionCard({
  id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) {
  const metrics = [
    {
      imgSrc: '/assets/icons/avatar.svg',
      alt: 'user',
      title: ' - asked 1 hour ago',
      value: author.name,
      href: `/profile/${author._id}`,
      textStyles: 'body-mediumv text-dark400_light700',
      isAuthor: true,
    },
    {
      imgSrc: '/assets/icons/like.svg',
      alt: 'Upvotes',
      title: 'votes',
      value: upvotes,
      href: '',
      textStyles: 'small-medium text-dark400_light800',
      isAuthor: false,
    },
    {
      imgSrc: '/assets/icons/message.svg',
      alt: 'message',
      title: 'Answers',
      value: answers.length,
      href: '',
      textStyles: 'small-medium text-dark400_light800',
      isAuthor: false,
    },
    {
      imgSrc: '/assets/icons/eye.svg',
      alt: 'eye',
      title: 'Views',
      value: views,
      href: '',
      textStyles: 'small-medium text-dark400_light800',
      isAuthor: false,
    },
  ];

  return (
    <div className='card-wrapper rounded-[10px] px-7 py-6 sm:px-5'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
        <div>
          <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${id}`}>
            <h3 className='sm:h3-semibold base-semibold text-dark200_light900 mb-3 line-clamp-1 flex-1'>
              {title}
            </h3>
          </Link>
        </div>
      </div>

      <ul className='flex items-center gap-4'>
        {tags.map((details) => (
          <TagsFilter key={details._id} {...details} />
        ))}
      </ul>

      <div className='flex-between mt-6 w-full gap-1'>
        {metrics.map((details) => (
          <Metric key={details.title} {...details} />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
