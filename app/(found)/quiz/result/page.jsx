'use client';
import React, { Suspense } from 'react';
import { useSearchParams, notFound } from 'next/navigation';

import {
  getQuizResult,
  RESULT_MAP,
  CONCLUSION_PART_1,
  CONCLUSION_PART_2,
  CONCLUSION_PART_3,
} from '../data';
import Link from 'next/link';
import Spinner from '@/components/Spinner';

function Loading() {
  return (
    <div className='flex h-[352px] w-[356px] items-center justify-center rounded-lg bg-slate-300 sm:w-[904px]'>
      <Spinner />
    </div>
  );
}

export default function Page() {
  const serarchParams = useSearchParams();
  const selectionMap = {};
  serarchParams
    ?.toString()
    ?.split('&')
    ?.forEach(param => {
      const [key, value] = param.split('=');
      selectionMap[value] = selectionMap[value] ? selectionMap[value] + 1 : 1;
    });

  if (!selectionMap) {
    notFound();
  }
  const result = getQuizResult({ selectionMap });
  if (!result) {
    notFound();
  }
  const resultData = RESULT_MAP[result];
  if (!resultData) {
    notFound();
  }

  return (
    <div>
      {CONCLUSION_PART_1}
      {resultData.blurb}
      {CONCLUSION_PART_2}
      <br />
      <div className='h-[352px] w-[356px] sm:w-[904px] '>
        <Suspense fallback={<Spinner />}>
          <resultData.Embed />
        </Suspense>
      </div>
      <br />
      <div className='text-center'>
        <Link
          href={resultData.playlistLink}
          target='_blank'
          className='link font-ranga text-2xl'
        >
          Listen to the playlist
        </Link>
      </div>
      <br />
      {CONCLUSION_PART_3}
    </div>
  );
}
