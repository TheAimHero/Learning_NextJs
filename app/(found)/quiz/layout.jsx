import React from 'react';

import LayoutStructure from '@/components/LayoutStructure';

export const metadata = { title: 'Playlist Personality Quiz - David Kando' };

export default function Layout(props) {
  const { children } = props;

  return (
    <LayoutStructure
      background='bg-gradient-to-b from-slate-100 to-purple-100'
      title={'Playlist Personality Quiz'}
    >
      {children}
    </LayoutStructure>
  );
}
