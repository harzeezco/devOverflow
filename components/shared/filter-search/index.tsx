'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import cn from '@/lib/utils';

const FILTERS = ['Newest', 'Recommended Questions', 'Frequent', 'Unanswered'];

function FilterSearch({
  filters,
  otherClasses,
  containerClasses,
}: {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
}) {
  return (
    <div className={cn('relative', containerClasses)}>
      <Select>
        <SelectTrigger
          className={cn(
            'body-regular light-border background-light800_dark300 border px-5 py-2.5',
            otherClasses,
          )}
        >
          <div className='line-clamp-1 flex-1 text-left'>
            <SelectValue placeholder='Select a filter' />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((details) => (
              <SelectItem key={details.name} value={details.value}>
                {details.value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

FilterSearch.defaultProps = {
  otherClasses: '',
  containerClasses: '',
};

export default FilterSearch;
