import React, { Fragment } from 'react';
import Link from 'next/link';

import Player from './player.jsx';
import { RECORDS, RECORDS_MAP } from './data';

export async function generateMetadata({ params }) {
  const { id } = params;
  const { title } = RECORDS_MAP[id];
  return { title: `${title} - David Kando` };
}

export async function generateStaticParams() {
  return RECORDS.map(record => ({
    id: record.id,
  }));
}

export const dynamicParams = false;

export default function Page(props) {
  const { params } = props;
  const { id } = params;
  const { date, blurb, Embed } = RECORDS_MAP[id];

  return (
    <Fragment>
      <div className={`text-justify`}>{blurb}</div>
      <div className='text-sm text-slate-600'>Release Date: {date}</div>
      <div className='m-2 flex w-[144px] justify-between font-ranga text-2xl'>
        {/* prettier-ignore */}
        <Link href={`/record/${id}/lyrics`} className='link'>Lyrics</Link>
        {/* prettier-ignore */}
        <Link href={`/record/${id}/gear`} className='link'>Gear Used</Link>
      </div>
      <Player embed={<Embed />} />
    </Fragment>
  );
}
