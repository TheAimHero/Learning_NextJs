import React, { Suspense } from 'react';

function Loading() {
  return (
    <div className='mx-auto h-[350px] w-[300px] bg-slate-200 p-5'>
      Loading...
    </div>
  );
}

export default function Player({ embed }) {
  return (
    <div className='mx-auto h-[350px] w-[300px] p-5'>
      <Suspense fallback={<Loading />}>{embed}</Suspense>
    </div>
  );
}
