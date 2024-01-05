import React from 'react';
import TagsFilter from '@/components/home/tags-filter';
import Metric from '@/components/shared/metric';
import Link from 'next/link';
import { getTimestamp, metricsData } from '@/lib/utils';

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
details
}: QuestionProps) {
  const { id, title, tags, author, upvotes, views, answers, createdAt } = details;

  const getMetrics = metricsData(author, upvotes, answers, views);

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
        {tags?.map((tag) => <TagsFilter key={details._id} tag={tag} />)}
      </ul>

      <div className='flex-between mt-6 w-full gap-1'>
        {getMetrics.map((details) => (
          <Metric key={details.title} {...details} />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
