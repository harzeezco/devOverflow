import React from 'react';
import cn from '@/lib/utils';

function TagsFilter({
  active = '',
  value = '',
}: {
  active?: String;
  value: String;
}) {
  return (
    <li>
      <button
        type='button'
        className={cn(
          'whitespace-nowrap rounded-lg px-4 py-2 font-medium',
          active === value
            ? 'bg-primary-100 text-primary-500'
            : 'btn-tertiary text-dark500_light500',
        )}
      >
        {value}
      </button>
    </li>
  );
}

TagsFilter.defaultProps = {
  active: '',
};

export default TagsFilter;
