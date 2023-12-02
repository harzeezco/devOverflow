import cn from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

function Metric({
  imgSrc,
  alt,
  value,
  href,
  textStyles,
  isAuthor,
  title,
}: {
  imgSrc: string;
  alt: string;
  value: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
  title: string;
}) {
  return (
    <div className='flex-center flex-wrap gap-1'>
      <Image
        src={imgSrc}
        alt={alt}
        width={16}
        height={16}
        className={cn('object-contain', href ? 'rounded-full' : '')}
      />
      <p className={cn(textStyles, 'flex items-center gap-1')}>
        {value}
        {title}
      </p>
    </div>
  );
}

Metric.defaultProps = {
  href: '',
  isAuthor: false,
  textStyles: '',
};

export default Metric;
