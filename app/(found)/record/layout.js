'use client';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

import LayoutStructure from '@/components/LayoutStructure';
import {
  RECORDS_MAP,
  RECORDS,
  findIdByPathname,
  SEGMENT_TITLES_MAP,
} from './[id]/data';
import SegmentBreadCrumbs from '@/components/SegmentBreadCrumbs';

export default function Layout(props) {
  const { children } = props;
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  const id = findIdByPathname(pathname);
  const { background, title } = RECORDS_MAP[id];

  return (
    <LayoutStructure
      title={<Link className="link" href={`/record/${id}/`}>{title}</Link>}
      background={background}
    >
      <div className='flex flex-col items-center'>{children}</div>
    </LayoutStructure>
  );
}
