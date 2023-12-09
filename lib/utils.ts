/* eslint-disable no-underscore-dangle */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function metricsData(
  author: { name: string; _id: string },
  upvotes: number,
  answers: {}[],
  views: number,
) {
  return [
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
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
};

export const formatNumber = (num: number): string => {
  const absNum = Math.abs(num);
  if (absNum >= 1e6) {
    return `${num / 1e6}M`;
  }
  if (absNum >= 1e3) {
    return `${num / 1e3}K`;
  }
  return num.toString();
};
