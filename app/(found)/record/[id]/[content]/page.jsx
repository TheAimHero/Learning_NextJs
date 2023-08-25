import React, { Fragment } from 'react';

import { RECORDS, CONTENT_PATHS, RECORDS_MAP } from '../data';
import Player from '../player';

export async function generateStaticParmas() {
  const recordSegmentMaps = [];

  RECORDS.map(record => {
    CONTENT_PATHS.forEach(contentPath => {
      recordSegmentMaps.push({ id: record.id, content: contentPath });
    });
  });

  return recordSegmentMaps;
}

export default function Page(props) {
  const { params } = props;
  const { id, content } = params;
  const { Embed, [content]: contentJsx } = RECORDS_MAP[id];

  return (
    <Fragment>
      <Player embed={<Embed />} />
      <br />
      {contentJsx}
    </Fragment>
  );
}
