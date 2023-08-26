import React from 'react';

import LayoutStructure from '@/components/LayoutStructure';

export default function Layout(props) {
  const { children } = props;
  return (
    <LayoutStructure
      title={'Discography'}
      background={'bg-gradient-to-b from-blue-100 to-pink-100'}
    >
      {children}
    </LayoutStructure>
  );
}
