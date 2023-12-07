import cn, { formatNumber } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
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
  value: number | string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
  title: string;
}) {
  const valueFormat = typeof value === 'string';

  const MetricContent = (
    <>
      <Image
        src={imgSrc}
        alt={alt}
        width={16}
        height={16}
        className={cn('object-contain', href ? 'rounded-full' : '')}
      />
      <p className={cn(textStyles, 'flex items-center gap-1')}>
        <span>{valueFormat ? value : formatNumber(value)}</span>

        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? 'max-sm:hidden' : ''
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className='flex-center gap-1'>
        {MetricContent}
      </Link>
    );
  }

  return <div className='flex-center flex-wrap gap-1'>{MetricContent}</div>;
}

Metric.defaultProps = {
  href: '',
  isAuthor: false,
  textStyles: '',
};

export default Metric;
