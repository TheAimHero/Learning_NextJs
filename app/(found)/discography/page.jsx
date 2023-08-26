'use client';

import React, { useEffect, useState, memo, useDeferredValue } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { RECORDS, RECORDS_MAP } from '@/app/(found)/record/[id]/data';
import PlayRow from '@/components/PlayRow';

function Records(props) {
  const { records } = props;

  if (records.length > 0) {
    return records.map(record => {
      const {
        id,
        title,
        blurb,
        date,
        albumImage,
        recordHalfImage,
        spotifyLink,
        appleMusicLink,
        youtubeMusicLink,
      } = record;

      return (
        <div
          key={id}
          className='m-4 w-[330px] bg-white p-3 sm:w-[500px] sm:p-8'
        >
          <Link
            href={`/record/${id}`}
            className='m-5 flex flex-row justify-center'
          >
            <div className='relative h-[180px] w-[180px] sm:h-[256px] sm:w-[256px]'>
              <Image
                src={albumImage}
                sizes='(max-width: 1024px) 90px, 128px'
                priority
                alt='Record Image'
                fill
              />
            </div>
            <div className='relative h-[180px] w-[90px] sm:h-[256px] sm:w-[128px]'>
              <Image
                src={recordHalfImage}
                fill
                alt='Record Image'
                sizes='(max-width: 1024px) 180px, 256px'
              />
            </div>
          </Link>
          <div className='flex w-full flex-col items-center justify-center'>
            <div className='font-ranga'>{title}</div>
            <div className='text-justify text-base sm:text-lg'>{blurb}</div>
            <div className='text-sm text-slate-600'>Release Date: {date}</div>
            <br />
            <PlayRow
              title='Spotify'
              href={spotifyLink}
              iconImage='/spotify_icon_500.png'
            />
            <PlayRow
              title='Apple Music'
              href={appleMusicLink}
              iconImage='/apple_music_icon_500.png'
            />
            <PlayRow
              title='Youtube'
              href={youtubeMusicLink}
              iconImage='/youtube_music_icon_500.png'
            />
          </div>
        </div>
      );
    });
  }

  return (
    <div className='m-4 flex w-[330px] justify-center bg-white p-3 sm:w-[500px] sm:p-8'>
      No Match
    </div>
  );
}

const MemoRecords = memo(Records);

export default function Page() {
  const [search, setSearch] = useState('');
  const [records, setRecords] = useState(RECORDS);
  const deferredSearch = useDeferredValue(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredRecords = RECORDS.filter(record => {
        return record.title
          .toLowerCase()
          .includes(deferredSearch.toLowerCase().trim());
      });
      setRecords(filteredRecords);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search, deferredSearch]);

  return (
    <div className='min-h-screen'>
      <div className='m-4 flex w-[330px] flex-col justify-center gap-4 bg-white p-3 sm:w-[500px] sm:p-8'>
        <div className='mb-2'>Search For Records</div>
        <input
          type='text'
          className='w-full rounded-md border-[2px] border-slate-200 p-1 focus:border-slate-500'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <MemoRecords records={records} />
    </div>
  );
}
