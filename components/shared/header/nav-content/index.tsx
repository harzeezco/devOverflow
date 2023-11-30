import React from 'react';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { SheetClose } from '@/components/ui/sheet';
import cn from '@/lib/utils';

function NavContent() {
  const pathname = usePathname();

  return (
    <section className='flex h-full flex-col gap-4 pt-10'>
      {sidebarLinks.map((details) => {
        const isActive =
          (pathname.includes(details.route) && details.route.length > 1) ||
          pathname === details.route;

        return (
          <SheetClose asChild key={details.label}>
            <Link
              href={details.route}
              className={cn(
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900',
                'flex items-center justify-start gap-3 bg-transparent p-4',
              )}
            >
              <Image
                src={details.imgURL}
                alt={details.label}
                width={20}
                height={20}
                className={cn(isActive ? '' : 'invert-colors')}
              />
              <p className={cn(isActive ? 'base-bold' : 'base-medium')}>
                {details.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
}

export default NavContent;
