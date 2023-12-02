/* eslint-disable no-underscore-dangle */
import Filters from '@/components/home/filter';
import TagsFilter from '@/components/home/tags-filter';
import Metric from '@/components/shared/metric';
import Link from 'next/link';
import React from 'react';

type QuestionProps = {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: string;
  views: string;
  answers: Array<object>;
  createdAt: Date;
};

function QuestionCard({
  _id,
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
      imgSrc: '/assets/icons/like.svg',
      alt: 'Upvotes',
      title: 'votes',
      value: upvotes,
      textStyles: 'small-medium text-dark400_light800',
    },
    {
      imgSrc: '/assets/icons/message.svg',
      alt: 'message',
      title: 'Answers',
      value: String(answers.length),
      textStyles: 'small-medium text-dark400_light800',
    },
    {
      imgSrc: '/assets/icons/eye.svg',
      alt: 'eye',
      title: 'Views',
      value: views,
      textStyles: 'small-medium text-dark400_light800',
    },
  ];

  return (
    <div className='card-wrapper rounded-[10px] p-9 sm:px-11'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
        <div>
          <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>
            {String(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'>
              {title}
            </h3>
          </Link>
        </div>
      </div>

      <ul className='flex gap-4 items-center'>
        {tags.map((details) => (
          <TagsFilter key={details._id} {...details} />
        ))}
      </ul>

      <div className='flex-between mt-6 w-full flex-wrap gap-3'>
        {metrics.map((details) => (
          <Metric key={details.title} {...details} />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
