import { HomePageFilters } from '@/lib/filters';
import React from 'react';
import TagsFilter from '../tags-filter';

function Filters() {
  const active = 'Newest';

  return (
    <ul className='flex gap-4 max-md:hidden'>
      {HomePageFilters.map((details) => (
        <TagsFilter key={details.value} active={active} tag={details} />
      ))}
    </ul>
  );
}

export default Filters;
