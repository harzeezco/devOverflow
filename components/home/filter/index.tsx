import { HomePageFilters } from '@/lib/filters';
import cn from '@/lib/utils';
import React from 'react';

function Filters() {
  const active = 'newest';

  return (
    <ul className='flex gap-4 max-md:hidden'>
      {HomePageFilters.map((details) => (
        <li key={details.name}>
          <button
            type='button'
            className={cn(
              'whitespace-nowrap rounded-lg px-4 py-2 font-medium',
              active === details.value
                ? 'bg-primary-100 text-primary-500'
                : 'btn-tertiary text-dark500_light500',
            )}
          >
            {details.value}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Filters;
