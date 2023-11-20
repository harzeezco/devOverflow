'use client';

import { SheetClose } from '@/components/ui/sheet';
import { sidebarLinks } from '@/lib/data';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function NavContent() {
  const pathname = usePathname();

  return (
    <section className='flex flex-col gap-1 pt-8'>
      {sidebarLinks.map((details) => {
        const isActive =
          (pathname.includes(details.route) && details.route.length > 1)
          || pathname === details.route;

        return (
          <SheetClose asChild key={details.label}>
            <Link
              href={details.route}
              className={`${
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-3`}
            >
              <Image
                src={details.imgURL}
                alt={details.label}
                width={20}
                height={20}
              />
              <p>{details.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
}

export default NavContent;
