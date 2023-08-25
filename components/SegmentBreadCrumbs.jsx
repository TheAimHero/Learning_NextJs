import Link from 'next/link';
import React, { Fragment } from 'react';

export default function SegmentBreadCrumbs(props) {
  const { segments, startingSegment, segmentTitlesMap } = props;

  const title = segments[0].toUpperCase();
  const links = segments.map((segment, index) => {
    const href = startingSegment + '/' + segments.slice(0, index + 1).join('/');
    return (
      <Link href={href} key={index}>
        {title}
      </Link>
    );
  });

  return <Fragment>{links}</Fragment>;
}
