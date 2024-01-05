import React from 'react';
import cn from '@/lib/utils';

function TagsFilter({ tag, active = '' }: { active?: string; name: string }) {
  const { name = '' } = tag;
  return (
    <li>
      <button
        type='button'
        className={cn(
          'whitespace-nowrap rounded-lg px-4 py-2 font-medium',
          active === name
            ? 'bg-primary-100 text-primary-500'
            : 'btn-tertiary text-dark500_light500',
        )}
      >
        {name}
      </button>
    </li>
  );
}

TagsFilter.defaultProps = {
  active: '',
};

export default TagsFilter;
