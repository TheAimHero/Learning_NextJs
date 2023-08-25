import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <div className='font-ranga text-3xl'>404 - Page Not Found</div>
      <div className='font-roboto text-xl'>
        Try Going To <Link className='link' href={'/'}>Home Page</Link>
      </div>
    </div>
  );
}
