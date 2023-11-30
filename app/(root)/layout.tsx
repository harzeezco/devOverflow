import Header from '@/components/shared/header';
import LeftSideNav from '@/components/shared/leftsidebar';
import RightSidebar from '@/components/shared/rightsidebar';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='background-light850_dark100 relative'>
      <Header />
      <main className='grid grid-cols-[auto_1fr_auto] gap-7'>
        <LeftSideNav />
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'>{children}</div>
        </section>
        <RightSidebar />
      </main>
      {/* Toast */}
    </div>
  );
}

export default Layout;
