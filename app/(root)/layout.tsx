import Header from '@/components/shared/header';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='background-light850_dark100 relative'>
      <Header />
      <main>
        LeftSidebar
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'>{children}</div>
        </section>
        RightSidebar
      </main>
      Toast
    </div>
  );
}

export default Layout;
