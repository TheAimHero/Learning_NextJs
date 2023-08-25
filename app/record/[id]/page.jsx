import React, { Fragment } from 'react';

import Player from './player.jsx';
import { RECORDS, RECORDS_MAP } from './data';

export async function generateStaticParams() {
  return RECORDS.map(record => ({
    id: record.id,
  }));
}

export default function Page(props) {
  const { params } = props;
  const { id } = params;
  const { date, blurb, Embed } = RECORDS_MAP[id];

  return (
    <Fragment>
      <div className={`text-justify`}>{blurb}</div>
      <span className='text-sm text-slate-600'>Release Date: {date}</span>
      <Player embed={<Embed />} />
    </Fragment>
  );
}
